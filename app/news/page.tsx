'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  categoryLabel: string;
  summary: string;
  content: string;
  image: string;
  accent: string;
  readTime: string;
}

const initialNews: NewsItem[] = [
  {
    id: '1',
    title: 'انطلاق فعاليات يوم عرض المشروعات Demo Day للدفعة الجديدة',
    date: '26 أغسطس 2026',
    category: 'events',
    categoryLabel: 'فعاليات ومعارض',
    summary: 'استعرضت 12 شركة ناشئة محتضنة حلولها التكنولوجية أمام عدد من كبار المستثمرين وصناديق الاستثمار الجريء.',
    content: 'شهد مركز الابتكار وريادة الأعمال بجامعة الأزهر فعاليات يوم عرض المشروعات Demo Day لشركات الدفعة الجديدة من حاضنة رواق. قدمت الفرق عروضاً تفاعلية تناولت حلولاً مبتكرة في مجالات الذكاء الاصطناعي والتكنولوجيا الطبية والزراعة الذكية، بحضور ممثلي صناديق الاستثمار الجريء وأعضاء هيئة التدريس وموجهي الأعمال.',
    image: '/images/event.png',
    accent: '#4285F4',
    readTime: '3 دقائق',
  },
  {
    id: '2',
    title: 'تطوير وتحديث معامل التصنيع السريع والميكروسكوبات الرقمية',
    date: '18 أغسطس 2026',
    category: 'development',
    categoryLabel: 'إنجازات وتطوير',
    summary: 'توفير معدات نمذجة جديدة ثلاثية الأبعاد لدعم المشروعات الهندسية والطبية وتكنولوجيا النانو بجامعة الأزهر.',
    content: 'أعلنت إدارة حاضنة رواق عن إتمام مرحلة التحديث والتطوير الشامل لمعامل النمذجة والتصنيع السريع (Makerspace & FabLab)، بما يتيح للفرق ورواد الأعمال تحويل ابتكاراتهم إلى نماذج أولية صناعية ملموسة بكفاءة وجودة عالية.',
    image: '/images/tech_lab.png',
    accent: '#34A853',
    readTime: '4 دقائق',
  },
  {
    id: '3',
    title: 'ورشة عمل مكثفة حول صياغة نموذج الأعمال والنمو المالي',
    date: '10 أغسطس 2026',
    category: 'workshops',
    categoryLabel: 'ورش عمل وتدريب',
    summary: 'جلسة تفاعلية بحضور نخبة من خبراء الإدارة المالية لتدريب الفرق على التوقعات المالية ومؤشرات الأداء الرئيسية KPIs.',
    content: 'أقيمت ورشة عمل متقدمة بقاعات مركز الابتكار شارك فيها أكثر من 30 رائد ورائدة أعمال، ركزت على تصميم نماذج التسعير، إدارة التدفقات النقدية، وحساب تكلفة اكتساب العميل وتجهيز العروض الاستثمارية للمستثمرين.',
    image: '/images/coworking.png',
    accent: '#FBBC04',
    readTime: '2 دقيقة',
  },
  {
    id: '4',
    title: 'توقيع بروتوكول تعاون لتأهيل الفرق لأسواق التكنولوجيا الخضراء',
    date: '28 يوليو 2026',
    category: 'partnerships',
    categoryLabel: 'شراكات استراتيجية',
    summary: 'شراكة جديدة لدعم الشركات الناشئة المتخصصة في الطاقة المتجددة وتدوير المخلفات بالتعاون مع منصة سبارك.',
    content: 'في إطار تفعيل مبادرات الاستدامة والعمل المناخي، وقعت حاضنة رواق اتفاقية تعاون لتعزيز مشاركة الشركات الناشئة في تحديات المناخ وتوفير منح واحتضان تخصصي للابتكارات البيئية الواعدة.',
    image: '/images/meeting.png',
    accent: '#EA4335',
    readTime: '3 دقائق',
  },
  {
    id: '5',
    title: 'معسكر تدريبي مكثف (Bootcamp) للأفكار المتقدمة في التكنولوجيا الطبية',
    date: '15 يوليو 2026',
    category: 'workshops',
    categoryLabel: 'ورش عمل وتدريب',
    summary: 'تدريب متخصص لأصحاب الابتكارات الطبية من كليات الطب والصيدلة وهندسة الأجهزة الطبية.',
    content: 'استمر المعسكر لمدة 5 أيام متتالية بهدف التحقق من الفكرة الطبية واستيفاء المتطلبات التنظيمية والتجارب المعملية قبل البدء في مرحلة الاحتضان الكامل.',
    image: '/images/workshop.png',
    accent: '#4285F4',
    readTime: '5 دقائق',
  },
  {
    id: '6',
    title: 'تكريم الفرق الفائزة بجوائز الابتكار وريادة الأعمال لجامعة الأزهر',
    date: '02 يوليو 2026',
    category: 'events',
    categoryLabel: 'فعاليات ومعارض',
    summary: 'احتفالية تكريم المشاريع الفائزة في مسابقة ريادة الأعمال السنوية برعاية قيادة الجامعة.',
    content: 'كرمت قيادة جامعة الأزهر وإدارة مركز الابتكار الفرق المتميزة التي استطاعت تقديم نماذج أولية عملية قابلة للتطبيق الصناعي والتجاري، مع منحهم جوائز نقدية ومسار احتضان مباشر في رواق.',
    image: '/images/hero.png',
    accent: '#34A853',
    readTime: '3 دقائق',
  },
];

const categories = [
  { id: 'all', label: 'جميع الأخبار والفعاليات' },
  { id: 'events', label: 'فعاليات ومعارض' },
  { id: 'workshops', label: 'ورش عمل وتدريب' },
  { id: 'development', label: 'إنجازات وتطوير' },
  { id: 'partnerships', label: 'شراكات استراتيجية' },
];

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState<NewsItem | null>(null);

  const filteredNews = initialNews.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>newspaper</span>
              المركز الإعلامي والأنشطة
            </div>
            <h1 className="page-title">الأخبار والفعاليات</h1>
            <p className="page-subtitle">
              تابع أحدث الفعاليات، المعسكرات التدريبية، والأنشطة اليومية لمركز الابتكار وحاضنة رواق بجامعة الأزهر.
            </p>
            <div className="breadcrumbs">
              <Link href="/">الرئيسية</Link>
              <span>/</span>
              <span>الأخبار والفعاليات</span>
            </div>
          </div>
          <div className="page-banner-visual">
            <img src="/images/news_hero.png" alt="الأخبار والفعاليات" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="section" style={{ paddingTop: '2.5rem' }}>
        <div className="container">
          {/* Filter Bar & Search */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1.25rem',
              marginBottom: '2.5rem',
              background: '#FFFFFF',
              padding: '1.25rem 1.75rem',
              borderRadius: '20px',
              boxShadow: 'var(--elevation-1)',
              border: '1px solid var(--md-sys-color-outline-variant)',
            }}
          >
            {/* Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    style={{
                      background: isActive ? 'var(--google-blue)' : 'var(--md-sys-color-surface-container-high)',
                      color: isActive ? '#FFFFFF' : 'var(--md-sys-color-on-surface-variant)',
                      border: 'none',
                      padding: '0.5rem 1.1rem',
                      borderRadius: '9999px',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s cubic-bezier(0.2, 0, 0, 1)',
                      boxShadow: isActive ? '0 2px 8px rgba(11, 87, 208, 0.25)' : 'none',
                    }}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>

            {/* Search Box */}
            <div style={{ position: 'relative', minWidth: '260px', flex: '1', maxWidth: '380px' }}>
              <span
                className="material-symbols-rounded"
                style={{
                  position: 'absolute',
                  right: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: 'var(--md-sys-color-on-surface-variant)',
                  fontSize: '1.25rem',
                }}
              >
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="ابحث في الأخبار والفعاليات..."
                style={{
                  width: '100%',
                  padding: '0.65rem 2.8rem 0.65rem 1rem',
                  borderRadius: '9999px',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  background: 'var(--md-sys-color-surface-container-lowest)',
                  fontSize: '0.9rem',
                  fontFamily: 'inherit',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
              />
            </div>
          </div>

          {/* News Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: '1.75rem',
            }}
          >
            {filteredNews.map((item) => (
              <article
                key={item.id}
                className="startup-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  background: '#FFFFFF',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  boxShadow: 'var(--elevation-1)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                }}
              >
                <div style={{ height: '210px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '14px',
                      right: '14px',
                      background: 'rgba(255, 255, 255, 0.92)',
                      backdropFilter: 'blur(8px)',
                      color: item.accent,
                      fontWeight: 700,
                      fontSize: '0.78rem',
                      padding: '0.3rem 0.75rem',
                      borderRadius: '9999px',
                      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
                    }}
                  >
                    {item.categoryLabel}
                  </div>
                </div>

                <div
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: '1',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                      fontSize: '0.8rem',
                      color: 'var(--md-sys-color-on-surface-variant)',
                      marginBottom: '0.6rem',
                    }}
                  >
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <span className="material-symbols-rounded" style={{ fontSize: '0.95rem' }}>calendar_today</span>
                      {item.date}
                    </span>
                    <span>•</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}>
                      <span className="material-symbols-rounded" style={{ fontSize: '0.95rem' }}>schedule</span>
                      {item.readTime}
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: 'var(--md-sys-color-on-surface)',
                      lineHeight: '1.5',
                      marginBottom: '0.75rem',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontSize: '0.9rem',
                      color: 'var(--md-sys-color-on-surface-variant)',
                      lineHeight: '1.6',
                      marginBottom: '1.25rem',
                      flex: '1',
                    }}
                  >
                    {item.summary}
                  </p>

                  <button
                    onClick={() => setActiveArticle(item)}
                    style={{
                      alignSelf: 'flex-start',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      background: 'none',
                      border: 'none',
                      color: 'var(--google-blue)',
                      fontWeight: 700,
                      fontSize: '0.9rem',
                      cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    قراءة الخبر كاملاً
                    <span className="material-symbols-rounded" style={{ fontSize: '1.1rem' }}>arrow_back</span>
                  </button>
                </div>
              </article>
            ))}
          </div>

          {filteredNews.length === 0 && (
            <div
              style={{
                textAlign: 'center',
                padding: '4rem 1rem',
                background: 'var(--md-sys-color-surface-container-low)',
                borderRadius: '24px',
                marginTop: '1.5rem',
              }}
            >
              <span
                className="material-symbols-rounded"
                style={{ fontSize: '3.5rem', color: 'var(--md-sys-color-outline)', marginBottom: '1rem' }}
              >
                search_off
              </span>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>لا توجد أخبار مطابقة لبحثك</h3>
              <p style={{ color: 'var(--md-sys-color-on-surface-variant)', marginTop: '0.5rem' }}>
                جرّب البحث بكلمات أخرى أو اختر تصنيفاً مختلفاً.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Article Detail Dialog */}
      {activeArticle && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1100,
            background: 'rgba(0, 0, 0, 0.45)',
            backdropFilter: 'blur(6px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.25rem',
          }}
          onClick={() => setActiveArticle(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '28px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--elevation-3)',
              position: 'relative',
              animation: 'm3FadeScale 0.2s cubic-bezier(0.2, 0, 0, 1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ height: '240px', position: 'relative' }}>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveArticle(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: 'rgba(0, 0, 0, 0.6)',
                  color: '#FFFFFF',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                }}
              >
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>

            <div style={{ padding: '2rem' }}>
              <div
                style={{
                  display: 'inline-block',
                  background: 'rgba(11, 87, 208, 0.08)',
                  color: 'var(--google-blue)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  padding: '0.3rem 0.8rem',
                  borderRadius: '9999px',
                  marginBottom: '0.75rem',
                }}
              >
                {activeArticle.categoryLabel}
              </div>

              <h2
                style={{
                  fontSize: '1.4rem',
                  fontWeight: 800,
                  lineHeight: '1.4',
                  color: 'var(--md-sys-color-on-surface)',
                  marginBottom: '0.75rem',
                }}
              >
                {activeArticle.title}
              </h2>

              <div
                style={{
                  display: 'flex',
                  gap: '1rem',
                  fontSize: '0.85rem',
                  color: 'var(--md-sys-color-on-surface-variant)',
                  marginBottom: '1.5rem',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid var(--md-sys-color-outline-variant)',
                }}
              >
                <span>📅 {activeArticle.date}</span>
                <span>⏱️ {activeArticle.readTime}</span>
              </div>

              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.8',
                  color: 'var(--md-sys-color-on-surface-variant)',
                  whiteSpace: 'pre-line',
                }}
              >
                {activeArticle.content}
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="btn btn-primary"
                  style={{ borderRadius: '9999px', padding: '0.65rem 1.8rem' }}
                >
                  إغلاق النافذة
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
