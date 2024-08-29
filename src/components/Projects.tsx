"use client";
import React, { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import MntraProject from "../../public/images/Mntra-project.png";
import MusicPlayer from "../../public/images/Music-player.png";
import { MdDescription } from "react-icons/md";
const Projects = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  // const scale = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  // const opacity1 = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  // const scale1 = useTransform(scrollYProgress, [0, 0.45], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 1], ["100vw", "50vw"]);
  const x1 = useTransform(scrollYProgress, [0, 1], ["-100vw", "100vw"]);
  const textX = useTransform(scrollYProgress, [0.1, 0.7], ["100%", "-100%"]);
  const opacitySection = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);

  const opacityBorder = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72],
    [1, 1, 0]
  );

  const finalTextOpacity = useTransform(
    scrollYProgress,
    [0.7, 0.71, 0.72, 0.8, 0.9],
    [0, 0, 1, 1, 0]
  );

  const finalTextScale = useTransform(scrollYProgress, [0.8, 0.9], [1, 0.7]);

  const projects = [
    {
      src: MusicPlayer,
      id: "01",
      title: "Music Player",
      href: "https://react-music-player-by-nitesh.netlify.app/",
      description:
        "The React Music Player Application is a simple tool that allows you to play a list of static music files in different orders. It provides features such as autoplay, repeating the same song, playing previous or next music, and shuffling the playlist.",
      techStack: ["React.js"],
    },
    {
      src: MntraProject,
      id: "02",
      title: "Mntra E-commerce",
      href: "https://mntra-clone-by-nitesh.netlify.app",
      description:
        "Mntra is a one stop shop for all your fashion and lifestyle needs which is inspired from Myntra. Mntra aims at providing a hassle free and enjoyable shopping experience to user, It provides a features such as wishlist, cart, Review and rating, authentication and authorization with JWT,Profile,Like or Unlike Review and Razorpay payment",
      techStack: [
        "React.js",
        "Node.js",
        "Mongodb",
        "Express",
        "Firebase",
        "Styled components",
        "RTK",
      ],
    },
  ];

  type ProjectComponentTypes = {
    project: {
      src: string | StaticImageData;
      id: string;
      title: string;
      href: string;
      description: string;
      techStack: string[];
    };
    i: number;
  };
  const ProjectComponent = (props: ProjectComponentTypes) => {
    const { project, i } = props;
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ["start end", "end start"],
    });
    const scale = useTransform(scrollYProgress, [0.1, 0.7], [1, 0.7]);
    const scaleImage = useTransform(scrollYProgress, [0.1, 0.5], [1.2, 1]);
    const y = useTransform(scrollYProgress, [0, 0.5], ["-10%", "-100%"]);

    // return (
    //   <div ref={targetRef} className="bg-pink-500 w-full h-full">
    //     <motion.div
    //       key={i}
    //       style={
    //         {
    //           "--scaleImage": scaleImage,
    //         } as any
    //       }
    //       className={`  bg-yellow-400 ${
    //         (i + 1) % 2 != 0 ? "float-left" : "float-right"
    //       } m-0 relative`}
    //     >
    //       <motion.h1
    //         style={{ y: y } as any}
    //         className={`text-[8rem] font-bold text-transparent [-webkit-text-stroke:1px_var(--colorWhite)] relative ${
    //           (i + 1) % 2 != 0 ? "float-right" : "float-left"
    //           // "left-[95%]" : "-left-[18%]"
    //         } top-[20%] -z-[1]`}
    //       >
    //         {project?.id}
    //       </motion.h1>
    //       {/* <div className="relative ">
    //         <Link
    //           href={project?.href}
    //           className="relative overflow-hidden"
    //           target="_blank"
    //         >
    //           <motion.div className="overflow-hidden w-[100%] rounded-lg relative">
    //             <Image
    //               src={project?.src}
    //               alt={project?.title}
    //               className="rounded-lg ml-0 my-0 relative w-[100%] h-full overflow-hidden
    //               scale-[var(--scaleImage)]"
    //             />
    //           </motion.div>
    //         </Link>
    //       </div>
    //       <span className="text-[3rem] font-bold text-transparent [-webkit-text-stroke:1px_var(--colorWhite)] ">
    //         {project?.title}
    //       </span>
    //       <p className="text-[1rem]">{project?.description}</p>
    //       <p className="text-[1.2rem] mt-2">
    //         <span> Tech-Stack : </span>
    //         {project?.techStack?.map((tech, i = 0) => (
    //           <>
    //             {i !== 0 ? (
    //               <span className="text-primary-color "> |</span>
    //             ) : null}
    //             <span> {tech}</span>
    //           </>
    //         ))}
    //       </p> */}
    //     </motion.div>
    //   </div>
    // );

    return (
      <div ref={targetRef} className=" h-full mx-10">
        <motion.div
          key={i}
          style={
            {
              "--scaleImage": scaleImage,
            } as any
          }
          className={` ${
            (i + 1) % 2 != 0 ? "float-left" : "float-right"
          } m-0 relative md:w-[80%] lg:w-[65%] h-full `}
        >
          <motion.h1
            style={{ y: y } as any}
            className={` text-[4rem] md:text-[8rem] font-bold text-transparent [-webkit-text-stroke:1px_var(--colorWhite)] absolute  ${
              (i + 1) % 2 != 0 ? "right-0" : "left-0"
            } `}
          >
            {project?.id}
          </motion.h1>

          <Link href={project?.href} target="_blank">
            <motion.div className="relative h-full w-full overflow-hidden rounded-lg">
              <Image
                src={project?.src}
                alt={project?.title}
                className=" bg-transparent ml-0 my-0 relative rounded-lg overflow-hidden scale-[var(--scaleImage)]"
              />
            </motion.div>
          </Link>

          <div className=" mt-2 md:mt-5 text-white">
            <span className=" text-2xl md:text-[3rem] relative mt-10 font-bold   md:text-transparent md:[-webkit-text-stroke:1px_var(--colorWhite)] ">
              {project?.title}
            </span>
            <p className=" text-[12px] md:text-xl text-text-color mt-2">
              {project?.description}
            </p>
            <p className="text-[1.2rem] mt-2 text-text-color">
              <span> Tech-Stack : </span>
              {project?.techStack?.map((tech, i = 0) => (
                <>
                  {i !== 0 ? (
                    <span className="text-primary-color "> |</span>
                  ) : null}
                  <span> {tech}</span>
                </>
              ))}
            </p>
          </div>
        </motion.div>
      </div>
    );
  };
  return (
    <section className="w-full  my-[50px]">
      <div className="flex flex-col gap-[20vh] my-40 w-full h-full mx-0">
        {projects?.map((project, i) => (
          <ProjectComponent project={project} i={i} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
