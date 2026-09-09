'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      try {
        const stored = localStorage.getItem('rwaq_messages') || '[]';
        const msgs = JSON.parse(stored);
        msgs.unshift({ ...formData, date: new Date().toLocaleDateString('ar-EG'), timestamp: Date.now() });
        localStorage.setItem('rwaq_messages', JSON.stringify(msgs));
      } catch (err) {
        console.error(err);
      }
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 700);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner */}
      <section
        className="google-surface-card"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F8FC 100%)',
          padding: '2.25rem',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.4rem',
            fontSize: '0.82rem',
            fontWeight: 700,
            color: 'var(--google-blue)',
            backgroundColor: 'var(--google-blue-container)',
            padding: '0.25rem 0.85rem',
            borderRadius: '9999px',
            marginBottom: '0.75rem',
          }}
        >
          <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>contact_support</span>
          قنوات الاتصال المباشرة
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', lineHeight: 1.2 }}>
          تواصل مع إدارة حاضنة رواق
        </h1>
        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.98rem', marginTop: '0.5rem', maxWidth: '650px' }}>
          فريقنا متاح للإجابة على استفسارات الاحتضان، حجز زيارات لمعمل التصنيع، وبحث فرص التعاون والشراكات.
        </p>
      </section>

      {/* Main Grid: Form + Info */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem' }}>
        {/* Contact Form (Google Forms / Material Inputs style) */}
        <div className="google-surface-card" style={{ borderTop: '4px solid var(--google-blue)' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.5rem' }}>أرسل لنا رسالة مباشرة</h2>
          <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', marginBottom: '1.5rem' }}>
            سيقوم فريق العمل بالرد عبر بريدك الإلكتروني خلال 24 ساعة.
          </p>

          {status === 'success' && (
            <div
              style={{
                backgroundColor: 'rgba(30, 142, 62, 0.12)',
                border: '1px solid var(--google-green)',
                color: '#137333',
                padding: '0.85rem 1.25rem',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.65rem',
                marginBottom: '1.5rem',
                fontWeight: 600,
                fontSize: '0.9rem',
              }}
            >
              <span className="material-symbols-rounded">check_circle</span>
              تم إرسال رسالتك بنجاح! شكراً لتواصلك مع مركز الابتكار ورواق.
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                الاسم بالكامل *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="أدخل اسمك الثلاثي"
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
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                البريد الإلكتروني *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@azhar.edu.eg"
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
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                موضوع الاستفسار *
              </label>
              <input
                type="text"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="التقديم على الاحتضان / زيارة المعمل / شراكة"
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
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.35rem' }}>
                الرسالة بالتفصيل *
              </label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="اكتب استفسارك أو تفاصيل مقترحك هنا..."
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '12px',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  outline: 'none',
                  fontSize: '0.9rem',
                  resize: 'vertical',
                }}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="google-fab-extended"
              style={{ justifyContent: 'center', padding: '0.85rem', fontSize: '0.95rem' }}
            >
              <span className="material-symbols-rounded">send</span>
              {status === 'submitting' ? 'جارٍ الإرسال...' : 'إرسال الرسالة'}
            </button>
          </form>
        </div>

        {/* Contact Channels & Location */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="google-surface-card">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1.25rem' }}>بيانات المقر والتواصل</h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Location */}
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(11, 87, 208, 0.1)',
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
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>المقر الرئيسي</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.5 }}>
                    مبنى مركز الابتكار وريادة الأعمال، جامعة الأزهر، امتداد رمسيس، مدينة نصر، القاهرة.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(217, 48, 37, 0.1)',
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
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>البريد الإلكتروني الرسمي</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', direction: 'ltr', textAlign: 'right' }}>
                    info@rwaq-azhar.edu.eg<br />
                    incubation@rwaq-azhar.edu.eg
                  </p>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(11, 87, 208, 0.1)',
                    color: 'var(--google-blue)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-rounded">public</span>
                </div>
                <div>
                  <h4 style={{ fontSize: '0.95rem', fontWeight: 700 }}>المنصات الرقمية</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginTop: '0.25rem' }}>
                    <a
                      href="https://www.facebook.com/profile.php?id=61586076763384&locale=ar_AR"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.85rem', color: 'var(--google-blue)', fontWeight: 600 }}
                    >
                      صفحة فيسبوك الرسمية ↗
                    </a>
                    <a
                      href="https://www.linkedin.com/in/%D9%85%D8%B1%D9%83%D8%B2-%D8%A7%D9%84%D8%A7%D8%A8%D8%AA%D9%83%D8%A7%D8%B1-%D9%88%D8%B1%D9%8A%D8%A7%D8%AF%D8%A9-%D8%A7%D9%84%D8%A3%D8%B9%D9%85%D8%A7%D9%84-%D8%B1%D9%88%D8%A7%D9%82-innovation-entrepreneurship-center-rwaq-a33b22375/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.85rem', color: 'var(--google-blue)', fontWeight: 600 }}
                    >
                      الصفحة على LinkedIn ↗
                    </a>
                    <a
                      href="https://hub.spark.ngo/pages/RwaqGreenTech"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.85rem', color: 'var(--google-blue)', fontWeight: 600 }}
                    >
                      منصة SPARK Innovation Hub ↗
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working Hours Google Pill Card */}
          <div
            className="google-surface-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
            }}
          >
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                backgroundColor: 'rgba(30, 142, 62, 0.12)',
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
              <div style={{ fontSize: '0.92rem', fontWeight: 700 }}>ساعات العمل الرسمية</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--md-sys-color-on-surface-variant)', marginTop: '0.15rem' }}>
                من الأحد إلى الخميس: 9:00 صباحاً - 4:00 مساءً
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
