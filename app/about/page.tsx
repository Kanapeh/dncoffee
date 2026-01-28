'use client';

import Image from 'next/image';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 bg-white">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-[#6B6B6B] text-xs md:text-sm lg:text-base mb-4 md:mb-6" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              <a href="/" className="hover:text-[#2C1810] transition-colors">خانه</a>
              <span>/</span>
              <span className="text-[#2C1810]">درباره ما</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-[#2C1810] mb-4 leading-tight px-4" style={{ fontFamily: 'Vazirmatn, serif' }}>
              <span className="text-[#8B6F47]">درباره</span> ما
            </h1>
          </div>
        </div>
      </section>

      {/* Main About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
            {/* Left Column - Visuals and Statistics */}
            <div className="relative space-y-5 md:space-y-6 order-2 lg:order-1">
              {/* Statistics Card */}
              <div className="bg-[#F8F8F8] rounded-xl md:rounded-2xl p-5 md:p-8 shadow-lg relative z-10">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2C1810] mb-2" style={{ fontFamily: 'Vazirmatn, serif' }}>
                      30,000+
                    </h3>
                    <p className="text-[#6B6B6B] text-xs md:text-sm lg:text-base leading-relaxed" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      فروش در جولای 2021 با امتیاز 5 ستاره و مشتریان راضی.
                    </p>
                  </div>
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 md:w-6 md:h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
                {/* Client Avatars Placeholder */}
                <div className="flex -space-x-2 mt-4 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#8B6F47] to-[#D4AF37] border-2 border-white"></div>
                  ))}
                </div>
                <div className="flex -space-x-2 mt-2 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-[#8B6F47]/60 to-[#D4AF37]/60 border-2 border-white"></div>
                  ))}
                </div>
              </div>

              {/* Branding Image */}
              <div className="relative rounded-xl md:rounded-2xl overflow-hidden shadow-lg md:shadow-xl bg-gradient-to-br from-[#F5F1E8] to-[#FAF8F3] max-w-md mx-auto lg:mx-0">
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <Image
                    src="/images/about.JPEG"
                    alt="D/N Coffee Branding Materials"
                    fill
                    className="object-contain p-4"
                    sizes="(max-width: 768px) 90vw, 400px"
                    priority
                  />
                </div>
              </div>

              {/* Ratings */}
              <div className="pt-2 md:pt-4">
                <p className="text-[#2C1810] font-semibold mb-2 md:mb-3 text-xs md:text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  بهترین امتیازات
                </p>
                <div className="flex gap-1 md:gap-2">
                  <span className="text-xl md:text-2xl">😊</span>
                  <span className="text-xl md:text-2xl">😊</span>
                  <span className="text-xl md:text-2xl">😊</span>
                  <span className="text-xl md:text-2xl">🙂</span>
                  <span className="text-xl md:text-2xl">😄</span>
                </div>
              </div>
            </div>

            {/* Right Column - About Us Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
              {/* Sub-heading */}
              <div>
                <p className="text-[#6B6B6B] text-xs md:text-sm mb-2 md:mb-3" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  کمی
                </p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#2C1810] mb-4 md:mb-6 leading-tight" style={{ fontFamily: 'Vazirmatn, serif' }}>
                  درباره ما
                </h2>
              </div>

              {/* Description Text */}
              <div className="space-y-4 md:space-y-6">
                <p className="text-[#6B6B6B] leading-relaxed text-sm md:text-base lg:text-lg" style={{ fontFamily: 'Vazirmatn, sans-serif', lineHeight: '1.7' }}>
                  در D/N Coffee، ما معتقدیم که قهوه چیزی بیش از یک نوشیدنی است — ریتمی است که با روز شما حرکت می‌کند و در شب شما می‌ماند.
                </p>
                
                <p className="text-[#6B6B6B] leading-relaxed text-sm md:text-base lg:text-lg" style={{ fontFamily: 'Vazirmatn, sans-serif', lineHeight: '1.7' }}>
                  متولد شده از سال‌ها تجربه پشت بار و احترام عمیق به قهوه تخصصی، D/N Coffee یک برند کوچک و مستقل است که بر روی قهوه بطری شده با نیت و هدف متمرکز است. ما با دانه‌های قهوه تخصصی با دقت انتخاب شده کار می‌کنیم و در دسته‌های کوچک دم می‌کنیم تا وضوح، تعادل و شخصیت را در هر بطری حفظ کنیم.
                </p>

                <p className="text-[#6B6B6B] leading-relaxed text-sm md:text-base lg:text-lg" style={{ fontFamily: 'Vazirmatn, sans-serif', lineHeight: '1.7' }}>
                  از صبح‌های روشن تا شب‌های طولانی، قهوه‌های ما طراحی شده‌اند تا به طور طبیعی در زندگی واقعی شما جای بگیرند — چه روز خود را شروع می‌کنید، آرام می‌شوید، یا زمانی که بیشترین اهمیت را دارد بیدار می‌مانید.
                </p>
              </div>

              {/* Approach Highlight */}
              <div className="bg-[#F5F1E8] rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 border-l-4 border-[#8B6F47]">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-[#2C1810] mb-2 md:mb-3" style={{ fontFamily: 'Vazirmatn, serif' }}>
                  رویکرد ما ساده است:
                </h3>
                <p className="text-[#6B6B6B] leading-relaxed font-semibold text-sm md:text-base lg:text-lg" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  بدون میانبر، بدون تولید انبوه، بدون سازش در کیفیت.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-2 md:pt-4">
                <a
                  href="/#menu"
                  className="inline-block w-full sm:w-auto text-center px-5 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-[#8B6F47] to-[#6B5A47] text-white rounded-lg md:rounded-xl font-semibold text-xs md:text-sm shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300"
                  style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                >
                  بیشتر بدانید
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="section-padding bg-gradient-to-br from-[#F5F1E8] to-white">
        <div className="container-custom px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-6 md:mb-8">
              <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] mx-auto mb-4 md:mb-6"></div>
              <p className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#2C1810] mb-3 md:mb-4 leading-tight px-4" style={{ fontFamily: 'Vazirmatn, serif' }}>
                دم‌آوری شده برای روز و شب.
              </p>
              <p className="text-lg md:text-xl lg:text-2xl text-[#8B6F47] font-medium px-4" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                از دانه تا بطری، هر جزئیات مهم است.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e] text-white overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#8B6F47]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-custom relative z-10" style={{ paddingTop: '48px', paddingBottom: '80px', paddingLeft: '32px', paddingRight: '32px' }}>
          {/* Main Footer Content */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12 mb-12 md:mb-16">
            {/* Brand Section */}
            <div className="col-span-2 md:col-span-1 lg:col-span-1" style={{ marginTop: '32px' }}>
              <div className="relative w-24 h-24 md:w-32 md:h-32 group" style={{ marginBottom: '32px' }}>
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B6F47]/30 to-[#D4AF37]/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Border Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#8B6F47]/30 group-hover:border-[#8B6F47]/60 transition-all duration-300"></div>
                
                {/* Logo Container */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-white/5 backdrop-blur-sm p-3 shadow-2xl group-hover:shadow-[#8B6F47]/30 group-hover:scale-105 transition-all duration-500">
                  <Image
                    src="/images/lll.JPG"
                    alt="D/N COFFEE Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              
              <h3 className="text-lg md:text-2xl font-bold" style={{ fontFamily: 'Vazirmatn, serif', marginBottom: '20px' }}>
                D/N COFFEE
              </h3>
              
              <p className="text-white/70 leading-relaxed text-xs md:text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif', marginBottom: '32px' }}>
                تجربه قهوه DN Coffee. برشته شده در سوئد، دم‌آوری شده در تهران.
              </p>

              {/* Social Media */}
              <div className="flex gap-3">
                <a 
                  href="https://instagram.com/dncoffee.cafe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-br hover:from-[#8B6F47] hover:to-[#D4AF37] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#8B6F47]/30"
                >
                  <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="https://facebook.com/dncoffee.cafe" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-gradient-to-br hover:from-[#8B6F47] hover:to-[#D4AF37] transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#8B6F47]/30"
                >
                  <svg className="w-5 h-5 transform group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'Vazirmatn, serif' }}>
                لینک‌های سریع
                <div className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                <li>
                  <a 
                    href="/" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>خانه</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/about" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>درباره ما</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>منو</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#process" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>فرآیند</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Coffee Types */}
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'Vazirmatn, serif' }}>
                انواع قهوه
                <div className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                <li>
                  <a 
                    href="/#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>کلد برو</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>قهوه چکنده</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>اسپرسو</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>ویژه</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'Vazirmatn, serif' }}>
                تماس
                <div className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-3 md:space-y-4 mt-4 md:mt-6">
                <li className="flex items-start gap-3 text-white/70" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <span className="text-[#8B6F47] mt-1">📍</span>
                  <span>تهران، ایران</span>
                </li>
                <li className="flex items-start gap-3 text-white/70" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <span className="text-[#8B6F47] mt-1">📞</span>
                  <a href="tel:+989027380949" className="hover:text-white transition-colors">+98 902 738 0949</a>
                </li>
                <li className="flex items-start gap-3 text-white/70" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <span className="text-[#8B6F47] mt-1">💬</span>
                  <a href="https://wa.me/989027380949" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">در واتساپ</a>
                </li>
                <li className="flex items-start gap-3 text-white/70" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <span className="text-[#8B6F47] mt-1">📧</span>
                  <a href="mailto:hellodncoffe@gmail.com" className="hover:text-white transition-colors">hellodncoffe@gmail.com</a>
                </li>
                <li className="flex items-start gap-3 text-white/70" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <span className="text-[#8B6F47] mt-1">🌐</span>
                  <a href="https://dncoffee.cafe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">dncoffee.cafe</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              <p className="text-white/50 text-xs md:text-sm text-center md:text-left" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                ©2024 D/N Coffee. تمامی حقوق محفوظ است.
              </p>
              <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                <span className="text-[#8B6F47]">🇸🇪</span>
                <span>برشته شده در سوئد</span>
                <span className="text-white/30">•</span>
                <span className="text-[#8B6F47]">☕</span>
                <span>دم‌آوری شده در تهران</span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation for Mobile */}
      <BottomNav />
    </div>
  );
}
