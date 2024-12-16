import React from "react";
import "./footer.css";

function Footer() {
  return (

    <footer className="footer bg-[url(/clip.webp)] bg-cover flex-shrink overflow-hidden dark:bg-[#161922] p-4 md:p-8">
      
      <div className="footer-logo flex justify-center mb-4">
        <img src="Mask group.webp" alt="DND Logo" className="dnd-logo w-24 md:w-32" />
      </div>

      <hr className="footer-line dark:border-gray-500" />

      <div className="footer-nav  w-[80%] flex flex-nowrap  justify-center gap-5 mb-4 dark:text-white overflow-x-hidden">
        <a href="/home" className=" text-sm md:text-base shrink-2">Home</a>
        <a href="/events" className="text-sm md:text-base shrink-2">Events</a>
        <a href="/gallery" className="text-sm md:text-base shrink-2">Gallery</a>
        <a href="/about" className="text-sm md:text-base shrink-2">About</a>
        <a href="/blog" className="text-sm md:text-base shrink-2">Blog</a>
        <a href="/team" className="text-sm md:text-base shrink-2">Our Team</a>
      </div>

      <hr className="footer-line dark:border-gray-500" />

      <div className="footer-contact flex  md:flex-row justify-between w-full mb-4 pl-4 pr-4 md:pl-30 md:pr-37.5 dark:invert">
        <div className="footer-location flex items-center gap-2.5 mb-4 md:mb-0">
          <img src="location.webp" alt="Location" className="icon w-6 md:w-8" />
          <p className="text-sm md:text-base">
            DND CLUB
            <br />
            NATIONAL INSTITUTE OF TECHNOLOGY CALICUT
            <br />
            KOZHIKODE, KERALA
            <br />
            673601
          </p>
        </div>
        <div className="footer-phone flex flex-col items-start gap-2.5 pl-4 md:pl-12.5">
          <p className="contact-us text-sm md:text-base">CONTACT US</p>
          <img src="contact_logo.webp" alt="Contact" className="icon phone-icon w-6 md:w-8" />
          <p className="underline text-sm md:text-base">+91 987654321 &nbsp; +91 987654321</p>
        </div>
      </div>

      <hr className="footer-line dark:border-gray-500" />

      <div className="footer-social flex justify-center gap-4 dark:invert mb-4">
        <a href="mailto:dnd@nitc.ac.in">
          <img src="mail.webp" alt="Email" className="social-icon w-6 md:w-8" />
        </a>
        <a href="https://www.instagram.com/dnd_nitc/" target="_blank" rel="noopener noreferrer">
          <img src="insta.webp" alt="Instagram" className="social-icon w-6 md:w-8" />
        </a>
        <a href="https://www.linkedin.com/company/forum-for-dance-and-dramatics/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
          <img src="linkedin.webp" alt="LinkedIn" className="social-icon w-6 md:w-8" />
        </a>
      </div>

      <div className="footer-image flex justify-center flex-shrink-0">
        <img src="dnd-footer.webp" alt="Dance and Drama Club" className="footer-image w-full md:w-3/4" />
      </div>
    </footer>
  );
}

export default Footer;
