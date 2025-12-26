const images = [
  "/projects/quiesy/quiesy_pic_1.jpeg",
  "/projects/quiesy/quiesy_pic_2.jpeg",
  "/projects/quiesy/quiesy_pic_3.jpeg",
];
export default function ProjectQuiesy() {
  return (
    <div className="min-h-full px-8 py-6 font-mono text-gray-300">

      <p className="text-green-400">// project_quiesy</p>

      <h1 className="mt-2 text-2xl font-bold text-white">
        Quiesy — Online Quiz Platform
      </h1>

      <p className="mt-3 max-w-6xl text-gray-400">
         Developed a authenticated quiz platform where teachers can <span className="text-violet-500">"create"</span>, <span className="text-violet-500">"manage"</span>, and <span className="text-violet-500">'password-protect quizzes'</span> , and  student quiz access via unique <span className="text-white">copyable links</span> = <a href="https://github.com/pratyushmaurya01/quiesy_project" className="text-green-500">"https://github.com/pratyushmaurya01/quiesy_project"</a> allowing submission with basic details (name, roll
no, email)
      </p>

      {/* LINKS */}
      <div className="mt-4 flex gap-2">
        <a
          href="https://github.com/pratyushmaurya01/quiesy_project"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#252526] border border-[#2a2d2e] rounded
                      transition"
        >
           {`<a href=`}<span className="text-yellow-400 hover:text-blue-400">"github/quiesy_project"</span> {`</a>`}
        </a>
        <a
          href="https://github.com/pratyushmaurya01/quiesy_project"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-[#252526] border border-[#2a2d2e] rounded
                      transition"
        >
           {`<a href=`}<span className="text-yellow-400 hover:text-blue-400">"github/quiesy_project"</span> {`</a>`}
        </a>
      </div>
     
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 ">
        {images.map((src ,i) => (
          <div
            key={i}
            className="h-45 w-80 bg-[#252526] border border-[#2a2d2e] rounded overflow-hidden
                 hover:scale-105 transition-transform"
          >
              <img
              src={src}
              alt={`Screenshot ${i + 1}`}
              className="w-full h-full object-cover cursor-grab"
            />
          </div>
        ))}
      </div>

      {/* OVERVIEW */}
      <div className="mt-8">
        <p className="text-green-400">// overview</p>
        <ul className="mt-2 list-disc list-inside text-gray-400 space-y-1">
          <li>teachersBuilt controlled result visibility with real-time evaluation,</li>
          <li>Designed manual question creation with correct option mapping and flexible marks allocation</li>
          <li>Implemented session-based quiz attempts to track progress and prevent multiple or unauthorized submissions</li>
          <li>Result generation and ranking can also be seen by teachers and Students(if allowed)</li>
          <li>Scalable backend-first architecture</li>
        </ul>
      </div>

      {/* TECH STACK */}
      <div className="mt-6">
        <p className="text-green-400">// tech_stack</p>
        <pre className="mt-2 bg-[#252526] border border-[#2a2d2e] p-4 rounded text-sm">
{`[
  "Python",
  "Django",
  "HTML",
  "CSS",
  "JavaScript",
  "PostgreSQL"
]`}
        </pre>
      </div>

    </div>
  );
}
