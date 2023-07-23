import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="relative">
      <div className="flex justify-center items-center h-2000 p-10">
        <form
          
          name="contact"
          className="w-4/5 md:w-1/2 lg:w-1/3 bg-gray-700 p-8 rounded-lg"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-0 font-medium title-font">
            Contact me
          </h2>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-black">
              Name
            </label>
            <input
              type="text"
              id="name"ß
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-black">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-black"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          <button
            type = "submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
