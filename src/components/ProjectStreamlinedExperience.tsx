"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProjectStreamlinedExperience = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  });
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0, 0.71, 0.72],
    [1, 1, 0]
  );
  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.72, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  return (
    <motion.section
      style={
        {
          opacity: opacitySection,
          "--scale": scale,
          "--opacity-border": opacityBorder,
        } as any
      }
      ref={targetRef}
      className="mt-[50vh] flex h-[300vh] max-w-[100vw] items-start overflow-x-clip"
    >
      <div className="sticky top-1/2 left-1/2 min-h-[20rem] min-w-[20rem] md:min-h-[35rem] md:min-w-[35rem] -translate-x-[10vw] md:-translate-x-[15vw] lg:-translate-x-1/2 -translate-y-1/2 whitespace-nowrap before:absolute before:inset-0 before:scale-[var(--scale)] md:before:border-[2rem] before:border-[1rem] before:border-[#c7d300] before:opacity-[var(--opacity-border)]">
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className="whitespace-nowrap min-w-screen absolute top-1/2 left-[calc(-100vw+20rem)] md:left-[calc(-100vw+25rem)]  text-[10rem] lg:text-[16rem] text-heading"
        >
          Work Experience.
        </motion.p>
        <motion.p
          aria-hidden
          style={{ x: textX, y: "-50%" }}
          className=" whitespace-nowrap min-w-screen absolute top-1/2 left-[calc(-100vw+20rem)] md:left-[calc(-100vw+25rem)] z-[11] text-[10rem]  md:text-[10rem] lg:text-[16rem] text-transparent [-webkit-text-stroke:1px_var(--colorWhite)]"
        >
          Work Experience.
        </motion.p>
        <motion.p
          style={{
            opacity: finalTextOpacity,
            scale: finalTextScale,
            y: "-50%",
            x: "-50%",
          }}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  text-[4rem] md:text-[10.8rem] leading-tight text-white"
        >
          My Work
        </motion.p>
        <span className="absolute left-[calc(50%*var(--scale)+50%)] top-0 z-10 h-full w-[50vw] origin-left scale-[var(--scale)] bg-black opacity-[var(--opacity-border)]" />
        <span className="absolute left-[calc(50%*var(--scale)+50%-(1rem*var(--scale)))] md:left-[calc(50%*var(--scale)+50%-(2rem*var(--scale)))] top-0 z-[12] h-full w-[50vw] origin-left scale-[var(--scale)] border-l-[1rem] md:border-l-[2rem] border-[#c7d300] opacity-[var(--opacity-border)]" />
      </div>
    </motion.section>
  );
};
