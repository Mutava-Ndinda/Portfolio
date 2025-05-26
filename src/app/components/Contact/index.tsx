import React from "react";

const Contact = () => {
  return (
    <section className="bg-gradient-to-b from-blue-50 via-white to-pink-50 py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">💬 Let’s Connect</h2>
        <p className="text-gray-700 text-lg mb-10">
          Have a project, collaboration, or just want to chat? <br />
          Drop me a message — I’d love to hear from you!
        </p>

        {/* Contact Form */}
        <form className="space-y-6 text-left">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            />
          </div>
          <div>
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              className="w-full px-5 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm transition"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-full shadow-lg transition"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Social Links */}
        <div className="mt-14">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4"> Or find me on</h3>
          <div className="flex justify-center space-x-6 text-lg font-medium">
            <a
              href="https://github.com/Mutava-Ndinda"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-black transition"
            >
              GitHub
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-pink-500 transition"
            >
              Dribbble / Behance
            </a>
            <a
              href="https://x.com/faith_muta1037"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-500 transition"
            >
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
