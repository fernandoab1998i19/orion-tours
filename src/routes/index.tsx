import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Bus,
  ChevronRight,
  Coffee,
  Compass,
  Facebook,
  Globe,
  Hotel,
  MapPin,
  MessageCircle,
  Palmtree,
  ShieldCheck,
  Sparkles,
  Sun,
  TreePine,
  UtensilsCrossed,
  Waves,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/orion/Navbar";
import { Reveal } from "@/components/orion/Reveal";
import { WhatsAppButton } from "@/components/orion/WhatsAppButton";
import heroRio from "@/assets/hero-rio.jpg";
import rioCard from "@/assets/rio-card.jpg";
import spCard from "@/assets/sao-paulo-card.jpg";
import florianopolisCard from "@/assets/florianopolis-card.png";
import salvadorCard from "@/assets/salvador-card.png";
import iguacuCard from "@/assets/iguacu-card.png";
import bahamasCard from "@/assets/bahamas-card.png";
import bahamasResort from "@/assets/bahamas-resort.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Orion Tours | Viajes a Brasil y Las Bahamas en Familia" },
      {
        name: "description",
        content:
          "Descubrí la magia de Brasil y Las Bahamas con la seguridad que mereces. Paquetes completos a Río de Janeiro, São Paulo, Florianópolis, Salvador, Iguaçu y Bahamas.",
      },
      { property: "og:title", content: "Orion Tours | Viajes seguros a Brasil y Las Bahamas" },
      {
        property: "og:description",
        content:
          "Río de Janeiro, São Paulo, Florianópolis, Salvador de Bahía, Foz do Iguaçu y Las Bahamas con logística experta, guías seguros y paquete todo incluido.",
      },
    ],
  }),
  component: Index,
});

const razones = [
  {
    icon: ShieldCheck,
    title: "Tu seguridad y la de tu familia es prioridad",
    text: "Viaja con total respaldo, coordinación experta y medidas garantizadas para que tu única preocupación sea disfrutar con los tuyos.",
  },
  {
    icon: Sparkles,
    title: "Paquete completo, lo que ofrece la casa",
    text: "Armamos tu estancia soñada: Transporte, Hospedaje en los mejores hoteles, Desayuno, Almuerzo y Cena incluidos. Cero preocupaciones.",
  },
  {
    icon: MapPin,
    title: "Guías que conocen cada rincón",
    text: "Rutas estratégicas en Brasil y Las Bahamas, itinerarios seguros y acompañamiento permanente de la familia Orion Tours.",
  },
];

type CategoryId = "all" | "brasil" | "caribe" | "naturaleza";

const filterCategories = [
  { id: "all", label: "Todos los Destinos", icon: Globe, count: 6 },
  { id: "brasil", label: "Brasil (Capitales & Playas)", icon: Compass, count: 4 },
  { id: "caribe", label: "Caribe & Bahamas", icon: Palmtree, count: 1 },
  { id: "naturaleza", label: "Maravillas Naturales", icon: TreePine, count: 1 },
];

const destinos = [
  {
    id: "rio",
    category: "brasil",
    categoryLabel: "Brasil • Rio de Janeiro",
    img: rioCard,
    kicker: "Destino 01 • Capital Carioca",
    title: "Río de Janeiro: La Ciudad Maravillosa",
    badges: ["Playas icónicas", "Cristo Redentor", "Vida Nocturna"],
    text: "Siente la brisa en Copacabana e Ipanema. Te llevamos a los puntos estratégicos para unas fotos increíbles y una inmersión total en la cultura carioca, siempre con guías seguros.",
    waMsg: "Hola%20Orion%20Tours,%20quiero%20información%20sobre%20el%20paquete%20a%20Río%20de%20Janeiro.",
  },
  {
    id: "sp",
    category: "brasil",
    categoryLabel: "Brasil • São Paulo",
    img: spCard,
    kicker: "Destino 02 • Megaciudad",
    title: "São Paulo: El Corazón Cosmopolita",
    badges: ["Gastronomía Mundial", "Cultura & Museos", "Shopping Premium"],
    text: "Explora la metrópolis vibrante. Desde el Parque Ibirapuera hasta la Avenida Paulista, descubre los secretos y curiosidades de la ciudad que nunca duerme con nuestra logística experta.",
    waMsg: "Hola%20Orion%20Tours,%20quiero%20información%20sobre%20el%20paquete%20a%20São%20Paulo.",
  },
  {
    id: "florianopolis",
    category: "brasil",
    categoryLabel: "Brasil • Santa Catarina",
    img: florianopolisCard,
    kicker: "Destino 03 • Isla de la Magia",
    title: "Florianópolis: Playas Paradisiacas y Naturaleza",
    badges: ["42 Playas de Ensueño", "Surf & Dunas", "Relax Familiar"],
    text: "La capital de Santa Catarina lo tiene todo: playas de agua cristalina como Jurerê e Joaquina, gastronomía marina de primer nivel y un entorno súper seguro para disfrutar en familia.",
    waMsg: "Hola%20Orion%20Tours,%20quiero%20información%20sobre%20el%20paquete%20a%20Florianópolis.",
  },
  {
    id: "salvador",
    category: "brasil",
    categoryLabel: "Brasil • Bahía",
    img: salvadorCard,
    kicker: "Destino 04 • Cuna de la Cultura",
    title: "Salvador de Bahía: Historia, Color y Tradición",
    badges: ["Pelourinho Histórico", "Playas Cálidas", "Cultura Afrobravileña"],
    text: "Sumérgete en la magia colonial de Bahía. Camina por el Pelourinho, disfruta del faro da Barra y degusta la mejor gastronomía local en una aventura llena de alegría y seguridad.",
    waMsg: "Hola%20Orion%20Tours,%20quiero%20información%20sobre%20el%20paquete%20a%20Salvador%20de%20Bahía.",
  },
  {
    id: "iguacu",
    category: "naturaleza",
    categoryLabel: "Brasil • Paraná",
    img: iguacuCard,
    kicker: "Destino 05 • Maravilla Mundial",
    title: "Foz do Iguaçu: Cataratas Gigantes y Eco-Turismo",
    badges: ["7 Maravillas Naturales", "Parque de las Aves", "Paseos en Barco"],
    text: "Sorpréndete con una de las 7 Maravillas Naturales del Mundo. Un espectáculo de cascadas impresionante para toda la familia con excursiones guiadas, transporte y los mejores hoteles.",
    waMsg: "Hola%20Orion%20Tours,%20quiero%20información%20sobre%20el%20paquete%20a%20Foz%20do%20Iguaçu.",
  },
  {
    id: "bahamas",
    category: "caribe",
    categoryLabel: "Caribe • Bahamas",
    img: bahamasCard,
    kicker: "Destino 06 • Exclusivo Caribe",
    title: "Las Bahamas: El Paraíso del Caribe en Familia",
    badges: ["Aguas Turquesas", "Resorts 5 Estrellas", "Todo Incluido Familia"],
    text: "Sumérgete en playas de arena blanca y aguas cristalinas en Nassau y Exuma. Disfruta noches de lujo en los mejores hoteles con estancias ultra cómodas, desayunos, almuerzos y cenas servidas.",
    waMsg: "Hola%20Orion%20Tours,%20quiero%20información%20sobre%20el%20paquete%20a%20Las%20Bahamas.",
  },
];

const incluye = [
  { icon: Bus, label: "Transporte" },
  { icon: Hotel, label: "Hospedaje 5★" },
  { icon: Coffee, label: "Desayuno" },
  { icon: UtensilsCrossed, label: "Almuerzo y Cena" },
];

function Index() {
  const [scrollY, setScrollY] = useState(0);
  const [activeFilter, setActiveFilter] = useState<CategoryId>("all");

  useEffect(() => {
    let animationFrameId: number;
    const handleScroll = () => {
      if (window.scrollY < 1200) {
        setScrollY(window.scrollY);
      }
    };
    const onScroll = () => {
      animationFrameId = requestAnimationFrame(handleScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const filteredDestinos = activeFilter === "all"
    ? destinos
    : destinos.filter((d) => d.category === activeFilter);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <WhatsAppButton />

      <main>
        {/* HERO WITH PARALLAX EFFECT */}
        <section id="inicio" className="relative isolate overflow-hidden min-h-[100svh] flex flex-col justify-center">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img
              src={heroRio}
              alt="Vista aérea de Río de Janeiro al atardecer con el Pan de Azúcar"
              width={1920}
              height={1280}
              style={{
                transform: `translate3d(0, ${scrollY * 0.3}px, 0) scale(${1 + scrollY * 0.00025})`,
                willChange: "transform",
              }}
              className="size-full object-cover transition-transform duration-75 ease-out scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/80 to-primary/45" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgba(255,255,255,0.18),transparent_55%)]" />

          <div className="relative mx-auto flex w-full max-w-7xl flex-col justify-center px-5 pb-16 pt-28 sm:pb-20 sm:pt-36 lg:px-8">
            <Reveal variant="fade">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-3.5 py-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground backdrop-blur-md">
                <Sparkles className="size-3.5 text-accent shrink-0" />
                Agencia boliviana de viajes • Orion Tours
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-5 sm:mt-7 max-w-4xl text-3xl font-extrabold leading-[1.1] text-primary-foreground sm:text-5xl lg:text-7xl tracking-tight">
                Descubrí las mejores capitales de Brasil y{" "}
                <span className="bg-gradient-brand bg-clip-text text-transparent">
                  Bahamas en familia
                </span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-4 sm:mt-6 max-w-2xl text-sm leading-relaxed text-primary-foreground/90 sm:text-lg">
                Río de Janeiro, São Paulo, Florianópolis, Salvador de Bahía, Cataratas del Iguaçu y Las Bahamas.
                Hacemos de tu viaje familiar una experiencia inolvidable en los mejores hoteles con transporte,
                desayuno, almuerzo, cena y máxima seguridad garantizada.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="mt-8 sm:mt-10 flex flex-col gap-3.5 sm:flex-row">
                <Button variant="hero" size="xl" className="w-full sm:w-auto justify-center shadow-glow active:scale-[0.98]" asChild>
                  <a href="#destinos">
                    Explorar 6 Destinos Estrella <ArrowRight className="size-4" />
                  </a>
                </Button>
                <Button variant="heroGhost" size="xl" className="w-full sm:w-auto justify-center active:scale-[0.98]" asChild>
                  <a href="https://wa.me/59175542604" target="_blank" rel="noreferrer">
                    <MessageCircle className="size-4" /> Hablar con un Asesor
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="mt-10 sm:mt-14 grid max-w-3xl grid-cols-2 gap-2.5 sm:gap-3.5 sm:grid-cols-4">
                {incluye.map((i) => (
                  <div
                    key={i.label}
                    className="flex items-center gap-2 rounded-xl sm:rounded-2xl border border-primary-foreground/20 bg-primary-foreground/10 px-3 py-2.5 sm:px-4 sm:py-3 backdrop-blur-md transition-colors hover:border-accent/60"
                  >
                    <i.icon className="size-4 shrink-0 text-accent" />
                    <span className="text-xs font-semibold text-primary-foreground sm:text-sm">
                      {i.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* NOSOTROS */}
        <section id="nosotros" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
              Por qué elegir la familia Orion Tours
            </span>
            <h2 className="mt-3 text-2xl font-bold text-primary sm:text-4xl lg:text-5xl tracking-tight">
              Viajar con la familia y total seguridad es el sello Orion Tours
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Coordinamos cada tramo de tu viaje con hoteles confortables, gastronomía completa
              (desayuno, almuerzo y cena) y protocolos de seguridad para toda la familia.
            </p>
          </Reveal>

          <div className="mt-12 sm:mt-16 grid gap-5 sm:gap-6 md:grid-cols-3">
            {razones.map((r, idx) => (
              <Reveal key={r.title} delay={idx * 120}>
                <article className="group h-full rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-card active:scale-[0.99]">
                  <span className="flex size-12 sm:size-14 items-center justify-center rounded-2xl bg-secondary transition-colors duration-300 group-hover:bg-gradient-brand">
                    <r.icon className="size-5 sm:size-6 text-primary transition-colors duration-300 group-hover:text-accent-foreground" />
                  </span>
                  <h3 className="mt-5 text-lg sm:text-xl font-bold text-primary">{r.title}</h3>
                  <p className="mt-2.5 text-xs sm:text-sm leading-relaxed text-muted-foreground">{r.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* DESTINOS */}
        <section id="destinos" className="bg-secondary/60 py-16 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
                Destinos Estrella
              </span>
              <h2 className="mt-3 text-2xl font-bold text-primary sm:text-4xl lg:text-5xl tracking-tight">
                Brasil y el Caribe: Experiencias inolvidables con la mejor estadía
              </h2>
            </Reveal>

            {/* DYNAMIC FILTER TABS */}
            <Reveal delay={100} className="mt-8">
              <div className="flex flex-wrap items-center gap-2 border-b border-border/80 pb-4">
                {filterCategories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setActiveFilter(cat.id as CategoryId)}
                    className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-300 active:scale-95 ${
                      activeFilter === cat.id
                        ? "bg-primary text-primary-foreground shadow-soft"
                        : "bg-card text-muted-foreground hover:bg-accent/10 hover:text-primary border border-border/80"
                    }`}
                  >
                    <cat.icon className={`size-4 ${activeFilter === cat.id ? "text-accent" : "text-muted-foreground"}`} />
                    <span>{cat.label}</span>
                    <span
                      className={`rounded-full px-2 py-0.5 text-[10px] font-extrabold ${
                        activeFilter === cat.id
                          ? "bg-accent text-accent-foreground"
                          : "bg-muted text-foreground"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                ))}
              </div>
            </Reveal>

            <div className="mt-8 sm:mt-12 grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredDestinos.map((d, idx) => (
                <Reveal key={d.id} delay={idx * 100}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-card active:scale-[0.99]">
                    <div className="relative h-56 overflow-hidden sm:h-72">
                      <img
                        src={d.img}
                        alt={d.title}
                        loading="lazy"
                        width={1200}
                        height={900}
                        className="size-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <span className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-primary backdrop-blur-md shadow-sm">
                        {d.kicker}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6 sm:p-8">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-accent mb-1">
                        {d.categoryLabel}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-primary tracking-tight">{d.title}</h3>

                      <div className="mt-3.5 flex flex-wrap gap-1.5 sm:gap-2">
                        {d.badges.map((b) => (
                          <span
                            key={b}
                            className="rounded-full bg-accent/10 px-2.5 py-1 text-[11px] sm:text-xs font-semibold text-accent"
                          >
                            {b}
                          </span>
                        ))}
                      </div>

                      <p className="mt-4 text-xs sm:text-sm leading-relaxed text-muted-foreground">{d.text}</p>

                      <div className="mt-6 flex flex-wrap gap-3 border-t border-border pt-5 sm:gap-4 sm:pt-6">
                        {incluye.slice(0, 3).map((i) => (
                          <span
                            key={i.label}
                            className="flex items-center gap-1.5 text-xs font-semibold text-primary"
                          >
                            <i.icon className="size-3.5 text-accent" />
                            {i.label}
                          </span>
                        ))}
                      </div>

                      <Button variant="accent" size="lg" className="mt-6 w-full justify-center active:scale-[0.98]" asChild>
                        <a
                          href={`https://wa.me/59175542604?text=${d.waMsg}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Ver Itinerario <ChevronRight className="size-4" />
                        </a>
                      </Button>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* BAHAMAS DESTINATION FEATURED BANNER */}
        <section className="mx-auto max-w-7xl px-5 py-10 sm:py-16 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-border bg-card shadow-card lg:flex">
              <div className="relative h-64 sm:h-80 lg:h-auto lg:w-1/2 overflow-hidden">
                <img
                  src={bahamasResort}
                  alt="Resort de lujo frente a las playas de Bahamas al atardecer"
                  className="size-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden" />
                <span className="absolute left-4 top-4 sm:left-6 sm:top-6 flex items-center gap-2 rounded-full bg-primary/90 px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-primary-foreground backdrop-blur-md">
                  <Sun className="size-3.5 text-accent" /> Experiencia Premium Bahamas
                </span>
              </div>

              <div className="flex flex-1 flex-col justify-center p-6 sm:p-10 lg:p-12">
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
                  <Waves className="size-4" /> Vacaciones de Ensueño en las Bahamas
                </span>
                <h3 className="mt-2.5 text-2xl font-extrabold text-primary sm:text-4xl tracking-tight">
                  Noches inolvidables en los mejores Hoteles & Resorts
                </h3>
                <p className="mt-3.5 text-xs sm:text-base leading-relaxed text-muted-foreground">
                  Te ofrecemos la estadía más cómoda para toda la familia. Disfruta de la mejor gastronomía
                  que ofrece la casa: desayunos buffet gourmet, almuerzos frescos a la orilla del mar y cenas
                  especiales. Todo con la calidez, soporte y seguridad de Orion Tours.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 border-t border-border/80 pt-5 sm:grid-cols-4">
                  <div className="rounded-xl bg-secondary/40 p-3 text-center sm:bg-transparent sm:p-0 sm:text-left">
                    <p className="text-xl sm:text-2xl font-extrabold text-accent">5★</p>
                    <p className="text-[11px] sm:text-xs font-medium text-muted-foreground">Hoteles de Lujo</p>
                  </div>
                  <div className="rounded-xl bg-secondary/40 p-3 text-center sm:bg-transparent sm:p-0 sm:text-left">
                    <p className="text-xl sm:text-2xl font-extrabold text-accent">100%</p>
                    <p className="text-[11px] sm:text-xs font-medium text-muted-foreground">Todo Incluido</p>
                  </div>
                  <div className="rounded-xl bg-secondary/40 p-3 text-center sm:bg-transparent sm:p-0 sm:text-left">
                    <p className="text-xl sm:text-2xl font-extrabold text-accent">24/7</p>
                    <p className="text-[11px] sm:text-xs font-medium text-muted-foreground">Seguridad Familiar</p>
                  </div>
                  <div className="rounded-xl bg-secondary/40 p-3 text-center sm:bg-transparent sm:p-0 sm:text-left">
                    <p className="text-xl sm:text-2xl font-extrabold text-accent">Exuma</p>
                    <p className="text-[11px] sm:text-xs font-medium text-muted-foreground">Excursiones</p>
                  </div>
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button variant="accent" size="xl" className="w-full sm:w-auto justify-center active:scale-[0.98]" asChild>
                    <a href="https://wa.me/59175542604" target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4" /> Cotizar Viaje a Las Bahamas
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CONTACTO / CTA */}
        <section id="contacto" className="mx-auto max-w-7xl px-5 py-16 sm:py-24 lg:px-8 lg:py-32">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-deep px-6 py-12 text-center shadow-card sm:px-14 lg:py-20">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,138,60,0.35),transparent_55%)]" />
              <div className="relative">
                <h2 className="mx-auto max-w-3xl text-2xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl tracking-tight">
                  Tu próxima aventura en Brasil o Las Bahamas empieza con un mensaje
                </h2>
                <p className="mx-auto mt-4 max-w-xl text-xs sm:text-base text-primary-foreground/85 leading-relaxed">
                  Contanos tus fechas y armamos un paquete a tu medida con la mejor estancia, transporte,
                  desayunos, almuerzos, cenas y guías coordinados por Orion Tours.
                </p>
                <div className="mt-8 flex flex-col justify-center gap-3.5 sm:flex-row">
                  <Button variant="hero" size="xl" className="w-full sm:w-auto justify-center shadow-glow active:scale-[0.98]" asChild>
                    <a href="https://wa.me/59175542604" target="_blank" rel="noreferrer">
                      <MessageCircle className="size-4" /> Reserva tu aventura
                    </a>
                  </Button>
                  <Button variant="heroGhost" size="xl" className="w-full sm:w-auto justify-center active:scale-[0.98]" asChild>
                    <a
                      href="https://www.facebook.com/profile.php?id=61562322302252"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook className="size-4" /> Seguinos en Facebook
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-5 px-5 py-10 text-center lg:flex-row lg:justify-between lg:px-8 lg:text-left">
          <div>
            <p className="font-display text-lg font-bold text-primary">Orion Tours</p>
            <p className="mt-1 text-xs sm:text-sm text-muted-foreground">
              Viajes seguros a Brasil y Las Bahamas, desde Bolivia.
            </p>
          </div>

          <a
            href="https://www.facebook.com/profile.php?id=61562322302252"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook de Orion Tours"
            className="flex items-center gap-3 rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-soft transition-transform duration-300 hover:scale-105 active:scale-95"
          >
            <Facebook className="size-5 sm:size-6" />
            <span className="text-xs sm:text-sm font-semibold">Orion Tours en Facebook</span>
          </a>

          <p className="text-xs sm:text-sm text-muted-foreground">© 2024 Orion Tours</p>
        </div>
      </footer>
    </div>
  );
}
