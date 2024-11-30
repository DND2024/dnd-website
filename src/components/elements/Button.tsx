import React from "react";

function Button({ text }: { text: any }) {
  return (
    <div>
      <button className="bg-[#F55E04] text-white px-6 py-3 rounded hover:cursor-pointer  ">
        {text.value}
      </button>
    </div>
  );
}

export default Button;
