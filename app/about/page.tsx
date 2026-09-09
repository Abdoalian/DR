import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'عن الحاضنة | حاضنة الأعمال التكنولوجية رواق - جامعة الأزهر',
  description:
    'تعرّف على رؤية ورسالة وأهداف حاضنة الأعمال التكنولوجية رواق بمركز الابتكار وريادة الأعمال جامعة الأزهر.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-container">
          <div className="page-banner-content">
            <h1 className="page-title">عن حاضنة رواق RWAQ</h1>
            <p className="page-subtitle">نصنع المستقبل الريادي من قلب جامعة الأزهر لتمكين المبتكرين والباحثين في مصر</p>
            <div className="breadcrumbs">
              <Link href="/">الرئيسية</Link> <span>/</span> <span>عن رواق</span>
            </div>
          </div>
          <div className="page-banner-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/about_hero.png" alt="عن رواق" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section">
        <div className="split-feature">
          <div className="split-feature-content">
            <span className="section-tag">مركز الابتكار وريادة الأعمال</span>
            <h2 className="section-title">رؤيتنا ورسالتنا المؤسسية</h2>
            <p className="hero-desc">
              تُعد حاضنة الأعمال التكنولوجية <strong>رواق (RWAQ)</strong> منصة انطلاق وطنية رائدة تهدف إلى احتضان الأفكار
              التكنولوجية والابتكارية النابعة من كليات جامعة الأزهر ومختلف المؤسسات البحثية والتعليمية في مصر، وتحويلها
              إلى مشروعات اقتصادية ناشئة قادرة على المنافسة والنمو.
            </p>
            <ul className="feature-check-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--google-green)' }}></i>
                <span>دعم الملكية الفكرية وبراءات الاختراع للجامعة.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--google-green)' }}></i>
                <span>ربط البحث العلمي باحتياجات الصناعة والسوق المحلي والإقليمي.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--google-green)' }}></i>
                <span>تمكين شباب المبتكرين وتزويدهم بالمعرفة الاستثمارية الحديثة.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--google-green)' }}></i>
                <span>خلق فرص عمل نوعية وتطوير اقتصاد المعرفة.</span>
              </li>
            </ul>
          </div>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/coworking.png"
              alt="مساحة العمل بمركز الابتكار"
              style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
        </div>

        {/* Tech Labs Showcase */}
        <div className="split-feature" style={{ marginTop: '5rem' }}>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/tech_lab.png"
              alt="معمل الابتكار والتصنيع"
              style={{ width: '100%', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)' }}
            />
          </div>
          <div className="split-feature-content">
            <span className="section-tag">البنية التحتية والمختبرات</span>
            <h2 className="section-title">معامل النمذجة والتصنيع السريع (Makerspace & Prototyping)</h2>
            <p className="hero-desc">
              تضم الحاضنة أحدث معامل تصنيع النماذج الأولية المجهزة بطابعات ثلاثية الأبعاد، أجهزة اختبار الدوائر
              الإلكترونية، وحدات إنترنت الأشياء IoT، ومعدات الذكاء الاصطناعي لتمكين رواد الأعمال من تحويل مخططاتهم إلى
              منتجات ملموسة.
            </p>
            <ul className="feature-check-list" style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--google-blue)' }}></i>
                <span>معامل تصنيع إلكترونيات وروبوتات متطورة.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--google-blue)' }}></i>
                <span>استشارات فنية من كبار أساتذة الهندسة والعلوم.</span>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
                <i className="fas fa-check-circle" style={{ color: 'var(--google-blue)' }}></i>
                <span>استضافات ومساحات عمل مجهزة للفرق المحتضنة.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Incubator Values */}
      <section className="section" style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '4rem 2rem', marginBottom: '4rem', border: '1px solid var(--border)' }}>
        <div className="section-header">
          <span className="section-tag">قيمنا الجوهرية</span>
          <h2 className="section-title">المبادئ التي تقود كل خطوة في رواق</h2>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fas fa-shield-alt"></i>
            </div>
            <h3 className="pillar-title">النزاهة والشفافية</h3>
            <p className="pillar-desc">
              تقييم عادل واختيار مبني على الكفاءة والتنافسية العلمية لضمان وصول الدعم للمستحقين والأفكار الأكثر جدوى.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fas fa-handshake"></i>
            </div>
            <h3 className="pillar-title">الشراكة والتكامل</h3>
            <p className="pillar-desc">
              نعمل كشركاء نجاح حقيقيين مع الفرق المحتضنة، نبني معهم نموذج العمل ونساندهم حتى وصولهم للاستثمار.
            </p>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fas fa-bolt"></i>
            </div>
            <h3 className="pillar-title">الابتكار والأثر</h3>
            <p className="pillar-desc">
              نركز على المشروعات التي تقدم حلولاً تكنولوجية لتحديات حقيقية في مجالات الصحة والزراعة والمناخ والطاقة.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
