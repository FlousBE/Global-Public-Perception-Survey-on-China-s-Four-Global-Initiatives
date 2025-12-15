import React from 'react';
import { Language } from '../types';
import { LanguageSwitcher } from './LanguageSwitcher';

interface HeaderProps {
  title: string;
  lang: Language;
  setLang: (l: Language) => void;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, lang, setLang }) => (
  <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <h1 className="text-lg font-bold text-gray-900 truncate flex-1 mr-4" title={title}>
        {title}
      </h1>
      <LanguageSwitcher currentLang={lang} onToggle={setLang} />
    </div>
  </header>
);
