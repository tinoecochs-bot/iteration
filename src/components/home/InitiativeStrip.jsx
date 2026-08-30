import React from "react";

export default function InitiativeStrip() {
  return (
    <section className="bg-chlorophyll text-forest py-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div>
          <h2 className="font-display font-bold text-2xl">
            Environmental Literacy
          </h2>
          <p className="mt-2 text-sm">
            Making environmental information accessible.
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-2xl">
            Community Engagement
          </h2>
          <p className="mt-2 text-sm">
            Connecting people with meaningful action.
          </p>
        </div>

        <div>
          <h2 className="font-display font-bold text-2xl">
            Youth Leadership
          </h2>
          <p className="mt-2 text-sm">
            Empowering young people to create change.
          </p>
        </div>
      </div>
    </section>
  );
}