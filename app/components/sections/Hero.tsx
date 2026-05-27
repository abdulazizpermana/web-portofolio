'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, ArrowDown } from 'lucide-react';

const titles = [
  'Automation Test Engineer',
  'QA Automation Engineer',
  'Laravel Backend Developer',
  'Flutter Mobile Developer',
  'Software Engineer',
];

const techBadges = [
  { label: 'Laravel', color: 'from-red-400 to-orange-400' },
  { label: 'Flutter', color: 'from-blue-400 to-cyan-400' },
  { label: 'Selenium', color: 'from-green-400 to-emerald-400' },
  { label: 'Appium', color: 'from-purple-400 to-pink-400' },
  { label: 'Robot Framework', color: 'from-yellow-400 to-orange-400' },
  { label: 'JavaScript', color: 'from-amber-400 to-yellow-400' },
  { label: 'PHP', color: 'from-indigo-400 to-purple-400' },
  { label: 'Dart', color: 'from-cyan-400 to-blue-400' },
  { label: 'Python', color: 'from-blue-400 to-indigo-400' },
];

export default function Hero() {
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDownloadCV = () => {
    // Create a dummy CV file
    const link = document.createElement('a');
    link.href = '/cv-abdul-aziz-permana.pdf';
    link.download = 'CV-Abdul-Aziz-Permana.pdf';
    link.click();
  };

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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-10 overflow-hidden bg-gradient-to-b from-background to-background/95 dark:from-black dark:to-black/95">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="container-max relative z-10 w-full">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Name */}
          <motion.div variants={itemVariants}>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground dark:text-white">
              Abdul Aziz
              <span className="block bg-gradient-to-r from-accent to-blue-500 bg-clip-text text-transparent">
                Permana
              </span>
            </h1>
          </motion.div>

          {/* Rotating Titles */}
          <motion.div
            variants={itemVariants}
            className="mb-8 flex items-center justify-center"
          >
            <div className="relative min-h-[96px] w-full max-w-2xl px-4 md:min-h-[128px]">
              {titles.map((title, index) => (
                <motion.span
                  key={title}
                  className="absolute inset-0 flex items-center justify-center text-center text-2xl font-semibold leading-tight text-foreground/80 dark:text-white/80 md:text-4xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: index === currentTitleIndex ? 1 : 0,
                    y: index === currentTitleIndex ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="max-w-[16ch] text-balance">{title}</span>
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Professional Summary */}
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground/60 dark:text-white/60 max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Software Engineer with experience in QA Automation, Laravel backend development, and Flutter mobile development. 
            Experienced in banking and enterprise systems with strong expertise in automation testing, scalable application 
            development, and end-to-end system validation.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.button
              onClick={handleDownloadCV}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-blue-500 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.button>
            <motion.a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent font-semibold rounded-xl hover:bg-accent/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Contact Me
            </motion.a>
          </motion.div>

          {/* Tech Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            {techBadges.map((badge) => (
              <motion.div
                key={badge.label}
                className={`px-4 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r ${badge.color} backdrop-blur-sm`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {badge.label}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Down Indicator */}
        <motion.div
          className="mt-12 flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.button
            type="button"
            className="group flex flex-col items-center gap-2 bg-transparent text-foreground/50 transition-colors hover:text-accent dark:text-white/50"
            onClick={() => {
              const aboutSection = document.getElementById('about');
              aboutSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
