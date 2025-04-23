
"use client";

import * as React from "react";
import { Home, Mail, Menu, Settings, User } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function NavigationBar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = React.useState(false);

  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: Mail, label: "Contact", href: "#contact" },
    { icon: User, label: "About", href: "#about" },
    { icon: Settings, label: "Services", href: "#services" },
  ];

  return (
    <div
      className={cn(
        "w-full bg-black/95 backdrop-blur-sm fixed z-50 transition-all duration-300",
        isMobile ? "bottom-0" : "top-0"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {!isMobile && (
            <div className="text-white font-semibold text-xl">AutomateA2Z</div>
          )}

          <NavigationMenu
            className={cn(
              "mx-auto",
              isMobile && "w-full",
              !isOpen && isMobile && "hidden"
            )}
          >
            <NavigationMenuList
              className={cn(
                "gap-4",
                isMobile &&
                  "w-full justify-around items-center px-2"
              )}
            >
              {menuItems.map((item) => (
                <NavigationMenuItem key={item.label}>
                  <NavigationMenuLink
                    asChild
                    className={cn(
                      "group inline-flex items-center justify-center gap-2 text-white hover:text-white/80 transition-colors",
                      isMobile && "flex-col text-xs"
                    )}
                  >
                    <a href={item.href}>
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </a>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {!isMobile && (
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-white/80"
              onClick={() => setIsOpen(!isOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
