"use client"; // Marks this file as a client component in Next.js

import { motion } from "framer-motion"; // For animation effects
import { Norican } from "next/font/google"; // Import Google font
import Link from "next/link"; // Client-side navigation
import { usePathname, useSelectedLayoutSegment } from "next/navigation"; // Hooks for route and layout segment
import * as React from "react";

import { Icons } from "@/components/common/icons"; // Custom icons component
import { MobileNav } from "@/components/common/mobile-nav"; // Responsive mobile navigation
import { siteConfig } from "@/config/site"; // Site configuration (e.g. author name)
import { cn } from "@/lib/utils"; // Utility to conditionally join class names

// Props interface for MainNav component
interface MainNavProps {
  items?: any[]; // Navigation items
  children?: React.ReactNode; // Optional children elements
}

// Load Norican font with desired settings
const norican = Norican({
  weight: ["400"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

// Define animation variants for navigation links
const navItemVariants = {
  hidden: { opacity: 0, y: -20 }, // Start off-screen and transparent
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * i, // Staggered delay for each item
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Main navigation component
export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment(); // Get active layout segment
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false); // Toggle for mobile menu
  const pathname = usePathname(); // Current pathname

  // Close mobile menu on route change
  React.useEffect(() => {
    setShowMobileMenu(false);
  }, [pathname]);

  return (
    <div className="flex gap-6 md:gap-10">
      {/* Logo with animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Link href="/" className="hidden items-center space-x-2 md:flex">
          <span className={cn(norican.className, "text-2xl")}>
            {siteConfig.authorName}
          </span>
        </Link>
      </motion.div>

      {/* Desktop navigation links */}
      {items?.length ? (
        <nav className="hidden gap-6 md:flex items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={item.disabled ? "#" : item.href}
                className={cn(
                  "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                  item.href.startsWith(`/${segment}`)
                    ? "text-foreground" // Highlight active segment
                    : "text-foreground/60",
                  item.disabled && "cursor-not-allowed opacity-80" // Style disabled links
                )}
              >
                {item.title}
              </Link>
            </motion.div>
          ))}
        </nav>
      ) : null}

      {/* Mobile menu toggle button */}
      <motion.button
        className="flex items-center space-x-2 md:hidden"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.menu />}
        <span className="font-bold">Menu</span>
      </motion.button>

      {/* Mobile navigation menu */}
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
}
