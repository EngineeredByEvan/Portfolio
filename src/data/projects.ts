export interface Project {
  slug: string;
  title: string;
  description: string;
  techs: string[];
  caseStudy?: {
    challenge: string;
    solution: string;
    results: string;
  };
}

export const projects: Project[] = [
  {
    slug: 'vineguard',
    title: 'VineGuard Precision Systems',
    description: 'An IoT-based smart farming solution...',
    techs: ['ESP32','LoRa','AWS','React','TypeScript'],
    caseStudy: {
      challenge: 'Sensors in vineyards had limited range and battery life.',
      solution: 'Developed LoRa-based nodes with optimized power profiles and AWS ingestion pipelines.',
      results: 'Achieved 5× range improvement and 20% power savings, enabling 2-week unattended deployments.',
    }
  },
  {
    slug: 'portfolio-site',
    title: 'Personal Portfolio Website',
    description: 'My personal website showcasing my work...',
    techs: ['Next.js','TypeScript','Tailwind CSS','Framer Motion'],
    caseStudy: {
      challenge: 'Needed a modern, fast site without vendor lock-in.',
      solution: 'Built with Next.js on Vercel, using Tailwind for styling and Framer Motion for animations.',
      results: 'Reduced load time to <1s and increased visitor engagement by 50%.',
    }
  },
  {
    slug: 'ml-stock-predictor',
    title: 'Machine Learning Stock Predictor',
    description: 'An LSTM model for stock price forecasting.',
    techs: ['Python','TensorFlow','LSTM','Pandas'],
    caseStudy: {
      challenge: 'Financial data is noisy and non-stationary.',
      solution: 'Applied data normalization, feature engineering, and a stacked LSTM architecture.',
      results: 'Improved prediction accuracy from 52% to 68% on hold-out data.',
    }
  },
];
