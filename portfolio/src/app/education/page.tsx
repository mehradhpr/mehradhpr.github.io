import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl text-title tracking-widest">Education</h1>
      </section>
      <section className="flex flex-col gap-10">
        <div className="border border-green-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl">
          <div className="text-xl text-green-500 bg-gray2 p-1 rounded-lg shadow-4xl">
            University of Saskatchewan
          </div>
          <div className="text-hidden text-sm">Saskatoon, Saskatchewan | From 2020 to 2024</div>
          <div className="pt-5">
            <div className="text-blue text-lg">Bachelor&apos;s of Science in Computer Science</div>
            <div>Graduated with Great Distinction</div>
            <div>Cumulative Weighted Average of 85%</div>
            <div className="relative h-60 mt-4">
              <Image
                src="/uofs.jpeg"
                fill={true}
                alt="Picture of the University"
                priority={true}
                className="rounded-xl"
              />
            </div>

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

        {/* <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="text-xl text-pink bg-gray2 p-1 rounded-lg shadow-4xl">COMPTIA</div>
          <div className="text-hidden text-sm">Online | From 2024 to present</div>
          <div className="pt-5">
            <div className="text-blue text-lg">A+ Certificate</div>
            <div>Currently training</div>
            <div className="pt-5">
              <p className="text-blue text-lg">Concepts Involved</p>
              <p>- Networks</p>
              <p>- Operating Systems</p>
              <p>- Hardware</p>
              <p>- Security</p>
              <p>- System Administration</p>
            </div>
          </div>
        </div> */}

        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg">
          <div className="text-xl text-pink bg-gray2 p-1 rounded-lg shadow-4xl">IBM</div>
          <div className="text-hidden text-sm">Edx.org | 2022</div>
          <div className="pt-5">
            <div className="text-blue text-lg">Introduction to SQL Certificate</div>
            <a
              href="https://courses.edx.org/certificates/1879195bf01f4d99bc58b3b72ed2ead7"
              className="underline"
            >
              link to the original certificate on Edx
            </a>
            <div className="relative h-72 mt-4">
              <Image
                src="/ibm-sql.png"
                fill={true}
                alt="Picture of the University"
                priority={true}
                className="rounded-xl"
              />
            </div>
            <div className="pt-5">
              <p className="text-blue text-lg">Concepts Involved</p>
              <p>- Relational Databases</p>
              <p>- IBM Cloud</p>
              <p>- SQL Queries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
