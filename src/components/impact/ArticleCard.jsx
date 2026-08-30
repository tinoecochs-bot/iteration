import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ArticleCard({ title, description, url, index }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block border border-forest/10 p-6 hover:border-chlorophyll/50 transition-all bg-paper"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-moss text-xs uppercase tracking-widest font-display mb-2">
            Medium Article
          </p>
          <h3 className="font-display font-semibold text-lg text-forest mb-2 group-hover:text-moss transition-colors">
            {title}
          </h3>
          <p className="text-forest/60 text-sm leading-relaxed">
            {description}
          </p>
        </div>
        <ArrowUpRight
          size={20}
          className="text-forest/30 group-hover:text-chlorophyll transition-colors flex-shrink-0 mt-1"
        />
      </div>
    </motion.a>
  );
}