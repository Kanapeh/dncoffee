'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e] pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm md:text-base mb-6" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              <a href="/" className="hover:text-white transition-colors">خانه</a>
              <span>/</span>
              <span className="text-white">تماس</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight" style={{ fontFamily: 'Vazirmatn, serif' }}>
              <span className="text-[#D4AF37]">تماس</span> با ما
            </h1>
            <p className="text-white/70 text-base md:text-lg max-w-2xl mx-auto" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              خوشحال می‌شویم از شما بشنویم. پیام خود را برای ما ارسال کنید و ما در اسرع وقت پاسخ خواهیم داد.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Contact Form */}
            <div className="order-2 lg:order-1">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl">
                {/* Form Header */}
                <div className="mb-6">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1" style={{ fontFamily: 'Vazirmatn, serif' }}>
                    ارسال پیام
                  </h3>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-white/70 mb-1.5 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      نام کامل
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="نام شما"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all duration-300"
                      style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-white/70 mb-1.5 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      ایمیل
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="ایمیل شما"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all duration-300"
                      style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                      required
                    />
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label htmlFor="subject" className="block text-white/70 mb-1.5 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      موضوع
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="موضوع پیام"
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all duration-300"
                      style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                      required
                    />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-white/70 mb-1.5 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      پیام
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="پیام شما"
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder:text-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all duration-300 resize-none"
                      style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                      required
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full py-2.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] text-white font-semibold text-sm rounded-lg hover:from-[#D4AF37] hover:to-[#8B6F47] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 mt-2"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    ارسال پیام
                  </button>
                </form>
              </div>
            </div>

            {/* Right Column - Contact Info & Map */}
            <div className="space-y-6 order-1 lg:order-2">
              {/* Contact Details */}
              <div className="space-y-4">
                {/* Phone */}
                <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B6F47]/20 to-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#8B6F47]/30 group-hover:to-[#D4AF37]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs mb-1.5 font-medium" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>تلفن</p>
                    <a href="tel:+989027380949" className="text-white font-semibold text-base hover:text-[#D4AF37] transition-colors block" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      +98 902 738 0949
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B6F47]/20 to-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#8B6F47]/30 group-hover:to-[#D4AF37]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs mb-1.5 font-medium" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>ایمیل</p>
                    <a href="mailto:hellodncoffe@gmail.com" className="text-white font-semibold text-base hover:text-[#D4AF37] transition-colors break-all block" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      hellodncoffe@gmail.com
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B6F47]/20 to-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#8B6F47]/30 group-hover:to-[#D4AF37]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs mb-1.5 font-medium" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>واتساپ</p>
                    <a href="https://wa.me/989027380949" target="_blank" rel="noopener noreferrer" className="text-white font-semibold text-base hover:text-[#D4AF37] transition-colors block" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      در واتساپ
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-[#D4AF37]/50 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8B6F47]/20 to-[#D4AF37]/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:from-[#8B6F47]/30 group-hover:to-[#D4AF37]/30 transition-colors">
                    <svg className="w-6 h-6 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60 text-xs mb-1.5 font-medium" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>موقعیت</p>
                    <p className="text-white font-semibold text-base" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      تهران، ایران
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-white/10 shadow-xl mt-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.489713028447!2d51.38901331525877!3d35.68919738019228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e00491ff3dcdd%3A0xf0b3697c567024bc!2sTehran%2C%20Tehran%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1234567890123!5m2!1sen!2s"
                  width="100%"
                  height="280"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: 'Vazirmatn, serif' }}>
              آماده تجربه <span className="text-[#D4AF37]">قهوه DN Coffee</span> هستید؟
            </h2>
            <p className="text-white/70 text-base md:text-lg mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              منوی ما را کاوش کنید و ترکیب مناسب برای ذائقه خود را پیدا کنید
            </p>
            <a
              href="/#menu"
              className="inline-block px-6 py-2.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] text-white font-semibold text-sm rounded-lg hover:from-[#D4AF37] hover:to-[#8B6F47] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/30 transform hover:scale-105"
              style={{ fontFamily: 'Vazirmatn, sans-serif' }}
            >
              مشاهده منو
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact-footer" className="relative bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e] text-white overflow-hidden border-t border-white/10">
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
              
              <h3 className="text-lg md:text-2xl font-bold mb-4" style={{ fontFamily: 'Vazirmatn, serif' }}>
                D/N COFFEE
              </h3>
              
              <p className="text-white/70 leading-relaxed text-xs md:text-sm mb-6" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
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
                فروشگاه ما
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
                    <span>خدمات</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="/contact" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>تماس</span>
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
                تماس با ما
                <div className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-3 md:space-y-4 mt-4 md:mt-6">
                <li className="text-white/70 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  تهران، ایران
                </li>
                <li className="text-white/70 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <a href="tel:+989027380949" className="hover:text-white transition-colors">+98 902 738 0949</a>
                </li>
                <li className="text-white/70 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <a href="https://wa.me/989027380949" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">در واتساپ</a>
                </li>
                <li className="text-white/70 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <a href="mailto:hellodncoffe@gmail.com" className="hover:text-white transition-colors">hellodncoffe@gmail.com</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              <p className="text-white/50 text-xs md:text-sm text-center md:text-left" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                کپی‌رایت © 2024 D/N Coffee | طراحی شده توسط D/N Coffee
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
