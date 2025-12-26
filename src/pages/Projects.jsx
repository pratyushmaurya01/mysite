import { Link } from "react-router-dom";

export default function Projects() {
  return (
    <div className="min-h-full px-8 py-6 font-mono text-gray-300">

      {/* comment */}
      <p className="text-green-400">// projects_overview</p>

      {/* intro text */}
      <p className="mt-4 max-w-4xl leading-relaxed">
        Below are some projects I have built while learning{" "}
        <span className="text-blue-400">backend development</span>,{" "}
        <span className="text-blue-400">system design</span>, and{" "}
        <span className="text-blue-400">problem-solving</span>.  
        Each project focuses on real-world use cases and clean architecture.
      </p>

      <p className="mt-1 text-gray-500">
        Click on any project to explore details, tech stack, and implementation.
      </p>

      {/* PROJECT BOXES */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* QUIESY */}
        <Link to="/projects/quiesy">
          <div className="group bg-[#252526] border border-[#2a2d2e] p-6 rounded
                          hover:border-blue-600 transition duration-300 min-h-402q8">
            <p className="text-green-400">// quiesy.py</p>
            <h2 className="mt-2 text-xl font-bold text-white group-hover:text-blue-600">
              Quiesy
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Online quiz platform with role-based access and secure workflows.
            </p>
          </div>
        </Link>

        {/* PIXORA */}
        <Link to="/projects/pixora">
          <div className="group bg-[#252526] border border-[#2a2d2e] p-6 rounded
                          hover:border-blue-600 transition duration-300 min-h-40">
            <p className="text-green-400">// pixora.ipynb</p>
            <h2 className="mt-2 text-xl font-bold text-white group-hover:text-blue-600">
              Pixora
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Image-based recommendation system using ML pipelines.
            </p>
          </div>
        </Link>

        {/* SHARESPACE */}
        <Link to="/projects/sharespace">
          <div className="group bg-[#252526] border border-[#2a2d2e] p-6 rounded
                          hover:border-blue-600 transition duration-300 min-h-40">
            <p className="text-green-400">// sharespace.py</p>
            <h2 className="mt-2 text-xl font-bold text-white group-hover:text-blue-600">
              ShareSpace
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              User-generated content sharing platform with authentication.
            </p>
          </div>
        </Link>

        {/* COMING SOON */}
        <div className="bg-[#1e1e1e] border border-dashed border-[#2a2d2e] p-6 rounded
                        text-gray-500 flex items-center justify-center min-h-40">
          <div>
            <p className="text-green-400">// coming_soon</p>
            <p className="mt-2 text-sm">
              More projects in progress...
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
