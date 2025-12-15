import { SurveyData, UIStrings, Language } from './types';
import { DATA_ZH } from './data/zh';
import { DATA_EN } from './data/en';
import { DATA_FR } from './data/fr';
import { DATA_ES } from './data/es';
import { DATA_RU } from './data/ru';
import { DATA_AR } from './data/ar';

export const SURVEY_DATA: Record<Language, SurveyData> = {
  zh: DATA_ZH,
  en: DATA_EN,
  fr: DATA_FR,
  es: DATA_ES,
  ru: DATA_RU,
  ar: DATA_AR
};

export const UI_LABELS: Record<Language, UIStrings> = {
  zh: {
    start: "开始问卷",
    next: "下一页",
    back: "上一页",
    submit: "提交问卷",
    required: "* 必填",
    selectPlaceholder: "请选择...",
    otherPlaceholder: "请输入其他内容...",
    progress: "进度",
    thankYouTitle: "感谢您的参与",
    thankYouMessage: "您的回答对我们的研究至关重要。"
  },
  en: {
    start: "Start Survey",
    next: "Next",
    back: "Back",
    submit: "Submit",
    required: "* Required",
    selectPlaceholder: "Please select...",
    otherPlaceholder: "Please specify...",
    progress: "Progress",
    thankYouTitle: "Thank You",
    thankYouMessage: "Your response is vital to our research."
  },
  fr: {
    start: "Commencer",
    next: "Suivant",
    back: "Retour",
    submit: "Soumettre",
    required: "* Obligatoire",
    selectPlaceholder: "Veuillez sélectionner...",
    otherPlaceholder: "Veuillez préciser...",
    progress: "Progrès",
    thankYouTitle: "Merci",
    thankYouMessage: "Votre réponse est essentielle pour notre recherche."
  },
  es: {
    start: "Comenzar",
    next: "Siguiente",
    back: "Atrás",
    submit: "Enviar",
    required: "* Obligatorio",
    selectPlaceholder: "Por favor seleccione...",
    otherPlaceholder: "Por favor especifique...",
    progress: "Progreso",
    thankYouTitle: "Gracias",
    thankYouMessage: "Su respuesta es vital para nuestra investigación."
  },
  ru: {
    start: "Начать",
    next: "Далее",
    back: "Назад",
    submit: "Отправить",
    required: "* Обязательно",
    selectPlaceholder: "Пожалуйста, выберите...",
    otherPlaceholder: "Пожалуйста, уточните...",
    progress: "Прогресс",
    thankYouTitle: "Спасибо",
    thankYouMessage: "Ваш ответ важен для нашего исследования."
  },
  ar: {
    start: "ابدأ الاستبيان",
    next: "التالي",
    back: "السابق",
    submit: "إرسال",
    required: "* مطلوب",
    selectPlaceholder: "يرجى الاختيار...",
    otherPlaceholder: "يرجى التحديد...",
    progress: "التقدم",
    thankYouTitle: "شكرا لك",
    thankYouMessage: "إجابتك حيوية لبحثنا."
  }
};
