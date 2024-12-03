"use client";
import Button from "@/components/elements/Button";
import CardLatestBuzz from "@/components/elements/CardLatestBuzz";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
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
    </div>
  );
}

export default page;
