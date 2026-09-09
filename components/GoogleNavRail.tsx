'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface GoogleNavRailProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
}

interface NavItemConfig {
  href: string;
  label: string;
  icon: string;
  badge?: string;
  isExternal?: boolean;
}

const mainNavItems: NavItemConfig[] = [
  { href: '/', label: 'لوحة المنصة (الرئيسية)', icon: 'dashboard' },
  { href: '/about', label: 'عن رواق والمركز', icon: 'info' },
  { href: '/programs', label: 'البرامج وشبكة الحاضنات', icon: 'layers', badge: '6 حاضنات' },
  { href: '/startups', label: 'دليل الشركات المحتضنة', icon: 'domain', badge: '12 شركة' },
  { href: '/mentors', label: 'شبكة الموجهين والخبراء', icon: 'diversity_3' },
  { href: '/news', label: 'المركز الإعلامي والفعاليات', icon: 'newspaper' },
  { href: '/contact', label: 'تواصل معنا والمقر', icon: 'contact_support' },
];

const secondaryNavItems: NavItemConfig[] = [
  { href: '/admin', label: 'لوحة التحكم الإدارية', icon: 'admin_panel_settings' },
  { href: 'https://hub.spark.ngo/pages/RwaqGreenTech', label: 'منصة SPARK Hub', icon: 'public', isExternal: true },
  { href: 'https://eeic.gov.eg/', label: 'مركز EEIC لريادة الأعمال', icon: 'open_in_new', isExternal: true },
];

export default function GoogleNavRail({
  isCollapsed,
  isMobileOpen,
  onCloseMobile,
}: GoogleNavRailProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          onClick={onCloseMobile}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            backdropFilter: 'blur(4px)',
            zIndex: 799,
          }}
        />
      )}

      {/* Navigation Rail Container */}
      <aside
        className={`google-nav-rail ${isCollapsed ? 'collapsed' : ''} ${isMobileOpen ? 'mobile-open' : ''}`}
      >
        <div>
          {/* Main Navigation Group */}
          <div className="google-nav-group">
            <div className="nav-group-title">استكشاف المنصة</div>
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onCloseMobile}
                  className={`google-nav-item ${isActive ? 'active' : ''}`}
                  title={item.label}
                >
                  <div className="google-nav-pill">
                    <span className="material-symbols-rounded google-nav-icon">
                      {item.icon}
                    </span>
                    <span className="nav-item-label" style={{ flex: 1 }}>
                      {item.label}
                    </span>
                    {item.badge && !isCollapsed && (
                      <span
                        style={{
                          fontSize: '0.72rem',
                          fontWeight: 700,
                          padding: '0.15rem 0.55rem',
                          borderRadius: '9999px',
                          backgroundColor: isActive ? 'var(--google-blue)' : 'var(--md-sys-color-surface-container-high)',
                          color: isActive ? '#ffffff' : 'var(--md-sys-color-on-surface-variant)',
                        }}
                      >
                        {item.badge}
                      </span>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Secondary & Admin Group */}
          <div className="google-nav-group" style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--md-sys-color-outline-variant)' }}>
            <div className="nav-group-title">الإدارة والشركاء</div>
            {secondaryNavItems.map((item) => {
              const isActive = pathname === item.href;
              return item.isExternal ? (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={onCloseMobile}
                  className="google-nav-item"
                  title={item.label}
                >
                  <div className="google-nav-pill">
                    <span className="material-symbols-rounded google-nav-icon">
                      {item.icon}
                    </span>
                    <span className="nav-item-label">{item.label}</span>
                  </div>
                </a>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onCloseMobile}
                  className={`google-nav-item ${isActive ? 'active' : ''}`}
                  title={item.label}
                >
                  <div className="google-nav-pill">
                    <span className="material-symbols-rounded google-nav-icon">
                      {item.icon}
                    </span>
                    <span className="nav-item-label">{item.label}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Footer info (only shown in expanded mode) */}
        {!isCollapsed && (
          <div
            className="nav-footer-text"
            style={{
              padding: '1rem 0.75rem 0.5rem',
              borderTop: '1px solid var(--md-sys-color-outline-variant)',
              fontSize: '0.75rem',
              color: 'var(--md-sys-color-on-surface-variant)',
              lineHeight: '1.5',
            }}
          >
            <div style={{ fontWeight: 700, color: 'var(--md-sys-color-on-surface)', marginBottom: '0.2rem' }}>
              حاضنة رواق RWAQ v3.0
            </div>
            مركز الابتكار وريادة الأعمال - جامعة الأزهر الشريف
          </div>
        )}
      </aside>
    </>
  );
}
