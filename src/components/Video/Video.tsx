import React from "react";
import "../../../src/app/globals.css";
import CardVideo from "../elements/CardVideo";
import Heading from "../elements/Heading";

function Video() {
  return (
    <div className="flex flex-col bg-[#D4D4D4] dark:bg-[#241A18] mt-[5%] mx-[5%] py-10 rounded-xl">
      <Heading heading={{ value: "VIDEO" }} />
      <div className="flex justify-center flex-col md:flex-row mx-[20%] md:mx-24 items-center ">
        <CardVideo />
        <CardVideo />
        <CardVideo />
      </div>
    </div>
  );
}

export default Video;
