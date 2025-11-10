// Database engines supported by CrudCloud
export const DATABASE_ENGINES = [
  {
    id: 'mysql',
    name: 'MySQL',
    icon: '🐬',
    description: 'The most popular open-source relational database management system',
    color: 'from-blue-500 to-blue-700',
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    icon: '🐘',
    description: 'The world\'s most advanced open-source relational database',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    icon: '🍃',
    description: 'Document-oriented NoSQL database for modern applications',
    color: 'from-green-500 to-green-700',
  },
  {
    id: 'redis',
    name: 'Redis',
    icon: '⚡',
    description: 'Ultra-fast in-memory data structure store',
    color: 'from-red-500 to-red-700',
  },
  {
    id: 'sqlserver',
    name: 'SQL Server',
    icon: '🔷',
    description: 'Microsoft\'s enterprise-grade relational database',
    color: 'from-blue-500 to-purple-700',
  },
  {
    id: 'cassandra',
    name: 'Cassandra',
    icon: '💎',
    description: 'Distributed NoSQL database for high scalability',
    color: 'from-purple-500 to-pink-700',
  },
];

// Pricing plans
export const PRICING_PLANS = [
  {
    id: 'free',
    name: 'Free',
    price: 0,
    instances: 2,
    features: [
      'Up to 2 instances',
      'Auto-generated names',
      'Email support',
      'Basic engine access',
    ],
    recommended: false,
  },
  {
    id: 'standard',
    name: 'Standard',
    price: 19,
    instances: 5,
    features: [
      'Up to 5 instances',
      'Custom names',
      'Priority support',
      'All engines available',
      'Password rotation',
    ],
    recommended: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 49,
    instances: 10,
    features: [
      'Up to 10 instances',
      'Custom names',
      '24/7 Support',
      'All engines available',
      'Password rotation',
      'Automatic backups',
      'Advanced monitoring',
    ],
    recommended: false,
  },
];

// Features
export const FEATURES = [
  {
    icon: '🚀',
    title: 'Instant Deploy',
    description: 'Create your databases in seconds with ready-to-use Docker containers.',
  },
  {
    icon: '🔒',
    title: 'Guaranteed Security',
    description: 'Encrypted credentials, password rotation, and controlled access.',
  },
  {
    icon: '⚙️',
    title: 'Complete Management',
    description: 'Create, pause, resume, and delete instances from an intuitive dashboard.',
  },
  {
    icon: '💳',
    title: 'Flexible Payments',
    description: 'Plans tailored to your needs with Mercado Pago integration.',
  },
  {
    icon: '📊',
    title: 'Multi-Engine',
    description: 'Access to MySQL, PostgreSQL, MongoDB, Redis, SQL Server, and Cassandra.',
  },
  {
    icon: '🌐',
    title: 'Cloud Native',
    description: 'Deployed on VPS with high availability and scalability.',
  },
];
