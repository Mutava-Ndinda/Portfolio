'use client';

import React from 'react';
import { ArrowDownCircle } from 'lucide-react'; // optional icon library

const Landing = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-blue-800 via-purple-800 to-indigo-900 px-6">
      <div className="text-white max-w-3xl space-y-6">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
          Hi, I’m <span className="text-blue-300">Faith Mutava</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 font-medium drop-shadow-sm">
          Software Developer & Designer crafting seamless digital experiences
          that empower, inform, and inspire.
        </p>

        <div className="flex justify-center gap-6 flex-wrap pt-4">
          <button
            onClick={() => scrollToSection('projects')}
            className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-xl hover:bg-blue-100 transition"
          >
            View Projects
          </button>
          <button
            onClick={() => scrollToSection('design')}
            className="border border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-blue-700 transition"
          >
            View Design Work
          </button>
        </div>

        <div className="pt-10">
          <ArrowDownCircle className="mx-auto animate-bounce text-blue-300" size={40} />
          <p className="text-sm text-blue-200 mt-2">Scroll down to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Landing;
