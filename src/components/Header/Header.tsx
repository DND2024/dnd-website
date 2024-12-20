import React from "react";
import "../../../src/app/globals.css";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../elements/Button";
import ThemeSwitcher from "../elements/ThemeSwitcher";

function Header() {
  return (
    <nav className="z-20 flex flex-row w-screen px-[2%] justify-between items-center border-b-2 border-black backdrop-blur-md fixed ">
      <div className="w-fit lg:w-[20%] flex justify-start bg-lime-200">
        <img
          className="h-20 hover:cursor-pointer static"
          src="/dnd-logo.webp"
          alt="dnd-logo"
        />
      </div>
      <div className="w-0 lg:w-[60%] lg:flex justify-center hidden ">
        <ul className="flex flex-row montserrat-subrayada hover:cursor-pointer gap-6 text-black dark:text-white">
          <li>
            <a className="hover:text-[#F55E04]" href="/">
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

      <div className="w-[80%] lg:w-[20%] justify-end gap-3 flex bg-slate-400">
        <div className="w-fit flex justify-center items-center bg-red-300">
          <div className="w-10 h-10 border-2 border-black dark:border-white rounded-md justify-items-center items-center p-2 hover:cursor-pointer">
            <ThemeSwitcher />
          </div>
        </div>
        <div className=" w-fit flex justify-center items-center bg-amber-300">
          <Button text={{ value: "Contact Us" }} />
        </div>
        <div className=" w-fit flex justify-center items-center lg:hidden bg-lime-300">
          <IoMenu className="text-5xl" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
