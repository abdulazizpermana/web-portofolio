'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/abdulazizpermana',
      label: 'LinkedIn',
    },
    {
      icon: Github,
      href: 'https://github.com/abdulazizpermana',
      label: 'GitHub',
    },
    {
      icon: Mail,
      href: 'mailto:hi@abdulazizpermana.com',
      label: 'Email',
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/6281234567890',
      label: 'WhatsApp',
    },
  ];

  return (
    <footer className="border-t border-border dark:border-white/10 bg-background dark:bg-black">
      <div className="container-max py-12">
        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white text-sm font-bold">A</span>
              </div>
              <span className="font-bold">Abdul Aziz Permana</span>
            </div>
            <p className="text-sm text-foreground/60 dark:text-white/60">
              Software Engineer with strong quality mindset.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Services', 'Projects', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-foreground/60 dark:text-white/60 hover:text-accent transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 hover:bg-border dark:hover:bg-white/10 rounded-lg transition-colors"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{link.label}</span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-border dark:bg-white/10 mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
        />

        {/* Bottom */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-foreground/60 dark:text-white/60"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p>
            © {currentYear} Abdul Aziz Permana. All rights reserved.
          </p>
          <p>
            Built with <span className="text-accent">Next.js</span>,{' '}
            <span className="text-accent">Tailwind CSS</span>, and{' '}
            <span className="text-accent">Framer Motion</span>.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
