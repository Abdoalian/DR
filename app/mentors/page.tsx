'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Mentor {
  id: string;
  name: string;
  title: string;
  role: string;
  tags: string[];
  avatar: string;
  badgeColor: string;
  bio: string;
}

const mentorsList: Mentor[] = [
  {
    id: '1',
    name: 'أ.د. محمد جلال فرغلي',
    title: 'عميد كلية الهندسة - جامعة الأزهر | مدير المركز',
    role: 'رئيس شبكة الحاضنات والمشرف العام',
    tags: ['إدارة الابتكار', 'نقل التكنولوجيا', 'التطوير الهندسي والصناعي'],
    avatar: '/images/dr_mohamed_galal.jpg',
    badgeColor: '#0B57D0',
    bio: 'قاد تأسيس مركز الابتكار وشبكة الحاضنات الست بجامعة الأزهر، وأشرف على احتضان العشرات من الشركات الناشئة وتحويل براءات الاختراع لمنتجات حقيقية.',
  },
  {
    id: '2',
    name: 'د. محمد الشربيني',
    title: 'خبير استراتيجيات الأعمال ونمو الشركات',
    role: 'استشاري التخطيط الاستراتيجي ودراسات الجدوى',
    tags: ['Business Model Canvas', 'نمذجة الأعمال', 'التوسع المالي'],
    avatar: '/images/hero.png',
    badgeColor: '#1E8E3E',
    bio: 'يقدم جلسات إرشادية حول التحقق من السوق، وهندسة الإيرادات، وتصميم المقترح القيمي للشركات الناشئة في المراحل المبكرة.',
  },
  {
    id: '3',
    name: 'م. يوسف النجار',
    title: 'استشاري تقنيات الذكاء الاصطناعي والحلول السحابية',
    role: 'موجه تكنولوجي وهندسي',
    tags: ['Machine Learning', 'Cloud Architecture', 'الذكاء الاصطناعي'],
    avatar: '/images/hero.png',
    badgeColor: '#0B57D0',
    bio: 'مهندس أول للحلول السحابية ونظم الذكاء الاصطناعي، يرشد الفرق على بناء بنية تحتية برمجية قابلة للتوسع والأمان.',
  },
  {
    id: '4',
    name: 'د. ريهام العوضي',
    title: 'مستشارة الملكية الفكرية وبراءات الاختراع',
    role: 'خبير الشؤون القانونية وبراءات الاختراع',
    tags: ['براءات الاختراع', 'العقود الاستثمارية', 'حماية الملكية'],
    avatar: '/images/hero.png',
    badgeColor: '#F9AB00',
    bio: 'متخصصة في صياغة ملفات براءات الاختراع الوطنية والدولية، وحماية الأسرار التجارية، وهيكلة اتفاقيات تقاسم الحصص بين المؤسسين.',
  },
  {
    id: '5',
    name: 'أ. حسام فؤاد',
    title: 'مستثمر ملائكي وشريك في صندوق استثماري',
    role: 'موجه التمويل والاستثمار الجريء',
    tags: ['Venture Capital', 'Pitch Deck', 'تقييم الشركات'],
    avatar: '/images/hero.png',
    badgeColor: '#D93025',
    bio: 'يدرب رواد الأعمال على تجهيز العروض الاستثمارية (Pitching)، واجتياز الفحص النافي للجهالة، ومفاوضات تقييم الشركات مع المستثمرين.',
  },
  {
    id: '6',
    name: 'د. طارق عبد الحميد',
    title: 'أستاذ التكنولوجيا الحيوية والزراعية',
    role: 'استشاري الابتكار الزراعي والأغذية',
    tags: ['AgriTech', 'المستخلصات الحيوية', 'التكنولوجيا الزراعية'],
    avatar: '/images/hero.png',
    badgeColor: '#1E8E3E',
    bio: 'مرشد فني لمشروعات الزراعة الذكية وتدوير المخلفات والأسمدة الحيوية وتجارب الأثر الميداني على المحاصيل الزراعية.',
  },
];

export default function MentorsPage() {
  const [selectedTag, setSelectedTag] = useState<string>('all');

  const allTags = ['all', 'إدارة الابتكار', 'نمذجة الأعمال', 'الذكاء الاصطناعي', 'براءات الاختراع', 'Venture Capital', 'AgriTech'];

  const filtered = mentorsList.filter((m) => {
    if (selectedTag === 'all') return true;
    return m.tags.includes(selectedTag);
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
          <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>diversity_3</span>
          الخبراء والموجهون
        </div>

        <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', lineHeight: 1.2 }}>
          شبكة الموجهين والخبراء الاستشاريين
        </h1>
        <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.98rem', marginTop: '0.5rem', maxWidth: '650px' }}>
          نخبة من قادة الصناعة، المستثمرين، وعلماء جامعة الأزهر يقدمون جلسات إرشاد وتوجيه مخصصة لكل شركة محتضنة.
        </p>
      </section>

      {/* Filter Chips */}
      <div className="google-surface-card" style={{ padding: '1rem 1.5rem' }}>
        <div className="google-chip-group">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTag(t)}
              className={`google-chip ${selectedTag === t ? 'active' : ''}`}
            >
              {t === 'all' ? 'جميع الموجهين' : t}
            </button>
          ))}
        </div>
      </div>

      {/* Mentors Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {filtered.map((m) => (
          <div
            key={m.id}
            className="google-surface-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: `4px solid ${m.badgeColor}`,
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    boxShadow: 'var(--elevation-1)',
                    border: '2px solid var(--md-sys-color-outline-variant)',
                    flexShrink: 0,
                  }}
                >
                  <img src={m.avatar} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.2rem' }}>
                    {m.name}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: m.badgeColor, fontWeight: 700 }}>
                    {m.role}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--md-sys-color-outline)' }}>
                    {m.title}
                  </div>
                </div>
              </div>

              {/* Bio */}
              <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {m.bio}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
                {m.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                      backgroundColor: 'var(--md-sys-color-surface-container-high)',
                      color: 'var(--md-sys-color-on-surface)',
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Action */}
            <div
              style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--md-sys-color-outline-variant)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-outline)' }}>
                جلسات إرشاد وتوجيه دورية
              </span>
              <button
                onClick={() => {
                  if (typeof window !== 'undefined') {
                    window.dispatchEvent(new CustomEvent('open-apply-modal'));
                  }
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.35rem',
                  padding: '0.45rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--google-blue-container)',
                  color: 'var(--google-on-blue-container)',
                  border: 'none',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                طلب استشارة
                <span className="material-symbols-rounded" style={{ fontSize: '0.95rem' }}>arrow_back</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
