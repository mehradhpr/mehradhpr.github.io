import React from "react";

const Contact = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20 min-[830px]:p-28">
        <h1 className="text-2xl text-title tracking-widest min-[830px]:text-3xl">Contact</h1>
      </section>
      <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl w-full max-w-[400px] min-[830px]:max-w-[600px]">
        <div className="flex text-xl text-pink flex-row justify-between bg-gray2 p-1 mb-4 rounded-lg shadow-4xl min-[830px]:text-2xl">
          <div>Send an Email</div>
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-500 p-2 rounded-lg min-[830px]:p-3"
            />
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-500 p-2 rounded-lg min-[830px]:p-3"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-500 p-2 rounded-lg min-[830px]:p-3"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-500 p-2 rounded-lg min-[830px]:p-3 h-32 min-[830px]:h-48"
            ></textarea>
            <button className="bg-blue text-white p-2 rounded-lg min-[830px]:p-3">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
