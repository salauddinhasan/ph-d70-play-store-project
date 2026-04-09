import React from "react";
import heroImg from "../assets/logo.png";
import { FaFacebookSquare, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-950 text-white pt-16 pb-8 px-6 md:px-16 rounded-lg">
      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Brand Identity */}
        <div className="flex items-center gap-4 group">
          <div className="p-2 bg-gray-700/50 rounded-2xl backdrop-blur-md border border-gray-600 group-hover:border-red-500 transition-all duration-500">
            <img
              src={heroImg}
              alt="Logo"
              className="w-12 h-12 object-contain group-hover:rotate-12 transition-transform"
            />
          </div>
          <div>
            <h2 className="text-3xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Hero.io
            </h2>
            <p className="text-xs text-gray-500 font-medium tracking-widest uppercase mt-1">
              Innovating the Future
            </p>
          </div>
        </div>

        {/* Social Links - Clean & Minimal */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <p className="text-sm font-semibold text-gray-400 tracking-wider">
            CONNECT WITH US
          </p>
          <div className="flex gap-4">
            {[
              { icon: <FaLinkedin />, color: "hover:bg-blue-600", link: "#" },
              { icon: <FaTwitter />, color: "hover:bg-sky-500", link: "#" },
              {
                icon: <FaFacebookSquare />,
                color: "hover:bg-blue-700",
                link: "#",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                className={`w-12 h-12 flex items-center justify-center rounded-xl bg-gray-800 border border-gray-700 text-xl transition-all duration-300 ${social.color} hover:-translate-y-2 hover:shadow-[0_10px_20px_rgba(0,0,0,0.4)]`}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Divider with subtle glow */}
      <div className="relative mt-12 mb-8">
        <hr className="border-gray-800" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[1px] bg-gradient-to-r from-transparent via-red-500 to-transparent opacity-50"></div>
      </div>

      {/* Bottom Legal Info */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
        <p className="hover:text-gray-300 transition-colors cursor-default">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-gray-300 font-bold">Hero.io</span>. Built with
          passion.
        </p>
        <div className="flex gap-8">
          <a
            href="#"
            className="hover:text-red-400 transition-colors underline-offset-4 hover:underline"
          >
            Privacy
          </a>
          <a
            href="#"
            className="hover:text-red-400 transition-colors underline-offset-4 hover:underline"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-red-400 transition-colors underline-offset-4 hover:underline"
          >
            Support
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
