"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Features from "@/components/Features";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import AppointmentForm from "@/components/AppointmentForm";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";
import SmoothScroll from "@/components/SmoothScroll";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => { const timer = setTimeout(() => setIsLoading(false), 1200); return () => clearTimeout(timer); }, []);

  return (
    <SmoothScroll>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader key="preloader" />
        ) : (
          <motion.div key="content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <Header />
            <main>
              <Hero />
              <Services />
              <Features />
              <About />
              <Testimonials />
              <FAQ />
              <AppointmentForm />
            </main>
            <Footer />
            <FloatingWhatsApp />
            <MobileStickyBar />
          </motion.div>
        )}
      </AnimatePresence>
    </SmoothScroll>
  );
}
