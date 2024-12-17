import React from "react";

function EventsRow({ event }: { event: any }) {
  return (
    <div className="flex flex-col md:flex-row w-screen md:py-10">
      <div className="flex w-screen md:w-[40%] py-5 md:py-0 justify-center md:justify-end items-center">
        <img className="flex w-[70%] h-full" src={event.url} alt="Dance" />
      </div>
      <div className="flex w-screen md:w-[60%] px-10 lg:px-20 py-4 lg:py-14 items-start justify-center flex-col">
        <h1 className="flex ubuntu-light text-4xl lg:text-6xl ">
          {event.heading}{" "}
        </h1>
        <p className="flex py-3 ubuntu-light text-lg lg:text-xl ">
          {event.paragraph}
        </p>
      </div>
    </div>
  );
}

export default EventsRow;
