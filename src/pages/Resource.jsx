import React from "react";
import { motion } from "framer-motion";
import { Headphones, BookOpen, ArrowUpRight } from "lucide-react";

const ARTICLES = [
  {
    title: "The Danger of Invasive Plants",
    url: "https://medium.com/tino-eco/the-danger-of-invasive-plants-f5e1248a7ea6",
  },
  {
    title: "Natural vs. Artificial Turf",
    url: "https://medium.com/tino-eco/natural-vs-artificial-turf-debates-at-3-different-board-meetings-acf8800289f7",
  },
  {
    title: "Sustainable Perfume by Coty",
    url: "https://medium.com/tino-eco/coty-sustainable-perfume-010491c2504d",
  },
  {
    title: "Solar Paint",
    url: "https://medium.com/tino-eco/solar-paint-d987865e3e6e",
  },
  {
    title: "Droughts and Heat Waves",
    url: "https://medium.com/tino-eco/droughts-and-heat-waves-b5e75dd65356",
  },
  {
    title: "Biological Solar Cells",
    url: "https://medium.com/tino-eco/biological-solar-cells-18f9be04f4d0",
  },
];

export default function Resources() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="bg-forest topo-overlay py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.p
            className="text-chlorophyll font-display text-sm uppercase tracking-[0.3em] mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Resource Nexus
          </motion.p>
          <motion.h1
            className="text-paper font-display font-bold text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Listen. Read. Learn.
          </motion.h1>
          <motion.p
            className="text-paper/70 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Your hub for environmental education — from our podcast to in-depth
            research articles written by our publication team.
          </motion.p>
        </div>
      </section>

      {/* Podcast */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="text-chlorophyll" size={28} />
                <p className="text-moss font-display text-sm uppercase tracking-[0.3em]">
                  Podcast
                </p>
              </div>
              <h2 className="text-forest font-display font-bold text-3xl md:text-4xl mb-4">
                The Tino Eco Podcast
              </h2>
              <p className="text-forest/70 text-base leading-relaxed mb-6">
                Our podcast explores environmental topics through conversations
                with specialists, community leaders, and student activists.
                Each episode is crafted to align with Tino Eco's mission and
                current environmental events.
              </p>
              <a
                href="https://podcasters.spotify.com/pod/show/tino-eco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-forest text-paper font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-forest/90 transition-all"
              >
                <Headphones size={18} />
                Listen on Spotify
              </a>
            </div>
            <div className="border border-forest/10 p-8 bg-forest rounded-sm">
              <img
                src="https://media.base44.com/images/public/6a504e6834771354b3d09ead/4339b2140_image.png"
                alt="Tino Eco podcast on Spotify"
                className="w-full rounded-sm mb-6"
              />
              <p className="text-paper/70 text-sm text-center italic">
                Our team recording environmental discussions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-forest topo-overlay py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="text-chlorophyll" size={28} />
            <p className="text-chlorophyll font-display text-sm uppercase tracking-[0.3em]">
              Publications
            </p>
          </div>
          <h2 className="text-paper font-display font-bold text-3xl md:text-4xl mb-4">
            Article Library
          </h2>
          <p className="text-paper/60 text-sm mb-12 max-w-xl">
            Research and writing by our publication team, covering topics from
            renewable energy to ecosystem preservation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARTICLES.map((article, i) => (
              <motion.a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between border border-moss/30 p-5 hover:border-chlorophyll/50 transition-all"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <span className="text-paper font-display font-medium text-sm group-hover:text-chlorophyll transition-colors">
                  {article.title}
                </span>
                <ArrowUpRight
                  size={16}
                  className="text-paper/30 group-hover:text-chlorophyll transition-colors flex-shrink-0 ml-3"
                />
              </motion.a>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://medium.com/tino-eco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-chlorophyll text-forest font-bold text-sm uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-chlorophyll/90 transition-all"
            >
              Browse All on Medium
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}