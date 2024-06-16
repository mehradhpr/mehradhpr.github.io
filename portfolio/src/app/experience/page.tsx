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
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl font-bold tracking-widest">Experience</h1>
      </section>
      <section className="flex flex-col gap-10">
        <Card>
          <CardHeader>
            <CardTitle>Freelancer</CardTitle>
            <CardDescription>From 2024 to present</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="font-bold appear-on">
              Bachelor&apos;s of Science in Computer Science
            </div>
            <div>Graduated with Great Distinction, CWA of 85%</div>
            <div className="pt-5">
              <p className="font-bold">Featuted Courses</p>
              <p>CMPT 332: Operating Systems Concepts</p>
              <p>CMPT 353: Full Stack Web Programming</p>
              <p>CMPT 370: Intermediate Software Engineering</p>
              <p>CMPT 481: Human Computer Interaction</p>
              <p>CMPT 489: Deep Learning and Applications</p>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Teaching Assistant Leader</CardTitle>
            <CardDescription>University of Saskatchewan</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="font-bold appear-on">A+ certificate</div>
            <div>Currently training</div>
            <div className="pt-5">
              <p className="font-bold">Concepts Involve</p>
              <p>Networks</p>
              <p>Operating Systems</p>
              <p>Hardware</p>
              <p>Security</p>
              <p>System Administration</p>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>IBM</CardTitle>
            <CardDescription>Edx.org | 2022</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="font-bold appear-on">Introduction to SQL certificate</div>
            <a href="https://courses.edx.org/certificates/1879195bf01f4d99bc58b3b72ed2ead7">
              <div className="underline">link to the certificate on Edx Website</div>
            </a>
            <div className="pt-5">
              <p className="font-bold">Concepts Involve</p>
              <p>Releational Databases</p>
              <p>IBM Cloud</p>
              <p>SQL Queries</p>
            </div>
          </CardContent>
          <CardFooter></CardFooter>
        </Card>
      </section>
    </div>
  );
};

export default Experience;
