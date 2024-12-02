import React, { useState } from "react";
import "../../../src/app/globals.css";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../elements/Button";

function Header() {
  return (
    <section className="header">
      <nav className="bg-[#EFEEE0] h-20 w-screen items-center justify-between md:px-4 text-black flex ">
        <div className="w-[50%] md:w-[20%] flex">
          <img
            className="w-40 h-18 hover:cursor-pointer static"
            src="/dnd-logo.webp"
            alt="dnd-logo"
          />
        </div>
        <div className="w-[60%] justify-center nav-link montserrat-subrayada hover:cursor-pointer flex  bg-[#EFEEE0] left-0  md:py-0 py-10 md:w-auto mt-[100%] md:mt-0 md:static hidden">
          <ul className="flex md:flex-row flex-col gap-8 justify-center items-center ">
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
        <div className="w-[40%] md:w-[20%] montserrat-subrayada gap-3 ">
          <Button text={{ value: "Contact Us" }} />
          <button className="hover:cursor-pointer text-3xl text-[#F55E04] hidden">
            <IoMenu />
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Header;
