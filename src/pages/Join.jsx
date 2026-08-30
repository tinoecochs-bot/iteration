import React from "react";
import { motion } from "framer-motion";
import { Globe, Megaphone, BookOpen, Users, Mail, Instagram, MessageCircle } from "lucide-react";
import TeamCard from "@/components/join/TeamCard";

const TEAMS = [
  {
    title: "Website Team",
    description:
      "Build and maintain a fun, engaging website that showcases Tino Eco's mission and activities.",
    formUrl:
      "https://docs.google.com/forms/d/1OgwqL3h0m7oohjP_mZbYLLQ5iOH_2tVM95j8-rViNYU/edit",
    icon: Globe,
  },
  {
    title: "Public Relations",
    description:
      "Handle social media and create posts for advertisements to spread awareness about our initiatives.",
    formUrl:
      "https://docs.google.com/forms/d/1R6WEg71PNhhruSLMudpwmPIKhlFo_EwYuXDU8D85f9A/viewform?edit_requested=true",
    icon: Megaphone,
  },
  {
    title: "Publication",
    description:
      "Write research articles, interview environmental specialists, and publish on our Medium platform.",
    formUrl:
      "https://docs.google.com/forms/d/1f_l6EaURTa9iUmQ-a8lcbm0puGUsssJGcVvCeb02Cj4/edit",
    icon: BookOpen,
  },
  {
    title: "Member Engagement & Outreach",
    description:
      "Help host environmental events like Adopt-a-Park, walkathon, member bonding events and more.",
    formUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSca9H1pcqx1UuRYOLRYGNmg8T7JaOTCHbYjRJV79EndtuNgWA/viewform",
    icon: Users,
  },
];

export default function Join() {
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
            Get Involved
          </motion.p>
          <motion.h1
            className="text-paper font-display font-bold text-4xl md:text-6xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Join the Movement
          </motion.h1>
          <motion.p
            className="text-paper/70 text-lg max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Whether you're a writer, organizer, designer, or just passionate
            about the environment — there's a place for you at Tino Eco.
          </motion.p>
        </div>
      </section>

      {/* Become a Member */}
      <section className="bg-chlorophyll py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-forest mb-4">
            Step 1: Become a Member
          </h2>
          <p className="text-forest/70 text-base mb-8 max-w-xl mx-auto">
            Fill out our membership application to join Tino Eco and get access
            to all our events, volunteer opportunities, and team sign-ups.
          </p>
          <a
            href="https://docs.google.com/forms/d/1eViUoOko0ZFq00xjR02L89zwgX1DRL6PCl9m2Vlw0Is/edit?usp=forms_home&ouid=107292134763457186338&ths=true"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-forest text-paper font-bold text-sm uppercase tracking-wider px-10 py-4 rounded-sm hover:bg-forest/90 transition-all"
          >
            Apply to Join
          </a>
        </div>
      </section>

      {/* Teams */}
      <section className="bg-paper py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-moss font-display text-sm uppercase tracking-[0.3em] mb-2">
            Step 2
          </p>
          <h2 className="text-forest font-display font-bold text-3xl md:text-4xl mb-4">
            Find Your Team
          </h2>
          <p className="text-forest/60 text-sm mb-12 max-w-xl">
            Once you're a member, sign up for the team that matches your skills
            and interests.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {TEAMS.map((team, i) => (
              <TeamCard key={i} {...team} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Connect */}
      <section className="bg-forest topo-overlay py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-chlorophyll font-display text-sm uppercase tracking-[0.3em] mb-2">
            Step 3
          </p>
          <h2 className="text-paper font-display font-bold text-3xl md:text-4xl mb-12">
            Stay Connected
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Discord */}
            <motion.div
              className="border border-moss/30 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MessageCircle className="text-chlorophyll mx-auto mb-4" size={32} />
              <h3 className="text-paper font-display font-semibold text-lg mb-2">
                Join Our Discord
              </h3>
              <p className="text-paper/60 text-sm mb-6">
                Connect with fellow members, get updates, and participate in
                team discussions.
              </p>
              <a
                href="https://discord.gg/hKU4twfVs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-chlorophyll text-forest font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-chlorophyll/90 transition-all"
              >
                Join Discord
              </a>
            </motion.div>

            {/* Instagram */}
            <motion.div
              className="border border-moss/30 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Instagram className="text-chlorophyll mx-auto mb-4" size={32} />
              <h3 className="text-paper font-display font-semibold text-lg mb-2">
                Follow on Instagram
              </h3>
              <p className="text-paper/60 text-sm mb-6">
                Stay updated with our latest events, cleanups, and
                environmental content.
              </p>
              <a
                href="https://instagram.com/tino_eco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-chlorophyll text-forest font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-chlorophyll/90 transition-all"
              >
                @tino_eco
              </a>
            </motion.div>

            {/* Email */}
            <motion.div
              className="border border-moss/30 p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Mail className="text-chlorophyll mx-auto mb-4" size={32} />
              <h3 className="text-paper font-display font-semibold text-lg mb-2">
                Email Us
              </h3>
              <p className="text-paper/60 text-sm mb-6">
                Have questions? Reach out directly — we'd love to hear from
                you.
              </p>
              <a
                href="mailto:tinoeco.chs@gmail.com"
                className="inline-block bg-chlorophyll text-forest font-bold text-sm uppercase tracking-wider px-6 py-3 rounded-sm hover:bg-chlorophyll/90 transition-all"
              >
                Send Email
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}