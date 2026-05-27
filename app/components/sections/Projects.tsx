'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Automation Testing Framework',
    category: 'QA Automation',
    description:
      'Enterprise-grade automation testing framework using Selenium WebdriverIO with Page Object Model architecture and BDD Gherkin syntax.',
    technologies: ['Selenium WebDriver', 'JavaScript', 'WebdriverIO', 'BDD', 'Allure'],
    features: [
      'POM Architecture',
      'BDD Testing',
      'CI/CD Integration',
      'Automated E2E Flows',
      'Detailed Reporting',
    ],
    github: 'https://github.com/abdulazizpermana',
    demo: '#',
    featured: true,
  },
  {
    id: 2,
    title: 'Laravel REST API Project',
    category: 'Backend Development',
    description:
      'Scalable REST API built with Laravel featuring JWT authentication, clean architecture, and comprehensive database design.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JWT', 'Clean Architecture'],
    features: [
      'Authentication System',
      'RESTful Endpoints',
      'Database Optimization',
      'Error Handling',
      'API Documentation',
    ],
    github: 'https://github.com/abdulazizpermana',
    demo: '#',
    featured: false,
  },
  {
    id: 3,
    title: 'UMKM AI Application',
    category: 'Full Stack',
    description:
      'Complete UMKM platform featuring Flutter frontend, Laravel backend, and AI integration for business intelligence.',
    technologies: ['Flutter', 'Laravel', 'Dart', 'PHP', 'AI Integration'],
    features: [
      'Cross-Platform Mobile',
      'AI-Powered Analytics',
      'Real-time Dashboard',
      'Data Visualization',
      'User Authentication',
    ],
    github: 'https://github.com/abdulazizpermana',
    demo: '#',
    featured: true,
  },
  {
    id: 4,
    title: 'Personal Productivity App',
    category: 'Mobile Development',
    description:
      'Cross-platform productivity application with task management, notifications, and cloud synchronization.',
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST API'],
    features: [
      'Task Management',
      'Cloud Sync',
      'Push Notifications',
      'Offline Support',
      'Dark Mode',
    ],
    github: 'https://github.com/abdulazizpermana',
    demo: '#',
    featured: false,
  },
];

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-32 bg-background dark:bg-black border-b border-border dark:border-white/10"
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white">
              Featured Projects
            </h2>
            <p className="text-lg text-foreground/60 dark:text-white/60">
              A selection of projects showcasing my expertise in QA automation, backend 
              development, and mobile engineering.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className={`group glass-effect rounded-xl overflow-hidden hover:bg-white/15 dark:hover:bg-white/8 transition-all ${
                  project.featured ? 'md:col-span-2' : ''
                }`}
                whileHover={{ y: -5 }}
              >
                {/* Project Header */}
                <div className="p-8">
                  <div className="mb-4">
                    <p className="text-sm font-semibold text-accent mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground dark:text-white mb-3">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-foreground/60 dark:text-white/60 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features Grid */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground dark:text-white mb-3">
                      Key Features
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature) => (
                        <motion.div
                          key={feature}
                          className="text-xs text-foreground/70 dark:text-white/70 flex items-center gap-2"
                          whileHover={{ x: 4 }}
                        >
                          <span className="text-accent">✓</span>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-lg"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-3">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-foreground dark:text-white hover:bg-white/10 dark:hover:bg-white/5 rounded-lg transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    {project.demo !== '#' && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium bg-gradient-to-r from-accent to-blue-500 text-white rounded-lg hover:shadow-lg transition-shadow"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
