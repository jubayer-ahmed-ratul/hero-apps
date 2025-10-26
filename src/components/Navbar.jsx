import React from "react";
import { Github } from "lucide-react";
import logo from "../assets/logo.png" ;

const Navbar = () => {
  const menuItems = (
    <>
      <li><a className="text-purple-800 font-semibold text-xl">Home</a></li>
      <li><a className="text-purple-800 font-semibold text-xl">Apps</a></li>
      <li><a className="text-purple-800 font-semibold text-xl">Installation</a></li>
    </>
  );

  return (
    <div className="bg-white shadow-sm">

      <div className="max-w-[1400px] mx-auto navbar">

    
        <div className="navbar-start">
          

          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
            >
              {menuItems}
            </ul>
          </div>

         
          <div className="flex items-center gap-1">
            <img className="h-10 w-auto" src={logo} alt="Logo" />
            <a className=" text-2xl text-purple-800 font-bold normal-case">
              HERO.IO
            </a>
          </div>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>

        <div className="navbar-end">
          <button className="btn text-white bg-linear-to-r from-purple-800 to-purple-600 px-6 py-6 text-lg gap-2 hover:scale-105 transition-all">
            <Github size={32} className="rounded-full p-1" />
            <span className="font-semibold">Contribute</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
