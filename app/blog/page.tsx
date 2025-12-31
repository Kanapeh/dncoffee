'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function BlogPage() {
  const articles = [
    {
      id: 'specialty-coffee-guide',
      title: 'انواع قهوه تخصصی و قهوه دمی: راهنمای کامل',
      excerpt: 'آشنایی کامل با انواع قهوه تخصصی و قهوه دمی، ویژگی‌های منحصر به فرد هر نوع و تفاوت‌های آن‌ها',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-11-25',
      category: 'مقدمه بر قهوه'
    },
    {
      id: 'brewing-methods',
      title: 'روش‌های دم‌آوری قهوه تخصصی: از کمکس تا وی 60',
      excerpt: 'آموزش کامل روش‌های مختلف دم‌آوری قهوه تخصصی با ابزارهای نسل سوم و نکات مهم برای دستیابی به بهترین طعم',
      image: '/images/Coffee dn cup.JPG',
      date: '2025-11-26',
      category: 'دم آوری قهوه'
    },
    {
      id: 'coffee-origins',
      title: 'خاستگاه‌های قهوه تخصصی: از اتیوپی تا کلمبیا',
      excerpt: 'بررسی کامل خاستگاه‌های مختلف قهوه تخصصی و ویژگی‌های منحصر به فرد هر منطقه در تولید قهوه با کیفیت',
      image: '/images/Coffee dn bottlle.JPG',
      date: '2025-11-27',
      category: 'درک قهوه'
    },
    {
      id: 'sustainability',
      title: 'پایداری در صنعت قهوه',
      excerpt: 'نقش کشاورزان و برشته‌کاران در حفظ پایداری محیط زیست و تولید قهوه با کیفیت',
      image: '/images/Coffee dn pocket.JPG',
      date: '2025-11-28',
      category: 'پایداری'
    },
    {
      id: 'coffee-roasting',
      title: 'رست قهوه: از روشن تا تیره',
      excerpt: 'آشنایی با انواع رست قهوه و تأثیر آن بر طعم، بادی و ویژگی‌های قهوه تخصصی',
      image: '/images/Coffee dn cup.JPG',
      date: '2025-11-29',
      category: 'درک قهوه'
    },
    {
      id: 'coffee-flavors',
      title: 'طعم‌های قهوه: از میوه‌ای تا شکلاتی',
      excerpt: 'بررسی طعم‌های مختلف قهوه تخصصی و نحوه تشخیص و لذت بردن از هر طعم',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-11-30',
      category: 'درک قهوه'
    },
    {
      id: 'coffee-storage',
      title: 'نگهداری قهوه: حفظ تازگی و طعم',
      excerpt: 'راهنمای کامل نگهداری صحیح قهوه تخصصی برای حفظ تازگی، عطر و طعم آن',
      image: '/images/Coffee dn bottlle.JPG',
      date: '2025-12-01',
      category: 'مقدمه بر قهوه'
    },
    {
      id: 'coffee-processing',
      title: 'فرآوری قهوه: شسته، طبیعی و عسلی',
      excerpt: 'آشنایی با روش‌های مختلف فرآوری قهوه و تأثیر هر روش بر طعم نهایی قهوه',
      image: '/images/Coffee dn pocket.JPG',
      date: '2025-12-02',
      category: 'درک قهوه'
    },
    {
      id: 'arabica-vs-robusta',
      title: 'تفاوت عربیکا و روبوستا',
      excerpt: 'مقایسه کامل بین قهوه عربیکا و روبوستا از نظر طعم، کافئین و کاربرد',
      image: '/images/Coffee dn cup.JPG',
      date: '2025-12-03',
      category: 'مقدمه بر قهوه'
    },
    {
      id: 'cold-brew-coffee',
      title: 'قهوه کلد برو: روش دم‌آوری سرد',
      excerpt: 'آموزش کامل تهیه قهوه کلد برو و تفاوت آن با روش‌های دیگر دم‌آوری',
      image: '/images/Coffee dn bottlle.JPG',
      date: '2025-12-04',
      category: 'دم آوری قهوه'
    },
    {
      id: 'coffee-grinding',
      title: 'آسیاب قهوه: درجه آسیاب و تأثیر آن',
      excerpt: 'راهنمای انتخاب درجه آسیاب مناسب برای هر روش دم‌آوری و تأثیر آن بر طعم',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-05',
      category: 'دم آوری قهوه'
    },
    {
      id: 'colombia-gesha-spirits',
      title: 'کلمبیا گیشا اسپیریتس: طعمی خاص از عطر گل‌ها و پرتقال',
      excerpt: 'بررسی کامل قهوه کلمبیا گیشا اسپیریتس، یکی از نادرترین و گران‌قیمت‌ترین قهوه‌های تخصصی جهان با طعم‌های منحصر به فرد',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-06',
      category: 'درک قهوه'
    },
    {
      id: 'ethiopia-goro-bedessa',
      title: 'اتیوپی گورو بدسا: طعم اصیل و پیچیده از گوجی',
      excerpt: 'بررسی کامل قهوه اتیوپی گورو بدسا از منطقه گوجی، یکی از برترین قهوه‌های تخصصی اتیوپی با طعم‌های میوه‌ای و گل‌دار',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-07',
      category: 'درک قهوه'
    },
    {
      id: 'ethiopia-guji-alaka',
      title: 'اتیوپی گوجی آلاکا: طعم مرکباتی و شیرین از گوجی',
      excerpt: 'بررسی کامل قهوه اتیوپی گوجی آلاکا با فرآوری شسته، مناسب برای فرنچ پرس با طعم‌های مرکباتی و نت‌های شیرین',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-08',
      category: 'درک قهوه'
    },
    {
      id: 'colombia-juicy-blend',
      title: 'کلمبیا جوسی بلند: طعم میوه‌ای و خامه‌ای از لاس پالماس',
      excerpt: 'بررسی کامل قهوه کلمبیا جوسی بلند از مزرعه لاس پالماس، ترکیبی منحصر به فرد با طعم‌های توت فرنگی، انگور قرمز و بلوبری',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-09',
      category: 'درک قهوه'
    },
    {
      id: 'ethiopia-kochere',
      title: 'اتیوپی کچره: طعم استوایی و سرزنده از یرگاچف',
      excerpt: 'بررسی کامل قهوه اتیوپی کچره از منطقه یرگاچف، با طعم‌های آناناس، پشن فروت، لِمون گرس و میوه ستاره‌ای',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-10',
      category: 'درک قهوه'
    },
    {
      id: 'colombia-condor-decaf',
      title: 'کلمبیا کُندور: قهوه دی کف با طعم شکلات و دارچین',
      excerpt: 'بررسی کامل قهوه کلمبیا کُندور بدون کافئین، با طعم‌های شکلات، چای سبز، عسل و دارچین و کافئین‌زدایی به روش اتیل استات',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-11',
      category: 'درک قهوه'
    },
    {
      id: 'colombia-bourbon-koji',
      title: 'کلمبیا بوربن کوجی: طعم استوایی و گل‌دار از ال ورگل',
      excerpt: 'بررسی کامل قهوه کلمبیا بوربن کوجی از مزرعه ال ورگل، با فرآوری کوجی سوپرنچرال و طعم‌های گلی و میوه‌ای استوایی',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-12',
      category: 'درک قهوه'
    },
    {
      id: 'nicaragua-finca-bethania',
      title: 'نیکاراگوئه فینکا بتانیا: طعم شکلاتی و آجیلی از سگُویا',
      excerpt: 'بررسی کامل قهوه نیکاراگوئه فینکا بتانیا از مزرعه سگُویا، با طعم‌های انگور، شکلات شیری و فندق، مناسب برای اسپرسو',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-13',
      category: 'درک قهوه'
    },
    {
      id: 'ethiopia-yirgacheffe-haru',
      title: 'اتیوپی یرگاچف هارو: طعم گل‌دار و مرکباتی از یرگاچف',
      excerpt: 'بررسی کامل قهوه اتیوپی یرگاچف هارو، با طعم‌های گلی، گیلاس و لیمو همراه با اسیدیته شفاف و بادی آبمیوه‌ای',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-14',
      category: 'درک قهوه'
    },
    {
      id: 'ecuador-hacienda-santa-gertrudis',
      title: 'اکوادور هاسیندا سانتا گرترودیس: طعم میوه‌ای و شیرین از رشته کوه اندس',
      excerpt: 'بررسی کامل قهوه اکوادور هاسیندا سانتا گرترودیس با فرآوری تخمیر لاکتیکی، طعم‌های میوه‌های هسته‌دار و انگور قرمز',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-15',
      category: 'درک قهوه'
    },
    {
      id: 'bolivia-los-rodriguez',
      title: 'بولیوی لاس رودریگز: طعم میوه‌ای و خامه‌ای با فرآوری کوکو نچرال',
      excerpt: 'بررسی کامل قهوه بولیوی لاس رودریگز با فرآوری کوکو نچرال، طعم‌های توت‌فرنگی، انگور رسیده و گیلاس',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-16',
      category: 'درک قهوه'
    },
    {
      id: 'colombia-san-adolfo',
      title: 'کلمبیا سَن آدولفو: طعم استوایی و گل‌دار با تخمیر پشن فروت',
      excerpt: 'بررسی کامل قهوه کلمبیا سَن آدولفو با فرآوری تخمیر میوه‌ای با پشن فروت، طعم‌های میوه‌های استوایی و زرد',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-17',
      category: 'درک قهوه'
    },
    {
      id: 'colombia-manantiales-del-frontio',
      title: 'کلمبیا مانانتیالس دل فرونتیو: طعم میوه‌ای و گل‌دار با تخمیر دوگانه',
      excerpt: 'بررسی کامل قهوه کلمبیا مانانتیالس دل فرونتیو با فرآوری تخمیر دوگانه بی‌هوازی، طعم‌های شکوفه‌های پرتقال، آلو و انگور',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-18',
      category: 'درک قهوه'
    },
    {
      id: 'colombia-valle-del-cauca',
      title: 'کلمبیا والی دکوکا: طعم پیچیده و سنگین با تخمیر طبیعی هوازی',
      excerpt: 'بررسی کامل قهوه کلمبیا والی دکوکا با فرآوری تخمیر طبیعی هوازی، طعم‌های انگور قرمز، کره بادام زمینی و سیروپ افرا',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-19',
      category: 'درک قهوه'
    },
    {
      id: 'ethiopia-adado',
      title: 'اتیوپی آدادو: طعم میوه‌ای و گل‌دار با فرآوری طبیعی',
      excerpt: 'بررسی کامل قهوه اتیوپی آدادو با فرآوری طبیعی، طعم‌های میوه‌ای و گل‌دار با شیرینی محسوس و نت‌های گل یاس',
      image: '/images/How to Choose the Best Central American Coffee Beans for Your Palate.jpeg',
      date: '2025-12-25',
      category: 'درک قهوه'
    }
  ];

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e] pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-20 md:pt-32 pb-12 md:pb-20 overflow-hidden">
        <div className="container-custom relative z-10 px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-xs md:text-base mb-6 md:mb-8" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <span className="text-white">بلاگ</span>
              <span>/</span>
              <Link href="/" className="hover:text-white transition-colors">خانه</Link>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              <span className="text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>بلاگ</span> قهوه
            </h1>
            <p className="text-white/70 text-base md:text-lg lg:text-xl max-w-2xl mx-auto px-4 leading-relaxed" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              کشف دنیای قهوه تخصصی از طریق مقالات و راهنماهای ما
            </p>
            
            {/* Decorative Element */}
            <div className="mt-8 md:mt-12 flex items-center justify-center gap-2">
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4AF37]"></div>
              <div className="w-2 h-2 rounded-full bg-[#D4AF37]"></div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4AF37]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-96 md:pb-24 px-12 md:px-16 lg:px-18">
        <div className="container-custom">
          {/* Section Header */}
          <div className="mb-8 md:mb-12 text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-3" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              مقالات <span className="text-[#D4AF37]">ما</span>
            </h2>
            <p className="text-white/60 text-sm md:text-base max-w-xl mx-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              مجموعه‌ای از مقالات تخصصی درباره قهوه
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/blog/${article.id}`}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#D4AF37]/20 hover:border-[#D4AF37]/50 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Article Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-[#D4AF37]/95 text-white text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm">
                      {article.category}
                    </span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-[#D4AF37]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Article Content */}
                <div className="px-10 py-4 md:px-7 md:py-10 lg:px-18 lg:py-6">
                  <div className="flex items-center gap-8 text-white/50 text-[10px] md:text-xs mb-3 md:mb-4 px-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{new Date(article.date).toLocaleDateString('fa-IR')}</span>
                  </div>
                  
                  <h2 className="text-base md:text-lg lg:text-xl font-bold text-white mb-3 md:mb-4 group-hover:text-[#D4AF37] transition-colors duration-300 leading-snug px-1" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                    {article.title}
                  </h2>
                  
                  <p className="text-white/70 text-xs md:text-sm leading-relaxed mb-4 md:mb-5 line-clamp-3 px-1" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                    {article.excerpt}
                  </p>

                  <div className="flex items-center gap-5 text-[#D4AF37] text-xs md:text-sm font-semibold group-hover:gap-3 transition-all duration-300 px-1">
                    <span>ادامه مطلب</span>
                    <svg className="w-5 h-6 md:w-4 md:h-8 transform group-hover:-translate-x-1 transition-transform duration-300 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Extra spacing for mobile scroll */}
      <div className="h-40 md:h-0"></div>

      <BottomNav />
    </div>
  );
}
