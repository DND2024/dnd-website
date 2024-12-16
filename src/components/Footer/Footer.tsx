import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer bg-[url(/clip.webp)] bg-cover dark:bg-[#161922] ">
      <div className="footer-logo">
        <img src="Mask group.webp" alt="DND Logo" className="dnd-logo" />
      </div>

      <hr className="footer-line dark:border-gray-500" />

      <div className="footer-nav dark:text-white ">
      
        <a href="/home">Home</a>
        <a href="/events">Events</a>
        <a href="/gallery">Gallery</a>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/team">Our Team</a>
      </div>

      <hr className="footer-line dark:border-gray-500" />

      <div className="footer-contact dark:invert">
        <div className="footer-location">
          <img src="location.webp" alt="Location" className="icon" />
          <p>
            DND CLUB<br />
            NATIONAL INSTITUTE OF TECHNOLOGY CALICUT<br />
            KOZHIKODE, KERALA<br />
            673601
          </p>
        </div>
        <div className="footer-phone">
          <p className="contact-us">CONTACT US</p>
          <img src="contact_logo.webp" alt="Contact" className="icon phone-icon" />
          <p className="underline">
            +91 987654321 &nbsp; +91 987654321
          </p>
        </div>
      </div>

      <hr className="footer-line dark:border-gray-500" />

      <div className="footer-social dark:invert">
        <a href="mailto:dnd@nitc.ac.in">
          <img src="mail.webp" alt="Email" className="social-icon" />
        </a>
        <a href="https://www.instagram.com/dnd_nitc/" target="_blank" rel="noopener noreferrer">
          <img src="insta.webp" alt="Instagram" className="social-icon" />
        </a>
        <a href="https://www.linkedin.com/company/forum-for-dance-and-dramatics/?originalSubdomain=in" target="_blank" rel="noopener noreferrer">
          <img src="linkedin.webp" alt="LinkedIn" className="social-icon" />
        </a>
      </div>

      <div className="footer-image">
        <img src="dnd-footer.webp" alt="Dance and Drama Club" className="footer-image" />
      </div>
    </footer>
  );
}

export default Footer;
