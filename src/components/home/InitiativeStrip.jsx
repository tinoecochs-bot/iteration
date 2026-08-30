import React from "react";
import { BookOpen, Users, Sprout } from "lucide-react";

const initiatives = [
  {
    number: "01",
    icon: BookOpen,
    title: "Environmental Literacy",
    text: "Making environmental information understandable, accessible, and useful.",
  },
  {
    number: "02",
    icon: Users,
    title: "Community Engagement",
    text: "Connecting people with practical opportunities to create meaningful change.",
  },
  {
    number: "03",
    icon: Sprout,
    title: "Youth Leadership",
    text: "Giving young people the tools and confidence to lead environmental action.",
  },
];

export default function InitiativeStrip() {
  return (
    <section id="initiatives" className="bg-chlorophyll px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-forest/60">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-forest md:text-5xl">
            Turning concern into something useful.
          </h2>
        </div>

        <div className="grid gap-px overflow-hidden border border-forest/20 md:grid-cols-3">
          {initiatives.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group bg-chlorophyll p-8 transition-colors hover:bg-forest hover:text-paper md:p-10"
              >
                <div className="mb-12 flex items-center justify-between">
                  <Icon
                    size={28}
                    className="text-forest transition-colors group-hover:text-chlorophyll"
                  />
                  <span className="font-mono text-sm text-forest/50 group-hover:text-paper/40">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-2xl font-bold text-forest transition-colors group-hover:text-chlorophyll">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-forest/65 transition-colors group-hover:text-paper/65">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}