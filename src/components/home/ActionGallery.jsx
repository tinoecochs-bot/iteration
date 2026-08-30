import React from "react";

export default function ActionGallery() {
  return (
    <section className="bg-paper text-forest py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-moss uppercase tracking-widest text-sm font-semibold">
          Take Action
        </p>

        <h2 className="font-display font-bold text-4xl md:text-6xl mt-3">
          Small actions.
          <br />
          Real impact.
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            "Learn",
            "Engage",
            "Act",
          ].map((item) => (
            <div
              key={item}
              className="border border-moss/30 p-8 min-h-48 flex items-end"
            >
              <h3 className="font-display font-bold text-3xl">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}