'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Product {
  id: string;
  name: string;
  price?: number;
  image?: string;
  category?: string;
  description?: string;
  featured?: boolean;
  origin?: string;
  brewingMethod?: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured Badge */}
      {product.featured && (
        <div className="absolute top-5 left-5 z-20 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-[#2C1810] px-5 py-2 rounded-full text-xs font-bold shadow-xl transform group-hover:scale-110 transition-transform duration-300 flex items-center gap-2">
          <span>⭐</span>
          <span>Featured</span>
        </div>
      )}

      {/* Category Badge */}
      {product.category && (
        <div className="absolute top-5 right-5 z-20 bg-white/90 backdrop-blur-md text-[#8B6F47] px-4 py-2 rounded-full text-xs font-semibold shadow-lg transform group-hover:scale-110 transition-transform duration-300">
          {product.category}
        </div>
      )}

      {/* Image Container - Creative Design */}
      <div className="relative h-72 overflow-hidden bg-gradient-to-br from-[#F5F1E8] via-[#D4C4A8] to-[#8B6F47]">
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
        
        {/* Shimmer Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10"></div>

        {product.image ? (
          <div className="relative w-full h-full">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transform group-hover:scale-125 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center relative">
            <div className="text-9xl opacity-20 group-hover:opacity-30 group-hover:scale-125 group-hover:rotate-12 transition-all duration-700">☕</div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#8B6F47]/30 via-transparent to-transparent"></div>
          </div>
        )}

        {/* Info Badge - Origin or Brewing Method */}
        {(product.origin || product.brewingMethod) && (
          <div className={`absolute bottom-5 right-5 z-20 bg-white/95 backdrop-blur-md text-[#8B6F47] px-4 py-2 rounded-2xl text-xs font-semibold shadow-2xl transition-all duration-500 transform ${
            isHovered 
              ? 'translate-y-0 opacity-100 scale-100' 
              : 'translate-y-8 opacity-0 scale-50'
          } hover:scale-110`}>
            {product.origin && <span>🇸🇪 {product.origin}</span>}
            {product.brewingMethod && <span>☕ {product.brewingMethod}</span>}
          </div>
        )}

        {/* View Details Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-br from-[#8B6F47]/80 to-[#2C3E50]/80 flex items-center justify-center transition-all duration-500 z-10 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <span className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 px-6 py-3" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>
            View Details →
          </span>
        </div>
      </div>

      {/* Content Section - Modern Design */}
      <div className="px-10 py-8 bg-white relative overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8B6F47]/5 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Product Name */}
        <h3 
          className="font-bold text-2xl mb-3 text-[#2C1810] group-hover:text-[#8B6F47] transition-colors duration-300 relative z-10 transform group-hover:translate-x-1 transition-transform" 
          style={{ fontFamily: 'var(--font-playfair), serif' }}
        >
          {product.name}
        </h3>

        {/* Description */}
        {product.description && (
          <p 
            className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-2 group-hover:text-gray-700 transition-colors duration-300 relative z-10" 
            style={{ fontFamily: 'var(--font-inter), sans-serif' }}
          >
            {product.description}
          </p>
        )}

        {/* Product Info Section */}
        <div className="mt-6 pt-6 border-t border-gray-100 group-hover:border-[#8B6F47]/30 transition-colors duration-300 relative z-10">
          {/* Origin and Brewing Info */}
          <div className="flex flex-col gap-3">
            {product.origin && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 font-medium" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Origin:</span>
                <span className="text-[#8B6F47] font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>🇸🇪 {product.origin}</span>
              </div>
            )}
            {product.brewingMethod && (
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-500 font-medium" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Brewing:</span>
                <span className="text-[#8B6F47] font-semibold" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>☕ {product.brewingMethod}</span>
              </div>
            )}
            {product.price && (
              <div className="flex items-center gap-2 text-sm mt-2">
                <span className="text-gray-500 font-medium" style={{ fontFamily: 'var(--font-inter), sans-serif' }}>Price:</span>
                <span 
                  className="text-2xl font-bold bg-gradient-to-r from-[#8B6F47] via-[#D4AF37] to-[#2C3E50] bg-clip-text text-transparent transform group-hover:scale-110 transition-transform duration-300" 
                  style={{ fontFamily: 'var(--font-playfair), serif' }}
                >
            ${product.price.toFixed(2)}
          </span>
              </div>
            )}
          </div>
        </div>

        {/* Decorative Bottom Border */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#8B6F47] via-[#D4AF37] to-[#2C3E50] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
      </div>

      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#8B6F47]/20 to-[#2C3E50]/20 opacity-0 group-hover:opacity-100 blur-xl -z-10 transition-opacity duration-700"></div>
    </div>
  );
}
