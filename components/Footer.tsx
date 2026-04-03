'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'motion/react';

import { translations, Language } from '@/lib/translations';

interface FooterProps {
  lang?: Language;
}

const Footer = ({ lang = 'en' }: FooterProps) => {
  const t = translations[lang].footer;
  const navT = translations[lang].nav;

  const quickLinks = [
    { name: navT.home, href: lang === 'en' ? '/' : '/cn' },
    { name: navT.concierge, href: lang === 'en' ? '/concierge' : '/cn/concierge' },
    { name: navT.news, href: lang === 'en' ? '/news' : '/cn/news' },
    { name: navT.contact, href: lang === 'en' ? '/contact' : '/cn/contact' },
    { name: navT.art, href: 'https://wisepremium.com/art' },
  ];

  return (
    <footer className="py-24 md:py-32 bg-gray-900 border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-24">
          
          {/* Logo Side */}
          <div className="lg:col-span-2">
            <Link href={lang === 'en' ? '/' : '/cn'} className="relative w-56 h-16 block mb-8">
              <Image
                src="https://i.imghippo.com/files/Twe9225Xg.png"
                alt="Wise Premium Logo"
                fill
                className="object-contain"
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-white/50 font-light leading-relaxed tracking-wide max-w-md">
              {t.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-gold-500 mb-8">
              {t.quickLinks}
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-gold-400 transition-colors font-light tracking-wide"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.3em] uppercase text-gold-500 mb-8">
              {t.legal}
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacy.html" className="text-white/60 hover:text-gold-400 transition-colors font-light tracking-wide">
                  {t.privacy}
                </Link>
              </li>
              <li>
                <Link href="/tnc.html" className="text-white/60 hover:text-gold-400 transition-colors font-light tracking-wide">
                  {t.terms}
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-white/30 text-xs font-medium tracking-[0.2em] uppercase">
            {t.copyright}
          </p>
          <div className="flex space-x-8 text-xs font-medium tracking-[0.2em] uppercase text-white/30">
            <span>{t.reserved}</span>
            <span>{t.designed}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
