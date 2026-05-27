'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hi@abdulazizpermana.com',
    href: 'mailto:hi@abdulazizpermana.com',
    color: 'from-red-400 to-pink-400',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Abdul Aziz Permana',
    href: 'https://linkedin.com/in/abdulazizpermana',
    color: 'from-blue-400 to-cyan-400',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'abdulazizpermana',
    href: 'https://github.com/abdulazizpermana',
    color: 'from-gray-400 to-slate-400',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:hi@abdulazizpermana.com?subject=${subject}&body=${body}`;
    setSubmitted(true);

    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(false);
    }, 3000);
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
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-gradient-to-b from-background to-background/95 dark:from-black dark:to-black/95"
    >
      <div className="container-max">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground dark:text-white">
              Let&apos;s Work Together
            </h2>
            <p className="text-lg text-foreground/60 dark:text-white/60">
              I&apos;m interested in freelance opportunities, remote roles, and collaborations. 
              Feel free to reach out!
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Contact Methods */}
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group glass-effect rounded-xl p-6 hover:bg-white/15 dark:hover:bg-white/8 transition-all text-center"
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className={`p-4 w-fit bg-gradient-to-br ${link.color} rounded-xl mb-4 mx-auto`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="font-semibold text-foreground dark:text-white mb-2">
                    {link.label}
                  </h3>
                  <p className="text-sm text-foreground/60 dark:text-white/60 break-all">
                    {link.value}
                  </p>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="max-w-2xl mx-auto glass-effect rounded-xl p-8 md:p-12"
          >
            <h3 className="text-2xl font-bold text-foreground dark:text-white mb-6">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-foreground placeholder-foreground/40 transition-all focus:border-accent focus:outline-none dark:border-white/15 dark:text-white dark:placeholder-white/40"
                  placeholder="Enter your name"
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-foreground placeholder-foreground/40 transition-all focus:border-accent focus:outline-none dark:border-white/15 dark:text-white dark:placeholder-white/40"
                  placeholder="your.email@example.com"
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label className="block text-sm font-medium text-foreground dark:text-white mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full resize-none border-0 border-b border-foreground/20 bg-transparent px-0 py-3 text-foreground placeholder-foreground/40 transition-all focus:border-accent focus:outline-none dark:border-white/15 dark:text-white dark:placeholder-white/40"
                  placeholder="Tell me about your project or opportunity..."
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={submitted}
                className="w-full px-6 py-3 bg-gradient-to-r from-accent to-blue-500 text-white font-semibold rounded-lg hover:shadow-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                whileHover={{ scale: submitted ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? (
                  <>
                    <motion.span
                      animate={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                    >
                      ✓ Message Sent!
                    </motion.span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>

            {/* Success Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: submitted ? 1 : 0,
                y: submitted ? 0 : 10,
              }}
              transition={{ duration: 0.3 }}
              className="mt-6 p-4 bg-gradient-to-r from-green-400/20 to-emerald-400/20 border border-green-400/30 rounded-lg text-center"
            >
              <p className="text-sm font-medium text-green-400">
                Thanks for reaching out! I&apos;ll get back to you soon.
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
