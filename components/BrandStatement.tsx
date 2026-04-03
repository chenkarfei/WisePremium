'use client';

import React from 'react';
import { motion } from 'motion/react';

import { translations, Language } from '@/lib/translations';

interface BrandStatementProps {
  lang?: Language;
}

const BrandStatement = ({ lang = 'en' }: BrandStatementProps) => {
  const t = translations[lang].brand;

  return (
    <section className="py-32 md:py-48 bg-gray-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold-600 mb-8 block">
            {t.philosophy}
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light mb-12 text-gray-900 leading-tight">
            {t.title}
          </h2>
          <div className="w-24 h-[1px] bg-gold-600 mx-auto mb-12" />
          <p className="text-xl md:text-2xl font-light text-gray-700 leading-relaxed tracking-wide italic">
            {t.statement}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStatement;
