import React from "react";
import Heading from "../elements/Heading";

function Gallery() {
  return (
    <div className="flex flex-col h-fit bg-[#D4D4D4] mt-[3%] mx-[5%] py-10 rounded-xl">
      <Heading heading={{ value: "GALLERY" }} />
      <div className="flex flex-col md:flex-row m-6 mx-[5%] justify-between items-center">
        <div className="flex w-[90%] md:w-[30%] h-[400px] justify-center items-center bg-slate-400">
          <img src="" alt="dance image" />
        </div>
        <div className="flex w-[90%] md:w-[30%] h-[400px] my-10 md:my-0 justify-center items-center bg-violet-400">
          <img src="" alt="dance image" />
        </div>
        <div className="flex w-[90%] md:w-[30%] h-[400px] justify-center items-center bg-red-400">
          <img src="" alt="dance image" />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
