'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
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
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'About', href: '/about', icon: '📖' },
    { name: 'Menu', href: '/#menu', icon: '☕' },
    { name: 'Blog', href: '/blog', icon: '📝' },
    { name: 'Process', href: '/#process', icon: '🔥' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled 
            ? 'bg-gradient-to-br from-[#2C3038]/95 via-[#1e2329]/95 to-[#1a1f2e]/95 backdrop-blur-xl shadow-lg border-b border-white/10 py-3' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between">
            {/* Logo Section */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group relative z-10"
            >
              {/* Logo Container */}
              <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20 group-hover:border-white/40 transition-all duration-300 group-hover:scale-105">
                <Image
                  src="/images/lll.JPG"
                  alt="D/N COFFEE Logo"
                  fill
                  className="object-contain p-1.5"
                  priority
                />
              </div>
              
              <div className="hidden sm:block">
                <h1 className="text-lg md:text-xl font-bold text-white group-hover:text-[#D4AF37] transition-colors duration-300 tracking-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  D/N COFFEE
                </h1>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navItems.map((item, index) => {
                // Check if current page matches the nav item
                const isPageActive = pathname === item.href || (item.href === '/' && pathname === '/');
                const isAnchorActive = !isPageActive && item.href.startsWith('/#') && activeSection === item.href.replace('/#', '');
                const isActive = isPageActive || isAnchorActive;
                const isPageLink = item.href.startsWith('/') && !item.href.startsWith('/#');
                
                const navContent = (
                  <>
                    {/* Content */}
                    <span className="relative z-10 text-sm font-medium">
                      {item.name}
                    </span>
                    
                    {/* Active Indicator */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] rounded-full"></div>
                    )}
                  </>
                );

                if (isPageLink) {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 group ${
                        isActive 
                          ? 'text-[#D4AF37]' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {navContent}
                    </Link>
                  );
                } else {
                  return (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`relative px-6 py-2 rounded-lg font-medium text-sm transition-all duration-300 group ${
                        isActive 
                          ? 'text-[#D4AF37]' 
                          : 'text-white/70 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {navContent}
                    </a>
                  );
                }
              })}
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center gap-2 md:gap-3">
              <Link
                href="/login"
                className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                Login
              </Link>
              <div className="h-4 w-px bg-white/20"></div>
              <Link
                href="/signup"
                className="px-3 py-1.5 md:px-4 md:py-2 text-xs md:text-sm font-medium text-white/70 hover:text-white transition-colors duration-300"
              >
                Sign Up
              </Link>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
