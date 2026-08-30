import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTABanner() {
  return (
    <section className="bg-chlorophyll py-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <motion.h2
          className="font-display font-bold text-3xl md:text-5xl text-forest mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Ready to Make a Difference?
        </motion.h2>
        <motion.p
          className="text-forest/70 text-lg mb-8 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          Join a network of student activists tackling the environmental
          challenges that matter most.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <a
            href="https://docs.google.com/forms/d/1eViUoOko0ZFq00xjR02L89zwgX1DRL6PCl9m2Vlw0Is/edit?usp=forms_home&ouid=107292134763457186338&ths=true"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-forest text-paper font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-forest/90 transition-all"
          >
            Apply Now
          </a>
          <Link
            to="/join"
            className="border-2 border-forest text-forest font-bold text-sm uppercase tracking-wider px-8 py-4 rounded-sm hover:bg-forest/10 transition-all"
          >
            Explore Teams
          </Link>
        </motion.div>
      </div>
    </section>
  );
}