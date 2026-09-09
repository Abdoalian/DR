'use client';

import Link from 'next/link';
import NewsCarousel from '@/components/NewsCarousel';
import FaqAccordion from '@/components/FaqAccordion';

export default function HomePage() {
  const openApplyModal = () => {
    window.dispatchEvent(new CustomEvent('open-apply-modal'));
  };

  return (
    <>
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <i className="fas fa-award"></i>
            <span>حاضنة الأعمال التكنولوجية - جامعة الأزهر</span>
          </div>
          <h1 className="hero-title">
            نحو مستقبلك الريادي مع <br />
            <span className="gradient-text">حاضنة الأعمال رواق RWAQ</span>
          </h1>
          <p className="hero-desc">
            نساعد الطلاب والباحثين والمبتكرين في جامعة الأزهر ومصر على تحويل أفكارهم البحثية والتكنولوجية إلى شركات
            ناشئة واعدة قابلة للتوسع وجاهزة لجولات استثمارية ناجحة.
          </p>

          <div className="hero-buttons">
            <button onClick={openApplyModal} className="btn btn-primary open-modal-btn">
              <i className="fas fa-paper-plane"></i> تقديم طلب الانضمام
            </button>
            <Link href="/programs" className="btn btn-secondary">
              <i className="fas fa-compass"></i> استكشف برامج الاحتضان
            </Link>
          </div>

          <div className="hero-stats-row">
            <div className="stat-item">
              <h3>+64,923</h3>
              <p>إجمالي عدد المتدربين</p>
            </div>
            <div className="stat-item">
              <h3>+164</h3>
              <p>المشروعات المتخرجة من البرامج</p>
            </div>
            <div className="stat-item">
              <h3>+93</h3>
              <p>الجهات المستفيدة</p>
            </div>
            <div className="stat-item">
              <h3>+78</h3>
              <p>عدد الأنشطة والفعاليات</p>
            </div>
            <div className="stat-item">
              <h3>+1,891</h3>
              <p>الساعات التدريبية التخصصية</p>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-visual-container">
            <div className="hero-image-wrapper">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/hero.png" alt="مبتكرون ومؤسسون في حاضنة رواق" />
            </div>

            <div className="hero-highlights-card">
              <div className="hh-header">
                <i className="fas fa-sparkles"></i>
                <span>منظومة ابتكارية متكاملة</span>
              </div>
              <div className="hh-list">
                <div className="hh-item">
                  <div className="hh-icon">
                    <i className="fas fa-award"></i>
                  </div>
                  <div className="hh-text">
                    <h4>حاضنة معتمدة من ASRT</h4>
                    <p>إشراف علمي وأكاديمي متخصص</p>
                  </div>
                </div>
                <div className="hh-item">
                  <div className="hh-icon" style={{ background: 'var(--google-green-container)', color: 'var(--google-green)' }}>
                    <i className="fas fa-hand-holding-dollar"></i>
                  </div>
                  <div className="hh-text">
                    <h4>دعم تمويلي محافِظ</h4>
                    <p>بدون اقتطاع ملكية تعجيزية</p>
                  </div>
                </div>
                <div className="hh-item">
                  <div className="hh-icon" style={{ background: 'var(--google-yellow-container)', color: 'var(--google-yellow)' }}>
                    <i className="fas fa-microscope"></i>
                  </div>
                  <div className="hh-text">
                    <h4>معامل تصنيع واختبار</h4>
                    <p>تجهيزات لتطوير النموذج MVP</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hero News Carousel */}
      <NewsCarousel />

      {/* Strategic Affiliations / Partners Section */}
      <div className="affiliations">
        <div className="affiliations-container">
          <h3 className="affiliations-title">شركاء النجاح والاعتماد المؤسسي</h3>
          <div className="affiliations-grid">
            <div className="partner-logo">
              <i className="fas fa-university"></i> جامعة الأزهر
            </div>
            <div className="partner-logo">
              <i className="fas fa-flask"></i> أكاديمية البحث العلمي والتكنولوجيا (ASRT)
            </div>
            <div className="partner-logo">
              <i className="fas fa-lightbulb"></i> صندوق رعاية المبتكرين والنوابغ (ISF)
            </div>
            <div className="partner-logo">
              <i className="fas fa-seedling"></i> البرنامج القومي للحاضنات التكنولوجية (انطلاق)
            </div>
          </div>
        </div>
      </div>

      {/* Pillars Section */}
      <section id="services" className="section">
        <div className="section-header">
          <span className="section-tag">ركائز الدعم</span>
          <h2 className="section-title">ماذا تقدم حاضنة رواق لمشروعك؟</h2>
          <p className="section-subtitle">
            حزمة متكاملة من الخدمات الفنية والتمويلية والاستشارية المصممة لتمكين أصحاب الأفكار من دخول السوق بقوة.
          </p>
        </div>

        <div className="pillars-grid">
          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fas fa-sack-dollar"></i>
            </div>
            <h3 className="pillar-title">تمويل أولي ودعم بدون حصة</h3>
            <p className="pillar-desc">
              منح وبذور تمويلية لتغطية نفقات تطوير النموذج الأولي والتحقق من السوق دون التنازل عن نسب ملكية مبكرة
              تعيق جولات الاستثمار.
            </p>
            <Link href="/programs" className="pillar-link">
              تفاصيل الدعم التمويلي <i className="fas fa-arrow-left"></i>
            </Link>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fas fa-microscope"></i>
            </div>
            <h3 className="pillar-title">معامل تخصصية وبيئة تصنيع</h3>
            <p className="pillar-desc">
              إمكانية الوصول لمعامل تكنولوجيا النانو، التصنيع الرقمي، معامل الهندسة والميكاترونكس، ومعامل التحاليل الطبية
              بجامعة الأزهر.
            </p>
            <Link href="/programs#incubators-network" className="pillar-link">
              شبكة المعامل والوحدات <i className="fas fa-arrow-left"></i>
            </Link>
          </div>

          <div className="pillar-card">
            <div className="pillar-icon">
              <i className="fas fa-chalkboard-user"></i>
            </div>
            <h3 className="pillar-title">توجيه واستشارات نخبوية</h3>
            <p className="pillar-desc">
              جلسات إرشاد وتوجيه 1-on-1 مع خبراء صناعيين ومستشارين قانونيين وماليين لصياغة نموذج عمل تجاري قوي وقابل
              للتوسع.
            </p>
            <Link href="/mentors" className="pillar-link">
              تعرف على الموجهين <i className="fas fa-arrow-left"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Leadership Showcase Section */}
      <section className="section showcase-split-section">
        <div className="split-feature">
          <div className="split-feature-media">
            <div className="hero-image-wrapper" style={{ maxWidth: '320px', margin: '0 auto' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/dr_mohamed_galal.jpg"
                alt="أ.د. محمد جلال فرغلي - عميد كلية الهندسة ومدير مركز الابتكار"
                style={{ height: '360px', objectFit: 'cover' }}
              />
            </div>
          </div>
          <div className="split-feature-content">
            <span className="section-tag">قيادة المنظومة</span>
            <h2 className="section-title">رؤية أكاديمية استراتيجية تقود الابتكار</h2>
            <p>
              تحت إشراف وتوجيه <strong>أ.د. محمد جلال فرغلي</strong> (عميد كلية الهندسة بجامعة الأزهر بقنا، مستشار رئيس الجامعة للابتكار وريادة الأعمال، وعضو المجلس الوطني للتعليم والابتكار)، نجحت حاضنة رواق في بناء شبكة ممتدة من الحاضنات التخصصية التي تربط البحث العلمي بالصناعة الوطنية.
            </p>
            <div className="hero-buttons">
              <Link href="/about" className="btn btn-secondary">
                <i className="fas fa-users"></i> عن فريق وقيادة الحاضنة
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="section">
        <div className="section-header">
          <span className="section-tag">رحلة النمو</span>
          <h2 className="section-title">خطوات مسار الاحتضان في رواق</h2>
          <p className="section-subtitle">منهجية علمية وعملية مرحلية تضمن تحويل الابتكار إلى شركة ناجحة في السوق.</p>
        </div>

        <div className="timeline-container">
          <div className="timeline-steps">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3 className="step-title">تقديم الطلب والفرز</h3>
              <p className="step-desc">استقبال أفكار المشروعات وتقييمها من قِبل لجنة الخبراء بناءً على الابتكار وحاجة السوق.</p>
            </div>

            <div className="step-card">
              <div className="step-number">2</div>
              <h3 className="step-title">معسكر التقييم والاحتضان</h3>
              <p className="step-desc">ورش عمل مكثفة لتدريب الفرق على نموذج الأعمال والتأهل للمرحلة التمويلية.</p>
            </div>

            <div className="step-card">
              <div className="step-number">3</div>
              <h3 className="step-title">تطوير الـ MVP والمنتج</h3>
              <p className="step-desc">تقديم التمويل والدعم الفني لبناء النموذج الأولي واختباره مع مستخدمين حقيقيين.</p>
            </div>

            <div className="step-card">
              <div className="step-number">4</div>
              <h3 className="step-title">يوم العرض والتشبيك Demo Day</h3>
              <p className="step-desc">عرض المشروعات أمام المستثمرين ورجال الأعمال للحصول على جولات استثمارية وتوسع.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Startups Showcase Preview */}
      <section id="startups" className="section">
        <div className="section-header">
          <span className="section-tag">قصص نجاح</span>
          <h2 className="section-title">شركات واعدة تخرجت واحتضنت في رواق</h2>
          <p className="section-subtitle">نخبة من المشروعات التكنولوجية التي تحولت لشركات حقيقية تخدم السوق المصري والعربي.</p>
        </div>

        <div className="startups-grid">
          <div className="startup-card">
            <div className="startup-header">
              <div className="startup-logo">
                <i className="fas fa-brain"></i>
              </div>
              <span className="hn-tag">ذكاء اصطناعي</span>
            </div>
            <div className="startup-body" style={{ padding: '1.25rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>دراية AI (Deraya)</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                منصة تحليل بيانات ومعالجة لغة طبيعية للمؤسسات الطبية والتعليمية، تسهم في أتمتة العمليات التشخيصية.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-light)' }}>
                <span>مؤسس: م. عبد الرحمن محمود</span>
                <span style={{ color: 'var(--google-green)', fontWeight: 700 }}>محتضنة فعالة</span>
              </div>
            </div>
          </div>

          <div className="startup-card">
            <div className="startup-header">
              <div className="startup-logo">
                <i className="fas fa-seedling"></i>
              </div>
              <span className="hn-tag" style={{ background: 'var(--google-green-container)', color: 'var(--google-green)' }}>تكنولوجيا زراعية</span>
            </div>
            <div className="startup-body" style={{ padding: '1.25rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>أكوا فارم (AquaFarm)</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                أنظمة استزراع مائي ذكية موفرة لاستهلاك المياه بنسبة 85% معتمدة على حساسات إنترنت الأشياء IoT.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-light)' }}>
                <span>مؤسس: م. كريم الشبراوي</span>
                <span style={{ color: 'var(--google-green)', fontWeight: 700 }}>خريج الدورة 1</span>
              </div>
            </div>
          </div>

          <div className="startup-card">
            <div className="startup-header">
              <div className="startup-logo">
                <i className="fas fa-atom"></i>
              </div>
              <span className="hn-tag" style={{ background: 'var(--google-yellow-container)', color: 'var(--google-yellow)' }}>تكنولوجيا النانو</span>
            </div>
            <div className="startup-body" style={{ padding: '1.25rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>نانوتك فارما (NanoTech)</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                مركبات نانوية متقدمة لتنقية المياه العادمة ومعالجة الملوثات الصناعية بتكلفة منخفضة وكفاءة مرتفعة.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-light)' }}>
                <span>مؤسس: د. محمد مصطفى</span>
                <span style={{ color: 'var(--google-blue)', fontWeight: 700 }}>مرحلة الـ MVP</span>
              </div>
            </div>
          </div>

          <div className="startup-card">
            <div className="startup-header">
              <div className="startup-logo">
                <i className="fas fa-heart-pulse"></i>
              </div>
              <span className="hn-tag" style={{ background: 'var(--google-red-container)', color: 'var(--google-red)' }}>تكنولوجيا طبية</span>
            </div>
            <div className="startup-body" style={{ padding: '1.25rem 1.5rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.5rem' }}>سند للرعاية الصحية (Sanad)</h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1rem' }}>
                تطبيق وحلول طبية عن بعد لربط المرضى في الأقاليم مع نخبة الأطباء الاستشاريين وإدارة الملفات الصحية.
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.82rem', color: 'var(--text-light)' }}>
                <span>مؤسسة: د. آية فاروق</span>
                <span style={{ color: 'var(--google-green)', fontWeight: 700 }}>محتضنة فعالة</span>
              </div>
            </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <Link href="/startups" className="btn btn-secondary">
            <i className="fas fa-rocket"></i> تصفح دليل الشركات المحتضنة بالكامل
          </Link>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="section" style={{ paddingTop: '1rem', paddingBottom: '2rem' }}>
        <div className="cta-banner">
          <h2 className="cta-title">هل تملك فكرة مبتكرة أو نموذجاً أولياً واعداً؟</h2>
          <p className="cta-desc">
            باب التقديم لدورة الاحتضان الجديدة مفتوح الآن لطلاب وباحثي جامعة الأزهر والمبتكرين في مصر.
            احصل على التمويل والمعامل والتوجيه لتأسيس شركتك.
          </p>
          <button onClick={openApplyModal} className="btn btn-primary" style={{ fontSize: '1.05rem', padding: '0.85rem 2.25rem' }}>
            <i className="fas fa-rocket"></i> تقديم طلب الاحتضان الآن
          </button>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="section-header">
          <span className="section-tag">إجابات واستفسارات</span>
          <h2 className="section-title">الأسئلة الشائعة</h2>
          <p className="section-subtitle">كل ما تود معرفته عن شروط وانضمام المشروعات لحاضنة الأعمال رواق.</p>
        </div>

        <FaqAccordion />
      </section>
    </>
  );
}
