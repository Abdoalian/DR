'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  onOpenApplyModal?: () => void;
}

export default function Header({ onOpenApplyModal }: HeaderProps) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const handleApplyClick = (e: React.MouseEvent) => {
    e.preventDefault();
    closeMobile();
    if (onOpenApplyModal) {
      onOpenApplyModal();
    } else {
      window.dispatchEvent(new CustomEvent('open-apply-modal'));
    }
  };

  return (
    <header className={scrolled ? 'scrolled' : ''}>
      <div className="nav-container">
        <Link href="/" className="logo-group" onClick={closeMobile}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/logo.png" alt="شعار حاضنة رواق" className="logo-img" />
          <div className="logo-text">
            <h1>حاضنة رواق RWAQ</h1>
            <span>مركز الابتكار وريادة الأعمال - جامعة الأزهر</span>
          </div>
        </Link>

        <ul className={`nav-links ${mobileOpen ? 'mobile-active' : ''}`}>
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''} onClick={closeMobile}>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="/about" className={pathname === '/about' ? 'active' : ''} onClick={closeMobile}>
              عن رواق
            </Link>
          </li>

          <li className="nav-item-dropdown">
            <Link
              href="/programs"
              className={`dropdown-trigger ${pathname.startsWith('/programs') || pathname.startsWith('/startups') ? 'active' : ''}`}
            >
              البرامج والاحتضان <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem', marginRight: '3px' }}></i>
            </Link>
            <div className="nav-dropdown">
              <div className="dropdown-header">
                <i className="fas fa-compass"></i> المسارات والشركات
              </div>
              <Link href="/programs" className="dropdown-link" onClick={closeMobile}>
                <i className="fas fa-layer-group"></i> البرامج والمسارات
              </Link>
              <Link href="/startups" className="dropdown-link" onClick={closeMobile}>
                <i className="fas fa-rocket"></i> الشركات المحتضنة
              </Link>
            </div>
          </li>

          <li className="nav-item-dropdown">
            <Link
              href="/programs#incubators-network"
              className="dropdown-trigger"
            >
              الحاضنات والوحدات <i className="fas fa-chevron-down" style={{ fontSize: '0.7rem', marginRight: '3px' }}></i>
            </Link>
            <div className="nav-dropdown">
              <div className="dropdown-header">
                <i className="fas fa-building-user"></i> شبكة الحاضنات والوحدات
              </div>
              <Link href="/programs#incubator-cairo" className="dropdown-link" onClick={closeMobile}>
                <i className="fas fa-city"></i> حاضنة رواق القاهرة
              </Link>
              <Link href="/programs#incubator-assiut" className="dropdown-link" onClick={closeMobile}>
                <i className="fas fa-location-dot"></i> حاضنة رواق أسيوط
              </Link>
              <Link href="/programs#incubator-qena" className="dropdown-link" onClick={closeMobile}>
                <i className="fas fa-leaf"></i> حاضنة رواق قنا
              </Link>
              <Link href="/programs#incubator-nano" className="dropdown-link" onClick={closeMobile}>
                <i className="fas fa-atom"></i> حاضنة رواق تكنولوجيا النانو
              </Link>
              <Link href="/programs#incubator-medical" className="dropdown-link" onClick={closeMobile}>
                <i className="fas fa-heart-pulse"></i> حاضنة رواق الطبية
              </Link>
              <Link href="/programs#incubator-greentech" className="dropdown-link" onClick={closeMobile}>
                <i className="fas fa-globe-americas"></i> مركز التكنولوجيا الخضراء وتغيرات المناخ
              </Link>
            </div>
          </li>

          <li>
            <Link href="/mentors" className={pathname === '/mentors' ? 'active' : ''} onClick={closeMobile}>
              الموجهون والخبراء
            </Link>
          </li>
          <li>
            <Link href="/news" className={pathname === '/news' ? 'active' : ''} onClick={closeMobile}>
              الأخبار والفعاليات
            </Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''} onClick={closeMobile}>
              تواصل معنا
            </Link>
          </li>
          <li>
            <Link href="/admin" className={pathname === '/admin' ? 'active' : ''} style={{ color: 'var(--primary)', fontWeight: 800 }} onClick={closeMobile}>
              <i className="fas fa-lock"></i> لوحة التحكم
            </Link>
          </li>
        </ul>

        <div className="nav-actions">
          <button onClick={handleApplyClick} className="btn btn-primary open-modal-btn">
            <i className="fas fa-rocket"></i> <span className="nav-btn-text">قدم مشروعك الآن</span>
          </button>
          <button
            className="menu-toggle"
            aria-label="القائمة"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </div>
    </header>
  );
}
