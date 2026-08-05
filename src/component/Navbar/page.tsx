"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Skills", id: "skills" },
];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

        const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

        setMenuOpen(false);
      };

  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 ">
      <nav
        className={`rounded-3xl border border-white/20 backdrop-blur-xl transition-all duration-500
        ${
          scrolled 
            ? "w-full max-w-6xl bg-white/70 px-5 py-3 shadow-2xl"
            : "w-full max-w-7xl bg-white/40 px-6 py-5"
        }`}
      >
        {/* ================= Desktop ================= */}

        <div className="hidden md:grid grid-cols-[auto_1fr_auto] items-center">
          
          <Link
            href="/"
            className={`flex items-center transition-all duration-500 ${
              scrolled ? "gap-2" : "gap-4"
            }`}
          >
            <div
              className={`rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 transition-all duration-500 ${
                scrolled ? "h-9 w-9" : "h-12 w-12"
              }`}
            />
            <h1
              className={`transition-all duration-500 ${
                scrolled
                  ? "text-3xl md:text-3xl lg:text-4xl"
                  : "text-4xl md:text-4xl lg:text-5xl"
              }`}
            >
              Sangam
            </h1>
          </Link>

          {/* Navigation */}
          <div className="flex justify-center">
            <ul
              className={`flex items-center transition-all duration-500 ${
                scrolled
                  ? "gap-5 md:gap-6 lg:gap-9"
                  : "gap-6 md:gap-8 lg:gap-12"
              }`}
            >
              {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group relative text-base md:text-lg lg:text-xl text-slate-700 transition hover:text-black"
                  >
                    {item.name}

                    <span className="absolute -bottom-1 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div
            className={`flex items-center transition-all duration-500 ${
              scrolled
                ? "gap-2 md:gap-3 lg:gap-4"
                : "gap-3 md:gap-4 lg:gap-5"
            }`}
          >
            <button
              className={`rounded-2xl bg-slate-900 font-semibold text-white shadow-lg transition-all duration-500 hover:bg-violet-600 ${
                scrolled
                  ? "px-4 py-2 text-sm"
                  : "px-5 md:px-6 lg:px-7 py-2.5 lg:py-3 text-sm lg:text-base"
              }`}
            >
              Contact Me
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between md:hidden">
          <Link href="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400" />

            <h1 className="text-3xl font-black">Sangam</h1>
          </Link>

          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}

        <div
          className={`overflow-hidden transition-all duration-500 md:hidden ${
            menuOpen ? "mt-6 max-h-96" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col items-center gap-6">
            {navigation.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-lg font-semibold"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
          </ul>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button className="rounded-2xl bg-slate-900 px-6 py-3 text-white">
              Contact Me
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}