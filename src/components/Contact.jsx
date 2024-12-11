import React from "react";
import { FaInstagram } from "react-icons/fa";
import { IoCodeSlash } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <a href="https://www.instagram.com/mukul_tyagii/" target="_blank" className="items">
            <FaInstagram className="icons" />
          </a>
          <a href="#" target="_blank" className="items">
            <IoCodeSlash className="icons" />
          </a>
          <a href="https://linkedin.com/in/mukul-tyagi-550az/" target="_blank" className="items">
            <CiLinkedin className="icons" />
          </a>
          <a href="#" target="_blank" className="items">
            <FaSquareXTwitter className="icons" />
          </a>
          <a href="https://github.com/mukultyagii" target="_blank" className="items">
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:tyagimukul087@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
