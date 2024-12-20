import React, { useEffect, useState } from "react";

function EventSlide() {
  const [currSlide, setCurrSlide] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrSlide((currSlide) =>
        currSlide === slides.length - 1 ? 0 : currSlide + 1
      );
    }, 5000);
  });

  const slides = [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-KvmVZV-mWkvCIVgkG56OZgtsj1wK6v2cQ&s",
      text: "DND’s Danza reflects an extraordinary passion for dance, showcasing relentless energy and dedication. college programs, captivating audiences with your enthusiasm and grace. Your stamina and love for dancing shine brightest on stage, making every performance memorable.",
    },
    {
      url: "https://t3.ftcdn.net/jpg/03/72/71/80/360_F_372718076_pLwDA6fUUDDWvgETtDOr67dUymN8Nzb3.jpg",
      text: "DND’s Danza reflects an extraordinary passion for dance, showcasing relentless energy and dedication. college programs, captivating audiences with your enthusiasm and grace. Your stamina and love for dancing shine brightest on stage, making every performance memorable.",
    },
    {
      url: "https://t3.ftcdn.net/jpg/04/85/60/70/360_F_485607028_2JW8GkFoJjdZFS4RcRwPuRBSBLpNMwzK.jpg",
      text: "DND’s Danza reflects an extraordinary passion for dance, showcasing relentless energy and dedication. college programs, captivating audiences with your enthusiasm and grace. Your stamina and love for dancing shine brightest on stage, making every performance memorable.",
    },
  ];
  return (
    <div className="flex flex-col w-screen h-fit lg:h-screen justify-evenly items-center py-10">
      <div className="flex w-[80%] lg:w-[50%] h-fit rounded-3xl justify-center items-center">
        <img
          className="rounded-3xl w-[100%] h-[100%] border-2 border-[#686767] dark:border-[#F55E04] "
          src={slides[currSlide].url}
          alt="event"
        />
      </div>
      <p className="flex text-lg md:text-xl mx-5 md:mx-20 my-10 lg:mx-40 ubuntu-light text-center uppercase">
        {slides[currSlide].text}
      </p>
      <div className="flex">
        {slides.map((_, i) => (
          <div
            className={`flex w-2 h-2 bg-[#686767] dark:bg-[#F55E04] rounded-full p-2 m-2 
              ${currSlide === i ? "blur-0 " : "blur-sm"}`}
          />
        ))}
      </div>
    </div>
  );
}

export default EventSlide;
