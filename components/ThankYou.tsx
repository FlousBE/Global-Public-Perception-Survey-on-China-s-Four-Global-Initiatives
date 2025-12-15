import React from 'react';
import { Button } from './Button';
import { SurveyInfo, UIStrings } from '../types';

interface ThankYouProps {
  info: SurveyInfo;
  ui: UIStrings;
  onClose: () => void;
}

export const ThankYou: React.FC<ThankYouProps> = ({ info, ui, onClose }) => {
  return (
    <div className="min-h-screen bg-brand-50 flex flex-col items-center justify-center p-4">
      <div className="bg-white max-w-lg w-full rounded-2xl shadow-xl p-8 text-center animate-fade-in-up">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{ui.thankYouTitle}</h2>
        <p className="text-gray-600 mb-6">{ui.thankYouMessage}</p>
        <p className="text-sm text-gray-500 mb-8">{info.完成奖励}</p>
        <Button variant="outline" onClick={onClose}>Close</Button>
      </div>
    </div>
  );
};
