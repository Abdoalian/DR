// ====================================================
// RWAQ Incubator - Firebase Configuration & Sync Module
// ====================================================

// Paste your Firebase Web App Configuration here:
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "rwaq-incubator.firebaseapp.com",
  projectId: "rwaq-incubator",
  storageBucket: "rwaq-incubator.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

let db = null;
let auth = null;
let isFirebaseActive = false;

// Check if there is dynamic config saved in localStorage
const savedConfig = localStorage.getItem('rwaq_firebase_config');
if (savedConfig) {
  try {
    const customConfig = JSON.parse(savedConfig);
    Object.assign(firebaseConfig, customConfig);
  } catch (e) {
    console.error("Error parsing saved Firebase config:", e);
  }
}

// Initialize Firebase if CDN script is loaded & keys configured
if (typeof firebase !== 'undefined') {
  try {
    if (firebaseConfig.apiKey && firebaseConfig.apiKey !== "YOUR_API_KEY_HERE") {
      if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
      }
      db = firebase.firestore();
      auth = firebase.auth();
      isFirebaseActive = true;
      console.log("🔥 Firebase initialized successfully for RWAQ Incubator!");
    } else {
      console.warn("⚠️ Firebase keys are placeholder. Operating in local storage fallback mode.");
    }
  } catch (err) {
    console.error("Firebase init error:", err);
  }
}

// Global Storage Handler (Firebase + LocalStorage fallback)
window.RwaqDB = {
  isOnline: () => isFirebaseActive,
  
  // Applications CRUD
  async getApplications() {
    if (isFirebaseActive && db) {
      try {
        const snapshot = await db.collection("applications").orderBy("timestamp", "desc").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (e) {
        console.error("Firestore error:", e);
      }
    }
    const local = localStorage.getItem('rwaq_applications');
    return local ? JSON.parse(local) : [
      { id: 'app-1', name: 'أحمد محمود العبد', email: 'ahmed@azhar.edu.eg', phone: '01012345678', college: 'هندسة الأزهر', startupName: 'نظام دراية AI', category: 'ai', desc: 'مشروع حماية المحاصيل بالذكاء الاصطناعي', status: 'approved', timestamp: Date.now() - 86400000 },
      { id: 'app-2', name: 'مريم علي حسن', email: 'maryam@azhar.edu.eg', phone: '01123456789', college: 'طب بنات الأزهر', startupName: 'سند للرعاية الصحية', category: 'health', desc: 'جهاز محمول لمتابعة العلامات الحيوية', status: 'pending', timestamp: Date.now() - 43200000 },
      { id: 'app-3', name: 'عمر التميمي', email: 'omar@gmail.com', phone: '01298765432', college: 'زراعة الأزهر', startupName: 'أكوا فارم AquaFarm', category: 'agri', desc: 'أنظمة الزراعة المائية الذكية', status: 'approved', timestamp: Date.now() - 172800000 }
    ];
  },

  async addApplication(appData) {
    const dataWithMeta = {
      ...appData,
      status: 'pending',
      timestamp: Date.now()
    };

    if (isFirebaseActive && db) {
      try {
        const res = await db.collection("applications").add(dataWithMeta);
        return { id: res.id, ...dataWithMeta };
      } catch (e) {
        console.error("Firestore write error:", e);
      }
    }

    const apps = await this.getApplications();
    const newApp = { id: 'app-' + Date.now(), ...dataWithMeta };
    apps.unshift(newApp);
    localStorage.setItem('rwaq_applications', JSON.stringify(apps));
    return newApp;
  },

  async updateApplicationStatus(id, newStatus) {
    if (isFirebaseActive && db) {
      try {
        await db.collection("applications").doc(id).update({ status: newStatus });
        return true;
      } catch (e) {
        console.error("Firestore update error:", e);
      }
    }

    const apps = await this.getApplications();
    const idx = apps.findIndex(a => a.id === id);
    if (idx !== -1) {
      apps[idx].status = newStatus;
      localStorage.setItem('rwaq_applications', JSON.stringify(apps));
      return true;
    }
    return false;
  },

  async deleteApplication(id) {
    if (isFirebaseActive && db) {
      try {
        await db.collection("applications").doc(id).delete();
        return true;
      } catch (e) {
        console.error("Firestore delete error:", e);
      }
    }

    let apps = await this.getApplications();
    apps = apps.filter(a => a.id !== id);
    localStorage.setItem('rwaq_applications', JSON.stringify(apps));
    return true;
  },

  // Startups CRUD
  async getStartups() {
    if (isFirebaseActive && db) {
      try {
        const snapshot = await db.collection("startups").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (e) {
        console.error(e);
      }
    }
    const local = localStorage.getItem('rwaq_startups');
    return local ? JSON.parse(local) : [
      { id: 's-1', name: 'نظام دراية AI', category: 'ai', categoryTitle: 'الذكاء الاصطناعي', desc: 'منصة ذكاء اصطناعي لتحليل البيانات الزراعية والتنبؤ بآفات المحاصيل.', college: 'كلية الهندسة', status: 'تم التخرج 2025' },
      { id: 's-2', name: 'سند للرعاية الصحية', category: 'health', categoryTitle: 'التكنولوجيا الطبية', desc: 'جهاز محمول مدمج بتطبيق ذكي لإدارة ومتابعة المؤشرات الحيوية.', college: 'كلية الطب', status: 'تحت الاحتضان' },
      { id: 's-3', name: 'أكوا فارم AquaFarm', category: 'agri', categoryTitle: 'الزراعة الذكية', desc: 'أنظمة هيدروبونيكس مدمجة بأجهزة مستشعرات إنترنت الأشياء.', college: 'كلية الزراعة', status: 'تم التخرج 2024' }
    ];
  },

  async addStartup(startupData) {
    if (isFirebaseActive && db) {
      try {
        const res = await db.collection("startups").add(startupData);
        return { id: res.id, ...startupData };
      } catch (e) {
        console.error(e);
      }
    }
    const startups = await this.getStartups();
    const newStartup = { id: 's-' + Date.now(), ...startupData };
    startups.unshift(newStartup);
    localStorage.setItem('rwaq_startups', JSON.stringify(startups));
    return newStartup;
  },

  async deleteStartup(id) {
    if (isFirebaseActive && db) {
      try {
        await db.collection("startups").doc(id).delete();
        return true;
      } catch (e) {
        console.error(e);
      }
    }
    let startups = await this.getStartups();
    startups = startups.filter(s => s.id !== id);
    localStorage.setItem('rwaq_startups', JSON.stringify(startups));
    return true;
  },

  // Mentors CRUD
  async getMentors() {
    if (isFirebaseActive && db) {
      try {
        const snapshot = await db.collection("mentors").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (e) {
        console.error(e);
      }
    }
    const local = localStorage.getItem('rwaq_mentors');
    return local ? JSON.parse(local) : [
      { id: 'm-1', name: 'د. أحمد عبد الفتاح', title: 'استشاري التمويل والجولات الاستثمارية', bio: 'خبير في تقييم الشركات الناشئة وجاهزية الاستثمار مع أكثر من 15 عاماً من الخبرة في صناديق رأس المال المخاطر VC.', tags: 'Venture Capital, Valuation, Fintech' },
      { id: 'm-2', name: 'أ.د. فاطمة الزهراء', title: 'أستاذة هندسة البرمجيات والذكاء الاصطناعي', bio: 'مشرفة على معامل الأبحاث المتقدمة بالجامعة ومستشارة تطوير المنتجات الرقمية والأنظمة الذكية.', tags: 'AI & ML, Architecture, R&D' },
      { id: 'm-3', name: 'م. محمود الشريف', title: 'مستشار الملكية الفكرية وتأسيس الشركات', bio: 'متخصص في تسجيل براءات الاختراع والعقود الاستثمارية وصياغة اتفاقيات الشركاء للمؤسسين.', tags: 'IP & Patents, Legal, Corporate' },
      { id: 'm-4', name: 'م. سارة جلال', title: 'خبيرة نمو وتسويق رقمي (Growth Hacking)', bio: 'ساعدت أكثر من 20 شركة ناشئة في الوصول للعملاء الأولين وتحقيق معدلات نمو وتوسع في السوق.', tags: 'Growth, GTM Strategy, Marketing' }
    ];
  },

  async addMentor(mentorData) {
    if (isFirebaseActive && db) {
      try {
        const res = await db.collection("mentors").add(mentorData);
        return { id: res.id, ...mentorData };
      } catch (e) {
        console.error(e);
      }
    }
    const mentors = await this.getMentors();
    const newMentor = { id: 'm-' + Date.now(), ...mentorData };
    mentors.unshift(newMentor);
    localStorage.setItem('rwaq_mentors', JSON.stringify(mentors));
    return newMentor;
  },

  async deleteMentor(id) {
    if (isFirebaseActive && db) {
      try {
        await db.collection("mentors").doc(id).delete();
        return true;
      } catch (e) {
        console.error(e);
      }
    }
    let mentors = await this.getMentors();
    mentors = mentors.filter(m => m.id !== id);
    localStorage.setItem('rwaq_mentors', JSON.stringify(mentors));
    return true;
  },

  // News & Events CRUD
  async getNews() {
    if (isFirebaseActive && db) {
      try {
        const snapshot = await db.collection("news").orderBy("date", "desc").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (e) {
        console.error(e);
      }
    }
    const local = localStorage.getItem('rwaq_news');
    return local ? JSON.parse(local) : [
      { id: 'n-1', title: 'انطلاق فعاليات يوم عرض المشروعات Demo Day للدفعة الجديدة', date: '2026-08-26', summary: 'استعرضت 12 شركة ناشئة محتضنة حلولها التكنولوجية أمام عدد من كبار المستثمرين وصناديق الاستثمار الجريء.', image: 'images/event.png' },
      { id: 'n-2', title: 'تطوير وتحديث معامل التصنيع السريع والميكروسكوبات الرقمية', date: '2026-08-18', summary: 'توفير معدات نمذجة جديدة ثلاثية الأبعاد لدعم المشروعات الهندسية والطبية بجامعة الأزهر.', image: 'images/tech_lab.png' },
      { id: 'n-3', title: 'ورشة عمل مكثفة حول دراسات الجدوى والنمو المالي', date: '2026-08-10', summary: 'جلسة تفاعلية بحضور خبراء الادارة المالية لتدريب الفرق على التوقعات المالية ومؤشرات الأداء الرئيسية KPIs.', image: 'images/coworking.png' }
    ];
  },

  async addNews(newsData) {
    if (isFirebaseActive && db) {
      try {
        const res = await db.collection("news").add(newsData);
        return { id: res.id, ...newsData };
      } catch (e) {
        console.error(e);
      }
    }
    const news = await this.getNews();
    const newNews = { id: 'n-' + Date.now(), ...newsData };
    news.unshift(newNews);
    localStorage.setItem('rwaq_news', JSON.stringify(news));
    return newNews;
  },

  async deleteNews(id) {
    if (isFirebaseActive && db) {
      try {
        await db.collection("news").doc(id).delete();
        return true;
      } catch (e) {
        console.error(e);
      }
    }
    let news = await this.getNews();
    news = news.filter(n => n.id !== id);
    localStorage.setItem('rwaq_news', JSON.stringify(news));
    return true;
  },

  // Contact Message
  async addContactMessage(msgData) {
    const dataWithMeta = {
      ...msgData,
      timestamp: Date.now()
    };
    if (isFirebaseActive && db) {
      try {
        await db.collection("messages").add(dataWithMeta);
        return true;
      } catch (e) {
        console.error("Firestore message write error:", e);
      }
    }
    const local = localStorage.getItem('rwaq_messages');
    const messages = local ? JSON.parse(local) : [];
    messages.unshift(dataWithMeta);
    localStorage.setItem('rwaq_messages', JSON.stringify(messages));
    return true;
  },

  async getContactMessages() {
    if (isFirebaseActive && db) {
      try {
        const snapshot = await db.collection("messages").orderBy("timestamp", "desc").get();
        return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      } catch (e) {
        console.error("Firestore message read error:", e);
      }
    }
    const local = localStorage.getItem('rwaq_messages');
    return local ? JSON.parse(local) : [];
  }
};
