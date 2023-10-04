"use client";
import { RiFacebookFill, RiLinkedinFill, RiTwitterFill } from "react-icons/ri";
import wave from "../assets/footer.svg";
import Image from "next/image";

const FooterBar = () => {
  return (
    <div className="footerBar">
      <Image src={wave} width={10000} className="footer-wave" />
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-logo">blog components</div>
          <div className="footer-links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About Us</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="footer-social">
            <ul>
              <li>
                <a href="#">
                  <i className="fab fa-facebook">
                    <RiFacebookFill />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-twitter">
                    <RiTwitterFill />
                  </i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fab fa-linkedin">
                    <RiLinkedinFill />
                  </i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            &copy; {new Date().getFullYear()} blog components. All rights
            reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBar;
