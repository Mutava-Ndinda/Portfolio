import React from "react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gradient-to-b from-blue-50 via-white to-pink-50 py-20 px-6 text-center"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">📂 Projects</h2>
        <p className="text-lg text-gray-700 mb-12">
          A look at some of the platforms I&apos;ve built.
        </p>

        <div className="grid gap-10 md:grid-cols-2">
          {/* Lost Locate Card */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all text-left">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">
              Lost Locate
            </h3>
            <p className="text-gray-700 mb-4">
              A compassionate platform helping locate missing persons in Kenya.
              Built with a strong focus on real-time updates, analytics, and
              accessibility.
            </p>

            <ul className="text-sm text-gray-600 mb-4 list-disc list-inside space-y-1">
              <li>Searchable database for missing persons</li>
              <li>Data visualizations of open, matched, and closed cases</li>
              <li>Admin dashboard with custom user roles</li>
            </ul>

            <div className="mb-4">
              <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2">
                #Next.js
              </span>
              <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2">
                #TailwindCSS
              </span>
              <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm mr-2">
                #TypeScript
              </span>
              <span className="inline-block bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm">
                #Chart.js
              </span>
            </div>

            <div className="flex gap-4">
              <a
                href="https://lostlocate.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-indigo-900 transition"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/your-username/lostlocate"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-100 transition"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
