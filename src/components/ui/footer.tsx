
"use client";

import { Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center text-center md:text-left">
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Business Contact</h3>
            <a 
              href="mailto:lalbasha@automatea2z.in" 
              className="flex items-center justify-center md:justify-start gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail size={18} />
              lalbasha@automatea2z.in
            </a>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Connect with Us</h3>
            <div className="space-x-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Founder 1
              </a>
              <span className="text-gray-500">|</span>
              <a 
                href="#" 
                className="text-gray-300 hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Founder 2
              </a>
            </div>
          </div>

          <div className="text-gray-300">
            © {new Date().getFullYear()} AutomateA2Z. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
