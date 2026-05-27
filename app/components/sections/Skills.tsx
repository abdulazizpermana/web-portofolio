'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

type SkillItem = {
  name: string;
  level: SkillLevel;
  details: string[];
};

const levelStyles: Record<SkillLevel, string> = {
  Beginner: 'bg-slate-500/10 text-slate-600 dark:text-slate-300',
  Intermediate: 'bg-blue-500/10 text-blue-600 dark:text-blue-300',
  Advanced: 'bg-amber-500/10 text-amber-600 dark:text-amber-300',
  Expert: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-300',
};

const skillCategories = [
  {
    title: 'Automation Testing',
    icon: '🔍',
    color: 'from-orange-400 to-red-400',
    skills: [
      {
        name: 'Selenium WebDriver',
        level: 'Expert' as SkillLevel,
        details: ['2+ years experience', '5 production projects'],
      },
      {
        name: 'WebdriverIO',
        level: 'Advanced' as SkillLevel,
        details: ['2+ years experience', 'Currently learning advanced patterns'],
      },
      {
        name: 'Appium',
        level: 'Advanced' as SkillLevel,
        details: ['Mobile automation projects', 'Cross-platform testing'],
      },
      {
        name: 'Robot Framework',
        level: 'Expert' as SkillLevel,
        details: ['Banking automation coverage', 'Regression suite experience'],
      },
      {
        name: 'Katalon Studio',
        level: 'Intermediate' as SkillLevel,
        details: ['Used in internal QA flows', 'Currently learning best practices'],
      },
    ] satisfies SkillItem[],
  },
  {
    title: 'Testing Expertise',
    icon: '✅',
    color: 'from-green-400 to-emerald-400',
    skills: [
      {
        name: 'E2E Testing',
        level: 'Expert' as SkillLevel,
        details: ['2+ years experience', 'Critical user flow coverage'],
      },
      {
        name: 'Regression Testing',
        level: 'Expert' as SkillLevel,
        details: ['Enterprise release validation', 'Stable test maintenance'],
      },
      {
        name: 'SIT/UAT',
        level: 'Advanced' as SkillLevel,
        details: ['Banking system validation', 'Cross-team collaboration'],
      },
      {
        name: 'Performance Testing',
        level: 'Intermediate' as SkillLevel,
        details: ['Baseline performance checks', 'Currently learning deeper tooling'],
      },
      {
        name: 'API Testing',
        level: 'Advanced' as SkillLevel,
        details: ['Postman and automation flows', 'Integration coverage'],
      },
    ] satisfies SkillItem[],
  },
  {
    title: 'Backend Development',
    icon: '🔧',
    color: 'from-purple-400 to-pink-400',
    skills: [
      {
        name: 'Laravel',
        level: 'Advanced' as SkillLevel,
        details: ['2+ years experience', '5 production projects'],
      },
      {
        name: 'PHP',
        level: 'Advanced' as SkillLevel,
        details: ['REST API development', 'Backend feature delivery'],
      },
      {
        name: 'REST API',
        level: 'Expert' as SkillLevel,
        details: ['Authentication & integrations', 'Production-ready endpoints'],
      },
      {
        name: 'JWT Authentication',
        level: 'Advanced' as SkillLevel,
        details: ['Secure auth implementation', 'Used in API projects'],
      },
      {
        name: 'Database Design',
        level: 'Intermediate' as SkillLevel,
        details: ['Schema planning', 'Currently learning optimization strategies'],
      },
    ] satisfies SkillItem[],
  },
  {
    title: 'Mobile Development',
    icon: '📱',
    color: 'from-blue-400 to-cyan-400',
    skills: [
      {
        name: 'Flutter',
        level: 'Advanced' as SkillLevel,
        details: ['2+ years experience', 'Multiple app deliveries'],
      },
      {
        name: 'Dart',
        level: 'Advanced' as SkillLevel,
        details: ['Production mobile apps', 'Clean architecture practice'],
      },
      {
        name: 'Firebase',
        level: 'Intermediate' as SkillLevel,
        details: ['Auth and backend services', 'Currently learning scaling patterns'],
      },
      {
        name: 'State Management',
        level: 'Advanced' as SkillLevel,
        details: ['Bloc/provider experience', 'Maintainable UI state'],
      },
      {
        name: 'UI/UX Implementation',
        level: 'Advanced' as SkillLevel,
        details: ['Responsive mobile layouts', 'Pixel-aware implementation'],
      },
    ] satisfies SkillItem[],
  },
  {
    title: 'Programming Languages',
    icon: '💻',
    color: 'from-yellow-400 to-orange-400',
    skills: [
      {
        name: 'JavaScript',
        level: 'Advanced' as SkillLevel,
        details: ['Frontend and automation usage', 'Production project experience'],
      },
      {
        name: 'PHP',
        level: 'Advanced' as SkillLevel,
        details: ['Laravel ecosystem', 'API and backend workflows'],
      },
      {
        name: 'Python',
        level: 'Intermediate' as SkillLevel,
        details: ['Automation scripting', 'Currently learning deeper ecosystem usage'],
      },
      {
        name: 'Dart',
        level: 'Advanced' as SkillLevel,
        details: ['Flutter app development', 'Reusable component patterns'],
      },
      {
        name: 'Java',
        level: 'Beginner' as SkillLevel,
        details: ['Fundamental OOP understanding', 'Currently learning'],
      },
    ] satisfies SkillItem[],
  },
  {
    title: 'Tools & Platforms',
    icon: '🛠️',
    color: 'from-indigo-400 to-purple-400',
    skills: [
      {
        name: 'Jira',
        level: 'Advanced' as SkillLevel,
        details: ['Agile QA workflows', 'Daily collaboration tool'],
      },
      {
        name: 'GitHub/GitLab',
        level: 'Advanced' as SkillLevel,
        details: ['Version control workflows', 'CI/CD collaboration'],
      },
      {
        name: 'Kibana',
        level: 'Intermediate' as SkillLevel,
        details: ['Log inspection', 'Issue investigation support'],
      },
      {
        name: 'Postman',
        level: 'Expert' as SkillLevel,
        details: ['API testing collections', 'Environment-based validation'],
      },
      {
        name: 'Docker',
        level: 'Intermediate' as SkillLevel,
        details: ['Container basics', 'Currently learning deployment workflows'],
      },
    ] satisfies SkillItem[],
  },
];

const SkillCard = ({ name, level, details }: SkillItem) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-border/60 bg-white/70 p-5 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/5"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <h4 className="text-base font-semibold text-foreground dark:text-white">
          {name}
        </h4>
        <span
          className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${levelStyles[level]}`}
        >
          {level}
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {details.map((detail) => (
          <span
            key={detail}
            className="rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-xs font-medium text-foreground/70 dark:text-white/70"
          >
            {detail}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = useState(0);

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
      id="skills"
      className="relative border-b border-border bg-background py-20 dark:border-white/10 dark:bg-black md:py-32"
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={itemVariants} className="mb-16 max-w-2xl">
            <h2 className="mb-6 text-4xl font-bold text-foreground dark:text-white md:text-5xl">
              Skills & Expertise
            </h2>
            <p className="text-lg text-foreground/60 dark:text-white/60">
              A clearer overview of my technical strengths using practical
              experience levels instead of progress bars.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            <div>
              <div className="space-y-3">
                {skillCategories.map((category, index) => (
                  <motion.button
                    key={category.title}
                    onClick={() => setSelectedCategory(index)}
                    className={`w-full rounded-xl p-4 text-left transition-all ${
                      selectedCategory === index
                        ? 'glass-effect ring-2 ring-accent'
                        : 'glass-effect hover:bg-white/15 dark:hover:bg-white/8'
                    }`}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{category.icon}</span>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground dark:text-white">
                          {category.title}
                        </h3>
                        <p className="text-xs text-foreground/60 dark:text-white/60">
                          {category.skills.length} skills
                        </p>
                      </div>
                      {selectedCategory === index && (
                        <motion.div
                          className={`h-8 w-2 rounded-full bg-gradient-to-b ${category.color}`}
                          layoutId="activeIndicator"
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-effect rounded-xl p-8"
            >
              <div className="mb-6">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-4xl">
                    {skillCategories[selectedCategory].icon}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground dark:text-white">
                      {skillCategories[selectedCategory].title}
                    </h3>
                    <p className="text-sm text-foreground/60 dark:text-white/60">
                      Level indicators: Beginner, Intermediate, Advanced, and
                      Expert.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {skillCategories[selectedCategory].skills.map((skill) => (
                  <SkillCard
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    details={skill.details}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6"
          >
            {skillCategories.flatMap((cat) =>
              cat.skills.slice(0, 2).map((skill) => (
                <motion.div
                  key={`${cat.title}-${skill.name}`}
                  className="glass-effect rounded-lg p-4 text-center transition-all hover:bg-white/15 dark:hover:bg-white/8"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <p className="text-xs font-semibold text-foreground dark:text-white">
                    {skill.name}
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-foreground/60 dark:text-white/60">
                    {skill.level}
                  </p>
                </motion.div>
              ))
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}