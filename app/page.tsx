'use client';

import Image from 'next/image';
import Header from './components/Header';
import BottomNav from './components/BottomNav';

export default function Home() {

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e] pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-sm text-[#D4AF37] font-medium" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              <span>🇸🇪</span>
              <span>برشته شده در سوئد</span>
              <span className="text-white/30">•</span>
              <span>☕</span>
              <span>دم‌آوری شده در تهران</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'Vazirmatn, serif' }}>
              قهوه <span className="text-[#D4AF37]">ممتاز</span>
              <br />
              <span className="text-[#D4AF37]" style={{ fontFamily: 'Vazirmatn, serif', fontWeight: 400 }}>ساخته شده با اشتیاق</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              تجربه ترکیب بی‌نظیر برشته‌کاری سوئدی و هنر دم‌آوری ایرانی
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="#menu" 
                className="px-6 py-2.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] text-white rounded-lg font-semibold text-sm hover:from-[#D4AF37] hover:to-[#8B6F47] transition-all duration-300 shadow-lg"
                style={{ fontFamily: 'Vazirmatn, sans-serif' }}
              >
                مشاهده منو
              </a>
              <a 
                href="#about" 
                className="px-6 py-2.5 border-2 border-white/30 text-white rounded-lg font-semibold text-sm hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                style={{ fontFamily: 'Vazirmatn, sans-serif' }}
              >
                داستان ما
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg"
                  alt="دانه‌های قهوه ممتاز"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8B6F47] rounded-full blur-2xl opacity-30"></div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 px-4 lg:px-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Vazirmatn, serif' }}>
                  <span className="text-[#D4AF37]">داستان</span> ما
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border-r-4 border-[#8B6F47]" style={{ padding: '40px 36px' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">🇸🇪</span>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>برشته شده در سوئد</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed" style={{ paddingLeft: '8px', paddingRight: '12px', fontFamily: 'Vazirmatn, sans-serif' }}>
                    دانه‌های قهوه ممتاز ما با دقت در سوئد و با استفاده از تکنیک‌های سنتی اسکاندیناوی برشته می‌شوند. این فرآیند دقیق طعم‌ها و عطرهای منحصر به فردی را نمایان می‌کند و پایه‌ای کامل برای قهوه استثنایی ایجاد می‌کند.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#8B6F47]/20 to-[#D4AF37]/20 backdrop-blur-sm rounded-2xl border-r-4 border-[#D4AF37] text-white" style={{ padding: '40px 36px' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">☕</span>
                    <h3 className="text-xl font-bold" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>دم‌آوری شده در تهران</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed" style={{ paddingLeft: '8px', paddingRight: '12px', fontFamily: 'Vazirmatn, sans-serif' }}>
                    هر فنجان با مهارت در محل ما در تهران دم می‌آید، جایی که باریستاهای ماهر ما دانه‌های برشته شده سوئدی را با روش‌های دقیق دم‌آوری ترکیب می‌کنند. از کلد برو تا قهوه چکنده، هر آماده‌سازی با دقت و اشتیاق ساخته می‌شود.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section-padding bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e]">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Vazirmatn, serif' }}>
              <span className="text-[#D4AF37]">منو</span> ما
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              مجموعه قهوه‌های منتخب ما را کشف کنید
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Menu Items */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-white/10" style={{ fontFamily: 'Vazirmatn, serif' }}>
                  کلد برو
                </h3>
                
                <div className="space-y-5">
                  {[
                    { name: 'کلد برو کلاسیک', price: 250000, description: 'نرم و خنک' },
                    { name: 'کلد برو لاته', price: 330000, description: 'خامه‌ای و متعادل' },
                    { name: 'کلد برو فوم', price: 330000, description: 'غنی با فوم مخملی' },
                    { name: 'کلد برو موکا', price: 330000, description: 'شکلاتی و لذیذ' },
                    { name: 'کلد برو کارامل لاته', price: 330000, description: 'لذت کارامل شیرین' },
                  ].map((item, itemIndex) => {
                    const formatPrice = (price: number) => {
                      return new Intl.NumberFormat('fa-IR').format(price);
                    };
                    return (
                      <div key={itemIndex} className="group">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <div className="flex-1">
                            <h4 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                              {item.name}
                            </h4>
                            <p className="text-white/60 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                              {item.description}
                            </p>
                          </div>
                          <div className="text-left">
                            <span className="text-xl md:text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                              {formatPrice(item.price)}
                            </span>
                            <span className="text-sm text-white/50 mr-1">تومان</span>
                          </div>
                        </div>
                        {itemIndex < 4 && (
                          <div className="h-px bg-white/10 mt-4"></div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Plant-based Note */}
              <div className="bg-gradient-to-r from-[#8B6F47]/20 to-[#D4AF37]/20 backdrop-blur-sm rounded-xl border border-[#D4AF37]/30 p-5">
                <p className="text-white/90 text-center text-sm md:text-base" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  <span className="text-[#D4AF37] font-semibold">✨</span> تمامی شیرها صددرصد گیاهی هستند
                </p>
              </div>
            </div>

            {/* Right Column - Menu Image */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="relative w-full" style={{ paddingBottom: '133%' }}>
                  <Image
                    src="/images/menu.jpeg"
                    alt="منوی D/N Coffee"
                    fill
                    className="object-contain bg-white/5 p-4"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="section-padding bg-gradient-to-br from-[#1a1f2e] via-[#1e2329] to-[#2C3038] text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Vazirmatn, serif' }}>
              <span className="text-[#D4AF37]">هنر</span> قهوه
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              از دانه تا فنجان، هر مرحله با دقت به کمال ساخته می‌شود
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'انتخاب دانه',
                description: 'ما بهترین دانه‌های قهوه را از سراسر جهان انتخاب می‌کنیم و کیفیت و پایداری را تضمین می‌کنیم.'
              },
              {
                icon: '🔥',
                title: 'برشته‌کاری',
                description: 'در سوئد، برشته‌کاران استاد ما از تکنیک‌های سنتی استفاده می‌کنند تا طعم‌ها و عطرهای منحصر به فرد را نمایان کنند.'
              },
              {
                icon: '☕',
                title: 'دم‌آوری',
                description: 'در تهران، باریستاهای متخصص ما هر فنجان را با دقت دم می‌آورند، از کلد برو تا قهوه چکنده.'
              },
            ].map((step, index) => (
              <div key={index} className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-6xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>{step.title}</h3>
                <p className="text-white/80 leading-relaxed" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Vazirmatn, serif' }}>
              نظرات <span className="text-[#D4AF37]">مشتریان</span> ما
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              تجربیات واقعی از عاشقان قهوه که به کیفیت ما اعتماد دارند
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'سارا جوهری',
                role: 'علاقه‌مند به قهوه',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                rating: 5,
                text: 'بهترین قهوه‌ای که تا به حال چشیده‌ام! برشته‌کاری سوئدی طعم‌های منحصر به فردی را نمایان می‌کند. هر صبح با D/N Coffee به بهترین شکل شروع می‌شود.',
                location: 'تهران، ایران'
              },
              {
                name: 'مارکوس اندرسون',
                role: 'باریستا',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                rating: 5,
                text: 'به عنوان یک باریستای حرفه‌ای، می‌توانم واقعاً کیفیت را درک کنم. کلد برو استثنایی است - نرم، غنی و کاملاً متعادل.',
                location: 'استکهلم، سوئد'
              },
              {
                name: 'لیلا محمدی',
                role: 'نوشنده روزانه قهوه',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                rating: 5,
                text: 'دوست دارم که هر فنجان چقدر تازه مزه می‌دهد. ترکیب برشته‌کاری سوئدی و دم‌آوری تهران چیزی واقعاً خاص ایجاد می‌کند. بسیار توصیه می‌شود!',
                location: 'تهران، ایران'
              },
              {
                name: 'داوید چن',
                role: 'بلاگر قهوه',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
                rating: 5,
                text: 'قهوه از سراسر جهان را امتحان کرده‌ام و D/N Coffee برجسته است. توجه به جزئیات در هر دو برشته‌کاری و دم‌آوری قابل توجه است.',
                location: 'نیویورک، آمریکا'
              },
              {
                name: 'اما ویلسون',
                role: 'صاحب کافه',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
                rating: 5,
                text: 'ما D/N Coffee را در کافه خود سرو می‌کنیم و مشتریان ما نمی‌توانند به اندازه کافی از آن استفاده کنند. قهوه چکنده به خصوص محبوب است - نرم و معطر.',
                location: 'لندن، انگلستان'
              },
              {
                name: 'امیر رضایی',
                role: 'متخصص قهوه',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
                rating: 5,
                text: 'ترکیب بی‌نظیر سنت و کیفیت. هر جرعه داستانی از استادی را روایت می‌کند. این همان چیزی است که قهوه ممتاز باید مزه بدهد.',
                location: 'تهران، ایران'
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg border border-white/10 hover:bg-white/15 hover:shadow-xl transition-all duration-300 hover:-translate-y-2" style={{ padding: '40px 36px' }}>
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#D4AF37]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-white/90 leading-relaxed mb-6 text-base" style={{ paddingLeft: '8px', paddingRight: '8px', fontFamily: 'Vazirmatn, sans-serif' }}>
                  "{testimonial.text}"
                </p>

                {/* Quote Icon */}
                <div className="text-white/20 mb-6">
                  <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border-2 border-white/20">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-1" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>{testimonial.name}</h4>
                    <p className="text-sm text-[#D4AF37] font-medium mb-1" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>{testimonial.role}</p>
                    <p className="text-xs text-white/60" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-padding bg-gradient-to-br from-[#1a1f2e] via-[#1e2329] to-[#2C3038]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Vazirmatn, serif' }}>
              گالری <span className="text-[#D4AF37]">قهوه</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              نگاهی به سفر قهوه ما
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              '/images/Coffee dn 1.JPG',
              '/images/Coffee dn bottlle.JPG',
              '/images/Coffee dn cup.JPG',
              '/images/Coffee dn pocket.JPG',
              '/images/Coffee dn pocket1.JPG',
              '/images/photo-output 4.JPEG',
              '/images/photo-output 5.JPEG',
            ].map((src, index) => {
              return (
              <div key={index} className="relative aspect-square rounded-2xl overflow-hidden group cursor-pointer">
                <Image
                  src={src}
                  alt={`قهوه ${index + 1}`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            )})}
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
                    alt="لوگوی D/N COFFEE"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              
              <h3 className="text-lg md:text-2xl font-bold" style={{ fontFamily: 'Vazirmatn, serif', marginBottom: '20px' }}>
                D/N COFFEE
              </h3>
              
              <p className="text-white/70 leading-relaxed text-xs md:text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif', marginBottom: '32px' }}>
                تجربه قهوه ممتاز. برشته شده در سوئد، دم‌آوری شده در تهران.
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
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                لینک‌های سریع
                <div className="absolute -bottom-2 right-0 w-8 md:w-12 h-0.5 bg-gradient-to-l from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                <li>
                  <a 
                    href="#home" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>خانه</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>درباره</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>منو</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#process" 
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
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                انواع قهوه
                <div className="absolute -bottom-2 right-0 w-8 md:w-12 h-0.5 bg-gradient-to-l from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>کلد برو</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>قهوه چکنده</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>اسپرسو</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                    style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>تخصصی</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                تماس با ما
                <div className="absolute -bottom-2 right-0 w-8 md:w-12 h-0.5 bg-gradient-to-l from-[#8B6F47] to-[#D4AF37]"></div>
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
              <p className="text-white/50 text-xs md:text-sm text-center md:text-right" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                ©2025 D/N Coffee. تمام حقوق محفوظ است.
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
