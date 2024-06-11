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
    <div className="w-11/12 flex justify-center py-2 shadow-2xl bg-gradient-to-br from-yellow-300 via-amber-600 via-65% to-amber-700 rounded-2xl mx-auto mt-2">
      <div className="flex justify-center items-center min-h-screen p-10">
        <div className="grid grid-cols-2 gap-20">
          <Card className="size-fit max-w-xl">
            <CardHeader className="flex flex-row">
              <div>
                <CardTitle>SaskAI</CardTitle>
                <CardDescription>Fine Tuned Web AI Chatbot</CardDescription>
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
                <CardDescription>Fine Tuned AI Chatbot</CardDescription>
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
                <CardDescription>Fine Tuned AI Chatbot</CardDescription>
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
                <CardDescription>Fine Tuned AI Chatbot</CardDescription>
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
                <CardDescription>Fine Tuned AI Chatbot</CardDescription>
              </div>
              <div className="ml-auto">
                <Github />
              </div>
            </CardHeader>
            <CardContent>
              <p>
                A Desktop application for schedulling, setting up meetings and tracking
                productivity. Programmed with Java, leveraging Object Orineted ideas and
                Model-View-Controller architecture Crafted through the implementation of agile
                methodologies and fostered by seamless team collaboration.
              </p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;
