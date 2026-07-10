import { ProjectType, ComparisonCard } from "./types";

export const PROJECT_TYPES: ProjectType[] = [
  {
    id: "lavatorio",
    name: "Lavatório Esculpido",
    description: "Bancadas exclusivas com cubas esculpidas sob medida no porcelanato.",
    avgNaturalPrice: 0,
    avgPorcelainPrice: 0,
    iconName: "Droplet",
  },
  {
    id: "nicho",
    name: "Nicho Organizador",
    description: "Nichos embutidos de alto padrão para banheiros e áreas de banho.",
    avgNaturalPrice: 0,
    avgPorcelainPrice: 0,
    iconName: "Maximize2",
  },
  {
    id: "combo",
    name: "Combo Banheiro Completo",
    description: "Lavatório esculpido + Nicho combinando para o mesmo ambiente.",
    avgNaturalPrice: 0,
    avgPorcelainPrice: 0,
    iconName: "Sparkles",
  },
];

export interface ProjectEnvironment {
  id: string;
  name: string;
  description: string;
}

export const PROJECT_ENVIRONMENTS: ProjectEnvironment[] = [
  {
    id: "lavabo",
    name: "Lavabo ou Banheiro Social",
    description: "Projetos compactos e sofisticados com foco em cubas esculpidas e nichos sob medida.",
  },
  {
    id: "suite",
    name: "Banheiro Suíte / Master",
    description: "Bancadas extensas, cubas duplas esculpidas ou nichos organizadores de grande formato.",
  },
  {
    id: "servico",
    name: "Área de Serviço / Outros",
    description: "Tanques esculpidos em porcelanato ou nichos específicos para organização utilitária.",
  },
];


export const COMPARISONS: ComparisonCard[] = [
  {
    id: "nero-marquina",
    title: "Mármore Negro Lendário",
    stoneName: "Mármore Nero Marquina Natural (Importado)",
    stoneImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=600&q=80",
    stonePriceLabel: "Alta porosidade. Absorve vinhos, limão e gorduras em segundos, causando manchas irreversíveis. Sensível a riscos e opacidade precoce.",
    stoneWeakness: [
      "Mancha facilmente com ácidos cotidianos",
      "Alta porosidade (0.2% a 0.5% de absorção)",
      "Necessita impermeabilização anual",
      "Investimento altíssimo de importação"
    ],
    porcelainName: "Lâmina Nero Marquina Suprema",
    porcelainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    porcelainPriceLabel: "Mesmo preto profundo com veios brancos cristalinos. Zero porosidade (absorção < 0.05%). Resistência total a calor, riscos e produtos químicos.",
    porcelainStrengths: [
      "Absorção nula (não mancha nunca)",
      "Resistente a panelas quentes e riscos",
      "Fácil limpeza (apenas pano úmido)",
      "Investimento otimizado (economia de até 60%)"
    ],
    savingsPercentage: 60,
  },
  {
    id: "grafite-silk",
    title: "O Luxo do Carbono",
    stoneName: "Granito Escuro Premium (Escovado)",
    stoneImage: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=600&q=80",
    stonePriceLabel: "Textura bonita, porém áspera. Acumula resíduos orgânicos nas microfendas, gerando proliferação bacteriana e manchas esbranquiçadas difíceis de remover.",
    stoneWeakness: [
      "Microfendas que acumulam sujeira e bactérias",
      "Fácil aparecimento de manchas de cloro e sabão",
      "Visual pesado e juntas de dilatação largas",
      "Textura áspera de difícil higienização"
    ],
    porcelainName: "Porcelanato Silt Grafite Matte",
    porcelainImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&q=80",
    porcelainPriceLabel: "Toque acetinado ultra-sofisticado. Textura homogênea e higiênica. Juntas imperceptíveis de 1mm com resinas italianas coordenadas.",
    porcelainStrengths: [
      "Toque aveludado e uniforme",
      "Superfície 100% asséptica (antibacteriana)",
      "Juntas ultrafinas de 1mm niveladas",
      "Investimento inteligente e alta durabilidade"
    ],
    savingsPercentage: 55,
  },
  {
    id: "calacatta-black",
    title: "A Nobreza dos Veios Escuros",
    stoneName: "Quartzo ou Quartzioto Nero Luxo",
    stoneImage: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=600&q=80",
    stonePriceLabel: "Composto por resina plástica. Não suporta calor direto (derrete ou amarela com panelas quentes). Custo astronômico por marcas importadas.",
    stoneWeakness: [
      "Resina de poliéster deforma acima de 120°C",
      "Não suporta panelas quentes diretas",
      "Amarela sob raios UV (luz solar)",
      "Custo inacessível para grandes áreas"
    ],
    porcelainName: "Maxi-Slab Calacatta Midnight Gold",
    porcelainImage: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=600&q=80",
    porcelainPriceLabel: "Mineral 100% natural sinterizado sob 1200°C. Suporta calor direto de chamas e panelas sem alterar a cor ou estrutura. Proteção UV eterna.",
    porcelainStrengths: [
      "Incombustível (suporta fogo direto)",
      "Livre de resinas plásticas artificiais",
      "Estabilidade de cor vitalícia (Zero UV-damage)",
      "Placas contínuas de grande amplitude"
    ],
    savingsPercentage: 50,
  }
];

export const PHILOSOPHY_TEXTS = {
  quote: "A nobreza da pedra esculpida pelo tempo, aperfeiçoada pela precisão da engenharia moderna.",
  paragraphs: [
    "Historicamente, as pedras naturais escuras foram o símbolo supremo da arquitetura monumental. No entanto, o mármore escuro carrega uma vulnerabilidade inerente: sua composição de carbonato de cálcio é altamente suscetível a ataques químicos. Um simples gomo de limão ou uma taça de vinho tinto derramada em uma festa pode corroer o brilho e marcar para sempre uma bancada caríssima.",
    "A tecnologia do porcelanato em grandes formatos (Maxi-Slabs) rompeu essa limitação. Ao fundir minerais nobres sob pressões colossais e temperaturas superiores a 1200°C, a engenharia humana criou uma matéria-prima imune às fragilidades da natureza.",
    "Na nossa Porcelanataria Premium, elevamos essa tecnologia ao nível da alta costura. Cada corte, miter joint (45 graus) e reforço estrutural interno é executado por artesãos com décadas de experiência em engenharia de pedras. O resultado é uma peça de impacto visual idêntico ao mármore natural, mas com uma durabilidade indestrutível pensada para o uso diário real."
  ],
  scarcityTitle: "Artesanato Sob Demanda e Rigor Geométrico",
  scarcitySubtitle: "Por que limitamos nossa produção a apenas 6 projetos exclusivos por mês?",
  scarcityReason: "Para garantir que cada junção em 45 graus atinja a perfeição milimétrica, cada tampo passe por testes rigorosos de nivelamento a laser e cada cuba esculpida receba impermeabilização estrutural tripla. Não fazemos produção em massa. Esculpimos obras de arte funcionais."
};

export const INSTANT_BENEFITS = [
  {
    title: "Corte em 45° Perfeito",
    desc: "Bordas chanfradas milimetricamente com cola de resina coordenada para simular blocos maciços sem emendas visíveis.",
    icon: "Maximize2"
  },
  {
    title: "Estruturação em Alumínio",
    desc: "Estruturas internas leves em alumínio de grau aeronáutico ou fibra de vidro para evitar trincas por dilatação térmica.",
    icon: "ShieldAlert"
  },
  {
    title: "Absorção Zero (0,02%)",
    desc: "Praticamente imune a vinhos, cafés, molhos de tomate, óleos ou produtos de limpeza agressivos.",
    icon: "Award"
  }
];
