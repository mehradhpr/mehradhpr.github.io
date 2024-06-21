"use client";

import React from "react";
import Image from "next/image";
import { Link } from "lucide-react";

const Volunteering = () => {
  return (
    <div className="w-full min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20 min-[830px]:p-28">
        <h1 className="text-2xl text-title tracking-widest min-[830px]:text-3xl">Volunteering</h1>
      </section>
      <section className="flex flex-col gap-10 min-[830px]:gap-16 w-full items-center justify-center">
        <div className="border border-orange-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="flex text-xl text-orange-500 justify-between bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            <div>Digitized</div>
            <a href="https://digitized.usask.ca" target="_blank" rel="noopener noreferrer">
              <Link className="text-orange-500" />
            </a>
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">
            Saskatoon, Saskatchewan | 2023
          </div>
          <div className="pt-5 flex flex-col">
            <div className="relative w-full h-[200px] min-[830px]:h-[300px] place-self-center">
              <Image
                src="/digitized.png"
                fill={true}
                alt="Digitized Event"
                priority={true}
                className="rounded-xl"
              />
            </div>
            <div className="pt-5 text-title text-lg min-[830px]:text-xl">
              Designed to acquaint high school students with the intricacies of game design and user
              interface development.
            </div>
          </div>
        </div>

        <div className="border border-green-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="flex text-xl text-green-500 justify-between bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            <div>Nutrien Fireworks Festival</div>
            <a href="https://nutrienfireworksfestival.ca" target="_blank" rel="noopener noreferrer">
              <Link className="text-green-500" />
            </a>
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">
            Saskatoon, Saskatchewan | 2022
          </div>
          <div className="pt-5 flex flex-col">
            <div className="relative w-full h-[400px] min-[830px]:h-[600px] place-self-center">
              <Image
                src="/fireworks.png"
                fill={true}
                alt="Nutrien Fireworks Festival"
                priority={true}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>

        <div className="border border-red-500 bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
          <div className="flex text-xl text-red-500 justify-between bg-gray2 p-1 rounded-lg shadow-4xl min-[830px]:text-2xl">
            <div>Saskatoon Santa Parade</div>
            <a
              href="https://www.saskatoonsantaparade.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Link className="text-red-500" />
            </a>
          </div>
          <div className="text-hidden text-sm min-[830px]:text-base">
            Saskatoon, Saskatchewan | 2022
          </div>
          <div className="pt-5 flex flex-col">
            <div className="relative w-full h-[400px] min-[830px]:h-[600px] place-self-center">
              <Image
                src="/santa.png"
                fill={true}
                alt="Saskatoon Santa Parade"
                priority={true}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Volunteering;
