'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const openModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* Header Banner */}
      <section
        className="google-surface-card"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4F9 100%)',
          padding: '2.5rem',
        }}
      >
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', alignItems: 'center' }}>
          <div>
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
              <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>info</span>
              الهوية والرسالة المؤسسية
            </div>

            <h1 style={{ fontSize: '2.3rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', lineHeight: 1.25 }}>
              حاضنة رواق: بيت الابتكار في جامعة الأزهر
            </h1>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '1rem', lineHeight: 1.7, marginTop: '0.75rem', maxWidth: '620px' }}>
              أُنشئت حاضنة رواق بمركز الابتكار وريادة الأعمال بجامعة الأزهر لتكون المحرك التكنولوجي الأول لتحويل المعرفة والأبحاث العلمية إلى مشروعات اقتصادية رائدة تخدم خطط التنمية ورؤية مصر.
            </p>

            <div style={{ marginTop: '1.5rem', display: 'flex', gap: '1rem' }}>
              <button onClick={openModal} className="google-fab-extended">
                <span className="material-symbols-rounded">rocket_launch</span>
                انضم لمجتمع رواق
              </button>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--elevation-2)',
                border: '1px solid var(--md-sys-color-outline-variant)',
                maxWidth: '460px',
                width: '100%',
              }}
            >
              <img src="/images/meeting.png" alt="فريق عمل رواق" style={{ width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Surfaces (Google Split Card) */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.75rem' }}>
        {/* Vision */}
        <div
          className="google-surface-card"
          style={{ borderTop: '4px solid var(--google-blue)' }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              backgroundColor: 'rgba(11, 87, 208, 0.1)',
              color: 'var(--google-blue)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <span className="material-symbols-rounded">visibility</span>
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>رؤيتنا الاستراتيجية</h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.7 }}>
            أن تكون حاضنة رواق النموذج الريادي الأول بين الجامعات المصرية والإقليمية في ربط البحث العلمي بالصناعة، وتأسيس شركات تكنولوجية ناشئة ذات أثر تنموي واقتصادي حقيقي.
          </p>
        </div>

        {/* Mission */}
        <div
          className="google-surface-card"
          style={{ borderTop: '4px solid var(--google-green)' }}
        >
          <div
            style={{
              width: '46px',
              height: '46px',
              borderRadius: '14px',
              backgroundColor: 'rgba(30, 142, 62, 0.1)',
              color: 'var(--google-green)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <span className="material-symbols-rounded">flag</span>
          </div>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 800, marginBottom: '0.75rem' }}>رسالتنا</h2>
          <p style={{ fontSize: '0.92rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.7 }}>
            تمكين المبتكرين والباحثين في جامعة الأزهر عبر توفير التمويل الأولي، الإرشاد التجاري والقانوني، وتجهيزات المعامل المتقدمة لتحويل الأفكار إلى منتجات قابلة للتسويق والمنافسة عالمياً.
          </p>
        </div>
      </div>

      {/* Lab & Makerspace Section (Google Tech Feature Card) */}
      <section
        id="lab"
        className="google-surface-card"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem',
          alignItems: 'center',
        }}
      >
        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--google-blue)',
              backgroundColor: 'var(--google-blue-container)',
              padding: '0.2rem 0.75rem',
              borderRadius: '9999px',
              marginBottom: '0.75rem',
            }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: '0.95rem' }}>precision_manufacturing</span>
            التصنيع الرقمي والنمذجة
          </div>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', marginBottom: '1rem' }}>
            معمل التصنيع السريع FabLab &amp; Makerspace
          </h2>

          <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '1.25rem' }}>
            يمتلك مركز الابتكار ورواق واحداً من أحدث معامل التصنيع الرقمي الجامعية في مصر، مجهزاً بأحدث طابعات 3D، ماكينات الـ CNC، قواطع الليزر فائقة الدقة، ومحطات اللحام والبرمجة الدقيقة لتمكين الفرق من بناء النموذج الأولي خلال أيام.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface)' }}>
              <span className="material-symbols-rounded" style={{ color: 'var(--google-blue)' }}>check_circle</span>
              طابعات ثلاثية الأبعاد صناعية
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface)' }}>
              <span className="material-symbols-rounded" style={{ color: 'var(--google-blue)' }}>check_circle</span>
              ماكينات تقطيع ليزر عالية الدقة
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface)' }}>
              <span className="material-symbols-rounded" style={{ color: 'var(--google-blue)' }}>check_circle</span>
              محطات اختبار الدوائر الإلكترونية
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface)' }}>
              <span className="material-symbols-rounded" style={{ color: 'var(--google-blue)' }}>check_circle</span>
              ميكروسكوبات رقمية لفحص المواد
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: 'var(--elevation-2)',
              border: '1px solid var(--md-sys-color-outline-variant)',
              maxWidth: '460px',
              width: '100%',
            }}
          >
            <img src="/images/tech_lab.png" alt="معمل التصنيع السريع" style={{ width: '100%', height: 'auto' }} />
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="google-surface-card">
        <h2 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1.5rem', textAlign: 'center' }}>
          قيم ومبادئ العمل في حاضنة رواق
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
          <div style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>💡</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>الابتكار الهادف</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
              التركيز على ابتكارات تخدم احتياجات المجتمع وتحل أزمات حقيقية في الصناعة والبيئة.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🤝</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>الشفافية والتكامل</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
              تقييم عادل لجميع الأفكار وبناء شراكات وثيقة مع قطاع الأعمال والاستثمار.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌱</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>الاستدامة والأثر</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
              بناء شركات قادرة على الصمود المالي وخلق فرص عمل واعدة للشباب والباحثين.
            </p>
          </div>

          <div style={{ textAlign: 'center', padding: '1.25rem' }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🏆</div>
            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.35rem' }}>الجودة والتميز</h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
              معايير احتضان دولية تؤهل المشروعات للمنافسة في الأسواق الإقليمية والعالمية.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
