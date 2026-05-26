"use client";

import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{siteConfig.name}</h3>
            <p className="text-gray-400 text-sm">{siteConfig.subtitle}</p>
            <div className="flex gap-4">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
              <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#testimonials" className="hover:text-primary transition-colors">Reviews</Link></li>
              <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="/services/general-dentistry" className="hover:text-primary transition-colors">General Dentistry</Link></li>
              <li><Link href="/services/dental-implants" className="hover:text-primary transition-colors">Dental Implants</Link></li>
              <li><Link href="/services/orthodontics" className="hover:text-primary transition-colors">Orthodontics</Link></li>
              <li><Link href="/services/cosmetic-dentistry" className="hover:text-primary transition-colors">Cosmetic Dentistry</Link></li>
              <li><Link href="/services/kids-dentistry" className="hover:text-primary transition-colors">Kids Dentistry</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-3"><MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>{siteConfig.address.line1}<br />{siteConfig.address.line2}<br />{siteConfig.address.line3}</span></li>
              <li className="flex items-center gap-3"><Phone className="w-5 h-5 text-primary flex-shrink-0" /><a href={`tel:${siteConfig.phone}`} className="hover:text-primary transition-colors">{siteConfig.phone}</a></li>
              <li className="flex items-center gap-3"><Mail className="w-5 h-5 text-primary flex-shrink-0" /><a href={`mailto:${siteConfig.email}`} className="hover:text-primary transition-colors">{siteConfig.email}</a></li>
              <li className="flex items-start gap-3"><Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" /><span>{siteConfig.timing}</span></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
