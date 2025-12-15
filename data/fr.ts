
import { SurveyData } from '../types';

export const DATA_FR: SurveyData = {
  "问卷信息": {
    "标题": "Enquête sur la Perception par le Public Mondial des Quatre Initiatives Chinoises",
    "说明": "Ce questionnaire vise à comprendre systématiquement la perception, l'attitude et les intentions comportementales du public mondial concernant les 'Initiative pour le Développement Mondial (IDM/GDI), Initiative pour la Sécurité Mondiale (ISM/GSI), Initiative pour la Civilisation Mondiale (ICM/GCI) et Initiative pour la Gouvernance Mondiale (IGM/GGI)' proposées par la Chine.",
    "保密声明": "Toutes les informations du questionnaire sont strictement confidentielles et utilisées uniquement à des fins d'analyse académique agrégée. Les informations d'identification personnelle ne seront pas identifiées ni divulguées individuellement.",
    "预计时间": "10 minutes",
    "完成奖励": "Possibilité de laisser votre email volontairement pour recevoir le résumé des résultats de l'étude"
  },
  "问题列表": [
    {
      "类别": "Informations Démographiques du Répondant",
      "问题": [
        {
          "编号": "Q1",
          "类型": "单选",
          "题目": "Votre nationalité (Veuillez choisir votre pays parmi les options ci-dessous)",
          "选项": [
            { "分组": "A", "选项": ["Thaïlande", "Chili"] },
            { "分组": "B", "选项": ["Norvège", "France", "Finlande", "Argentine", "Royaume-Uni", "Espagne", "Italie", "Portugal", "Suède", "Turquie", "Japon", "Pays-Bas", "Belgique", "Grèce", "Hongrie", "Tchéquie"] },
            { "分组": "C", "选项": ["Afrique du Sud", "Bosnie-Herzégovine", "Bhoutan", "Autriche", "États-Unis", "Malawi", "Éthiopie", "Ouganda", "Burundi", "Iran", "Azerbaïdjan", "République centrafricaine", "Burkina Faso", "Irlande", "Ukraine", "Égypte", "Soudan", "Algérie", "Rwanda", "Mali", "Népal", "Indonésie", "Brésil", "Nigeria", "Kazakhstan"] },
            { "分组": "D", "选项": ["Libéria", "Kirghizistan", "Mongolie", "Hong Kong (Chine)", "Vietnam", "Laos", "Malaisie", "Guinée", "République du Congo"] }
          ]
        },
        {
          "编号": "Q2",
          "类型": "单选",
          "题目": "Votre âge",
          "选项": ["Moins de 18 ans", "18-24 ans", "25-34 ans", "35-44 ans", "45-54 ans", "55-64 ans", "65 ans et plus"]
        },
        {
          "编号": "Q3",
          "类型": "单选",
          "题目": "Votre genre",
          "选项": ["Homme", "Femme", "Autre"]
        },
        {
          "编号": "Q4",
          "类型": "单选",
          "题目": "Votre niveau de revenu mensuel personnel (en USD)",
          "选项": ["1000 USD et moins", "1001-3000 USD", "3001-5000 USD", "5001-8000 USD", "8001 USD et plus", "Pas de revenu fixe"]
        },
        {
          "编号": "Q5",
          "类型": "单选",
          "题目": "Votre niveau d'éducation",
          "选项": ["Lycée et moins", "Diplôme technique/associé (Bac+2)", "Licence (Bac+3/4)", "Master (Bac+5)", "Doctorat et plus (Bac+8+)"]
        },
        {
          "编号": "Q6",
          "类型": "单选",
          "题目": "Votre type de profession",
          "选项": ["Étudiant", "Employé d'entreprise", "Fonctionnaire/Personnel du secteur public", "Chercheur/Éducateur", "Professionnel des médias/de la communication", "Travailleur indépendant/Freelance", "Retraité", "Sans emploi/En recherche d'emploi", { "选项": "Autre", "补充": true }]
        },
        {
          "编号": "Q7",
          "类型": "单选",
          "题目": "Votre estimation de la 'dépendance commerciale globale' de votre pays vis-à-vis de la Chine (Indicateur objectif : Commerce avec la Chine / PIB)",
          "选项": ["Très élevée", "Élevée", "Moyenne", "Faible", "Très faible"]
        },
        {
          "编号": "Q8",
          "类型": "评分",
          "题目": "Votre attitude émotionnelle globale envers la Chine",
          "min": 1,
          "max": 10,
          "minLabel": "Très négative",
          "maxLabel": "Très positive"
        },
        {
          "编号": "Q9",
          "类型": "多选",
          "题目": "Vos principales sources d'information quotidiennes sur l'actualité internationale/les enjeux mondiaux (Choix multiples possibles)",
          "选项": ["Journal télévisé", "Journaux/Magazines", "Médias sociaux (ex. Facebook, X/Twitter, Douyin/TikTok, etc.)", "Applications d'actualité (ex. BBC News, CNN, Xinhua, etc.)", "Conférences internationales/Annonces officielles", "Partage par des proches/collègues", "Littérature académique/Rapports de think tank", "Activités des Instituts Confucius", "Activités communautaires des entreprises chinoises", "Informations relatives aux projets d'aide/de construction locaux", { "选项": "Autre", "补充": true }]
        },
        {
          "编号": "Q10",
          "类型": "单选",
          "题目": "Fréquence à laquelle vous suivez les enjeux de politique internationale/gouvernance mondiale (ex. changement climatique, coopération internationale, sécurité mondiale, etc.)",
          "选项": ["Presque jamais", "Occasionnellement (1-2 fois par mois)", "Souvent (1-2 fois par semaine)", "Constamment (3 fois par semaine et plus)"]
        },
        {
          "编号": "Q11",
          "类型": "单选",
          "题目": "Fréquence à laquelle vous êtes exposé(e) à des nouvelles/informations internationales concernant la Chine",
          "选项": ["Presque jamais", "Occasionnellement (1-2 fois par mois)", "Souvent (1-2 fois par semaine)", "Constamment (3 fois par semaine et plus)"]
        },
        {
          "编号": "Q12",
          "类型": "单选",
          "题目": "Degré de coopération entre votre pays/région et la Chine (ex. commerce, infrastructures, échanges culturels, etc.)",
          "选项": ["Très étroite", "Plutôt étroite", "Modérée", "Peu étroite", "Presque aucune coopération"]
        }
      ]
    },
    {
      "类别": "Mesure de la Confiance dans les Sources et de l'Attribution",
      "问题": [
        {
          "编号": "Q13",
          "类型": "矩阵",
          "题目": "Veuillez évaluer votre niveau de confiance dans les médias/sources d'information suivants (1 = Pas du tout fiable, 10 = Très fiable)",
          "选项": [
            { "信源": "Médias occidentaux grand public (ex. BBC, CNN, NYT, etc.)", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Médias officiels chinois (ex. CGTN, Xinhua, etc.)", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Médias grand public nationaux/locaux", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Blogueurs indépendants/KOL sur les médias sociaux", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
          ]
        },
        {
          "编号": "Q14",
          "类型": "单选",
          "题目": "Lorsque vous voyez des reportages positifs sur les 'Initiatives chinoises', penchez-vous davantage vers l'interprétation suivante (Choix binaire)",
          "选项": ["Propagande politique du gouvernement chinois", "Reflet objectif du développement réel de la Chine"]
        },
        {
          "编号": "Q15",
          "类型": "多选",
          "题目": "Selon vous, quelle est la principale motivation de la Chine pour proposer les quatre initiatives (GDI/GSI/GCI/GGI) ? (Choix multiples, limite de 3 options)",
          "选项": ["Promouvoir la prospérité commune et la paix mondiale", "Accroître l'influence internationale et la voix de la Chine", "Contester l'ordre international actuel dominé par l'Occident", "Résoudre les défis mondiaux (ex. pauvreté, menaces à la sécurité, etc.)", "Détourner les contradictions internes ou les pressions économiques", "Ouvrir la voie à l'expansion des entreprises chinoises à l'étranger", "Aucune"]
        },
        {
          "编号": "Q16",
          "类型": "单选",
          "题目": "(Si 'Aucune' n'est pas sélectionné en Q15) Selon vous, quelle est la principale de ces motivations ?",
          "选项": ["Promouvoir la prospérité commune et la paix mondiale", "Accroître l'influence internationale et la voix de la Chine", "Contester l'ordre international actuel dominé par l'Occident", "Résoudre les défis mondiaux (ex. pauvreté, menaces à la sécurité, etc.)", "Détourner les contradictions internes ou les pressions économiques", "Ouvrir la voie à l'expansion des entreprises chinoises à l'étranger"]
        }
      ]
    },
    {
      "类别": "Mesure de la Connaissance des Quatre Initiatives",
      "子类别": "Initiative pour le Développement Mondial (IDM/GDI) — Le Développement en Priorité",
      "问题": [
        {
          "编号": "Q17",
          "类型": "单选",
          "题目": "Avez-vous entendu parler de l'« Initiative pour le Développement Mondial » (IDM/GDI) ?",
          "选项": ["Très familier", "J'en ai entendu parler, mais je ne connais pas les détails", "Jamais entendu parler"]
        },
        {
          "编号": "Q18",
          "类型": "单选",
          "题目": "Êtes-vous d'accord avec l'affirmation selon laquelle 'le développement est le fondement de la résolution de tous les problèmes, et les droits à la survie et au développement sont des droits de l'homme primordiaux' ? (1 = Pas du tout d'accord, 5 = Tout à fait d'accord)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q19",
          "类型": "单选",
          "题目": "Pensez-vous que le modèle occidental (qui privilégie la démocratisation politique) est applicable au développement de votre pays ?",
          "选项": ["Très applicable", "Plutôt applicable", "Modérément", "Peu applicable", "Pas du tout applicable"]
        },
        {
          "编号": "Q20",
          "类型": "单选",
          "题目": "Pensez-vous que le modèle chinois (qui privilégie le développement économique et un fort leadership gouvernemental) offre une alternative viable à votre pays ?",
          "选项": ["Offre une très bonne alternative", "Offre une référence certaine", "Je ne suis pas sûr(e)", "Peu adapté", "Pas du tout adapté"]
        },
        {
          "编号": "Q21",
          "类型": "单选",
          "题目": "Votre degré d'approbation du concept de l'IDM/GDI de 'donner la priorité au développement et se centrer sur le peuple' (1 = Pas du tout d'accord, 5 = Tout à fait d'accord)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q22",
          "类型": "单选",
          "题目": "Votre attente concernant l'utilité pratique de l'IDM/GDI pour résoudre des problèmes mondiaux tels que la pauvreté et la sécurité alimentaire (1 = Très inutile, 5 = Très utile)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q23",
          "类型": "单选",
          "题目": "Pensez-vous que l'IDM/GDI est un complément efficace à l'Agenda 2030 des Nations Unies pour le Développement Durable (ODD) ?",
          "选项": ["Oui, un complément très efficace", "Oui, un complément dans une certaine mesure", "Je ne suis pas sûr(e)", "Non, peu de lien", "Non, c'est même un écart"]
        },
        {
          "编号": "Q24",
          "类型": "单选",
          "题目": "Êtes-vous favorable à ce que votre pays participe activement aux projets liés à l'Initiative pour le Développement Mondial (IDM/GDI) ?",
          "选项": ["Très favorable", "Plutôt favorable", "Neutre", "Plutôt défavorable", "Totalement défavorable"]
        }
      ]
    },
    {
      "子类别": "Initiative pour la Sécurité Mondiale (ISM/GSI) — Le Paradigme de la Sécurité",
      "问题": [
        {
          "编号": "Q25",
          "类型": "单选",
          "题目": "Votre degré d'accord avec l'affirmation selon laquelle 'la souveraineté nationale est absolue, et aucun État ne doit s'immiscer dans les affaires intérieures d'un autre' (1 = Pas du tout d'accord, 5 = Tout à fait d'accord)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q26",
          "类型": "单选",
          "题目": "Votre degré de soutien à l'idée d''une intervention humanitaire dans un autre pays pour la défense des droits de l'homme' (1 = Pas du tout favorable, 5 = Très favorable)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q27",
          "类型": "单选",
          "题目": "La faisabilité, selon vous, du concept de l'ISM/GSI de 'sécurité commune et opposition à la confrontation entre blocs' (1 = Totalement irréalisable, 5 = Très réalisable)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q28",
          "类型": "单选",
          "题目": "Votre degré d'accord avec l'affirmation selon laquelle 'la sécurité est indivisible et le principe de souveraineté prime sur l'interventionnisme' (1 = Pas du tout d'accord, 5 = Tout à fait d'accord)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        }
      ]
    },
    {
      "子类别": "Initiative pour la Civilisation Mondiale (ICM/GCI) — Relativisme Civilisationnel",
      "问题": [
        {
          "编号": "Q29",
          "类型": "单选",
          "题目": "À quelle affirmation adhérez-vous le plus (Choix binaire)",
          "选项": ["Les normes relatives aux droits de l'homme sont universelles et s'appliquent à tous les pays et cultures", "Les normes relatives aux droits de l'homme sont définies par le contexte culturel ; différentes civilisations devraient avoir différentes interprétations"]
        },
        {
          "编号": "Q30",
          "类型": "单选",
          "题目": "Votre degré de certitude concernant le choix ci-dessus (1 = Très incertain(e), 10 = Très certain(e))",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分", "6 分", "7 分", "8 分", "9 分", "10 分"]
        },
        {
          "编号": "Q31",
          "类型": "单选",
          "题目": "Votre degré de soutien à l'idée selon laquelle 'la modernisation n'est pas synonyme d'occidentalisation, et le droit de chaque pays à définir sa propre civilisation doit être respecté' (1 = Pas du tout favorable, 5 = Très favorable)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q32",
          "类型": "单选",
          "题目": "Votre degré d'approbation du concept de l'ICM/GCI d''égalité, d'apprentissage mutuel et d'inclusion des civilisations' (1 = Pas du tout d'accord, 5 = Tout à fait d'accord)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        }
      ]
    },
    {
      "子类别": "Initiative pour la Gouvernance Mondiale (IGM/GGI) — Justice Procédurale",
      "问题": [
        {
          "编号": "Q33",
          "类型": "单选",
          "题目": "Face à une crise pandémique mondiale, vous penchez davantage vers (1 = Totalement en faveur de la domination par les grandes puissances, 5 = Totalement en faveur de la consultation dans le cadre de l'ONU)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q34",
          "类型": "单选",
          "题目": "Face à une crise de la dette souveraine, vous penchez davantage vers (1 = Totalement en faveur de la domination par les grandes puissances, 5 = Totalement en faveur de la consultation dans le cadre de l'ONU)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q35",
          "类型": "单选",
          "题目": "Face à la question de la réglementation de l'armement par l'intelligence artificielle, vous penchez davantage vers (1 = Totalement en faveur de la domination par les grandes puissances, 5 = Totalement en faveur de la consultation dans le cadre de l'ONU)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q36",
          "类型": "单选",
          "题目": "La nécessité, selon vous, de l'IGM/GGI d''accroître la représentation des pays en développement' (1 = Pas du tout nécessaire, 5 = Très nécessaire)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q37",
          "类型": "单选",
          "题目": "Votre degré d'accord avec l'affirmation selon laquelle 'la consultation, la construction et le partage mutuels devraient corriger le dysfonctionnement de l'ordre international' (1 = Pas du tout d'accord, 5 = Tout à fait d'accord)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"]
        },
        {
          "编号": "Q38",
          "类型": "单选",
          "题目": "Votre degré d'approbation global du cadre de coordination quadridimensionnel 'Développement-Sécurité-Civilisation-Gouvernance' des quatre initiatives (1 = Pas du tout d'accord, 5 = Tout à fait d'accord)",
          "选项": ["1 分", "2 分", "3 分", "4 分", "5 分"],
          "补充说明": "Les quatre initiatives se soutiennent mutuellement, formant un système complet avec 'le développement comme fondement, la sécurité comme garantie, la civilisation comme lien et la gouvernance comme coordination'. Cette conclusion est basée sur les recherches de Ye Chengcheng et d'autres chercheurs sur le système 'quatre-en-un'."
        }
      ]
    },
    {
      "类别": "Mesure des Intentions Comportementales",
      "问题": [
        {
          "编号": "Q39",
          "类型": "单选",
          "题目": "Si l'occasion se présentait, seriez-vous disposé(e) à en savoir plus sur des exemples concrets de mise en œuvre des quatre initiatives (ex. projets de coopération, activités d'échanges culturels, etc.) ?",
          "选项": ["Très disposé(e)", "Plutôt disposé(e)", "Je ne suis pas sûr(e)", "Plutôt peu disposé(e)", "Pas du tout disposé(e)"]
        },
        {
          "编号": "Q40",
          "类型": "单选",
          "题目": "Seriez-vous disposé(e) à partager les concepts ou les exemples pratiques des quatre initiatives avec vos proches ou collègues ?",
          "选项": ["Très disposé(e)", "Plutôt disposé(e)", "Je ne suis pas sûr(e)", "Plutôt peu disposé(e)", "Pas du tout disposé(e)"]
        },
        {
          "编号": "Q41",
          "类型": "单选",
          "题目": "Si votre pays/région participait à une coopération liée aux quatre initiatives, seriez-vous disposé(e) à y prendre part (ex. travail sur projet, bénévolat, échanges culturels, etc.) ?",
          "选项": ["Très disposé(e)", "Plutôt disposé(e)", "Je ne suis pas sûr(e)", "Plutôt peu disposé(e)", "Pas du tout disposé(e)"]
        }
      ]
    },
    {
      "类别": "Mesure de la Satisfaction de la Communication",
      "问题": [
        {
          "编号": "Q42",
          "类型": "单选",
          "题目": "Votre niveau de satisfaction quant à la qualité des informations reçues sur les quatre initiatives (précision, exhaustivité, objectivité)",
          "选项": ["Très satisfait(e)", "Plutôt satisfait(e)", "Neutre", "Plutôt insatisfait(e)", "Très insatisfait(e)"]
        },
        {
          "编号": "Q43",
          "类型": "单选",
          "题目": "Votre niveau de satisfaction quant à la facilité d'accès aux informations sur les quatre initiatives (facilité à trouver, coût d'accès)",
          "选项": ["Très satisfait(e)", "Plutôt satisfait(e)", "Neutre", "Plutôt insatisfait(e)", "Très insatisfait(e)"]
        },
        {
          "编号": "Q44",
          "类型": "单选",
          "题目": "Pensez-vous que la communication internationale des quatre initiatives reflète adéquatement les intérêts et préoccupations de votre pays/région ?",
          "选项": ["Très adéquatement", "Plutôt adéquatement", "Modérément", "Peu adéquatement", "Pas du tout adéquatement"]
        }
      ]
    },
    {
      "类别": "Commentaires Complémentaires Libres",
      "问题": [
        {
          "编号": "Q45",
          "类型": "单选+补充",
          "题目": "Avez-vous des questions ou des suggestions concernant les quatre initiatives (concepts liés au développement, à la sécurité, à la civilisation, à la gouvernance) ?",
          "选项": ["Non", { "选项": "Oui", "补充": true }]
        },
        {
          "编号": "Q46",
          "类型": "单选+补充",
          "题目": "Quels canaux ou méthodes, selon vous, sont les plus appropriés pour communiquer ce type d'initiatives internationales au public mondial (ex. conférences internationales, médias sociaux, projets de coopération, etc.) ?",
          "选项": ["Non", { "选项": "Oui", "补充": true }]
        },
        {
          "编号": "Q47",
          "类型": "单选+补充",
          "题目": "Souhaitez-vous laisser votre email pour recevoir le résumé des résultats futurs de cette étude :",
          "选项": [{ "选项": "Oui", "补充": "Email : ________" }, "Non"]
        },
        {
          "编号": "Q48",
          "类型": "单选",
          "题目": "Votre évaluation de l'expérience de remplissage de ce questionnaire :",
          "选项": ["Très bonne", "Plutôt bonne", "Moyenne", "Plutôt mauvaise", "Très mauvaise"]
        }
      ]
    }
  ]
};