'use client';

import { motion } from 'framer-motion';
import { BookOpen, GraduationCap } from 'lucide-react';

const educations = [
  {
    id: 1,
    degree: 'Master of Information System Engineering',
    school: 'STMIK LIKMI',
    period: '2023 – 2024',
    description:
      'Advanced studies in information systems with focus on software engineering and enterprise architecture.',
    icon: GraduationCap,
  },
  {
    id: 2,
    degree: 'Bachelor of Information System',
    school: 'Universitas Ma\'soem',
    period: '2018 – 2022',
    description:
      'Comprehensive education in information systems, software development, and information technology management.',
    icon: BookOpen,
  },
];

export default function Education() {
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
      id="education"
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
              Education
            </h2>
            <p className="text-lg text-foreground/60 dark:text-white/60">
              Academic background and continuous learning journey in information systems 
              and software engineering.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl"
          >
            {educations.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <motion.div
                  key={edu.id}
                  className="relative mb-8 last:mb-0"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Timeline line */}
                  {index < educations.length - 1 && (
                    <div className="absolute left-8 top-20 w-0.5 h-12 bg-gradient-to-b from-accent to-transparent" />
                  )}

                  {/* Timeline dot */}
                  <div className="absolute left-0 w-16 h-16 rounded-full bg-gradient-to-br from-accent to-blue-500 flex items-center justify-center">
                    <div className="w-4 h-4 bg-background dark:bg-black rounded-full" />
                  </div>

                  {/* Content */}
                  <motion.div
                    className="ml-32 glass-effect rounded-xl p-8 hover:bg-white/15 dark:hover:bg-white/8 transition-all"
                    whileHover={{ y: -2 }}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="p-3 bg-accent/20 rounded-lg">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground dark:text-white">
                          {edu.degree}
                        </h3>
                        <p className="text-accent font-semibold mt-1">{edu.school}</p>
                        <p className="text-sm text-foreground/60 dark:text-white/60 mt-1">
                          {edu.period}
                        </p>
                      </div>
                    </div>

                    <p className="text-foreground/60 dark:text-white/60">
                      {edu.description}
                    </p>
                  </motion.div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
