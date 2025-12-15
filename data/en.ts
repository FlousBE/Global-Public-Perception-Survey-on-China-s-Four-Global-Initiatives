import { SurveyData } from '../types';

export const DATA_EN: SurveyData = {
  "问卷信息": {
    "标题": "Global Public Perception Survey on China's Four Global Initiatives",
    "说明": "This survey aims to systematically understand global public perceptions, attitudes, and behavioral intentions regarding China's Global Development Initiative (GDI), Global Security Initiative (GSI), Global Civilization Initiative (GCI), and Global Governance Initiative (GGI).",
    "保密声明": "All information in this survey is strictly confidential and will be used only for aggregate academic analysis. Personal identity information will not be identified or disclosed individually.",
    "预计时间": "10 minutes",
    "完成奖励": "You may voluntarily leave your email to receive a summary of the research results."
  },
  "问题列表": [
    {
      "类别": "Respondent Basic Information",
      "问题": [
        {
          "编号": "Q1",
          "类型": "单选",
          "题目": "Your Nationality (Please select your country from the options below)",
          "选项": [
            { "分组": "A", "选项": ["Thailand", "Chile"] },
            { "分组": "B", "选项": ["Norway", "France", "Finland", "Argentina", "UK", "Spain", "Italy", "Portugal", "Sweden", "Turkey", "Japan", "Netherlands", "Belgium", "Greece", "Hungary", "Czech Republic"] },
            { "分组": "C", "选项": ["South Africa", "Bosnia and Herzegovina", "Bhutan", "Austria", "USA", "Malawi", "Ethiopia", "Uganda", "Burundi", "Iran", "Azerbaijan", "Central African Republic", "Burkina Faso", "Ireland", "Ukraine", "Egypt", "Sudan", "Algeria", "Rwanda", "Mali", "Nepal", "Indonesia", "Brazil", "Nigeria", "Kazakhstan"] },
            { "分组": "D", "选项": ["Liberia", "Kyrgyzstan", "Mongolia", "Hong Kong, China", "Vietnam", "Laos", "Malaysia", "Guinea", "Republic of the Congo"] }
          ]
        },
        {
          "编号": "Q2",
          "类型": "单选",
          "题目": "Your Age",
          "选项": ["Under 18", "18-24", "25-34", "35-44", "45-54", "55-64", "65 and above"]
        },
        {
          "编号": "Q3",
          "类型": "单选",
          "题目": "Your Gender",
          "选项": ["Male", "Female", "Other"]
        },
        {
          "编号": "Q4",
          "类型": "单选",
          "题目": "Your Personal Monthly Income (in USD)",
          "选项": ["1000 USD and below", "1001-3000 USD", "3001-5000 USD", "5001-8000 USD", "8001 USD and above", "No fixed income"]
        },
        {
          "编号": "Q5",
          "类型": "单选",
          "题目": "Your Education Level",
          "选项": ["High school and below", "Associate degree", "Bachelor's degree", "Master's degree", "Doctoral degree and above"]
        },
        {
          "编号": "Q6",
          "类型": "单选",
          "题目": "Your Occupation",
          "选项": ["Student", "Corporate Employee", "Government/Public Sector", "Researcher/Educator", "Media/Communication Practitioner", "Freelancer", "Retired", "Unemployed", { "选项": "Other", "补充": true }]
        },
        {
          "编号": "Q7",
          "类型": "单选",
          "题目": "How would you rate your country's 'Comprehensive Trade Dependence' on China? (Objective indicator: Trade volume with China / GDP)",
          "选项": ["Very High", "High", "Average", "Low", "Very Low"]
        },
        {
          "编号": "Q8",
          "类型": "评分",
          "题目": "Your overall emotional attitude towards China",
          "min": 1,
          "max": 10,
          "minLabel": "Very Negative",
          "maxLabel": "Very Positive"
        },
        {
          "编号": "Q9",
          "类型": "多选",
          "题目": "Your main channels for obtaining international news/global issues information (Multiple selections allowed)",
          "选项": ["TV News", "Newspapers/Magazines", "Social Media (e.g., Facebook, Twitter, TikTok, etc.)", "News Apps (e.g., BBC News, CNN, Xinhua, etc.)", "International Conferences/Official Announcements", "Shared by Family/Colleagues", "Academic Literature/Think Tank Reports", "Confucius Institute Activities", "Chinese Enterprise Community Activities", "Information related to local aid projects", { "选项": "Other", "补充": true }]
        },
        {
          "编号": "Q10",
          "类型": "单选",
          "题目": "Frequency of paying attention to international politics/global governance issues (e.g., climate change, international cooperation, global security)",
          "选项": ["Almost never", "Occasionally (1-2 times/month)", "Frequently (1-2 times/week)", "Constantly (3 times/week and above)"]
        },
        {
          "编号": "Q11",
          "类型": "单选",
          "题目": "Frequency of exposure to China-related international news/information",
          "选项": ["Almost never", "Occasionally (1-2 times/month)", "Frequently (1-2 times/week)", "Constantly (3 times/week and above)"]
        },
        {
          "编号": "Q12",
          "类型": "单选",
          "题目": "Closeness of cooperation between your country/region and China (e.g., trade, infrastructure, cultural exchange)",
          "选项": ["Very Close", "Relatively Close", "Average", "Not Very Close", "Almost No Cooperation"]
        }
      ]
    },
    {
      "类别": "Source Trust and Attribution Measurement",
      "问题": [
        {
          "编号": "Q13",
          "类型": "矩阵",
          "题目": "Please rate your trust in the following media/sources (1 = Very Distrustful, 10 = Very Trustful)",
          "选项": [
            { "信源": "Western Mainstream Media (e.g., BBC, CNN, NYT)", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Chinese Official Media (e.g., CGTN, Xinhua)", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Domestic/Local Mainstream Media", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Independent Bloggers/KOLs on Social Media", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
          ]
        },
        {
          "编号": "Q14",
          "类型": "单选",
          "题目": "When you see positive reports about 'Chinese Initiatives', you are more likely to consider it as (Select one)",
          "选项": ["Political propaganda by the Chinese government", "Objective reflection of China's real development"]
        },
        {
          "编号": "Q15",
          "类型": "多选",
          "题目": "What do you think are China's main motivations for proposing the Four Initiatives (GDI/GSI/GCI/GGI)? (Multiple selections allowed, max 3)",
          "选项": ["Promoting global common prosperity and peace", "Enhancing China's international influence and discourse power", "Challenging the existing Western-dominated international order", "Solving global challenges (e.g., poverty, security threats)", "Diverting domestic contradictions or economic pressure", "Paving the way for overseas expansion of Chinese enterprises", "None"]
        },
        {
          "编号": "Q16",
          "类型": "单选",
          "题目": "(If 'None' was not selected in Q15) Which of the above motivations do you think is the primary one?",
          "选项": ["Promoting global common prosperity and peace", "Enhancing China's international influence and discourse power", "Challenging the existing Western-dominated international order", "Solving global challenges (e.g., poverty, security threats)", "Diverting domestic contradictions or economic pressure", "Paving the way for overseas expansion of Chinese enterprises"]
        }
      ]
    },
    {
      "类别": "Four Initiatives Cognition Measurement",
      "子类别": "Global Development Initiative (GDI) — Development Priority",
      "问题": [
        {
          "编号": "Q17",
          "类型": "单选",
          "题目": "Have you heard of the 'Global Development Initiative' (GDI)?",
          "选项": ["Very familiar", "Heard of it, but don't know much", "Never heard of it"]
        },
        {
          "编号": "Q18",
          "类型": "单选",
          "题目": "Do you agree with the view that 'Development is the foundation for solving all problems, and the right to subsistence and development are the primary human rights'? (1 = Strongly Disagree, 5 = Strongly Agree)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q19",
          "类型": "单选",
          "题目": "Do you think the Western model (emphasizing political democratization first) applies to your country's development?",
          "选项": ["Very applicable", "Relatively applicable", "Average", "Not very applicable", "Completely inapplicable"]
        },
        {
          "编号": "Q20",
          "类型": "单选",
          "题目": "Do you think the Chinese model (emphasizing economic development first, strong government leadership) provides a feasible alternative for your country?",
          "选项": ["Provides a very good alternative", "Provides some reference", "Uncertain", "Not very suitable", "Completely unsuitable"]
        },
        {
          "编号": "Q21",
          "类型": "单选",
          "题目": "Your level of approval for the GDI concept of 'Adhering to development priority and people-centered approach' (1 = Strongly Disapprove, 5 = Strongly Approve)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q22",
          "类型": "单选",
          "题目": "Your expectation of GDI's practical effectiveness in solving global poverty, food security, etc. (1 = Very Useless, 5 = Very Useful)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q23",
          "类型": "单选",
          "题目": "Do you think GDI is an effective supplement to the UN 2030 Agenda for Sustainable Development (SDGs)?",
          "选项": ["Yes, a very effective supplement", "Yes, a supplement to some extent", "Uncertain", "No, not much relation", "No, even a deviation"]
        },
        {
          "编号": "Q24",
          "类型": "单选",
          "题目": "Do you support your country actively participating in Global Development Initiative (GDI) related projects?",
          "选项": ["Strongly support", "Relatively support", "Average", "Not very supportive", "Completely oppose"]
        }
      ]
    },
    {
      "子类别": "Global Security Initiative (GSI) — Security Paradigm",
      "问题": [
        {
          "编号": "Q25",
          "类型": "单选",
          "题目": "Your agreement with 'National sovereignty is absolute, and no country shall interfere in another's internal affairs' (1 = Strongly Disagree, 5 = Strongly Agree)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q26",
          "类型": "单选",
          "题目": "Your support for 'Humanitarian intervention can be taken against other countries to maintain human rights' (1 = Strongly Oppose, 5 = Strongly Support)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q27",
          "类型": "单选",
          "题目": "Feasibility of the GSI concept of 'Common security, opposing bloc confrontation' (1 = Completely Infeasible, 5 = Very Feasible)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q28",
          "类型": "单选",
          "题目": "Your agreement with the view 'Security is indivisible, sovereignty principle takes precedence over interventionism' (1 = Strongly Disagree, 5 = Strongly Agree)",
          "选项": ["1", "2", "3", "4", "5"]
        }
      ]
    },
    {
      "子类别": "Global Civilization Initiative (GCI) — Civilizational Relativism",
      "问题": [
        {
          "编号": "Q29",
          "类型": "单选",
          "题目": "Which view do you agree with more? (Select one)",
          "选项": ["Human rights standards are universal and apply to all countries and cultures", "Human rights standards are defined by cultural background, and different civilizations should have different interpretations"]
        },
        {
          "编号": "Q30",
          "类型": "单选",
          "题目": "Your certainty about the above choice (1 = Very Uncertain, 10 = Very Certain)",
          "选项": ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
        },
        {
          "编号": "Q31",
          "类型": "单选",
          "题目": "Your support for the view 'Modernization does not equal Westernization, and the right of each country to define its own civilization should be respected' (1 = Strongly Oppose, 5 = Strongly Support)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q32",
          "类型": "单选",
          "题目": "Your approval of the GCI concept of 'Equality of civilizations, mutual learning and inclusiveness' (1 = Strongly Disapprove, 5 = Strongly Approve)",
          "选项": ["1", "2", "3", "4", "5"]
        }
      ]
    },
    {
      "子类别": "Global Governance Initiative (GGI) — Procedural Justice",
      "问题": [
        {
          "编号": "Q33",
          "类型": "单选",
          "题目": "In the face of a global pandemic crisis, you prefer (1 = Completely prefer major power dominance, 5 = Completely prefer consultation within the UN framework)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q34",
          "类型": "单选",
          "题目": "In the face of a sovereign debt crisis, you prefer (1 = Completely prefer major power dominance, 5 = Completely prefer consultation within the UN framework)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q35",
          "类型": "单选",
          "题目": "In the face of AI weaponization regulation, you prefer (1 = Completely prefer major power dominance, 5 = Completely prefer consultation within the UN framework)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q36",
          "类型": "单选",
          "题目": "Necessity of GGI's 'Increasing the representation of developing countries' (1 = Completely Unnecessary, 5 = Very Necessary)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q37",
          "类型": "单选",
          "题目": "Your agreement with 'Extensive consultation, joint contribution and shared benefits, correcting international order dysfunction' (1 = Strongly Disagree, 5 = Strongly Agree)",
          "选项": ["1", "2", "3", "4", "5"]
        },
        {
          "编号": "Q38",
          "类型": "单选",
          "题目": "Your overall approval of the four-dimensional synergistic framework of 'Development-Security-Civilization-Governance' of the Four Initiatives (1 = Strongly Disapprove, 5 = Strongly Approve)",
          "选项": ["1", "2", "3", "4", "5"],
          "补充说明": "The Four Initiatives support each other, forming a complete system of 'Development as foundation, Security as guarantee, Civilization as bond, Governance as synergy'. Based on the 'Four-in-One' system research by scholars like Ye Chengcheng."
        }
      ]
    },
    {
      "类别": "Behavioral Intention Measurement",
      "问题": [
        {
          "编号": "Q39",
          "类型": "单选",
          "题目": "If given the opportunity, would you be willing to learn more about specific practice cases of the Four Initiatives (e.g., cooperation projects, cultural exchange activities)?",
          "选项": ["Very willing", "Relatively willing", "Uncertain", "Not very willing", "Completely unwilling"]
        },
        {
          "编号": "Q40",
          "类型": "单选",
          "题目": "Are you willing to share the concepts or practice cases of the Four Initiatives with family, friends, or colleagues?",
          "选项": ["Very willing", "Relatively willing", "Uncertain", "Not very willing", "Completely unwilling"]
        },
        {
          "编号": "Q41",
          "类型": "单选",
          "题目": "If your country/region participates in cooperation related to the Four Initiatives, would you be willing to participate (e.g., project work, volunteer service, cultural exchange)?",
          "选项": ["Very willing", "Relatively willing", "Uncertain", "Not very willing", "Completely unwilling"]
        }
      ]
    },
    {
      "类别": "Communication Satisfaction Measurement",
      "问题": [
        {
          "编号": "Q42",
          "类型": "单选",
          "题目": "Your satisfaction with the quality of information (accuracy, comprehensiveness, objectivity) about the Four Initiatives you currently know",
          "选项": ["Very satisfied", "Relatively satisfied", "Average", "Not very satisfied", "Very dissatisfied"]
        },
        {
          "编号": "Q43",
          "类型": "单选",
          "题目": "Your satisfaction with the convenience of obtaining information about the Four Initiatives (ease of finding, cost of access)",
          "选项": ["Very satisfied", "Relatively satisfied", "Average", "Not very satisfied", "Very dissatisfied"]
        },
        {
          "编号": "Q44",
          "类型": "单选",
          "题目": "Do you think the international communication of the Four Initiatives fully reflects the interests and concerns of your country/region?",
          "选项": ["Very fully", "Relatively fully", "Average", "Not very fully", "Completely insufficiently"]
        }
      ]
    },
    {
      "类别": "Open-ended Supplementary Feedback",
      "问题": [
        {
          "编号": "Q45",
          "类型": "单选+补充",
          "题目": "Do you have any questions or suggestions regarding the Four Initiatives (Development, Security, Civilization, Governance concepts)?",
          "选项": ["None", { "选项": "Yes", "补充": true }]
        },
        {
          "编号": "Q46",
          "类型": "单选+补充",
          "题目": "Which channels or methods do you think are more suitable for spreading such international initiatives to the global public (e.g., international conferences, social media, cooperative project practices)?",
          "选项": ["None", { "选项": "Yes", "补充": true }]
        },
        {
          "编号": "Q47",
          "类型": "单选+补充",
          "题目": "Are you willing to leave your email to receive future research summaries:",
          "选项": [{ "选项": "Yes", "补充": "Email: ________" }, "No"]
        },
        {
          "编号": "Q48",
          "类型": "单选",
          "题目": "Your evaluation of the experience of filling out this questionnaire:",
          "选项": ["Very good", "Relatively good", "Average", "Not very good", "Very bad"]
        }
      ]
    }
  ]
};
