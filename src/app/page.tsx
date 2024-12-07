"use client";

import Achievements from "@/componentss/Achievements/Achievements";
import Button from "@/componentss/elements/Button";
import CardLatestBuzz from "@/componentss/elements/CardLatestBuzz";
import Events from "@/componentss/Events/Events";
import Header from "@/componentss/Header/Header";
import Hero from "@/componentss/Hero/Hero";
import Video from "@/componentss/Video/Video";
import React from "react";

function page() {
  return (
    <div className="flex flex-col bg-[#EFEEE0]">
      <Header />
      <Hero />
      <div className="flex justify-center md:mt-[-9%]  my-10 mx-10">
        <Button text={{ value: "Latest buzz" }} />
      </div>
      <div className="flex flex-col md:flex-row mx-[20%] md:mx-24 items-center ">
        <CardLatestBuzz />
        <CardLatestBuzz />
        <CardLatestBuzz />
      </div>
      <Video />
      <Events />
      <Achievements />
    </div>
  );
}

export default page;
