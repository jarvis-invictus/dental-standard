"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";

export default function Preloader() {
  return (
    <motion.div initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="fixed inset-0 z-50 bg-secondary flex items-center justify-center">
      <div className="text-center">
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.5, ease: "easeOut" }} className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mb-6 mx-auto">
          <span className="text-3xl font-bold text-secondary">{siteConfig.name.charAt(0)}</span>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <h2 className="text-xl font-bold text-white mb-1">{siteConfig.name}</h2>
          <p className="text-gray-400 text-sm">{siteConfig.subtitle}</p>
        </motion.div>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 1.2, ease: "easeInOut" }} className="mt-6 w-48 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-primary rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}
