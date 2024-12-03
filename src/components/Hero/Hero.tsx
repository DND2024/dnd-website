import React from "react";
import CardLatestBuzz from "../elements/CardLatestBuzz";

function Hero() {
  return (
    <section className="hero">
      <div className="bg-[#EFEEE0] w-screen h-screen flex flex-col md:flex-row pt-[25%] md:pt-0">
        {/* <img className="w-3/6 h-3/6" src="/bg-image.webp" /> */}
        <div className="flex flex-row items-center w-screen md:w-1/2 h-screen">
          <img
            className="w-1/4 h-1/4 md:h-[20%] flex self-end m-0 md:mb-[20%] md:ms-[10%]"
            src="/arrow-up.webp"
            alt="arrow"
          />
          <div className="w-2/4 h-[80%] md:h-[40%] flex flex-col items-start">
            <h1 className="flex nothing-you-could-do-regular text-xl md:text-2xl text-[#F50004] ">
              An NITC Club
            </h1>
            <br />
            <h1 className="flex lexend-font text-7xl md:text-9xl text-[#FF5900]">
              DND
            </h1>
            <br />
            <h1 className="flex amaranth-regular text-xl md:text-2xl bg-gradient-to-r from-[#00A6FF] to-[#FF14CB] text-transparent bg-clip-text">
              Where drama creates magic <br />
              dance burns the floor!
            </h1>
          </div>
          <img
            className="w-1/4 h-1/4 md:h-[20%] flex self-start m-0 md:me-[10%] md:mt-[20%]"
            src="/arrow-down.webp "
            alt="arrow"
          />
        </div>
        <div className="flex md:h-screen w-screen md:w-1/2 items-center ">
          {/* <img className="h-14 mt-[50%] " src="/dots.webp" alt="dance" /> */}
          <img
            className=" md:h-[80%] md:mt-[10%] "
            src="/home-dance.webp"
            alt="dance"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
