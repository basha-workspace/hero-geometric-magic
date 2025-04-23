
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={cn(
        "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-white/10 dark:bg-black/10 border border-border backdrop-blur-lg py-1.5 px-1.5 rounded-full shadow-lg">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer text-sm font-medium px-5 py-2 rounded-full transition-all duration-200",
                "text-foreground/70 hover:text-primary hover:bg-accent/50",
                isActive && "bg-accent text-primary"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-accent rounded-full -z-10"
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}
            </a>
          );
        })}
      </div>
    </div>
  );
}
