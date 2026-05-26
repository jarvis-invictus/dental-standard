"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <Image src={siteConfig.images.features} alt="Modern dental equipment at Smile Dental Clinic" fill className="object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="space-y-6">
            <span className="inline-block px-4 py-2 bg-primary/10 text-secondary font-medium rounded-full text-sm">{siteConfig.features.title}</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">{siteConfig.features.headingLine1}<br /><span className="text-primary">{siteConfig.features.headingLine2}</span></h2>
            <p className="text-lg text-gray-600">{siteConfig.features.description}</p>
            <div className="grid sm:grid-cols-3 gap-6 pt-4">
              {siteConfig.features.items.map((item, index) => (
                <div key={index} className="text-center sm:text-left">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mx-auto sm:mx-0"><span className="text-2xl">{item.icon === "Users" ? "👥" : item.icon === "HeartPulse" ? "❤️" : "💊"}</span></div>
                  <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
