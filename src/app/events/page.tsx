import EventsHero from "@/components/EventsHero/EventsHero";
import Header from "@/components/Header/Header";
import React from "react";

function page() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <EventsHero />
    </div>
  );
}

export default page;
