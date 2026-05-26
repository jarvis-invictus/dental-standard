"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { Award, Calendar } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-secondary font-medium rounded-full text-sm mb-4">{siteConfig.doctor.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">{siteConfig.doctor.name}</h2>
          <p className="text-lg text-gray-600 mt-2">{siteConfig.doctor.qualification}</p>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative mx-auto lg:mx-0">
            <div className="relative w-72 h-96 lg:w-80 lg:h-[28rem] rounded-3xl overflow-hidden shadow-2xl">
              <Image src={siteConfig.doctor.image} alt={siteConfig.doctor.name} fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-primary text-secondary px-6 py-4 rounded-2xl shadow-lg">
              <div className="text-2xl font-bold">{siteConfig.doctor.stats.value}</div>
              <div className="text-sm font-medium">{siteConfig.doctor.stats.label}</div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"><Award className="w-5 h-5 text-primary" /><span className="text-sm font-medium text-secondary">IDA Certified</span></div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full"><Calendar className="w-5 h-5 text-primary" /><span className="text-sm font-medium text-secondary">{siteConfig.foundingYear} - Present</span></div>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">{siteConfig.doctor.description1}</p>
            <p className="text-lg text-gray-600 leading-relaxed">{siteConfig.doctor.description2}</p>
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>Book Consultation</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
