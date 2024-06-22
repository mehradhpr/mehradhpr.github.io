import React from "react";
import { Github } from "lucide-react";
import Image from "next/image";

const Projects = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20 min-[830px]:p-28">
        <h1 className="text-2xl text-title tracking-widest min-[830px]:text-3xl">Projects</h1>
      </section>
      <section className="flex flex-col gap-10 min-[830px]:gap-16 w-full items-center justify-center min-[1400px]:grid min-[1400px]:grid-cols-2 min-[1400px]:max-w-[1400px]">
        <div className="border border-green-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="text-xl text-green-500 bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            SaskAI
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">
            Fine Tuned Web AI Chatbot for Usask
          </div>
          <div className="pt-5 flex flex-col">
            <div className="text-title text-lg min-[830px]:text-xl">
              A full-stack web-based AI chatbot to assist students with their academic inquiries
              from the University of Saskatchewan.
            </div>
            <div className="min-[830px]:text-lg">
              - React, Tailwind, Typescript
              <br />
              - Framework: Next.js
              <br />- Open AI GPT-3 API
            </div>
          </div>
        </div>

        <div className="border border-blue bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="text-xl text-blue bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            Gate Keeper
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">
            Web Authentication Solution
          </div>
          <div className="pt-5 flex flex-col">
            <div className="text-title text-lg min-[830px]:text-xl">
              A full-stack Dynamic Role-based Access Control (RBAC) system for web applications.
            </div>
            <div className="min-[830px]:text-lg">
              - React, Tailwind, Typescript, Prisma, PostgreSQL, Neon.tech
              <br />
              - Framework: Next.js
              <br />
              - JSON Web Tokens (JWT) as HTTP-only Cookies
              <br />- Password Hashing with bcrypt
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div className="relative w-full max-w-[400px] h-[250px] min-[830px]:max-w-[620px] min-[830px]:h-[400px] place-self-center">
                <Image
                  src="/gk.gif"
                  fill={true}
                  alt="Picture of the University"
                  priority={true}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border border-title bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="text-xl text-title bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            Menu Search Optimization
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">UX/UI Survey Research</div>
          <div className="pt-5 flex flex-col">
            <div className="text-title text-lg min-[830px]:text-xl">
              Research project to find the optimal depth of menu systems to reduce visual search
              time.
            </div>
            <div className="min-[830px]:text-lg">
              - Conducted a Survey with 5 Participants
              <br />
              - Implemented with Processing
              <br />
              - Five Different Menu Depths and Configurations
              <br />- Data Analysis via Python and matplotlib
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div className="relative w-full max-w-[400px] h-[250px] min-[830px]:max-w-[620px] min-[830px]:h-[400px] place-self-center">
                <Image
                  src="/mso/mso.gif"
                  fill={true}
                  alt="Picture of the University"
                  priority={true}
                  className="rounded-xl"
                />
              </div>
              <div className="relative w-full max-w-[400px] h-[250px] min-[830px]:max-w-[620px] min-[830px]:h-[400px] place-self-center">
                <Image
                  src="/mso/mso1.png"
                  fill={true}
                  alt="Picture of the University"
                  priority={true}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="text-xl text-pink bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            Chat Cafe
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">
            Channel-based chat website
          </div>
          <div className="pt-5 flex flex-col">
            <div className="text-blue text-lg min-[830px]:text-xl">
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions.
            </div>
            <div className="min-[830px]:text-lg">
              Built with Node.js, React, MySQL, and utilizing RESTful principles. Offering a
              responsive, dynamic, and user-friendly experience.
            </div>
            <div className="relative w-full max-w-[400px] h-[250px] min-[830px]:max-w-[620px] min-[830px]:h-[450px] mt-4 place-self-center">
              <Image
                src="/chat-cafe.png"
                fill={true}
                alt="Chat Cafe"
                priority={true}
                className="rounded-xl"
              />
            </div>
          </div>
        </div> */}

        <div className="border border-orange-400 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="text-xl text-orange-400 bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            Morax Calendar
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">Planner and Productivity</div>
          <div className="pt-5 flex flex-col">
            <div className="text-title text-lg min-[830px]:text-xl">
              A Desktop application for scheduling, setting up meetings and tracking productivity.
            </div>
            <div className="min-[830px]:text-lg">
              - Languages: Java, JavaFX, MySQL
              <br />
              - Object Oriented Design
              <br />
              - Model-View-Controller Architecture
              <br />- Teamwork and Agile Methodologies
            </div>
            <div className="flex flex-col gap-5 mt-5">
              <div className="relative w-full max-w-[400px] h-[250px] min-[830px]:max-w-[620px] min-[830px]:h-[400px] place-self-center">
                <Image
                  src="/morax-calendar/mc1.png"
                  fill={true}
                  alt="Picture of the University"
                  priority={true}
                  className="rounded-xl"
                />
              </div>
              <div className="relative w-full max-w-[400px] h-[250px] min-[830px]:max-w-[620px] min-[830px]:h-[400px] place-self-center">
                <Image
                  src="/morax-calendar/mc4.png"
                  fill={true}
                  alt="Picture of the University"
                  priority={true}
                  className="rounded-xl"
                />
              </div>
              <div className="relative w-full max-w-[400px] h-[250px] min-[830px]:max-w-[620px] min-[830px]:h-[400px] place-self-center">
                <Image
                  src="/morax-calendar/mc3.png"
                  fill={true}
                  alt="Picture of the University"
                  priority={true}
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
