import React from "react";
import CardLatestBuzz from "../elements/CardLatestBuzz";

function Hero() {
  return (
    <section className="hero">
      <div className="bg-[#EFEEE0] flex flex-col md:flex-row border-t-2 border-black">
        {/* <img className="w-3/6 h-3/6" src="/bg-image.webp" /> */}
        <div className="flex flex-row items-center w-screen md:w-1/2 h-1/2 md:h-screen">
          <img
            className="w-1/4 h-[20%] flex self-end"
            src="/arrow-up.webp"
            alt="arrow"
          />
          <div className="w-2/4 h-[40%]">
            <h1 className="nothing-you-could-do-regular text-2xl text-[#F50004] ">
              An NITC Club
            </h1>
            <br />
            <h1 className="lexend-font text-9xl text-[#FF5900]	">DND</h1>
            <br />
            <h1 className="amaranth-regular text-2xl bg-gradient-to-r from-[#00A6FF] to-[#FF14CB] text-transparent bg-clip-text">
              Where drama creates magic <br />
              dance burns the floor!{" "}
            </h1>
          </div>
          <img
            className="w-1/4 h-[20%] flex self-start"
            src="/arrow-down.webp"
            alt="arrow"
          />
        </div>
        <div className="flex md:h-screen w-screen md:w-1/2 items-center">
          {/* <img className="h-14 mt-[50%] " src="/dots.webp" alt="dance" /> */}
          <img className="h-[80%] " src="/home-dance.webp" alt="dance" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
