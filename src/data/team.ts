export type Ownership = {
  title: string;
  responsibilities: string[];
  deliverables: string[];
  deadlines: Record<string, string>;
  collaboration: string;
};

export type TeamMember = {
  id: number;
  name: string;
  role: string;
  accent: 'cyan' | 'violet' | 'green';
  accentColor: string;
  tag: string;
  skills: string[];
  about: string;
  ownership: Ownership;
  image: string;
  social: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    website?: string;
  };
};

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Nikhilesh',
    role: 'Frontend Developer & UI/UX Designer',
    accent: 'cyan',
    accentColor: '#06B6D4',
    tag: 'THE INTERFACE',
    skills: ['React', 'TypeScript', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'UI/UX Design', 'Responsive Design', 'GSAP', 'Framer Motion', 'Interactive Web Design', 'Design Systems'],
    about: 'I design and build interfaces where great visuals meet smooth interaction. From the first wireframe to the final animation, I focus on making the web feel intuitive, responsive and alive.',
    ownership: {
      title: 'Project & Technical Lead',
      responsibilities: ['Define technical requirements and project scope', 'Break project into clear tasks and milestones', 'Coordinate with Jayanth and Meera on deliverables', 'Track progress and ensure deadlines are met', 'Review technical decisions and code quality', 'Resolve blockers and unblock team members', 'Ensure all components work together properly', 'Final technical review before deployment'],
      deliverables: ['Technical requirements document', 'Task breakdown with milestones', 'Project timeline with deadlines', 'Code review reports', 'Final technical sign-off'],
      deadlines: { 'Requirements & Task Breakdown': 'Week 1', 'Technical Review 1': 'Week 2', 'Integration Review': 'Week 3', 'Final Technical Sign-off': 'Week 4' },
      collaboration: 'Works closely with Meera on implementation and Jayanth on requirements and content.',
    },
    image: '/placeholder/team/nikhilesh%202.jpeg',
    social: {
      github: 'https://github.com/enikhileshgoud-bit',
      linkedin: 'https://www.linkedin.com/in/nikhilesh-edigi-81b68342b?',
      instagram: 'https://instagram.com/nameisnikhi_',
    },
  },
  {
    id: 2,
    name: 'Jayanth',
    role: 'Backend Developer',
    accent: 'violet',
    accentColor: '#8B5CF6',
    tag: 'THE ENGINE',
    skills: ['Node.js', 'Express', 'REST APIs', 'Databases', 'Authentication', 'Server Architecture', 'API Integration', 'Cloud Services', 'Security', 'Performance Optimization'],
    about: 'I build the systems behind the experience. From APIs and databases to authentication and scalable infrastructure, I make sure everything works reliably beneath the interface.',
    ownership: {
      title: 'Research, Content & Product Support',
      responsibilities: ['Conduct research and gather requirements', 'Prepare content and assets for the website', 'Document project structure and decisions', 'Analyze competitors and similar products', 'Provide Meera with required information and assets', 'Support Nikhilesh with project coordination', 'Handle product support tasks as needed', 'Final content review before launch'],
      deliverables: ['Research report and requirements summary', 'Content assets and copy for website', 'Project documentation', 'Competitor analysis report', 'Support documentation'],
      deadlines: { 'Research & Requirements': 'Week 1', 'Content Preparation': 'Week 2', 'Documentation Complete': 'Week 3', 'Final Content Review': 'Week 4' },
      collaboration: 'Works with Nikhilesh on requirements and Meera on content and assets.',
    },
    image: '/placeholder/team/jay.jpeg',
    social: {
      github: 'https://github.com/jayanth36951',
      linkedin: 'https://www.linkedin.com/in/jayanth-chilakaraju-88073633a/',
      instagram: 'https://instagram.com/call__me__jay_',
    },
  },
  {
    id: 3,
    name: 'Meera',
    role: 'Bot & Automation Developer',
    accent: 'green',
    accentColor: '#A3E635',
    tag: 'THE MOVEMENT',
    skills: ['Python', 'AI Chatbots', 'Telegram Bot Development', 'Discord Bot Development', 'API Integration', 'After Effects', 'Web Automation', 'Workflow Automation', 'AI/LLM Integration', 'Database Integration', 'Bot Deployment'],
    about:'I turn ideas into intelligent interactions. Through AI, bots, automation, and seamless API integrations, I build smart digital solutions that communicate, automate tasks, and make everyday workflows more efficient.',

    ownership: {
      title: 'Web Development Lead',
      responsibilities: ['Own complete web development work', 'Build website architecture and structure', 'Implement frontend development', 'Handle backend integration', 'Ensure responsive design across all devices', 'Perform testing and bug fixing', 'Deploy and maintain the website', 'Improve performance and optimization', 'Ensure website is functional, polished, and ready for final delivery'],
      deliverables: ['Complete, functional website', 'Responsive design implementation', 'All frontend components', 'Backend integration completed', 'Tested and bug-free code', 'Deployed live website', 'Performance optimization report'],
      deadlines: { 'Website Architecture & Setup': 'Week 1', 'Frontend Development Complete': 'Week 2', 'Backend Integration & Testing': 'Week 3', 'Final Polish & Deployment': 'Week 4' },
      collaboration: 'Works with Nikhilesh on technical direction and Jayanth on content and requirements.',
    },
    image: '/placeholder/team/meera.jpeg',
    social: {
      github: 'https://github.com/Shaik-Nagulmeera',
      linkedin: 'https://www.linkedin.com/in/shaik-nagulmeera-44058b338',
      instagram: 'https://instagram.com/leeeezz._',
    },
  },
];