import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Shield, Brain, Award, Calendar, ArrowRight, Menu, X, Server, Briefcase, Users, Monitor, Wrench, Lock, FileCode, Globe, Key, Cloud, Terminal, Layers } from 'lucide-react';
import { SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiGithub, SiPostman, SiLinux, SiDocker } from 'react-icons/si';
import resume from './assets/MyResume.pdf'
import myimg from './assets/myimg.jpg'

// Hero Section Component
const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({ projects: 0, experience: 0, openSource: 0 });

  const targetCounts = { projects: 10, experience: 1, openSource: 3 };

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Counter animation effect
  useEffect(() => {
    if (isVisible) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepDuration = duration / steps;

      const timer = setInterval(() => {
        setCounts(prev => {
          const newCounts = { ...prev };
          let allComplete = true;

          Object.keys(targetCounts).forEach(key => {
            if (newCounts[key] < targetCounts[key]) {
              newCounts[key] = Math.min(
                newCounts[key] + Math.ceil(targetCounts[key] / steps),
                targetCounts[key]
              );
              allComplete = false;
            }
          });

          if (allComplete) {
            clearInterval(timer);
          }

          return newCounts;
        });
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className={`max-w-6xl mx-auto text-center transform transition-all duration-1000 pt-20 sm:pt-0 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Professional Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-slate-800 mb-4 tracking-tight">
              Abhishek
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-600 mb-4 min-h-[2.5rem] flex items-center justify-center">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Full Stack Developer
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
              Building secure, scalable web applications with modern full-stack technologies, practical application security, and AI-powered features for real-world use.
            </p>
          </div>
          
          {/* Professional Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">
                {counts.projects}+
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Production-Grade Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">
                {counts.experience}+
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Year Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-slate-800">
                {counts.openSource}+
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wide">Open-Source Projects Contributed</div>
            </div>
          </div>
          
          {/* Professional CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a 
              href={resume}
              download="Abhishek-Resume.pdf"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3 min-w-[200px]"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </a>
            <a 
              href="#contact"
              className="group border-2 border-slate-300 text-slate-700 hover:border-slate-400 hover:text-slate-800 px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[200px] bg-white/50 backdrop-blur-sm"
            >
              <Mail size={20} className="group-hover:animate-pulse" />
              Let's Connect
            </a>
          </div>
          

        </div>
      </div>
    </section>
  );
};

// About Section Component
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Professional Photo */}
            <div className="relative mt-16 lg:mt-12">
              <div className="relative z-10">
                <img 
                  src= {myimg} 
                  alt="Abhishek - Full Stack Developer"
                  className="w-full h-[600px] object-cover rounded-2xl shadow-2xl"
                  style={{ objectPosition: 'center 20%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full opacity-20 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full opacity-20 blur-xl"></div>
            </div>
            
            {/* About Content */}
            <div className="space-y-6 pt-12 lg:pt-20">
              <div className="space-y-4">
                <p className="text-lg text-slate-600 leading-relaxed">
                  I'm a full-stack developer with hands-on experience building production-grade web applications using the MERN stack and Next.js. My work focuses on designing clean user interfaces, developing robust backend APIs, and delivering scalable systems built for real-world use.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I follow a security-aware development approach, applying practical application security principles to ensure reliability, data protection, and long-term maintainability. This allows me to build systems that are not only functional, but also safe to operate in production environments.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  I've worked on a range of projects across open source, freelance, and startup-oriented development, including AI-powered tools, admin dashboards, and real-time web platforms. I value clear problem-solving, thoughtful architecture, and building solutions that align with real business needs.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2 text-purple-600">
                  <MapPin size={18} />
                  <span className="text-slate-700">Hyderabad, India</span>
                </div>
                <div className="flex items-center gap-2 text-purple-600">
                  <Calendar size={18} />
                  <span className="text-slate-700">Open to new challenges</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const Skills = () => {
  // Icon mapping for individual skills with brand logos
  const getSkillIcon = (skill) => {
    const iconMap = {
      "React.js": <SiReact className="w-5 h-5" />,
      "Next.js": <SiNextdotjs className="w-5 h-5" />,
      "JavaScript (ES6+)": <SiJavascript className="w-5 h-5" />,
      "HTML": <SiHtml5 className="w-5 h-5" />,
      "CSS": <SiCss3 className="w-5 h-5" />,
      "Tailwind CSS": <SiTailwindcss className="w-5 h-5" />,
      "Node.js": <SiNodedotjs className="w-5 h-5" />,
      "Express.js": <SiExpress className="w-5 h-5" />,
      "REST APIs": <Globe className="w-5 h-5" />,
      "JWT Authentication": <Key className="w-5 h-5" />,
      "MongoDB": <SiMongodb className="w-5 h-5" />,
      "PostgreSQL": <SiPostgresql className="w-5 h-5" />,
      "Cloudinary": <Cloud className="w-5 h-5" />,
      "Web Application Security (OWASP Top 10)": <Shield className="w-5 h-5" />,
      "Secure Authentication": <Lock className="w-5 h-5" />,
      "Access Control": <Shield className="w-5 h-5" />,
      "Git": <SiGit className="w-5 h-5" />,
      "GitHub": <SiGithub className="w-5 h-5" />,
      "Postman": <SiPostman className="w-5 h-5" />,
      "Linux": <SiLinux className="w-5 h-5" />,
      "Docker": <SiDocker className="w-5 h-5" />
    };
    return iconMap[skill] || <Code className="w-5 h-5" />;
  };

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Monitor className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "from-blue-50 to-cyan-50",
      borderColor: "border-blue-200",
      skillColor: "text-blue-600",
      skillBg: "bg-blue-50",
      skillBorder: "border-blue-200",
      skills: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML", "CSS", "Tailwind CSS"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-50 to-pink-50",
      borderColor: "border-purple-200",
      skillColor: "text-purple-600",
      skillBg: "bg-purple-50",
      skillBorder: "border-purple-200",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication"]
    },
    {
      title: "Databases & Storage",
      icon: <Database className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      skillColor: "text-teal-700",
      skillBg: "bg-white",
      skillBorder: "border-teal-300",
      skills: ["MongoDB", "PostgreSQL", "Cloudinary"]
    },
    {
      title: "Application Security",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-orange-500",
      bgColor: "from-red-50 to-orange-50",
      borderColor: "border-red-200",
      skillColor: "text-red-600",
      skillBg: "bg-red-50",
      skillBorder: "border-red-200",
      skills: ["Web Application Security (OWASP Top 10)", "Secure Authentication", "Access Control"]
    },
    {
      title: "Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      skillColor: "text-indigo-600",
      skillBg: "bg-indigo-50",
      skillBorder: "border-indigo-200",
      skills: ["Git", "GitHub", "Postman", "Linux", "Docker"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Technical Skills
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-r ${category.bgColor} p-6 rounded-2xl border-2 ${category.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group`}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`bg-gradient-to-r ${category.color} p-3 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className={`group/skill ${category.skillBg} ${category.skillBorder} border-2 rounded-xl px-4 py-3 flex items-center gap-2.5 hover:shadow-lg hover:scale-105 hover:-translate-y-0.5 transition-all duration-300 cursor-default`}
                    >
                      <div className={`${category.skillColor} group-hover/skill:scale-110 transition-transform duration-300`}>
                        {getSkillIcon(skill)}
                      </div>
                      <span className={`${category.skillColor} font-semibold text-sm`}>
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Optional Focus Statement */}
          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-slate-50 to-purple-50 rounded-2xl p-8 border border-slate-200">
              <p className="text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Focused on building production-ready systems with clean architecture, performance optimization, and security-aware development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const Projects = () => {
  const projects = [
    {
      title: "Empathy AI — AI-Powered Mental Health Support Platform",
      category: "Full-Stack • AI",
      description: "Built a production-ready AI-driven mental health support platform with conversational assistance, sentiment awareness, and secure data handling.",
      features: [
        "Designed full-stack architecture with secure authentication and protected user data flows",
        "Integrated LLM-based conversational logic with contextual memory and response handling",
        "Implemented backend APIs for chat history, session management, and analytics",
        "Focused on privacy-aware design and application security best practices"
      ],
      tech: ["React", "Node.js", "Python", "Flask", "MongoDB", "OpenAI API"]
    },
    {
      title: "LuxeStore — Full-Stack E-Commerce Platform",
      category: "Full-Stack",
      description: "Developed a scalable e-commerce system with user and admin dashboards, real-time cart management, and secure payment processing.",
      features: [
        "Built role-based authentication with Google OAuth and JWT",
        "Implemented Stripe payment flow and order lifecycle management",
        "Designed admin workflows for product, order, and user management",
        "Optimized frontend performance and backend API reliability"
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: "Bite Buzz — Food Delivery Platform",
      category: "Full-Stack",
      description: "End-to-end food delivery application supporting restaurant management, real-time order tracking, and customer workflows.",
      features: [
        "Implemented real-time order status updates and admin dashboards",
        "Built secure APIs for order creation, tracking, and updates",
        "Integrated payment processing and role-based access control",
        "Designed scalable backend services for concurrent usage"
      ],
      tech: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"]
    },
    {
      title: "NeuroScan AI — Alzheimer's Detection Platform",
      category: "AI • Full-Stack",
      description: "AI-powered web platform for Alzheimer's risk analysis using medical imaging and predictive models.",
      features: [
        "Built ML inference pipelines for MRI-based predictions",
        "Integrated AI insights with user-friendly visual dashboards",
        "Designed secure backend services for medical data handling",
        "Focused on performance and reliability for AI-driven workflows"
      ],
      tech: ["Python", "TensorFlow", "FastAPI", "PostgreSQL", "Gemini API"]
    },
    {
      title: "Resume AI — AI Resume Builder",
      category: "Automation & AI",
      description: "AI-powered resume generation and tailoring platform for job-specific optimization.",
      features: [
        "Implemented resume parsing and job description matching logic",
        "Built PDF export and formatting workflows",
        "Designed scalable backend APIs for AI processing",
        "Deployed end-to-end system with cloud-ready architecture"
      ],
      tech: ["Next.js", "MongoDB", "OpenAI API", "Tailwind CSS"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Featured Projects
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300"
            >
              {/* Header */}
              <div className="mb-6">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold inline-block">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              
              {/* Description */}
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                {project.description}
              </p>
              
              {/* Features */}
              <ul className="space-y-3 mb-8">
                {project.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
              
              {/* Tech Stack */}
              <div className="pt-6 border-t border-slate-200">
                <div className="mb-4">
                  <span className="text-sm font-semibold text-slate-700 uppercase tracking-wider">Tech Stack</span>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-slate-50 text-slate-700 px-4 py-2 rounded-lg text-sm font-medium border border-slate-200 hover:bg-slate-100 hover:border-slate-300 hover:shadow-sm transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-50 via-blue-50 to-purple-50 rounded-2xl p-10 max-w-3xl mx-auto border border-slate-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              More Projects
            </h3>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              I've built additional AI tools, automation workflows, and experimental products across healthcare, content creation, and startup ideation.
            </p>
            <a 
              href="https://github.com/Abhi-0930/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              <span>👉 View all projects on GitHub</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const Experience = () => {
  const experiences = [
    {
      company: "GirlScript Summer of Code 2025",
      role: "Open Source Contributor",
      duration: "July 2025 – Present",
      description: "Contributing to community-driven open-source projects under GSSoC '25. Implementing features, fixing bugs, improving documentation and accessibility, and collaborating through code reviews using Full Stack Development."
    },
    {
      company: "Coding Cubs",
      role: "Design Team Lead",
      duration: "Aug 2024 – Jan 2025",
      description: "Promoted from team member to Design Team Lead, where I led UI/UX design efforts, coordinated with developers, and ensured timely execution of design deliverables. Oversaw team collaboration, task distribution, and design quality across multiple web-based projects."
    },
    {
      company: "Prodigy InfoTech",
      role: "Web Developer Intern",
      duration: "Sep 2024 – Oct 2024",
      description: "Completed a 2-month remote internship focused on full-stack web development using the MERN stack. Built responsive user interfaces, implemented secure authentication, and followed best practices for writing clean, maintainable, and security-conscious code."
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800">
          Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-purple-200">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full"></div>
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-800">{exp.role}</h3>
                    <span className="text-purple-600 font-medium">{exp.duration}</span>
                  </div>
                  <h4 className="text-lg text-purple-600 mb-3">{exp.company}</h4>
                  <p className="text-slate-600">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Freelancing & Mentoring Section Component
const Freelancing = () => {
  return (
    <section id="freelancing" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Freelancing & Mentoring
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Empowering clients and students through professional web development services and comprehensive technical training.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 p-8 md:p-10">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
              <div className="flex items-center gap-4 mb-4 md:mb-0">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-xl shadow-lg">
                  <Briefcase className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-800">
                    Freelance Web Developer & Mentor
                  </h3>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-purple-600 font-semibold">Ongoing</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Description */}
            <div className="space-y-6 mb-8">
              <p className="text-lg text-slate-600 leading-relaxed">
                As a Freelance Web Developer and Cybersecurity Trainer, I deliver professional web solutions and mentorship to clients and learners across the globe. I specialize in building secure, scalable full-stack applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) with a strong focus on performance, reliability, and security.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                My freelance work includes developing authentication systems, real-time applications, and API-driven platforms featuring live order tracking, chat functionality, and secure payment integrations. I also founded and managed Arihs Tour, an affiliate-based flight booking platform where I integrated Trip.com APIs to automate ticket sales and streamline booking workflows.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                In parallel, I've mentored over <span className="font-semibold text-blue-600">30 students</span> in cybersecurity and full-stack development, guiding them through real-world projects, hands-on exercises, and problem-solving approaches that build both technical skill and confidence.
              </p>
            </div>
            
            {/* Professional Focus */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border border-blue-100 mb-8">
              <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Brain className="w-5 h-5 text-purple-600" />
                Professional Focus
              </h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <p className="text-slate-700 leading-relaxed">
                    Building secure, high-performance full-stack applications with real-time features and API integrations.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <p className="text-slate-700 leading-relaxed">
                    Providing hands-on mentorship in cybersecurity, OWASP fundamentals, and practical web development.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Skills & Technologies */}
            <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-600" />
                Key Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'React.js', 'Node.js', 'Express.js', 'MongoDB', 'Next.js', 'JWT Authentication',
                  'REST APIs', 'Socket.io', 'Stripe Payments', 'Figma', 'Docker',
                  'Git/GitHub', 'Cybersecurity (OWASP)', 'Ethical Hacking', 'SOC Operations'
                ].map((skill, index) => (
                  <span 
                    key={index}
                    className="bg-white text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm border border-blue-100 hover:shadow-md hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-slate-600 font-medium">Students Mentored</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">Multiple</div>
              <div className="text-slate-600 font-medium">Client Projects</div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">MERN</div>
              <div className="text-slate-600 font-medium">Stack Specialist</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Achievements Section Component
const Achievements = () => {
  const achievements = [
    {
      title: "VisionAVA Hackathon Top Performer",
      description: "Recognized for developing an innovative healthcare solution leveraging the MERN stack, NLP, and Generative AI.",
      icon: <Award className="w-8 h-8" />,
      category: "Competition",
      year: "2025"
    },
    {
      title: "Student Tribe Certified - Cybersecurity",
      description: "Practical and theoretical knowledge in cybersecurity covering core concepts such as networking, ethical hacking, security protocols, penetration testing, soc  and risk management.",
      icon: <Shield className="w-8 h-8" />,
      category: "Certification",
      year: "2024"
    },
    {
      title: "Cisco Packet Tracer",
      description: "Gained hands-on experience in configuring routers, switches, and simulating secure, scalable network topologies using Cisco Packet Tracer.",
      icon: <Brain className="w-8 h-8" />,
      category: "Certification",
      year: "2024"
    },
    {
      title: "Networking Basics",
      description: "Learned the concepts of networking and how to use the command line to configure routers and switches.",
      icon: <Database className="w-8 h-8" />,
      category: "Certification",
      year: "2023"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Recognition for excellence in technology, security, and innovation across various domains.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {achievements.map((achievement, index) => (
            <div key={index} className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
              <div className="relative bg-white rounded-2xl m-0.5 h-full flex flex-col">
                <div className="p-8 flex-1 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white p-4 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {achievement.icon}
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                            {achievement.category}
                          </span>
                          <span className="text-slate-400 text-sm font-medium">
                            {achievement.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors duration-300">
                          {achievement.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed mb-6 flex-1">
                    {achievement.description}
                  </p>
                  
                  {/* Bottom Decoration */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-500">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium">Verified</span>
                    </div>
                    <div className="text-slate-400 text-sm">
                      <span className="font-medium">Achievement #{index + 1}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </section>
  );
};

// Contact Section Component
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
    const mailtoLink = `mailto:abhishek.j3094@gmail.com?subject=${subject}&body=${body}`;
    
    // Open email client
    window.open(mailtoLink, '_blank');
    
    // Clear form
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 text-slate-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f1f5f9' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/40 to-purple-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-gradient-to-tr from-purple-200/40 to-pink-200/40 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-purple-600 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm always excited to collaborate on innovative projects 
            and create amazing digital experiences.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Get In Touch
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed">
                Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
                I'd love to hear from you. Let's create something amazing together!
              </p>
            </div>
            
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-600 font-medium">Email</div>
                  <div className="text-slate-800 font-semibold">abhishek.j3094@gmail.com</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-600 font-medium">Phone</div>
                  <div className="text-slate-800 font-semibold">+91 63021 60783</div>
                </div>
              </div>
              
              <div className="group flex items-center gap-4 p-4 bg-white/60 backdrop-blur-sm rounded-xl hover:bg-white/80 transition-all duration-300 shadow-lg">
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-purple-600 font-medium">Location</div>
                  <div className="text-slate-800 font-semibold">Hyderabad, India</div>
                </div>
              </div>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/abhishek-jujjuvarapu-556899276" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md">
                  <Linkedin className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
                <a href="https://github.com/Abhi-0930/" className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md">
                  <Github className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
                <a href="mailto:abhishek.j3094@gmail.com" className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md">
                  <Mail className="w-6 h-6 text-white group-hover:animate-pulse" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send a Message</h3>
            <div className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-white/60 text-slate-800 placeholder-slate-500 px-6 py-4 rounded-xl border border-slate-200 focus:border-purple-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full bg-white/60 text-slate-800 placeholder-slate-500 px-6 py-4 rounded-xl border border-slate-200 focus:border-purple-400 focus:outline-none transition-all duration-300 backdrop-blur-sm"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows="5"
                  className="w-full bg-white/60 text-slate-800 placeholder-slate-500 px-6 py-4 rounded-xl border border-slate-200 focus:border-purple-400 focus:outline-none transition-all duration-300 backdrop-blur-sm resize-none"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                ></textarea>
              </div>
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-3 group shadow-lg"
              >
                <span>Send Message</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-slate-200 text-center">
          <p className="text-slate-500">
            © 2025 Abhishek. All rights reserved. 
          </p>
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const Education = () => {
  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Education
          </h2>
        </div>

        {/* Education Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-slate-800 mb-1">
                  Bachelor of Technology (B.Tech)
                </h3>
                <p className="text-lg text-blue-600 font-semibold mb-2">
                  Minor in Artificial Intelligence
                </p>
                <p className="text-slate-600 font-medium">
                  Anurag University, Hyderabad
                </p>
              </div>
              <div className="mt-4 lg:mt-0 text-right">
                <div className="text-lg text-slate-600 font-semibold">
                  2022 – 2026
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Navigation Component
const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#education', label: 'Education' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#freelancing', label: 'Freelancing' },
    { href: '#achievements', label: 'Achievements' },
    { href: '#contact', label: 'Contact' }
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-200/50' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <div className="font-bold text-xl bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Portfolio.
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative px-5 py-2.5 rounded-xl font-medium text-slate-700 hover:text-blue-600 transition-all duration-300 group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-4/5 transition-all duration-300 rounded-full"></div>
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-100 hover:bg-slate-200 transition-colors duration-300"
            >
              <div className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-1'
              }`}></div>
              <div className={`absolute w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}></div>
              <div className={`w-6 h-0.5 bg-slate-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-1'
              }`}></div>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-slate-200/50 bg-white/95 backdrop-blur-xl">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-slate-700 hover:text-blue-600 hover:bg-slate-50 rounded-xl transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Experience />
      <Freelancing />
      <Achievements />
      <Contact />
    </div>
  );
};

export default App;