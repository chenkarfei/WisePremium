'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Smartphone, ShieldCheck, Plane, TrendingUp, Headphones, CreditCard } from 'lucide-react';

import { translations, Language } from '@/lib/translations';

interface WhyChooseUsProps {
  lang?: Language;
}

const WhyChooseUs = ({ lang = 'en' }: WhyChooseUsProps) => {
  const t = translations[lang].whyChoose;

  const icons = [
    <Smartphone key="smartphone" className="w-8 h-8" />,
    <ShieldCheck key="shield" className="w-8 h-8" />,
    <Plane key="plane" className="w-8 h-8" />,
    <TrendingUp key="trending" className="w-8 h-8" />,
    <Headphones key="headphones" className="w-8 h-8" />,
    <CreditCard key="creditcard" className="w-8 h-8" />,
  ];

  return (
    <section className="py-32 md:py-48 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs font-bold tracking-[0.4em] uppercase text-gold-600 mb-4 block">
              {t.tag}
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-8 text-gray-900 leading-tight">
              {t.title}
            </h2>
            <div className="w-20 h-[1px] bg-gold-600 mx-auto" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {t.features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group p-8 border border-gray-100 rounded-2xl hover:border-gold-200 hover:shadow-xl hover:shadow-gold-500/5 transition-all duration-500"
            >
              <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-gold-600 mb-8 group-hover:bg-gold-600 group-hover:text-white transition-all duration-500">
                {icons[index]}
              </div>
              <h3 className="text-xl font-bold tracking-widest text-gray-900 mb-4 uppercase">
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
  );
};

export default WhyChooseUs;
