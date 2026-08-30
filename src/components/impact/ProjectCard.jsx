import React from "react";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image, alt, index }) {
  return (
    <motion.div
      className="group relative overflow-hidden border border-forest/10"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6 bg-paper">
        <h3 className="font-display font-bold text-xl text-forest mb-2">
          {title}
        </h3>
        <p className="text-forest/70 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}