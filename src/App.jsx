import React, { useState, useEffect } from 'react';
import { Download, ExternalLink, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Shield, Brain, Award, Calendar, ArrowRight, Menu, X, Server, Briefcase, Users, Monitor, Wrench, Lock, FileCode, Globe, Key, Cloud, Terminal, Layers, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SiReact, SiNextdotjs, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiNodedotjs, SiExpress, SiMongodb, SiPostgresql, SiGit, SiGithub, SiPostman, SiLinux, SiDocker, SiSocketdotio, SiRedis, SiApachekafka, SiKubernetes } from 'react-icons/si';
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
      "Socket.io": <SiSocketdotio className="w-5 h-5" />,
      "JWT Authentication": <Key className="w-5 h-5" />,
      "Role-Based Access Control": <Lock className="w-5 h-5" />,
      "MongoDB": <SiMongodb className="w-5 h-5" />,
      "PostgreSQL": <SiPostgresql className="w-5 h-5" />,
      "Redis": <SiRedis className="w-5 h-5" />,
      "Kafka": <SiApachekafka className="w-5 h-5" />,
      "Docker": <SiDocker className="w-5 h-5" />,
      "Kubernetes": <SiKubernetes className="w-5 h-5" />,
      "Linux": <SiLinux className="w-5 h-5" />,
      "Web Application Security": <Shield className="w-5 h-5" />,
      "OWASP Top 10": <Shield className="w-5 h-5" />,
      "Vulnerability Assessment": <Shield className="w-5 h-5" />,
      "Git": <SiGit className="w-5 h-5" />,
      "GitHub": <SiGithub className="w-5 h-5" />,
      "Postman": <SiPostman className="w-5 h-5" />
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
      skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT Authentication", "Role-Based Access Control"]
    },
    {
      title: "Databases & Caching",
      icon: <Database className="w-6 h-6" />,
      color: "from-teal-500 to-cyan-500",
      bgColor: "from-teal-50 to-cyan-50",
      borderColor: "border-teal-200",
      skillColor: "text-teal-700",
      skillBg: "bg-white",
      skillBorder: "border-teal-300",
      skills: ["MongoDB", "PostgreSQL", "Redis"]
    },
    {
      title: "Distributed Systems & Messaging",
      icon: <Layers className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-50 to-red-50",
      borderColor: "border-orange-200",
      skillColor: "text-orange-600",
      skillBg: "bg-orange-50",
      skillBorder: "border-orange-200",
      skills: ["Kafka"]
    },
    {
      title: "DevOps & Infrastructure",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      borderColor: "border-green-200",
      skillColor: "text-green-600",
      skillBg: "bg-green-50",
      skillBorder: "border-green-200",
      skills: ["Docker", "Kubernetes", "Linux"]
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
      skills: ["Web Application Security", "OWASP Top 10", "Vulnerability Assessment"]
    },
    {
      title: "Tools",
      icon: <Wrench className="w-6 h-6" />,
      color: "from-indigo-500 to-purple-500",
      bgColor: "from-indigo-50 to-purple-50",
      borderColor: "border-indigo-200",
      skillColor: "text-indigo-600",
      skillBg: "bg-indigo-50",
      skillBorder: "border-indigo-200",
      skills: ["Git", "GitHub", "Postman"]
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
      role: "Open Source Contributor — Full Stack Development",
      company: "GirlScript Summer of Code (GSSoC 2025)",
      duration: "Jul 2025 – Present",
      description: "Contributing to community-driven open-source projects by implementing new features, fixing bugs, and improving overall application quality. Actively collaborating through pull requests, code reviews, and structured workflows while following best practices in full-stack development and code maintainability.",
      icon: <Github className="w-6 h-6" />,
      color: "from-blue-500 to-purple-500"
    },
    {
      role: "Design Team Lead",
      company: "Coding Cubs",
      duration: "Aug 2024 – Jan 2025",
      description: "Promoted from team member to lead role based on performance and ownership. Led UI/UX initiatives across multiple web projects, coordinated with developers, managed task distribution, and ensured consistent design quality and on-time delivery.",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      role: "Web Developer Intern",
      company: "Prodigy InfoTech",
      duration: "Sep 2024 – Oct 2024",
      description: "Worked on full-stack web development using the MERN stack, building responsive interfaces and implementing secure authentication flows. Followed clean coding practices and security-aware development principles while contributing to production-oriented features.",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Experience
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${exp.color} p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {exp.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-slate-600">
                      <span className="font-semibold text-slate-700">{exp.company}</span>
                      <span className="text-slate-400">•</span>
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Freelancing & Mentoring Section Component
const Freelancing = () => {
  return (
    <section id="freelancing" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Freelance & Mentoring Experience
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 transform hover:-translate-y-1">
            <div className="flex items-start gap-6">
              {/* Icon */}
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <Briefcase className="w-6 h-6" />
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                    Freelance Full-Stack Developer & Technical Mentor
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-slate-600">
                    <span>Sep 2023 – Present</span>
                    <span className="text-slate-400">•</span>
                    <span>Remote</span>
                  </div>
                </div>
                
                {/* Description */}
                <div className="space-y-4 mb-8">
                  <p className="text-lg text-slate-600 leading-relaxed">
                    I work with startups, founders, and individual clients to design and build secure, production-ready web applications. My work focuses on full-stack development using the MERN stack, delivering scalable systems with clean architecture, reliable APIs, and real-world features.
                  </p>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    My freelance projects include authentication systems, admin dashboards, real-time workflows, and payment-integrated applications. I've also built API-driven platforms, including an affiliate-based flight booking system integrating third-party services to automate business workflows.
                  </p>
                  
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Alongside development work, I mentor aspiring developers in full-stack development and application security fundamentals, guiding them through hands-on projects, real-world problem solving, and best practices used in production environments.
                  </p>
                </div>
                
                {/* Focus Areas */}
                <div className="pt-6 border-t border-slate-200">
                  <h4 className="text-xl font-bold text-slate-800 mb-4">
                    Focus Areas
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-600 leading-relaxed">Full-stack web applications with authentication, APIs, and real-time features</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-600 leading-relaxed">Security-aware development using OWASP principles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-2 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex-shrink-0"></div>
                      <span className="text-slate-600 leading-relaxed">Practical mentoring through project-based learning</span>
                    </li>
                  </ul>
                </div>
              </div>
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
      title: "Top Performer — VisionAVA Hackathon (Generative AI Track)",
      organization: "",
      year: "2025",
      description: "Recognized for building an AI-powered healthcare application integrating full-stack development with NLP and generative AI, evaluated for innovation, practical impact, and technical execution.",
      icon: <Award className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      title: "Certified Cybersecurity Analyst",
      organization: "Student Tribe",
      year: "2024",
      description: "Completed a structured cybersecurity training program covering networking fundamentals, web application security (OWASP), vulnerability assessment, penetration testing concepts, and risk management through hands-on labs.",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      title: "Networking & Systems Fundamentals",
      organization: "Cisco Networking Academy",
      year: "2023–2024",
      description: "Completed foundational certifications focused on computer networking concepts, routing and switching basics, and network simulation using Cisco Packet Tracer.",
      icon: <Database className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Achievements & Certifications
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-blue-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start gap-6">
                {/* Icon */}
                <div className={`bg-gradient-to-r ${achievement.color} p-4 rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  {achievement.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-slate-600">
                      {achievement.organization && (
                        <>
                          <span className="font-semibold text-slate-700">{achievement.organization}</span>
                          <span className="text-slate-400">•</span>
                        </>
                      )}
                      <span>{achievement.year}</span>
                    </div>
                  </div>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    {achievement.description}
                  </p>
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Send email using EmailJS
      // Using standard EmailJS template variable names
      const result = await emailjs.send(
        'service_5xrqexy', // Service ID
        'template_zf7qium', // Template ID
        {
          user_name: formData.name,
          user_email: formData.email,
          message: formData.message,
          reply_to: formData.email
        },
        'uq7o3-kx-ckVePfY5' // Public Key
      );

      console.log('EmailJS Success:', result);

      // Success
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      console.error('Error Status:', error.status);
      console.error('Error Text:', error.text);
      
      // Set error status - the UI will show appropriate message
      setSubmitStatus('error');
      
      // Reset error message after 8 seconds (longer for Gmail auth issues)
      setTimeout(() => {
        setSubmitStatus(null);
      }, 8000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-4">
            Let's Work Together
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            I work with startups, founders, and teams to build secure, scalable web applications and production-ready digital systems. If you're looking for someone who can design, build, and deliver reliable software, let's talk.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Contact Info & How I Can Help */}
            <div className="space-y-8">
              {/* Contact Section */}
              <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Contact
                </h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-lg text-white shadow-md flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">Email</div>
                      <a href="mailto:abhishek.j3094@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors duration-300">
                        abhishek.j3094@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-lg text-white shadow-md flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-700 mb-1">Location</div>
                      <div className="text-slate-600">Hyderabad, India (Remote-friendly)</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* How I Can Help */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  How I Can Help
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">Full-stack web application development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">Secure authentication, APIs, and real-time systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-600 leading-relaxed">Product-focused development for startups and founders</span>
                  </li>
                </ul>
              </div>
              
              {/* Social Links */}
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-slate-200">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">
                  Connect With Me
                </h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="tel:+916302160783" 
                    className="group bg-[#25d366] hover:bg-[#20ba5a] p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md"
                  >
                    <Phone className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/abhishek-jujjuvarapu-556899276" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#0077b5] hover:bg-[#005885] p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md"
                  >
                    <Linkedin className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </a>
                  <a 
                    href="https://github.com/Abhi-0930/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-[#24292e] hover:bg-[#1a1e22] p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md"
                  >
                    <Github className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </a>
                  <a 
                    href="mailto:abhishek.j3094@gmail.com" 
                    className="group bg-[#ea4335] hover:bg-[#d33b2c] p-4 rounded-xl transition-all duration-300 transform hover:scale-110 hover:shadow-lg shadow-md"
                  >
                    <Mail className="w-6 h-6 text-white group-hover:animate-pulse" />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Right Column - Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 relative">
              <h3 className="text-2xl font-bold text-slate-800 mb-2">
                Send a Message
              </h3>
              <p className="text-slate-600 mb-6">
                Use the form below to share details about your project or opportunity. I usually respond within 24–48 hours.
              </p>
              
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 animate-in slide-in-from-top duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-500 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-green-800 mb-1">Message Sent Successfully!</h4>
                      <p className="text-green-700">Your message has been submitted. I'll get back to you within 24–48 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 bg-gradient-to-r from-red-50 to-pink-50 border-2 border-red-200 rounded-xl p-6 animate-in slide-in-from-top duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-red-500 p-2 rounded-full flex-shrink-0">
                      <X className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-bold text-red-800 mb-1">Unable to Send Message</h4>
                      <p className="text-red-700 mb-2">There was an issue with the email service. Please contact me directly at:</p>
                      <a 
                        href="mailto:abhishek.j3094@gmail.com" 
                        className="text-blue-600 hover:text-blue-800 font-semibold underline"
                      >
                        abhishek.j3094@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-500 px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-500 px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message"
                    rows="6"
                    required
                    disabled={isSubmitting}
                    className="w-full bg-slate-50 text-slate-800 placeholder-slate-500 px-5 py-3.5 rounded-xl border border-slate-200 focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-all duration-300 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-slate-400 disabled:to-slate-500 text-white py-4 px-8 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:hover:scale-100 disabled:cursor-not-allowed flex items-center justify-center gap-3 group shadow-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
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