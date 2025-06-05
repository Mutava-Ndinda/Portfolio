import React from "react";

const DesignWork = () => {
  return (
    <section
      id="design"
      className="bg-gradient-to-b from-pink-50 via-white to-green-50 py-20 px-6 text-center"
    >
      <div className="max-w-5xl mx-auto">
        {/* Intro */}
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">🎨 Design Work</h2>
        <p className="text-gray-700 text-lg mb-4">
          From expressive interfaces to structured systems, I blend creativity and usability to build products that are intuitive, inclusive, and beautiful.
        </p>
        <p className="text-gray-600 text-md mb-12">
          These projects showcase my design thinking from user flows and wireframes to polished UI systems and live prototypes.
        </p>

        {/* Featured Designs */}
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

          {/* Kamba Recipe */}
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

          {/* Inota */}
          <div className="bg-white rounded-2xl border-l-4 border-blue-500 p-6 shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Inota Credit Scoring System</h3>
            <p className="text-gray-700 mb-4">
              A sleek, data-driven website design for a credit scoring system. Focused on accessibility, performance, and intuitive dashboards for user trust and clarity.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.figma.com/design/gmHLT6dv8XtuzliXLh6RR0/Inota-?node-id=0-1&t=hkeWdVqB0zLVNGVT-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg text-sm transition"
              >
                View on Figma
              </a>
              <a
                href="https://www.figma.com/board/PrGeVbQtmqLQFtwilzrPT9/User-Flow?node-id=0-1&t=ixB7Ko52yXUq4Yzh-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-500 hover:bg-cyan-600 text-white px-5 py-2 rounded-lg text-sm transition"
              >
                View User Flow
              </a>
            </div>
          </div>
        </div>

        {/* Brand & Style Guides */}
        <div className="mt-16 text-left">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">📘 Brand & Style Guides</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Lost Locate */}
            <div className="bg-white rounded-2xl border-l-4 border-green-500 p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">Lost Locate – Brand Guide</h4>
              <p className="text-gray-700 mb-4">
                A comprehensive design system built for the Lost Locate platform. Includes logo usage, color palette, typography, and UI components to ensure visual consistency across all touchpoints.
              </p>
              <a
                href="https://www.figma.com/design/U6CiahQRxu6lk5hlrKiUc9/UPILE-LOST-LOCATE?node-id=37-3&t=b3UgnmthFYyiUqWD-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg text-sm transition"
              >
                View Brand Guide
              </a>
            </div>

            {/* Fresh Greens */}
            <div className="bg-white rounded-2xl border-l-4 border-emerald-500 p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">Fresh Greens – Style Guide</h4>
              <p className="text-gray-700 mb-4">
                A clean, vibrant design system for an e-commerce grocery brand. Defines color palettes, iconography, and UI components tailored for fresh produce shopping experiences.
              </p>
              <a
                href="https://www.figma.com/design/peYV6M2PwCkI75bejIOcZP/Fresh-Green-s?node-id=0-1&t=Q1Xr7rGiJLlYj3Y0-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-lg text-sm transition"
              >
                View Style Guide
              </a>
            </div>
          </div>
        </div>

        {/* Prototypes & Wireframes */}
        <div className="mt-16 text-left">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">🔗 Prototypes & Wireframes</h3>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Mkulima */}
            <div className="bg-white rounded-2xl border-l-4 border-lime-500 p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">Mkulima — Farming Product Marketplace</h4>
              <p className="text-gray-700 mb-4">
                A mobile-first prototype for farmers to upload, manage, and sell agricultural products like eggs. Designed for usability, accessibility, and trust.
              </p>
              <a
                href="https://www.figma.com/proto/zpll5wZLvsw0s78J6WkA92/Mkulima?node-id=44-25&starting-point-node-id=44%3A22&t=vFXBZHXETua92BOu-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-lime-500 hover:bg-lime-600 text-white px-5 py-2 rounded-lg text-sm transition"
              >
                View Prototype
              </a>
            </div>

            {/* StimaAppli */}
            <div className="bg-white rounded-2xl border-l-4 border-purple-500 p-6 shadow-md hover:shadow-lg transition-shadow">
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">StimaApp – SACCO App Wireframes</h4>
              <p className="text-gray-700 mb-4">
                Wireframes for a SACCO app interface including registration, loan applications, and dashboard flows. Focused on early-stage usability planning.
              </p>
              <a
                href="https://www.figma.com/design/7lIcafMJ6oO20ZMGKdf48H/StimaAppli?node-id=0-1&t=GbQwplyGqoN32LRU-1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-lg text-sm transition"
              >
                View Wireframes
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignWork;
