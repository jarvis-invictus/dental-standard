"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { siteConfig } from "@/lib/site-config";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 7000, stopOnInteraction: false })]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);
  const onSelect = useCallback(() => { if (!emblaApi) return; setSelectedIndex(emblaApi.selectedScrollSnap()); }, [emblaApi]);
  useEffect(() => { if (!emblaApi) return; onSelect(); emblaApi.on("select", onSelect); return () => { emblaApi.off("select", onSelect); }; }, [emblaApi, onSelect]);

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-secondary font-medium rounded-full text-sm mb-4">{siteConfig.testimonials.label}</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">{siteConfig.testimonials.headingLine1}<br /><span className="text-primary">{siteConfig.testimonials.headingLine2}</span></h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">{siteConfig.testimonials.description}</p>
        </motion.div>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {siteConfig.testimonials.items.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] pl-4">
                  <div className="bg-white rounded-2xl p-6 h-full shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden"><Image src={testimonial.image} alt={testimonial.name} fill className="object-cover" /></div>
                      <div><div className="font-bold text-secondary">{testimonial.name}</div><div className="text-sm text-gray-500">{testimonial.role}</div></div>
                    </div>
                    <div className="flex gap-1 mb-3">{[...Array(testimonial.stars)].map((_, i) => (<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />))}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{testimonial.content}&rdquo;</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={scrollPrev} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors" aria-label="Previous testimonial"><ChevronLeft className="w-5 h-5 text-secondary" /></button>
            <div className="flex gap-2">
              {siteConfig.testimonials.items.map((_, index) => (<button key={index} onClick={() => scrollTo(index)} className={`w-2 h-2 rounded-full transition-all ${index === selectedIndex ? "bg-primary w-6" : "bg-gray-300 hover:bg-gray-400"}`} aria-label={`Go to testimonial ${index + 1}`} />))}
            </div>
            <button onClick={scrollNext} className="p-2 rounded-full bg-white shadow-md hover:bg-gray-50 transition-colors" aria-label="Next testimonial"><ChevronRight className="w-5 h-5 text-secondary" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
