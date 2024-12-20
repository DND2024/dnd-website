import React from "react";

function Button({ text }: { text: any }) {
  return (
    <div>
      <button className="bg-[#F55E04] text-sm  md:text-lg  text-white px-2 md:px-6 py-3  rounded hover:cursor-pointer  montserrat-subrayada">
        {text.value}
      </button>
    </div>
  );
}

export default Button;
