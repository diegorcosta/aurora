import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Building2,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  Home,
  MapPin,
  PawPrint,
  Phone,
  Sparkles,
  Trees,
  Waves,
  Wifi,
} from "lucide-react";
import "./App.css";

import logoAurora from "./assets/img/logo-aurora.svg";
import logoAuroraHeader from "./assets/img/logo-aurora-header.svg";
import heroAurora from "./assets/img/hero-aurora.jpg";
import auroraFacade from "./assets/img/aurora-facade.jpg";
import auroraLifestyle from "./assets/img/aurora-lifestyle.jpg";
import auroraLazer from "./assets/img/aurora-lazer.jpg";
import folderLado01 from "./assets/img/folder-lado-01.jpg";
import folderLado02 from "./assets/img/folder-lado-02.jpg";
import apt01 from "./assets/img/apt01.png";
import apt02 from "./assets/img/apt02.png";
import apt03 from "./assets/img/apt03.png";
import apt04 from "./assets/img/apt04.png";
import diferencial01 from "./assets/img/diferencial-01.jpg";
import diferencial02 from "./assets/img/diferencial-02.jpg";
import diferencial03 from "./assets/img/diferencial-03.jpg";
import diferencial04 from "./assets/img/diferencial-04.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 46, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.78, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 54, scale: 0.96, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.82, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.05,
    },
  },
};

const apartments = [
  {
    name: "Apto. 01",
    area: "86,76 m²",
    image: apt01,
    description: "Ambientes bem distribuídos para quem valoriza amplitude, integração e praticidade.",
  },
  {
    name: "Apto. 02",
    area: "83,27 m²",
    image: apt02,
    description: "Planta inteligente com espaços funcionais para uma rotina leve e confortável.",
  },
  {
    name: "Apto. 03",
    area: "79,42 m²",
    image: apt03,
    description: "Opção compacta e bem aproveitada, ideal para viver com conforto no dia a dia.",
  },
  {
    name: "Apto. 04",
    area: "79,72 m²",
    image: apt04,
    description: "Distribuição equilibrada para unir aconchego, privacidade e bom aproveitamento.",
  },
];

const leisureItems = [
  { title: "Academia", icon: Dumbbell },
  { title: "Piscina", icon: Waves },
  { title: "Playground", icon: Sparkles },
  { title: "Pet place", icon: PawPrint },
  { title: "Coworking", icon: Wifi },
  { title: "Salão de festas", icon: Home },
  { title: "Espaço gourmet", icon: Building2 },
  { title: "Gazebo", icon: Trees },
];

const differentials = [
  {
    title: "Plantas inteligentes",
    image: diferencial01,
    text: "Ambientes bem resolvidos, com metragens aproveitadas para favorecer conforto, circulação e funcionalidade.",
  },
  {
    title: "Arquitetura contemporânea",
    image: diferencial02,
    text: "Linhas elegantes, fachada atual e uma linguagem visual pensada para valorizar o empreendimento.",
  },
  {
    title: "Lazer para todos os momentos",
    image: diferencial03,
    text: "Espaços de descanso, encontro, movimento e convivência para ampliar a experiência de morar.",
  },
  {
    title: "Localização prática",
    image: diferencial04,
    text: "No Itararé, perto de serviços, comércios, supermercados e importantes vias de acesso da cidade.",
  },
];

const gallery = [
  { title: "Fachada", image: auroraFacade },
  { title: "Conceito", image: auroraLifestyle },
  { title: "Lazer", image: auroraLazer },
  { title: "Folder institucional", image: folderLado01 },
  { title: "Informações do empreendimento", image: folderLado02 },
];

const sectionIds = ["inicio", "conceito", "localizacao", "apartamentos", "lazer", "diferenciais", "galeria", "contato"];

const WHATSAPP_NUMBER = "5583999999999";
const ADDRESS = "Rua Alzira Ramos de Figueiredo, 300 — Itararé, Campina Grande/PB";
const MAP_SRC =
  "https://www.google.com/maps?q=Rua%20Alzira%20Ramos%20de%20Figueiredo%2C%20300%20-%20Itarar%C3%A9%2C%20Campina%20Grande%20PB&output=embed";

function SectionLabel({ children }) {
  return <span className="section-label">{children}</span>;
}

function Button({ href, children, variant = "primary" }) {
  return (
    <a className={`button button-${variant}`} href={href}>
      <span>{children}</span>
      <ArrowRight size={18} strokeWidth={2.4} />
    </a>
  );
}

function WhatsAppIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M16.01 3.2c-7.05 0-12.78 5.68-12.78 12.67 0 2.23.59 4.4 1.7 6.31L3.2 28.8l6.82-1.78a12.9 12.9 0 0 0 5.99 1.51c7.05 0 12.79-5.68 12.79-12.66S23.06 3.2 16.01 3.2Zm0 23.16c-1.9 0-3.76-.51-5.38-1.47l-.39-.23-4.05 1.06 1.08-3.91-.25-.4a10.36 10.36 0 0 1-1.61-5.54c0-5.78 4.75-10.49 10.6-10.49 5.84 0 10.6 4.71 10.6 10.49s-4.76 10.49-10.6 10.49Zm5.82-7.86c-.32-.16-1.88-.92-2.17-1.02-.29-.11-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.24-.69.08-.32-.16-1.35-.49-2.57-1.57-.95-.84-1.59-1.88-1.78-2.19-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.55.16-.18.21-.31.32-.52.11-.21.05-.39-.03-.55-.08-.16-.71-1.69-.97-2.31-.26-.6-.52-.52-.71-.53h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.62s1.13 3.03 1.29 3.24c.16.21 2.22 3.36 5.38 4.71.75.32 1.33.51 1.79.65.75.24 1.44.21 1.98.13.6-.09 1.88-.76 2.14-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.61-.37Z" />
    </svg>
  );
}

function NextSectionButton() {
  const goToNextSection = () => {
    const currentY = window.scrollY + window.innerHeight * 0.38;
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const nextSection = sections.find((section) => section.offsetTop > currentY) || sections[0];
    nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <button className="next-section-button" type="button" onClick={goToNextSection} aria-label="Ir para a próxima seção">
      <span>Próxima</span>
      <ArrowDown size={18} />
    </button>
  );
}

export default function LandingPage() {
  const galleryRef = useRef(null);
  const [activeGallery, setActiveGallery] = useState(0);

  const whatsappLink = useMemo(() => {
    const message = encodeURIComponent(
      "Olá, tenho interesse no Aurora Residence e gostaria de receber mais informações.",
    );

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
  }, []);

  const scrollGallery = (direction) => {
    const element = galleryRef.current;
    if (!element) return;

    element.scrollBy({ left: direction * element.clientWidth, behavior: "smooth" });
  };

  const updateActiveGallery = () => {
    const element = galleryRef.current;
    if (!element) return;

    const index = Math.round(element.scrollLeft / element.clientWidth);
    setActiveGallery(index);
  };

  useEffect(() => {
    document.title = "Aurora Residence | Um novo ciclo começa aqui";
  }, []);

  return (
    <main className="site-shell">
      <NextSectionButton />

      <a className="floating-whatsapp" href={whatsappLink} aria-label="Falar pelo WhatsApp">
        <WhatsAppIcon />
      </a>

      <section className="hero-section" id="inicio">
        <motion.div
          className="hero-background"
          aria-hidden="true"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <img src={heroAurora} alt="" />
          <div className="hero-overlay" />
        </motion.div>

        <header className="site-header">
          <a href="#inicio" className="brand-link" aria-label="Aurora Residence">
            <img src={logoAuroraHeader} alt="Aurora Residence" />
          </a>

          <a className="header-contact" href={whatsappLink}>
            <Phone size={16} />
            <span>Fale conosco</span>
          </a>
        </header>

        <motion.div className="hero-content" initial="hidden" animate="visible" variants={stagger}>
          <motion.p className="eyebrow" variants={fadeUp}>
            Aurora Residence • Itararé • Campina Grande/PB
          </motion.p>

          <motion.h1 variants={fadeUp}>Viver bem ganha uma nova luz.</motion.h1>

          <motion.p className="hero-text" variants={fadeUp}>
            Apartamentos de 79 m² a 86 m² em um empreendimento pensado para unir conforto,
            funcionalidade, lazer e uma rotina mais prática.
          </motion.p>

          <motion.div className="hero-actions" variants={fadeUp}>
            <Button href={whatsappLink}>Quero conhecer o Aurora</Button>
            <Button href="#apartamentos" variant="secondary">Ver apartamentos</Button>
          </motion.div>
        </motion.div>
      </section>

      <section className="intro-section" id="conceito">
        <motion.div
          className="intro-grid container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={stagger}
        >
          <motion.div className="intro-copy" variants={fadeUp}>
            <SectionLabel>Conceito</SectionLabel>
            <h2>Todo novo ciclo começa com uma escolha.</h2>
            <p>
              Escolher onde morar é também escolher como viver os próximos capítulos da sua
              história. O Aurora Residence nasce para quem busca mais conforto, praticidade e
              qualidade de vida em um endereço pensado para acompanhar a rotina com leveza,
              elegância e funcionalidade.
            </p>
            <p>
              Uma atmosfera acolhedora, plantas inteligentes e áreas de convivência completam a
              proposta de um empreendimento feito para morar bem em Campina Grande.
            </p>
          </motion.div>

          <motion.figure className="intro-image reveal-image" variants={fadeLeft}>
            <img src={auroraLifestyle} alt="Conceito visual do Aurora Residence" />
          </motion.figure>
        </motion.div>
      </section>

      <section className="location-section" id="localizacao">
        <div className="container location-layout">
          <motion.div
            className="location-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.28 }}
            variants={stagger}
          >
            <motion.div className="location-icon" variants={fadeUp}>
              <MapPin size={42} />
            </motion.div>

            <motion.div className="location-copy" variants={fadeUp}>
              <SectionLabel>Localização</SectionLabel>
              <h2>No Itararé, perto do que facilita sua rotina.</h2>
              <p>{ADDRESS}</p>
            </motion.div>

            <motion.div className="location-list" variants={fadeUp}>
              <span>Serviços</span>
              <span>Comércio</span>
              <span>Supermercados</span>
              <span>Vias de acesso</span>
            </motion.div>
          </motion.div>

          <motion.div
            className="map-frame"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={fadeUp}
          >
            <iframe
              title="Localização do Aurora Residence no Google Maps"
              src={MAP_SRC}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </motion.div>
        </div>
      </section>

      <section className="apartments-section" id="apartamentos">
        <div className="container">
          <motion.div
            className="section-heading centered"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Apartamentos</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp}>Apartamentos para o seu novo momento.</motion.h2>
            <motion.p variants={fadeUp}>
              Opções com metragens bem aproveitadas e ambientes pensados para proporcionar
              conforto, funcionalidade e praticidade.
            </motion.p>
          </motion.div>

          <motion.div
            className="apartments-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.14 }}
            variants={stagger}
          >
            {apartments.map((apartment) => (
              <motion.article className="apartment-card" key={apartment.name} variants={fadeUp}>
                <figure className="apartment-image">
                  <img src={apartment.image} alt={`Planta do ${apartment.name} do Aurora Residence`} />
                </figure>
                <div className="apartment-info">
                  <span>{apartment.name}</span>
                  <strong>{apartment.area}</strong>
                  <p>{apartment.description}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="leisure-section" id="lazer">
        <div className="container leisure-grid">
          <motion.div
            className="leisure-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Lazer e experiência</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp}>Espaços que ampliam sua experiência.</motion.h2>
            <motion.p variants={fadeUp}>
              O empreendimento reúne ambientes que favorecem o encontro, o descanso, o movimento
              e a convivência.
            </motion.p>

            <motion.div className="leisure-items" variants={stagger}>
              {leisureItems.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div className="leisure-item" key={item.title} variants={fadeUp}>
                    <Icon size={20} />
                    <span>{item.title}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <motion.figure
            className="leisure-image reveal-image"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeLeft}
          >
            <img src={auroraLazer} alt="Áreas de lazer do Aurora Residence" />
          </motion.figure>
        </div>
      </section>

      <section className="differentials-section" id="diferenciais">
        <div className="container">
          <motion.div
            className="section-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Diferenciais</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp}>Um projeto pensado para morar melhor.</motion.h2>
          </motion.div>

          <motion.div
            className="differentials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.16 }}
            variants={stagger}
          >
            {differentials.map((item, index) => (
              <motion.article className="differential-card" key={item.title} variants={fadeUp}>
                <figure>
                  <img src={item.image} alt={item.title} />
                </figure>
                <div>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="gallery-section" id="galeria">
        <div className="container">
          <motion.div
            className="gallery-heading"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Galeria</SectionLabel>
            </motion.div>
            <motion.h2 variants={fadeUp}>Conheça os ambientes do Aurora.</motion.h2>
            <motion.div className="gallery-controls" variants={fadeUp}>
              <button type="button" onClick={() => scrollGallery(-1)} aria-label="Imagem anterior">
                <ChevronLeft size={22} />
              </button>
              <button type="button" onClick={() => scrollGallery(1)} aria-label="Próxima imagem">
                <ChevronRight size={22} />
              </button>
            </motion.div>
          </motion.div>
        </div>

        <div className="gallery-track" ref={galleryRef} onScroll={updateActiveGallery}>
          {gallery.map((item) => (
            <figure className="gallery-slide" key={item.title}>
              <img src={item.image} alt={item.title} />
              <figcaption>{item.title}</figcaption>
            </figure>
          ))}
        </div>

        <div className="gallery-dots" aria-hidden="true">
          {gallery.map((item, index) => (
            <span className={index === activeGallery ? "active" : ""} key={item.title} />
          ))}
        </div>
      </section>

      <section className="final-cta" id="contato">
        <div className="container final-cta-grid">
          <motion.div
            className="final-copy"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={stagger}
          >
            <motion.img src={logoAurora} alt="Aurora Residence" variants={fadeUp} />
            <motion.h2 variants={fadeUp}>Seu próximo capítulo pode começar aqui.</motion.h2>
            <motion.p variants={fadeUp}>
              Fale com a equipe comercial e receba mais informações sobre plantas, disponibilidade,
              condições e visita ao stand de vendas.
            </motion.p>
            <motion.div className="hero-actions" variants={fadeUp}>
              <Button href={whatsappLink}>Falar pelo WhatsApp</Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="contact-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={fadeLeft}
          >
            <span>Stand de vendas</span>
            <strong>{ADDRESS}</strong>
            <a href={whatsappLink}>83 99999-9999</a>
          </motion.div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-grid">
          <img src={logoAurora} alt="Aurora Residence" />
          <p>Aurora Residence • {ADDRESS}</p>
          <p>Incorporação e construção: Itararé Construções.</p>
        </div>
      </footer>
    </main>
  );
}
