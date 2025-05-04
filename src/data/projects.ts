export interface Project {
  slug: string;
  title: string;
  description: string;
  techs: string[];
  logo?: string;
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
    description: 'An IoT-powered vineyard monitoring system with AI-driven insights for optimizing irrigation, canopy management, and disease prevention.',
    techs: ['ESP32', 'LoRa', 'AWS', 'React', 'TypeScript'],
    logo: 'VineGuardLogo.png',
    caseStudy: {
      challenge: 'Vineyards struggle with unpredictable weather, fungal disease pressure, and inefficient irrigation — all impacting grape quality and yield. Many growers lack real-time, zone-specific data to make informed decisions.',
      solution: 'Developed a modular, solar-powered sensor node using ESP32 and LoRa. Integrated soil moisture, light (lux), humidity, temperature, pressure, and optional leaf wetness sensors. The system transmits environmental data to a central LoRa gateway, which syncs with AWS for analytics and alerts. GDD, MPI, and canopy density metrics are calculated and visualized on a web dashboard.',
      results: 'Reduce water use by up to 20%, enabled early mildew prevention through MPI alerts, and improved canopy light balance using lux-based thinning recommendations. Pilot feedback confirmed improved decision-making, easier compliance with sustainability certifications, and ROI through labor savings and spray optimization.'
    }
  },
  {
    slug: 'portfolio-site',
    title: 'Personal Portfolio Website',
    description: 'My personal website showcasing my work...',
    techs: ['Next.js','TypeScript','Tailwind CSS','Framer Motion'],
    logo: 'PortfolioLogo.png',
    caseStudy: {
      challenge: 'Needed to host a modern, fast site to showcase information about myself.',
      solution: 'Built with Next.js on Vercel, using Tailwind for styling and Framer Motion for animations.',
      results: 'Have a very quick, visually appealing personal portfolio website to showcase my work.',
    }
  },
  {
    slug: 'ml-stock-predictor',
    title: 'Machine Learning Stock Predictor',
    description: 'An LSTM model for stock price forecasting.',
    techs: ['Python','TensorFlow','LSTM','Pandas', 'NumPy', 'MatplotLib'],
    caseStudy: {
      challenge: 'LSTM models are hard to tune for noisy time-series data like stock prices.',
      solution: 'Used TensorFlow to build LSTM models for both stock prediction',
      results: 'Stock predictor reached moderate accuracy and successfully captured general trends.',
    }
  },
  {
    slug: 'smartbasket',
    title: 'SmartBasket',
    description: 'An AI-driven shopping assistant that predicts your next purchase based on past behavior, built as a full-stack application with integrated ML.',
    techs: ['React', 'FastAPI', 'PostgreSQL', 'TensorFlow', 'Scikit-learn', 'Redis'],
    logo: 'SmartBasketLogo.png',
    caseStudy: {
      challenge: 'Customers often experience friction during checkout and miss common items during shopping. Prediction-based personalization was lacking in traditional retail environments.',
      solution: 'Designed a neural network using TensorFlow to predict a user’s next likely item. Built a full-stack system with a React frontend, FastAPI backend, PostgreSQL for session logs, Redis caching, and RESTful API routes. Data was preprocessed into item sequences for training, and JWT was used for secure user management.',
      results: 'Achieved 13.7% top-3 prediction accuracy using minimal context. Created a responsive, user-centric interface to test predictions live. Identified future improvements including richer metadata, class balancing, and transitioning to LSTM or attention-based models.'
    }
  },
  {
    slug: 'hopper',
    title: 'HoppeR',
    description: 'A full-stack HR <-> Employee communication and ticketing application to improve conflict resolution, provide information efficiently, and communicate instantly.',
    techs: ['TypeScript', 'Docker', 'MongoDB', 'Socket.io', 'Angular', 'AI Integration' ],
    logo: 'HoppeRLogo.png',
    caseStudy: {
      challenge: 'HR -> Employee communication is often one-sided and lacks engagement.',
      solution: 'Develop a web application that allows employees to efficiently submit concerns to HR, find FAQ information, and communicate in real-time with HR.',
      results: 'Application provides clear ticket tracking and updating, an FAQ AI chatbot, and real-time chat with HR for urgent matters.',
    }
  }
];
