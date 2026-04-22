export type Project = {
  slug: string;
  repo: string;
  name: string;
  description: { en: string; pt: string };
  tech: string[];
  repoUrl: string;
  liveUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    slug: 'social-growth-engine',
    repo: 'ViniciusmDias/social-growth-engine',
    name: 'Social Growth Engine',
    description: {
      en: 'Twitter/X API v2 integration service for social growth automation.',
      pt: 'Serviço de integração com a API v2 do Twitter/X para automação de crescimento social.',
    },
    tech: ['TypeScript', 'Node.js', 'Twitter API v2'],
    repoUrl: 'https://github.com/ViniciusmDias/social-growth-engine',
    featured: true,
  },
  {
    slug: 'weather-forecast',
    repo: 'ViniciusmDias/weather-forecast',
    name: 'Weather Forecast',
    description: {
      en: 'Global weather forecast with temperature, humidity, and heat index for the next 6 hours.',
      pt: 'Previsão do tempo global com temperatura, umidade e sensação térmica para as próximas 6 horas.',
    },
    tech: ['TypeScript', 'React', 'Weather API'],
    repoUrl: 'https://github.com/ViniciusmDias/weather-forecast',
    liveUrl: 'https://viniciusdias-weatherforecast.netlify.app/',
    featured: true,
  },
  {
    slug: 'clepher-qualification-test',
    repo: 'ViniciusmDias/clepher-qualification-test',
    name: 'Clepher Qualification Test',
    description: {
      en: 'Small React app displaying data with Tailwind CSS, built as a technical qualification test.',
      pt: 'App React pequeno exibindo dados com Tailwind CSS, construído como teste técnico de qualificação.',
    },
    tech: ['TypeScript', 'React', 'Tailwind CSS'],
    repoUrl: 'https://github.com/ViniciusmDias/clepher-qualification-test',
    liveUrl: 'https://clepher-test-01.netlify.app/',
    featured: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
