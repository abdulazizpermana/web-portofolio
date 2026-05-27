'use client';

import { motion } from 'framer-motion';
import { Briefcase, Code2, Award, Target } from 'lucide-react';

const stats = [
  {
    icon: Briefcase,
    value: '2+',
    label: 'Years Experience',
    description: 'In professional software development',
  },
  {
    icon: Code2,
    value: '5+',
    label: 'Banking Projects',
    description: 'Enterprise-level applications',
  },
  {
    icon: Target,
    value: '100%',
    label: 'Quality Focus',
    description: 'Commitment to excellence',
  },
  {
    icon: Award,
    value: '3',
    label: 'Key Technologies',
    description: 'QA, Backend, Mobile',
  },
];

export default function About() {
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
      id="about"
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
              About Me
            </h2>
            <p className="text-lg text-foreground/60 dark:text-white/60 leading-relaxed">
              I'm a dedicated software engineer with a strong quality mindset. My journey spans 
              across QA automation, backend development, and mobile development. I've worked on 
              mission-critical banking systems and enterprise applications, always prioritizing 
              code quality and system reliability.
            </p>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="group glass-effect rounded-xl p-6 hover:bg-white/15 dark:hover:bg-white/8 transition-all cursor-pointer"
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-accent/20 to-blue-500/20 rounded-lg group-hover:from-accent/30 group-hover:to-blue-500/30 transition-all">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground dark:text-white mb-2">
                    {stat.value}
                  </h3>
                  <p className="font-semibold text-foreground/80 dark:text-white/80 mb-2">
                    {stat.label}
                  </p>
                  <p className="text-sm text-foreground/60 dark:text-white/60">
                    {stat.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Expertise Highlights */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">
                QA Automation
              </h3>
              <p className="text-foreground/60 dark:text-white/60">
                Expert in automation testing frameworks, E2E testing, API validation, and creating 
                scalable test architectures.
              </p>
            </div>
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">
                Backend Development
              </h3>
              <p className="text-foreground/60 dark:text-white/60">
                Proficient in Laravel, REST API design, clean architecture, and building 
                enterprise-grade backend systems.
              </p>
            </div>
            <div className="glass-effect rounded-xl p-8">
              <h3 className="text-xl font-bold text-foreground dark:text-white mb-4">
                Mobile Development
              </h3>
              <p className="text-foreground/60 dark:text-white/60">
                Experienced Flutter developer creating cross-platform applications with clean UI/UX 
                and robust API integration.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
