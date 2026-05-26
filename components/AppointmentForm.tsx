"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from "lucide-react";

const TIME_SLOTS = ["09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM", "11:00 AM", "11:30 AM", "12:00 PM", "12:30 PM", "02:00 PM", "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM", "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM", "06:30 PM", "07:00 PM", "07:30 PM"];

export default function AppointmentForm() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", date: "", time: "", service: "", message: "" });
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello, I'd like to book an appointment at ${siteConfig.name}.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nDate: ${formData.date}\nTime: ${formData.time}\nService: ${formData.service}\nMessage: ${formData.message}`;
    window.open(`${siteConfig.social.whatsapp}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-secondary font-medium rounded-full text-sm mb-4">Book Appointment</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">Schedule Your Visit</h2>
          <p className="text-lg text-gray-600 mt-4">Fill in your details and we&apos;ll confirm your appointment via WhatsApp</p>
        </motion.div>
        <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 lg:p-12">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div><label className="block text-sm font-medium text-gray-700 mb-2"><User className="w-4 h-4 inline mr-2" />Full Name</label><input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your name" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-2"><Phone className="w-4 h-4 inline mr-2" />Phone Number</label><input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your phone number" /></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div><label className="block text-sm font-medium text-gray-700 mb-2"><Mail className="w-4 h-4 inline mr-2" />Email Address</label><input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" placeholder="Enter your email" /></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-2"><Calendar className="w-4 h-4 inline mr-2" />Preferred Date</label><input type="date" required value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" /></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div><label className="block text-sm font-medium text-gray-700 mb-2"><Clock className="w-4 h-4 inline mr-2" />Preferred Time</label><select required value={formData.time} onChange={(e) => setFormData({ ...formData, time: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"><option value="">Select a time slot</option>{TIME_SLOTS.map((slot) => (<option key={slot} value={slot}>{slot}</option>))}</select></div>
            <div><label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label><select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"><option value="">Select a service</option><option value="General Checkup">General Checkup</option><option value="Teeth Whitening">Teeth Whitening</option><option value="Dental Implants">Dental Implants</option><option value="Orthodontics">Orthodontics</option><option value="Cosmetic Dentistry">Cosmetic Dentistry</option><option value="Root Canal">Root Canal Treatment</option><option value="Emergency">Emergency Care</option></select></div>
          </div>
          <div className="mb-6"><label className="block text-sm font-medium text-gray-700 mb-2"><MessageSquare className="w-4 h-4 inline mr-2" />Additional Message</label><textarea rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none" placeholder="Tell us about your dental concerns..." /></div>
          <button type="submit" className="w-full py-4 bg-primary text-secondary font-bold rounded-xl hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25 flex items-center justify-center gap-2"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>Book via WhatsApp</button>
        </motion.form>
      </div>
    </section>
  );
}
