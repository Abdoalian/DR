'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface NewsArticle {
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

const articles: NewsArticle[] = [
  {
    id: '1',
    title: 'انطلاق فعاليات يوم عرض المشروعات Demo Day للدفعة الجديدة',
    date: '26 أغسطس 2026',
    category: 'events',
    categoryLabel: 'فعاليات ومعارض',
    summary: 'استعرضت 12 شركة ناشئة محتضنة حلولها التكنولوجية أمام عدد من كبار المستثمرين وصناديق الاستثمار الجريء.',
    content: 'شهد مركز الابتكار وريادة الأعمال بجامعة الأزهر فعاليات يوم عرض المشروعات Demo Day لشركات الدفعة الجديدة من حاضنة رواق. قدمت الفرق عروضاً تفاعلية تناولت حلولاً مبتكرة في مجالات الذكاء الاصطناعي والتكنولوجيا الطبية والزراعة الذكية، بحضور ممثلي صناديق الاستثمار الجريء وأعضاء هيئة التدريس وموجهي الأعمال.',
    image: '/images/event.png',
    accent: '#0B57D0',
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
    accent: '#1E8E3E',
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
    accent: '#F9AB00',
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
    accent: '#D93025',
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
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const filtered = articles.filter((item) => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

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
          <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>newspaper</span>
          المركز الإعلامي
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', lineHeight: 1.2 }}>
          أخبار وفعاليات حاضنة رواق
        </h1>
        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.98rem', marginTop: '0.5rem', maxWidth: '650px' }}>
          تغطية مستمرة لورش العمل والهاكاثونات ومعسكرات التدريب ويوم عرض المشروعات أمام المستثمرين.
        </p>
      </section>

      {/* Filter and Search Bar */}
      <div
        className="google-surface-card"
        style={{
          padding: '1.25rem 1.75rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.25rem',
        }}
      >
        <div className="google-chip-group">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`google-chip ${isActive ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        <div style={{ position: 'relative', minWidth: '260px', flex: '1', maxWidth: '340px' }}>
          <span
            className="material-symbols-rounded"
            style={{
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--md-sys-color-outline)',
              fontSize: '1.2rem',
            }}
          >
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="بحث في الأخبار..."
            style={{
              width: '100%',
              padding: '0.6rem 2.6rem 0.6rem 1rem',
              borderRadius: '9999px',
              border: '1px solid var(--md-sys-color-outline-variant)',
              outline: 'none',
              fontSize: '0.88rem',
            }}
          />
        </div>
      </div>

      {/* Articles Grid (Google News style) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {filtered.map((item) => (
          <article
            key={item.id}
            className="google-surface-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              padding: 0,
              overflow: 'hidden',
              borderTop: `4px solid ${item.accent}`,
            }}
          >
            <div style={{ height: '200px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={item.image}
                alt={item.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  backdropFilter: 'blur(8px)',
                  color: item.accent,
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  boxShadow: 'var(--elevation-1)',
                }}
              >
                {item.categoryLabel}
              </div>
            </div>

            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  fontSize: '0.78rem',
                  color: 'var(--md-sys-color-outline)',
                  marginBottom: '0.5rem',
                }}
              >
                <span>📅 {item.date}</span>
                <span>•</span>
                <span>⏱️ {item.readTime}</span>
              </div>

              <h3
                style={{
                  fontSize: '1.15rem',
                  fontWeight: 800,
                  color: 'var(--md-sys-color-on-surface)',
                  lineHeight: 1.4,
                  marginBottom: '0.65rem',
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: '0.88rem',
                  color: 'var(--md-sys-color-on-surface-variant)',
                  lineHeight: 1.6,
                  marginBottom: '1.25rem',
                  flex: 1,
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
                  gap: '0.35rem',
                  background: 'none',
                  border: 'none',
                  color: 'var(--google-blue)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                قراءة الخبر كاملاً
                <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>arrow_back</span>
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Article Detail Modal (Google Dialog style) */}
      {activeArticle && (
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
          onClick={() => setActiveArticle(null)}
        >
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '28px',
              maxWidth: '650px',
              width: '100%',
              maxHeight: '90vh',
              overflowY: 'auto',
              boxShadow: 'var(--elevation-3)',
              position: 'relative',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ height: '220px', position: 'relative' }}>
              <img
                src={activeArticle.image}
                alt={activeArticle.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <button
                onClick={() => setActiveArticle(null)}
                className="google-icon-btn"
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  color: '#FFFFFF',
                }}
              >
                <span className="material-symbols-rounded">close</span>
              </button>
            </div>

            <div style={{ padding: '2rem' }}>
              <span
                style={{
                  display: 'inline-block',
                  backgroundColor: 'var(--google-blue-container)',
                  color: 'var(--google-on-blue-container)',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  padding: '0.25rem 0.75rem',
                  borderRadius: '9999px',
                  marginBottom: '0.75rem',
                }}
              >
                {activeArticle.categoryLabel}
              </span>

              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.75rem' }}>
                {activeArticle.title}
              </h2>

              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--md-sys-color-outline)',
                  marginBottom: '1.25rem',
                  paddingBottom: '0.75rem',
                  borderBottom: '1px solid var(--md-sys-color-outline-variant)',
                }}
              >
                📅 {activeArticle.date} • ⏱️ {activeArticle.readTime}
              </div>

              <p style={{ fontSize: '0.95rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.8 }}>
                {activeArticle.content}
              </p>

              <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="google-fab-extended"
                  style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}
                >
                  إغلاق
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
