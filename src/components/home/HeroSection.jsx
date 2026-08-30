import React from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const LOGO_IMG = "https://media.base44.com/images/public/6a504e6834771354b3d09ead/76e3c0fcc_image.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-forest topo-overlay overflow-hidden">
      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto py-20">
        <motion.img
          src={LOGO_IMG}
          alt="Tino Eco Logo"
          className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="font-display font-bold text-5xl md:text-7xl lg:text-8xl text-paper leading-none tracking-tight mb-6"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          From Doomism
          <br />
          <span className="text-chlorophyll">to Action</span>
        </motion.h1>

        <motion.p
          className="text-paper/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          Tino Eco is a youth-led environmental nonprofit spreading
          environmental literacy and engagement on a community level.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a
            href="https://docs.google.com/forms/d/1eViUoOko0ZFq00xjR02L89zwgX1DRL6PCl9m2Vlw0Is/edit?usp=forms_home&ouid=107292134763457186338&ths=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-chlorophyll text-forest font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-chlorophyll/90 transition-all"
          >
            Join the Movement
          </a>
          <a
            href="#initiatives"
            className="border border-paper/30 text-paper font-semibold text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:border-chlorophyll hover:text-chlorophyll transition-all"
          >
            Our Initiatives
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/50"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={24} />
      </motion.div>
    </section>
  );
}