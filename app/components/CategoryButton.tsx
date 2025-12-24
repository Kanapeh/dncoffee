'use client';

interface CategoryButtonProps {
  label: string;
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

export default function CategoryButton({ label, icon, isActive, onClick }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 min-w-[80px] ${
        isActive
          ? 'bg-gradient-to-br from-amber-700 to-amber-600 text-white shadow-lg scale-105'
          : 'bg-white text-gray-700 hover:bg-amber-50 hover:scale-105 shadow-md'
      }`}
    >
      <span className="text-3xl transform transition-transform duration-300">{icon}</span>
      <span className="text-xs font-semibold">{label}</span>
      {isActive && (
        <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-1 bg-white rounded-full"></div>
      )}
    </button>
  );
}
