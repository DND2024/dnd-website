import React from "react";
import "./footer.css";

function Footer() {
  return (
    
    <footer className="footer bg-[url(/clip.webp)] bg-cover  dark:bg-[#161922] p-x-[25%] sm:p-x-[10%] m-[2%] sm:m-x-[5%] md:p-x-[20%]">
      <div className="footer-logo flex justify-center mb-0 sm:mb-4">
        <img src="dnd-logo.webp" alt="DND Logo" className="dnd-logo w-24 md:w-32" />
      </div>

      <hr className="footer-line dark:border-gray-500  "  />

      <div className="footer-nav flex flex-wrap sm:flex-nowrap justify-center gap-2 sm:gap-5 mb-0 sm:mb-4 dark:text-white w-[80%]">
        <a href="/home" className="text-xs md:text-sm lg:text-base">Home</a>
        <a href="/events" className="text-xs md:text-sm lg:text-base">Events</a>
        <a href="/gallery" className="text-xs md:text-sm lg:text-base">Gallery</a>
        <a href="/about" className="text-xs md:text-sm lg:text-base">About</a>
        <a href="/blog" className="text-xs md:text-sm lg:text-base">Blog</a>
        <a href="/team" className="text-xs md:text-sm lg:text-base">Our Team</a>
      </div>

      <hr className="footer-line dark:border-gray-500" />

      <div className="footer-contact flex flex-col sm:flex-row  justify-between  w-full mb-4 sm:gap-10  sm:px-[20%] dark:invert">
        
        <div className="footer-location pr-[5%] flex items-center gap-2.5 mb-4 justify-center md:mb-0">
          <img src="location.webp" alt="Location" className="icon max-w-full md:w-8" />
          <p className="text-xs md:text-sm lg:text-base">
            DND CLUB
            <br />
            NATIONAL INSTITUTE OF <br/> TECHNOLOGY CALICUT
            <br />
            KOZHIKODE, KERALA
            <br />
            673601
          </p>
        </div>
        
        <div className="footer-phone  flex flex-col justify-center items-center sm:items-baseline sm:mx-0 gap-2.5">
          <p className="contact-us sm:pl-[14%] md:pl-[3] lg:pl-[0.5] text-xs md:text-sm lg:text-base">CONTACT US</p>
          <img src="contact_logo.webp" alt="Contact" className=" pl-[1%] lg:-pl-[0.5] icon phone-icon w-6 md:w-8" />
          {/* <p className=" sm:pl-[14%] md:pl-[3] lg:-pl-[0.5]text-xs text-center sm:text-start md:text-sm lg:text-base whitespace-nowrap">+91 9876543210 &nbsp; +91 9876543210</p> */}
          <div className="sm:flex  sm:pl-[14%] md:pl-[3] lg:-pl-[0.5]text-xs text-center sm:text-start md:text-sm lg:text-base">
            <span  className=" sm:whitespace-nowrap" >+91 9876543210</span>
            <span className=" whitespace-nowrap"> &nbsp; +91 9876543210</span>
          </div>
        
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

      <div className="footer-image flex justify-center w-[95%] sm:w-full pb-[3%] sm:pb-0">
        <img src="dnd-footer.webp" alt="Dance and Drama Club" className="footer-image w-full md:w-3/4" />
      </div>
    </footer>
  );
}

export default Footer;
