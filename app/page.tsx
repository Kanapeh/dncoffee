'use client';

import Image from 'next/image';
import Header from './components/Header';
import BottomNav from './components/BottomNav';

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e] pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-20 bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-sm text-[#D4AF37] font-medium">
              <span>🇸🇪</span>
              <span>Roasted in Sweden</span>
              <span className="text-white/30">•</span>
              <span>☕</span>
              <span>Brewed in Tehran</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Premium Coffee
              <br />
              <span className="text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>Crafted with Passion</span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Experience the perfect blend of Swedish roasting excellence and Persian brewing artistry.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <a 
                href="#menu" 
                className="px-8 py-3 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] text-white rounded-lg font-semibold hover:from-[#D4AF37] hover:to-[#8B6F47] transition-all duration-300 shadow-lg"
              >
                Explore Menu
              </a>
              <a 
                href="#about" 
                className="px-8 py-3 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                Our Story
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
                  alt="Premium Coffee Beans"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#8B6F47] rounded-full blur-2xl opacity-30"></div>
            </div>

            {/* Right - Content */}
            <div className="space-y-6 px-4 lg:px-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  Our <span className="text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>Story</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] mb-8"></div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl border-l-4 border-[#8B6F47]" style={{ padding: '40px 36px' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">🇸🇪</span>
                    <h3 className="text-xl font-bold text-white">Roasted in Sweden</h3>
                  </div>
                  <p className="text-white/80 leading-relaxed" style={{ paddingLeft: '12px', paddingRight: '8px' }}>
                    Our premium coffee beans are carefully roasted in Sweden using traditional Scandinavian techniques. This meticulous process brings out unique flavors and aromas, creating the perfect foundation for exceptional coffee.
                  </p>
                </div>

                <div className="bg-gradient-to-r from-[#8B6F47]/20 to-[#D4AF37]/20 backdrop-blur-sm rounded-2xl border-l-4 border-[#D4AF37] text-white" style={{ padding: '40px 36px' }}>
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-3xl">☕</span>
                    <h3 className="text-xl font-bold">Brewed in Tehran</h3>
                  </div>
                  <p className="text-white/90 leading-relaxed" style={{ paddingLeft: '12px', paddingRight: '8px' }}>
                    Every cup is expertly brewed in our Tehran location, where our skilled baristas combine Swedish-roasted beans with precision brewing methods. From cold brew to drip coffee, each preparation is crafted with care and passion.
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Our <span className="text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>Menu</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Discover our carefully crafted coffee selection
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Left Column - Menu Items */}
            <div className="space-y-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 shadow-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 pb-4 border-b border-white/10" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                  Cold Brew
                </h3>
                
                <div className="space-y-5">
                  {[
                    { name: 'Classic Cold Brew', price: 250000, description: 'Smooth and refreshing' },
                    { name: 'Cold Brew Latte', price: 330000, description: 'Creamy and balanced' },
                    { name: 'Cold Foam Cold Brew', price: 330000, description: 'Rich with velvety foam' },
                    { name: 'Cold Brew Mocha', price: 330000, description: 'Chocolatey and indulgent' },
                    { name: 'Cold Brew Caramel Latte', price: 330000, description: 'Sweet caramel delight' },
                  ].map((item, itemIndex) => {
                    const formatPrice = (price: number) => {
                      return new Intl.NumberFormat('fa-IR').format(price);
                    };
                    return (
                      <div key={itemIndex} className="group">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <div className="flex-1">
                            <h4 className="text-lg md:text-xl font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                              {item.name}
                            </h4>
                            <p className="text-white/60 text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                              {item.description}
                            </p>
                          </div>
                          <div className="text-right">
                            <span className="text-xl md:text-2xl font-bold text-[#D4AF37]" style={{ fontFamily: 'var(--font-playfair), serif' }}>
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
                <p className="text-white/90 text-center text-sm md:text-base" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  <span className="text-[#D4AF37] font-semibold">✨</span> تمامی شیر ها صدرصد گیاهی هستند
                </p>
              </div>
            </div>

            {/* Right Column - Menu Image */}
            <div className="lg:sticky lg:top-24 h-fit">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <div className="relative w-full" style={{ paddingBottom: '133%' }}>
                  <Image
                    src="/images/menu.jpeg"
                    alt="D/N Coffee Menu"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The <span className="text-[#D4AF37]">Art</span> of Coffee
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              From bean to cup, every step is carefully crafted to perfection
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '🌱',
                title: 'Sourcing',
                description: 'We select the finest coffee beans from around the world, ensuring quality and sustainability.'
              },
              {
                icon: '🔥',
                title: 'Roasting',
                description: 'In Sweden, our master roasters use traditional techniques to bring out unique flavors and aromas.'
              },
              {
                icon: '☕',
                title: 'Brewing',
                description: 'In Tehran, our expert baristas brew each cup with precision, from cold brew to drip coffee.'
              },
            ].map((step, index) => (
              <div key={index} className="text-center p-8 bg-white/5 rounded-2xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                <div className="text-6xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-white/80 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e]">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              What Our <span className="text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>Customers Say</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              Real experiences from coffee lovers who trust our quality
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah Johnson',
                role: 'Coffee Enthusiast',
                image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80',
                rating: 5,
                text: 'The best coffee I\'ve ever tasted! The Swedish roasting brings out such unique flavors. Every morning starts perfectly with D/N Coffee.',
                location: 'Tehran, Iran'
              },
              {
                name: 'Marcus Andersson',
                role: 'Barista',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
                rating: 5,
                text: 'As a professional barista, I can truly appreciate the quality. The cold brew is exceptional - smooth, rich, and perfectly balanced.',
                location: 'Stockholm, Sweden'
              },
              {
                name: 'Layla Mohammadi',
                role: 'Daily Coffee Drinker',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&q=80',
                rating: 5,
                text: 'I love how fresh every cup tastes. The combination of Swedish roasting and Tehran brewing creates something truly special. Highly recommended!',
                location: 'Tehran, Iran'
              },
              {
                name: 'David Chen',
                role: 'Coffee Blogger',
                image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
                rating: 5,
                text: 'I\'ve tried coffee from all over the world, and D/N Coffee stands out. The attention to detail in both roasting and brewing is remarkable.',
                location: 'New York, USA'
              },
              {
                name: 'Emma Wilson',
                role: 'Café Owner',
                image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
                rating: 5,
                text: 'We serve D/N Coffee in our café and our customers can\'t get enough. The drip coffee is particularly popular - smooth and aromatic.',
                location: 'London, UK'
              },
              {
                name: 'Amir Rezaei',
                role: 'Coffee Connoisseur',
                image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
                rating: 5,
                text: 'The perfect blend of tradition and quality. Every sip tells a story of craftsmanship. This is what premium coffee should taste like.',
                location: 'Tehran, Iran'
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
                <p className="text-white/90 leading-relaxed mb-6 text-base" style={{ paddingLeft: '8px', paddingRight: '8px' }}>
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
                    <h4 className="font-bold text-white mb-1">{testimonial.name}</h4>
                    <p className="text-sm text-[#D4AF37] font-medium mb-1">{testimonial.role}</p>
                    <p className="text-xs text-white/60">{testimonial.location}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Coffee <span className="text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>Gallery</span>
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              A glimpse into our coffee journey
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
                  alt={`Coffee ${index + 1}`}
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
                    alt="D/N COFFEE Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>
              
              <h3 className="text-lg md:text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif', marginBottom: '20px' }}>
                D/N COFFEE
              </h3>
              
              <p className="text-white/70 leading-relaxed text-xs md:text-sm" style={{ fontFamily: 'var(--font-inter), sans-serif', marginBottom: '32px' }}>
                Premium coffee experience. Roasted in Sweden, brewed in Tehran.
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
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Quick Links
                <div className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                <li>
                  <a 
                    href="#home" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#about" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Menu</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#process" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Process</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Coffee Types */}
            <div>
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Coffee Types
                <div className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-2 md:space-y-3 mt-4 md:mt-6">
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Cold Brew</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Drip Coffee</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Espresso</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="#menu" 
                    className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-all duration-300"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#8B6F47] opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    <span>Specialty</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="col-span-2 md:col-span-1">
              <h4 className="font-bold mb-4 md:mb-6 text-base md:text-lg relative inline-block" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                Contact
                <div className="absolute -bottom-2 left-0 w-8 md:w-12 h-0.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37]"></div>
              </h4>
              <ul className="space-y-3 md:space-y-4 mt-4 md:mt-6">
                <li className="flex items-start gap-3 text-white/70">
                  <span className="text-[#8B6F47] mt-1">📍</span>
                  <span>Tehran, Iran</span>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <span className="text-[#8B6F47] mt-1">📞</span>
                  <a href="tel:+989027380949" className="hover:text-white transition-colors">+98 902 738 0949</a>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <span className="text-[#8B6F47] mt-1">💬</span>
                  <a href="https://wa.me/989027380949" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp Business</a>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <span className="text-[#8B6F47] mt-1">📧</span>
                  <a href="mailto:info@dncoffee.cafe" className="hover:text-white transition-colors">info@dncoffee.cafe</a>
                </li>
                <li className="flex items-start gap-3 text-white/70">
                  <span className="text-[#8B6F47] mt-1">🌐</span>
                  <a href="https://dncoffee.cafe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">dncoffee.cafe</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 md:pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 md:gap-4">
              <p className="text-white/50 text-xs md:text-sm text-center md:text-left" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                ©2024 D/N Coffee. All Rights Reserved.
              </p>
              <div className="flex items-center gap-2 text-white/50 text-xs md:text-sm">
                <span className="text-[#8B6F47]">🇸🇪</span>
                <span>Roasted in Sweden</span>
                <span className="text-white/30">•</span>
                <span className="text-[#8B6F47]">☕</span>
                <span>Brewed in Tehran</span>
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
