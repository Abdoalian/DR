'use client';

import React from 'react';
import Link from 'next/link';
import NewsCarousel from '@/components/NewsCarousel';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const openModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
      {/* 1. Google App Hub Hero Banner */}
      <section
        className="google-surface-card"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F0F4F9 100%)',
          padding: '2.5rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
            alignItems: 'center',
          }}
        >
          <div>
            {/* Google M3 Pill Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                backgroundColor: 'var(--google-blue-container)',
                color: 'var(--google-on-blue-container)',
                padding: '0.4rem 1rem',
                borderRadius: '9999px',
                fontSize: '0.85rem',
                fontWeight: 700,
                marginBottom: '1.25rem',
              }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '1.1rem', color: 'var(--google-blue)' }}>
                verified
              </span>
              منظومة الابتكار وريادة الأعمال - جامعة الأزهر
            </div>

            <h1
              style={{
                fontSize: '2.4rem',
                fontWeight: 800,
                color: 'var(--md-sys-color-on-surface)',
                lineHeight: 1.25,
                marginBottom: '1rem',
              }}
            >
              حاضنة الأعمال التكنولوجية <span style={{ color: 'var(--google-blue)' }}>رواق RWAQ</span>
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                color: 'var(--md-sys-color-on-surface-variant)',
                lineHeight: 1.7,
                marginBottom: '2rem',
                maxWidth: '600px',
              }}
            >
              بيئة عمل ابتكارية متطورة تحول مخرجات البحث العلمي والأفكار الريادية لطلاب وباحثي جامعة الأزهر إلى شركات ناشئة منافسة في الأسواق الإقليمية والدولية.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem', alignItems: 'center' }}>
              <button
                onClick={openModal}
                className="google-fab-extended"
                style={{ fontSize: '1rem', padding: '0.8rem 1.75rem' }}
              >
                <span className="material-symbols-rounded">rocket_launch</span>
                تقديم فكرة مشروعك الآن
              </button>

              <Link
                href="/programs"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.4rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--google-blue)',
                  fontWeight: 600,
                  fontSize: '0.92rem',
                  transition: 'all 0.15s',
                }}
              >
                <span className="material-symbols-rounded">hub</span>
                استكشف شبكة الحاضنات (6)
              </Link>

              <Link
                href="/startups"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  padding: '0.75rem 1.2rem',
                  borderRadius: '9999px',
                  color: 'var(--md-sys-color-on-surface-variant)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                }}
              >
                <span>دليل الشركات المحتضنة</span>
                <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>arrow_back</span>
              </Link>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div
              style={{
                position: 'relative',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--elevation-2)',
                border: '1px solid var(--md-sys-color-outline-variant)',
                maxWidth: '480px',
                width: '100%',
              }}
            >
              <img
                src="/images/hero.png"
                alt="مركز الابتكار ورواق"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Google Metrics Grid (4-Colors) */}
      <section>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {/* Blue */}
          <div className="google-metric-card blue">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>
                الشركات المحتضنة
              </span>
              <span className="material-symbols-rounded" style={{ color: 'var(--google-blue)', fontSize: '1.4rem' }}>
                rocket_launch
              </span>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--google-blue)' }}>12+</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--google-blue)', fontWeight: 600, marginTop: '0.25rem' }}>
              دورة الاحتضان الأولى والثانية
            </div>
          </div>

          {/* Red */}
          <div className="google-metric-card red">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>
                شبكة الحاضنات والمراكز
              </span>
              <span className="material-symbols-rounded" style={{ color: 'var(--google-red)', fontSize: '1.4rem' }}>
                domain
              </span>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--google-red)' }}>6</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--google-red)', fontWeight: 600, marginTop: '0.25rem' }}>
              القاهرة، أسيوط، قنا، النانو، الطبية، الخضراء
            </div>
          </div>

          {/* Yellow */}
          <div className="google-metric-card yellow">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>
                أفكار وبحوث تم تقييمها
              </span>
              <span className="material-symbols-rounded" style={{ color: '#B06000', fontSize: '1.4rem' }}>
                insights
              </span>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: '#B06000' }}>250+</div>
            <div style={{ fontSize: '0.78rem', color: '#B06000', fontWeight: 600, marginTop: '0.25rem' }}>
              من كليات الهندسة والعلوم والطب والزراعة
            </div>
          </div>

          {/* Green */}
          <div className="google-metric-card green">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface-variant)' }}>
                معامل التصنيع السريع
              </span>
              <span className="material-symbols-rounded" style={{ color: 'var(--google-green)', fontSize: '1.4rem' }}>
                precision_manufacturing
              </span>
            </div>
            <div style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--google-green)' }}>100%</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--google-green)', fontWeight: 600, marginTop: '0.25rem' }}>
              نمذجة أولية وطباعة 3D وفحص تكنولوجي
            </div>
          </div>
        </div>
      </section>

      {/* 3. Google M3 Core Services & Pillars Grid */}
      <section className="google-surface-card">
        <div style={{ marginBottom: '1.75rem' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--google-blue)',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
            }}
          >
            المسارات وقدرات المنصة
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', marginTop: '0.3rem' }}>
            ماذا تقدم حاضنة رواق للمبتكرين والشركات؟
          </h2>
          <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.92rem', marginTop: '0.25rem' }}>
            حزمة دعم شاملة ومتكاملة مصممة لنقل المشروع من مجرد فكرة نظرية إلى كيان تجاري وصناعي ناجح.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {/* Pillar 1 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(11, 87, 208, 0.1)',
                color: 'var(--google-blue)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <span className="material-symbols-rounded">payments</span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>الدعم المالي والتمويل التأسيسي</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              منح مالية بدون اقتطاع من حصة الملكية تغطي تكاليف بناء النموذج الأولي والشهادات المعملية والمصروفات التأسيسية.
            </p>
          </div>

          {/* Pillar 2 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(30, 142, 62, 0.1)',
                color: 'var(--google-green)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <span className="material-symbols-rounded">build</span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>معامل النمذجة والتصنيع السريع</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              وصول مجاني لمعامل FabLab ومعدات القص بالليزر، الطباعة ثلاثية الأبعاد، ومعامل النانو تكنولوجي بجامعة الأزهر.
            </p>
          </div>

          {/* Pillar 3 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(249, 171, 0, 0.15)',
                color: '#B06000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <span className="material-symbols-rounded">gavel</span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>الملكية الفكرية والتأسيس القانوني</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              مساعدة قانونية متخصصة في تسجيل براءات الاختراع وصياغة عقود التأسيس واتفاقيات الشركاء والاستثمار.
            </p>
          </div>

          {/* Pillar 4 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '12px',
                backgroundColor: 'rgba(217, 48, 37, 0.1)',
                color: 'var(--google-red)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
              }}
            >
              <span className="material-symbols-rounded">co_present</span>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.5rem' }}>الإرشاد والربط بالمستثمرين</h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              شبكة استشارية من خبراء الأعمال والأكاديميين لتقديم توجيه مباشر وجلسات عرض أمام المستثمرين في Demo Day.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Leadership Profile Card (Google M3 Card) */}
      <section
        className="google-surface-card"
        style={{
          borderLeft: '4px solid var(--google-blue)',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'auto 1fr',
            gap: '1.75rem',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: 'var(--elevation-1)',
              border: '2px solid var(--md-sys-color-outline-variant)',
              flexShrink: 0,
            }}
          >
            <img
              src="/images/dr_mohamed_galal.jpg"
              alt="أ.د. محمد جلال فرغلي"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>

          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                fontSize: '0.78rem',
                fontWeight: 700,
                color: 'var(--google-blue)',
                backgroundColor: 'var(--google-blue-container)',
                padding: '0.2rem 0.75rem',
                borderRadius: '9999px',
                marginBottom: '0.5rem',
              }}
            >
              <span className="material-symbols-rounded" style={{ fontSize: '0.95rem' }}>star</span>
              رؤية القيادة الأكاديمية
            </div>
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)' }}>
              أ.د. محمد جلال فرغلي
            </h3>
            <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-outline)', marginBottom: '0.75rem' }}>
              عميد كلية الهندسة - جامعة الأزهر | مدير مركز الابتكار وريادة الأعمال ورئيس شبكة الحاضنات
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.7 }}>
              &ldquo;تسعى حاضنة رواق لتكون الجسر الحقيقي الذي يربط بين كليات وبحوث جامعة الأزهر العريقة وبين احتياجات التنمية والصناعة الوطنية، عبر رعاية العقول المبتكرة وتوفير التمويل والمختبرات اللازمة لتحويل الابتكار إلى قيمة اقتصادية مستدامة.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* 5. Google Stepper: Journey from Idea to Market */}
      <section className="google-surface-card">
        <div style={{ marginBottom: '2rem' }}>
          <span
            style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              color: 'var(--google-blue)',
              textTransform: 'uppercase',
            }}
          >
            المراحل التنفيذية
          </span>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', marginTop: '0.3rem' }}>
            رحلة المشروع الناشئ داخل حاضنة رواق
          </h2>
          <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.92rem' }}>
            4 خطوات منهجية معتمدة لاحتضان وتأهيل الفرق والشركات.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1.25rem',
            position: 'relative',
          }}
        >
          {/* Step 1 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--google-blue)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                marginBottom: '1rem',
              }}
            >
              1
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>التقديم والفرز الأولي</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              استقبال الأفكار عبر البوابة الرقمية ومراجعتها من قبل لجان التحكيم الفنية للتأكد من أصالة الفكرة وقابليتها للتطبيق.
            </p>
          </div>

          {/* Step 2 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--google-red)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                marginBottom: '1rem',
              }}
            >
              2
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>المعسكر التدريبي المكثف</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              معسكر تدريبي يركز على صياغة نموذج الأعمال (BMC)، أبحاث السوق، التحقق من رغبة العملاء، ودراسات الجدوى المالية.
            </p>
          </div>

          {/* Step 3 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--google-yellow)',
                color: '#041e49',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                marginBottom: '1rem',
              }}
            >
              3
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>الاحتضان وبناء النموذج الأولي</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              صرف المنحة التأسيسية، إتاحة معامل FabLab، والتوجيه الفني المتواصل لبناء النموذج الأولي (MVP) واختباره.
            </p>
          </div>

          {/* Step 4 */}
          <div
            style={{
              padding: '1.5rem',
              borderRadius: '20px',
              backgroundColor: 'var(--md-sys-color-surface-container-low)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                backgroundColor: 'var(--google-green)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 800,
                fontSize: '1rem',
                marginBottom: '1rem',
              }}
            >
              4
            </div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>التخرج ويوم المستثمرين</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6 }}>
              عرض المشروعات أمام المستثمرين وصناديق رأس المال المخاطر (Demo Day)، واستكمال التأسيس القانوني للشركة.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Recent News & Activities Section */}
      <section className="google-surface-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--google-blue)', textTransform: 'uppercase' }}>
              المركز الإعلامي
            </span>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', marginTop: '0.2rem' }}>
              أحدث الفعاليات والأنشطة
            </h2>
          </div>
          <Link
            href="/news"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.9rem',
              fontWeight: 600,
              color: 'var(--google-blue)',
            }}
          >
            عرض جميع الأخبار
            <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>arrow_back</span>
          </Link>
        </div>

        <NewsCarousel />
      </section>

      {/* 7. FAQ Section */}
      <section id="faq" className="google-surface-card">
        <div style={{ marginBottom: '1.5rem' }}>
          <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--google-blue)', textTransform: 'uppercase' }}>
            الأسئلة المتكررة
          </span>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', marginTop: '0.2rem' }}>
            إجابات على أكثر الاستفسارات الشائعة
          </h2>
        </div>

        <FaqAccordion />
      </section>
    </div>
  );
}
