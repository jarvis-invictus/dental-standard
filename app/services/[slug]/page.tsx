import { Metadata } from "next";
import { notFound } from "next/navigation";
import { siteConfig } from "@/lib/site-config";
import { servicesData } from "@/lib/services_data";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ServicePageProps { params: { slug: string } }

export async function generateStaticParams() { return servicesData.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) return { title: "Service Not Found" };
  return {
    title: `${service.title} | ${siteConfig.name}`,
    description: service.description,
    openGraph: { title: `${service.title} | ${siteConfig.name}`, description: service.description, images: [{ url: service.image, width: 800, height: 600, alt: service.title }] },
  };
}

export default function ServicePage({ params }: ServicePageProps) {
  const service = servicesData.find((s) => s.slug === params.slug);
  if (!service) notFound();
  const currentIndex = servicesData.findIndex((s) => s.slug === params.slug);
  const prevService = currentIndex > 0 ? servicesData[currentIndex - 1] : null;
  const nextService = currentIndex < servicesData.length - 1 ? servicesData[currentIndex + 1] : null;

  return (
    <>
      <Header />
      <main className="pt-24">
        <section className="relative h-[40vh] min-h-[300px] overflow-hidden">
          <Image src={service.image} alt={service.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/80 to-secondary/40" />
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="text-primary font-medium mb-2">Our Services</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white max-w-3xl">{service.title}</h1>
          </div>
        </section>
        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="prose prose-lg max-w-none"><p className="text-xl text-gray-600 leading-relaxed">{service.description}</p></div>
                {service.why && service.why.length > 0 && (
                  <div className="bg-gray-50 rounded-2xl p-8">
                    <h2 className="text-2xl font-bold text-secondary mb-6">Why Choose This Treatment?</h2>
                    <ul className="space-y-4">{service.why.map((reason, index) => (<li key={index} className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" /><span className="text-gray-700">{reason}</span></li>))}</ul>
                  </div>
                )}
                <div className="bg-primary/10 rounded-2xl p-8 text-center">
                  <h3 className="text-2xl font-bold text-secondary mb-4">Ready to get started?</h3>
                  <p className="text-gray-600 mb-6">Book a consultation with our team to discuss your treatment options.</p>
                  <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-secondary font-bold rounded-full hover:bg-primary/90 transition-colors">Book via WhatsApp</a>
                </div>
              </div>
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-secondary mb-4">All Services</h3>
                  <ul className="space-y-2">{servicesData.map((s) => (<li key={s.slug}><Link href={`/services/${s.slug}`} className={`block px-4 py-2 rounded-lg transition-colors ${s.slug === params.slug ? "bg-primary text-secondary font-medium" : "text-gray-600 hover:bg-gray-100"}`}>{s.title}</Link></li>))}</ul>
                </div>
                <div className="flex gap-3">
                  {prevService && (<Link href={`/services/${prevService.slug}`} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium text-center">← {prevService.title}</Link>)}
                  {nextService && (<Link href={`/services/${nextService.slug}`} className="flex-1 px-4 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm font-medium text-center">{nextService.title} →</Link>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
