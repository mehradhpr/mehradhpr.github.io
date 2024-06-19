import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl font-bold tracking-widest">Experience</h1>
      </section>
      <section className="flex flex-col gap-10">
        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="text-xl text-pink bg-gray2 p-1 rounded-lg shadow-4xl">Freelancer</div>
          <div className="text-hidden text-sm">From 2024 to present</div>
          <div className="pt-5">
            <div className="text-blue text-lg">Bachelor&apos;s of Science in Computer Science</div>
            <div>Graduated with Great Distinction, CWA of 85%</div>
            <div className="pt-5">
              <p className="text-blue text-lg">Featured Courses</p>
              <p>CMPT 332: Operating Systems Concepts</p>
              <p>CMPT 353: Full Stack Web Programming</p>
              <p>CMPT 370: Intermediate Software Engineering</p>
              <p>CMPT 481: Human Computer Interaction</p>
              <p>CMPT 489: Deep Learning and Applications</p>
            </div>
          </div>
        </div>

        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="text-xl text-pink bg-gray2 p-1 rounded-lg shadow-4xl">
            Teaching Assistant Leader
          </div>
          <div className="text-hidden text-sm">University of Saskatchewan</div>
          <div className="pt-5">
            <div className="text-blue text-lg">A+ Certificate</div>
            <div>Currently training</div>
            <div className="pt-5">
              <p className="text-blue text-lg">Concepts Involved</p>
              <p>Networks</p>
              <p>Operating Systems</p>
              <p>Hardware</p>
              <p>Security</p>
              <p>System Administration</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
