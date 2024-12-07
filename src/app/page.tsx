"use client";
import Achievements from "@/elements/Achievements/Achievements";
import Button from "@/components/Button";
import CardLatestBuzz from "@/components/CardLatestBuzz";
import Events from "@/elements/Events/Events";
import Header from "@/elements/Header/Header";
import Hero from "@/elements/Hero/Hero";
import Video from "@/elements/Video/Video";
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
