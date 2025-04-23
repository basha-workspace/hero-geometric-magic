
"use client"; 

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

function NavHeader() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  const NavLinks = () => (
    <ul
      className={cn(
        "relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1",
        isMobile && "flex-col w-full gap-2"
      )}
      onMouseLeave={() => !isMobile && setPosition((pv) => ({ ...pv, opacity: 0 }))}
    >
      <Tab setPosition={setPosition}>Home</Tab>
      <Tab setPosition={setPosition}>Pricing</Tab>
      <Tab setPosition={setPosition}>About</Tab>
      <Tab setPosition={setPosition}>Services</Tab>
      <Tab setPosition={setPosition}>Contact</Tab>

      {!isMobile && <Cursor position={position} />}
    </ul>
  );

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4">
        {isMobile ? (
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Menu className="h-6 w-6" />
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-full left-0 right-0 mt-2 p-4 bg-white rounded-lg shadow-lg border border-gray-100">
                <NavLinks />
              </div>
            )}
          </div>
        ) : (
          <NavLinks />
        )}
      </div>
    </nav>
  );
}

const Tab = ({
  children,
  setPosition,
}: {
  children: React.ReactNode;
  setPosition: React.Dispatch<React.SetStateAction<{
    left: number;
    width: number;
    opacity: number;
  }>>;
}) => {
  const ref = useRef<HTMLLIElement>(null);
  const isMobile = useIsMobile();

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref.current || isMobile) return;

        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          width,
          opacity: 1,
          left: ref.current.offsetLeft,
        });
      }}
      className={cn(
        "relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base",
        "hover:bg-gray-100 rounded transition-colors",
        isMobile && "text-black mix-blend-normal w-full text-center"
      )}
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }: { 
  position: {
    left: number;
    width: number;
    opacity: number;
  }; 
}) => {
  return (
    <motion.li
      animate={position}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};

export { NavHeader };
