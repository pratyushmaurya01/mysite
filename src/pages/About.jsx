import profileImg from "../assets/my_pic.jpeg";
export default function About() {
  return (
    <div className="min-h-full px-8 py-4 text-gray-300 font-mono">

      {/* file comment */}
      <p className="text-green-400">// about.py</p>

      {/* layout */}
      <div className="mt-6 flex flex-col lg:flex-row gap-10">

        {/* LEFT : TEXT */}
        <div className="flex-1 space-y-4">

          <h1 className="text-3xl font-bold text-white">
            Hi, I’m <span className="text-blue-400">Pratyush Maurya</span>
          </h1>

          <p className="text-sm text-gray-400">
            B.Tech CSE (AI) · Backend · ML · Problem Solver
          </p>
          <p>
            I am a B.Tech <span className="text-green-500">"Computer Science (AI)" </span> student with a strong interest in backend <span className="text-gray-300 font-semibold">development, data structures, and machine learning.</span> I enjoy building real-world systems using <span className="text-blue-400">'Python'</span> and <span className="text-blue-400">'Django'</span>, and I regularly practice <span className="text-blue-400">'DSA in java'</span>, to improve my problem-solving skills. 
          </p>
          <p>
            I enjoy building{" "}
            <span className="text-gray-300 font-semibold">real-world backend systems</span>,
            designing clean{" "}
            <span className="text-gray-300 font-semibold">APIs</span>, and experimenting with{" "}
            <span className="text-gray-300 font-semibold">machine learning pipelines</span>.
            I focus on writing clean, structured code and understanding how things work under the hood rather than just making things look fancy. My goal is to turn ideas into practical, working products while continuously improving my logic, system design, and engineering mindset.
          </p>

          <p>
            My main stack revolves around{" "}
            <span className="text-blue-400">Python</span>,{" "}
            <span className="text-blue-400">Django</span>,{" "}
            <span className="text-blue-400">DRF</span>, and{" "}
            <span className="text-yellow-400">Java (DSA)</span>.  
            I also work with{" "}
            <span className="text-purple-400">ML models</span> and{" "}
            <span className="text-purple-400">data pipelines</span>.
          </p>

          {/* fake code block */}
          <pre className="bg-[#252526] border border-[#2a2d2e] p-4 rounded text-sm overflow-x-auto">
{`class Developer:
    def __init__(self):
        self.skills = ["Django", "DRF", "ML", "DSA"]
        self.mindset = "problem_first"
        self.goal = "build useful products"`}  
          </pre>
        </div>

        {/* RIGHT : IMAGE */}
        <div className="w-full lg:w-64 flex justify-center">
          <img
            src={profileImg}   // aap yahan apni photo daal dena
            alt="profile"
            className="w-52 h-52 object-cover rounded-lg
                       border-2 border-[#002aff9f]
                       hover:scale-105 transition-transform duration-300 cursor-grab"
          />
        </div>

      </div>
    </div>
  );
}
