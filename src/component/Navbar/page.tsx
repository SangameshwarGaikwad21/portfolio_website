"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAVIGATION = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
];

const SECTION_IDS = [...NAVIGATION.map((n) => n.id), "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [progress, setProgress] = useState(0);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(y > 50);
      setProgress(max > 0 ? Math.min(y / max, 1) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ---------- Active section highlighting ---------- */
  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      // Section counts as "active" when it crosses the middle band of the viewport
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ---------- Mobile menu: Escape to close, lock body scroll, close on desktop resize ---------- */
  useEffect(() => {
    if (!menuOpen) return;

    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  }, []);

  const linkBase =
    "group relative rounded-md text-slate-600 transition-colors hover:text-slate-950 " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2";

  return (
    <header className="fixed inset-x-0 top-3 z-50 flex justify-center px-3 sm:top-5 sm:px-4">
      <nav
        aria-label="Primary"
        className={`relative w-full overflow-hidden rounded-3xl border border-white/30 backdrop-blur-xl
          transition-[max-width,padding,background-color,box-shadow] duration-500 ease-out
          motion-reduce:transition-none
          ${
            scrolled || menuOpen
              ? "max-w-6xl bg-white/80 px-4 py-2.5 shadow-xl shadow-slate-900/10 sm:px-5"
              : "max-w-7xl bg-white/50 px-4 py-4 sm:px-6"
          }`}
      >
        <div className="flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          {/* ---------- Logo ---------- */}
          <Link
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                scrollToSection("home");
              }
            }}
            className="flex w-fit items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            aria-label="Sangam — back to top"
          >
            <span
              aria-hidden="true"
              className={`rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 transition-all duration-500 motion-reduce:transition-none ${
                scrolled ? "h-8 w-8" : "h-10 w-10"
              }`}
            />
            <span
              className={`font-bold tracking-tight text-slate-900 transition-all duration-500 motion-reduce:transition-none ${
                scrolled ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"
              }`}
            >
              Sangam
            </span>
          </Link>

          {/* ---------- Desktop links ---------- */}
          <ul className="hidden items-center gap-2 md:flex lg:gap-4">
            {NAVIGATION.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => scrollToSection(item.id)}
                    aria-current={isActive ? "true" : undefined}
                    className={`${linkBase} px-3 py-2 text-base lg:text-lg ${
                      isActive ? "font-semibold text-slate-950" : ""
                    }`}
                  >
                    {item.name}
                    <span
                      aria-hidden="true"
                      className={`absolute inset-x-3 -bottom-0.5 h-0.5 origin-left rounded-full bg-gradient-to-r from-violet-500 to-cyan-400
                        transition-transform duration-300 motion-reduce:transition-none
                        ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                    />
                  </button>
                </li>
              );
            })}
          </ul>

          {/* ---------- Desktop CTA ---------- */}
          <div className="hidden justify-end md:flex">
            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className={`rounded-2xl bg-slate-900 font-semibold text-white shadow-lg shadow-slate-900/20
                transition-all duration-300 hover:bg-violet-600 active:scale-95
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2
                motion-reduce:transition-none ${
                  scrolled ? "px-4 py-2 text-sm" : "px-6 py-2.5 text-sm lg:text-base"
                }`}
            >
              Contact me
            </button>
          </div>

          {/* ---------- Mobile toggle ---------- */}
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-xl text-slate-900 transition hover:bg-slate-900/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 md:hidden"
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ---------- Mobile menu (grid-rows trick = smooth height animation) ---------- */}
        <div
          id="mobile-menu"
          inert={!menuOpen}
          className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out motion-reduce:transition-none md:hidden ${
            menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ul className="flex flex-col gap-1 pb-2 pt-4">
              {NAVIGATION.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(item.id)}
                      aria-current={isActive ? "true" : undefined}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left text-lg transition-colors
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
                          isActive
                            ? "bg-violet-500/10 font-semibold text-violet-700"
                            : "text-slate-700 hover:bg-slate-900/5"
                        }`}
                    >
                      {item.name}
                      {isActive && (
                        <span aria-hidden="true" className="h-2 w-2 rounded-full bg-gradient-to-br from-violet-500 to-cyan-400" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="mb-1 mt-3 w-full rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-violet-600 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-2"
            >
              Contact me
            </button>
          </div>
        </div>

        {/* ---------- Scroll progress ---------- */}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left bg-gradient-to-r from-violet-500 to-cyan-400"
          style={{ transform: `scaleX(${progress})` }}
        />
      </nav>
    </header>
  );
}