import React, { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

function Events() {
  const slides = [
    "https://st2.depositphotos.com/1006542/6566/i/450/depositphotos_65669135-stock-photo-woman-sitting-on-an-old.jpg",
    "https://t4.ftcdn.net/jpg/01/92/48/59/360_F_192485946_yWlMIn2OUJM8VoNml93pl8I0kUBuBcG0.jpg",
    "https://t3.ftcdn.net/jpg/06/15/49/68/360_F_615496890_W34yB8VDE6n5pehb5QCt1ek5oEvRo9qA.jpg",
  ];

  const [currSlide, setCurrSlide] = useState(0);
  const prev = () =>
    setCurrSlide((currSlide) =>
      currSlide === 0 ? slides.length - 1 : currSlide - 1
    );
  const next = () =>
    setCurrSlide((currSlide) =>
      currSlide === slides.length - 1 ? 0 : currSlide + 1
    );
  return (
    <div className="flex flex-col bg-[#D4D4D4] m-[5%] py-14 rounded-xl">
      <div className="flex justify-center mb-6 ">
        <h1 className="ubuntu-light font-bold text-2xl">EVENTS</h1>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row">
          <div className="md:flex max-w-lg  rounded-e-3xl overflow-hidden transition-transform ease-out duration-500 hidden  ">
            <img
              src={slides[currSlide === 0 ? slides.length - 1 : currSlide - 1]}
              width={2000}
              height={1400}
              alt="event1"
            />
          </div>
          <div className="flex mx-14 max-w-lg   rounded-3xl overflow-hidden transition-transform ease-out duration-500">
            <img
              src={slides[currSlide]}
              width={2000}
              height={1400}
              alt="event2"
            />
          </div>
          <div className="md:flex max-w-lg   rounded-s-3xl overflow-hidden transition-transform ease-out duration-500 hidden">
            <img
              src={slides[currSlide === slides.length - 1 ? 0 : currSlide + 1]}
              width={2000}
              height={1400}
              alt="event3"
            />
          </div>
        </div>
        <div className="flex flex-row w-[50%] justify-between items-center mt-12">
          <button
            className="flex border-2 rounded-2xl border-black py-2 px-6 hover:bg-white"
            onClick={next}
          >
            <BsChevronDoubleLeft size={30} />
          </button>
          <div className="flex gap-3 rounded-3xl p-2 ">
            {slides.map((_, i) => (
              <div
                className={`
              transition-all w-2 h-2 bg-black rounded-full p-2 
              ${currSlide === i ? "blur-0" : "bg-opacity-50 blur-sm "}
              `}
              />
            ))}
          </div>
          <button
            className="flex border-2 rounded-2xl border-black py-2 px-6 hover:bg-white"
            onClick={prev}
          >
            <BsChevronDoubleRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Events;
