import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import React from "react";

import { Github } from "lucide-react";

const Projects = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl font-bold tracking-widest">Projects</h1>
      </section>
      <section className="flex flex-col gap-10">
        <Card className="size-fit max-w-xl">
          <CardHeader className="flex flex-row">
            <div>
              <CardTitle>SaskAI</CardTitle>
              <CardDescription>Fine Tuned Web AI Chatbot for Usask</CardDescription>
            </div>
            <div className="ml-auto">
              <Github />
            </div>
          </CardHeader>
          <CardContent>
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions. Built with Node.js, React, MySQL, and utilizing RESTful principles.
              Offering a responsive, dynamic, and user-friendly experience.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="size-fit max-w-xl">
          <CardHeader className="flex flex-row">
            <div>
              <CardTitle>Gate Keeper</CardTitle>
              <CardDescription>Web Authentication Solution</CardDescription>
            </div>
            <div className="ml-auto">
              <Github />
            </div>
          </CardHeader>
          <CardContent>
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions. Built with Node.js, React, MySQL, and utilizing RESTful principles.
              Offering a responsive, dynamic, and user-friendly experience.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="size-fit max-w-xl">
          <CardHeader className="flex flex-row">
            <div>
              <CardTitle>Menu Search Optimization</CardTitle>
              <CardDescription>UX/UI Survay Research</CardDescription>
            </div>
            <div className="ml-auto">
              <Github />
            </div>
          </CardHeader>
          <CardContent>
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions. Built with Node.js, React, MySQL, and utilizing RESTful principles.
              Offering a responsive, dynamic, and user-friendly experience.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="size-fit max-w-xl">
          <CardHeader className="flex flex-row">
            <div>
              <CardTitle>Chat Cafe</CardTitle>
              <CardDescription>Channel-based chat website</CardDescription>
            </div>
            <div className="ml-auto">
              <Github />
            </div>
          </CardHeader>
          <CardContent>
            <p>
              A full-stack web-based platform for creating channels and engaging in real-time
              discussions. Built with Node.js, React, MySQL, and utilizing RESTful principles.
              Offering a responsive, dynamic, and user-friendly experience.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>

        <Card className="size-fit max-w-xl">
          <CardHeader className="flex flex-row">
            <div>
              <CardTitle>Morax Calendar</CardTitle>
              <CardDescription>Planner and Productivity</CardDescription>
            </div>
            <div className="ml-auto">
              <Github />
            </div>
          </CardHeader>
          <CardContent>
            <p>
              A Desktop application for schedulling, setting up meetings and tracking productivity.
              Programmed with Java, leveraging Object Orineted ideas and Model-View-Controller
              architecture Crafted through the implementation of agile methodologies and fostered by
              seamless team collaboration.
            </p>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Projects;
