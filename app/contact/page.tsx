'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate sending message or storing in localStorage for admin panel
    setTimeout(() => {
      try {
        const stored = localStorage.getItem('rwaq_messages') || '[]';
        const messages = JSON.parse(stored);
        messages.unshift({
          ...formData,
          date: new Date().toLocaleDateString('ar-EG'),
          timestamp: Date.now(),
        });
        localStorage.setItem('rwaq_messages', JSON.stringify(messages));
      } catch (err) {
        console.error(err);
      }

      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 700);
  };

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-container">
          <div className="page-banner-content">
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'rgba(11, 87, 208, 0.08)',
                color: 'var(--google-blue)',
                padding: '0.35rem 0.9rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '1rem',
              }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>contact_support</span>
              قنوات الاتصال المباشرة
            </div>
            <h1 className="page-title">تواصل مع حاضنة رواق</h1>
            <p className="page-subtitle">
              فريقنا مستعد للإجابة على جميع استفساراتك واستقبال زياراتك لمقر الحاضنة بمركز الابتكار بجامعة الأزهر.
            </p>
            <div className="breadcrumbs">
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <span>تواصل معنا</span>
            </div>
          </div>
          <div className="page-banner-visual">
            <img src="/images/contact_hero.png" alt="تواصل معنا" />
          </div>
        </div>
      </div>

      {/* Main Section */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          <div className="contact-grid">
            {/* Contact Form Card */}
            <div
              className="contact-card"
              style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '2.5rem',
                boxShadow: 'var(--elevation-1)',
                border: '1px solid var(--md-sys-color-outline-variant)',
              }}
            >
              <div style={{ marginBottom: '1.5rem' }}>
                <h3 style={{ fontSize: '1.45rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)' }}>
                  أرسل لنا رسالة مباشرة
                </h3>
                <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.92rem', marginTop: '0.25rem' }}>
                  سيقوم فريق إدارة رواق بالتواصل معك والرد خلال 24 ساعة عمل.
                </p>
              </div>

              {status === 'success' && (
                <div
                  style={{
                    background: 'rgba(52, 168, 83, 0.1)',
                    border: '1px solid var(--google-green)',
                    color: '#137333',
                    padding: '1rem 1.25rem',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '1.5rem',
                    fontWeight: 600,
                  }}
                >
                  <span className="material-symbols-rounded" style={{ color: 'var(--google-green)' }}>check_circle</span>
                  تم استلام رسالتك بنجاح! شكراً لتواصلك مع حاضنة رواق.
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label" style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', display: 'block' }}>
                    الاسم بالكامل *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="أدخل اسمك الثلاثي"
                    className="form-input"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1.2rem',
                      borderRadius: '12px',
                      border: '1px solid var(--md-sys-color-outline-variant)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label" style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', display: 'block' }}>
                    البريد الإلكتروني *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="example@azhar.edu.eg"
                    className="form-input"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1.2rem',
                      borderRadius: '12px',
                      border: '1px solid var(--md-sys-color-outline-variant)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.25rem' }}>
                  <label className="form-label" style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', display: 'block' }}>
                    موضوع الرسالة *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="استفسار عن الاحتضان / حجز موعد / شراكة"
                    className="form-input"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1.2rem',
                      borderRadius: '12px',
                      border: '1px solid var(--md-sys-color-outline-variant)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                    }}
                  />
                </div>

                <div className="form-group" style={{ marginBottom: '1.5rem' }}>
                  <label className="form-label" style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.4rem', display: 'block' }}>
                    الرسالة أو الاستفسار *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="اكتب تفاصيل استفسارك أو اقتراحك هنا..."
                    className="form-textarea"
                    style={{
                      width: '100%',
                      padding: '0.8rem 1.2rem',
                      borderRadius: '12px',
                      border: '1px solid var(--md-sys-color-outline-variant)',
                      outline: 'none',
                      fontFamily: 'inherit',
                      fontSize: '0.92rem',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    padding: '0.9rem',
                    borderRadius: '9999px',
                    fontSize: '1rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <span className="material-symbols-rounded">send</span>
                  {status === 'submitting' ? 'جارٍ الإرسال...' : 'إرسال الرسالة الآن'}
                </button>
              </form>
            </div>

            {/* Contact Info & Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                className="contact-card"
                style={{
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  padding: '2rem',
                  boxShadow: 'var(--elevation-1)',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                }}
              >
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '1.5rem', color: 'var(--md-sys-color-on-surface)' }}>
                  بيانات التواصل والمقر
                </h3>

                <div className="contact-info-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {/* Location */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(11, 87, 208, 0.1)',
                        color: 'var(--google-blue)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span className="material-symbols-rounded">location_on</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.2rem' }}>
                        المقر الرئيسي
                      </h4>
                      <p style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: '1.5' }}>
                        مبنى مركز الابتكار وريادة الأعمال، جامعة الأزهر، امتداد رمسيس، مدينة نصر، القاهرة.
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(234, 67, 53, 0.1)',
                        color: 'var(--google-red)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <span className="material-symbols-rounded">mail</span>
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.2rem' }}>
                        البريد الإلكتروني الرسمي
                      </h4>
                      <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', direction: 'ltr', textAlign: 'right' }}>
                        info@rwaq-azhar.edu.eg<br />
                        incubation@rwaq-azhar.edu.eg
                      </p>
                    </div>
                  </div>

                  {/* Facebook */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(24, 119, 242, 0.1)',
                        color: '#1877F2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontWeight: 900,
                      }}
                    >
                      f
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.2rem' }}>
                        صفحة فيسبوك الرسمية
                      </h4>
                      <a
                        href="https://www.facebook.com/profile.php?id=61586076763384&locale=ar_AR"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.88rem', color: 'var(--google-blue)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        مركز الابتكار وريادة الأعمال جامعة الأزهر (رواق) ↗
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(10, 102, 194, 0.1)',
                        color: '#0A66C2',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontWeight: 900,
                      }}
                    >
                      in
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.2rem' }}>
                        الصفحة الرسمية على LinkedIn
                      </h4>
                      <a
                        href="https://www.linkedin.com/in/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D9%83%D8%A7%D8%B1-%D9%88%D8%B1%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84-%D8%B1%D9%88%D8%A7%D9%82-innovation-entrepreneurship-center-rwaq-a33b22375/"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.88rem', color: 'var(--google-blue)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        Innovation &amp; Entrepreneurship Center Rwaq ↗
                      </a>
                    </div>
                  </div>

                  {/* SPARK Hub */}
                  <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '46px',
                        height: '46px',
                        borderRadius: '14px',
                        background: 'rgba(0, 114, 206, 0.1)',
                        color: '#0072CE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        fontWeight: 900,
                      }}
                    >
                      S
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.2rem' }}>
                        منصة SPARK Innovation Hub
                      </h4>
                      <a
                        href="https://hub.spark.ngo/pages/RwaqGreenTech"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ fontSize: '0.88rem', color: 'var(--google-blue)', fontWeight: 600, textDecoration: 'none' }}
                      >
                        Rwaq Center for Innovation &amp; Green Tech ↗
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div
                style={{
                  background: 'var(--md-sys-color-surface-container-low)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'rgba(52, 168, 83, 0.12)',
                    color: 'var(--google-green)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-rounded">schedule</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)' }}>
                    ساعات العمل الرسمية
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', marginTop: '0.2rem' }}>
                    من الأحد إلى الخميس: 9:00 صباحاً - 4:00 مساءً
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
