import React from "react";

function Achievements() {
  return (
    <div className="flex w-screen md:px-[5%] flex-col">
      <div className="flex justify-center mb-6">
        <h1 className="ubuntu-light font-bold text-2xl">ACHIEVEMENTS</h1>
      </div>
      <div className="flex flex-col md:flex-row items-center md:mx-[5%] h-fit ">
        <div className="flex w-[90%] h-52 md:w-[30%] mx-[5%] items-center justify-center rounded-3xl bg-[#656565]">
          <img src="" alt="" />
        </div>
        <div className="flex w-screen md:w-[70%] items-center justify-start p-10">
          <p className="text-xl md:text-2xl ubuntu-light">
            Achievements represent significant milestones and accomplishments
            that reflect dedication, hard work, and skill. They can vary from
            personal goals, such as completing education, to professional
            successes, like earning awards or promotions. Recognizing
            achievements fosters motivation and self-confidence, encouraging
            individuals to pursue further growth. Celebrating these milestones
            is essential for personal development and inspires others to strive
            for excellence.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
