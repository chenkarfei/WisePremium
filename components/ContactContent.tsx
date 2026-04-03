'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Smartphone, ExternalLink, Globe } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface ContactPageProps {
  lang?: Language;
}

const ContactPage = ({ lang = 'en' }: ContactPageProps) => {
  const t = translations[lang].contact;
  const navT = translations[lang].nav;

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074&auto=format&fit=crop"
            alt="Contact Background"
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
              {navT.contact}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-8 leading-tight">
              {t.title}
            </h1>
            <p className="text-xl text-white/70 font-light tracking-widest uppercase">
              {t.subtitle}
            </p>
            <div className="w-24 h-[1px] bg-gold-500 mx-auto mt-12" />
          </motion.div>
        </div>
      </section>

      {/* Main Contact Content */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-light mb-8 text-gray-900 leading-tight">
                {t.subtitle}
              </h2>
              <p className="text-lg text-gray-600 font-light leading-relaxed tracking-wide mb-12">
                {t.description}
              </p>
              
              <div className="bg-gray-50 p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gold-500/5">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-14 h-14 bg-gold-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-gold-600/20">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block mb-1">
                      {t.emailLabel}
                    </span>
                    <a 
                      href={`mailto:${t.email}`}
                      className="text-xl font-medium text-gray-900 hover:text-gold-600 transition-colors"
                    >
                      {t.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-6">
                  <div className="w-14 h-14 bg-gray-900 rounded-2xl flex items-center justify-center text-white shadow-lg">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold tracking-widest text-gray-400 uppercase block mb-1">
                      Website
                    </span>
                    <span className="text-xl font-medium text-gray-900">
                      wisepremium.com
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* App Download Section */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="bg-gray-900 p-10 md:p-16 rounded-3xl text-white shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-600/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-gold-600/20 transition-all duration-700" />
              
              <div className="relative z-10">
                <Smartphone className="w-12 h-12 text-gold-500 mb-10" />
                <h3 className="text-2xl md:text-3xl font-serif font-light mb-8 leading-tight">
                  {t.appSection.title}
                </h3>
                <p className="text-white/70 font-light leading-relaxed tracking-wide mb-12">
                  {t.appSection.description}
                </p>
                <Link
                  href="https://play.google.com/store"
                  target="_blank"
                  className="inline-flex items-center space-x-4 px-10 py-5 bg-gold-600 text-white font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-lg shadow-gold-600/20"
                >
                  <span>{t.appSection.cta}</span>
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices Grid */}
      <section className="py-32 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold-600 mb-4 block">
                Global Presence
              </span>
              <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gray-900 leading-tight">
                Our Offices
              </h2>
              <div className="w-20 h-[1px] bg-gold-600 mx-auto" />
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {t.offices.map((office, index) => (
              <motion.div
                key={office.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white p-10 rounded-2xl border border-gray-100 shadow-lg shadow-gold-500/5 hover:border-gold-200 transition-all duration-500 group"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-gold-600 mb-8 group-hover:bg-gold-600 group-hover:text-white transition-all duration-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold tracking-widest text-gray-900 mb-6 uppercase">
                  {office.name}
                </h3>
                <p className="text-gray-500 font-light leading-relaxed tracking-wide">
                  {office.address}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
};

export default ContactPage;
