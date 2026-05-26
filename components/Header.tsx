"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => { const handleScroll = () => setIsScrolled(window.scrollY > 50); window.addEventListener("scroll", handleScroll); return () => window.removeEventListener("scroll", handleScroll); }, []);

  return (
    <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-10 h-10">
              <Image src={siteConfig.images.logo} alt={siteConfig.name} fill className="object-contain" />
            </div>
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight text-secondary">{siteConfig.name}</div>
              <div className="text-xs text-gray-500">{siteConfig.subtitle}</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (<Link key={link.href} href={link.href} className="text-sm font-medium text-gray-700 hover:text-primary transition-colors">{link.label}</Link>))}
          </nav>
          <div className="hidden md:flex items-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors"><Phone className="w-4 h-4" />{siteConfig.phone}</a>
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-primary text-secondary text-sm font-bold rounded-full hover:bg-primary/90 transition-colors">Book Now</a>
          </div>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden p-2 text-secondary" aria-label="Toggle menu">{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button>
        </div>
      </div>
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (<Link key={link.href} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="block py-2 text-base font-medium text-gray-700 hover:text-primary">{link.label}</Link>))}
              <div className="pt-4 border-t space-y-3">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 py-2 text-base font-medium text-gray-700"><Phone className="w-5 h-5" />{siteConfig.phone}</a>
                <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="block w-full py-3 text-center bg-primary text-secondary font-bold rounded-full">Book via WhatsApp</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
