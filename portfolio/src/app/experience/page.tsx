import React from "react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Experience = () => {
  return (
    <div className="w-11/12 flex justify-center py-2 shadow-2xl bg-gradient-to-br from-yellow-300 via-amber-600 via-65% to-amber-700 rounded-2xl mx-auto">
      <div className="flex justify-center min-h-screen p-10">
        <div className="flex flex-col gap-20">
          <Card className="size-fit max-w-xl">
            <CardHeader>
              <CardTitle>Freelancer</CardTitle>
              <CardDescription>Fine Tuned AI Chatbot</CardDescription>
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
            <CardHeader>
              <CardTitle>Teaching Assistant Leader</CardTitle>
              <CardDescription>Fine Tuned AI Chatbot</CardDescription>
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
        </div>
      </div>
    </div>
  );
};

export default Experience;
