import { useEffect, useState } from "react";

const skills = [
  { name: "Python", level: 40 },
  { name: "Django", level: 42 },
  { name: "Java (DSA)", level: 10 },
  { name: "ML", level: 44 },
  { name: "DL", level: 0 },
  { name: "SQL", level: 32 },
  { name: "JavaScript", level: 22 },
  
];

function TrainBar({ name, level }) {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setFilled(i);
      if (i >= level) clearInterval(interval);
    }, 150);
    return () => clearInterval(interval);
  }, [level]);

  const total = 50;
  const bar =
    "#".repeat(filled) + "_".repeat(total - filled);

  return (
    <pre className="text-sm text-gray-300">
      <span className="text-blue-500">{name.padEnd(18)}</span>
      <span className="text-white">[{bar}]</span>{" "}
      <span className="text-gray-500">{(filled/total) * 100}%</span>
    </pre>
  );
}

export default function SkillsDEV() {
  return (
    <div className="min-h-full px-8 py-6 font-mono text-gray-300">

      <p className="text-green-400">// development_skills</p>

      <p className="mt-4 max-w-3xl text-gray-400">
        These skills represent my current training state — continuously improving
        through projects, problem-solving, and real-world practice.
      </p>

      {/* MODEL TRAINING VIEW */}
      <div className="mt-8 bg-[#252526] border border-[#2a2d2e] p-4 rounded max-w-4xl">
        <p className="text-green-400 mb-2">// practical_working_experience</p>

        {skills.map((skill) => (
          <TrainBar
            key={skill.name}
            name={skill.name}
            level={skill.level}
          />
        ))}
      </div>

      {/* FRAMEWORKS */}
      <div className="mt-10">
        <p className="text-green-400">// frameworks & libraries</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            "Django",
            "Django REST Framework",
            "Scikit-Learn",
            "NumPy",
            "Pandas",
            "Matplotlib",
            "Bootstrap",
          ].map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-[#252526] border border-[#2a2d2e] rounded text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* TOOLS */}
      <div className="mt-10">
        <p className="text-green-400">// tools & technologies</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {[
            "Data Structures & Algorithms",
            "Machine Learning",
            "MySQL",
            "PostgreSQL",
            "Git",
            "GitHub",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#252526] border border-[#2a2d2e] rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
