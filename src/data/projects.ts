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
    techs: ['C++', 'Python', 'ESP32', 'LoRa', 'AWS', 'React', 'TypeScript'],
    logo: 'VineGuardLogo.png',
    caseStudy: {
      challenge: 'Vineyards struggle with unpredictable weather, fungal disease pressure, and inefficient irrigation — all impacting grape quality and yield. Many growers lack real-time, zone-specific data to make informed decisions.',
      solution: 'Developing a modular, solar-powered sensor node using ESP32 and LoRa. Integrating soil moisture, light (lux), humidity, temperature, pressure, and leaf wetness sensors. The system will transmit environmental data to a central LoRa gateway, which syncs with AWS for analytics and alerts. GDD, MPI, and canopy density metrics will be calculated and visualized on a web dashboard.',
      results: 'Projected to reduce water use by up to 20%, prevent early mildew through MPI alerts, and improved canopy light balance using lux-based thinning recommendations. Preparing for a pilot test—anticipating improved decision-making, easier compliance with sustainability certifications, and a proven ROI through labor savings, spray optimization, increased yeild, and improved grape quality.'
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
    logo: 'StockPrediction.png',
    caseStudy: {
      challenge: 'Create an LSTM model to predict stock prices.',
      solution: 'Used TensorFlow to build LSTM models for stock prediction',
      results: 'Stock predictor reached moderate accuracy and successfully captured general trends.',
    }
  },
  {
    slug: 'smartbasket',
    title: 'SmartBasket',
    description: 'An AI-driven shopping assistant that predicts your next purchase based on past behavior, built as a full-stack application with integrated ML.',
    techs: ['TypeScript', 'React', 'FastAPI', 'PostgreSQL', 'TensorFlow', 'Scikit-learn', 'Redis'],
    logo: 'SmartBasketLogo.png',
    caseStudy: {
      challenge: 'Customers often experience friction during checkout and miss common items during shopping. Prediction-based personalized shopping can enhance the experience.',
      solution: 'Built a neural network using TensorFlow to predict a user’s next likely item. Built a full-stack system with a React frontend, FastAPI backend, PostgreSQL for session logs, Redis caching, and RESTful API routes. JWT was used for secure user management',
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
      challenge: 'HR and Employee communication is often one-sided and lacks engagement.',
      solution: 'Developed a web application that allows employees to efficiently submit concerns to HR, find FAQ information, and communicate in real-time with HR.',
      results: 'Application provides clear ticket tracking and updating, an FAQ AI chatbot, and real-time chat with HR for urgent matters.',
    }
  }
];
