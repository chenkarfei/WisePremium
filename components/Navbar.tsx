'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Globe } from 'lucide-react';

import { translations, Language } from '@/lib/translations';

interface NavbarProps {
  lang?: Language;
}

const Navbar = ({ lang = 'en' }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: lang === 'en' ? '/' : '/cn' },
    { name: t.concierge, href: lang === 'en' ? '/concierge' : '/cn/concierge' },
    { name: t.news, href: lang === 'en' ? '/news' : '/cn/news' },
    { name: t.contact, href: lang === 'en' ? '/contact' : '/cn/contact' },
    { name: t.art, href: 'https://wisepremium.com/art' },
  ];

  const logoHref = lang === 'en' ? '/' : '/cn';
  const otherLangHref = lang === 'en' ? '/cn' : '/';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href={logoHref} className="relative w-48 h-14">
          <Image
            src="https://i.imghippo.com/files/Twe9225Xg.png"
            alt="Wise Premium Logo"
            fill
            className="object-contain transition-all duration-500"
            priority
            referrerPolicy="no-referrer"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold tracking-[0.2em] transition-all duration-300 uppercase text-white hover:text-gold-400 drop-shadow-md"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="https://member.wisepremium.com"
            className="text-sm font-bold tracking-[0.2em] transition-all duration-300 uppercase border-b-2 text-gold-500 border-gold-500/30 hover:text-gold-400 hover:border-gold-400 drop-shadow-md"
          >
            {t.login}
          </Link>
          
          <div className="relative group">
            <button className="flex items-center space-x-2 text-sm font-bold tracking-[0.1em] transition-all duration-300 cursor-pointer uppercase text-white hover:text-gold-400 drop-shadow-md">
              <Globe className="w-4 h-4 text-gold-500" />
              <span>{t.currentLang}</span>
              <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
            </button>
            
            {/* Dropdown Menu */}
            <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <div className="w-48 shadow-2xl rounded-2xl overflow-hidden border backdrop-blur-2xl bg-gray-900/90 border-white/10">
                <Link 
                  href={otherLangHref} 
                  className="flex items-center space-x-3 px-6 py-4 text-sm font-medium transition-all text-white/80 hover:bg-white/10 hover:text-gold-400"
                >
                  <Globe className="w-4 h-4 text-gold-500" />
                  <span>{t.otherLang}</span>
                </Link>
              </div>
              
              {/* Arrow Decor */}
              <div className="absolute top-2 right-6 w-4 h-4 rotate-45 border-t border-l bg-gray-900/90 border-white/10" />
            </div>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 transition-colors text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 border-t shadow-2xl lg:hidden overflow-hidden bg-gray-900 border-white/10"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xl font-light tracking-[0.2em] uppercase text-white/90"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://member.wisepremium.com"
                className="text-xl font-bold tracking-[0.2em] border-b inline-block w-fit uppercase text-gold-500 border-gold-500/30"
                onClick={() => setIsOpen(false)}
              >
                {t.login}
              </Link>
              <div className="pt-8 border-t flex flex-col space-y-4 border-white/5">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-white/30">{t.language}</span>
                <Link 
                  href={otherLangHref} 
                  className="flex items-center justify-between text-lg font-light tracking-wide p-5 rounded-2xl border transition-all text-white/90 bg-white/5 border-white/5 hover:bg-white/10"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-gold-500" />
                    <span>{t.currentLang}</span>
                  </div>
                  <span className="text-[10px] text-gold-500 font-bold uppercase tracking-widest bg-gold-500/10 px-3 py-1.5 rounded-full border border-gold-500/20">{t.switchTo}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
