import React from "react";
import Logo from "./Logo";
// import logo from "../../images/logo.png";

const Footer = () => (
  <div className="w-full flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
    <div className="w-full flex sm:flex-row flex-col justify-between items-center my-4 max-w-7xl">
      <div className="flex flex-[0.5] justify-center items-center">
        {/* <img src={logo} alt="logo" className="w-32 hover:scale-105 smooth-transition cursor-pointer" /> */}
        <Logo />
      </div>
      <div className="flex flex-1 justify-evenly items-center flex-wrap sm:mt-0 mt-5 w-full">
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:text-cyan-400 smooth-transition">Explore</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:text-cyan-400 smooth-transition">Trade</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:text-cyan-400 smooth-transition">Learn</p>
        <p className="text-white text-base text-center mx-2 cursor-pointer hover:text-cyan-400 smooth-transition">Connect</p>
      </div>
    </div>

    <div className="flex justify-center items-center flex-col mt-5">
      <p className="text-gray-300 text-sm text-center">Join us on the journey to decentralized finance</p>
      <a 
        href="mailto:emosinachi@gmail.com" 
        className="text-cyan-400 text-sm text-center font-medium mt-2 hover:text-cyan-300 smooth-transition"
      >
        emosinachi@gmail.com
      </a>
    </div>

    <div className="sm:w-[90%] w-full h-[0.25px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mt-5" />

    <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
      <p className="text-gray-400 text-left text-xs">@ossy2025</p>
      <p className="text-gray-400 text-right text-xs">All rights reserved</p>
    </div>
  </div>
);

export default Footer;