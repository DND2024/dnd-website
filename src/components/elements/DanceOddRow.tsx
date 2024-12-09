import React from "react";

function DanceOddRow({ dance, danceUrl }: { dance: any; danceUrl: any }) {
  return (
    <div className="flex flex-col items-center md:flex-row h-fit p-4 md:px-16">
      <div className="flex flex-col md:pe-10 w-[90%] md:w-[70%]">
        <h1 className="text-[32px] ubuntu-regular border-b-4 w-fit border-black ">
          {dance.heading}
        </h1>
        <p className="text-xl md:text-2xl mt-5 text-wrap">{dance.paragraph}</p>
      </div>
      <div className="flex w-[80%] py-5 md:w-[25%] items-center justify-center">
        <img src={danceUrl} className="h-full" alt="dance image" />
      </div>
    </div>
  );
}

export default DanceOddRow;
