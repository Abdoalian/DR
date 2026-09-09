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
      if (storedApps) setApplications(JSON.parse(storedApps));
      const storedMsgs = localStorage.getItem('rwaq_messages');
      if (storedMsgs) setMessages(JSON.parse(storedMsgs));
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

  const totalApps = applications.length;
  const pendingApps = applications.filter((a) => a.status === 'قيد المراجعة').length;
  const approvedApps = applications.filter((a) => a.status === 'مقبول').length;
  const activeStartups = startups.length;

  if (!isAuthenticated) {
    return (
      <div
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem 1rem',
        }}
      >
        <div
          className="google-surface-card"
          style={{
            maxWidth: '440px',
            width: '100%',
            textAlign: 'center',
            borderTop: '4px solid var(--google-blue)',
          }}
        >
          <img
            src="/images/logo.png"
            alt="رواق"
            style={{ width: '56px', height: '56px', objectFit: 'contain', margin: '0 auto 1rem' }}
          />
          <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)' }}>
            بوابة المشرفين وإدارة رواق
          </h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '1.5rem' }}>
            سجل الدخول لإدارة الطلبات والشركات وقواعد بيانات Firebase
          </p>

          {loginError && (
            <div
              style={{
                backgroundColor: 'rgba(217, 48, 37, 0.1)',
                border: '1px solid var(--google-red)',
                color: 'var(--google-red)',
                padding: '0.75rem 1rem',
                borderRadius: '12px',
                fontSize: '0.82rem',
                marginBottom: '1.25rem',
                textAlign: 'right',
              }}
            >
              {loginError}
            </div>
          )}

          <form onSubmit={handleLogin} style={{ textAlign: 'right', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                البريد الإلكتروني الإداري *
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
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>
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
                  fontSize: '0.9rem',
                }}
              />
            </div>

            <button
              type="submit"
              className="google-fab-extended"
              style={{ justifyContent: 'center', padding: '0.8rem', fontSize: '0.95rem', marginTop: '0.5rem' }}
            >
              <span className="material-symbols-rounded">login</span>
              تسجيل الدخول
            </button>
          </form>

          <div
            style={{
              marginTop: '1.5rem',
              padding: '0.75rem',
              backgroundColor: 'var(--md-sys-color-surface-container-high)',
              borderRadius: '12px',
              fontSize: '0.78rem',
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
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner (Google Cloud Console style) */}
      <section
        className="google-surface-card"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F8FC 100%)',
          padding: '1.75rem 2rem',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.25rem' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.8rem',
                fontWeight: 700,
                color: 'var(--google-blue)',
                backgroundColor: 'var(--google-blue-container)',
                padding: '0.2rem 0.75rem',
                borderRadius: '9999px',
                marginBottom: '0.5rem',
              }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '0.95rem' }}>admin_panel_settings</span>
              Google Cloud Console Style
            </div>
            <h1 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)' }}>
              لوحة الإدارة والتحكم المركزي
            </h1>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.88rem' }}>
              إدارة طلبات الاحتضان، بيانات الشركات، الموجهين، الأخبار، والمزامنة السحابية.
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'rgba(30, 142, 62, 0.1)',
                color: 'var(--google-green)',
                padding: '0.4rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.82rem',
                fontWeight: 600,
              }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>sync</span>
              المزامنة السحابية متصلة
            </div>

            <button
              onClick={handleLogout}
              className="google-icon-btn"
              title="تسجيل الخروج"
              style={{ border: '1px solid var(--md-sys-color-outline-variant)' }}
            >
              <span className="material-symbols-rounded" style={{ color: 'var(--google-red)' }}>logout</span>
            </button>
          </div>
        </div>
      </section>

      {/* Metrics Row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
        <div className="google-metric-card blue">
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>إجمالي الطلبات</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--google-blue)' }}>{totalApps}</div>
        </div>
        <div className="google-metric-card yellow">
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>قيد المراجعة</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#B06000' }}>{pendingApps}</div>
        </div>
        <div className="google-metric-card green">
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>مشروعات مقبولة</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--google-green)' }}>{approvedApps}</div>
        </div>
        <div className="google-metric-card red">
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>شركات محتضنة</span>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--google-red)' }}>{activeStartups}</div>
        </div>
      </div>

      {/* Google Cloud Console Tab Navigation Bar */}
      <div
        className="google-surface-card"
        style={{
          padding: '0.75rem 1.25rem',
          display: 'flex',
          gap: '0.5rem',
          overflowX: 'auto',
          alignItems: 'center',
        }}
      >
        {[
          { id: 'applications', label: 'طلبات التقديم', icon: 'description', count: totalApps },
          { id: 'startups', label: 'الشركات المحتضنة', icon: 'domain', count: activeStartups },
          { id: 'mentors', label: 'شبكة الموجهين', icon: 'diversity_3' },
          { id: 'news', label: 'الأخبار والفعاليات', icon: 'newspaper' },
          { id: 'messages', label: 'رسائل التواصل', icon: 'mail', count: messages.length },
          { id: 'firebase', label: 'إعدادات Firebase', icon: 'local_fire_department' },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`google-chip ${isActive ? 'active' : ''}`}
              style={{ whiteSpace: 'nowrap' }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>{tab.icon}</span>
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  style={{
                    backgroundColor: isActive ? 'var(--google-blue)' : 'var(--md-sys-color-surface-container-high)',
                    color: isActive ? '#ffffff' : 'inherit',
                    borderRadius: '9999px',
                    padding: '0.1rem 0.45rem',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                  }}
                >
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Active Tab Content */}
      {activeTab === 'applications' && (
        <div className="google-surface-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>سجل طلبات التقديم</h3>
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
              className="google-chip"
              style={{ fontSize: '0.8rem' }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>download</span>
              تصدير CSV
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)', fontSize: '0.82rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>صاحب الطلب</th>
                  <th style={{ padding: '0.85rem 1rem' }}>الكلية / الجامعة</th>
                  <th style={{ padding: '0.85rem 1rem' }}>المشروع المقترح</th>
                  <th style={{ padding: '0.85rem 1rem' }}>المجال</th>
                  <th style={{ padding: '0.85rem 1rem' }}>الحالة</th>
                  <th style={{ padding: '0.85rem 1.25rem' }}>الإجراءات</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app) => (
                  <tr key={app.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.88rem' }}>
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 700 }}>{app.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>{app.email} • {app.phone}</div>
                    </td>
                    <td style={{ padding: '1rem' }}>{app.faculty}</td>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{app.project}</td>
                    <td style={{ padding: '1rem' }}>{app.category}</td>
                    <td style={{ padding: '1rem' }}>
                      <span
                        style={{
                          padding: '0.2rem 0.65rem',
                          borderRadius: '9999px',
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          backgroundColor:
                            app.status === 'مقبول'
                              ? 'rgba(30, 142, 62, 0.12)'
                              : app.status === 'مرفوض'
                              ? 'rgba(217, 48, 37, 0.12)'
                              : 'rgba(249, 171, 0, 0.2)',
                          color:
                            app.status === 'مقبول'
                              ? '#137333'
                              : app.status === 'مرفوض'
                              ? '#D93025'
                              : '#B06000',
                        }}
                      >
                        {app.status}
                      </span>
                    </td>
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ display: 'flex', gap: '0.35rem' }}>
                        <button
                          onClick={() => updateAppStatus(app.id, 'مقبول')}
                          title="قبول"
                          style={{
                            border: 'none',
                            backgroundColor: 'rgba(30, 142, 62, 0.1)',
                            color: 'var(--google-green)',
                            padding: '0.3rem 0.6rem',
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
                            backgroundColor: 'rgba(217, 48, 37, 0.1)',
                            color: 'var(--google-red)',
                            padding: '0.3rem 0.6rem',
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
                            backgroundColor: 'var(--md-sys-color-surface-container-high)',
                            color: 'var(--md-sys-color-outline)',
                            padding: '0.3rem 0.6rem',
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

      {/* Tab: Startups */}
      {activeTab === 'startups' && (
        <div className="google-surface-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>دليل الشركات المحتضنة</h3>
            <button onClick={() => setShowAddStartup(true)} className="google-fab-extended" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
              + إضافة شركة
            </button>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)', fontSize: '0.82rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>اسم الشركة</th>
                  <th style={{ padding: '0.85rem 1rem' }}>القطاع</th>
                  <th style={{ padding: '0.85rem 1rem' }}>دورة الاحتضان</th>
                  <th style={{ padding: '0.85rem 1rem' }}>الحالة</th>
                  <th style={{ padding: '0.85rem 1.25rem' }}>إجراءات</th>
                </tr>
              </thead>
              <tbody>
                {startups.map((st) => (
                  <tr key={st.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.88rem' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>{st.name}</td>
                    <td style={{ padding: '1rem' }}>{st.category}</td>
                    <td style={{ padding: '1rem' }}>{st.cycle}</td>
                    <td style={{ padding: '1rem', color: 'var(--google-blue)', fontWeight: 600 }}>{st.status}</td>
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <button
                        onClick={() => setStartups(startups.filter((s) => s.id !== st.id))}
                        style={{ border: 'none', background: 'none', color: 'var(--google-red)', cursor: 'pointer', fontWeight: 600, fontSize: '0.82rem' }}
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

      {/* Tab: Mentors */}
      {activeTab === 'mentors' && (
        <div className="google-surface-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>شبكة الموجهين والخبراء</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)', fontSize: '0.82rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>الاسم</th>
                  <th style={{ padding: '0.85rem 1rem' }}>المسمى والخبرة</th>
                  <th style={{ padding: '0.85rem 1rem' }}>التخصص</th>
                </tr>
              </thead>
              <tbody>
                {mentors.map((m) => (
                  <tr key={m.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.88rem' }}>
                    <td style={{ padding: '1rem 1.25rem', fontWeight: 700 }}>{m.name}</td>
                    <td style={{ padding: '1rem' }}>{m.title}</td>
                    <td style={{ padding: '1rem' }}>{m.specialty}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Messages */}
      {activeTab === 'messages' && (
        <div className="google-surface-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '1.25rem 1.5rem', borderBottom: '1px solid var(--md-sys-color-outline-variant)' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>رسائل التواصل الواردة عبر الموقع</h3>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)', fontSize: '0.82rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                  <th style={{ padding: '0.85rem 1.25rem' }}>المرسل</th>
                  <th style={{ padding: '0.85rem 1rem' }}>الموضوع</th>
                  <th style={{ padding: '0.85rem 1rem' }}>الرسالة</th>
                  <th style={{ padding: '0.85rem 1rem' }}>التاريخ</th>
                </tr>
              </thead>
              <tbody>
                {messages.map((msg) => (
                  <tr key={msg.id} style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.88rem' }}>
                    <td style={{ padding: '1rem 1.25rem' }}>
                      <div style={{ fontWeight: 700 }}>{msg.name}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>{msg.email}</div>
                    </td>
                    <td style={{ padding: '1rem', fontWeight: 600 }}>{msg.subject}</td>
                    <td style={{ padding: '1rem' }}>{msg.message}</td>
                    <td style={{ padding: '1rem', fontSize: '0.8rem', color: 'var(--md-sys-color-outline)' }}>{msg.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab: Firebase */}
      {activeTab === 'firebase' && (
        <div className="google-surface-card" style={{ maxWidth: '700px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.75rem' }}>
            <span className="material-symbols-rounded" style={{ color: '#F59E0B', fontSize: '1.8rem' }}>local_fire_department</span>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>ربط قاعدة بيانات Firebase Firestore</h3>
          </div>
          <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            قم بإدخال بيانات مشروعك في Google Cloud / Firebase لتمكين المزامنة الفورية السحابية للطلبات وقاعدة البيانات.
          </p>

          <form onSubmit={(e) => { e.preventDefault(); alert('تم حفظ الإعدادات بنجاح!'); }} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>Firebase API Key *</label>
              <input type="text" placeholder="AIzaSyC..." style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)', direction: 'ltr' }} />
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>Auth Domain</label>
                <input type="text" placeholder="rwaq-app.firebaseapp.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)', direction: 'ltr' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>Project ID</label>
                <input type="text" placeholder="rwaq-azhar" style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)', direction: 'ltr' }} />
              </div>
            </div>

            <button type="submit" className="google-fab-extended" style={{ justifyContent: 'center', padding: '0.8rem', marginTop: '0.5rem' }}>
              حفظ وتأكيد الاتصال
            </button>
          </form>
        </div>
      )}

      {/* Add Startup Modal */}
      {showAddStartup && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1200,
            backgroundColor: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
          onClick={() => setShowAddStartup(false)}
        >
          <div
            className="google-surface-card"
            style={{ maxWidth: '500px', width: '100%' }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>إضافة شركة جديدة</h3>
            <form onSubmit={handleAddStartup} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>اسم الشركة *</label>
                <input
                  type="text"
                  required
                  value={newStartup.name}
                  onChange={(e) => setNewStartup({ ...newStartup, name: e.target.value })}
                  placeholder="مثال: ذكاء للتطبيقات الطبية"
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)' }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>القطاع</label>
                <select
                  value={newStartup.category}
                  onChange={(e) => setNewStartup({ ...newStartup, category: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)' }}
                >
                  <option value="الذكاء الاصطناعي والبرمجيات">الذكاء الاصطناعي والبرمجيات</option>
                  <option value="التكنولوجيا الطبية والصحية">التكنولوجيا الطبية والصحية</option>
                  <option value="الزراعة والتكنولوجيا البيئية">الزراعة والتكنولوجيا البيئية</option>
                  <option value="التدوير والتكنولوجيا الخضراء">التدوير والتكنولوجيا الخضراء</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, marginBottom: '0.35rem' }}>دورة الاحتضان</label>
                <input
                  type="text"
                  value={newStartup.cycle}
                  onChange={(e) => setNewStartup({ ...newStartup, cycle: e.target.value })}
                  style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--md-sys-color-outline-variant)' }}
                />
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'flex-end', marginTop: '0.5rem' }}>
                <button type="button" onClick={() => setShowAddStartup(false)} className="google-chip">إلغاء</button>
                <button type="submit" className="google-fab-extended" style={{ padding: '0.5rem 1.25rem', fontSize: '0.88rem' }}>حفظ الشركة</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
