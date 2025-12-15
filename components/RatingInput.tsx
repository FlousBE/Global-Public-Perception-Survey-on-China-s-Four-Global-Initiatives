import React from 'react';

interface RatingInputProps {
  value: number | null;
  onChange: (val: number) => void;
  min?: number;
  max?: number;
  minLabel?: string;
  maxLabel?: string;
}

export const RatingInput: React.FC<RatingInputProps> = ({ 
  value, 
  onChange, 
  min = 1, 
  max = 10,
  minLabel,
  maxLabel 
}) => {
  return (
    <div className="w-full py-6 px-2">
      <div className="flex justify-between items-end mb-4">
        <span className="text-sm text-gray-500 max-w-[30%]">{minLabel}</span>
        <div className="flex flex-col items-center">
             <span className="text-3xl font-bold text-brand-600">{value ?? '?'}</span>
             <span className="text-xs text-gray-400">分</span>
        </div>
        <span className="text-sm text-gray-500 text-right max-w-[30%]">{maxLabel}</span>
      </div>
      
      <div className="relative w-full h-12 flex items-center">
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={value || min}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600 z-20 relative"
        />
        <div className="absolute top-0 left-0 w-full h-full flex justify-between items-center z-10 pointer-events-none px-1">
             {/* Ticks */}
             {Array.from({ length: max - min + 1 }, (_, i) => i + min).map(num => (
                 <div key={num} className="flex flex-col items-center pt-5">
                     <div className="w-0.5 h-2 bg-gray-300 mb-1"></div>
                     <span className="text-xs text-gray-400">{num}</span>
                 </div>
             ))}
        </div>
      </div>
    </div>
  );
};
