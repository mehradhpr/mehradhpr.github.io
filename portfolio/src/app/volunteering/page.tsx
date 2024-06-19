"use client";

import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";

const Volunteering = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl text-title tracking-widest">Volunteering</h1>
      </section>
      <section className="flex flex-col gap-10">
        <div className="border border-orange-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl">
          <div className="flex text-xl text-orange-500 flex-row justify-between bg-gray2 p-1 rounded-lg shadow-4xl">
            <div>Digitized</div>
            <a href="https://digitized.usask.ca">
              <Link />
            </a>
          </div>
          <div className="text-hidden text-sm">Saskatoon, Saskatchewan | 2023</div>
          <div className="pt-5">
            <div className="relative h-32">
              <Image
                src="/digitized.png"
                fill={true}
                alt="Picture of the University"
                priority={true}
                className="rounded-xl"
              />
            </div>
            <div className="pt-5">
              <p>
                Designed to acquaint high school students with the intricacies of game design and
                user interface development.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-green-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg flex flex-col">
          <div className="flex text-xl text-green-500 flex-row justify-between bg-gray2 p-1 rounded-lg shadow-4xl">
            <div>Nutrien Fireworks Festival</div>
            <a href="https://nutrienfireworksfestival.ca">
              <Link />
            </a>
          </div>

          <div className="text-hidden text-sm">Saskatoon, Saskatchewan | 2022</div>
          <div className="relative h-96 mt-3">
            <Image
              src="/fireworks.png"
              fill={true}
              alt="Picture of the University"
              priority={true}
              className="rounded-xl"
            />
          </div>
        </div>

        <div className="border border-red-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl shadow-lg flex flex-col">
          <div className="flex text-xl text-red-500 flex-row justify-between bg-gray2 p-1 rounded-lg shadow-4xl">
            <div>Saskatoon Santa Parade</div>
            <a href="https://www.saskatoonsantaparade.com">
              <Link />
            </a>
          </div>

          <div className="text-hidden text-sm">Saskatoon, Saskatchewan | 2022</div>
          <div className="relative h-96 mt-3">
            <Image
              src="/santa.png"
              fill={true}
              alt="Picture of the University"
              priority={true}
              className="rounded-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteering;
