'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BottomNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'menu', 'process', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { 
      href: '/', 
      label: 'Home',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      href: '/about', 
      label: 'About',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      href: '/#menu', 
      label: 'Menu',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      )
    },
    { 
      href: '/contact', 
      label: 'Contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    },
  ];

  const getIsActive = (href: string) => {
    if (href === '/') {
      return pathname === '/' && activeSection === 'home';
    }
    if (href.startsWith('/#')) {
      const section = href.replace('/#', '');
      return pathname === '/' && activeSection === section;
    }
    return pathname === href;
  };

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-md bg-[#1E1E1E] rounded-3xl shadow-2xl md:hidden z-50">
      <div className="flex items-center justify-around px-2 py-4">
        {navItems.map((item) => {
          const isActive = getIsActive(item.href);
          const isPageLink = item.href.startsWith('/') && !item.href.startsWith('/#');
          
          const navContent = (
            <div className="flex flex-col items-center gap-1.5 relative py-1">
              {/* Active Indicator Line - Above Icon */}
              {isActive && (
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-[#007bff] rounded-full shadow-[0_0_8px_rgba(0,123,255,0.8)]"></div>
              )}
              
              {/* Icon */}
              <div className={`transition-all duration-300 ${
                isActive 
                  ? 'text-[#007bff]' 
                  : 'text-white'
              }`} style={{
                filter: isActive ? 'drop-shadow(0 0 6px rgba(0, 123, 255, 0.8))' : 'none'
              }}>
                {item.icon}
              </div>
              
              {/* Label */}
              <span className={`text-[11px] font-medium transition-all duration-300 ${
                isActive 
                  ? 'text-white' 
                  : 'text-white/80'
              }`} style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                {item.label}
              </span>
            </div>
          );

          if (isPageLink) {
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex-1 flex justify-center"
              >
                {navContent}
              </Link>
            );
          } else {
            return (
              <a
                key={item.href}
                href={item.href}
                className="flex-1 flex justify-center"
              >
                {navContent}
              </a>
            );
          }
        })}
      </div>
    </nav>
  );
}
