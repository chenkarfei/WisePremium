import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureSection from '@/components/FeatureSection';
import BrandStatement from '@/components/BrandStatement';
import WhyChooseUs from '@/components/WhyChooseUs';
import StatsRow from '@/components/StatsRow';
import MembershipSection from '@/components/MembershipSection';
import Footer from '@/components/Footer';

import { translations, Language } from '@/lib/translations';

interface HomeProps {
  lang?: Language;
}

export default function Home({ lang = 'en' }: HomeProps) {
  const t = translations[lang].features;

  return (
    <main className="min-h-screen bg-white">
      <Navbar lang={lang} />
      <Hero lang={lang} />
      
      <FeatureSection
        title={t.lifestyle.title}
        description={t.lifestyle.description}
        imageSrc="https://i.imghippo.com/files/YpcK5337Ils.jpg?q=80&w=2080&auto=format&fit=crop"
        lang={lang}
      />
      
      <FeatureSection
        title={t.concierge.title}
        description={t.concierge.description}
        imageSrc="https://i.imghippo.com/files/KekO6326Gw.png?q=80&w=2070&auto=format&fit=crop"
        reverse
        lang={lang}
      />
      
      <FeatureSection
        title={t.networking.title}
        description={t.networking.description}
        imageSrc="https://i.imghippo.com/files/HHWM2131.jpg?q=80&w=2069&auto=format&fit=crop"
        lang={lang}
      />
      
      <FeatureSection
        title={t.affiliate.title}
        description={t.affiliate.description}
        imageSrc="https://i.imghippo.com/files/vpb2214Nw.jpg?q=80&w=2070&auto=format&fit=crop"
        reverse
        lang={lang}
      />

      <BrandStatement lang={lang} />
      <WhyChooseUs lang={lang} />
      <StatsRow lang={lang} />
      <MembershipSection lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
