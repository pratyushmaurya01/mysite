import { Link } from "react-router-dom";

export default function Skills() {
  return (
    <div className="min-h-full px-8 py-6 font-mono text-gray-300">

      {/* comment */}
      <p className="text-green-400">// skills_overview</p>

      {/* intro text */}
      <p className="mt-4 max-w-4xl leading-relaxed">
        I focus on building strong technical foundations while also valuing{" "}
        <span className="text-blue-400">clear communication</span>,{" "}
        <span className="text-blue-400">consistency</span>, and{" "}
        <span className="text-blue-400">discipline</span>.  
        Outside coding, I enjoy simple creative activities like{" "}
        <span className="text-yellow-400">music</span>,{" "}
        <span className="text-yellow-400">art</span>, and{" "}
        <span className="text-yellow-400">guitar</span>, which help me stay focused and balanced.
      </p>
      <p className="text-gray-500">Below, you can explore my core technical skills and the areas I actively work on...</p>

      {/* skill boxes */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* DEV SKILLS */}
        <Link to="/skills/dev">
          <div className="group bg-[#252526] border border-[#2a2d2e] p-6 rounded
                          hover:border-blue-400 transition-all duration-300">
            <p className="text-green-400">// development_skills</p>
            <h2 className="mt-2 text-xl font-bold text-white group-hover:text-blue-400">
              Development Skills
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Backend development, APIs, databases, and real-world projects.
            </p>
          </div>
        </Link>

        {/* DSA SKILLS */}
        <Link to="/skills/dsa">
          <div className="group bg-[#252526] border border-[#2a2d2e] p-6 rounded
                          hover:border-blue-400 transition-all duration-300">
            <p className="text-green-400">// dsa_skills</p>
            <h2 className="mt-2 text-xl font-bold text-white group-hover:text-blue-400">
              DSA & Problem Solving
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Data structures, algorithms, and logical problem-solving in Java.
            </p>
          </div>
        </Link>

      </div>
    </div>
  );
}
