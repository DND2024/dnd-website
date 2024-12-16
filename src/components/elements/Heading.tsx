import React from "react";

function Heading({ heading }: { heading: any }) {
  return (
    <div className="flex justify-center my-6 ">
      <h1 className="ubuntu-light font-extrabold text-2xl border-b-4 w-fit border-black">
        {heading.value}
      </h1>
    </div>
  );
}

export default Heading;
