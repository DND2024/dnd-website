"use client";
import React, { useState } from "react";
import "../../../src/app/globals.css";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../elements/Button";
import ThemeSwitcher from "../elements/ThemeSwitcher";

function Header() {
  const [isToggleMenuOn, setIsToggleMenuOn] = useState(false);
  return (
    <nav className="z-20 flex flex-row w-screen lg:px-[2%] justify-between items-center border-b-2 border-black dark:border-white backdrop-blur-md fixed ">
      <div className="w-fit lg:w-[20%] flex justify-start">
        <img
          className="h-20 hover:cursor-pointer static"
          src="/dnd-logo.webp"
          alt="dnd-logo"
        />
      </div>
      <ul
        className={
          isToggleMenuOn === true
            ? "flex lg:hidden absolute w-[90%] md:w-[50%] h-fit items-center justify-center border-2 bg-[#EFEEE0] dark:bg-[#110F0F] border-black dark:border-white rounded-2xl gap-3 py-[10%] right-4 top-[90px] flex-col montserrat-subrayada hover:cursor-pointer text-black dark:text-white bg-opacity-60 backdrop-blur-sm"
            : "hidden"
        }
      >
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
          <a className="hover:text-[#F55E04]" href="/gallery">
            Gallery
          </a>
        </li>
      </ul>
      <ul className="hidden lg:flex flex-row montserrat-subrayada hover:cursor-pointer gap-6 text-black dark:text-white">
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
          <a className="hover:text-[#F55E04]" href="/gallery">
            Gallery
          </a>
        </li>
      </ul>
      <div className="w-[80%] lg:w-[20%] justify-end gap-3 flex">
        <div className="w-fit flex justify-center items-center">
          <div className="w-10 h-10 border-2 border-black dark:border-white rounded-md justify-items-center items-center p-2 hover:cursor-pointer">
            <ThemeSwitcher />
          </div>
        </div>
        <div className=" w-fit flex justify-center items-center">
          <Button text={{ value: "Contact Us" }} />
        </div>
        <div className=" w-fit flex justify-center items-center hover:cursor-pointer lg:hidden">
          <div className={isToggleMenuOn === true ? "hidden" : "flex"}>
            <IoMenu
              onClick={() => setIsToggleMenuOn(true)}
              className="text-5xl"
            />
          </div>
          <div className={isToggleMenuOn === true ? "flex" : "hidden"}>
            <IoClose
              onClick={() => setIsToggleMenuOn(false)}
              className="text-5xl"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
