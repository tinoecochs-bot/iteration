import React from "react";
import { motion } from "framer-motion";

export default function OfficerCard({ name, role, index }) {
  return (
    <motion.div
      className="border border-moss/30 p-6 text-center hover:border-chlorophyll/50 transition-all"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-chlorophyll/20 flex items-center justify-center">
        <span className="text-chlorophyll font-display font-bold text-lg">
          {name.charAt(0)}
        </span>
      </div>
      <h3 className="font-display font-semibold text-paper text-base">
        {name}
      </h3>
      <p className="text-chlorophyll text-sm mt-1">{role}</p>
    </motion.div>
  );
}