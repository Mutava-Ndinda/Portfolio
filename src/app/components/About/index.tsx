import React from "react";
import { Code, Monitor, Layers, PenTool } from "lucide-react";

const About = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
        <p className="text-gray-600 text-lg mb-10 max-w-3xl mx-auto leading-relaxed">
          I&apos;m a frontend developer who blends creativity and code to craft impactful digital experiences. My mission is to use thoughtful design and functional interfaces to solve real world problems like helping families find missing loved ones.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Card 1 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Monitor className="text-blue-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-800">User-Centered Design</h3>
            </div>
            <p className="text-gray-700">
              I focus on building accessible, intuitive interfaces that meet users where they are especially in sensitive, high impact use cases like Lost Locate.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Code className="text-green-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-800">Clean, Scalable Code</h3>
            </div>
            <p className="text-gray-700">
              Using tools like React, TypeScript, and Next.js, I write clean, maintainable code that&apos;s ready to grow with your users and your mission.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <PenTool className="text-pink-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-800">Design Thinking</h3>
            </div>
            <p className="text-gray-700">
              I design interfaces with intention, blending aesthetics and usability to ensure every interaction is clear, calm, and human-centered.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-4">
              <Layers className="text-purple-500 w-6 h-6" />
              <h3 className="text-xl font-semibold text-gray-800">Full Toolbelt</h3>
            </div>
            <p className="text-gray-700">
              From Figma, GitHub to Tailwind I use the right tools to get the job done beautifully and efficiently.
            </p>
          </div>
        </div>

        {/* Toolkit Summary */}
        <div className="mt-16">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">Toolkit</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-700 text-md font-medium">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Vue.js",
              "Figma",
              "Git & GitHub",
            ].map((tool, index) => (
              <li
                key={index}
                className="bg-white shadow-sm border border-gray-200 px-4 py-2 rounded-full hover:shadow-md transition"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
