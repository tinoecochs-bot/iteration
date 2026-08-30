import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function TeamCard({ title, description, formUrl, icon: Icon, index }) {
  return (
    <motion.a
      href={formUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-forest/10 p-6 hover:border-chlorophyll/50 transition-all bg-paper"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-start justify-between mb-4">
        <Icon className="text-chlorophyll" size={28} />
        <ArrowUpRight
          size={18}
          className="text-forest/20 group-hover:text-chlorophyll transition-colors"
        />
      </div>
      <h3 className="font-display font-semibold text-forest text-lg mb-2">
        {title}
      </h3>
      <p className="text-forest/60 text-sm leading-relaxed">{description}</p>
    </motion.a>
  );
}