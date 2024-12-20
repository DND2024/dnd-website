"use client";
import EventsRow from "../elements/EventsRow";
import EventButton from "../elements/EventButton";
import EventSlide from "../elements/EventSlide";

function EventsHero() {
  return (
    <div className="flex flex-col ">
      <div className="flex flex-col w-screen ">
        <div className="flex flex-col w-screen h-fit lg:h-screen">
          <div className="hidden w-fit h-[90%] absolute mt-48 dark:flex">
            <img src="/event-bg-dark.webp" alt="" />
          </div>
          <div className="flex w-fit h-[90%] absolute mt-48 dark:hidden">
            <img src="/event-bg.webp" alt="" />
          </div>
          <h1 className="flex w-screen h-1/3 justify-center pt-28 text-5xl lg:text-9xl jokerman-regular dark:text-white">
            EVENTS
          </h1>
          <div className="flex flex-row w-screen h-64 lg:h-1/3 py-10 justify-around items-center px-6">
            <img
              className="hidden  w-fit h-5/6 md:w-fit md:h-full dark:flex"
              src="/drum.webp"
              alt="drum"
            />
            <img
              className="flex  w-fit h-5/6 md:w-fit md:h-full  dark:hidden"
              src="/drum-dark.webp"
              alt="drum"
            />
            <img
              className="hidden  w-fit h-5/6 md:w-fit md:h-full  dark:flex"
              src="/guitar.webp"
              alt="guitar"
            />
            <img
              className="flex w-fit h-5/6 md:w-fit md:h-full dark:hidden"
              src="/guitar-dark.webp"
              alt="guitar"
            />
            <img className="flex w-fit h-full" src="/mic.webp" alt="mic" />
          </div>
          <div className="flex flex-col w-screen py-5 h-1/3 justify-evenly items-center kablammo">
            <div className="flex flex-col lg:flex-row w-screen items-center gap-3 pb-3 lg:justify-around lg:px-20">
              <EventButton text={{ value: "DANZA" }} />
              <EventButton text={{ value: "DANCE WORKSHOP" }} />
              <EventButton text={{ value: "AARAVAM" }} />
              <EventButton text={{ value: "BEAT BRAWL" }} />
            </div>
            <div className="flex flex-col lg:flex-row w-screen items-center gap-3 lg:justify-around lg:px-20">
              <EventButton text={{ value: "CUPID HINT" }} />
              <EventButton text={{ value: "FIESTA" }} />
              <EventButton text={{ value: "OPEN MIC" }} />
              <EventButton text={{ value: "BUZZER KILL" }} />
            </div>
          </div>
        </div>
      </div>
      <EventSlide />
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
