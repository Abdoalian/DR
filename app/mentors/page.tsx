import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'شبكة الموجهين والخبراء | حاضنة الأعمال التكنولوجية رواق',
  description: 'تعرف على نخبة الاستشاريين والموجهين الأكاديميين والصناعيين الداعمين لفرق حاضنة رواق.',
};

export default function MentorsPage() {
  return (
    <>
      {/* Page Banner */}
      <div className="page-banner">
        <div className="page-banner-container">
          <div className="page-banner-content">
            <h1 className="page-title">شبكة الموجهين والخبراء</h1>
            <p className="page-subtitle">نخبة من الاستشاريين والخبراء الأكاديميين والصناعيين لدعم وتوجيه الشركات المحتضنة</p>
            <div className="breadcrumbs">
              <Link href="/">الرئيسية</Link> <span>/</span> <span>الموجهون والخبراء</span>
            </div>
          </div>
          <div className="page-banner-visual">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/hero.png" alt="الموجهون والخبراء" style={{ maxHeight: '200px' }} />
          </div>
        </div>
      </div>

      {/* Mentors Grid */}
      <section className="section">
        <div className="section-header">
          <span className="section-tag">الإرشاد الفني والتجاري</span>
          <h2 className="section-title">استشاريو وموجهو حاضنة رواق</h2>
          <p className="section-subtitle">نوفر للشركات المحتضنة جلسات توجيهية خاصة مع قادة ريادة الأعمال والاستثمار.</p>
        </div>

        <div className="mentors-grid">
          {/* Featured Chief Mentor / Director */}
          <div className="mentor-card featured">
            <div className="mentor-header">
              <div className="mentor-avatar">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/dr_mohamed_galal.jpg"
                  alt="أ.د. محمد جلال فرغلي"
                />
              </div>
              <div>
                <div className="hn-tag" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.5rem' }}>
                  <i className="fas fa-crown"></i> مدير المركز ورئيس شبكة الحاضنات
                </div>
                <h3 className="mentor-name" style={{ fontSize: '1.45rem', fontWeight: 800, marginBottom: '0.35rem' }}>
                  أ.د. محمد جلال فرغلي
                </h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
                  عميد كلية الهندسة ومدير مركز الابتكار وريادة الأعمال - جامعة الأزهر
                </p>
              </div>
            </div>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.95rem', marginBottom: '1.25rem' }}>
              المشرف العام والرئيسي على حاضنة الأعمال التكنولوجية &ldquo;رواق&rdquo; بجميع فروعها ووحداتها التخصصية، والقائم على تطوير المنظومة الابتكارية ودعم الباحثين والمبتكرين في تحويل أفكارهم التطبيقية إلى شركات ناشئة ذات أثر اقتصادي.
            </p>
            <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
              <span className="hn-tag"><i className="fas fa-user-tie"></i> الإشراف الريادي العام</span>
              <span className="hn-tag" style={{ background: 'var(--google-green-container)', color: 'var(--google-green)' }}><i className="fas fa-building-columns"></i> إدارة مركز الابتكار</span>
              <span className="hn-tag" style={{ background: 'var(--google-yellow-container)', color: 'var(--google-yellow)' }}><i className="fas fa-microscope"></i> التكنولوجيا والهندسة</span>
              <span className="hn-tag" style={{ background: 'var(--google-blue-container)', color: 'var(--google-blue)' }}><i className="fas fa-chart-line"></i> التخطيط الاستراتيجي</span>
            </div>
          </div>

          {/* Mentor 1 */}
          <div className="mentor-card">
            <div className="mentor-avatar" style={{ background: 'var(--google-blue-container)', color: 'var(--google-blue)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1rem' }}>
              <i className="fas fa-user-tie"></i>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.35rem' }}>د. أحمد عبد الفتاح</h3>
            <p style={{ color: 'var(--primary)', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.75rem' }}>استشاري التمويل وجولات الاستثمار</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              خبير في تقييم الشركات الناشئة وجاهزية الاستثمار مع أكثر من 15 عاماً من الخبرة في صناديق رأس المال المخاطر VC.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>Venture Capital</span>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>Valuation</span>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>Fintech</span>
            </div>
          </div>

          {/* Mentor 2 */}
          <div className="mentor-card">
            <div className="mentor-avatar" style={{ background: 'var(--google-red-container)', color: 'var(--google-red)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1rem' }}>
              <i className="fas fa-user-graduate"></i>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.35rem' }}>أ.د. فاطمة الزهراء</h3>
            <p style={{ color: 'var(--primary)', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.75rem' }}>أستاذة هندسة البرمجيات والذكاء الاصطناعي</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              مشرفة على معامل الأبحاث المتقدمة بالجامعة ومستشارة تطوير المنتجات الرقمية والأنظمة الذكية وتطبيقات الحوسبة.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>AI & ML</span>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>Architecture</span>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>R&D</span>
            </div>
          </div>

          {/* Mentor 3 */}
          <div className="mentor-card">
            <div className="mentor-avatar" style={{ background: 'var(--google-green-container)', color: 'var(--google-green)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1rem' }}>
              <i className="fas fa-scale-balanced"></i>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.35rem' }}>م. محمود الشريف</h3>
            <p style={{ color: 'var(--primary)', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.75rem' }}>مستشار الملكية الفكرية وتأسيس الشركات</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              متخصص في تسجيل براءات الاختراع والعقود الاستثمارية وصياغة اتفاقيات الشركاء المؤسسين وحماية الأصول الفكرية.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>IP & Patents</span>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>Legal</span>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>Corporate</span>
            </div>
          </div>

          {/* Mentor 4 */}
          <div className="mentor-card">
            <div className="mentor-avatar" style={{ background: 'var(--google-yellow-container)', color: 'var(--google-yellow)', width: '60px', height: '60px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', marginBottom: '1rem' }}>
              <i className="fas fa-chart-pie"></i>
            </div>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800, marginBottom: '0.35rem' }}>م. سارة جلال</h3>
            <p style={{ color: 'var(--primary)', fontSize: '0.86rem', fontWeight: 600, marginBottom: '0.75rem' }}>خبيرة نمو وتسويق رقمي (Growth Hacking)</p>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '1.25rem' }}>
              ساعدت أكثر من 20 شركة ناشئة في الوصول للعملاء الأولين وبناء استراتيجيات الذهاب للسوق GTM واكتساب المستخدمين.
            </p>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>Growth</span>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>GTM Strategy</span>
              <span className="hn-tag" style={{ fontSize: '0.72rem' }}>Marketing</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
