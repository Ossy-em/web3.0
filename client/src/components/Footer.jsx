import React from "react";
import Logo from "./Logo";

export default function Footer() {
  return (
    // Wraps the footer in the global #EFEFEF background to match the rest of the page
    <div className="w-full bg-[#EFEFEF] px-4 md:px-6 pb-10">
      
      {/* The main footer card: Solid black to match our minimal brand */}
      <div className="max-w-7xl mx-auto bg-black rounded-[40px] p-10 md:p-16 flex flex-col items-center text-white shadow-2xl">
        
        {/* Top Section: Logo, Heading, and Newsletter */}
        <div className="flex flex-col items-center text-center mb-16 w-full max-w-xl">
          
          <div className="mb-6 flex justify-center hover:scale-105 transition-transform duration-300 cursor-pointer">
            <Logo />
          </div>
          
          {/* Using your specific context slogan */}
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Join us on the journey to decentralized finance
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Subscribe to our newsletter for the latest updates.
          </p>
          
          {/* Newsletter Input & Button matching the side-by-side design */}
          <div className="flex flex-col sm:flex-row w-full gap-3 justify-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="px-6 py-3 rounded-lg text-black bg-white outline-none w-full sm:w-64 text-sm font-medium focus:ring-2 focus:ring-cyan-400"
            />
            {/* Using your brand gradient for the button */}
            <button className="px-6 py-3 rounded-lg text-white bg-gradient-to-r from-cyan-400 to-blue-600 hover:opacity-90 transition-opacity w-full sm:w-auto text-sm font-medium">
              Subscribe
            </button>
          </div>
        </div>

        {/* Bottom Section: 4-Column Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6 text-sm mb-8">
          
          {/* Column 1: Contact */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-white mb-6 text-base">Contact</h3>
            <div className="text-gray-400 flex flex-col gap-2">
              <a 
                href="mailto:emosinachi@gmail.com" 
                className="hover:text-cyan-400 transition-colors"
              >
                emosinachi@gmail.com
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (from your context) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-white mb-6 text-base">Quick Links</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Explore</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Trade</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Learn</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Connect</span>
            </div>
          </div>

          {/* Column 3: Ecosystem (Filler to match the 4-column layout) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-white mb-6 text-base">Ecosystem</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Smart Contract</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">GitHub</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Explorer</span>
            </div>
          </div>

          {/* Column 4: Legal (Filler to match the 4-column layout) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-bold text-white mb-6 text-base">Legal</h3>
            <div className="flex flex-col gap-3 text-gray-400">
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-cyan-400 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright using your gradient line and context */}
        <div className="w-full h-[0.25px] bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-5" />
        
        <div className="w-full flex justify-between items-center text-gray-400 text-xs px-2">
          <p>@ossy2025</p>
          <p>All rights reserved</p>
        </div>

      </div>
    </div>
  );
}