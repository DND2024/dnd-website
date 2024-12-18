import React from "react";

function EventButton({text}:{text:any}) {
  return (
    <button className="flex w-fit h-fit p-1 px-10 rounded-3xl justify-center items-center bg-orange-400 border-2 border-black text-3xl">
      {text.value}
    </button>
  );
}

export default EventButton;
