'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Startup {
  id: string;
  name: string;
  category: string;
  categoryLabel: string;
  cycle: string;
  desc: string;
  founders: string;
  badgeColor: string;
  status: 'محتضنة حالياً' | 'شركة متخرجة';
}

const allStartups: Startup[] = [
  {
    id: '1',
    name: 'Al-Farabi Biotech',
    category: 'agri',
    categoryLabel: 'الزراعة والتكنولوجيا الحيوية',
    cycle: 'دورة الاحتضان الثانية (2023)',
    desc: 'إنتاج بدائل طبيعية ذكية للمبيدات الحشرية والأسمدة الكيماوية باستخدام مستخلصات نباتية وبكتيريا نافعة لحماية المحاصيل الاستراتيجية.',
    founders: 'فريق بحثي من كلية الزراعة والعلوم',
    badgeColor: '#1E8E3E',
    status: 'محتضنة حالياً',
  },
  {
    id: '2',
    name: 'GreenPave Solutions',
    category: 'green',
    categoryLabel: 'التدوير والتكنولوجيا الخضراء',
    cycle: 'دورة الاحتضان الثانية (2023)',
    desc: 'تدوير البلاستيك والمخلفات الصلبة لإنتاج بلاط وإنترلوك بيئي عالي التحمل ومقاوم للظروف الجوية القاسية بتكلفة منخفضة.',
    founders: 'مهندسون من كلية الهندسة بقنا والقاهرة',
    badgeColor: '#1E8E3E',
    status: 'محتضنة حالياً',
  },
  {
    id: '3',
    name: 'CurvTech Engineering',
    category: 'engineering',
    categoryLabel: 'النمذجة والحلول الهندسية',
    cycle: 'دورة الاحتضان الأولى (2022)',
    desc: 'تصميم وتصنيع ماكينات التصنيع المدمجة وقطع الغيار الميكانيكية المعقدة بدقة متناهية للصناعات المحلية واستبدال الواردات.',
    founders: 'خريجو قسم الميكانيكا - هندسة الأزهر',
    badgeColor: '#0B57D0',
    status: 'شركة متخرجة',
  },
  {
    id: '4',
    name: 'MedPulse Diagnostic',
    category: 'health',
    categoryLabel: 'التكنولوجيا الطبية والصحية',
    cycle: 'دورة الاحتضان الثانية (2023)',
    desc: 'جهاز محمول مدمج مع تطبيق ذكي للتشخيص الميداني المبكر لأمراض القلب واعتلال النبض ونقل القراءات الحيوية فورياً للطبيب.',
    founders: 'أطباء ومهندسو نظم وحاسبات',
    badgeColor: '#D93025',
    status: 'محتضنة حالياً',
  },
  {
    id: '5',
    name: 'Azhar Robotics & AI',
    category: 'ai',
    categoryLabel: 'الذكاء الاصطناعي والروبوتات',
    cycle: 'دورة الاحتضان الثانية (2023)',
    desc: 'روبوتات خدمة ذاتية ومنصات مسح ذكي للمستودعات الكبرى والمصانع لتحسين سلاسل الإمداد ومراقبة المخزون آلياً.',
    founders: 'فريق هندسة النظم والحاسبات',
    badgeColor: '#0B57D0',
    status: 'محتضنة حالياً',
  },
  {
    id: '6',
    name: 'EcoPottery & Crafts',
    category: 'crafts',
    categoryLabel: 'الحرف والتراث وتدوير المخلفات',
    cycle: 'دورة الاحتضان الأولى (2022)',
    desc: 'دمج تقنيات التصميم الرقمي ثلاثي الأبعاد مع الحرف التراثية والفخارية في صعيد مصر لإنتاج قطع فنية ومستدامة للتصدير.',
    founders: 'مبتكرون من فرع أسيوط وقنا',
    badgeColor: '#F9AB00',
    status: 'شركة متخرجة',
  },
  {
    id: '7',
    name: 'AquaSmart Sensors',
    category: 'agri',
    categoryLabel: 'الزراعة والتكنولوجيا الحيوية',
    cycle: 'دورة الاحتضان الثانية (2023)',
    desc: 'محطات استشعار دقيقة لترشيد استهلاك مياه الري بنسبة 45% والتنبؤ بإصابات المحاصيل قبل انتشارها عبر الذكاء الاصطناعي.',
    founders: 'باحثو هندسة زراعية وعلوم حاسب',
    badgeColor: '#1E8E3E',
    status: 'محتضنة حالياً',
  },
  {
    id: '8',
    name: 'BioNano Filter',
    category: 'engineering',
    categoryLabel: 'النمذجة والحلول الهندسية',
    cycle: 'دورة الاحتضان الأولى (2022)',
    desc: 'أغشية ترشيح مياه متقدمة بتقنية ألياف النانو لمعالجة مياه الصرف الصناعي وإعادة تدويرها بأقل استهلاك للطاقة.',
    founders: 'علماء مركز النانو وهندسة التعدين',
    badgeColor: '#0B57D0',
    status: 'شركة متخرجة',
  },
];

const categories = [
  { id: 'all', label: 'جميع الشركات (8)' },
  { id: 'agri', label: 'الزراعة والتكنولوجيا الحيوية' },
  { id: 'green', label: 'التدوير والتكنولوجيا الخضراء' },
  { id: 'engineering', label: 'النمذجة والهندسة والنانو' },
  { id: 'health', label: 'التكنولوجيا الطبية' },
  { id: 'ai', label: 'الذكاء الاصطناعي' },
  { id: 'crafts', label: 'التراث والحرف' },
];

export default function StartupsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');

  const filtered = allStartups.filter((item) => {
    const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.founders.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {/* Header Banner */}
      <section
        className="google-surface-card"
        style={{
          background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F7FA 100%)',
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
              <span className="material-symbols-rounded" style={{ fontSize: '1rem' }}>domain</span>
              سجل الشركات والشركاء
            </div>

            <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', lineHeight: 1.2 }}>
              دليل الشركات الناشئة المحتضنة وخريجي رواق
            </h1>
            <p style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '0.98rem', marginTop: '0.5rem', maxWidth: '650px' }}>
              استكشف الشركات والفرق التكنولوجية التي انطلقت من معامل وكليات جامعة الأزهر بدعم واحتضان كامل من مركز الابتكار.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <div
              style={{
                background: '#ffffff',
                border: '1px solid var(--md-sys-color-outline-variant)',
                borderRadius: '9999px',
                padding: '0.25rem',
                display: 'flex',
                gap: '0.25rem',
              }}
            >
              <button
                onClick={() => setViewMode('grid')}
                className="google-icon-btn"
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: viewMode === 'grid' ? 'var(--google-blue-container)' : 'transparent',
                  color: viewMode === 'grid' ? 'var(--google-blue)' : 'inherit',
                }}
                title="عرض شبكي"
              >
                <span className="material-symbols-rounded" style={{ fontSize: '1.25rem' }}>grid_view</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className="google-icon-btn"
                style={{
                  width: '36px',
                  height: '36px',
                  backgroundColor: viewMode === 'table' ? 'var(--google-blue-container)' : 'transparent',
                  color: viewMode === 'table' ? 'var(--google-blue)' : 'inherit',
                }}
                title="عرض جدولي"
              >
                <span className="material-symbols-rounded" style={{ fontSize: '1.25rem' }}>view_list</span>
              </button>
            </div>
          </div>
        </div>
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
        {/* Category Chips */}
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

        {/* Live Filter Input */}
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
            filter_alt
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="تصفية حسب الاسم أو المجال..."
            style={{
              width: '100%',
              padding: '0.6rem 2.6rem 0.6rem 1rem',
              borderRadius: '9999px',
              border: '1px solid var(--md-sys-color-outline-variant)',
              outline: 'none',
              fontSize: '0.88rem',
              backgroundColor: '#FFFFFF',
            }}
          />
        </div>
      </div>

      {/* Content: Grid or Table View */}
      {viewMode === 'grid' ? (
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filtered.map((st) => (
            <div
              key={st.id}
              className="google-surface-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `4px solid ${st.badgeColor}`,
              }}
            >
              <div>
                {/* Header tags */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: st.badgeColor,
                      backgroundColor: `${st.badgeColor}15`,
                      padding: '0.2rem 0.65rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {st.categoryLabel}
                  </span>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: st.status === 'محتضنة حالياً' ? '#137333' : '#0B57D0',
                      backgroundColor: st.status === 'محتضنة حالياً' ? 'rgba(52, 168, 83, 0.1)' : 'rgba(11, 87, 208, 0.1)',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '9999px',
                    }}
                  >
                    {st.status}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.4rem' }}>
                  {st.name}
                </h3>
                <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-outline)', marginBottom: '0.85rem' }}>
                  {st.cycle}
                </div>

                <p style={{ fontSize: '0.88rem', color: 'var(--md-sys-color-on-surface-variant)', lineHeight: 1.6, marginBottom: '1rem' }}>
                  {st.desc}
                </p>
              </div>

              <div
                style={{
                  paddingTop: '0.85rem',
                  borderTop: '1px solid var(--md-sys-color-outline-variant)',
                  fontSize: '0.8rem',
                  color: 'var(--md-sys-color-on-surface-variant)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                }}
              >
                <span className="material-symbols-rounded" style={{ fontSize: '1rem', color: 'var(--google-blue)' }}>group</span>
                <span>{st.founders}</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Table View (Google Workspace Directory style) */
        <div className="google-surface-card" style={{ padding: '0', overflow: 'hidden' }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--md-sys-color-surface-container-low)', borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.85rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                  <th style={{ padding: '1rem 1.5rem' }}>اسم الشركة</th>
                  <th style={{ padding: '1rem' }}>القطاع</th>
                  <th style={{ padding: '1rem' }}>دورة الاحتضان</th>
                  <th style={{ padding: '1rem' }}>الفريق المؤسس</th>
                  <th style={{ padding: '1rem 1.5rem' }}>الحالة</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((st) => (
                  <tr
                    key={st.id}
                    style={{ borderBottom: '1px solid var(--md-sys-color-outline-variant)', fontSize: '0.88rem' }}
                  >
                    <td style={{ padding: '1.2rem 1.5rem', fontWeight: 700 }}>
                      <div style={{ color: 'var(--md-sys-color-on-surface)' }}>{st.name}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-outline)', fontWeight: 400 }}>{st.desc.slice(0, 50)}...</div>
                    </td>
                    <td style={{ padding: '1rem', color: st.badgeColor, fontWeight: 600 }}>{st.categoryLabel}</td>
                    <td style={{ padding: '1rem', color: 'var(--md-sys-color-on-surface-variant)' }}>{st.cycle}</td>
                    <td style={{ padding: '1rem', color: 'var(--md-sys-color-on-surface-variant)' }}>{st.founders}</td>
                    <td style={{ padding: '1rem 1.5rem' }}>
                      <span
                        style={{
                          fontSize: '0.75rem',
                          fontWeight: 700,
                          color: st.status === 'محتضنة حالياً' ? '#137333' : '#0B57D0',
                          backgroundColor: st.status === 'محتضنة حالياً' ? 'rgba(52, 168, 83, 0.1)' : 'rgba(11, 87, 208, 0.1)',
                          padding: '0.25rem 0.75rem',
                          borderRadius: '9999px',
                        }}
                      >
                        {st.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
