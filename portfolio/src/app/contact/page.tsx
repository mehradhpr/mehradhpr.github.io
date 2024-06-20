import React from "react";

const Contact = () => {
  return (
    <div className="w-screen overflow-hidden flex flex-col items-center p-4">
      <section className="p-20">
        <h1 className="text-2xl font-bold tracking-widest">Contact</h1>
      </section>
      <div className="border border-pink bg-gradient-to-r from-gray1 to-gray2 p-4 rounded-xl">
        <div className="flex text-xl text-pink flex-row justify-between bg-gray2 p-1 rounded-lg shadow-4xl">
          <div>Send an Email</div>
        </div>
        <div>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-500 p-2 rounded-lg"
            />
            <input
              type="text"
              placeholder="Company"
              className="border border-gray-500 p-2 rounded-lg"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-500 p-2 rounded-lg"
            />
            <textarea
              placeholder="Message"
              className="border border-gray-500 p-2 rounded-lg"
            ></textarea>
            <button className="bg-blue text-white p-2 rounded-lg">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
