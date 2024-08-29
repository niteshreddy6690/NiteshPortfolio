"use client";

import Typewriter from "typewriter-effect";
import { Bio } from "../data/constants";
import Link from "next/link";
import Image from "next/image";
import { MdOutlineFileDownload } from "react-icons/md";
import { motion } from "framer-motion";
import personImage from "../../public/images/Nitesh S.jpeg";
import bannerImage from "../../public/images/banner.jpg";
import { useRef } from "react";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const HeroSection = () => {
  const targetRef = useRef(null);

  const DownloadCv = () => {
    const pdfUrl = "/PDF/Nitesh_S_Resume.pdf";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Nitesh_S_Resume.pdf"; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const styling = {
    // backgroundImage: `url('/images/banner.jpg')`,
    // width: "100%",
    // height: "100%",
    // backgroundSize: "cover",
    // backgroundPosition: "center",
  };

  return (
    <div
      style={styling}
      id="about"
      className="flex justify-between items-center px-10 max-w-[1440px] h-[100vh]"
    >
      <motion.div>
        <motion.div className=" sm:w-[100%] md:w-[80%] lg:w-[50%]">
          <div className="">
            <span className=" text-[28px] md:text-6xl  font-bold">
              Hi ,I am Nitesh S
            </span>
          </div>
          <div className="flex text-xl md:text-4xl flex-row justify-start py-5 gap-5 text-left ">
            I am a
            <span className="text-primary-color flex justify-start text-left m-0">
              <Typewriter
                options={{
                  strings: Bio?.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className=" text-lg md:text-2xl py-2 text-text-color mb-20">
            {Bio?.description}
          </div>
          <div
            onClick={DownloadCv}
            className="w-[200px] py-4 border-2 border-transparent bg-primary-color text-black text-center text-lg font-semibold cursor-pointer hover:border-primary-color hover:bg-black hover:text-white m-0 transition duration-600 ease-in-out sticky rounded-sm"
          >
            <span>Download CV</span>
            <MdOutlineFileDownload className="inline font-bold text-2xl ml-1 " />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
