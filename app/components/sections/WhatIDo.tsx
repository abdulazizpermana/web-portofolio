'use client';

import { motion } from 'framer-motion';
import {
  Zap,
  Layers,
  Smartphone,
  Code,
  Database,
  GitBranch,
  AlertCircle,
  CheckCircle,
  Gauge,
  Shield,
  Smartphone as MobileIcon,
  Layout,
} from 'lucide-react';

const services = [
  {
    title: 'QA Automation Engineering',
    description:
      'Expert in designing and maintaining comprehensive automation test frameworks for web and mobile applications.',
    icon: Zap,
    color: 'from-orange-400 to-red-400',
    skills: [
      { icon: AlertCircle, label: 'E2E Testing' },
      { icon: CheckCircle, label: 'Regression Testing' },
      { icon: Gauge, label: 'Performance Testing' },
      { icon: Shield, label: 'API Validation' },
    ],
    technologies: [
      'Selenium WebDriver',
      'WebdriverIO',
      'Appium',
      'Robot Framework',
    ],
  },
  {
    title: 'Backend Development',
    description:
      'Building scalable, maintainable backend systems with clean architecture and enterprise-grade reliability.',
    icon: Layers,
    color: 'from-purple-400 to-pink-400',
    skills: [
      { icon: Code, label: 'REST API' },
      { icon: Database, label: 'Database Design' },
      { icon: GitBranch, label: 'Authentication' },
      { icon: Zap, label: 'API Integration' },
    ],
    technologies: ['Laravel', 'PHP', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Mobile Development',
    description:
      'Creating responsive, user-friendly cross-platform mobile applications with Flutter and clean code practices.',
    icon: Smartphone,
    color: 'from-blue-400 to-cyan-400',
    skills: [
      { icon: MobileIcon, label: 'Cross-Platform' },
      { icon: Layout, label: 'Responsive UI' },
      { icon: Code, label: 'State Management' },
      { icon: Zap, label: 'API Integration' },
    ],
    technologies: ['Flutter', 'Dart', 'Firebase', 'REST APIs'],
  },
];

export default function WhatIDo() {
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
      id="what-i-do"
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
              What I Do
            </h2>
            <p className="text-lg text-foreground/60 dark:text-white/60">
              I specialize in three key areas of software development, bringing expertise in 
              quality assurance, backend engineering, and mobile development.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  className="group glass-effect rounded-xl p-8 hover:bg-white/15 dark:hover:bg-white/8 transition-all"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`p-4 w-fit bg-gradient-to-br ${service.color} rounded-xl mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground dark:text-white">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/60 dark:text-white/60 mb-6 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-foreground dark:text-white mb-3">
                      Key Skills
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      {service.skills.map((skill) => {
                        const SkillIcon = skill.icon;
                        return (
                          <div
                            key={skill.label}
                            className="flex items-center gap-2 text-sm text-foreground/70 dark:text-white/70"
                          >
                            <SkillIcon className="w-4 h-4 text-accent" />
                            <span>{skill.label}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="pt-6 border-t border-white/10">
                    <h4 className="text-sm font-semibold text-foreground dark:text-white mb-3">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1 bg-white/10 dark:bg-white/5 rounded-lg text-xs font-medium text-foreground/70 dark:text-white/70"
                          whileHover={{ scale: 1.05, backgroundColor: 'rgba(59, 130, 246, 0.2)' }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
