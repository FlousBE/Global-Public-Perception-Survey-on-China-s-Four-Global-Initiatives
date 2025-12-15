import { SurveyData } from '../types';

export const DATA_ES: SurveyData = {
  "问卷信息": {
    "标题": "Encuesta de Percepción Pública Global sobre las Cuatro Iniciativas de China",
    "说明": "Este cuestionario tiene como objetivo comprender sistemáticamente la percepción, las actitudes y las intenciones de comportamiento del público global con respecto a las 'Iniciativa para el Desarrollo Global (IDG), Iniciativa para la Seguridad Global (ISG), Iniciativa para la Civilización Global (ICG) e Iniciativa para la Gobernanza Global (IGG)' propuestas por China.",
    "保密声明": "Toda la información del cuestionario es estrictamente confidencial y se utilizará únicamente para análisis académicos agregados; la información de identificación personal no será identificada ni divulgada individualmente.",
    "预计时间": "10 minutos",
    "完成奖励": "Puede dejar su correo electrónico voluntariamente para recibir un resumen de los resultados de la investigación."
  },
  "问题列表": [
    {
      "类别": "Información Básica del Encuestado",
      "问题": [
        {
          "编号": "Q1",
          "类型": "单选",
          "题目": "Su nacionalidad (por favor, seleccione su país de la siguiente lista)",
          "选项": [
            { "分组": "A", "选项": ["Tailandia", "Chile"] },
            { "分组": "B", "选项": ["Noruega", "Francia", "Finlandia", "Argentina", "Reino Unido", "España", "Italia", "Portugal", "Suecia", "Turquía", "Japón", "Países Bajos", "Bélgica", "Grecia", "Hungría", "República Checa"] },
            { "分组": "C", "选项": ["Sudáfrica", "Bosnia y Herzegovina", "Bután", "Austria", "Estados Unidos", "Malaui", "Etiopía", "Uganda", "Burundi", "Irán", "Azerbaiyán", "República Centroafricana", "Burkina Faso", "Irlanda", "Ucrania", "Egipto", "Sudán", "Argelia", "Ruanda", "Malí", "Nepal", "Indonesia", "Brasil", "Nigeria", "Kazajistán"] },
            { "分组": "D", "选项": ["Liberia", "Kirguistán", "Mongolia", "Hong Kong (China)", "Vietnam", "Laos", "Malasia", "Guinea", "República del Congo"] }
          ]
        },
        {
          "编号": "Q2",
          "类型": "单选",
          "题目": "Su edad",
          "选项": ["Menos de 18 años", "18-24 años", "25-34 años", "35-44 años", "45-54 años", "55-64 años", "65 años o más"]
        },
        {
          "编号": "Q3",
          "类型": "单选",
          "题目": "Su género",
          "选项": ["Masculino", "Femenino", "Otro"]
        },
        {
          "编号": "Q4",
          "类型": "单选",
          "题目": "Su nivel de ingresos mensuales personales (en USD)",
          "选项": ["1000 USD o menos", "1001-3000 USD", "3001-5000 USD", "5001-8000 USD", "8001 USD o más", "Sin ingresos fijos"]
        },
        {
          "编号": "Q5",
          "类型": "单选",
          "题目": "Su nivel educativo",
          "选项": ["Secundaria o inferior", "Técnico/Grado Asociado", "Grado/Licenciatura", "Maestría", "Doctorado o superior"]
        },
        {
          "编号": "Q6",
          "类型": "单选",
          "题目": "Su tipo de ocupación",
          "选项": ["Estudiante", "Empleado de empresa privada", "Funcionario público/Sector público", "Investigador/Educador", "Profesional de medios/comunicación", "Trabajador autónomo/Freelance", "Jubilado", "Desempleado/Buscando empleo", { "选项": "Otro", "补充": true }]
        },
        {
          "编号": "Q7",
          "类型": "单选",
          "题目": "Percibe la 'dependencia comercial integral' de su país respecto a China (Indicador objetivo: Volumen comercial con China / PIB)",
          "选项": ["Muy alta", "Alta", "Media", "Baja", "Muy baja"]
        },
        {
          "编号": "Q8",
          "类型": "评分",
          "题目": "Su actitud emocional general hacia China",
          "min": 1,
          "max": 10,
          "minLabel": "Muy negativa",
          "maxLabel": "Muy positiva"
        },
        {
          "编号": "Q9",
          "类型": "多选",
          "题目": "Principales canales que utiliza para obtener noticias internacionales/información sobre temas globales (Selección múltiple)",
          "选项": ["Noticias de televisión", "Periódicos/Revistas", "Redes sociales (ej. Facebook, Twitter, Douyin/TikTok, etc.)", "APPs de noticias (ej. BBC News, CNN, Xinhua, etc.)", "Conferencias internacionales/Anuncios oficiales", "Compartido por amigos/familiares/colegas", "Literatura académica/Informes de Think Tanks", "Actividades del Instituto Confucio", "Actividades comunitarias de empresas chinas", "Información relacionada con proyectos de asistencia/construcción locales", { "选项": "Otro", "补充": true }]
        },
        {
          "编号": "Q10",
          "类型": "单选",
          "题目": "Frecuencia con la que sigue temas de política internacional/gobernanza global (ej. cambio climático, cooperación internacional, seguridad global, etc.)",
          "选项": ["Casi nunca", "Ocasionalmente (1-2 veces al mes)", "Frecuentemente (1-2 veces a la semana)", "Constantemente (3 o más veces a la semana)"]
        },
        {
          "编号": "Q11",
          "类型": "单选",
          "题目": "Frecuencia con la que se encuentra con noticias/información internacional relacionada con China",
          "选项": ["Casi nunca", "Ocasionalmente (1-2 veces al mes)", "Frecuentemente (1-2 veces a la semana)", "Constantemente (3 o más veces a la semana)"]
        },
        {
          "编号": "Q12",
          "类型": "单选",
          "题目": "Nivel de estrechez de la cooperación entre su país/región y China (ej. comercio, infraestructura, intercambio cultural, etc.)",
          "选项": ["Muy estrecha", "Bastante estrecha", "Regular", "No muy estrecha", "Casi nula cooperación"]
        }
      ]
    },
    {
      "类别": "Medición de Confianza en la Fuente y Atribución",
      "问题": [
        {
          "编号": "Q13",
          "类型": "矩阵",
          "题目": "Por favor, califique su nivel de confianza en las siguientes fuentes/medios (1=Muy desconfianza, 10=Mucha confianza)",
          "选项": [
            { "信源": "Medios occidentales principales (ej. BBC, CNN, NYT, etc.)", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Medios oficiales chinos (ej. CGTN, Xinhua, etc.)", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Medios principales nacionales/locales", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
            { "信源": "Blogueros/KOLs independientes en redes sociales", "评分": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }
          ]
        },
        {
          "编号": "Q14",
          "类型": "单选",
          "题目": "Cuando ve noticias positivas sobre las 'Iniciativas de China', ¿a qué tiende a atribuirlo más? (Elija una de dos)",
          "选项": ["Propaganda política del gobierno chino", "Un reflejo objetivo del desarrollo real de China"]
        },
        {
          "编号": "Q15",
          "类型": "多选",
          "题目": "Cree que la principal motivación de China para proponer las Cuatro Iniciativas (IDG/ISG/ICG/IGG) es (Selección múltiple, límite 3)",
          "选项": ["Promover la prosperidad y la paz global común", "Aumentar la influencia internacional y el poder de discurso de China", "Desafiar el actual orden internacional dominado por Occidente", "Resolver desafíos globales (ej. pobreza, amenazas a la seguridad, etc.)", "Desviar conflictos internos o presiones económicas", "Preparar el camino para la expansión de empresas chinas en el extranjero", "Ninguna"]
        },
        {
          "编号": "Q16",
          "类型": "单选",
          "题目": "(Si no seleccionó 'Ninguna' en Q15) ¿Cuál cree que es la principal motivación de las anteriores?",
          "选项": ["Promover la prosperidad y la paz global común", "Aumentar la influencia internacional y el poder de discurso de China", "Desafiar el actual orden internacional dominado por Occidente", "Resolver desafíos globales (ej. pobreza, amenazas a la seguridad, etc.)", "Desviar conflictos internos o presiones económicas", "Preparar el camino para la expansión de empresas chinas en el extranjero"]
        }
      ]
    },
    {
      "类别": "Medición de la Percepción de las Cuatro Iniciativas",
      "子类别": "Iniciativa para el Desarrollo Global (IDG) - Prioridad al Desarrollo",
      "问题": [
        {
          "编号": "Q17",
          "类型": "单选",
          "题目": "¿Ha oído hablar de la 'Iniciativa para el Desarrollo Global' (IDG)?",
          "选项": ["Muy familiarizado", "He oído hablar, pero no sé mucho", "Nunca he oído hablar"]
        },
        {
          "编号": "Q18",
          "类型": "单选",
          "题目": "¿Está de acuerdo con la afirmación de que 'el desarrollo es la base para resolver todos los problemas, y los derechos a la supervivencia y al desarrollo son los derechos humanos primordiales'? (1 = Muy en desacuerdo, 5 = Muy de acuerdo)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q19",
          "类型": "单选",
          "题目": "¿Cree que el modelo occidental (que enfatiza la priorización de la democratización política) es aplicable al desarrollo de su país?",
          "选项": ["Muy aplicable", "Bastante aplicable", "Regular", "Poco aplicable", "Nada aplicable"]
        },
        {
          "编号": "Q20",
          "类型": "单选",
          "题目": "¿Cree que el modelo chino (que enfatiza la priorización del desarrollo económico y el fuerte liderazgo gubernamental) ofrece una alternativa viable para su país?",
          "选项": ["Ofrece una muy buena alternativa", "Ofrece cierta referencia", "No estoy seguro", "No es muy adecuado", "No es adecuado en absoluto"]
        },
        {
          "编号": "Q21",
          "类型": "单选",
          "题目": "Nivel de aprobación del concepto de la IDG de 'priorizar el desarrollo y centrarse en las personas' (1 = Muy en desacuerdo, 5 = Muy de acuerdo)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q22",
          "类型": "单选",
          "题目": "Expectativa de utilidad práctica de la IDG para resolver problemas como la pobreza global y la seguridad alimentaria (1 = Muy inútil, 5 = Muy útil)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q23",
          "类型": "单选",
          "题目": "¿Considera que la IDG es un complemento efectivo para la Agenda 2030 de la ONU para el Desarrollo Sostenible (ODS)?",
          "选项": ["Sí, un complemento muy efectivo", "Sí, un complemento hasta cierto punto", "No estoy seguro", "No, no está muy relacionado", "No, incluso se desvía"]
        },
        {
          "编号": "Q24",
          "类型": "单选",
          "题目": "¿Apoya que su país participe activamente en proyectos relacionados con la IDG?",
          "选项": ["Muy a favor", "Bastante a favor", "Neutral", "Poco a favor", "Totalmente en contra"]
        }
      ]
    },
    {
      "子类别": "Iniciativa para la Seguridad Global (ISG) - Paradigma de Seguridad",
      "问题": [
        {
          "编号": "Q25",
          "类型": "单选",
          "题目": "Nivel de acuerdo con la afirmación de que 'la soberanía nacional es absoluta y ningún país debe interferir en los asuntos internos de otros' (1 = Muy en desacuerdo, 5 = Muy de acuerdo)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q26",
          "类型": "单选",
          "题目": "Nivel de apoyo a la idea de que 'se puede recurrir a la intervención humanitaria en otros países para proteger los derechos humanos' (1 = Muy en contra, 5 = Muy a favor)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q27",
          "类型": "单选",
          "题目": "Viabilidad que percibe en el concepto de la ISG de 'seguridad común y oposición al enfrentamiento de bloques' (1 = Totalmente inviable, 5 = Muy viable)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q28",
          "类型": "单选",
          "题目": "Nivel de acuerdo con la afirmación de que 'la seguridad es indivisible y el principio de soberanía prevalece sobre el intervencionismo' (1 = Muy en desacuerdo, 5 = Muy de acuerdo)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        }
      ]
    },
    {
      "子类别": "Iniciativa para la Civilización Global (ICG) - Relativismo Civilizatorio",
      "问题": [
        {
          "编号": "Q29",
          "类型": "单选",
          "题目": "¿Con cuál de las siguientes afirmaciones está más de acuerdo? (Elija una de dos)",
          "选项": ["Los estándares de derechos humanos son universales y se aplican a todos los países y culturas", "Los estándares de derechos humanos son definidos por el contexto cultural, y las diferentes civilizaciones deben tener diferentes interpretaciones"]
        },
        {
          "编号": "Q30",
          "类型": "单选",
          "题目": "Nivel de certeza en su elección anterior (1 = Muy inseguro, 10 = Muy seguro)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos", "6 Puntos", "7 Puntos", "8 Puntos", "9 Puntos", "10 Puntos"]
        },
        {
          "编号": "Q31",
          "类型": "单选",
          "题目": "Nivel de apoyo a la afirmación de que 'la modernización no equivale a la occidentalización, y se debe respetar el derecho de cada país a definir su civilización' (1 = Muy en contra, 5 = Muy a favor)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q32",
          "类型": "单选",
          "题目": "Nivel de aprobación del concepto de la ICG de 'igualdad de civilizaciones, aprendizaje mutuo e inclusión' (1 = Muy en desacuerdo, 5 = Muy de acuerdo)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        }
      ]
    },
    {
      "子类别": "Iniciativa para la Gobernanza Global (IGG) - Justicia Procesal",
      "问题": [
        {
          "编号": "Q33",
          "类型": "单选",
          "题目": "Ante una crisis de pandemia global, ¿a qué tiende más? (1 = Tendencia total al liderazgo de grandes potencias, 5 = Tendencia total a la negociación en el marco de la ONU)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q34",
          "类型": "单选",
          "题目": "Ante una crisis de deuda soberana, ¿a qué tiende más? (1 = Tendencia total al liderazgo de grandes potencias, 5 = Tendencia total a la negociación en el marco de la ONU)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q35",
          "类型": "单选",
          "题目": "Ante la regulación de la militarización de la Inteligencia Artificial, ¿a qué tiende más? (1 = Tendencia total al liderazgo de grandes potencias, 5 = Tendencia total a la negociación en el marco de la ONU)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q36",
          "类型": "单选",
          "题目": "Necesidad que percibe en el concepto de la IGG de 'aumentar la representación de los países en desarrollo' (1 = Nada necesaria, 5 = Muy necesaria)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q37",
          "类型": "单选",
          "题目": "Nivel de acuerdo con la afirmación de 'consulta, contribución y beneficios compartidos, para corregir la disfunción del orden internacional' (1 = Muy en desacuerdo, 5 = Muy de acuerdo)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"]
        },
        {
          "编号": "Q38",
          "类型": "单选",
          "题目": "Nivel de aprobación general del marco de coordinación cuatripartito de las Cuatro Iniciativas: 'Desarrollo-Seguridad-Civilización-Gobernanza' (1 = Muy en desacuerdo, 5 = Muy de acuerdo)",
          "选项": ["1 Punto", "2 Puntos", "3 Puntos", "4 Puntos", "5 Puntos"],
          "补充说明": "Las Cuatro Iniciativas se apoyan mutuamente, formando un sistema completo de 'desarrollo como base, seguridad como garantía, civilización como vínculo y gobernanza como coordinación'. Esta conclusión se basa en la investigación del sistema 'cuatro en uno' de académicos como Ye Chengcheng."
        }
      ]
    },
    {
      "类别": "Medición de Intenciones de Comportamiento",
      "问题": [
        {
          "编号": "Q39",
          "类型": "单选",
          "题目": "Si tuviera la oportunidad, ¿estaría dispuesto a aprender más sobre casos prácticos de las Cuatro Iniciativas (ej. proyectos de cooperación, actividades de intercambio cultural, etc.)?",
          "选项": ["Muy dispuesto", "Algo dispuesto", "No estoy seguro", "Poco dispuesto", "Totalmente indispuesto"]
        },
        {
          "编号": "Q40",
          "类型": "单选",
          "题目": "¿Estaría dispuesto a compartir los conceptos o casos prácticos de las Cuatro Iniciativas con amigos, familiares o colegas?",
          "选项": ["Muy dispuesto", "Algo dispuesto", "No estoy seguro", "Poco dispuesto", "Totalmente indispuesto"]
        },
        {
          "编号": "Q41",
          "类型": "单选",
          "题目": "Si su país/región participara en la cooperación relacionada con las Cuatro Iniciativas, ¿estaría dispuesto a involucrarse (ej. trabajo en proyectos, voluntariado, intercambio cultural, etc.)?",
          "选项": ["Muy dispuesto", "Algo dispuesto", "No estoy seguro", "Poco dispuesto", "Totalmente indispuesto"]
        }
      ]
    },
    {
      "类别": "Medición de Satisfacción con la Comunicación",
      "问题": [
        {
          "编号": "Q42",
          "类型": "单选",
          "题目": "Nivel de satisfacción con la calidad de la información (precisión, exhaustividad, objetividad) que conoce actualmente sobre las Cuatro Iniciativas",
          "选项": ["Muy satisfecho", "Bastante satisfecho", "Regular", "Poco satisfecho", "Muy insatisfecho"]
        },
        {
          "编号": "Q43",
          "类型": "单选",
          "题目": "Nivel de satisfacción con la facilidad de acceso a la información sobre las Cuatro Iniciativas (facilidad para encontrarla, bajo coste de obtención)",
          "选项": ["Muy satisfecho", "Bastante satisfecho", "Regular", "Poco satisfecho", "Muy insatisfecho"]
        },
        {
          "编号": "Q44",
          "类型": "单选",
          "题目": "¿Cree que la comunicación internacional de las Cuatro Iniciativas refleja adecuadamente los intereses y preocupaciones de su país/región?",
          "选项": ["Muy adecuadamente", "Bastante adecuadamente", "Regularmente", "Poco adecuadamente", "Nada adecuadamente"]
        }
      ]
    },
    {
      "类别": "Comentarios Abiertos Adicionales",
      "问题": [
        {
          "编号": "Q45",
          "类型": "单选+补充",
          "题目": "¿Qué preguntas o sugerencias tiene sobre los conceptos de las Cuatro Iniciativas (desarrollo, seguridad, civilización, gobernanza)?",
          "选项": ["Ninguno", { "选项": "Sí", "补充": true }]
        },
        {
          "编号": "Q46",
          "类型": "单选+补充",
          "题目": "¿Qué canales o métodos cree que son más adecuados para comunicar este tipo de iniciativas internacionales al público global (ej. conferencias internacionales, redes sociales, práctica de proyectos de cooperación, etc.)?",
          "选项": ["Ninguno", { "选项": "Sí", "补充": true }]
        },
        {
          "编号": "Q47",
          "类型": "单选+补充",
          "题目": "¿Estaría dispuesto a dejar su correo electrónico para recibir un resumen de los futuros resultados de esta investigación?",
          "选项": [{ "选项": "Sí", "补充": "Email: ________" }, "No"]
        },
        {
          "编号": "Q48",
          "类型": "单选",
          "题目": "Su evaluación de la experiencia al completar este cuestionario:",
          "选项": ["Muy buena", "Bastante buena", "Regular", "No muy buena", "Muy mala"]
        }
      ]
    }
  ]
};