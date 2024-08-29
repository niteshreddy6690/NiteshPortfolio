"use client";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/Scene"), {
  ssr: false,
});

const Experience = () => {
  return (
    <div className="fixed w-full h-full -z-[1] flex items-center justify-center">
      <Scene />
    </div>
  );
};

export default Experience;
