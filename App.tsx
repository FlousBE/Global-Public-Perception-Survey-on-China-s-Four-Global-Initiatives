import React, { useState, useMemo, useEffect } from 'react';
import { SURVEY_DATA, UI_LABELS } from './constants';
import { Question, OptionType, ComplexOption, Language, AnswerState, MatrixRow } from './types';
import { Button } from './components/Button';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import { Header } from './components/Header';
import { ProgressBar } from './components/ProgressBar';
import { QuestionText } from './components/QuestionText';
import { SingleChoice } from './components/SingleChoice';
import { MultiChoice } from './components/MultiChoice';
import { Matrix } from './components/Matrix';
import { RatingInput } from './components/RatingInput';
import { AnswerStatus } from './components/AnswerStatus';
import { ThankYou } from './components/ThankYou';

// --- Main App Component ---

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);
  
  // Flattening the structure for the linear wizard experience
  const pages = useMemo(() => {
    // We treat each Category as a "Page" or "Step"
    return SURVEY_DATA[lang].问题列表.map((group) => ({
      title: group.类别,
      questions: group.问题.flatMap(q => {
         // Flatten subcategories if present
         if ('子类别' in q && '问题' in q) {
             return (q as any).问题.map((subQ: Question) => ({...subQ, 子类别: q.子类别}));
         }
         return q as Question;
      })
    }));
  }, [lang]);

  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});

  // Ensure currentStep is valid when lang changes (though pages structure is same)
  useEffect(() => {
    if (currentStep >= pages.length) {
      setCurrentStep(pages.length - 1);
    }
  }, [pages.length, currentStep]);

  const currentPage = pages[currentStep];
  const ui = UI_LABELS[lang];

  // Logic to handle Q16 skip
  const shouldShowQuestion = (q: Question) => {
    if (q.编号 === 'Q16') {
      const q15Answer = answers['Q15'] as string[];
      if (q15Answer && q15Answer.includes('无') || (Array.isArray(q15Answer) && q15Answer.includes('None'))) {
        return false;
      }
    }
    return true;
  };

  const visibleQuestions = currentPage ? currentPage.questions.filter(shouldShowQuestion) : [];

  // Validation
  const canProceed = visibleQuestions.every(q => {
    const ans = answers[q.编号];
    
    // Check if answered
    if (ans === undefined || ans === null || ans === "") return false;
    
    // Check array (MultiChoice)
    if (Array.isArray(ans) && ans.length === 0) return false;
    
    // Check Matrix
    if (q.类型 === '矩阵') {
       const rows = q.选项 as unknown as MatrixRow[];
       const ansObj = ans as {[key:string]: number};
       // Must answer all rows
       return rows.every(r => ansObj[r.信源] !== undefined);
    }

    // Check SingleChoice + Supplement
    if (typeof ans === 'object' && 'supplement' in (ans as any)) {
        // If supplement is required (e.g. Email "Yes"), we might want to validate it.
        // Currently SingleChoice handles the UI. 
        // If "Yes" is selected, and supplement is empty, is it invalid?
        // Let's assume strict validation: if supplement field is shown, it must be filled.
        // However, we don't strictly know if supplement is required from data.
        // For Q47 (Email), "Yes" -> Supplement.
        const choice = (ans as any).choice;
        // Simple heuristic: if the choice corresponds to an option with "supplement: true" or string,
        // and the supplement value is empty, block it.
        // But we need to look up the option config.
        const selectedOpt = q.选项?.find(o => {
            if (typeof o === 'string') return o === choice;
            return (o as ComplexOption).选项 === choice;
        });
        
        if (selectedOpt && typeof selectedOpt === 'object' && '补充' in selectedOpt) {
            const supplementVal = (ans as any).supplement;
            if (!supplementVal || supplementVal.trim() === "") return false;
        }
    }
    
    return true;
  });

  const handleSubmit = () => {
    // Here we would send data to backend
    console.log("Survey Submitted:", { lang, answers });
    
    // Simulate backend request
    // In a real scenario: fetch('/api/submit', { method: 'POST', body: JSON.stringify(answers) })
    
    // Download as JSON for now (simple "backend" alternative)
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(answers, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", "survey_answers.json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    setCompleted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    if (currentStep < pages.length - 1) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const updateAnswer = (qid: string, val: any) => {
    setAnswers(prev => ({ ...prev, [qid]: val }));
  };

  // Intro Screen
  if (!started) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-brand-50 to-white flex flex-col">
        <Header title={SURVEY_DATA[lang].问卷信息.标题} lang={lang} setLang={setLang} />
        <main className="flex-1 flex flex-col items-center justify-center p-4">
          <div className="bg-white max-w-2xl w-full rounded-2xl shadow-xl p-8 border border-gray-100 text-center animate-fade-in-up">
            <div className="w-16 h-16 bg-brand-100 text-brand-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">{SURVEY_DATA[lang].问卷信息.标题}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed text-justify">
              {SURVEY_DATA[lang].问卷信息.说明}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left text-sm text-gray-500 bg-gray-50 p-4 rounded-lg mb-8">
              <div className="flex items-center">
                <span className="font-semibold mr-2">⏱️</span> {SURVEY_DATA[lang].问卷信息.预计时间}
              </div>
              <div className="flex items-center">
                <span className="font-semibold mr-2">🔒</span> {SURVEY_DATA[lang].问卷信息.保密声明}
              </div>
            </div>
            <Button onClick={() => setStarted(true)} className="w-full sm:w-auto text-lg px-10 py-3">
              {ui.start}
            </Button>
          </div>
        </main>
      </div>
    );
  }

  // Completion Screen
  if (completed) {
    return (
      <ThankYou 
        info={SURVEY_DATA[lang].问卷信息} 
        ui={ui} 
        onClose={() => window.location.reload()} 
      />
    );
  }

  // Survey Wizard
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-20 relative">
      <Header title={SURVEY_DATA[lang].问卷信息.标题} lang={lang} setLang={setLang} />
      
      {/* Answer Status Card */}
      <AnswerStatus 
        pages={pages} 
        answers={answers} 
        currentStep={currentStep} 
        onJumpToStep={setCurrentStep}
        langStrings={ui}
      />

      <main className="flex-1 max-w-3xl w-full mx-auto px-4 py-8">
        <ProgressBar current={currentStep} total={pages.length} label={ui.progress} />

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gray-50 px-6 py-4 border-b border-gray-100">
            <h2 className="text-lg font-bold text-gray-800">
              {currentPage ? currentPage.title : "Survey Section"}
            </h2>
          </div>

          <div className="p-6 space-y-10">
            {visibleQuestions.map((q) => (
              <div key={q.编号} className="animate-fade-in-up scroll-mt-24" id={`q-${q.编号}`}>
                {q.子类别 && (
                  <div className="text-xs font-semibold text-brand-600 uppercase tracking-widest mb-2">
                    {q.子类别}
                  </div>
                )}
                
                <QuestionText 
                  text={`${q.编号}. ${q.题目}`} 
                  required={true} 
                  note={q.补充说明} 
                />

                {q.类型 === '单选' && (
                  <SingleChoice 
                    question={q} 
                    value={answers[q.编号]} 
                    onChange={(v) => updateAnswer(q.编号, v)} 
                    langStrings={ui}
                  />
                )}
                
                {q.类型 === '单选+补充' && (
                   <SingleChoice 
                    question={q} 
                    value={answers[q.编号]} 
                    onChange={(v) => updateAnswer(q.编号, v)} 
                    langStrings={ui}
                  />
                )}

                {q.类型 === '多选' && (
                  <MultiChoice 
                    question={q} 
                    value={(answers[q.编号] as string[]) || []} 
                    onChange={(v) => updateAnswer(q.编号, v)} 
                    langStrings={ui}
                  />
                )}

                {q.类型 === '矩阵' && (
                  <Matrix 
                    question={q} 
                    value={(answers[q.编号] as any) || {}} 
                    onChange={(v) => updateAnswer(q.编号, v)} 
                  />
                )}

                {q.类型 === '评分' && (
                  <RatingInput 
                    value={(answers[q.编号] as number) || null} 
                    onChange={(v) => updateAnswer(q.编号, v)}
                    min={q.min}
                    max={q.max}
                    minLabel={q.minLabel}
                    maxLabel={q.maxLabel}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex justify-between items-center">
            <Button 
              variant="secondary" 
              onClick={handleBack} 
              disabled={currentStep === 0}
            >
              {ui.back}
            </Button>
            <div className="text-sm text-gray-400 font-medium">
               Step {currentStep + 1} of {pages.length}
            </div>
            <Button 
              onClick={handleNext} 
              disabled={!canProceed}
            >
              {currentStep === pages.length - 1 ? ui.submit : ui.next}
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
