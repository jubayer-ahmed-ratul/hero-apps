import React from "react";
import logo from "../assets/logo.png";
import { Facebook, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="max-w-[1400px] mx-auto py-10">
        <div className=" flex justify-between">
          <div className="flex items-center gap-1  ">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
            <a className=" text-2xl text-white normal-case">HERO.IO</a>
          </div>

          <div>
            <h2 className="text-white text-2xl">Social Links</h2>
            <div className="flex gap-5 mt-3">
              <Twitter className="bg-white w-7 h-7 rounded-full box-border p-1" />
              <Facebook className="bg-white w-7 h-7 rounded-full box-border p-1" />
              <Linkedin className="bg-white w-7 h-7 rounded-full box-border p-1" />
            </div>
          </div>
        </div>

        <hr className="text-gray-300 mt-5" />
      </div>
      <p className="text-white text-center pb-3">Copyright © 2025 - All right reserved</p>
    </footer>
  );
};

export default Footer;
