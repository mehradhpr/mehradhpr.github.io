import React from "react";
import Image from "next/image";

const Education = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20 min-[830px]:p-28">
        <h1 className="text-2xl text-title tracking-widest min-[830px]:text-3xl">Education</h1>
      </section>
      <section className="flex flex-col gap-10 min-[830px]:gap-16 w-full items-center justify-center">
        <div className="border border-green-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="text-xl text-green-500 bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            University of Saskatchewan
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">
            Saskatoon, Saskatchewan | From 2020 to 2024
          </div>
          <div className="pt-5 flex flex-col">
            <div className="text-title text-lg min-[830px]:text-xl">
              Bachelor&apos;s of Science in Computer Science
            </div>
            <div className="min-[830px]:text-lg">Graduated with Great Distinction</div>
            <div className="min-[830px]:text-lg">Cumulative Weighted Average of 85%</div>
            <div className="relative w-full max-w-[400px] h-[250px] min-[830px]:max-w-[620px] min-[830px]:h-[450px] mt-4 place-self-center">
              <Image
                src="/uofs.jpeg"
                fill={true}
                alt="Picture of the University"
                priority={true}
                className="rounded-xl"
              />
            </div>
            <div className="pt-5">
              <p className="text-title text-lg min-[830px]:text-xl">Featured Courses</p>
              <p className="min-[830px]:text-lg">CMPT 332: Operating Systems Concepts</p>
              <p className="min-[830px]:text-lg">CMPT 353: Full Stack Web Programming</p>
              <p className="min-[830px]:text-lg">CMPT 370: Intermediate Software Engineering</p>
              <p className="min-[830px]:text-lg">CMPT 481: Human Computer Interaction</p>
              <p className="min-[830px]:text-lg">CMPT 489: Deep Learning and Applications</p>
            </div>
          </div>
        </div>

        <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="text-xl text-pink bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            IBM
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">www.edx.org | 2022</div>
          <div className="pt-5">
            <div className="text-title text-lg min-[830px]:text-xl">
              Introduction to SQL Certificate
            </div>
            <a
              href="https://courses.edx.org/certificates/1879195bf01f4d99bc58b3b72ed2ead7"
              className="underline"
            >
              link to the original certificate on Edx
            </a>
            <div className="relative w-full max-w-[400px] h-[300px] min-[830px]:max-w-[620px] min-[830px]:h-[450px] mt-4 place-self-center">
              <Image
                src="/ibm-sql.png"
                fill={true}
                alt="Picture of the University"
                priority={true}
                className="rounded-xl"
              />
            </div>
            <div className="pt-5">
              <p className="text-title text-lg min-[830px]:text-xl">Concepts Involved</p>
              <p className="min-[830px]:text-lg">- Relational Databases</p>
              <p className="min-[830px]:text-lg">- IBM Cloud</p>
              <p className="min-[830px]:text-lg">- SQL Queries</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Education;
