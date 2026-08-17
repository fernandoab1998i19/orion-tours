import { useEffect, useState } from "react";
import { ChevronRight, Menu, PlaneTakeoff, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Destinos Estrella", href: "#destinos" },
  { label: "Contacto", href: "#contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-soft backdrop-blur-xl"
          : open
            ? "border-b border-border/60 bg-background/95 shadow-soft backdrop-blur-xl"
            : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#inicio" className="flex items-center gap-2.5">
          <span className="flex size-10 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow active:scale-95 transition-transform">
            <PlaneTakeoff className="size-5 text-accent-foreground" strokeWidth={2.2} />
          </span>
          <span
            className={`font-display text-xl font-bold tracking-tight transition-colors ${
              scrolled || open ? "text-primary" : "text-primary-foreground"
            }`}
          >
            Orion Tours
          </span>
        </a>

        <ul className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  scrolled ? "text-foreground/80" : "text-primary-foreground/90"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button variant="accent" size="lg" className="hidden sm:inline-flex" asChild>
            <a href="https://wa.me/59175542604" target="_blank" rel="noreferrer">
              Reserva tu aventura
            </a>
          </Button>
          <button
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setOpen((v) => !v)}
            className={`flex size-10 items-center justify-center rounded-xl transition-colors active:scale-95 ${
              scrolled || open
                ? "bg-secondary text-foreground hover:bg-accent/10"
                : "bg-primary-foreground/15 text-primary-foreground hover:bg-primary-foreground/25"
            } lg:hidden`}
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="animate-in fade-in-0 slide-in-from-top-3 duration-200 border-t border-border/60 bg-background/95 px-5 pb-8 pt-3 backdrop-blur-2xl shadow-card lg:hidden">
          <ul className="flex flex-col space-y-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-xl px-3 py-3.5 text-base font-semibold text-foreground transition-colors hover:bg-accent/10 hover:text-accent active:bg-accent/15"
                >
                  <span>{l.label}</span>
                  <ChevronRight className="size-4 text-muted-foreground" />
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-6 pt-4 border-t border-border/40">
            <Button variant="accent" size="xl" className="w-full justify-center shadow-glow" asChild>
              <a
                href="https://wa.me/59175542604"
                target="_blank"
                rel="noreferrer"
                onClick={() => setOpen(false)}
              >
                Reserva tu aventura
              </a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
