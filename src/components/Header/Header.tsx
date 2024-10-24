import React from "react";
import "../../../src/app/globals.css";

function Header() {
  return (
    <section className="header">
      <nav className="bg-[#EFEEE0] w-screen text-black flex justify-between items-center px-4 ">
        <div>
          <img
            className="w-40 hover:cursor-pointer"
            src="/dnd-logo.webp"
            alt="dnd-logo"
          />
        </div>
        <div className="montserrat-subrayada-bold hover:cursor-pointer  ">
          <ul className="flex md:flex-row gap-8 justify-center items-center ">
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
        <div className="montserrat-subrayada-bold ">
          <button className="bg-[#F55E04] text-white px-6 py-3 rounded hover:cursor-pointer  ">
            Contact Us
          </button>
        </div>
      </nav>
    </section>
  );
}

export default Header;
