import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/impact/ProjectCard";
import ArticleCard from "@/components/impact/ArticleCard";

const PROJECTS = [
  {
    title: "Adopt-a-Park: Rainbow Park",
    description:
      "We adopted Rainbow Park in Cupertino and host monthly cleanups, bringing together community members to restore and maintain our local green spaces.",
    image: "https://media.base44.com/images/public/6a504e6834771354b3d09ead/4d9cd6026_image.png",
    alt: "Volunteers at Rainbow Park cleanup with orange buckets",
  },
  {
    title: "Carbon Footprint Competition",
    description:
      "An inter-school competition challenging students to track and reduce their carbon footprints, promoting data-driven environmental awareness.",
    image: "https://media.base44.com/images/public/6a504e6834771354b3d09ead/2c42f4078_image.png",
    alt: "Impact Summit event",
  },
  {
    title: "Bobateeno",
    description:
      "A community boba tea event combining environmental education with social engagement, bringing together students and local community members.",
    image: "https://media.base44.com/images/public/6a504e6834771354b3d09ead/3a87fdc56_image.png",
    alt: "Bobateeno community event under green canopy",
  },
  {
    title: "SVYCA Summits & Festivals",
    description:
      "Active participation in SVYCA Youth Climate Summits, Earth Day and Arbor Day Festivals, building connections across the environmental movement.",
    image: "https://media.base44.com/images/public/6a504e6834771354b3d09ead/ade0271f5_image.png",
    alt: "Tino Eco members at environmental event",
  },
  {
    title: "Tino Eco Podcast",
    description:
      "Launched our environmental podcast on Spotify, interviewing specialists and discussing pressing environmental topics that matter to our community.",
    image: "https://media.base44.com/images/public/6a504e6834771354b3d09ead/4339b2140_image.png",
    alt: "Tino Eco podcast on Spotify",
  },
  {
    title: "Community Town Halls",
    description:
      "Hosting and participating in environmental town hall meetings, giving youth a voice in local environmental policy and community decisions.",
    image: "https://media.base44.com/images/public/6a504e6834771354b3d09ead/a311c19cb_image.png",
    alt: "Lehigh Quarry presentation board",
  },
];

const ARTICLES = [
  {
    title: "The Danger of Invasive Plants",
    description:
      "Exploring how invasive species threaten local ecosystems and what communities can do to combat them.",
    url: "https://medium.com/tino-eco/the-danger-of-invasive-plants-f5e1248a7ea6",
  },
  {
    title: "Natural vs. Artificial Turf",
    description:
      "Breaking down the debates at three different board meetings about the environmental impact of turf choices.",
    url: "https://medium.com/tino-eco/natural-vs-artificial-turf-debates-at-3-different-board-meetings-acf8800289f7",
  },
  {
    title: "Sustainable Perfume",
    description:
      "How Coty is pioneering sustainability in the fragrance industry and what it means for consumer choices.",
    url: "https://medium.com/tino-eco/coty-sustainable-perfume-010491c2504d",
  },
  {
    title: "Solar Paint",
    description:
      "An innovative technology that could turn any surface into a solar energy harvester.",
    url: "https://medium.com/tino-eco/solar-paint-d987865e3e6e",
  },
  {
    title: "Droughts and Heat Waves",
    description:
      "Understanding the increasing frequency and impact of droughts and heat waves on our communities.",
    url: "https://medium.com/tino-eco/droughts-and-heat-waves-b5e75dd65356",
  },
  {
    title: "Biological Solar Cells",
    description:
      "How nature-inspired solar technology could revolutionize renewable energy production.",
    url: "https://medium.com/tino-eco/biological-solar-cells-18f9be04f4d0",
  },
];

export default function Impact() {
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
            Our Impact
          </motion.p>
          <motion.h1
            className="text-paper font-display font-bold text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Proof of Action
          </motion.h1>
          <motion.p
            className="text-paper/70 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            From park cleanups to podcasts, carbon competitions to climate
            summits — here's what we've accomplished.
          </motion.p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-moss font-display text-sm uppercase tracking-[0.3em] mb-2">
            Projects
          </p>
          <h2 className="text-forest font-display font-bold text-3xl md:text-4xl mb-12">
            What We've Built
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, i) => (
              <ProjectCard key={i} {...project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="bg-forest topo-overlay py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-chlorophyll font-display text-sm uppercase tracking-[0.3em] mb-2">
            Latest Intelligence
          </p>
          <h2 className="text-paper font-display font-bold text-3xl md:text-4xl mb-4">
            Research & Writing
          </h2>
          <p className="text-paper/60 text-sm mb-12 max-w-xl">
            Our publication team researches and writes about pressing
            environmental topics. Read the full articles on Medium.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {ARTICLES.map((article, i) => (
              <ArticleCard key={i} {...article} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <a
              href="https://medium.com/tino-eco"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-chlorophyll text-forest font-bold text-sm uppercase tracking-wider px-8 py-3 rounded-sm hover:bg-chlorophyll/90 transition-all"
            >
              View All on Medium
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}