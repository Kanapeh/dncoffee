'use client';

import { useState, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('همه');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const articles = [
    {
      id: 'specialty-coffee-guide',
      title: 'انواع قهوه تخصصی و قهوه دمی: راهنمای کامل',
      excerpt: 'آشنایی کامل با انواع قهوه تخصصی و قهوه دمی، ویژگی‌های منحصر به فرد هر نوع و تفاوت‌های آن‌ها',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-11-25',
      category: 'مقدمه بر قهوه',
      author: 'تیم D N Coffee',
      readTime: '5 دقیقه'
    },
    {
      id: 'brewing-methods',
      title: 'روش‌های دم‌آوری قهوه تخصصی: از کمکس تا وی 60',
      excerpt: 'آموزش کامل روش‌های مختلف دم‌آوری قهوه تخصصی با ابزارهای نسل سوم و نکات مهم برای دستیابی به بهترین طعم',
      image: '/images/Coffee dn cup.JPG',
      date: '2025-11-26',
      category: 'دم آوری قهوه',
      author: 'تیم D N Coffee',
      readTime: '7 دقیقه'
    },
    {
      id: 'coffee-origins',
      title: 'خاستگاه‌های قهوه تخصصی: از اتیوپی تا کلمبیا',
      excerpt: 'بررسی کامل خاستگاه‌های مختلف قهوه تخصصی و ویژگی‌های منحصر به فرد هر منطقه در تولید قهوه با کیفیت',
      image: '/images/Coffee dn bottlle.JPG',
      date: '2025-11-27',
      category: 'درک قهوه',
      author: 'تیم D N Coffee',
      readTime: '6 دقیقه'
    },
    {
      id: 'sustainability',
      title: 'پایداری در صنعت قهوه',
      excerpt: 'نقش کشاورزان و برشته‌کاران در حفظ پایداری محیط زیست و تولید قهوه با کیفیت',
      image: '/images/Coffee dn pocket.JPG',
      date: '2025-11-28',
      category: 'پایداری',
      author: 'تیم D N Coffee',
      readTime: '4 دقیقه'
    },
    {
      id: 'coffee-roasting',
      title: 'رست قهوه: از روشن تا تیره',
      excerpt: 'آشنایی با انواع رست قهوه و تأثیر آن بر طعم، بادی و ویژگی‌های قهوه تخصصی',
      image: '/images/Coffee dn cup.JPG',
      date: '2025-11-29',
      category: 'درک قهوه',
      author: 'تیم D N Coffee',
      readTime: '5 دقیقه'
    },
    {
      id: 'coffee-flavors',
      title: 'طعم‌های قهوه: از میوه‌ای تا شکلاتی',
      excerpt: 'بررسی طعم‌های مختلف قهوه تخصصی و نحوه تشخیص و لذت بردن از هر طعم',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-11-30',
      category: 'درک قهوه',
      author: 'تیم D N Coffee',
      readTime: '6 دقیقه'
    },
    {
      id: 'coffee-storage',
      title: 'نگهداری قهوه: حفظ تازگی و طعم',
      excerpt: 'راهنمای کامل نگهداری صحیح قهوه تخصصی برای حفظ تازگی، عطر و طعم آن',
      image: '/images/Coffee dn bottlle.JPG',
      date: '2025-12-01',
      category: 'مقدمه بر قهوه',
      author: 'تیم D N Coffee',
      readTime: '4 دقیقه'
    },
    {
      id: 'coffee-processing',
      title: 'فرآوری قهوه: شسته، طبیعی و عسلی',
      excerpt: 'آشنایی با روش‌های مختلف فرآوری قهوه و تأثیر هر روش بر طعم نهایی قهوه',
      image: '/images/Coffee dn pocket.JPG',
      date: '2025-12-02',
      category: 'درک قهوه',
      author: 'تیم D N Coffee',
      readTime: '5 دقیقه'
    },
    {
      id: 'arabica-vs-robusta',
      title: 'تفاوت عربیکا و روبوستا',
      excerpt: 'مقایسه کامل بین قهوه عربیکا و روبوستا از نظر طعم، کافئین و کاربرد',
      image: '/images/Coffee dn cup.JPG',
      date: '2025-12-03',
      category: 'مقدمه بر قهوه',
      author: 'تیم D N Coffee',
      readTime: '3 دقیقه'
    },
    {
      id: 'cold-brew-coffee',
      title: 'قهوه کلد برو: روش دم‌آوری سرد',
      excerpt: 'آموزش کامل تهیه قهوه کلد برو و تفاوت آن با روش‌های دیگر دم‌آوری',
      image: '/images/Coffee dn bottlle.JPG',
      date: '2025-12-04',
      category: 'دم آوری قهوه',
      author: 'تیم D N Coffee',
      readTime: '6 دقیقه'
    },
    {
      id: 'coffee-grinding',
      title: 'آسیاب قهوه: درجه آسیاب و تأثیر آن',
      excerpt: 'راهنمای انتخاب درجه آسیاب مناسب برای هر روش دم‌آوری و تأثیر آن بر طعم',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-05',
      category: 'دم آوری قهوه',
      author: 'تیم D N Coffee',
      readTime: '5 دقیقه'
    },
    {
      id: 'colombia-gesha-spirits',
      title: 'کلمبیا گیشا اسپیریتس: طعمی خاص از عطر گل‌ها و پرتقال',
      excerpt: 'بررسی کامل قهوه کلمبیا گیشا اسپیریتس، یکی از نادرترین و گران‌قیمت‌ترین قهوه‌های تخصصی جهان با طعم‌های منحصر به فرد',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-06',
      category: 'درک قهوه',
      author: 'تیم D N Coffee',
      readTime: '8 دقیقه'
    }
  ];

  const categories = ['همه', 'مقدمه بر قهوه', 'دم آوری قهوه', 'درک قهوه', 'پایداری'];
  
  const filteredArticles = useMemo(() => {
    let filtered = articles;
    
    if (selectedCategory !== 'همه') {
      filtered = filtered.filter(a => a.category === selectedCategory);
    }
    
    if (searchQuery.trim()) {
      filtered = filtered.filter(a => 
        a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    return filtered;
  }, [selectedCategory, searchQuery]);

  const featuredArticle = articles[0];
  const regularArticles = filteredArticles.filter(a => a.id !== featuredArticle.id);

  return (
    <div dir="rtl" className="min-h-screen bg-[#0a0d14] text-white">
      <Header />
      
      {/* Hero Section - Modern Design */}
      <section className="relative pt-32 md:pt-40 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0d14] via-[#0a0d14]/90 to-[#0a0d14] z-10"></div>
          {featuredArticle && (
            <Image
              src={featuredArticle.image}
              alt={featuredArticle.title}
              fill
              className="object-cover opacity-10"
              priority
              sizes="100vw"
            />
          )}
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B6F47]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="container-custom relative z-20 px-4 md:px-6">
          <div className="max-w-5xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              <Link href="/" className="hover:text-[#D4AF37] transition-colors">خانه</Link>
              <span className="text-white/30">/</span>
              <span className="text-[#D4AF37]">بلاگ</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Vazirmatn, serif' }}>
              بلاگ <span className="text-[#D4AF37]">قهوه</span>
            </h1>
            
            <p className="text-white/70 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed mb-10" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              کشف دنیای قهوه تخصصی از طریق مقالات و راهنماهای ما
            </p>

            {/* Search Bar - Modern Design */}
            <div className="relative max-w-2xl mx-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="جستجو در مقالات..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-3 pr-14 bg-white/10 backdrop-blur-xl border-2 border-white/20 rounded-2xl text-white placeholder-white/50 focus:outline-none focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/20 transition-all text-base"
                  style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                />
                <svg className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter - Modern Pills */}
      <section className="py-8 border-b border-white/10 sticky top-20 z-30 bg-[#0a0d14]/95 backdrop-blur-xl">
        <div className="container-custom px-4 md:px-6">
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#D4AF37] text-[#0a0d14] shadow-lg shadow-[#D4AF37]/40 scale-105'
                    : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/15'
                }`}
                style={{ fontFamily: 'Vazirmatn, sans-serif' }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article - Large Card */}
      {featuredArticle && selectedCategory === 'همه' && !searchQuery && (
        <section className="py-16 px-4 md:px-6">
          <div className="container-custom">
            <div className="mb-6">
              <span className="text-[#D4AF37] text-sm font-bold uppercase tracking-wider" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                ⭐ مقاله ویژه
              </span>
            </div>
            <Link
              href={`/blog/${featuredArticle.id}`}
              className="group relative block bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border-2 border-white/20 overflow-hidden hover:border-[#D4AF37]/60 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/20"
            >
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative h-80 md:h-auto aspect-square md:aspect-auto">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent md:from-transparent md:via-transparent md:to-black/70"></div>
                </div>

                {/* Content Side */}
                <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center relative z-10">
                  <div className="flex items-center gap-4 mb-6 flex-wrap">
                    <span className="px-4 py-2 bg-[#D4AF37] text-[#0a0d14] text-xs font-bold rounded-full">
                      {featuredArticle.category}
                    </span>
                    <span className="text-white/50 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      {new Date(featuredArticle.date).toLocaleDateString('fa-IR')}
                    </span>
                    <span className="text-white/50 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      {featuredArticle.readTime}
                    </span>
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 group-hover:text-[#D4AF37] transition-colors leading-tight" style={{ fontFamily: 'Vazirmatn, serif' }}>
                    {featuredArticle.title}
                  </h2>
                  
                  <p className="text-white/70 text-base md:text-lg leading-relaxed mb-8 line-clamp-3" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                    {featuredArticle.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/50 rounded-xl transition-all duration-300 group-hover:gap-4" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                    <span className="text-[#D4AF37] font-semibold text-sm">ادامه مطلب</span>
                    <svg className="w-4 h-4 text-[#D4AF37] transform group-hover:-translate-x-2 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>
      )}

      {/* Articles Grid - Modern Cards */}
      <section className="py-12 px-4 md:px-6">
        <div className="container-custom">
          {regularArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {regularArticles.map((article, index) => (
                <Link
                  key={article.id}
                  href={`/blog/${article.id}`}
                  className="group relative bg-gradient-to-br from-white/[0.06] to-white/[0.02] backdrop-blur-xl rounded-2xl border-2 border-white/15 overflow-hidden hover:border-[#D4AF37]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2"
                >
                  {/* Article Image */}
                  <div className="relative aspect-[16/10] overflow-hidden m-5 mb-0 rounded-xl border border-white/20">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 rounded-xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent rounded-xl"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="px-3 py-1.5 bg-[#D4AF37] text-[#0a0d14] text-xs font-bold rounded-lg shadow-lg">
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="px-6 pb-6 pt-5 space-y-4">
                    {/* Meta Info */}
                    <div className="flex items-center gap-3 text-white/50 text-xs flex-wrap" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      <div className="flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>{new Date(article.date).toLocaleDateString('fa-IR')}</span>
                      </div>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    
                    {/* Title */}
                    <h2 className="text-xl md:text-2xl font-bold text-white group-hover:text-[#D4AF37] transition-colors leading-tight line-clamp-2" style={{ fontFamily: 'Vazirmatn, serif' }}>
                      {article.title}
                    </h2>
                    
                    {/* Excerpt */}
                    <p className="text-white/60 text-sm leading-relaxed line-clamp-2" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      {article.excerpt}
                    </p>

                    {/* Author & Read More */}
                    <div className="flex items-center justify-between pt-3">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B6F47] flex items-center justify-center text-xs font-bold">
                          D
                        </div>
                        <span className="text-white/70 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                          تیم D N Coffee
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37]/10 hover:bg-[#D4AF37]/20 border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/50 rounded-lg transition-all duration-300 group-hover:gap-3" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                        <span className="text-[#D4AF37] text-sm font-semibold">بیشتر</span>
                        <svg className="w-4 h-4 text-[#D4AF37] transform group-hover:-translate-x-1 transition-transform rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 via-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:via-[#D4AF37]/5 group-hover:to-[#D4AF37]/10 transition-all duration-500 pointer-events-none rounded-2xl"></div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="inline-block p-6 bg-white/5 rounded-full mb-6">
                <svg className="w-16 h-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-white/50 text-lg" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                {searchQuery ? 'نتیجه‌ای یافت نشد' : 'مقاله‌ای در این دسته‌بندی یافت نشد'}
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Extra spacing for mobile */}
      <div className="h-20 md:h-0"></div>

      <BottomNav />
    </div>
  );
}
