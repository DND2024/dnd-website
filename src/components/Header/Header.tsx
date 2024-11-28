import React, { useState } from "react";
import "../../../src/app/globals.css";
import { IoClose, IoMenu } from "react-icons/io5";
import Button from "../elements/Button";

function Header() {
  function onToggle() {
    console.log("first");
    const navLinks = document.querySelector(".nav-link");
    navLinks?.classList.toggle("top-[100%]");
  }

  return (
    <section className="header">
      <nav className="bg-[#EFEEE0] w-screen text-black flex justify-between items-center px-4 ">
        <div className="w-1/4">
          <img
            className="w-40 hover:cursor-pointer static"
            src="/dnd-logo.webp"
            alt="dnd-logo"
          />
        </div>
        <div className="nav-link montserrat-subrayada-bold hover:cursor-pointer  bg-[#EFEEE0] left-0  md:py-0 py-10 md:w-auto w-2/4 mt-[100%] float-start md:mt-0 absolute md:static ">
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
        <div className="montserrat-subrayada-bold flex gap-3 w-1/4">
          <Button />
          <button className="hover:cursor-pointer text-3xl text-[#F55E04] md:hidden">
            <IoMenu onClick={onToggle} />
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Header;
