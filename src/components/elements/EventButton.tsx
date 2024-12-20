import React from "react";

function EventButton({ text }: { text: any }) {
  return (
    <button className="flex w-fit h-fit p-[2px] rounded-3xl justify-center items-center text-3xl bg-[#F55E04] dark:bg-gradient-to-r from-[#D85100] to-[#C4C4C4] ">
      <div className="flex px-10 rounded-3xl p-1 bg-[#EFEEE0] items-center justify-center dark:bg-[#110F0F] ">
        <div className="flex absolute bg-gradient-to-r from-[#F4526D] via-[#1F396D] to-[#999999] w-36 lg:w-[10%] h-[2%] rounded-3xl bg-opacity-100 blur-lg"></div>
        {text.value}
      </div>
    </button>
  );
}

export default EventButton;
