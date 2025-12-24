'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import { useCart } from '../context/CartContext';

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity, getTotalPrice } = useCart();
  const [promoCode, setPromoCode] = useState('');
  const [appliedPromo, setAppliedPromo] = useState(false);

  const subtotal = getTotalPrice();
  const deliveryFee = 1.00;
  const discount = appliedPromo ? subtotal * 0.1 : 0;
  const total = subtotal + deliveryFee - discount;

  const handleApplyPromo = () => {
    if (promoCode.trim()) {
      setAppliedPromo(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1E8] pb-20 md:pb-0">
      <Header />
      
      <div className="container-custom pt-32 pb-16">
        {/* Back Button */}
        <div className="mb-8">
          <Link href="/#menu" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#8B6F47] transition-colors group">
            <svg className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            <span className="font-medium" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Continue Shopping</span>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>
            <span className="gradient-text">Shopping</span> Cart
          </h1>
          <p className="text-gray-600 text-lg" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Review your order before checkout</p>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-9xl mb-6 animate-float">🛒</div>
            <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: 'var(--font-playfair), serif' }}>Your Cart is Empty</h2>
            <p className="text-gray-600 mb-8 text-lg" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Looks like you haven't added anything yet</p>
            <Link
              href="/#menu"
              className="btn-primary inline-block"
            >
              Explore Menu
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className="card p-6 hover-lift animate-scaleIn"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex gap-6">
                    <div className="w-32 h-32 bg-gradient-to-br from-[#F5F1E8] via-[#D4C4A8] to-[#8B6F47] rounded-2xl flex items-center justify-center flex-shrink-0 border-2 border-[#8B6F47]/20">
                      <span className="text-6xl">☕</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-2xl mb-2" style={{ fontFamily: 'var(--font-playfair), serif' }}>{item.name}</h3>
                          <p className="text-3xl font-bold gradient-text" style={{ fontFamily: 'var(--font-playfair), serif' }}>${item.price.toFixed(2)}</p>
                        </div>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 hover:text-red-600 p-2 hover:bg-red-50 rounded-full transition-colors"
                        >
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-14 h-14 rounded-full border-2 border-[#8B6F47]/30 flex items-center justify-center hover:border-[#8B6F47] hover:bg-[#8B6F47]/10 transition-colors font-bold text-xl"
                        >
                          −
                        </button>
                        <span className="w-20 text-center font-bold text-2xl" style={{ fontFamily: 'var(--font-playfair), serif' }}>{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-14 h-14 rounded-full border-2 border-[#8B6F47]/30 flex items-center justify-center hover:border-[#8B6F47] hover:bg-[#8B6F47]/10 transition-colors font-bold text-xl"
                        >
                          +
                        </button>
                        <span className="ml-auto text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              
              <Link
                href="/#menu"
                className="block text-center py-6 border-2 border-[#8B6F47]/30 text-[#8B6F47] rounded-2xl font-semibold hover:bg-[#8B6F47]/10 transition-colors card"
                style={{ fontFamily: 'var(--font-inter), sans-serif' }}
              >
                + Add More Items
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="card p-8 sticky top-32">
                <h2 className="text-2xl font-bold mb-6" style={{ fontFamily: 'var(--font-playfair), serif' }}>Order Summary</h2>
                
                {/* Promo Code */}
                <div className="mb-6">
                  <label className="block text-sm font-semibold mb-3 text-gray-600" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Promo Code</label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      className="flex-1 bg-gray-50 border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#8B6F47] transition-colors"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    />
                    <button
                      onClick={handleApplyPromo}
                      className="px-6 py-3 bg-gradient-to-r from-[#8B6F47] to-[#2C3E50] text-white rounded-xl font-semibold hover:from-[#2C3E50] hover:to-[#8B6F47] transition-all"
                      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="mt-2 text-sm text-green-600 font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>✓ 10% discount applied!</p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-4 mb-6 pb-6 border-b-2 border-gray-200">
                  <div className="flex justify-between text-gray-600">
                    <span style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Subtotal</span>
                    <span className="font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>${subtotal.toFixed(2)}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Discount</span>
                      <span className="font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-gray-600">
                    <span style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Delivery Fee</span>
                    <span className="font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>${deliveryFee.toFixed(2)}</span>
                  </div>
                </div>

                <div className="flex justify-between items-center mb-8">
                  <span className="text-2xl font-bold" style={{ fontFamily: 'var(--font-playfair), serif' }}>Total</span>
                  <span className="text-4xl font-bold gradient-text" style={{ fontFamily: 'var(--font-playfair), serif' }}>${total.toFixed(2)}</span>
                </div>

                <button className="w-full py-5 bg-gradient-to-r from-[#8B6F47] to-[#2C3E50] text-white rounded-xl font-bold text-lg hover:from-[#2C3E50] hover:to-[#8B6F47] transition-all transform hover:scale-105 shadow-lg" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <BottomNav />
    </div>
  );
}
