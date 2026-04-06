'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Calendar } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { translations, Language } from '@/lib/translations';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface NewsPageProps {
  lang?: Language;
}

const NewsPage = ({ lang = 'en' }: NewsPageProps) => {
  const t = translations[lang].news;
  const navT = translations[lang].nav;

  const articleImages = [
    "https://i.imghippo.com/files/Gmkp9538qWs.jpg?q=80&w=2070&auto=format&fit=crop", // Fior
    "https://i.imghippo.com/files/KmB4225KXA.jpg?q=80&w=2098&auto=format&fit=crop", // BlueDiamonds
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} />
      
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 md:pt-64 md:pb-48 bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
            alt="News Background"
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
              {navT.news}
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

      {/* Articles List */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            {t.articles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                className="group flex flex-col h-full"
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden shadow-xl mb-10">
                  <Image
                    src={articleImages[index]}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg flex items-center space-x-2 text-xs font-bold tracking-widest text-gray-900 shadow-sm">
                    <Calendar className="w-3 h-3 text-gold-600" />
                    <span>2023</span>
                  </div>
                </div>
                
                <h2 className="text-2xl md:text-3xl font-serif font-light mb-6 text-gray-900 group-hover:text-gold-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-gray-600 font-light leading-relaxed tracking-wide mb-10 flex-grow">
                  {article.description}
                </p>
                
                <Link
                  href={article.link}
                  target="_blank"
                  className="inline-flex items-center space-x-4 text-sm font-bold tracking-[0.3em] uppercase text-gray-900 hover:text-gold-600 transition-all group/link"
                >
                  <span>{article.cta}</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
                <div className="mt-6 h-[1px] w-20 bg-gold-600" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer lang={lang} />
    </main>
  );
};

export default NewsPage;
