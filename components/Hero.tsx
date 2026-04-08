'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

import { translations, Language } from '@/lib/translations';

interface HeroProps {
  lang?: Language;
}

const Hero = ({ lang = 'en' }: HeroProps) => {
  const t = translations[lang].hero;
  const navT = translations[lang].nav;

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-90">
        <Image
          src="https://i.imghippo.com/files/mVT2260HVY.png?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Lifestyle Background"
          fill
          className="object-cover scale-105"
          priority
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/10 to-gray-900/50" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="inline-block text-xs font-bold tracking-[0.4em] uppercase mb-6 text-gold-400">
            {t.welcome}
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-light tracking-tight mb-8 leading-[1.1]">
            {t.title} <br />
            <span className="italic font-normal">{t.subtitle}</span>
          </h1>
          <p className="text-lg md:text-xl font-light text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed tracking-wide">
            {t.description}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="https://member.wisepremium.com"
              className="group relative px-10 py-4 bg-white text-black font-bold tracking-widest text-sm overflow-hidden transition-all hover:bg-gold-600 hover:text-white"
            >
              <span className="relative z-10">{navT.login}</span>
              <div className="absolute inset-0 bg-gold-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
            <Link
              href="https://member.wisepremium.com/#/auth/signup"
              className="px-10 py-4 border border-white/30 text-white font-bold tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
            >
              {navT.signup}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/50 mb-4">{t.scroll}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
