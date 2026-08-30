import React from "react";
import { Link } from "react-router-dom";
import { Mail, Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest text-paper border-t border-moss/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        {/* Big outlined title */}
        <div className="mb-12">
          <h2
            className="font-display font-bold text-6xl md:text-8xl lg:text-[10rem] leading-none tracking-tight text-chlorophyll"
          >
            TINO ECO
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 border-t border-moss/30 pt-12">
          {/* Mission */}
          <div>
            <h3 className="text-chlorophyll font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Mission
            </h3>
            <p className="text-paper/70 text-sm leading-relaxed">
              Spreading environmental literacy and engagement on a community
              level to tackle environmental doomism.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-chlorophyll font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Navigate
            </h3>
            <div className="flex flex-col gap-2">
              {[
                { label: "Home", path: "/" },
                { label: "Impact", path: "/impact" },
                { label: "About Us", path: "/about" },
                { label: "Resources", path: "/resources" },
                { label: "Join Us", path: "/join" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-paper/70 text-sm hover:text-chlorophyll transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-chlorophyll font-display font-semibold text-sm uppercase tracking-widest mb-4">
              Connect
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:tinoeco.chs@gmail.com"
                className="flex items-center gap-3 text-paper/70 hover:text-chlorophyll transition-colors text-sm"
              >
                <Mail size={18} />
                tinoeco.chs@gmail.com
              </a>
              <a
                href="https://instagram.com/tino_eco"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-paper/70 hover:text-chlorophyll transition-colors text-sm"
              >
                <Instagram size={18} />
                @tino_eco
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-paper/70 hover:text-chlorophyll transition-colors text-sm"
              >
                <Facebook size={18} />
                Tino Eco
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-moss/30 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-paper/40 text-xs">
            © {new Date().getFullYear()} Tino Eco. A youth-led environmental
            nonprofit. Fiscal Sponsor: Acterra.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-paper/40 text-xs">
              Sponsor: Silicon Valley Clean Energy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}