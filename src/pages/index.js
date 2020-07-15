import React from 'react';

import MainTemplate from 'templates/MainTemplate/MainTemplate';
import Navbar from 'templates/Navbar/Navbar';
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate';
import ServicesTemplate from 'templates/ServicesTemplate/ServicesTemplate';
import AboutTemplate from 'templates/AboutTemplate/AboutTemplate';
import ContactTemplate from 'templates/ContactTemplate/ContactTemplate';
import Footer from 'templates/Footer/Footer';

const pageContent = {
  hero: {
    heading:
      'Nawyk zarządzania pieniędzmi jest ważniejszy niż ilość posiadanych pieniędzy',
    author: 'T. Harv Eker',
  },
  services: {
    cards: [
      'Optymalizacja Podatkowa',
      'Rozliczenia',
      'Ubezpieczenia',
      'Dokumenty Urzędowe',
      'Księgi Rachunkowe',
    ],
    detailed: [
      {
        heading: 'Ksiegowość',
        paragraph:
          'Zajmujemy się szeroko pojętą księgowością. Prowadzimy działalności takie jak m.in.: usługi budowlane, usługi transportowe , produkcja maszyn i sprzedaży samochodów.',
      },
      {
        heading: 'Ubezpieczenia',
        paragraph:
          'Zabezpieczymy cały Twój majątek. Oferujemy m. in. ubezpieczenia komunikacyjne i majątkowe. Kompleksowa obsługa floty.',
      },
    ],
  },
  about: {
    heading: 'O nas',
    paragraph:
      'Biurem rachunkowo- ubezpieczeniowym. Swoją ofertę kierujemy do małych i średnich firm. Dzięki wieloletniemu doświadczeniu usługi, które świadczymy są na największym poziomie. Za nasz największy sukces uznajemy zaufanie, jakim nas Państwo obdarzacie.',
  },
  contact: {
    name: 'Agnieszka Tułowiecka',
    email: 'agnieszkatul2@wp.pl',
    phone: '+48 538 777 372',
    adress: 'ul. Okrzei 3 lok. 3\n07-300 Ostrów Mazowiecka',
  },
};

const IndexPage = () => (
  <MainTemplate>
    <Navbar />
    <HeroTemplate content={pageContent.hero} />
    <ServicesTemplate content={pageContent.services} />
    <AboutTemplate content={pageContent.about} />
    <ContactTemplate content={pageContent.contact} />
    <Footer />
  </MainTemplate>
);

export default IndexPage;
