import React from "react";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className="flex flex-row justify-start items-start white-glassmorphism p-4 sm:p-5 m-2 cursor-pointer hover:shadow-xl hover:shadow-cyan-500/20 smooth-transition transform hover:scale-[1.02]">
    <div className={`w-12 h-12 rounded-full flex justify-center items-center ${color} shadow-lg`}>
      {icon}
    </div>
    <div className="ml-5 flex flex-col flex-1">
      <h3 className="mt-2 text-white text-base sm:text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-300 text-sm leading-relaxed">{subtitle}</p>
    </div>
  </div>
);

const Services = () => {
  return (
    <div className="flex w-full justify-center items-center gradient-bg-services overflow-x-hidden">
      <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4 w-full max-w-screen-xl">
        <div className="flex-1 flex flex-col justify-start items-start sm:items-start items-center w-full mb-8 mf:mb-0">
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl py-2 font-bold leading-tight text-center sm:text-left">
            <span className="text-gradient">Services</span> that we
            <br />
            continue to improve
          </h1>
          <p className="text-gray-300 mt-4 text-sm sm:text-base leading-relaxed text-center sm:text-left w-full md:w-9/12">
            Built on cutting-edge blockchain technology, we deliver secure, fast, and reliable crypto services for the modern digital economy.
          </p>
        </div>

        <div className="flex-1 flex flex-col justify-start items-center w-full">
          <ServiceCard
            color="bg-gradient-to-br from-[#0ea5e9] to-[#0284c7]"
            title="Security Guaranteed"
            icon={<BsShieldFillCheck fontSize={24} className="text-white" />}
            subtitle="Bank-level encryption and multi-layer security protocols ensure your assets are protected at all times with complete privacy."
          />

          <ServiceCard
            color="bg-gradient-to-br from-[#06b6d4] to-[#0891b2]"
            title="Best Exchange Rates"
            icon={<BiSearchAlt fontSize={24} className="text-white" />}
            subtitle="Real-time market analysis and smart routing algorithms guarantee you get the most competitive rates for every transaction."
          />
          
          <ServiceCard
            color="bg-gradient-to-br from-[#14b8a6] to-[#0d9488]"
            title="Lightning Fast"
            icon={<RiHeart2Fill fontSize={24} className="text-white" />}
            subtitle="Experience instant settlements powered by optimized blockchain infrastructure. Your transactions complete in seconds, not minutes."
          />
        </div>
      </div>
    </div>
  );
};

export default Services;