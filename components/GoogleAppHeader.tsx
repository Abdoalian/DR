'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import GoogleOmnibox from './GoogleOmnibox';

interface GoogleAppHeaderProps {
  onToggleNavRail: () => void;
  isRailCollapsed: boolean;
  onOpenMobileNav: () => void;
}

export default function GoogleAppHeader({
  onToggleNavRail,
  isRailCollapsed,
  onOpenMobileNav,
}: GoogleAppHeaderProps) {
  const [showAppsMenu, setShowAppsMenu] = useState(false);
  const appsMenuRef = useRef<HTMLDivElement>(null);

  // Close apps menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (appsMenuRef.current && !appsMenuRef.current.contains(e.target as Node)) {
        setShowAppsMenu(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const openApplyModal = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  const googleApps = [
    { title: 'الرئيسية', icon: 'dashboard', color: '#0B57D0', url: '/' },
    { title: 'البرامج والاحتضان', icon: 'rocket_launch', color: '#EA4335', url: '/programs' },
    { title: 'الشركات المحتضنة', icon: 'domain', color: '#FBBC04', url: '/startups' },
    { title: 'الموجهون والخبراء', icon: 'diversity_3', color: '#34A853', url: '/mentors' },
    { title: 'المركز الإعلامي', icon: 'newspaper', color: '#0B57D0', url: '/news' },
    { title: 'تواصل معنا', icon: 'contact_support', color: '#EA4335', url: '/contact' },
    { title: 'منصة SPARK Hub', icon: 'public', color: '#0072CE', url: 'https://hub.spark.ngo/pages/RwaqGreenTech', external: true },
    { title: 'مركز EEIC مصر', icon: 'hub', color: '#1E8E3E', url: 'https://eeic.gov.eg/', external: true },
    { title: 'لوحة التحكم', icon: 'admin_panel_settings', color: '#7C3AED', url: '/admin' },
  ];

  return (
    <>
      {/* Google Quad-Color 3.5px Strip */}
      <div className="google-top-strip" />

      {/* Google App Bar */}
      <header className="google-app-bar">
        {/* Right Section (Start): Menu Toggle & Brand */}
        <div className="google-app-bar-start">
          {/* Desktop Rail Collapse Toggle */}
          <button
            className="google-icon-btn d-none-mobile"
            onClick={onToggleNavRail}
            title={isRailCollapsed ? 'توسيع القائمة' : 'طي القائمة'}
            aria-label="القائمة الجانبية"
          >
            <span className="material-symbols-rounded">menu</span>
          </button>

          {/* Mobile Drawer Toggle */}
          <button
            className="google-icon-btn d-only-mobile"
            onClick={onOpenMobileNav}
            aria-label="فتح القائمة"
            style={{ display: 'none' }}
          >
            <span className="material-symbols-rounded">menu</span>
          </button>

          {/* Google Brand Lockup */}
          <Link href="/" className="google-brand-lockup">
            <img src="/images/logo.png" alt="شعار حاضنة رواق" className="google-brand-logo" />
            <div className="google-brand-title">
              <span>مركز الابتكار وريادة الأعمال - جامعة الأزهر</span>
              حاضنة رواق RWAQ
            </div>
          </Link>
        </div>

        {/* Center Section: Google Omnibox Search */}
        <GoogleOmnibox />

        {/* Left Section (End): Actions & Extended FAB */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
          {/* 9-Dots Google App Launcher Waffle */}
          <div ref={appsMenuRef} style={{ position: 'relative' }}>
            <button
              className="google-icon-btn"
              onClick={() => setShowAppsMenu(!showAppsMenu)}
              title="تطبيقات وخدمات رواق"
              aria-label="شبكة تطبيقات رواق"
            >
              <span className="material-symbols-rounded">apps</span>
            </button>

            {/* Google Apps Launcher Dropdown (M3 Menu) */}
            {showAppsMenu && (
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 8px)',
                  left: 0,
                  width: '320px',
                  backgroundColor: '#ffffff',
                  borderRadius: '24px',
                  padding: '1.25rem',
                  boxShadow: 'var(--elevation-3)',
                  border: '1px solid var(--md-sys-color-outline-variant)',
                  zIndex: 1100,
                  animation: 'fadeIn 0.15s ease-out',
                }}
              >
                <div
                  style={{
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    color: 'var(--md-sys-color-on-surface-variant)',
                    marginBottom: '1rem',
                    paddingBottom: '0.5rem',
                    borderBottom: '1px solid var(--md-sys-color-outline-variant)',
                  }}
                >
                  منظومة وتطبيقات رواق الأزهر
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '0.75rem',
                    textAlign: 'center',
                  }}
                >
                  {googleApps.map((app, idx) => (
                    <a
                      key={idx}
                      href={app.url}
                      target={app.external ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      onClick={() => setShowAppsMenu(false)}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '0.35rem',
                        padding: '0.65rem 0.25rem',
                        borderRadius: '16px',
                        textDecoration: 'none',
                        color: 'var(--md-sys-color-on-surface)',
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
                          width: '42px',
                          height: '42px',
                          borderRadius: '14px',
                          backgroundColor: `${app.color}15`,
                          color: app.color,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <span className="material-symbols-rounded" style={{ fontSize: '1.4rem' }}>
                          {app.icon}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.2 }}>
                        {app.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Help / FAQ Button */}
          <Link
            href="/#faq"
            className="google-icon-btn"
            title="الأسئلة الشائعة والدعم"
            aria-label="الأسئلة الشائعة"
          >
            <span className="material-symbols-rounded">help_outline</span>
          </Link>

          {/* Google Extended FAB "قدم مشروعك" */}
          <button
            onClick={openApplyModal}
            className="google-fab-extended"
            title="تقديم فكرة أو مشروع جديد للحاضنة"
          >
            <span className="material-symbols-rounded" style={{ fontSize: '1.25rem' }}>rocket_launch</span>
            <span className="google-fab-text">قدم مشروعك</span>
          </button>
        </div>
      </header>
    </>
  );
}
