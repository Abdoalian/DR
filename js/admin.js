document.addEventListener('DOMContentLoaded', async () => {
  // ----------------------------------------------------
  // 1. Authentication Gate (Firebase Auth or Local Storage Fallback)
  // ----------------------------------------------------
  const loginGate = document.getElementById('loginGate');
  const adminLayout = document.querySelector('.admin-layout');
  const loginForm = document.getElementById('loginForm');
  const loginError = document.getElementById('loginError');
  const logoutBtn = document.getElementById('logoutBtn');

  function showAdminPanel() {
    loginGate.style.display = 'none';
    adminLayout.style.display = 'grid'; // grid layout as styled in css
    // Load dashboard stats and data
    loadApplications();
    loadStartups();
    loadMentors();
    loadNews();
    loadMessages();
  }

  function showLoginGate() {
    loginGate.style.display = 'flex';
    adminLayout.style.display = 'none';
  }

  // Check auth state
  if (window.RwaqDB && window.RwaqDB.isOnline() && typeof firebase !== 'undefined') {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        showAdminPanel();
      } else {
        showLoginGate();
      }
    });
  } else {
    // Local fallback check
    if (sessionStorage.getItem('rwaq_admin_logged_in') === 'true') {
      showAdminPanel();
    } else {
      showLoginGate();
    }
  }

  // Login handler
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const email = document.getElementById('loginEmail').value.trim();
      const password = document.getElementById('loginPassword').value.trim();
      loginError.style.display = 'none';

      if (window.RwaqDB && window.RwaqDB.isOnline() && typeof firebase !== 'undefined') {
        try {
          await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (err) {
          loginError.innerText = 'خطأ في البريد الإلكتروني أو كلمة المرور: ' + err.message;
          loginError.style.display = 'block';
        }
      } else {
        // Localstorage fallback demo login
        if (email === 'admin@rwaq.com' && password === 'admin123') {
          sessionStorage.setItem('rwaq_admin_logged_in', 'true');
          showAdminPanel();
        } else {
          loginError.innerText = 'بيانات الدخول التجريبية غير صحيحة. يرجى مراجعة التعليمات أسفل النموذج.';
          loginError.style.display = 'block';
        }
      }
    });
  }

  // Logout handler
  if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
      if (window.RwaqDB && window.RwaqDB.isOnline() && typeof firebase !== 'undefined') {
        await firebase.auth().signOut();
      } else {
        sessionStorage.removeItem('rwaq_admin_logged_in');
      }
      showLoginGate();
    });
  }

  // ----------------------------------------------------
  // 2. Firebase Connection Status Badge
  // ----------------------------------------------------
  const statusBadge = document.getElementById('firebaseStatusBadge');
  const statusText = document.getElementById('firebaseStatusText');
  
  if (window.RwaqDB && window.RwaqDB.isOnline()) {
    statusBadge.className = 'firebase-badge firebase-online';
    statusText.innerText = 'متصل بـ Firebase Firestore سحابياً 🔥';
  } else {
    statusBadge.className = 'firebase-badge firebase-offline';
    statusText.innerText = 'وضع LocalStorage (جاهز للتوصيل بـ Firebase)';
  }

  // ----------------------------------------------------
  // 3. Admin Tab Navigation
  // ----------------------------------------------------
  const menuLinks = document.querySelectorAll('.admin-menu-item a');
  const tabPanes = {
    applications: document.getElementById('applicationsTab'),
    startups: document.getElementById('startupsTab'),
    mentors: document.getElementById('mentorsTab'),
    news: document.getElementById('newsTab'),
    messages: document.getElementById('messagesTab'),
    firebase: document.getElementById('firebaseTab')
  };

  const tabTitle = document.getElementById('tabTitle');
  const tabDesc = document.getElementById('tabDesc');

  menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = link.getAttribute('data-tab');

      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      Object.keys(tabPanes).forEach(paneKey => {
        if (tabPanes[paneKey]) {
          tabPanes[paneKey].style.display = paneKey === targetTab ? 'block' : 'none';
        }
      });

      // Update header labels dynamically
      const tabMeta = {
        applications: { title: 'طلبات التقديم للانضمام', desc: 'إدارة ومراجعة طلبات الابتكار الواردة من كليات جامعة الأزهر والمبتكرين' },
        startups: { title: 'إدارة المشروعات المحتضنة', desc: 'إضافة وتعديل وحذف الشركات المحتضنة المعروضة بدليل الموقع الرسمي' },
        mentors: { title: 'شبكة الموجهين والخبراء', desc: 'إدارة وتحديث قائمة الموجهين والمرشدين المشاركين في مسارات الاحتضان' },
        news: { title: 'الأخبار والفعاليات', desc: 'إدارة المعسكرات التدريبية والأخبار وورش العمل المنشورة على الموقع' },
        messages: { title: 'الرسائل الواردة', desc: 'استعراض رسائل الزوار والمبتكرين الواردة عبر نموذج تواصل معنا' },
        firebase: { title: 'إعدادات ربط Firebase', desc: 'إدخال واختبار مفاتيح مشروعك في قاعدة بيانات Firebase Firestore' }
      };

      if (tabMeta[targetTab]) {
        tabTitle.innerText = tabMeta[targetTab].title;
        tabDesc.innerText = tabMeta[targetTab].desc;
      }
    });
  });

  // ----------------------------------------------------
  // 4. Render Applications Data
  // ----------------------------------------------------
  async function loadApplications() {
    const tbody = document.getElementById('applicationsTableBody');
    if (!tbody) return;

    const apps = await window.RwaqDB.getApplications();
    
    // Update Stats
    document.getElementById('totalAppsCount').innerText = apps.length;
    document.getElementById('pendingAppsCount').innerText = apps.filter(a => a.status === 'pending').length;
    document.getElementById('approvedAppsCount').innerText = apps.filter(a => a.status === 'approved').length;

    if (apps.length === 0) {
      tbody.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 2rem; color: var(--text-muted);">لا توجد طلبات تقديم حالية.</td></tr>`;
      return;
    }

    tbody.innerHTML = apps.map(app => {
      let statusHtml = '<span class="status-badge status-pending">قيد المراجعة</span>';
      if (app.status === 'approved') statusHtml = '<span class="status-badge status-approved">مقبول</span>';
      if (app.status === 'rejected') statusHtml = '<span class="status-badge status-rejected">مرفوض</span>';

      return `
        <tr>
          <td>
            <strong>${app.name}</strong><br>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${app.email} | ${app.phone}</span>
          </td>
          <td>${app.college || 'غير محدد'}</td>
          <td><strong>${app.startupName}</strong></td>
          <td>${app.category || 'عام'}</td>
          <td>${statusHtml}</td>
          <td>
            <button class="btn btn-secondary btn-sm approve-btn" data-id="${app.id}" title="قبول الطلب"><i class="fas fa-check" style="color: var(--accent);"></i></button>
            <button class="btn btn-secondary btn-sm reject-btn" data-id="${app.id}" title="رفض الطلب"><i class="fas fa-times" style="color: var(--danger);"></i></button>
            <button class="btn btn-outline-danger btn-sm delete-app-btn" data-id="${app.id}" title="حذف الطلب"><i class="fas fa-trash"></i></button>
          </td>
        </tr>
      `;
    }).join('');

    // Attach Event Listeners for Actions
    document.querySelectorAll('.approve-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        await window.RwaqDB.updateApplicationStatus(id, 'approved');
        loadApplications();
      });
    });

    document.querySelectorAll('.reject-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-id');
        await window.RwaqDB.updateApplicationStatus(id, 'rejected');
        loadApplications();
      });
    });

    document.querySelectorAll('.delete-app-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (confirm('هل أنت متأكد من رغبتك في حذف هذا الطلب نهائياً؟')) {
          const id = btn.getAttribute('data-id');
          await window.RwaqDB.deleteApplication(id);
          loadApplications();
        }
      });
    });
  }

  // ----------------------------------------------------
  // 5. Render Startups Data
  // ----------------------------------------------------
  async function loadStartups() {
    const tbody = document.getElementById('startupsTableBody');
    if (!tbody) return;

    const startups = await window.RwaqDB.getStartups();
    document.getElementById('activeStartupsCount').innerText = startups.length;

    if (startups.length === 0) {
      tbody.innerHTML = `<tr><td colspan="5" style="text-align:center; padding: 2rem; color: var(--text-muted);">لا توجد شركات مسجلة.</td></tr>`;
      return;
    }

    tbody.innerHTML = startups.map(st => {
      const cycleInfo = st.cycle ? `${st.cycle} (${st.year || 'غير محدد'})` : (st.college || '-');
      return `
        <tr>
          <td><strong>${st.name}</strong></td>
          <td><span class="status-badge" style="background: rgba(79, 70, 229, 0.1); color: var(--primary); font-weight: 700;">${st.categoryTitle || st.category}</span></td>
          <td>${cycleInfo}</td>
          <td><span class="status-badge status-approved">${st.status || 'تحت الاحتضان'}</span></td>
          <td>
            <button class="btn btn-outline-danger btn-sm delete-st-btn" data-id="${st.id}"><i class="fas fa-trash"></i> حذف</button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.delete-st-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (confirm('هل ترغب بحذف هذه الشركة من دليل الموقع؟')) {
          const id = btn.getAttribute('data-id');
          await window.RwaqDB.deleteStartup(id);
          loadStartups();
        }
      });
    });
  }

  // Startup Modal Actions
  const addStartupModal = document.getElementById('addStartupModal');
  const addStartupBtn = document.getElementById('addStartupBtn');
  const closeStartupModal = document.getElementById('closeStartupModal');
  const newStartupForm = document.getElementById('newStartupForm');

  if (addStartupBtn) {
    addStartupBtn.addEventListener('click', () => {
      addStartupModal.classList.add('active');
    });
  }

  if (closeStartupModal) {
    closeStartupModal.addEventListener('click', () => {
      addStartupModal.classList.remove('active');
    });
  }

  if (newStartupForm) {
    newStartupForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('stName').value;
      const category = document.getElementById('stCategory').value;
      const cycle = document.getElementById('stCycle') ? document.getElementById('stCycle').value : 'دورة الاحتضان الثانية';
      const year = document.getElementById('stYear') ? document.getElementById('stYear').value : '2023';
      const college = document.getElementById('stCollege').value;
      const desc = document.getElementById('stDesc').value;

      const categoryTitles = {
        ai: 'الذكاء الاصطناعي وتكنولوجيا التعليم',
        health: 'التكنولوجيا الطبية والصحية',
        agri: 'الزراعة والتكنولوجيا البيئية',
        greentech: 'التدوير والتكنولوجيا الخضراء',
        crafts: 'الحرف والتراث وتدوير المخلفات',
        fintech: 'التكنولوجيا المالية'
      };

      const cycleFilters = {
        'دورة الاحتضان الثانية': 'cycle-2',
        'دورة الاحتضان الأولى': 'cycle-1',
        'دفعات 2019 - 2021': 'cycle-prev'
      };

      await window.RwaqDB.addStartup({
        name,
        category,
        categoryTitle: categoryTitles[category] || category,
        cycle,
        cycleFilter: cycleFilters[cycle] || 'cycle-2',
        year,
        college,
        desc,
        status: 'تحت الاحتضان'
      });

      addStartupModal.classList.remove('active');
      newStartupForm.reset();
      loadStartups();
    });
  }

  // ----------------------------------------------------
  // 6. Mentors Management Tab
  // ----------------------------------------------------
  const addMentorModal = document.getElementById('addMentorModal');
  const addMentorBtn = document.getElementById('addMentorBtn');
  const closeMentorModal = document.getElementById('closeMentorModal');
  const newMentorForm = document.getElementById('newMentorForm');

  if (addMentorBtn) {
    addMentorBtn.addEventListener('click', () => {
      addMentorModal.classList.add('active');
    });
  }
  if (closeMentorModal) {
    closeMentorModal.addEventListener('click', () => {
      addMentorModal.classList.remove('active');
    });
  }

  async function loadMentors() {
    const tbody = document.getElementById('mentorsTableBody');
    if (!tbody) return;

    const mentors = await window.RwaqDB.getMentors();

    if (mentors.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 2rem; color: var(--text-muted);">لا يوجد موجهون مسجلون.</td></tr>`;
      return;
    }

    tbody.innerHTML = mentors.map(m => {
      return `
        <tr>
          <td><strong>${m.name}</strong></td>
          <td>${m.title}</td>
          <td><span style="font-size:0.8rem; color:var(--primary); font-weight:600;">${m.tags}</span></td>
          <td>
            <button class="btn btn-outline-danger btn-sm delete-mentor-btn" data-id="${m.id}"><i class="fas fa-trash"></i> حذف</button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.delete-mentor-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (confirm('هل ترغب بحذف هذا الموجه من الشبكة؟')) {
          const id = btn.getAttribute('data-id');
          await window.RwaqDB.deleteMentor(id);
          loadMentors();
        }
      });
    });
  }

  if (newMentorForm) {
    newMentorForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('mName').value;
      const title = document.getElementById('mTitle').value;
      const tags = document.getElementById('mTags').value;
      const bio = document.getElementById('mBio').value;

      await window.RwaqDB.addMentor({ name, title, tags, bio });
      addMentorModal.classList.remove('active');
      newMentorForm.reset();
      loadMentors();
    });
  }

  // ----------------------------------------------------
  // 7. News/Events Management Tab
  // ----------------------------------------------------
  const addNewsModal = document.getElementById('addNewsModal');
  const addNewsBtn = document.getElementById('addNewsBtn');
  const closeNewsModal = document.getElementById('closeNewsModal');
  const newNewsForm = document.getElementById('newNewsForm');

  if (addNewsBtn) {
    addNewsBtn.addEventListener('click', () => {
      addNewsModal.classList.add('active');
    });
  }
  if (closeNewsModal) {
    closeNewsModal.addEventListener('click', () => {
      addNewsModal.classList.remove('active');
    });
  }

  async function loadNews() {
    const tbody = document.getElementById('newsTableBody');
    if (!tbody) return;

    const newsList = await window.RwaqDB.getNews();

    if (newsList.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 2rem; color: var(--text-muted);">لا توجد أخبار منشورة.</td></tr>`;
      return;
    }

    tbody.innerHTML = newsList.map(n => {
      return `
        <tr>
          <td><strong>${n.title}</strong></td>
          <td>${n.date}</td>
          <td><span style="font-size:0.85rem; color:var(--text-muted);">${n.summary.substring(0, 70)}...</span></td>
          <td>
            <button class="btn btn-outline-danger btn-sm delete-news-btn" data-id="${n.id}"><i class="fas fa-trash"></i> حذف</button>
          </td>
        </tr>
      `;
    }).join('');

    document.querySelectorAll('.delete-news-btn').forEach(btn => {
      btn.addEventListener('click', async () => {
        if (confirm('هل ترغب بحذف هذا الخبر نهائياً؟')) {
          const id = btn.getAttribute('data-id');
          await window.RwaqDB.deleteNews(id);
          loadNews();
        }
      });
    });
  }

  if (newNewsForm) {
    newNewsForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const title = document.getElementById('nTitle').value;
      const date = document.getElementById('nDate').value;
      const image = document.getElementById('nImage').value;
      const summary = document.getElementById('nSummary').value;

      await window.RwaqDB.addNews({ title, date, image, summary });
      addNewsModal.classList.remove('active');
      newNewsForm.reset();
      loadNews();
    });
  }

  // ----------------------------------------------------
  // 8. Contact Messages Inbox Tab
  // ----------------------------------------------------
  async function loadMessages() {
    const tbody = document.getElementById('messagesTableBody');
    if (!tbody) return;

    const messages = await window.RwaqDB.getContactMessages();

    if (messages.length === 0) {
      tbody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding: 2rem; color: var(--text-muted);">صندوق الرسائل الواردة فارغ.</td></tr>`;
      return;
    }

    tbody.innerHTML = messages.map(m => {
      const dateStr = new Date(m.timestamp).toLocaleString('ar-EG');
      return `
        <tr>
          <td>
            <strong>${m.name}</strong><br>
            <span style="font-size: 0.78rem; color: var(--text-muted);">${m.email}</span>
          </td>
          <td><strong>${m.subject}</strong></td>
          <td style="max-width: 300px; word-break: break-all;">${m.message}</td>
          <td><span style="font-size:0.8rem; color: var(--text-muted);">${dateStr}</span></td>
        </tr>
      `;
    }).join('');
  }

  // ----------------------------------------------------
  // 9. Firebase configuration submit
  // ----------------------------------------------------
  const fbForm = document.getElementById('firebaseSettingsForm');
  if (fbForm) {
    // Populate form with existing saved config if present
    const savedConfig = localStorage.getItem('rwaq_firebase_config');
    if (savedConfig) {
      try {
        const config = JSON.parse(savedConfig);
        document.getElementById('fbApiKey').value = config.apiKey || '';
        document.getElementById('fbAuthDomain').value = config.authDomain || '';
        document.getElementById('fbProjectId').value = config.projectId || '';
      } catch (err) {
        console.error(err);
      }
    }

    fbForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const apiKey = document.getElementById('fbApiKey').value.trim();
      const authDomain = document.getElementById('fbAuthDomain').value.trim();
      const projectId = document.getElementById('fbProjectId').value.trim();

      const config = {
        apiKey,
        authDomain,
        projectId,
        storageBucket: `${projectId}.appspot.com`,
        messagingSenderId: "1234567890",
        appId: `1:1234567890:web:${apiKey.substring(0, 10)}`
      };

      localStorage.setItem('rwaq_firebase_config', JSON.stringify(config));
      alert('تم حفظ إعدادات Firebase بنجاح! سيتم إعادة تحميل لوحة التحكم لاختبار الاتصال.');
      window.location.reload();
    });
  }

  // ----------------------------------------------------
  // 10. Export CSV
  // ----------------------------------------------------
  const exportCsvBtn = document.getElementById('exportCsvBtn');
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', async () => {
      const apps = await window.RwaqDB.getApplications();
      // Properly format CSV content with quote wrappers to prevent breakdown on commas/newlines
      let csvContent = "\uFEFF"; // UTF-8 BOM for Excel Arabic compatibility
      csvContent += "الاسم,البريد الالكتروني,رقم الهاتف,الكلية,اسم المشروع,المجال,الحالة\n";

      apps.forEach(a => {
        const cleanName = (a.name || '').replace(/"/g, '""');
        const cleanEmail = (a.email || '').replace(/"/g, '""');
        const cleanPhone = (a.phone || '').replace(/"/g, '""');
        const cleanCollege = (a.college || '').replace(/"/g, '""');
        const cleanStartupName = (a.startupName || '').replace(/"/g, '""');
        const cleanCategory = (a.category || '').replace(/"/g, '""');
        const cleanStatus = (a.status || '').replace(/"/g, '""');

        csvContent += `"${cleanName}","${cleanEmail}","${cleanPhone}","${cleanCollege}","${cleanStartupName}","${cleanCategory}","${cleanStatus}"\n`;
      });

      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", "rwaq_applications.csv");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }
});
