import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Credentials" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled ? "border-ink bg-ink text-paper" : "border-ink/25 bg-transparent text-ink"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <a href="#top" className="font-display text-lg font-black uppercase">
          Aman Sharma<span className="text-paper">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-bold uppercase transition-opacity hover:opacity-60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className={`border-2 px-5 py-2 text-xs font-black uppercase transition-colors ${
              scrolled
                ? "border-paper hover:bg-paper hover:text-ink"
                : "border-ink bg-ink text-paper hover:bg-transparent hover:text-ink"
            }`}
          >
            Hire me
          </a>
        </div>

        <Button
          type="button"
          size="icon"
          variant="ghost"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="rounded-none md:hidden"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {open && (
        <div className="border-t border-line bg-ink text-paper md:hidden">
          <div className="flex flex-col px-5 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-line py-4 text-sm font-black uppercase"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}