import React from "react";
import heroImg from "../assets/logo.png";
// react-router-dom hole change kore niben
import { FaGithub } from "react-icons/fa";
import MyNavBar from "./MyNavBar";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex justify-between items-center px-4 md:px-8 py-3 bg-gray-950/90 backdrop-blur-md border-b border-gray-800/50">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img
          src={heroImg}
          alt="Logo"
          className="w-10 h-10 object-contain hover:scale-110 transition-transform cursor-pointer"
        />
        <span className="text-white font-bold text-xl hidden md:block">
          DevApp
        </span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex items-center gap-2">
          <li>
            <MyNavBar to={"/home"}>Home</MyNavBar>
          </li>
          <li> 
            <MyNavBar to={"/apps"}>Apps</MyNavBar>
          </li>
          <li>
            <MyNavBar to="/installation">Installation</MyNavBar>
          </li>
        </ul>
      </nav>

      {/* Action Button */}
      <div>
        <button className="flex items-center gap-2 bg-white text-gray-900 px-5 py-2 rounded-full font-semibold hover:bg-gray-200 transition-colors active:scale-95 shadow-md">
          <FaGithub className="text-xl" />
          <span className="hidden sm:inline">Contribute</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
