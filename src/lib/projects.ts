export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  detailImages: string[];
  githubUrl?: string;
  liveUrl?: string;
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Modern E-Commerce Platform",
    category: "Web Development",
    description: "A fully responsive e-commerce platform with integrated payment system and inventory management. Built with React and Node.js backend, featuring custom animations and a seamless checkout process. The platform includes advanced filtering, real-time inventory updates, and comprehensive analytics.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API", "Redux", "Framer Motion"],
    imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1728",
    detailImages: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426&h=1728",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=3882&h=2500",
      "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=5304&h=3500"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Responsive design",
      "Integrated payment system",
      "Real-time inventory updates",
      "Advanced filtering",
      "Custom animations"
    ]
  },
  {
    id: 2,
    title: "Financial Analytics Dashboard",
    category: "Data Visualization",
    description: "Interactive financial dashboard that visualizes complex data sets in real-time. Allows users to track investments, analyze market trends, and make data-driven decisions through intuitive charts and graphs. Features include customizable widgets, data export options, and predictive analytics.",
    technologies: ["D3.js", "Vue.js", "Python", "Flask", "TensorFlow", "WebSockets"],
    imageUrl: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=6000&h=4000",
    detailImages: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=6000&h=4000",
      "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=5760&h=3840",
      "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=6052&h=4035"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Real-time data visualization",
      "Customizable widgets",
      "Predictive analytics",
      "Data export options",
      "Intuitive charts and graphs"
    ]
  },
  {
    id: 3,
    title: "Health & Fitness Mobile App",
    category: "Mobile Development",
    description: "A comprehensive health tracking application that helps users monitor fitness goals, nutrition intake, and sleep patterns. Features include workout routines, meal planning, and progress visualization. The app uses machine learning to provide personalized recommendations based on user behavior and goals.",
    technologies: ["React Native", "Firebase", "Redux", "Health API", "GraphQL", "Machine Learning"],
    imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=7952&h=5304",
    detailImages: [
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=7952&h=5304",
      "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=8256&h=5504",
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=5760&h=3840"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Workout routines",
      "Meal planning",
      "Progress visualization",
      "Personalized recommendations",
      "Sleep pattern tracking"
    ]
  },
  {
    id: 4,
    title: "Smart Home Automation System",
    category: "IoT Development",
    description: "An integrated system for controlling home devices through a single interface. Users can manage lighting, temperature, security, and entertainment systems remotely via web or mobile applications. The system includes voice command integration, energy usage analytics, and automated routines based on user habits.",
    technologies: ["IoT", "JavaScript", "Python", "MQTT", "Node-RED", "TensorFlow Lite"],
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=3543&h=2365",
    detailImages: [
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=3543&h=2365",
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=4076&h=2712",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=5530&h=3687"
    ],
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    features: [
      "Voice command integration",
      "Energy usage analytics",
      "Automated routines",
      "Remote device control",
      "Single interface for all devices"
    ]
  },
  {
    id: 5,
    title: "Creative Horizon",
    category: "Design",
    description: "A visionary project exploring new creative dimensions.",
    technologies: ["Figma", "Illustrator"],
    imageUrl: "https://picsum.photos/seed/creative/800/600",
    detailImages: [
      "https://picsum.photos/seed/screenshot1/800/600",
      "https://picsum.photos/seed/screenshot2/800/600"
    ],
    githubUrl: "https://github.com/example/creative-horizon",
    liveUrl: "https://example.com/creative-horizon",
    features: [
      "Innovative design concepts",
      "Cross-platform compatibility",
      "User-friendly interface",
      "High-quality visuals",
      "Collaborative tools"
    ]
  }
];

export const categories = Array.from(new Set(projects.map(project => project.category)));
