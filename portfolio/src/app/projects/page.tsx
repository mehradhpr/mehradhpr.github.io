import React from "react";
import { Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl text-title tracking-widest">Projects</h1>
      </section>
      <section className="flex flex-col gap-10">
        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="flex flex-row justify-between items-center bg-gray2 p-1 rounded-lg shadow-4xl text-xl text-pink">
            <div>SaskAI</div>
            <Github />
          </div>
          <div className="text-hidden text-sm">Fine Tuned Web AI Chatbot for Usask</div>
          <div className="pt-5">
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions. Built with Node.js, React, MySQL, and utilizing RESTful principles.
              Offering a responsive, dynamic, and user-friendly experience.
            </p>
          </div>
        </div>

        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="flex flex-row justify-between items-center bg-gray2 p-1 rounded-lg shadow-4xl text-xl text-pink">
            <div>Gate Keeper</div>
            <Github />
          </div>
          <div className="text-hidden text-sm">Web Authentication Solution</div>
          <div className="pt-5">
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions. Built with Node.js, React, MySQL, and utilizing RESTful principles.
              Offering a responsive, dynamic, and user-friendly experience.
            </p>
          </div>
        </div>

        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="flex flex-row justify-between items-center bg-gray2 p-1 rounded-lg shadow-4xl text-xl text-pink">
            <div>Menu Search Optimization</div>
            <Github />
          </div>
          <div className="text-hidden text-sm">UX/UI Survey Research</div>
          <div className="pt-5">
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions. Built with Node.js, React, MySQL, and utilizing RESTful principles.
              Offering a responsive, dynamic, and user-friendly experience.
            </p>
          </div>
        </div>

        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="flex flex-row justify-between items-center bg-gray2 p-1 rounded-lg shadow-4xl text-xl text-pink">
            <div>Chat Cafe</div>
            <Github />
          </div>
          <div className="text-hidden text-sm">Channel-based chat website</div>
          <div className="pt-5">
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions. Built with Node.js, React, MySQL, and utilizing RESTful principles.
              Offering a responsive, dynamic, and user-friendly experience.
            </p>
          </div>
        </div>

        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="flex flex-row justify-between items-center bg-gray2 p-1 rounded-lg shadow-4xl text-xl text-pink">
            <div>Morax Calendar</div>
            <Github />
          </div>
          <div className="text-hidden text-sm">Planner and Productivity</div>
          <div className="pt-5">
            <p>
              A Desktop application for scheduling, setting up meetings and tracking productivity.
              Programmed with Java, leveraging Object Oriented ideas and Model-View-Controller
              architecture. Crafted through the implementation of agile methodologies and fostered
              by seamless team collaboration.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
