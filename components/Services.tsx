"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { servicesData } from "@/lib/services_data";
import { ArrowRight } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-secondary font-medium rounded-full text-sm mb-4">Our Services</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-4">Comprehensive Dental Care</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">From routine checkups to advanced procedures, we offer a full range of dental services for your entire family.</p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div key={service.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }}>
              <Link href={`/services/${service.slug}`} className="group block h-full">
                <div className="h-full bg-gray-50 rounded-2xl p-8 hover:bg-primary/5 transition-colors border border-transparent hover:border-primary/20">
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <service.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.short}</p>
                  <div className="flex items-center gap-2 text-primary font-medium">Learn more<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
