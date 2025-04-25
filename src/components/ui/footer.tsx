
"use client";

import { Mail, Link as LinkIcon } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="w-full bg-black text-white py-8 border-t border-white/10">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center text-center md:text-left">
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Business Contact</h3>
            <a 
              href="mailto:lalbasha@automatea2z.in" 
              className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={18} />
              lalbasha@automatea2z.in
            </a>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-4">
            <h3 className="font-semibold text-lg">Connect with Us</h3>
            <div className="space-x-4">
              <a 
                href="https://www.linkedin.com/in/sai-siva-manikanta-madem-ab5b84258/"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sai
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="https://www.linkedin.com/in/lal-basha-shaik/"
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lal
              </a>
            </div>
            <div className="mt-2">
              <a 
                href="https://instantweb.in"
                className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon size={18} />
                Web Services
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="text-gray-300">
            © {new Date().getFullYear()} AutomateA2Z. All rights reserved.
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
