import DanceEvenRow from "@/components/elements/DanceEvenRow";
import DanceOddRow from "@/components/elements/DanceOddRow";
import React from "react";

function DanceSection() {
  return (
    <div>
      <section className="flex w-screen h-fit flex-col p-[10%]">
        <div className="bg-[url('/dance-row-bg.webp')] dark:bg-[url('/dance-row-bg-dark.webp')] ">
          <div className="flex flex-col my-6">
            <h1 className="flex text-[50px] justify-center py-1 island-moments-regular text-[#FBFF00] ">
              make a move
            </h1>
            <h1 className="flex text-2xl md:text-[40px] justify-center py-1 ubuntu-light">
              Choose Your Dance Style
            </h1>
          </div>
          <DanceOddRow
            dance={{
              heading: "Bharatanatyam",
              paragraph:
                "Bharatanatyam is one of the oldest classical dance forms in India,rooted in Tamil Nadu. It combines intricate footwork, expressive handgestures, and dramatic facial expressions to convey stories,often of Hindu deities. Traditionally performed in temples, it nowflourishes on global stages, blending spirituality, artistry, andstorytelling with rhythm and grace.",
            }}
            danceUrl={"dance-one.webp"}
          />
          <DanceEvenRow
            dance={{
              heading: "Ballet",
              paragraph:
                "Ballet is a classical dance form that originated during the Italian Renaissance and developed in France. It is characterized by its precision, elegant posture, and technical movements, such as pirouettes and leaps. Ballet dancers tell stories through controlled body movements, often set to orchestral music. The dance requires discipline, balance, and a mastery of technique.",
            }}
            danceUrl={"dance-two.webp"}
          />
          <DanceOddRow
            dance={{
              heading: "Bharatanatyam",
              paragraph:
                "Bharatanatyam is one of the oldest classical dance forms in India,rooted in Tamil Nadu. It combines intricate footwork, expressive handgestures, and dramatic facial expressions to convey stories,often of Hindu deities. Traditionally performed in temples, it nowflourishes on global stages, blending spirituality, artistry, andstorytelling with rhythm and grace.",
            }}
            danceUrl={"dance-three.webp"}
          />
        </div>
        <button className=" flex justify-center p-2 ubuntu-light bg-[#A6A6A6] dark:bg-[#252935] ">
          More
        </button>
      </section>
    </div>
  );
}

export default DanceSection;
