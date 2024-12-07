import React from "react";
import "../../../src/app/globals.css";
import CardVideo from "../../components/CardVideo";

function Video() {
  return (
    <div className="flex flex-col bg-[#D4D4D4] mt-[5%] mx-[5%] py-10 rounded-xl">
      <div className="flex justify-center my-6 ">
        <h1 className="ubuntu-light font-bold text-2xl">VIDEO</h1>
      </div>
      <div className="flex justify-center flex-col md:flex-row mx-[20%] md:mx-24 items-center ">
        <CardVideo />
        <CardVideo />
        <CardVideo />
      </div>
    </div>
  );
}

export default Video;
