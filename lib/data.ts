import {
  Bot,
  CloudCog,
  Code2,
  LayoutPanelLeft,
  Megaphone,
  MonitorSmartphone,
  Palette,
  ServerCog,
  Sparkles,
  Video,
} from 'lucide-react';

export const site = {
  name: 'FDE Engineers',
  shortName: 'FDE',
  tagline: 'Forward deployed engineering, product design and digital growth.',
  description:
    'A compact engineering and growth team delivering premium websites, AI workflows, cloud systems, mobile experiences, brand-ready interfaces, digital marketing and product stories that look credible in front of real clients.',
  email: 'marrianilkumar19@gmail.com',
  phone: '+91 93855 93876',
  phoneRaw: '+919385593876',
  location: 'India · Remote delivery worldwide',
};

export const navItems = [
  { label: 'Work', href: '#projects' },
  { label: 'Marketing', href: '#marketing' },
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Team', href: '#team' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
];

export const stats = [
  { value: '6', label: 'Featured client-facing product stories' },
  { value: '3', label: 'Core specialists working as one team' },
  { value: 'Web · AI · Cloud · Growth', label: 'Cross-functional delivery under one roof' },
  { value: 'Design → Launch → Marketing', label: 'Support beyond development' },
];

export const capabilityGroups = [
  {
    title: 'Web & Product Engineering',
    description: 'Fast, polished customer experiences and business software built for production — not just prototypes.',
    icon: LayoutPanelLeft,
    items: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    size: 'wide',
  },
  {
    title: 'AI & Automation',
    description: 'LLM applications, RAG, agent workflows and integrations that remove repetitive operational work.',
    icon: Bot,
    items: ['LLMs', 'RAG', 'AI Agents', 'FastAPI', 'Integrations'],
    size: 'standard',
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deployment, CI/CD, monitoring and reliable cloud delivery with practical production ownership.',
    icon: CloudCog,
    items: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Monitoring'],
    size: 'standard',
  },
  {
    title: 'Mobile Experiences',
    description: 'Responsive and mobile-first products designed around real user journeys, field workflows and speed.',
    icon: MonitorSmartphone,
    items: ['Android', 'iOS', 'Responsive UX', 'APIs'],
    size: 'standard',
  },
  {
    title: 'Brand, UI & Creative',
    description: 'Distinct interfaces, visual systems and media that make technically strong products feel equally credible.',
    icon: Palette,
    items: ['UI/UX', 'Branding', 'Motion', 'Video'],
    size: 'standard',
  },
  {
    title: 'Digital Marketing & Growth',
    description: 'SEO, paid campaigns, social media systems and analytics connected to product, content and conversion goals.',
    icon: Megaphone,
    items: ['SEO', 'Paid Media', 'Social Content', 'Analytics'],
    size: 'wide',
  },
];

export const services = [
  { title: 'Web Development', description: 'Responsive websites, portals and custom web applications.', icon: Code2 },
  { title: 'Mobile App Development', description: 'Modern Android and iOS experiences.', icon: MonitorSmartphone },
  { title: 'AI & Business Automation', description: 'RAG, agents and workflow automation.', icon: Sparkles },
  { title: 'Cloud & Technical Support', description: 'Deployment, maintenance and monitoring.', icon: ServerCog },
  { title: 'Digital Marketing', description: 'SEO, paid campaigns, growth strategy and performance marketing.', icon: Megaphone },
  { title: 'Creative Media', description: 'Brand systems, video, ad creatives and campaign assets.', icon: Video },
];

export const featuredProjects = [
  {
    name: 'Zenzerflow',
    url: 'https://www.zenzerflow.com',
    category: 'Technology & Digital Solutions',
    kicker: 'Business-first digital platform',
    description:
      'A technology platform that brings web, mobile, custom software, AI automation and growth services into one clear business-facing experience.',
    highlights: ['Business positioning', 'Service architecture', 'Conversion-focused UX'],
    stack: ['Next.js', 'TypeScript', 'Product UX'],
    image: '/projects/fde-studio-hero-ai.png',
    imageAlt: 'Product team collaborating in a premium technology studio',
    tone: 'lime',
    result: 'One platform. Multiple digital capabilities.',
  },
  {
    name: 'Wash On Wheels',
    url: 'https://www.washonwheelscarcare.in/',
    category: 'Doorstep Car Care Platform',
    kicker: 'Booking → tracking → completion',
    description:
      'A production service-booking product for doorstep detailing and battery care with service selection, location capture, admin control, status tracking and offline completion flow.',
    highlights: ['Multi-service booking', 'Operational status flow', 'Admin-managed pricing'],
    stack: ['Full Stack', 'Location', 'Admin UX'],
    image: '/projects/wash-on-wheels-ai.png',
    imageAlt: 'Premium car receiving a foam wash',
    tone: 'cyan',
    result: 'A service business turned into a trackable product flow.',
  },
  {
    name: 'Tyent India',
    url: 'https://www.tyent.co.in/',
    category: 'E-commerce & Product Marketing',
    kicker: 'Premium product storytelling',
    description:
      'A conversion-led commerce experience for alkaline water ionizers with clear product education, comparison-friendly layouts and a premium purchase journey.',
    highlights: ['Product education', 'Comparison UX', 'Premium commerce'],
    stack: ['E-commerce', 'Content UX', 'Conversion'],
    image: '/projects/tyent-india-ai.png',
    imageAlt: 'Premium water ionizer and product comparison visual',
    tone: 'blue',
    result: 'Complex product details made easier to understand and buy.',
  },
  {
    name: 'Pear Glamp',
    url: 'https://pearglamp.in',
    category: 'Luxury Hospitality Experience',
    kicker: 'Immersive stay discovery',
    description:
      'A cinematic hospitality website shaped around mood, stay discovery, gallery storytelling and booking intent for a premium glamping experience.',
    highlights: ['Experience-led story', 'Visual immersion', 'Booking journey'],
    stack: ['Hospitality UX', 'Motion', 'Responsive'],
    image: '/projects/pear-glamp-ai.png',
    imageAlt: 'Luxury glamping domes with a dramatic sunset setting',
    tone: 'orange',
    result: 'A stay experience that starts before the guest arrives.',
  },
  {
    name: 'Yashmala Fashion',
    url: 'https://yashmalafashion.vercel.app/',
    category: 'Fashion Brand Experience',
    kicker: 'Collection-first visual commerce',
    description:
      'A fashion presentation experience built to make collections feel editorial, premium and easy to browse across modern devices.',
    highlights: ['Editorial styling', 'Collection discovery', 'Mobile-first visuals'],
    stack: ['Brand UI', 'Responsive', 'Merchandising'],
    image: '/projects/yashmala-fashion-ai.png',
    imageAlt: 'Premium fashion editorial inside a luxury boutique',
    tone: 'pink',
    result: 'A stronger digital showroom for a visual-first brand.',
  },
  {
    name: 'Vizag360',
    url: 'https://vizag360-mobile.onrender.com/',
    category: 'AI Travel Companion · In Progress',
    kicker: 'Local discovery with an AI layer',
    description:
      'An AI-assisted travel companion concept focused on city discovery, itinerary planning and a guided mobile experience for people exploring Vizag.',
    highlights: ['AI itinerary concept', 'Local discovery', 'Mobile product direction'],
    stack: ['AI', 'Travel UX', 'Mobile'],
    image: '/projects/vizag360-ai.png',
    imageAlt: 'Coastal view of Visakhapatnam in Andhra Pradesh with a travel app',
    tone: 'violet',
    result: 'Turning local knowledge into a guided travel product.',
  },
];

export const marketingHighlights = [
  {
    title: 'Performance Marketing',
    description: 'Campaign setup, paid media planning and optimization across awareness, lead generation and conversion funnels.',
  },
  {
    title: 'Social Media & Content',
    description: 'Creative planning, post systems, ad creatives, reels concepts and content calendars aligned to the brand voice.',
  },
  {
    title: 'SEO & Visibility',
    description: 'On-page structure, landing pages, keyword planning and technical SEO basics that strengthen discoverability.',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Campaign dashboards, audience insights and feedback loops that turn marketing work into measurable decisions.',
  },
];

export const marketingMetrics = [
  { label: 'Growth stack', value: 'SEO · Ads · Content · Analytics' },
  { label: 'Marketing outputs', value: 'Landing pages, social creatives, campaign systems' },
  { label: 'What improves', value: 'Traffic quality, visibility, conversion intent' },
];

export const differentiators = [
  {
    title: 'Better first impression',
    description: 'Cleaner storytelling, richer visuals and stronger content make the portfolio feel more serious to clients.',
  },
  {
    title: 'Realistic project framing',
    description: 'Project sections now feel like case studies instead of plain cards, with more context about what was built and why it matters.',
  },
  {
    title: 'Growth-minded delivery',
    description: 'Digital marketing is treated as a real part of the offer, not a side note added at the end.',
  },
];

export const valuePoints = [
  'Premium UI with realistic project storytelling and stronger visual hierarchy',
  'Engineering, cloud, AI, creative and digital marketing in one coordinated workflow',
  'More dynamic interactions including scroll progress, hover depth, motion layers and a custom scrollbar',
  'Small-team responsiveness with polished production quality and better client-facing content',
];

export const team = [
  {
    name: 'Marri Anilkumar',
    role: 'Lead Engineer · AI & Data',
    image: '/team/anilkumar.png',
    bio: 'Builds intelligent products across Python backends, data pipelines and LLM-powered workflows — translating business problems into practical systems.',
    skills: ['Python', 'LLMs', 'RAG', 'AI Agents', 'Data Engineering'],
    code: 'AI / DATA',
  },
  {
    name: 'Renish R',
    role: 'Cloud / DevOps · Frontend & Creative',
    image: '/team/renish.png',
    bio: 'Owns cloud delivery, CI/CD, monitoring and production readiness while supporting polished frontend, campaign and creative execution.',
    skills: ['AWS', 'Azure', 'Docker', 'CI/CD', 'Monitoring', 'Creative'],
    code: 'CLOUD / OPS',
  },
  {
    name: 'Bhanu Priya',
    role: 'Full Stack Engineer',
    image: '/team/bhanu-priya.jpg',
    bio: 'Delivers product experiences end-to-end, connecting thoughtful interfaces with scalable backend implementation and reliable data flows.',
    skills: ['React', 'Next.js', 'Node.js', 'APIs', 'PostgreSQL'],
    code: 'FULL STACK',
  },
];

export const process = [
  {
    step: '01',
    title: 'Understand the real workflow',
    description: 'We map users, operations, constraints and success criteria before choosing architecture or visual direction.',
  },
  {
    step: '02',
    title: 'Prototype the right path',
    description: 'We turn requirements into product flows, technical decisions and a visual system that can be tested early.',
  },
  {
    step: '03',
    title: 'Build in tight loops',
    description: 'We ship in visible increments, keep feedback close and connect frontend, backend, automation and infrastructure as one system.',
  },
  {
    step: '04',
    title: 'Launch, observe, improve',
    description: 'We deploy, monitor, resolve issues and continue evolving the product based on usage and business priorities.',
  },
];

export const techMarquee = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Python',
  'FastAPI',
  'PostgreSQL',
  'LLMs',
  'RAG',
  'AI Agents',
  'AWS',
  'Azure',
  'Docker',
  'CI/CD',
  'UI/UX',
  'SEO',
  'Paid Media',
  'Social Media',
  'Content Systems',
  'Analytics',
  'Growth',
];
