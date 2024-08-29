"use client";

import React from "react";
import Link from "next/link";
import { DiCssdeck } from "react-icons/di";
import {
  Link as LinkSr,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const GithubProfile = () => {
  return <></>;
};

const Navbar = () => {
  return (
    <>
      <div className="hidden h-20 w-full md:flex flex-1 items-center justify-center m-auto p-5 bg-black fixed top-0 left-0 z-[2]">
        <div className="pl-5 w-[20%] md:w-[40%]">
          <DiCssdeck size="3rem" className="inline" />
          <span className=" sm:text-md lg:text-xl pl-2 text-primary-color hidden md:inline ">
            P
          </span>
          <span className=" sm:text-md  lg:text-xl hidden md:inline">
            ortfolio
          </span>
        </div>
        <nav className="flex items-center w-[50%] md:w-[40%] justify-around  md:text-md lg:text-xl">
          <LinkSr
            activeClass="active"
            to={"about"}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="hover:text-primary-color cursor-pointer border-b-[0.1rem] border-transparent"
          >
            About
          </LinkSr>
          <LinkSr
            activeClass="active"
            to={"skills"}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="hover:text-primary-color cursor-pointer border-b-[0.1rem] border-transparent"
          >
            Skills
          </LinkSr>
          <LinkSr
            // to={"#projects"}
            activeClass="active"
            to={"projects"}
            spy={true}
            smooth={true}
            offset={-500}
            duration={500}
            className="hover:text-primary-color cursor-pointer border-b-[0.1rem] border-transparent"
          >
            Projects
          </LinkSr>
          <LinkSr
            activeClass="active"
            to={"contact"}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="hover:text-primary-color cursor-pointer border-b-[0.1rem] border-transparent"
          >
            Contact
          </LinkSr>
          <Link
            href="https://github.com/niteshreddy6690"
            className="flex items-center justify-end text-sm lg:text-base cursor-pointer text-primary-color rounded-full border-2 border-primary-color  px-2  md:px-6 py-2 hover:bg-primary-color hover:text-black transition duration-600 ease-in-out hover:border-black"
            target="_blank"
          >
            Github Profile
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
