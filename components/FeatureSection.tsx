'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

import { Language } from '@/lib/translations';

interface FeatureSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  reverse?: boolean;
  lang?: Language;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ title, description, imageSrc, reverse = false, lang = 'en' }) => {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: reverse ? 60 : -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 relative aspect-[4/5] md:aspect-[16/10] lg:aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 max-w-xl"
          >
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold-600 mb-4 block">
              {title}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gray-900 leading-tight">
              {title}
            </h2>
            <p className="text-lg text-gray-600 font-light leading-relaxed tracking-wide">
              {description}
            </p>
            <div className="mt-10 h-[1px] w-20 bg-gold-600" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
