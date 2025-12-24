'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup submission
    console.log('Signup submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#2C3038] via-[#1e2329] to-[#1a1f2e] pb-20 md:pb-0">
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-md mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center justify-center gap-2 text-white/60 text-sm md:text-base mb-6" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white">Sign Up</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 text-center" style={{ fontFamily: 'var(--font-playfair), serif' }}>
              Create <span className="text-[#D4AF37]" style={{ fontFamily: 'var(--font-cormorant), serif', fontWeight: 400 }}>Account</span>
            </h1>
            <p className="text-white/70 text-center mb-8">Join us for the best coffee experience</p>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8 space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/90 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/90 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#D4AF37] focus:bg-white/10 transition-all"
                  placeholder="••••••••"
                />
              </div>

              <label className="flex items-start gap-2">
                <input type="checkbox" className="mt-1 w-4 h-4 rounded border-white/20 bg-white/5 text-[#D4AF37] focus:ring-[#D4AF37]" required />
                <span className="text-sm text-white/70">
                  I agree to the{' '}
                  <Link href="#" className="text-[#D4AF37] hover:text-[#8B6F47] transition-colors">
                    Terms & Conditions
                  </Link>
                </span>
              </label>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-[#8B6F47] to-[#D4AF37] text-white font-semibold rounded-lg hover:from-[#D4AF37] hover:to-[#8B6F47] transition-all duration-300 shadow-lg"
              >
                Create Account
              </button>

              <div className="text-center text-sm text-white/70">
                Already have an account?{' '}
                <Link href="/login" className="text-[#D4AF37] hover:text-[#8B6F47] font-medium transition-colors">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <BottomNav />
    </div>
  );
}
