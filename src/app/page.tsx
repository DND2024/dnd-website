"use client";

import Achievements from "@/components/Achievements/Achievements";
import DanceSection from "@/components/DaceSection/DanceSection";
import Button from "@/components/elements/Button";
import Events from "@/components/Events/Events";
import Footer from "@/components/Footer/Footer";
import Gallery from "@/components/Gallery/Gallery";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Latest from "@/components/Latest/Latest";
import Meet from "@/components/Meetmembers/Meet";
import TalkToUs from "@/components/TalkToUs/TalkToUs";
import Video from "@/components/Video/Video";
import React from "react";

function page() {
  return (
    <div className="flex flex-col overflow-hidden">
      <Header />
      <Hero />
      <div className="flex justify-center md:mt-[-9%] py-14 md:py-10">
        <Button text={{ value: "Latest buzz" }} />
      </div>
      <Latest />
      <Gallery />
      <Video />
      <Events />
      <Achievements />
      <DanceSection />
      <TalkToUs/>
      <Meet/>
      <Footer/>


     
    </div>
  );
}

export default page;
