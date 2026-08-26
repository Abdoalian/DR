document.addEventListener('DOMContentLoaded', async () => {
  // Sticky Navbar background change on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Highlight current active link in header nav
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinksList = document.querySelectorAll('.nav-links a');
  navLinksList.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
    } else if (!href.includes('#')) {
      link.classList.remove('active');
    }
  });

  // Mobile Menu Toggle using active CSS classes for smooth transition
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      const icon = menuToggle.querySelector('i');
      if (icon) {
        if (navLinks.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-bars';
        }
      }
    });
  }

  // Modal Functionality
  const modalOverlay = document.getElementById('appModal');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const closeModalBtn = document.getElementById('closeModal');
  const appForm = document.getElementById('incubationForm');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modalOverlay) {
        modalOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  // Application Form Submission (integrated with Firebase / RwaqDB)
  if (appForm) {
    appForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Robust input parsing by field traits rather than numerical index
      const nameInput = appForm.querySelector('input[placeholder*="اسمك"]');
      const emailInput = appForm.querySelector('input[type="email"]');
      const phoneInput = appForm.querySelector('input[type="tel"]');
      const collegeInput = appForm.querySelector('input[placeholder*="مثل:"]');
      const startupNameInput = appForm.querySelector('input[placeholder*="المشروع"]');
      const categorySelect = appForm.querySelector('select');
      const descTextarea = appForm.querySelector('textarea');

      const formData = {
        name: nameInput ? nameInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        phone: phoneInput ? phoneInput.value.trim() : '',
        college: collegeInput ? collegeInput.value.trim() : '',
        startupName: startupNameInput ? startupNameInput.value.trim() : '',
        category: categorySelect ? categorySelect.value : 'other',
        desc: descTextarea ? descTextarea.value.trim() : ''
      };

      const submitBtn = appForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري إرسال الطلب...';
      submitBtn.disabled = true;

      if (window.RwaqDB) {
        await window.RwaqDB.addApplication(formData);
      }

      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      closeModal();
      showToast('تم إرسال طلبك بنجاح! تم تسجيله في نظام حاضنة رواق وسيتواصل معك الفريق قريبًا.');
      appForm.reset();
    });
  }

  // Contact Form Submission (integrated with RwaqDB)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nameInput = contactForm.querySelector('input[placeholder*="اسمك"]');
      const emailInput = contactForm.querySelector('input[type="email"]');
      const subjectInput = contactForm.querySelector('input[placeholder*="موضوع"]');
      const messageTextarea = contactForm.querySelector('textarea');

      const formData = {
        name: nameInput ? nameInput.value.trim() : '',
        email: emailInput ? emailInput.value.trim() : '',
        subject: subjectInput ? subjectInput.value.trim() : '',
        message: messageTextarea ? messageTextarea.value.trim() : ''
      };

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري الإرسال...';
      submitBtn.disabled = true;

      if (window.RwaqDB) {
        await window.RwaqDB.addContactMessage(formData);
      }

      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;

      showToast('شكراً لتواصلك! تم استلام رسالتك وسنرد عليك في أقرب وقت.');
      contactForm.reset();
    });
  }

  // Toast Functionality
  function showToast(message) {
    let toast = document.getElementById('toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast';
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4500);
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');
        faqItems.forEach(i => i.classList.remove('active'));
        if (!isOpen) {
          item.classList.add('active');
        }
      });
    }
  });

  // Animated Counter on Scroll
  const counters = document.querySelectorAll('.counter');
  let animated = false;

  function animateCounters() {
    const heroStats = document.querySelector('.hero-stats-row');
    if (!heroStats || animated) return;

    const rect = heroStats.getBoundingClientRect();
    if (rect.top <= window.innerHeight) {
      animated = true;
      counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        let count = 0;
        const speed = target / 50;

        const updateCount = () => {
          count += speed;
          if (count < target) {
            counter.innerText = Math.ceil(count);
            setTimeout(updateCount, 25);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    }
  }

  window.addEventListener('scroll', animateCounters);
  animateCounters();

  // Helper mapping for startup categories
  const getCategoryDetails = (category) => {
    switch(category) {
      case 'ai':
        return { icon: 'fas fa-brain', color: '#4F46E5', bg: 'rgba(79, 70, 229, 0.1)' };
      case 'health':
        return { icon: 'fas fa-heart-pulse', color: '#EC4899', bg: 'rgba(236, 72, 153, 0.1)' };
      case 'agri':
        return { icon: 'fas fa-seedling', color: '#10B981', bg: 'rgba(16, 185, 129, 0.1)' };
      case 'fintech':
        return { icon: 'fas fa-coins', color: '#F59E0B', bg: 'rgba(245, 158, 11, 0.1)' };
      default:
        return { icon: 'fas fa-rocket', color: '#7C3AED', bg: 'rgba(124, 58, 237, 0.1)' };
    }
  };

  // ----------------------------------------------------
  // Dynamic Startups Rendering for Public Pages
  // ----------------------------------------------------
  async function renderStartupsPublic() {
    const startupsContainer = document.getElementById('startupsContainer');
    const homepageStartupsGrid = document.querySelector('#startups .startups-grid');

    if (!window.RwaqDB) return;

    const startups = await window.RwaqDB.getStartups();
    if (!startups) return;

    const createCardHtml = (st, index) => {
      const details = getCategoryDetails(st.category);
      const isGraduated = st.status.includes('تخرج') || st.status.includes('خريج') || st.status.includes('متخرج');
      const statusIcon = isGraduated ? 'fa-check-circle' : 'fa-seedling';
      const statusColor = isGraduated ? 'var(--accent)' : 'var(--primary)';
      const delayClass = `delay-${((index % 4) + 1) * 100}`;

      return `
        <div class="startup-card reveal-on-scroll hover-lift ${delayClass}" data-category="${st.category}">
          <div class="startup-header">
            <div class="startup-logo" style="color: ${details.color};"><i class="${details.icon}"></i></div>
            <span class="startup-tag" style="background: ${details.bg}; color: ${details.color};">${st.categoryTitle || st.category}</span>
          </div>
          <div class="startup-body">
            <h3 class="startup-name">${st.name}</h3>
            <p class="startup-desc">${st.desc}</p>
            <div class="startup-meta">
              <span><i class="fas fa-user-graduate"></i> ${st.college}</span>
              <span><i class="fas ${statusIcon}" style="color: ${statusColor};"></i> ${st.status}</span>
            </div>
          </div>
        </div>
      `;
    };

    if (startupsContainer) {
      if (startups.length === 0) {
        startupsContainer.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">لا توجد شركات مسجلة حالياً.</div>`;
      } else {
        startupsContainer.innerHTML = startups.map((st, idx) => createCardHtml(st, idx)).join('');
      }
    }

    if (homepageStartupsGrid) {
      const topStartups = startups.slice(0, 3);
      if (topStartups.length === 0) {
        homepageStartupsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">لا توجد شركات مسجلة حالياً.</div>`;
      } else {
        homepageStartupsGrid.innerHTML = topStartups.map((st, idx) => createCardHtml(st, idx)).join('');
      }
    }

    // Attach filter operations dynamically
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterValue = btn.getAttribute('data-filter');
        const cards = document.querySelectorAll('.startup-card');

        cards.forEach(card => {
          if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });

    // Attach search operations dynamically
    const startupSearch = document.getElementById('startupSearch');
    if (startupSearch) {
      startupSearch.addEventListener('input', (e) => {
        const searchTerm = e.target.value.trim().toLowerCase();
        const cards = document.querySelectorAll('.startup-card');
        
        cards.forEach(card => {
          const text = card.textContent.toLowerCase();
          if (text.includes(searchTerm)) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    }
  }

  // ----------------------------------------------------
  // Dynamic Mentors Rendering for Public Page
  // ----------------------------------------------------
  async function renderMentorsPublic() {
    const mentorsGrid = document.querySelector('.mentors-grid');
    if (!mentorsGrid || !window.RwaqDB) return;

    const mentors = await window.RwaqDB.getMentors();
    if (mentors.length === 0) {
      mentorsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">لا توجد بيانات موجهين حالياً.</div>`;
      return;
    }

    mentorsGrid.innerHTML = mentors.map((m, idx) => {
      const tagsHtml = m.tags.split(',').map(tag => `<span class="mentor-tag">${tag.trim()}</span>`).join('');
      const delayClass = `delay-${((idx % 4) + 1) * 100}`;
      return `
        <div class="mentor-card reveal-on-scroll hover-lift ${delayClass}">
          <div class="mentor-header">
            <div class="mentor-avatar"><i class="fas fa-user-tie"></i></div>
            <div>
              <h3 class="mentor-name">${m.name}</h3>
              <span class="mentor-title">${m.title}</span>
            </div>
          </div>
          <div class="mentor-body">
            <p>${m.bio}</p>
            <div class="mentor-tags">
              ${tagsHtml}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  // ----------------------------------------------------
  // Dynamic News Rendering for Public Page
  // ----------------------------------------------------
  async function renderNewsPublic() {
    const newsGrid = document.getElementById('newsGridContainer');
    if (!newsGrid || !window.RwaqDB) return;

    const newsList = await window.RwaqDB.getNews();
    if (newsList.length === 0) {
      newsGrid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">لا توجد أخبار أو فعاليات منشورة حالياً.</div>`;
      return;
    }

    newsGrid.innerHTML = newsList.map((n, idx) => {
      const formattedDate = new Date(n.date).toLocaleDateString('ar-EG', { year: 'numeric', month: 'long', day: 'numeric' });
      const delayClass = `delay-${((idx % 3) + 1) * 100}`;
      return `
        <div class="startup-card reveal-on-scroll hover-lift ${delayClass}">
          <div style="height: 200px; overflow: hidden; background: #EEF2F6; display: flex; align-items: center; justify-content: center;">
            <img src="${n.image || 'event.png'}" alt="${n.title}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.src='event.png'">
          </div>
          <div class="startup-body">
            <span style="font-size: 0.8rem; color: var(--primary); font-weight: 700;">${formattedDate}</span>
            <h3 class="startup-name" style="margin-top: 0.4rem;">${n.title}</h3>
            <p class="startup-desc">${n.summary}</p>
            <a href="#" class="pillar-link">قراءة الخبر كاملاً <i class="fas fa-arrow-left"></i></a>
          </div>
        </div>
      `;
    }).join('');
  }

  // Initialize public pages data rendering
  await renderStartupsPublic();
  await renderMentorsPublic();
  await renderNewsPublic();

  // ----------------------------------------------------
  // Scroll-Triggered Reveal Animations using IntersectionObserver
  // ----------------------------------------------------
  const revealElements = document.querySelectorAll(
    '.reveal-on-scroll, .reveal-fade, .reveal-slide-left, .reveal-slide-right, .reveal-zoom'
  );
  
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px'
    });
    
    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('animated'));
  }

  // Mouse move effect for hover-glow elements to track cursor coordinates
  document.querySelectorAll('.hover-glow').forEach(el => {
    el.addEventListener('mousemove', e => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--mouse-x', `${x}px`);
      el.style.setProperty('--mouse-y', `${y}px`);
    });
  });
});
