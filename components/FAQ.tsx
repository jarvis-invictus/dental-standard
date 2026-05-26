"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-secondary font-medium rounded-full text-sm mb-4">FAQ</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">Frequently Asked Questions</h2>
        </motion.div>
        <div className="space-y-4">
          {siteConfig.faqs.map((faq, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.1 }} className="border border-gray-200 rounded-2xl overflow-hidden">
              <details className="group">
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors list-none">
                  <span className="font-semibold text-secondary text-left">{faq.question}</span>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform flex-shrink-0" />
                </summary>
                <div className="px-6 py-4 bg-white"><p className="text-gray-600 leading-relaxed">{faq.answer}</p></div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
