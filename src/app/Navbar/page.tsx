"use client";
import Logo from "../../../public/file (3).png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="w-full h-20 bg-black flex justify-between items-center px-[5%] sm:px-[7%] md:px-[10%]">
        <Image src={Logo} alt="Logo" className="w-20 h-10 md:w-28 md:h-14 cursor-pointer"></Image>
        <ul className="hidden md:flex h-full items-center text-white lg:text-xl space-x-5 lg:space-x-10 ">
          <li>
            <Link href="/" className="relative hover:after:w-[100%] ">
              Home
            </Link>
          </li>
          <li>
            <Link href="#About" className="relative hover:after:w-[100%]">
              About
            </Link>
          </li>
          <li>
            <Link href="#Services" className="relative hover:after:w-[100%]">
              Services
            </Link>
          </li>
          <li>
            <Link href="#Projects" className="relative hover:after:w-[100%]">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#Contact" className="relative hover:after:w-[100%]">
              Contact
            </Link>
          </li>
        </ul>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"
          className="md:hidden cursor-pointer"
          onClick={toggleSidebar}
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </div>

      {isSidebarOpen && (
        <div className=" w-2/3 bg-gray-800 fixed top-0 bottom-0 right-0 z-50 transition-transform duration-300 ease-in-out">
          <ul className="flex flex-col w-full text-white text-lg justify-center items-center py-12 space-y-10 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="34px"
              viewBox="0 -960 960 960"
              width="34px"
              fill="#e8eaed"
              onClick={toggleSidebar}
              className="absolute top-0 left-0 mx-10 my-10"
            >
              <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
            </svg>
            <li>
              <Link href="/" className="active:text-[#ff004f]">
                Home
              </Link>
            </li>
            <li>
              <Link href="#About" className="active:text-[#ff004f]">
                About
              </Link>
            </li>
            <li>
              <Link href="#Services" className="active:text-[#ff004f]">
              Services
              </Link>
            </li>
            <li>
              <Link href="#Projects" className="active:text-[#ff004f]">
                Projects
              </Link>
            </li>
            <li>
              <Link href="#Contact" className="active:text-[#ff004f]">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
      
    </>
  );
};

export default Navbar;
