import EventsHero from "@/components/EventsHero/EventsHero";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import React from "react";

function page() {
  return (
    <div className="flex flex-col bg-[#EFEEE0] dark:bg-[#110F0F] overflow-x-hidden">
      <Header />
      <EventsHero />
      <Footer />
    </div>
  );
}

export default page;
