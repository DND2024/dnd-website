import React from "react";
import "../../../src/app/globals.css";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../elements/Button";
import ThemeSwitcher from "../elements/ThemeSwitcher";

function Header() {
  return (
    <nav className="z-20 flex flex-row w-screen px-[2%] items-center border-b-2 border-black backdrop-blur-md fixed ">
      <div className="w-1/3 md:w-[20%] flex justify-center ">
        <img
          className="h-20 hover:cursor-pointer static"
          src="/dnd-logo.webp"
          alt="dnd-logo"
        />
      </div>
      <div className="w-0 md:w-[60%] md:flex justify-center hidden ">
        <ul className="flex flex-row montserrat-subrayada hover:cursor-pointer gap-6 text-black dark:text-white">
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

      <div className="w-2/3 md:w-[20%] flex justify-between ">
        <div id="theme" className="w-1/4 flex justify-center items-center">
          <div className="w-10 h-10 border-2 border-black dark:border-white rounded-md justify-items-center items-center p-2 hover:cursor-pointer">
            <ThemeSwitcher />
          </div>
        </div>
        <div className=" w-3/4 flex justify-center items-center">
          <Button text={{ value: "Contact Us" }} />
        </div>
        <div className=" w-1/4 flex justify-center items-center md:hidden">
          <IoMenu className="text-5xl" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
