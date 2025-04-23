
import React, { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const menuItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = menuItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#1A1F2C] bg-opacity-95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center h-16 gap-8">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={cn(
                "relative px-4 py-2 text-sm font-medium text-white/70 transition-colors duration-200 hover:text-white",
                activeSection === item.id && "text-white"
              )}
            >
              {item.label}
              <span
                className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-white/20 transform scale-x-0 transition-transform duration-200",
                  activeSection === item.id && "scale-x-100"
                )}
              />
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
