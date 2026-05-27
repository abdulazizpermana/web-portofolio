'use client';

import { motion } from 'framer-motion';
import { Badge, ChevronDown } from 'lucide-react';
import { useState } from 'react';

const experiences = [
  {
    id: 1,
    company: 'Bank Negara Indonesia (BNI)',
    position: 'Automation Test Engineer',
    period: 'May 2025 – Present',
    status: 'current',
    description:
      'Leading QA automation initiatives for mission-critical banking systems and applications.',
    responsibilities: [
      'Develop and maintain automation test scripts for web and mobile applications',
      'Perform end-to-end testing for banking transaction systems',
      'Create scalable automation frameworks',
      'Validate API responses and backend systems',
      'Execute regression testing and integration testing',
      'Collaborate with developers, QA teams, and business analysts',
      'Ensure application quality before production release',
      'Monitor logs and validate transaction flows',
      'Participate in Agile/Scrum development lifecycle',
    ],
    technologies: [
      'Selenium WebDriver',
      'WebdriverIO',
      'Appium',
      'Robot Framework',
      'JavaScript',
      'Python',
      'Jira',
      'Kibana',
      'SQL',
      'Allure Report',
    ],
  },
  {
    id: 2,
    company: 'Indonesia Eximbank',
    position: 'QA Engineer (Automation & Manual)',
    period: 'Apr 2025 – Present',
    status: 'current',
    responsibilities: [
      'Develop and execute automated test scripts',
      'Perform performance testing using JMeter',
      'Execute SIT and UAT testing cycles',
      'Implement data-driven testing approaches',
      'Conduct end-to-end system validation',
    ],
    technologies: ['Robot Framework', 'JMeter', 'SIT/UAT', 'Data-driven Testing'],
  },
  {
    id: 3,
    company: 'Bank Negara Indonesia (BNI)',
    position: 'QA Engineer',
    period: 'Feb 2024 – Apr 2025',
    responsibilities: [
      'Automated web and mobile application testing',
      'Implemented Page Object Model architecture',
      'BDD testing with Gherkin syntax',
      'Database validation and Kibana log analysis',
      'Regression and integration testing',
    ],
    technologies: [
      'Selenium',
      'WebdriverIO',
      'Appium',
      'BDD',
      'Kibana',
      'Database Testing',
    ],
  },
  {
    id: 4,
    company: 'Bank Negara Indonesia (BNI)',
    position: 'Flutter Developer',
    period: 'Jul 2023 – Jan 2024',
    responsibilities: [
      'Developed mobile application features',
      'Fixed bugs and improved app performance',
      'Supported SIT and UAT testing phases',
      'Collaborated with QA and backend teams',
    ],
    technologies: ['Flutter', 'Dart', 'Firebase'],
  },
  {
    id: 5,
    company: 'Yayasan Al-Ma\'soem',
    position: 'Flutter Developer',
    period: 'Sep 2022 – Jun 2023',
    responsibilities: [
      'Developed academic information systems',
      'Created employee management applications',
      'Designed database schemas',
      'Conducted system analysis and planning',
    ],
    technologies: ['Flutter', 'Dart', 'Database Design'],
  },
  {
    id: 6,
    company: 'PT Proxsis Solusi Bisnis',
    position: 'Internship Flutter Developer',
    period: 'Feb 2022 – Jul 2022',
    responsibilities: [
      'Developed employee mobile application',
      'Collaborated in Agile Scrum teams',
      'Created technical documentation',
      'Learned best practices in mobile development',
    ],
    technologies: ['Flutter', 'Dart', 'Scrum'],
  },
];

export default function Experience() {
  const [expandedId, setExpandedId] = useState<number | null>(1);

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
      id="experience"
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
              Experience
            </h2>
            <p className="text-lg text-foreground/60 dark:text-white/60">
              A journey through quality assurance, backend development, and mobile engineering 
              across leading financial institutions.
            </p>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="max-w-4xl">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="relative mb-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-accent to-transparent" />
                )}

                {/* Timeline dot */}
                <div
                  className={`absolute left-0 w-16 h-16 rounded-full flex items-center justify-center ${
                    exp.status === 'current'
                      ? 'bg-gradient-to-br from-accent to-blue-500'
                      : 'bg-gradient-to-br from-accent/40 to-blue-500/40'
                  }`}
                >
                  <div className="w-4 h-4 bg-background dark:bg-black rounded-full" />
                </div>

                {/* Content */}
                <motion.div
                  className={`ml-32 glass-effect rounded-xl p-6 cursor-pointer transition-all ${
                    expandedId === exp.id
                      ? 'ring-2 ring-accent'
                      : 'hover:bg-white/15 dark:hover:bg-white/8'
                  }`}
                  onClick={() =>
                    setExpandedId(expandedId === exp.id ? null : exp.id)
                  }
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-bold text-foreground dark:text-white">
                          {exp.position}
                        </h3>
                        {exp.status === 'current' && (
                          <motion.span
                            className="px-3 py-1 bg-gradient-to-r from-accent to-blue-500 text-white text-xs font-semibold rounded-full"
                            animate={{ opacity: [1, 0.7, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            Current
                          </motion.span>
                        )}
                      </div>
                      <p className="text-accent font-semibold mb-1">{exp.company}</p>
                      <p className="text-sm text-foreground/60 dark:text-white/60">
                        {exp.period}
                      </p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedId === exp.id ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-5 h-5 text-accent" />
                    </motion.div>
                  </div>

                  {/* Expanded content */}
                  <motion.div
                    initial={false}
                    animate={{
                      height: expandedId === exp.id ? 'auto' : 0,
                      opacity: expandedId === exp.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div className="pt-4 border-t border-white/10">
                      {exp.description && (
                        <p className="text-foreground/70 dark:text-white/70 mb-4">
                          {exp.description}
                        </p>
                      )}

                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground dark:text-white mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-foreground/60 dark:text-white/60"
                            >
                              <span className="text-accent mt-1">→</span>
                              <span>{resp}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="text-sm font-semibold text-foreground dark:text-white mb-3">
                          Technologies
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
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
                    </div>
                  </motion.div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
