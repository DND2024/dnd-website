import React from "react";
import CardLatestBuzz from "../elements/CardLatestBuzz";

function Latest() {
  return (
    <div className="flex flex-col md:flex-row mx-[20%] md:mx-24 items-center ">
      <CardLatestBuzz />
      <CardLatestBuzz />
      <CardLatestBuzz />
    </div>
  );
}

export default Latest;
