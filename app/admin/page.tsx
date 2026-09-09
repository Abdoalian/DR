'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

interface Application {
  id: string;
  name: string;
  email: string;
  phone: string;
  faculty: string;
  project: string;
  category: string;
  summary: string;
  status: 'قيد المراجعة' | 'مقبول' | 'مرفوض';
  date: string;
}

interface StartupItem {
  id: string;
  name: string;
  category: string;
  cycle: string;
  status: string;
}

interface MentorItem {
  id: string;
  name: string;
  title: string;
  specialty: string;
}

interface NewsAdminItem {
  id: string;
  title: string;
  date: string;
  summary: string;
}

interface MessageItem {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  date: string;
}

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [activeTab, setActiveTab] = useState<'applications' | 'startups' | 'mentors' | 'news' | 'messages' | 'firebase'>('applications');

  // Applications state
  const [applications, setApplications] = useState<Application[]>([
    {
      id: 'app-1',
      name: 'أحمد محمود سليمان',
      email: 'ahmed@gmail.com',
      phone: '01012345678',
      faculty: 'هندسة النظم والحاسبات - بنين القاهرة',
      project: 'نبض - التشخيص المبكر باعتلال الشبكية السكري',
      category: 'التكنولوجيا الطبية والصحية',
      summary: 'نظام تشخيص بالذكاء الاصطناعي لفحص صور قاع العين وكشف الاعتلال السكري في المراحل المبكرة.',
      status: 'قيد المراجعة',
      date: '2026/08/29',
    },
    {
      id: 'app-2',
      name: 'سارة خالد الدسوقي',
      email: 'sara.khalid@outlook.com',
      phone: '01198765432',
      faculty: 'الزراعة - جامعة الأزهر',
      project: 'أجري تيك - الاستشعار الذكي للتربة',
      category: 'الزراعة والتكنولوجيا البيئية',
      summary: 'مجسات إنترنت الأشياء لمراقبة ملوحة التربة والرطوبة وتوفير 40% من مياه الري.',
      status: 'مقبول',
      date: '2026/08/25',
    },
    {
      id: 'app-3',
      name: 'محمود عبد الرازق',
      email: 'm.razek@yahoo.com',
      phone: '01234567890',
      faculty: 'الصيدلة - بنين أسيوط',
      project: 'فارما نانو - كبسولات دوائية موجهة',
      category: 'تكنولوجيا النانو والصيدلة',
      summary: 'تقنية نانوية لزيادة كفاءة امتصاص الأدوية المضادة للأورام وتقليل الأعراض الجانبية.',
      status: 'قيد المراجعة',
      date: '2026/08/20',
    },
  ]);

  // Startups state
  const [startups, setStartups] = useState<StartupItem[]>([
    { id: '1', name: 'Al-Farabi Biotech', category: 'الزراعة والتكنولوجيا البيئية', cycle: 'دورة الاحتضان الثانية (2023)', status: 'نشطة ومحتضنة' },
    { id: '2', name: 'GreenPave Solutions', category: 'التدوير والتكنولوجيا الخضراء', cycle: 'دورة الاحتضان الثانية (2023)', status: 'نشطة ومحتضنة' },
    { id: '3', name: 'CurvTech Engineering', category: 'الذكاء الاصطناعي والبرمجيات', cycle: 'دورة الاحتضان الأولى (2022)', status: 'شركة متخرجة' },
    { id: '4', name: 'MedPulse Diagnostic', category: 'التكنولوجيا الطبية والصحية', cycle: 'دورة الاحتضان الثانية (2023)', status: 'نشطة ومحتضنة' },
  ]);

  // Mentors state
  const [mentors, setMentors] = useState<MentorItem[]>([
    { id: '1', name: 'د. محمد الشربيني', title: 'خبير استراتيجيات الأعمال ونمو الشركات', specialty: 'تخطيط استراتيجي، دراسات جدوى' },
    { id: '2', name: 'م. يوسف النجار', title: 'استشاري تقنيات الذكاء الاصطناعي والحلول السحابية', specialty: 'AI, Machine Learning, Cloud Architecture' },
    { id: '3', name: 'د. ريهام العوضي', title: 'مستشارة الملكية الفكرية وبراءات الاختراع', specialty: 'براءات الاختراع، صياغة العقود الاستثمارية' },
  ]);

  // News state
  const [news, setNews] = useState<NewsAdminItem[]>([
    { id: '1', title: 'انطلاق فعاليات يوم عرض المشروعات Demo Day للدفعة الجديدة', date: '26 أغسطس 2026', summary: 'استعرضت 12 شركة ناشئة محتضنة حلولها التكنولوجية أمام المستثمرين.' },
    { id: '2', title: 'تطوير وتحديث معامل التصنيع السريع والميكروسكوبات الرقمية', date: '18 أغسطس 2026', summary: 'توفير معدات نمذجة جديدة ثلاثية الأبعاد لدعم المشروعات.' },
    { id: '3', title: 'ورشة عمل مكثفة حول صياغة نموذج الأعمال والنمو المالي', date: '10 أغسطس 2026', summary: 'جلسة تفاعلية بحضور نخبة من خبراء الإدارة المالية.' },
  ]);

  // Messages state
  const [messages, setMessages] = useState<MessageItem[]>([
    { id: '1', name: 'د. طارق الحسين', email: 'tariq@azhar.edu.eg', subject: 'استفسار عن بروتوكول التعاون المعملي', message: 'نود بحث إمكانية استخدام معمل النانو للباحثين بكلية العلوم.', date: '2026/09/01' },
    { id: '2', name: 'مها إبراهيم', email: 'maha.ib@gmail.com', subject: 'موعد فتح باب التقديم للدورة الثالثة', message: 'هل باب التقديم مفتوح حالياً لطلاب الفرق النهائية؟', date: '2026/08/28' },
  ]);

  // Modals
  const [showAddStartup, setShowAddStartup] = useState(false);
  const [newStartup, setNewStartup] = useState({ name: '', category: 'الذكاء الاصطناعي والبرمجيات', cycle: 'دورة الاحتضان الثانية (2023)', status: 'نشطة ومحتضنة' });

  // Load from localStorage on mount
  useEffect(() => {
    const auth = localStorage.getItem('rwaq_admin_auth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }

    try {
      const storedApps = localStorage.getItem('rwaq_applications');
      if (storedApps) {
        setApplications(JSON.parse(storedApps));
      }
      const storedMsgs = localStorage.getItem('rwaq_messages');
      if (storedMsgs) {
        setMessages(JSON.parse(storedMsgs));
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if ((email === 'admin@rwaq.com' || email === 'admin@rwaq-azhar.edu.eg') && password === 'admin123') {
      setIsAuthenticated(true);
      localStorage.setItem('rwaq_admin_auth', 'true');
      setLoginError('');
    } else {
      setLoginError('البريد الإلكتروني أو كلمة المرور غير صحيحة. للتجربة: admin@rwaq.com / admin123');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('rwaq_admin_auth');
  };

  const updateAppStatus = (id: string, newStatus: 'مقبول' | 'مرفوض' | 'قيد المراجعة') => {
    const updated = applications.map((app) => (app.id === id ? { ...app, status: newStatus } : app));
    setApplications(updated);
    localStorage.setItem('rwaq_applications', JSON.stringify(updated));
  };

  const deleteApp = (id: string) => {
    if (confirm('هل أنت متأكد من حذف هذا الطلب؟')) {
      const updated = applications.filter((app) => app.id !== id);
      setApplications(updated);
      localStorage.setItem('rwaq_applications', JSON.stringify(updated));
    }
  };

  const handleAddStartup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStartup.name) return;
    const item: StartupItem = {
      id: Date.now().toString(),
      ...newStartup,
    };
    setStartups([item, ...startups]);
    setNewStartup({ name: '', category: 'الذكاء الاصطناعي والبرمجيات', cycle: 'دورة الاحتضان الثانية (2023)', status: 'نشطة ومحتضنة' });
    setShowAddStartup(false);
  };

  // Metrics
  const totalApps = applications.length;
  const pendingApps = applications.filter((a) => a.status === 'قيد المراجعة').length;
  const approvedApps = applications.filter((a) => a.status === 'مقبول').length;
  const activeStartups = startups.length;

  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
          background: 'var(--md-sys-color-surface-container-lowest)',
        }}
      >
        <div
          style={{
            background: '#FFFFFF',
            borderRadius: '28px',
            padding: '2.5rem',
            width: '100%',
            maxWidth: '460px',
            boxShadow: 'var(--elevation-2)',
            border: '1px solid var(--md-sys-color-outline-variant)',
            textAlign: 'center',
          }}
        >
          <img
            src="/images/logo.png"
            alt="رواق"
            style={{ width: '64px', height: '64px', objectFit: 'contain', margin: '0 auto 1rem' }}
          />
          <h2 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)' }}>
            لوحة إدارة حاضنة رواق
          </h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', marginTop: '0.25rem', marginBottom: '1.5rem' }}>
            قم بتسجيل الدخول للوصول إلى لوحة التحكم الإدارية
          </p>

          {loginError && (
            <div
              style={{
                background: 'rgba(234, 67, 53, 0.1)',
                border: '1px solid var(--google-red)',
                color: 'var(--google-red)',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                fontSize: '0.85rem',
                marginBottom: '1.25rem',
                textAlign: 'right',
              }}
            >
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ textAlign: 'right' }}>
            <div style={{ marginBottom: '1.2rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@rwaq.com"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  outline: 'none',
                  fontSize: '0.92rem',
                }}
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                كلمة المرور *
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  outline: 'none',
                  fontSize: '0.92rem',
                }}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '0.85rem',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '0.95rem',
              }}
            >
              تسجيل الدخول
            </button>
          </form>

          <div
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem',
              background: 'var(--md-sys-color-surface-container-low)',
              borderRadius: '12px',
              fontSize: '0.8rem',
              color: 'var(--md-sys-color-on-surface-variant)',
            }}
          >
            💡 في وضع العرض التجريبي، استخدم:<br />
            <strong>admin@rwaq.com</strong> / <strong>admin123</strong>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '90vh', background: 'var(--md-sys-color-surface-container-lowest)' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '270px',
          background: '#FFFFFF',
          borderLeft: '1px solid var(--md-sys-color-outline-variant)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '1.5rem 1rem',
          flexShrink: 0,
        }}
      >
        <div>
          {/* Brand header */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', padding: '0 0.5rem' }}>
            <img src="/images/logo.png" alt="رواق" style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
            <div>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 800, margin: 0 }}>إدارة رواق RWAQ</h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-on-surface-variant)' }}>جامعة الأزهر</span>
            </div>
          </div>

          {/* Menu Items */}
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
            {[
              { id: 'applications', label: 'طلبات التقديم', icon: 'description', count: totalApps },
              { id: 'startups', label: 'المشروعات المحتضنة', icon: 'rocket_launch', count: activeStartups },
              { id: 'mentors', label: 'شبكة الموجهين', icon: 'diversity_3' },
              { id: 'news', label: 'الأخبار والفعاليات', icon: 'newspaper' },
              { id: 'messages', label: 'الرسائل الواردة', icon: 'mail', count: messages.length },
              { id: 'firebase', label: 'إعدادات Firebase', icon: 'local_fire_department' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '9999px',
                    border: 'none',
                    background: isActive ? 'rgba(11, 87, 208, 0.1)' : 'transparent',
                    color: isActive ? 'var(--google-blue)' : 'var(--md-sys-color-on-surface-variant)',
                    fontWeight: isActive ? 700 : 500,
                    fontSize: '0.9rem',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                    <span className="material-symbols-rounded" style={{ fontSize: '1.25rem' }}>
                      {tab.icon}
                    </span>
                    <span>{tab.label}</span>
                  </div>
                  {tab.count !== undefined && (
                    <span
                      style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        padding: '0.15rem 0.5rem',
                        borderRadius: '9999px',
                        background: isActive ? 'var(--google-blue)' : 'var(--md-sys-color-surface-container-high)',
                        color: isActive ? '#FFFFFF' : 'var(--md-sys-color-on-surface)',
                      }}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', paddingTop: '1rem', borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
          <Link
            href="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.6rem',
              borderRadius: '9999px',
              border: '1px solid var(--md-sys-color-outline-variant)',
              color: 'var(--md-sys-color-on-surface)',
              textDecoration: 'none',
              fontSize: '0.85rem',
              fontWeight: 600,
            }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>home</span>
            العودة للموقع
          </Link>
          <button
            onClick={handleLogout}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              padding: '0.6rem',
              borderRadius: '9999px',
              border: '1px solid rgba(234, 67, 53, 0.3)',
              background: 'rgba(234, 67, 53, 0.05)',
              color: 'var(--google-red)',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>logout</span>
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* Main Admin Content */}
      <main style={{ flex: 1, padding: '2rem 2.5rem', overflowY: 'auto' }}>
        {/* Top Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '2rem' }}>
          <div>
            <h1 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', margin: 0 }}>
              {activeTab === 'applications' && 'طلبات التقديم للانضمام'}
              {activeTab === 'startups' && 'إدارة الشركات المحتضنة'}
              {activeTab === 'mentors' && 'شبكة الموجهين والخبراء'}
              {activeTab === 'news' && 'الأخبار والفعاليات المنشورة'}
              {activeTab === 'messages' && 'الرسائل واستفسارات الاتصال'}
              {activeTab === 'firebase' && 'إعدادات قاعدة بيانات Firebase'}
            </h1>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.88rem', marginTop: '0.25rem' }}>
              لوحة التحكم والإشراف الفني لمركز الابتكار وريادة الأعمال بجامعة الأزهر
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'rgba(52, 168, 83, 0.1)',
                color: 'var(--google-green)',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 600,
              }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>database</span>
              الوضع المتصل (Local / Firebase Sync)
            </div>

            {activeTab === 'startups' && (
              <button
                onClick={() => setShowAddStartup(true)}
                className="btn btn-primary"
                style={{ padding: '0.5rem 1.25rem', borderRadius: '9999px', fontSize: '0.88rem' }}
              >
                + إضافة شركة جديدة
              </button>
            )}
          </div>
        </div>

        {/* 4 Metric Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '1.25rem',
            marginBottom: '2rem',
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.25rem 1.5rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
              borderTop: '4px solid var(--google-blue)',
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', fontWeight: 600 }}>إجمالي الطلبات الواردة</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--google-blue)', marginTop: '0.3rem' }}>{totalApps}</div>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.25rem 1.5rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
              borderTop: '4px solid var(--google-yellow)',
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', fontWeight: 600 }}>طلبات قيد المراجعة</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: '#B06000', marginTop: '0.3rem' }}>{pendingApps}</div>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.25rem 1.5rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
              borderTop: '4px solid var(--google-green)',
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', fontWeight: 600 }}>المشروعات المقبولة</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--google-green)', marginTop: '0.3rem' }}>{approvedApps}</div>
          </div>

          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '20px',
              padding: '1.25rem 1.5rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
              borderTop: '4px solid var(--google-red)',
            }}
          >
            <div style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', fontWeight: 600 }}>الشركات المحتضنة</div>
            <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--google-red)', marginTop: '0.3rem' }}>{activeStartups}</div>
          </div>
        </div>

        {/* Tab 1: Applications */}
        {activeTab === 'applications' && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '1.75rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700 }}>سجل طلبات الاحتضان المقدمة</h3>
              <button
                onClick={() => {
                  const csv = applications.map((a) => `${a.name},${a.email},${a.phone},${a.project},${a.faculty},${a.status}`).join('\n');
                  const blob = new Blob([csv], { type: 'text/csv' });
                  const url = URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'rwaq_applications.csv';
                  a.click();
                }}
                className="btn btn-secondary"
                style={{ padding: '0.45rem 1rem', borderRadius: '9999px', fontSize: '0.82rem' }}
              >
                تصدير CSV
              </button>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--md-sys-color-outline-variant)', color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.85rem' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>صاحب الطلب</th>
                    <th style={{ padding: '0.75rem 1rem' }}>الكلية / الجامعة</th>
                    <th style={{ padding: '0.75rem 1rem' }}>اسم المشروع</th>
                    <th style={{ padding: '0.75rem 1rem' }}>المجال</th>
                    <th style={{ padding: '0.75rem 1rem' }}>الحالة</th>
                    <th style={{ padding: '0.75rem 1rem' }}>الإجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app) => (
                    <tr key={app.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.9rem' }}>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: 700 }}>{app.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-on-surface-variant)' }}>{app.email} | {app.phone}</div>
                      </td>
                      <td style={{ padding: '1rem' }}>{app.faculty}</td>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>{app.project}</td>
                      <td style={{ padding: '1rem' }}>{app.category}</td>
                      <td style={{ padding: '1rem' }}>
                        <span
                          style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            fontSize: '0.78rem',
                            fontWeight: 700,
                            background:
                              app.status === 'مقبول'
                                ? 'rgba(52, 168, 83, 0.12)'
                                : app.status === 'مرفوض'
                                ? 'rgba(234, 67, 53, 0.12)'
                                : 'rgba(251, 188, 4, 0.2)',
                            color:
                              app.status === 'مقبول'
                                ? '#137333'
                                : app.status === 'مرفوض'
                                ? '#C5221F'
                                : '#B06000',
                          }}
                        >
                          {app.status}
                        </span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ display: 'flex', gap: '0.4rem' }}>
                          <button
                            onClick={() => updateAppStatus(app.id, 'مقبول')}
                            title="قبول المشروع"
                            style={{
                              border: 'none',
                              background: 'rgba(52, 168, 83, 0.1)',
                              color: 'var(--google-green)',
                              padding: '0.35rem 0.65rem',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontWeight: 700,
                            }}
                          >
                            ✓
                          </button>
                          <button
                            onClick={() => updateAppStatus(app.id, 'مرفوض')}
                            title="رفض"
                            style={{
                              border: 'none',
                              background: 'rgba(234, 67, 53, 0.1)',
                              color: 'var(--google-red)',
                              padding: '0.35rem 0.65rem',
                              borderRadius: '8px',
                              cursor: 'pointer',
                              fontWeight: 700,
                            }}
                          >
                            ✕
                          </button>
                          <button
                            onClick={() => deleteApp(app.id)}
                            title="حذف"
                            style={{
                              border: 'none',
                              background: 'var(--md-sys-color-surface-container-high)',
                              color: 'var(--md-sys-color-on-surface-variant)',
                              padding: '0.35rem 0.65rem',
                              borderRadius: '8px',
                              cursor: 'pointer',
                            }}
                          >
                            🗑
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 2: Startups */}
        {activeTab === 'startups' && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '1.75rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>قائمة الشركات المحتضنة</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--md-sys-color-outline-variant)', color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.85rem' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>اسم الشركة</th>
                    <th style={{ padding: '0.75rem 1rem' }}>القطاع</th>
                    <th style={{ padding: '0.75rem 1rem' }}>دورة الاحتضان</th>
                    <th style={{ padding: '0.75rem 1rem' }}>الحالة</th>
                    <th style={{ padding: '0.75rem 1rem' }}>إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {startups.map((st) => (
                    <tr key={st.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.9rem' }}>
                      <td style={{ padding: '1rem', fontWeight: 700 }}>{st.name}</td>
                      <td style={{ padding: '1rem' }}>{st.category}</td>
                      <td style={{ padding: '1rem' }}>{st.cycle}</td>
                      <td style={{ padding: '1rem' }}>
                        <span style={{ color: 'var(--google-blue)', fontWeight: 600 }}>{st.status}</span>
                      </td>
                      <td style={{ padding: '1rem' }}>
                        <button
                          onClick={() => setStartups(startups.filter((s) => s.id !== st.id))}
                          style={{
                            border: 'none',
                            background: 'rgba(234, 67, 53, 0.1)',
                            color: 'var(--google-red)',
                            padding: '0.35rem 0.65rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                          }}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: Mentors */}
        {activeTab === 'mentors' && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '1.75rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>الموجهون والخبراء</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--md-sys-color-outline-variant)', color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.85rem' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>اسم الموجه</th>
                    <th style={{ padding: '0.75rem 1rem' }}>المسمى الوظيفي</th>
                    <th style={{ padding: '0.75rem 1rem' }}>مجال التخصص</th>
                    <th style={{ padding: '0.75rem 1rem' }}>إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {mentors.map((m) => (
                    <tr key={m.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.9rem' }}>
                      <td style={{ padding: '1rem', fontWeight: 700 }}>{m.name}</td>
                      <td style={{ padding: '1rem' }}>{m.title}</td>
                      <td style={{ padding: '1rem' }}>{m.specialty}</td>
                      <td style={{ padding: '1rem' }}>
                        <button
                          onClick={() => setMentors(mentors.filter((item) => item.id !== m.id))}
                          style={{
                            border: 'none',
                            background: 'rgba(234, 67, 53, 0.1)',
                            color: 'var(--google-red)',
                            padding: '0.35rem 0.65rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                          }}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 4: News */}
        {activeTab === 'news' && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '1.75rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>سجل الأخبار والفعاليات</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--md-sys-color-outline-variant)', color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.85rem' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>العنوان</th>
                    <th style={{ padding: '0.75rem 1rem' }}>التاريخ</th>
                    <th style={{ padding: '0.75rem 1rem' }}>الملخص</th>
                    <th style={{ padding: '0.75rem 1rem' }}>إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {news.map((n) => (
                    <tr key={n.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.9rem' }}>
                      <td style={{ padding: '1rem', fontWeight: 700 }}>{n.title}</td>
                      <td style={{ padding: '1rem' }}>{n.date}</td>
                      <td style={{ padding: '1rem' }}>{n.summary}</td>
                      <td style={{ padding: '1rem' }}>
                        <button
                          onClick={() => setNews(news.filter((item) => item.id !== n.id))}
                          style={{
                            border: 'none',
                            background: 'rgba(234, 67, 53, 0.1)',
                            color: 'var(--google-red)',
                            padding: '0.35rem 0.65rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                          }}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 5: Messages */}
        {activeTab === 'messages' && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '1.75rem',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '1.25rem' }}>رسائل التواصل المباشرة</h3>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
                <thead>
                  <tr style={{ borderBottom: '2px solid var(--md-sys-color-outline-variant)', color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.85rem' }}>
                    <th style={{ padding: '0.75rem 1rem' }}>المرسل</th>
                    <th style={{ padding: '0.75rem 1rem' }}>الموضوع</th>
                    <th style={{ padding: '0.75rem 1rem' }}>الرسالة</th>
                    <th style={{ padding: '0.75rem 1rem' }}>التاريخ</th>
                    <th style={{ padding: '0.75rem 1rem' }}>إجراءات</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((m) => (
                    <tr key={m.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.9rem' }}>
                      <td style={{ padding: '1rem' }}>
                        <div style={{ fontWeight: 700 }}>{m.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-on-surface-variant)' }}>{m.email}</div>
                      </td>
                      <td style={{ padding: '1rem', fontWeight: 600 }}>{m.subject}</td>
                      <td style={{ padding: '1rem' }}>{m.message}</td>
                      <td style={{ padding: '1rem' }}>{m.date}</td>
                      <td style={{ padding: '1rem' }}>
                        <button
                          onClick={() => setMessages(messages.filter((item) => item.id !== m.id))}
                          style={{
                            border: 'none',
                            background: 'rgba(234, 67, 53, 0.1)',
                            color: 'var(--google-red)',
                            padding: '0.35rem 0.65rem',
                            borderRadius: '8px',
                            cursor: 'pointer',
                          }}
                        >
                          حذف
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 6: Firebase */}
        {activeTab === 'firebase' && (
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '2rem',
              maxWidth: '750px',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span className="material-symbols-rounded" style={{ color: '#F59E0B', fontSize: '2rem' }}>
                local_fire_department
              </span>
              <h3 style={{ fontSize: '1.3rem', fontWeight: 800, margin: 0 }}>ربط قاعدة بيانات Firebase Firestore</h3>
            </div>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>
              يمكنك ربط مفاتيح Firebase الخاصة بمشروعك لنقل البيانات فورياً بين الموقع ولوحة التحكم والمزامنة السحابية الدائمة.
            </p>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert('تم حفظ إعدادات Firebase بنجاح!');
              }}
            >
              <div style={{ marginBottom: '1.25rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                  Firebase API Key *
                </label>
                <input
                  type="text"
                  placeholder="AIzaSyC..."
                  style={{
                    width: '100%',
                    padding: '0.75rem 1rem',
                    borderRadius: '12px',
                    border: '1px solid var(--md-sys-color-outline-variant)',
                    outline: 'none',
                    direction: 'ltr',
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Auth Domain
                  </label>
                  <input
                    type="text"
                    placeholder="your-project.firebaseapp.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid var(--md-sys-color-outline-variant)',
                      outline: 'none',
                      direction: 'ltr',
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.4rem' }}>
                    Project ID
                  </label>
                  <input
                    type="text"
                    placeholder="your-project-id"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid var(--md-sys-color-outline-variant)',
                      outline: 'none',
                      direction: 'ltr',
                    }}
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ borderRadius: '9999px', padding: '0.75rem 2rem' }}>
                حفظ واختبار الاتصال السحابي
              </button>
            </form>
          </div>
        )}
      </main>

      {/* Add Startup Modal */}
      {showAddStartup && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            background: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
          onClick={() => setShowAddStartup(false)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '2rem',
              maxWidth: '520px',
              width: '100%',
              boxShadow: 'var(--elevation-3)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.5rem' }}>إضافة شركة جديدة لدليل رواق</h3>
            <form onSubmit={handleAddStartup}>
              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem' }}>اسم الشركة *</label>
                <input
                  type="text"
                  required
                  value={newStartup.name}
                  onChange={(e) => setNewStartup({ ...newStartup, name: e.target.value })}
                  placeholder="مثال: ذكاء للتطبيقات الطبية"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)' }}
                />
              </div>

              <div style={{ marginBottom: '1rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem' }}>القطاع والتخصص</label>
                <select
                  value={newStartup.category}
                  onChange={(e) => setNewStartup({ ...newStartup, category: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)' }}
                >
                  <option value="الذكاء الاصطناعي والبرمجيات">الذكاء الاصطناعي والبرمجيات</option>
                  <option value="التكنولوجيا الطبية والصحية">التكنولوجيا الطبية والصحية</option>
                  <option value="الزراعة والتكنولوجيا البيئية">الزراعة والتكنولوجيا البيئية</option>
                  <option value="التدوير والتكنولوجيا الخضراء">التدوير والتكنولوجيا الخضراء</option>
                  <option value="التكنولوجيا المالية">التكنولوجيا المالية</option>
                </select>
              </div>

              <div style={{ marginBottom: '1.5rem' }}>
                <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 600, marginBottom: '0.35rem' }}>دورة الاحتضان</label>
                <input
                  type="text"
                  value={newStartup.cycle}
                  onChange={(e) => setNewStartup({ ...newStartup, cycle: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end' }}>
                <button
                  type="button"
                  onClick={() => setShowAddStartup(false)}
                  className="btn btn-secondary"
                  style={{ borderRadius: '9999px' }}
                >
                  إلغاء
                </button>
                <button type="submit" className="btn btn-primary" style={{ borderRadius: '9999px' }}>
                  حفظ الشركة
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
