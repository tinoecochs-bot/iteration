import React from "react";
import { motion } from "framer-motion";
import OfficerCard from "@/components/about/OfficerCard";
import { Leaf, Heart, Eye } from "lucide-react";

const OFFICERS = [
  { name: "Zainab Naqvi", role: "President" },
  { name: "Vaibhavi Narayan", role: "VP of External" },
  { name: "Chaitra Vutukuru", role: "VP of Internal" },
  { name: "Sahasra Puvvada", role: "VP of Press" },
  { name: "Bhavishya Veeresh", role: "Website Lead" },
  { name: "Hargun Virk", role: "Public Relations Lead" },
];

const VALUES = [
  {
    icon: Leaf,
    title: "Environmental Literacy",
    desc: "We believe informed communities are empowered communities. Through education, we break down complex environmental topics into accessible knowledge.",
  },
  {
    icon: Heart,
    title: "Community Engagement",
    desc: "Environmental change happens at the grassroots level. We build networks of action through cleanups, events, and direct community involvement.",
  },
  {
    icon: Eye,
    title: "Anti-Doomism",
    desc: "We reject environmental doomism. By providing tangible opportunities for impact, we transform anxiety into agency and despair into action.",
  },
];

const OPEN_POSITIONS = [
  {
    title: "Member Engagement Lead",
    duties: [
      "Inform members about meetings, opportunities, and events",
      "Send general member emails and manage communications",
      "Manage volunteer hour sheet and member applications",
      "Find and share volunteer opportunities",
      "Lead Adopt-a-Park processes and attend every park cleanup",
      "Plan Adopt-a-Park meetings and store supplies",
    ],
  },
  {
    title: "Podcasting Director",
    duties: [
      "Create plans for podcast themes, guests, scripts, and editing",
      "Create content aligned with Tino Eco mission and current events",
      "Oversee scriptwriting, logistics, and content accuracy",
      "Work closely with team of directors to release episodes",
      "Coordinate with members supporting podcast development",
    ],
  },
  {
    title: "Publication Lead",
    duties: [
      "Review publication sign-ups and organize into teams",
      "Approve topics and articles, guide members through the process",
      "Check in with writers to ensure progress",
      "Manage Medium platform and enforce publication criteria",
      "Coordinate with VP of Press and Web Lead",
    ],
  },
];

export default function About() {
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
            About Us
          </motion.p>
          <motion.h1
            className="text-paper font-display font-bold text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            The Leadership Collective
          </motion.h1>
          <motion.p
            className="text-paper/70 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Student-led, community-driven. Meet the team behind Tino Eco's
            mission to combat environmental doomism with action.
          </motion.p>
        </div>
      </section>

      {/* Values */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-moss font-display text-sm uppercase tracking-[0.3em] mb-2">
            Our Values
          </p>
          <h2 className="text-forest font-display font-bold text-3xl md:text-4xl mb-12">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                className="border border-forest/10 p-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <value.icon className="text-chlorophyll mb-4" size={32} />
                <h3 className="font-display font-semibold text-forest text-xl mb-3">
                  {value.title}
                </h3>
                <p className="text-forest/70 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Officers */}
      <section className="bg-forest topo-overlay py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-chlorophyll font-display text-sm uppercase tracking-[0.3em] mb-2">
            Leadership
          </p>
          <h2 className="text-paper font-display font-bold text-3xl md:text-4xl mb-12">
            Our Officers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {OFFICERS.map((officer, i) => (
              <OfficerCard key={i} {...officer} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-moss font-display text-sm uppercase tracking-[0.3em] mb-2">
            Now Hiring
          </p>
          <h2 className="text-forest font-display font-bold text-3xl md:text-4xl mb-4">
            Open Leadership Positions
          </h2>
          <p className="text-forest/60 text-sm mb-12 max-w-xl">
            We're looking for passionate students to join our leadership team.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {OPEN_POSITIONS.map((pos, i) => (
              <motion.div
                key={i}
                className="border border-forest/10 p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <h3 className="font-display font-semibold text-forest text-lg mb-4">
                  {pos.title}
                </h3>
                <ul className="space-y-2">
                  {pos.duties.map((duty, j) => (
                    <li
                      key={j}
                      className="text-forest/70 text-sm flex items-start gap-2"
                    >
                      <span className="w-1 h-1 bg-chlorophyll rounded-full mt-2 flex-shrink-0" />
                      {duty}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="bg-forest py-16 border-t border-moss/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-chlorophyll font-display text-sm uppercase tracking-[0.3em] mb-8">
            Our Partners
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="text-center">
              <p className="text-paper/40 text-xs uppercase tracking-widest mb-2">
                Sponsor
              </p>
              <p className="text-paper font-display font-semibold text-xl">
                Silicon Valley Clean Energy
              </p>
            </div>
            <div className="hidden md:block w-px h-12 bg-moss/30" />
            <div className="text-center">
              <p className="text-paper/40 text-xs uppercase tracking-widest mb-2">
                Fiscal Sponsor
              </p>
              <p className="text-paper font-display font-semibold text-xl">
                Acterra
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}