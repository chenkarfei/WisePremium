'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, Clock, ShieldCheck, Star, Plane, MapPin, Utensils, Users } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ConciergePageProps {
  lang?: Language;
}

const ConciergePage = ({ lang = 'en' }: ConciergePageProps) => {
  const t = translations[lang].concierge;
  const navT = translations[lang].nav;

  const icons = [
    <Clock key="clock" className="w-8 h-8" />,
    <Smartphone key="smartphone" className="w-8 h-8" />,
    <Star key="star" className="w-8 h-8" />,
  ];

  const sectionImages = [
    "https://i.imghippo.com/files/hZN7135V.jpg?q=80&w=2069&auto=format&fit=crop", // Luxury Travel
    "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2080&auto=format&fit=crop", // Luxury Vacation
    "https://i.imghippo.com/files/OZML6888ZY.jpg?q=80&w=2070&auto=format&fit=crop", // VIP Dining
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop", // About Us
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
            alt="Concierge Background"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold-400 mb-6 block">
              {navT.concierge}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/70 font-light tracking-widest uppercase">
              {t.hero.subtitle}
            </p>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto mt-12" />
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {t.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-gold-600 mx-auto mb-8 group-hover:bg-gold-600 group-hover:text-white transition-all duration-500">
                  {icons[index]}
                </div>
                <h3 className="text-xl font-bold tracking-widest text-gray-900 mb-6 uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed tracking-wide">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      {t.sections.map((section, index) => (
        <section key={section.title} className={`py-32 md:py-48 ${index % 2 === 1 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 1 ? 60 : -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="flex-1 relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image
                  src={sectionImages[index]}
                  alt={section.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="flex-1 max-w-xl"
              >
                <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gray-900 leading-tight">
                  {section.title}
                </h2>
                <p className="text-lg text-gray-600 font-light leading-relaxed tracking-wide mb-12">
                  {section.description}
                </p>
                <Link
                  href="https://member.wisepremium.com/#/auth/signup"
                  className="inline-block px-12 py-5 bg-gray-900 text-white font-bold tracking-widest text-sm hover:bg-gold-600 transition-all duration-300"
                >
                  {section.cta}
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <Footer lang={lang} />
    </main>
  );
};

export default ConciergePage;
