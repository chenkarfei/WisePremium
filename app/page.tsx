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
        imageSrc="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070&auto=format&fit=crop"
        lang={lang}
      />
      
      <FeatureSection
        title={t.concierge.title}
        description={t.concierge.description}
        imageSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop"
        reverse
        lang={lang}
      />
      
      <FeatureSection
        title={t.networking.title}
        description={t.networking.description}
        imageSrc="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop"
        lang={lang}
      />
      
      <FeatureSection
        title={t.affiliate.title}
        description={t.affiliate.description}
        imageSrc="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop"
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
