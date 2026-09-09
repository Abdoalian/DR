'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface IncubatorItem {
  id: string;
  name: string;
  badge: string;
  badgeColor: string;
  icon: string;
  summary: string;
  highlights: string[];
  location: string;
  targetAudience: string;
}

const incubators: IncubatorItem[] = [
  {
    id: 'incubator-cairo',
    name: 'حاضنة رواق القاهرة (المقر الرئيسي)',
    badge: 'الابتكار والتطبيقات الهندسية',
    badgeColor: '#0B57D0',
    icon: 'domain',
    summary: 'الحاضنة المركزية بمقر مركز الابتكار وريادة الأعمال بجامعة الأزهر بمدينة نصر. تركز على الحلول الهندسية، التحول الرقمي، النمذجة السريعة، والتطبيقات الصناعية.',
    highlights: [
      'معامل التصنيع السريع FabLab والطباعة ثلاثية الأبعاد',
      'قاعات عمل مشتركة مجهزة ومساحات اجتماعات',
      'شراكة مباشرة مع مركز تقييم التكنولوجيا TIEC و EEIC',
    ],
    location: 'مبنى مركز الابتكار، جامعة الأزهر، مدينة نصر، القاهرة',
    targetAudience: 'طلاب وخريجو وباحثو كليات الهندسة والعلوم والحاسبات',
  },
  {
    id: 'incubator-assiut',
    name: 'حاضنة رواق أسيوط',
    badge: 'ريادة أعمال الصعيد والتنمية الإقليمية',
    badgeColor: '#F9AB00',
    icon: 'location_on',
    summary: 'ذراع الابتكار لجامعة الأزهر في صعيد مصر، لدعم المشروعات الزراعية والصناعية وحلول التنمية المستدامة والتكنولوجيا المجتمعية لخدمة محافظات الصعيد.',
    highlights: [
      'حاضنة معتمدة لخدمة محافظات الصعيد بالكامل',
      'توفير معامل اختبارات وتجارب ميدانية زراعية وهندسية',
      'شبكة علاقات قوية مع المستثمرين المحليين ورجال الأعمال',
    ],
    location: 'جامعة الأزهر - فرع أسيوط',
    targetAudience: 'مبتكرو الصعيد والباحثون في التحديات البيئية والزراعية',
  },
  {
    id: 'incubator-qena',
    name: 'حاضنة رواق قنا',
    badge: 'الطاقة والتعدين والتنمية المستدامة',
    badgeColor: '#1E8E3E',
    icon: 'energy_savings_leaf',
    summary: 'حاضنة تخصصية بجنوب الوادي تركز على ابتكارات الطاقة المتجددة، وتطبيقات الصناعات التعدينية والتراثية، وتدوير المخلفات البيئية.',
    highlights: [
      'حاضنة متخصصة في الطاقة الشمسية والنظيفة',
      'دعم الحرف البيئية والمنتجات المستدامة',
      'ربط المشروعات بالفرص الاستثمارية في جنوب الصعيد',
    ],
    location: 'جامعة الأزهر - فرع قنا',
    targetAudience: 'مبتكرو الطاقة النظيفة والتنمية المستدامة',
  },
  {
    id: 'incubator-nano',
    name: 'حاضنة رواق لتكنولوجيا النانو',
    badge: 'المواد المتقدمة والنانو تكنولوجي',
    badgeColor: '#0B57D0',
    icon: 'biotech',
    summary: 'أول حاضنة جامعية متخصصة في نقل أبحاث النانوتكنولوجي إلى تطبيقات صناعية ملموسة في معالجة المياه، والطلاءات الذكية، والأسمدة النانوية، والنسيج.',
    highlights: [
      'معامل مركز تكنولوجيا النانو المتقدم بجامعة الأزهر',
      'ميكروسكوبات إلكترونية وأجهزة تحليل طيفي دقيقة',
      'إشراف مباشر من كبار أساتذة وعلماء النانو',
    ],
    location: 'مركز تكنولوجيا النانو - جامعة الأزهر - القاهرة',
    targetAudience: 'الباحثون والعلماء ورواد الأعمال في المواد المتقدمة',
  },
  {
    id: 'incubator-medical',
    name: 'حاضنة رواق الطبية',
    badge: 'التكنولوجيا الطبية والصحية والصيدلانية',
    badgeColor: '#D93025',
    icon: 'health_and_safety',
    summary: 'حاضنة تكنولوجية متخصصة في تحويل ابتكارات كليات الطب البشري، طب الأسنان، والصيدلة بجامعة الأزهر إلى أجهزة طبية ومستحضرات صيدلانية معتمدة.',
    highlights: [
      'تجارب سريرية ومعملية بالتنسيق مع مستشفيات جامعة الأزهر',
      'دعم ملفات التسجيل والاعتماد بهيئة الدواء المصرية',
      'تطوير الأجهزة الطبية وحلول الذكاء الاصطناعي التشخيصية',
    ],
    location: 'مجمع الكليات الطبية - جامعة الأزهر',
    targetAudience: 'أطباء وصيادلة ومهندسو الأجهزة الطبية ومطورو HealthTech',
  },
  {
    id: 'incubator-greentech',
    name: 'مركز التكنولوجيا الخضراء وتغيرات المناخ',
    badge: 'GreenTech & Climate Action',
    badgeColor: '#1E8E3E',
    icon: 'public',
    summary: 'مركز وحاضنة معتمدة بالشراكة مع منصة SPARK Hub الدولية لدعم الشركات الناشئة التي تواجه تحديات المناخ وتعمل في تدوير المخلفات وترشيد الموارد.',
    highlights: [
      'شراكة دولية معتمدة مع منصة SPARK Innovation Hub',
      'تمويل ومنح خاصة للمشروعات الخضراء والصديقة للبيئة',
      'تمثيل مصر في المؤتمرات والقمم المناخية الدولية',
    ],
    location: 'مركز التكنولوجيا الخضراء - جامعة الأزهر',
    targetAudience: 'المشروعات الخضراء، الطاقة البديلة، وتدوير النفايات',
  },
];

export default function ProgramsPage() {
  const [filter, setFilter] = useState<'all' | 'geo' | 'tech' | 'green'>('all');

  const filteredIncubators = incubators.filter((inc) => {
    if (filter === 'geo') return inc.id.includes('cairo') || inc.id.includes('assiut') || inc.id.includes('qena');
    if (filter === 'tech') return inc.id.includes('nano') || inc.id.includes('medical');
    if (filter === 'green') return inc.id.includes('greentech') || inc.id.includes('qena');
    return true;
  });

  const openApplyModal = () => {
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
          background: 'linear-gradient(135deg, #FFFFFF 0%, #EBF2FA 100%)',
          padding: '2.25rem',
        }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1.5rem' }}>
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
              <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>layers</span>
              دليل البرامج والحاضنات
            </div>

            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', lineHeight: 1.2 }}>
              شبكة الحاضنات التكنولوجية والمراكز التخصصية
            </h1>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '1rem', marginTop: '0.5rem', maxWidth: '650px' }}>
              تضم منظومة رواق 6 حاضنات ومراكز نوعية تغطي النطاقات الجغرافية والمجالات التكنولوجية الأكثر تأثيراً على الاقتصاد الوطني.
            </p>
          </div>

          <button
            onClick={openApplyModal}
            className="google-fab-extended"
            style={{ padding: '0.85rem 1.75rem', fontSize: '1rem' }}
          >
            <span className="material-symbols-rounded">rocket_launch</span>
            قدم لحاضنتك التخصصية
          </button>
        </div>
      </section>

      {/* Filter Chips Bar */}
      <div
        className="google-surface-card"
        style={{
          padding: '1rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div className="google-chip-group">
          <button
            className={`google-chip ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            جميع الحاضنات الست (6)
          </button>
          <button
            className={`google-chip ${filter === 'geo' ? 'active' : ''}`}
            onClick={() => setFilter('geo')}
          >
            الحاضنات الجغرافية (القاهرة والصعيد)
          </button>
          <button
            className={`google-chip ${filter === 'tech' ? 'active' : ''}`}
            onClick={() => setFilter('tech')}
          >
            الحاضنات التكنولوجية المتقدمة (النانو والطبية)
          </button>
          <button
            className={`google-chip ${filter === 'green' ? 'active' : ''}`}
            onClick={() => setFilter('green')}
          >
            المناخ والتكنولوجيا الخضراء SPARK
          </button>
        </div>

        <div style={{ fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)', fontWeight: 600 }}>
          عرض {filteredIncubators.length} من أصل 6 حاضنات
        </div>
      </div>

      {/* Incubators Grid (Google Cloud Catalog Style) */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))',
          gap: '1.75rem',
        }}
      >
        {filteredIncubators.map((inc) => (
          <div
            key={inc.id}
            id={inc.id}
            className="google-surface-card"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              borderTop: `4px solid ${inc.badgeColor}`,
            }}
          >
            <div>
              {/* Header with Icon and Badge */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1rem' }}>
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '16px',
                    backgroundColor: `${inc.badgeColor}15`,
                    color: inc.badgeColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-rounded" style={{ fontSize: '1.6rem' }}>
                    {inc.icon}
                  </span>
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: inc.badgeColor,
                      textTransform: 'uppercase',
                    }}
                  >
                    {inc.badge}
                  </span>
                  <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', lineHeight: 1.3 }}>
                    {inc.name}
                  </h3>
                </div>
              </div>

              {/* Summary */}
              <p style={{ fontSize: '0.9rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {inc.summary}
              </p>

              {/* Highlights Checklist */}
              <div style={{ marginBottom: '1.25rem' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.4rem' }}>
                  أبرز المزايا والمعامل المتاحة:
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                  {inc.highlights.map((hl, idx) => (
                    <li
                      key={idx}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.45rem',
                        fontSize: '0.82rem',
                        color: 'var(--md-sys-color-on-surface-variant)',
                      }}
                    >
                      <span className="material-symbols-rounded" style={{ fontSize: '1.05rem', color: inc.badgeColor, flexShrink: 0 }}>
                        check_circle
                      </span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Meta & Action */}
            <div
              style={{
                paddingTop: '1rem',
                borderTop: '1px solid var(--md-sys-color-outline-variant)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-outline)' }}>
                📍 {inc.location.split('-')[0]}
              </div>

              <button
                onClick={openApplyModal}
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
                  transition: 'background-color 0.15s',
                }}
              >
                تقديم طلب احتضان
                <span className="material-symbols-rounded" style={{ fontSize: '0.95rem' }}>arrow_back</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
