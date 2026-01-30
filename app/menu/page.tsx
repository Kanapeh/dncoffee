'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  badge?: string;
}

interface CartItem extends MenuItem {
  quantity: number;
}

export default function MenuPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const menuItems: MenuItem[] = [
    {
      id: 'cold-brew-classic',
      name: 'کلد برو کلاسیک',
      description: 'نرم و خنک، طعم اصیل قهوه کلد برو با عطر و بوی منحصر به فرد',
      price: 250000,
      image: '/images/Coffee dn cup.JPG',
      badge: 'محبوب',
    },
    {
      id: 'cold-brew-latte',
      name: 'کلد برو لاته',
      description: 'خامه‌ای و متعادل، ترکیب بی‌نظیر کلد برو با شیر گیاهی',
      price: 330000,
      image: '/images/Coffee dn 1.JPG',
    },
    {
      id: 'cold-brew-foam',
      name: 'کلد برو فوم',
      description: 'غنی با فوم مخملی، تجربه‌ای لذیذ و خامه‌ای',
      price: 330000,
      image: '/images/Coffee dn bottlle.JPG',
    },
    {
      id: 'cold-brew-mocha',
      name: 'کلد برو موکا',
      description: 'شکلاتی و لذیذ، ترکیب قهوه کلد برو با شکلات مرغوب',
      price: 330000,
      image: '/images/Coffee dn pocket.JPG',
      badge: 'جدید',
    },
    {
      id: 'cold-brew-caramel-latte',
      name: 'کلد برو کارامل لاته',
      description: 'لذت کارامل شیرین، طعمی منحصر به فرد و دلنشین',
      price: 330000,
      image: '/images/Coffee dn pocket1.JPG',
    },
    {
      id: 'cold-brew-vanilla',
      name: 'کلد برو وانیل',
      description: 'طعم وانیل طبیعی، ترکیبی نرم و خوش‌عطر',
      price: 350000,
      image: '/images/photo-output 4.JPEG',
    },
    {
      id: 'cold-brew-hazelnut',
      name: 'کلد برو فندقی',
      description: 'عطر فندق تازه، طعمی غنی و خوشمزه',
      price: 350000,
      image: '/images/photo-output 5.JPEG',
    },
    {
      id: 'cold-brew-iced',
      name: 'کلد برو یخی',
      description: 'خنک و تازه، ایده‌آل برای روزهای گرم',
      price: 280000,
      image: '/images/Coffee dn cup.JPG',
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fa-IR').format(price);
  };

  const addToCart = (item: MenuItem) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (itemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity } : item
      )
    );
  };

  const removeFromCart = (itemId: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const sendOrderToWhatsApp = () => {
    if (cart.length === 0) return;

    const phoneNumber = '989027380949';
    let message = '🍽️ *سفارش جدید از DN Coffee*\n\n';
    message += '📋 *جزئیات سفارش:*\n\n';

    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*\n`;
      message += `   تعداد: ${item.quantity}\n`;
      message += `   قیمت واحد: ${formatPrice(item.price)} تومان\n`;
      message += `   مجموع: ${formatPrice(item.price * item.quantity)} تومان\n\n`;
    });

    message += `━━━━━━━━━━━━━━━━\n`;
    message += `💰 *مجموع کل: ${formatPrice(getTotalPrice())} تومان*\n`;
    message += `📦 *تعداد کل آیتم‌ها: ${getTotalItems()}*\n\n`;
    message += `✨ تمامی شیرها صددرصد گیاهی هستند`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0f0f0f] pb-20 md:pb-0">
      <Header />

      {/* Hero Section - Enhanced */}
      <section className="relative pt-28 md:pt-32 pb-12 md:pb-16 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-b from-[#8B6F47]/5 via-transparent to-transparent"></div>
          <div className="absolute top-20 right-20 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-[#8B6F47]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#D4AF37]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#D4AF37]/10 backdrop-blur-sm border border-[#D4AF37]/20 rounded-full text-xs text-[#D4AF37] font-medium mb-6" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              <span>✨</span>
              <span>تمامی شیرها صددرصد گیاهی هستند</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Vazirmatn, serif' }}>
              <span className="block mb-2">منوی</span>
              <span className="text-[#D4AF37] block">کلد برو</span>
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
              مجموعه قهوه‌های کلد برو منتخب ما را کشف کنید و طعم بی‌نظیر را تجربه کنید
            </p>
          </div>
        </div>
      </section>

      {/* Menu Items Section - Modern Design */}
      <section className="section-padding -mt-8">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {menuItems.map((item, index) => {
              const cartItem = cart.find((ci) => ci.id === item.id);
              const quantity = cartItem?.quantity || 0;

              return (
                <div
                  key={item.id}
                  className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden shadow-2xl hover:shadow-[#D4AF37]/20 transition-all duration-500 hover:scale-[1.02] hover:border-[#D4AF37]/30"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Badge */}
                  {item.badge && (
                    <div className="absolute top-4 right-4 z-20 px-3 py-1 bg-gradient-to-r from-[#D4AF37] to-[#8B6F47] text-white text-xs font-bold rounded-full shadow-lg" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                      {item.badge}
                    </div>
                  )}

                  {/* Image Container */}
                  <div className="relative w-full h-56 md:h-64 overflow-hidden bg-gradient-to-br from-[#8B6F47]/20 to-[#D4AF37]/20">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 transition-colors duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    {/* Title & Description */}
                    <div className="mb-4">
                      <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#D4AF37] transition-colors duration-300" style={{ fontFamily: 'Vazirmatn, serif' }}>
                        {item.name}
                      </h3>
                      <p className="text-white/60 text-sm leading-relaxed line-clamp-2" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                        {item.description}
                      </p>
                    </div>

                    {/* Price */}
                    <div className="flex items-center justify-between mb-5 pb-5 border-b border-white/10">
                      <div>
                        <span className="text-2xl md:text-3xl font-bold text-[#D4AF37]" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                          {formatPrice(item.price)}
                        </span>
                        <span className="text-sm text-white/50 mr-1 font-normal" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                          تومان
                        </span>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    {quantity > 0 ? (
                      <div className="space-y-3">
                        {/* Quantity Controls */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-1.5 border border-white/10">
                            <button
                              onClick={() => updateQuantity(item.id, quantity - 1)}
                              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-all duration-200 hover:scale-110 active:scale-95"
                              style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                            >
                              −
                            </button>
                            <span className="w-14 text-center text-white font-bold text-lg" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                              {quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, quantity + 1)}
                              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold transition-all duration-200 hover:scale-110 active:scale-95"
                              style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="px-4 py-2 text-sm text-red-400 hover:text-red-300 transition-colors font-medium"
                            style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                          >
                            حذف
                          </button>
                        </div>
                        {/* Subtotal */}
                        <div className="text-center pt-2 border-t border-white/10">
                          <span className="text-white/70 text-xs" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                            مجموع:
                          </span>
                          <span className="text-[#D4AF37] font-bold text-sm mr-2" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                            {formatPrice(item.price * quantity)} تومان
                          </span>
                        </div>
                      </div>
                    ) : (
                      <button
                        onClick={() => addToCart(item)}
                        className="w-full py-3.5 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] text-white rounded-xl font-bold text-sm hover:from-[#D4AF37] hover:to-[#8B6F47] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                        style={{ fontFamily: 'Vazirmatn, sans-serif' }}
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <span>افزودن به سبد</span>
                      </button>
                    )}
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#D4AF37]/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Floating Cart - Enhanced */}
      {cart.length > 0 && (
        <div className="fixed bottom-24 md:bottom-8 left-1/2 -translate-x-1/2 z-40 md:left-auto md:right-8 md:translate-x-0 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] backdrop-blur-2xl rounded-3xl shadow-2xl border border-[#D4AF37]/30 p-5 min-w-[300px] md:min-w-[360px]">
            {/* Header */}
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8B6F47] to-[#D4AF37] flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🛒</span>
                </div>
                <div>
                  <p className="text-white font-bold text-base" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                    سبد خرید شما
                  </p>
                  <p className="text-white/60 text-xs" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                    {getTotalItems()} آیتم
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCart([])}
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/10 hover:bg-white/20 text-white/70 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-4">
              <span className="text-white/70 text-sm" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                مجموع کل:
              </span>
              <div className="text-left">
                <p className="text-white font-bold text-2xl" style={{ fontFamily: 'Vazirmatn, sans-serif' }} dir="ltr">
                  {formatPrice(getTotalPrice())}
                </p>
                <p className="text-white/60 text-xs" style={{ fontFamily: 'Vazirmatn, sans-serif' }}>
                  تومان
                </p>
              </div>
            </div>

            {/* Order Button */}
            <button
              onClick={sendOrderToWhatsApp}
              className="w-full py-4 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] text-white rounded-xl font-bold text-sm hover:from-[#D4AF37] hover:to-[#8B6F47] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              style={{ fontFamily: 'Vazirmatn, sans-serif' }}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>سفارش از طریق واتساپ</span>
            </button>
          </div>
        </div>
      )}

      <BottomNav />
    </div>
  );
}
