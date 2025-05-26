import React from "react";

const DesignWork = () => {
  return (
    <section
      id="design"
      className="bg-gradient-to-b from-pink-50 via-white to-green-50 py-20 px-6 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">🎨 Design Work</h2>
        <p className="text-gray-700 text-lg mb-4">Designs that speak style and function</p>
        <p className="text-gray-600 text-md mb-12">
          I craft visually striking and intuitive user interfaces that bring ideas to life.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left">
          {/* Kipepeo Fashion */}
          <div className="bg-white rounded-2xl border-l-4 border-pink-500 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Kipepeo Fashion Website</h3>
            <p className="text-gray-700 mb-4">
              A stylish and expressive fashion brand website. Focused on elegance, user flow, and bold presentation.
            </p>
            <a
              href="https://www.figma.com/design/6C6CwqNygvoXv3X1DSTKXW/Kipepeo-Fashion?node-id=0-1&t=4flu5rDRACHcH5Rd-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg text-sm transition"
            >
              View on Figma
            </a>
          </div>

          {/* Kamba Recipe Website */}
          <div className="bg-white rounded-2xl border-l-4 border-yellow-500 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Kamba Recipe Website</h3>
            <p className="text-gray-700 mb-4">
              A vibrant recipe platform celebrating traditional Kamba cuisine. Designed with clarity, warmth, and culture in mind.
            </p>
            <a
              href="https://www.figma.com/design/tWiFEZlzt4mLi1GobATYSG/Kamba?node-id=0-1&t=4flu5rDRACHcH5Rd-1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded-lg text-sm transition"
            >
              View on Figma
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignWork;
