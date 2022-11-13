import React from "react";
import { Link } from "react-router-dom";
import footerImg from "../assets/images/footer.png";

const Footer = () => {
  return (
    <div>
      <footer
        className="footer pt-20 px-24"
        style={{ background: `url(${footerImg})`, backgroundSize: "cover" }}
      >
        <div>
          <span className="footer-title">SERVICES</span>
          <Link className="link link-hover">Emergency Checkup</Link>
          <Link className="link link-hover">Monthly Checkup</Link>
          <Link className="link link-hover">Weekly Checkup</Link>
          <Link className="link link-hover">Deep Checkup</Link>
        </div>
        <div>
          <span className="footer-title">ORAL HEALTH</span>
          <Link className="link link-hover">Fluoride Treatment</Link>
          <Link className="link link-hover">Cavity Filling</Link>
          <Link className="link link-hover">Teath Whitening</Link>
        </div>
        <div>
          <span className="footer-title">OUR ADDRESS</span>
          <Link className="link link-hover">New York - 101010 Hudson</Link>
        </div>
      </footer>
      <p className="text-center mt-16 mb-4">
        Copyright 2022 All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
