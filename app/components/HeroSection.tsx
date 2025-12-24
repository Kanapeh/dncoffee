'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden day-section wood-texture">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-[#D4C4A8]/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#2C3E50]/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-slideUp">
            <div className="inline-block mb-8">
              <span className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full text-sm font-semibold text-[#8B6F47] border border-[#8B6F47]/20 shadow-lg">
                ☀️ Brewed for Day & Night 🌙
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              <span className="text-[#2C1810]">Perfect Coffee</span>
              <br />
              <span className="gradient-text">Day & Night</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Experience the finest coffee crafted for every moment. From sunrise to sunset, 
              we bring you premium quality in every cup.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
              <Link href="#menu" className="btn-primary inline-block text-center">
                Explore Menu
              </Link>
              <Link href="#about" className="btn-secondary inline-block text-center">
                Our Story
              </Link>
            </div>
          </div>

          {/* Right Visual - Coffee Cup Only */}
          <div className="relative animate-scaleIn">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Coffee Cup */}
              <div className="relative w-80 h-96 mx-auto">
                {/* Cup Shadow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-16 bg-black/10 rounded-full blur-2xl"></div>
                
                {/* Cup Body */}
                <div className="relative w-full h-full">
                  {/* Cup Container */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-80 bg-gradient-to-b from-[#F5F1E8] via-[#D4C4A8] to-[#8B6F47] rounded-t-full rounded-b-3xl shadow-2xl border-8 border-[#8B6F47]/30">
                    {/* Coffee Liquid */}
                    <div className="absolute bottom-16 left-1/2 -translate-x-1/2 w-48 h-56 bg-gradient-to-b from-[#2C1810] via-[#8B6F47] to-[#2C1810] rounded-t-full"></div>
                    
                    {/* Foam */}
                    <div className="absolute bottom-56 left-1/2 -translate-x-1/2 w-48 h-12 bg-gradient-to-b from-[#D4C4A8] to-[#F5F1E8] rounded-full shadow-inner"></div>
                    
                    {/* Handle */}
                    <div className="absolute bottom-32 right-8 w-16 h-20 border-8 border-[#8B6F47]/30 rounded-full"></div>
                    
                    {/* Decorative Pattern */}
                    <div className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#8B6F47]/20 rounded-full"></div>
                  </div>
                  
                  {/* Steam */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                    <div className="w-3 h-24 bg-gradient-to-t from-[#D4C4A8]/60 to-transparent rounded-full animate-float"></div>
                    <div className="absolute left-8 w-2.5 h-20 bg-gradient-to-t from-[#D4C4A8]/50 to-transparent rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute -left-8 w-2.5 h-22 bg-gradient-to-t from-[#D4C4A8]/55 to-transparent rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute left-16 w-2 h-18 bg-gradient-to-t from-[#D4C4A8]/40 to-transparent rounded-full animate-float" style={{ animationDelay: '0.8s' }}></div>
                  </div>
                </div>
              </div>

              {/* Floating Coffee Beans */}
              <div className="absolute top-10 -left-10 w-12 h-12 bg-[#8B6F47] rounded-full opacity-60 animate-float shadow-lg"></div>
              <div className="absolute bottom-20 -right-10 w-8 h-8 bg-[#2C3E50] rounded-full opacity-50 animate-float shadow-lg" style={{ animationDelay: '1.5s' }}></div>
              <div className="absolute top-1/2 -right-16 w-10 h-10 bg-[#8B6F47] rounded-full opacity-40 animate-float shadow-lg" style={{ animationDelay: '0.8s' }}></div>
              <div className="absolute bottom-40 -left-16 w-6 h-6 bg-[#D4C4A8] rounded-full opacity-50 animate-float shadow-lg" style={{ animationDelay: '2s' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#8B6F47]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
