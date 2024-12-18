"use client";
import React, { useEffect, useState } from "react";
import EventsRow from "../elements/EventsRow";
import EventButton from "../elements/EventButton";

function EventsHero() {
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
    <div className="flex flex-col bg-[#EFEEE0] dark:bg-[#110F0F] ">
      <div className="flex flex-col w-screen h-screen">
        <h1 className="flex w-screen h-1/3 justify-center pt-28 text-9xl jokerman-regular dark:text-white">
          EVENTS
        </h1>
        <div className="flex flex-row justify-around items-center w-screen h-1/3 px-20">
          <img className="flex w-[15%] h-fit" src="/drum.webp" alt="drum" />
          <img className="flex w-[20%] h-fit" src="/guitar.webp" alt="guitar" />
          <img className="flex w-[12%] h-fit" src="/mic.webp" alt="mic" />
        </div>
        <div className="flex flex-col w-screen h-1/3 pb-10  justify-evenly items-center kablammo">
          <div className="flex flex-row w-screen justify-around px-20">
            <EventButton text={{ value: "DANZA" }} />
            <EventButton text={{ value: "DANCE WORKSHOP" }} />
            <EventButton text={{ value: "AARAVAM" }} />
            <EventButton text={{ value: "BEAT BRAWL" }} />
          </div>
          <div className="flex flex-row w-screen justify-around px-20">
            <EventButton text={{ value: "CUPID HINT" }} />
            <EventButton text={{ value: "FIESTA" }} />
            <EventButton text={{ value: "OPEN MIC" }} />
            <EventButton text={{ value: "BUZZER KILL" }} />
          </div>
        </div>
      </div>

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

      <div className="flex flex-col">
        <EventsRow
          event={{
            heading: "DANZA",
            url: "https://cdn.prod.website-files.com/5eff8498c33c882661c03e5c/66e7e493d503ffbfdc6bec58_Dance%20Styles.jpg",
            paragraph:
              "DND’s Danza reflects an extraordinary passion for dance, showcasing relentless energy and dedication. college programs, captivating audiences with your enthusiasm and grace. Your stamina and love for dancing shine brightest on stage, making every performance memorable.",
          }}
        />
        <EventsRow
          event={{
            heading: "DANZA",
            url: "https://cdn.prod.website-files.com/5eff8498c33c882661c03e5c/66e7e493d503ffbfdc6bec58_Dance%20Styles.jpg",
            paragraph:
              "DND’s Danza reflects an extraordinary passion for dance, showcasing relentless energy and dedication. college programs, captivating audiences with your enthusiasm and grace. Your stamina and love for dancing shine brightest on stage, making every performance memorable.",
          }}
        />
        <EventsRow
          event={{
            heading: "DANZA",
            url: "https://cdn.prod.website-files.com/5eff8498c33c882661c03e5c/66e7e493d503ffbfdc6bec58_Dance%20Styles.jpg",
            paragraph:
              "DND’s Danza reflects an extraordinary passion for dance, showcasing relentless energy and dedication. college programs, captivating audiences with your enthusiasm and grace. Your stamina and love for dancing shine brightest on stage, making every performance memorable.",
          }}
        />
      </div>
    </div>
  );
}

export default EventsHero;
