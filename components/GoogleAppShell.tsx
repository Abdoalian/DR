'use client';

import React, { useState, useEffect } from 'react';
import GoogleAppHeader from './GoogleAppHeader';
import GoogleNavRail from './GoogleNavRail';
import Footer from './Footer';

interface GoogleAppShellProps {
  children: React.ReactNode;
}

export default function GoogleAppShell({ children }: GoogleAppShellProps) {
  const [isRailCollapsed, setIsRailCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Auto-collapse rail on tablet screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1200 && window.innerWidth > 768) {
        setIsRailCollapsed(true);
      } else if (window.innerWidth > 1200) {
        setIsRailCollapsed(false);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="google-app-shell">
      {/* Google Top App Bar */}
      <GoogleAppHeader
        onToggleNavRail={() => setIsRailCollapsed(!isRailCollapsed)}
        isRailCollapsed={isRailCollapsed}
        onOpenMobileNav={() => setIsMobileOpen(true)}
      />

      {/* Main App Layout Body */}
      <div className="google-app-body">
        {/* Google M3 Navigation Rail */}
        <GoogleNavRail
          isCollapsed={isRailCollapsed}
          isMobileOpen={isMobileOpen}
          onCloseMobile={() => setIsMobileOpen(false)}
        />

        {/* Scrollable Main Surface Content */}
        <div className={`google-app-main ${isRailCollapsed ? 'rail-collapsed' : ''}`}>
          {children}
          <div style={{ marginTop: '4rem' }}>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
