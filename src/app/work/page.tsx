import CardLatestBuzz from "@/components/elements/CardLatestBuzz";
import CardVideo from "@/components/elements/CardVideo";
import React from "react";

function page() {
  return (
    <div>
      <div className="flex flex-col md:flex-row mx-[20%] md:mx-24 items-center ">
        <CardLatestBuzz />
        <CardLatestBuzz />
        <CardLatestBuzz />
      </div>
      <div className="flex flex-col md:flex-row mx-[20%] md:mx-24 items-center ">
        <CardVideo />
        <CardVideo />
        <CardVideo />
      </div>
    </div>
  );
}

export default page;
