'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface SearchResult {
  id: string;
  title: string;
  category: 'برنامج' | 'شركة' | 'موجه' | 'خبر';
  icon: string;
  color: string;
  url: string;
  subtitle?: string;
}

const searchableData: SearchResult[] = [
  // Startups
  { id: 's1', title: 'Al-Farabi Biotech', category: 'شركة', icon: 'science', color: '#1E8E3E', url: '/startups', subtitle: 'الزراعة والتكنولوجيا الحيوية' },
  { id: 's2', title: 'GreenPave Solutions', category: 'شركة', icon: 'recycling', color: '#1E8E3E', url: '/startups', subtitle: 'التدوير والتكنولوجيا الخضراء' },
  { id: 's3', title: 'CurvTech Engineering', category: 'شركة', icon: 'precision_manufacturing', color: '#0B57D0', url: '/startups', subtitle: 'النمذجة والتصنيع السريع' },
  { id: 's4', title: 'MedPulse Diagnostic', category: 'شركة', icon: 'cardiology', color: '#D93025', url: '/startups', subtitle: 'التكنولوجيا الطبية والصحية' },
  { id: 's5', title: 'Azhar Robotics & AI', category: 'شركة', icon: 'smart_toy', color: '#0B57D0', url: '/startups', subtitle: 'الذكاء الاصطناعي والروبوتات' },
  // Programs & Incubators
  { id: 'p1', title: 'حاضنة رواq القاهرة (المقر الرئيسي)', category: 'برنامج', icon: 'domain', color: '#0B57D0', url: '/programs#incubator-cairo', subtitle: 'مركز الابتكار بمدينة نصر' },
  { id: 'p2', title: 'حاضنة رواق أسيوط', category: 'برنامج', icon: 'location_on', color: '#F9AB00', url: '/programs#incubator-assiut', subtitle: 'صعيد مصر - جامعة الأزهر بأسيوط' },
  { id: 'p3', title: 'حاضنة رواق قنا', category: 'برنامج', icon: 'energy_savings_leaf', color: '#1E8E3E', url: '/programs#incubator-qena', subtitle: 'جنوب الوادي والتنمية المستدامة' },
  { id: 'p4', title: 'حاضنة تكنولوجيا النانو', category: 'برنامج', icon: 'biotech', color: '#0B57D0', url: '/programs#incubator-nano', subtitle: 'أبحاث المواد وتطبيقات النانو' },
  { id: 'p5', title: 'حاضنة رواق الطبية', category: 'برنامج', icon: 'health_and_safety', color: '#D93025', url: '/programs#incubator-medical', subtitle: 'ابتكارات كليات الطب والصيدلة' },
  { id: 'p6', title: 'مركز التكنولوجيا الخضراء والمناخ', category: 'برنامج', icon: 'public', color: '#1E8E3E', url: '/programs#incubator-greentech', subtitle: 'شراكة مع منصة SPARK Hub' },
  // Mentors
  { id: 'm1', title: 'أ.د. محمد جلال فرغلي', category: 'موجه', icon: 'school', color: '#0B57D0', url: '/mentors', subtitle: 'مدير المركز وعميد كلية الهندسة' },
  { id: 'm2', title: 'د. محمد الشربيني', category: 'موجه', icon: 'person', color: '#0B57D0', url: '/mentors', subtitle: 'خبير استراتيجيات الأعمال والنمو' },
  { id: 'm3', title: 'م. يوسف النجار', category: 'موجه', icon: 'person', color: '#0B57D0', url: '/mentors', subtitle: 'استشاري تقنيات الذكاء الاصطناعي والسحاب' },
  // News & Activities
  { id: 'n1', title: 'يوم عرض المشروعات Demo Day للدفعة الجديدة', category: 'خبر', icon: 'newspaper', color: '#0B57D0', url: '/news', subtitle: '26 أغسطس 2026' },
  { id: 'n2', title: 'تطوير وتحديث معامل التصنيع السريع (Makerspace)', category: 'خبر', icon: 'newspaper', color: '#1E8E3E', url: '/news', subtitle: '18 أغسطس 2026' },
];

export default function GoogleOmnibox() {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Keyboard shortcut Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        const input = wrapperRef.current?.querySelector('input');
        input?.focus();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const results = query.trim() === ''
    ? searchableData.slice(0, 5)
    : searchableData.filter((item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(query.toLowerCase())) ||
        item.category.includes(query)
      );

  return (
    <div ref={wrapperRef} className="google-omnibox-wrapper">
      <div className={`google-omnibox ${isOpen ? 'active' : ''}`}>
        <span
          className="material-symbols-rounded"
          style={{ color: 'var(--md-sys-color-on-surface-variant)', fontSize: '1.35rem' }}
        >
          search
        </span>
        <input
          type="text"
          className="google-omnibox-input"
          placeholder="ابحث في رواق (الشركات، الحاضنات، الموجهين، الأخبار)..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {query ? (
          <button
            onClick={() => setQuery('')}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--md-sys-color-on-surface-variant)',
              display: 'flex',
              padding: '2px',
            }}
          >
            <span className="material-symbols-rounded" style={{ fontSize: '1.2rem' }}>close</span>
          </button>
        ) : (
          <span className="google-omnibox-shortcut">Ctrl+K</span>
        )}
      </div>

      {/* Results Dropdown (Google Cloud / Drive style) */}
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 6px)',
            left: 0,
            right: 0,
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            border: '1px solid var(--md-sys-color-outline-variant)',
            boxShadow: 'var(--elevation-3)',
            maxHeight: '400px',
            overflowY: 'auto',
            zIndex: 1000,
            padding: '0.5rem 0',
            animation: 'fadeIn 0.15s ease-out',
          }}
        >
          <div
            style={{
              padding: '0.4rem 1rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--md-sys-color-outline)',
              textTransform: 'uppercase',
            }}
          >
            {query.trim() === '' ? 'مقترحات سريعة' : `نتائج البحث (${results.length})`}
          </div>

          {results.length > 0 ? (
            results.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setIsOpen(false);
                  router.push(item.url);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.65rem 1rem',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--md-sys-color-surface-container-high)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <span className="material-symbols-rounded" style={{ fontSize: '1.25rem' }}>
                    {item.icon}
                  </span>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: '0.92rem', fontWeight: 600, color: 'var(--md-sys-color-on-surface)' }}>
                    {item.title}
                  </div>
                  {item.subtitle && (
                    <div style={{ fontSize: '0.78rem', color: 'var(--md-sys-color-on-surface-variant)' }}>
                      {item.subtitle}
                    </div>
                  )}
                </div>
                <span
                  style={{
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    padding: '0.2rem 0.6rem',
                    borderRadius: '9999px',
                    backgroundColor: 'var(--md-sys-color-surface-container)',
                    color: 'var(--md-sys-color-on-surface-variant)',
                  }}
                >
                  {item.category}
                </span>
              </div>
            ))
          ) : (
            <div style={{ padding: '2rem 1rem', textAlign: 'center', color: 'var(--md-sys-color-on-surface-variant)' }}>
              <span className="material-symbols-rounded" style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>search_off</span>
              <p style={{ fontSize: '0.88rem' }}>لم نجد أي نتائج مطابقة لـ &ldquo;{query}&rdquo;</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
