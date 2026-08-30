import React from "react";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-forest text-paper flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-chlorophyll uppercase tracking-widest text-sm font-semibold mb-6">
          Tino Eco
        </p>

        <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight">
          From Doomism
          <br />
          <span className="text-chlorophyll">to Action.</span>
        </h1>

        <p className="mt-8 text-paper/70 text-lg md:text-xl max-w-2xl mx-auto">
          Spreading environmental literacy and community engagement to turn
          environmental concern into meaningful action.
        </p>
      </div>
    </section>
  );
}