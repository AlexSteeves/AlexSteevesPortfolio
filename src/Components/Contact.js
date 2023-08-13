import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="items-center justify-center flex h-screen bg-contact">
      <div className="flex justify-center items-center h-screen p-10 w-screen pt-50">
        <form
          
          name="contact"
          className="w-4/5 md:w-1/2 lg:w-1/3 bg-gray-700 p-8 rounded-lg"
        >
          <h2 className="text-gray-800 sm:text-4xl text-3xl mb-0 font-medium title-font">
            Contact me
          </h2>

          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-800">
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
            <label htmlFor="email" className="leading-7 text-sm text-gray-800">
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
              className="leading-7 text-sm text-gray-800"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>

          <a
              href=""
              className="inline-flex text-white border-0 py-2 px-6 focus:outline-none rounded text-lg bg-button-100 hover:bg-button-200 hover:rounded-xl transition-all duration-500 ease-linear cursor-pointer"
            >
              Submit
            </a>
        </form>
      </div>
    </section>
  );
}
