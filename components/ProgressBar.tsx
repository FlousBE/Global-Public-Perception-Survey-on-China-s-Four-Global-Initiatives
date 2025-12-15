import React from 'react';

interface ProgressBarProps {
  current: number;
  total: number;
  label: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ current, total, label }) => {
  const percentage = Math.round(((current + 1) / total) * 100);
  return (
    <div className="w-full mb-6">
      <div className="flex justify-between text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
        <span>{label}</span>
        <span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-brand-600 h-2 rounded-full transition-all duration-500 ease-out" 
          style={{ width: `${percentage}%` }} 
        />
      </div>
    </div>
  );
};
