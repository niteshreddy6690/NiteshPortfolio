"use client";
import React, { useRef } from "react";
import { skills } from "../data/constants";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
const Skills = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  return (
    <motion.div
      ref={targetRef}
      style={{ opacity: opacity }}
      id="skills"
      className="mt-20 min-h-[100vh] w-full flex justify-center flex-col items-center text-center flex-wrap max-w-[1440px] mx-auto "
    >
      <div className=" text-6xl md:text-[112px] pt-4 font-bold text-primary-color mb-[10%]">
        Skills
      </div>
      <p className="text-text-color leading-2 max-w-[500px] py-4 text-lg">
        Here are some of my skills on which I have been working on for the past
        4 years.
      </p>
      <motion.div
        className="flex-col md:flex md:flex-row gap-2 flex-wrap w-full p-10"
        style={{ scale }}
      >
        {skills.map((item, i) => (
          <div
            className="border-[1px] border-primary-color max-w-[100%] w-[100%] md:w-[48%] lg:w-[40%]  p-2 rounded-xl mt-16 mx-auto"
            key={i}
          >
            <h1 className=" text-xl md:text-2xl lg:text-4xl mb-5 py-2 ">
              {item?.title}
            </h1>
            <div className="flex justify-center items-center flex-wrap">
              {item?.skills?.map((skill, i) => (
                <div
                  className="border-[1px] border-slate-500 rounded-md flex justify-center items-center p-2 gap-2 m-2"
                  key={i}
                >
                  <Image
                    src={skill?.image}
                    alt={skill?.name}
                    width={40}
                    height={40}
                    className=" w-6 h-6 lg:w-8 lg:h-8"
                  />
                  <h3 className="text-sm md:text-xl">{skill?.name}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
