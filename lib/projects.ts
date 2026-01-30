export interface Project {
    id: string
    slug: string
    title: string
    description: string
    longDescription: string
    stack: string[]
    image: string
    githubUrl?: string
    liveUrl?: string
  }
  
  export const projects: Project[] = [
    {
      id: 'expense-tracker',
      slug: 'expense-tracker',
      title: 'Expense Tracker',
      description: 'Analytics dashboard with OCR receipt scanning.',
      longDescription: 'A comprehensive expense tracking application featuring an intuitive analytics dashboard and advanced OCR receipt scanning capabilities. Built with modern web technologies to provide seamless financial management.',
      stack: ['Next.js', 'TypeScript', 'Tesseract OCR', 'MongoDB'],
      image: '/projects/expense-tracker.jpg',
    },
    {
      id: 'ai-verification',
      slug: 'ai-verification-system',
      title: 'AI Verification System',
      description: 'Multi-model pipeline to detect hallucinations in LLMs.',
      longDescription: 'An advanced AI verification system that uses a multi-model pipeline to detect and prevent hallucinations in Large Language Models. Leverages AWS infrastructure and OpenRouter API to ensure model reliability and accuracy.',
      stack: ['React', 'Node.js', 'AWS', 'OpenRouter'],
      image: '/projects/ai-verification.jpg',
    },
    {
      id: 'small-shell',
      slug: 'small-shell',
      title: 'Small Shell',
      description: 'Custom Unix shell with I/O redirection and process control.',
      longDescription: 'A custom-built Unix shell implementation featuring I/O redirection, process control, and job management. Developed using C and Linux system APIs to provide a deep understanding of operating system internals.',
      stack: ['C', 'Linux API'],
      image: '/projects/small-shell.jpg',
    },
    {
      id: 'nba-pei',
      slug: 'nba-player-efficiency-index',
      title: 'NBA Player Efficiency Index',
      description: 'Data pipeline calculating player efficiency scores.',
      longDescription: 'A comprehensive data pipeline that calculates and analyzes NBA player efficiency scores. Processes large datasets using Python and PostgreSQL to generate insights into player performance metrics.',
      stack: ['Python', 'SQL', 'PostgreSQL'],
      image: '/projects/nba-pei.jpg',
    },
  ]
  
  export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((project) => project.slug === slug)
  }
  
  export function getAllProjectSlugs(): string[] {
    return projects.map((project) => project.slug)
  }
  