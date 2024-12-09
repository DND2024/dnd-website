"use client";

import Achievements from "@/components/Achievements/Achievements";
import DanceSection from "@/components/DaceSection/DanceSection";
import Button from "@/components/elements/Button";
import Events from "@/components/Events/Events";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Latest from "@/components/Latest/Latest";
import Video from "@/components/Video/Video";
import React from "react";

function page() {
  return (
    <div className="flex flex-col bg-[#EFEEE0]">
      <Header />
      <Hero />
      <div className="flex justify-center md:mt-[-9%] py-14 md:py-10">
        <Button text={{ value: "Latest buzz" }} />
      </div>
      <Latest />
      <Video />
      <Events />
      <Achievements />
      <DanceSection />
    </div>
  );
}

export default page;
