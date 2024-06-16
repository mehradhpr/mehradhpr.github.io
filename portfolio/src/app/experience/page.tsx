import React from "react";

const Experience = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl font-bold tracking-widest">Experience</h1>
      </section>
      <section className="flex flex-col gap-10">
        <div className="size-fit max-w-xl">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="font-bold text-xl">Freelancer</div>
            <div className="text-gray-600">From 2024 to present</div>
            <div className="pt-5">
              <div className="font-bold">Bachelor&apos;s of Science in Computer Science</div>
              <div>Graduated with Great Distinction, CWA of 85%</div>
              <div className="pt-5">
                <p className="font-bold">Featured Courses</p>
                <p>CMPT 332: Operating Systems Concepts</p>
                <p>CMPT 353: Full Stack Web Programming</p>
                <p>CMPT 370: Intermediate Software Engineering</p>
                <p>CMPT 481: Human Computer Interaction</p>
                <p>CMPT 489: Deep Learning and Applications</p>
              </div>
            </div>
          </div>
        </div>

        <div className="size-fit max-w-xl">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="font-bold text-xl">Teaching Assistant Leader</div>
            <div className="text-gray-600">University of Saskatchewan</div>
            <div className="pt-5">
              <div className="font-bold">A+ certificate</div>
              <div>Currently training</div>
              <div className="pt-5">
                <p className="font-bold">Concepts Involved</p>
                <p>Networks</p>
                <p>Operating Systems</p>
                <p>Hardware</p>
                <p>Security</p>
                <p>System Administration</p>
              </div>
            </div>
          </div>
        </div>

        <div className="size-fit max-w-xl">
          <div className="border border-gray-200 p-6 rounded-lg">
            <div className="font-bold text-xl">IBM</div>
            <div className="text-gray-600">Edx.org | 2022</div>
            <div className="pt-5">
              <div className="font-bold">Introduction to SQL certificate</div>
              <a
                href="https://courses.edx.org/certificates/1879195bf01f4d99bc58b3b72ed2ead7"
                className="underline"
              >
                link to the certificate on Edx Website
              </a>
              <div className="pt-5">
                <p className="font-bold">Concepts Involved</p>
                <p>Relational Databases</p>
                <p>IBM Cloud</p>
                <p>SQL Queries</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
