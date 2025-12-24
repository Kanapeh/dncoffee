'use client';

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-16">
      <button
        onClick={() => onSelectCategory('all')}
        className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
          selectedCategory === 'all'
            ? 'bg-gradient-to-r from-[#8B6F47] to-[#2C3E50] text-white shadow-lg scale-105'
            : 'bg-white text-[#8B6F47] border-2 border-[#8B6F47]/30 hover:border-[#8B6F47] hover:scale-105 shadow-md'
        }`}
        style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelectCategory(cat.id)}
          className={`flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
            selectedCategory === cat.id
              ? 'bg-gradient-to-r from-[#8B6F47] to-[#2C3E50] text-white shadow-lg scale-105'
              : 'bg-white text-[#8B6F47] border-2 border-[#8B6F47]/30 hover:border-[#8B6F47] hover:scale-105 shadow-md'
          }`}
          style={{ fontFamily: 'var(--font-inter), sans-serif' }}
        >
          <span className="text-2xl">{cat.icon}</span>
          <span>{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
