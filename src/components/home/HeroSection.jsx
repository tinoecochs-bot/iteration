import React from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";

const LOGO_IMG =
  "https://media.base44.com/images/public/6a504e6834771354b3d09ead/76e3c0fcc_image.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-forest text-paper">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full border border-chlorophyll/40" />
        <div className="absolute -top-20 -right-20 h-[350px] w-[350px] rounded-full border border-chlorophyll/30" />
        <div className="absolute bottom-[-200px] left-[-150px] h-[500px] w-[500px] rounded-full border border-paper/20" />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-forest/40 via-transparent to-forest" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-28 lg:px-8">
        <div className="grid w-full items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Main copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 flex items-center gap-3"
            >
              <span className="h-px w-12 bg-chlorophyll" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-chlorophyll">
                Youth. Environment. Action.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-6xl font-bold leading-[0.9] tracking-tight sm:text-7xl lg:text-[7.5rem]"
            >
              From
              <br />
              <span className="text-chlorophyll">Doomism</span>
              <br />
              to Action.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-paper/70 md:text-xl"
            >
              Tino Eco is a youth-led environmental nonprofit turning
              environmental knowledge into meaningful community action.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="https://docs.google.com/forms/d/1eViUoOko0ZFq00xjR02L89zwgX1DRL6PCl9m2Vlw0Is/edit?usp=forms_home&ouid=107292134763457186338&ths=true"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 bg-chlorophyll px-7 py-4 text-sm font-bold uppercase tracking-wider text-forest transition-all hover:-translate-y-1 hover:shadow-xl"
              >
                Join the Movement
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              <a
                href="#initiatives"
                className="inline-flex items-center justify-center border border-paper/30 px-7 py-4 text-sm font-bold uppercase tracking-wider text-paper transition-all hover:border-chlorophyll hover:text-chlorophyll"
              >
                Explore Our Work
              </a>
            </motion.div>
          </div>

          {/* Logo / visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="hidden justify-center lg:flex"
          >
            <div className="relative flex h-[420px] w-[420px] items-center justify-center rounded-full border border-chlorophyll/20">
              <div className="absolute inset-8 rounded-full border border-chlorophyll/20" />
              <div className="absolute inset-16 rounded-full bg-chlorophyll/5" />

              <img
                src={LOGO_IMG}
                alt="Tino Eco"
                className="relative z-10 w-52 object-contain drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/40"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={22} />
      </motion.div>
    </section>
  );
}