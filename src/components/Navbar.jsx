import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", path: "/" },
  { label: "Impact", path: "/impact" },
  { label: "About", path: "/about" },
  { label: "Resources", path: "/resources" },
  { label: "Join Us", path: "/join" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-forest/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <span className="text-chlorophyll font-display font-bold text-xl tracking-tight">
              TINO ECO
            </span>
          </Link>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                  location.pathname === link.path
                    ? "text-chlorophyll"
                    : "text-paper/80 hover:text-chlorophyll"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/1eViUoOko0ZFq00xjR02L89zwgX1DRL6PCl9m2Vlw0Is/edit?usp=forms_home&ouid=107292134763457186338&ths=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chlorophyll text-forest font-bold text-sm px-5 py-2 rounded-sm hover:bg-chlorophyll/90 transition-all pulse-cta"
            >
              JOIN TEAM
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-paper p-2"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-forest pt-20 px-6 flex flex-col gap-6"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-2xl font-display font-semibold tracking-wide ${
                  location.pathname === link.path
                    ? "text-chlorophyll"
                    : "text-paper/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://docs.google.com/forms/d/1eViUoOko0ZFq00xjR02L89zwgX1DRL6PCl9m2Vlw0Is/edit?usp=forms_home&ouid=107292134763457186338&ths=true"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-chlorophyll text-forest font-bold text-lg px-6 py-3 rounded-sm text-center mt-4"
            >
              JOIN TEAM
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

