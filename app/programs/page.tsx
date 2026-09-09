'use client';

import Link from 'next/link';

export default function ProgramsPage() {
  const openApplyModal = () => {
    window.dispatchEvent(new CustomEvent('open-apply-modal'));
  };

  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-container">
          <div className="page-banner-content">
            <h1 className="page-title">البرامج ومسارات الدعم</h1>
            <p className="page-subtitle">برامج متخصصة وشبكة حاضنات تكنولوجية تغطي مختلف مجالات الابتكار والأقاليم</p>
            <div className="breadcrumbs">
              <Link href="/">الرئيسية</Link> <span>/</span> <span>البرامج والاحتضان</span>
            </div>
          </div>
          <div className="page-banner-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/programs_hero.png" alt="البرامج والاحتضان" />
          </div>
        </div>
      </div>

      {/* Main Tracks */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">مسارات العمل</span>
          <h2 className="section-title">مسارات وبرامج الاحتضان المتاحة</h2>
          <p className="section-subtitle">اختر المسار الأنسب لمرحلة مشروعك الحالية للاستفادة القصوى من خدمات الدعم والتمويل.</p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fas fa-seedling"></i>
            </div>
            <h3 className="pillar-title">مسار ما قبل الاحتضان (Pre-Incubation)</h3>
            <p className="pillar-desc">
              مخصص للأفكار والمشروعات في طور البداية. يشمل معسكرات توليد الأفكار، دراسة الجدوى، وبناء النموذج الأولي
              الأول MVP مع تدريب مكثف على ريادة الأعمال.
            </p>
            <button onClick={openApplyModal} className="btn btn-secondary btn-sm" style={{ marginTop: '1.5rem' }}>
              التقديم في المسار <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon" style={{ background: 'var(--google-green-container)', color: 'var(--google-green)' }}>
              <i className="fas fa-rocket"></i>
            </div>
            <h3 className="pillar-title">برنامج الاحتضان والتمويل الأولي (Incubation)</h3>
            <p className="pillar-desc">
              دعم شامل للمشروعات ذات النماذج الأولية المثبتة. تمويل أولي يصل إلى 300 ألف جنيه، إرشاد فني وتجاري، تسجيل
              الشركة رسمياً، ومساحات عمل ومعامل مجانية.
            </p>
            <button onClick={openApplyModal} className="btn btn-primary btn-sm" style={{ marginTop: '1.5rem' }}>
              التقديم في المسار <i className="fas fa-arrow-left"></i>
            </button>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon" style={{ background: 'var(--google-yellow-container)', color: 'var(--google-yellow)' }}>
              <i className="fas fa-graduation-cap"></i>
            </div>
            <h3 className="pillar-title">دعم مشروعات التخرج التطبيقية</h3>
            <p className="pillar-desc">
              تحويل مشروعات تخرج الطلاب المتميزة في كليات الهندسة والعلوم والطب والزراعة إلى نماذج قابلة للتسويق التجاري
              والتأسيس كشركات ناشئة واعدة.
            </p>
            <button onClick={openApplyModal} className="btn btn-secondary btn-sm" style={{ marginTop: '1.5rem' }}>
              التقديم في المسار <i className="fas fa-arrow-left"></i>
            </button>
          </div>
        </div>
      </section>

      {/* Incubators Network Section */}
      <section id="incubators-network" className="section" style={{ background: '#FFFFFF', borderRadius: 'var(--radius-xl)', padding: '4.5rem 2rem', marginBottom: '4rem', border: '1px solid var(--border)' }}>
        <div className="section-header">
          <span className="section-tag">الانتشار الجغرافي والتخصصي</span>
          <h2 className="section-title">شبكة حاضنات ووحدات رواق</h2>
          <p className="section-subtitle">
            شبكة ممتدة من الحاضنات التخصصية التابعة لمركز الابتكار وريادة الأعمال جامعة الأزهر لتغطية الأقاليم والمجالات
            الدقيقة.
          </p>
        </div>

        <div className="incubators-grid">
          <div className="incubator-card" id="incubator-cairo">
            <div className="incubator-icon">
              <i className="fas fa-city"></i>
            </div>
            <h3 className="incubator-title">حاضنة رواق القاهرة</h3>
            <p className="incubator-desc">
              المقر الرئيسي بمدينة نصر. تحتضن مشروعات التكنولوجيا العامة، البرمجيات، والذكاء الاصطناعي مع توفير
              مساحات عمل مشتركة.
            </p>
            <span className="incubator-badge">القاهرة - المقر الرئيسي</span>
          </div>

          <div className="incubator-card" id="incubator-assiut">
            <div className="incubator-icon" style={{ background: 'var(--google-green-container)', color: 'var(--google-green)' }}>
              <i className="fas fa-location-dot"></i>
            </div>
            <h3 className="incubator-title">حاضنة رواق أسيوط</h3>
            <p className="incubator-desc">
              تخدم مبتكري وباحثي محافظات الصعيد بالتركيز على التكنولوجيا الزراعية والحلول الهندسية والصناعية الملائمة
              للصعيد.
            </p>
            <span className="incubator-badge">أسيوط - الوجه القبلي</span>
          </div>

          <div className="incubator-card" id="incubator-qena">
            <div className="incubator-icon" style={{ background: 'var(--google-yellow-container)', color: 'var(--google-yellow)' }}>
              <i className="fas fa-leaf"></i>
            </div>
            <h3 className="incubator-title">حاضنة رواق قنا</h3>
            <p className="incubator-desc">
              مقر كلية الهندسة بقنا. رائدة في دعم الطاقة المتجددة والتطبيقات الهندسية المتقدمة لجنوب الصعيد.
            </p>
            <span className="incubator-badge">قنا - جنوب الصعيد</span>
          </div>

          <div className="incubator-card" id="incubator-nano">
            <div className="incubator-icon" style={{ background: 'var(--google-blue-container)', color: 'var(--google-blue)' }}>
              <i className="fas fa-atom"></i>
            </div>
            <h3 className="incubator-title">رواق تكنولوجيا النانو</h3>
            <p className="incubator-desc">
              حاضنة تخصصية متطورة توفر المعامل والمواد لتطوير حلول النانو المتقدمة في الصناعة ومعالجة المياه.
            </p>
            <span className="incubator-badge">تخصصي دقيق</span>
          </div>

          <div className="incubator-card" id="incubator-medical">
            <div className="incubator-icon" style={{ background: 'var(--google-red-container)', color: 'var(--google-red)' }}>
              <i className="fas fa-heart-pulse"></i>
            </div>
            <h3 className="incubator-title">حاضنة رواق الطبية</h3>
            <p className="incubator-desc">
              ربط ابتكارات كليات الطب والصيدلة وطب الأسنان بالشركات الطبية لتطوير الأجهزة والمستحضرات الدوائية.
            </p>
            <span className="incubator-badge">رعاية صحية</span>
          </div>

          <div className="incubator-card" id="incubator-greentech">
            <div className="incubator-icon" style={{ background: 'var(--google-green-container)', color: 'var(--google-green)' }}>
              <i className="fas fa-globe-americas"></i>
            </div>
            <h3 className="incubator-title">مركز التكنولوجيا الخضراء</h3>
            <p className="incubator-desc">
              متخصص في حلول تغير المناخ، الطاقة البديلة، إعادة التدوير، والاقتصاد الدائري الأخضر والمستدام.
            </p>
            <span className="incubator-badge">استدامة ومناخ</span>
          </div>
        </div>
      </section>
    </>
  );
}
