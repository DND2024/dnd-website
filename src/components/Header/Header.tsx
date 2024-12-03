import React, { useState } from "react";
import "../../../src/app/globals.css";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../elements/Button";

function Header() {
  return (
    <nav className="flex flex-row w-screen px-[2%] bg-[#EFEEE0] items-center">
      <div className="w-1/2 md:w-[20%] flex justify-center ">
        <img
          className="h-20 hover:cursor-pointer static"
          src="/dnd-logo.webp"
          alt="dnd-logo"
        />
      </div>

      <div className="w-0 md:w-[60%] flex justify-center mt-[-100%] md:mt-0">
        <ul className="flex flex-row montserrat-subrayada hover:cursor-pointer gap-6">
          <li>
            <a className="text-[#F55E04]" href="/">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-[#F55E04]" href="/team">
              Team
            </a>
          </li>
          <li>
            <a className="hover:text-[#F55E04]" href="/about">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-[#F55E04]" href="/events">
              Events
            </a>
          </li>
          <li>
            <a className="hover:text-[#F55E04]" href="/blog">
              Blog
            </a>
          </li>
          <li>
            <a className="hover:text-[#F55E04]" href="/gallery">
              Gallery
            </a>
          </li>
        </ul>
      </div>

      <div className="w-1/2 md:w-[20%] flex justify-center  montserrat-subrayada">
        <div className=" w-3/4 flex justify-center">
          <Button text={{ value: "Contact Us" }} />
        </div>
        <div className=" w-1/4 flex  md:hidden">
          <IoMenu className="text-5xl" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
