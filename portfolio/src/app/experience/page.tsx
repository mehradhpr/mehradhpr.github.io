import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20 min-[830px]:p-28">
        <h1 className="text-2xl text-title tracking-widest min-[830px]:text-3xl">Experience</h1>
      </section>
      <section className="flex flex-col gap-10 w-full items-center justify-center">
        <div className="border border-green-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="text-xl text-green-500 bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            Teaching Assistant Leader
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">
            University of Saskatchewan | May to August - 2023
          </div>
          <div className="pt-5">
            <div className="text-title text-lg min-[830px]:text-xl">
              CMPT214: Programming Principles and Practice
            </div>
            <a href="https://catalogue.usask.ca/CMPT-214#top" className="underline">
              link to the course webpage
            </a>
            <div className="mt-4 text-title text-lg min-[830px]:text-xl">Content Outline</div>
            <p className="min-[830px]:text-lg">
              - C Language, Pointers, Memory, Makefile
              <br />
              - Bash, Git, Shell scripting
              <br />- Linux OS
            </p>
            <p className="mt-4 min-[830px]:text-lg">
              Facilitated laboratory sessions with students, providing individualized tutorial
              sessions to address their inquiries effectively.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
