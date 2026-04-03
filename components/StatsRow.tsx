'use client';

import React from 'react';
import { motion } from 'motion/react';

import { translations, Language } from '@/lib/translations';

interface StatsRowProps {
  lang?: Language;
}

const StatsRow = ({ lang = 'en' }: StatsRowProps) => {
  const t = translations[lang].stats;
  
  const stats = [
    { label: t.partners, value: '50' },
    { label: t.members, value: '191' },
    { label: t.countries, value: '5' },
    { label: t.downloads, value: '268' },
  ];

  return (
    <section className="py-24 md:py-32 bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="text-center"
            >
              <span className="text-5xl md:text-7xl lg:text-8xl font-serif font-light text-gold-500 mb-4 block">
                {stat.value}
              </span>
              <span className="text-xs font-bold tracking-[0.4em] uppercase text-white/50 block">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsRow;
