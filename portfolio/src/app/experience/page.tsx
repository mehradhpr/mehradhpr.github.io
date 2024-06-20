import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="w-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl font-bold tracking-widest">Experience</h1>
      </section>
      <section className="flex flex-col gap-10">
        <div className="border border-green-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="text-xl text-green-500 bg-gray2 p-1 rounded-lg shadow-4xl">
            Teaching Assistant Leader
          </div>
          <div className="text-hidden text-sm">USASK | May to August - 2023</div>
          <div className="pt-5">
            <div className="text-blue text-lg">CMPT214: Programming Principles and Practice</div>
            <a href="https://catalogue.usask.ca/CMPT-214#top">
              <p className="underline">link to the course webpage</p>
            </a>

            <p className="mt-4 text-title text-lg">Content Outline</p>
            <p>
              - C Language, Pointers, Memory, Makefile
              <br />
              - Bash, Git, Shell scripting
              <br />- Linux OS
            </p>
            <p className="mt-4">
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
