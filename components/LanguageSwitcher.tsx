import React from 'react';
import { Language } from '../types';

interface LanguageSwitcherProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ currentLang, onToggle }) => {
  return (
    <div className="flex bg-white rounded-lg p-1 shadow-sm border border-gray-200">
      <button
        onClick={() => onToggle('zh')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
          currentLang === 'zh' 
            ? 'bg-brand-50 text-brand-700' 
            : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        中文
      </button>
      <button
        onClick={() => onToggle('en')}
        className={`px-3 py-1 text-sm font-medium rounded-md transition-colors ${
          currentLang === 'en' 
            ? 'bg-brand-50 text-brand-700' 
            : 'text-gray-500 hover:text-gray-900'
        }`}
      >
        English
      </button>
    </div>
  );
};