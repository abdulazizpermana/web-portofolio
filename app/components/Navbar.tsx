'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'what-i-do', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Detect active section
      for (const item of navItems) {
        const element = document.getElementById(item.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-border dark:border-white/10'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-max flex items-center justify-between py-4 md:py-5">
        {/* Logo */}
        <motion.button
          onClick={() => scrollToSection('about')}
          className="flex items-center gap-2 font-bold text-xl hover:opacity-80 transition-opacity"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-accent to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
          <span className="hidden md:inline">Abdul</span>
        </motion.button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors relative ${
                activeSection === item.id
                  ? 'text-accent'
                  : 'text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white'
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.div
                  className="absolute bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-blue-500"
                  layoutId="activeUnderline"
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => scrollToSection('contact')}
          className="hidden md:block px-6 py-2 bg-gradient-to-r from-accent to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-border dark:hover:bg-white/10 rounded-lg transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        className="md:hidden border-t border-border dark:border-white/10"
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        style={{ overflow: 'hidden' }}
      >
        <div className="bg-white/50 dark:bg-black/50 backdrop-blur-md px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block w-full text-left px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                activeSection === item.id
                  ? 'bg-accent/20 text-accent'
                  : 'text-foreground/70 dark:text-white/70 hover:text-foreground dark:hover:text-white hover:bg-border/50 dark:hover:bg-white/5'
              }`}
              whileHover={{ x: 4 }}
            >
              {item.label}
            </motion.button>
          ))}
          <motion.button
            onClick={() => scrollToSection('contact')}
            className="block w-full mt-2 px-4 py-2 bg-gradient-to-r from-accent to-blue-500 text-white text-sm font-medium rounded-lg hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.02 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
    </motion.nav>
  );
}
