'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

import { translations, Language } from '@/lib/translations';

interface MembershipSectionProps {
  lang?: Language;
}

const MembershipSection = ({ lang = 'en' }: MembershipSectionProps) => {
  const t = translations[lang].membership;
  const navT = translations[lang].nav;

  return (
    <section className="py-32 md:py-48 bg-gray-50 overflow-hidden">
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
            <p className="text-lg text-gray-500 font-light tracking-widest uppercase">
              {t.subtitle}
            </p>
            <div className="w-20 h-[1px] bg-gold-600 mx-auto mt-8" />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Features Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-serif font-light mb-12 text-gray-900">
              {t.benefitsTitle}
            </h3>
            <ul className="space-y-8">
              {t.benefits.map((feature, index) => (
                <motion.li
                  key={feature}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center space-x-6 group"
                >
                  <div className="w-10 h-10 rounded-full bg-gold-100 flex items-center justify-center text-gold-600 group-hover:bg-gold-600 group-hover:text-white transition-all duration-300">
                    <Check className="w-5 h-5" />
                  </div>
                  <span className="text-lg text-gray-700 font-light tracking-wide">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Card Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-gold-500/10 border border-gray-100">
              <div className="relative w-full aspect-[1.586/1] mb-12">
                <Image
                  src="https://i.imghippo.com/files/iBG7970Qs.png"
                  alt="Wise Premium Card"
                  fill
                  className="object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-gray-400 mb-10">
                {t.cardTitle}
              </h4>
              
              <div className="space-y-8">
                {t.cardDetails.map((detail) => (
                  <div key={detail.label} className="flex justify-between items-center border-b border-gray-50 pb-4">
                    <span className="text-sm font-medium text-gray-500 uppercase tracking-widest">
                      {detail.label}
                    </span>
                    <span className="text-lg font-serif font-light text-gray-900">
                      {detail.value}
                    </span>
                  </div>
                ))}
              </div>

              <Link
                href="https://member.wisepremium.com/#/auth/signup"
                className="mt-12 w-full block text-center py-5 bg-gray-900 text-white font-bold tracking-widest text-sm hover:bg-gold-600 transition-all duration-300"
              >
                {navT.signup}
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
