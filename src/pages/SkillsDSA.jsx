import { useEffect, useState } from "react";

const API_URL = "https://leetcode-stats-api.herokuapp.com/Anshu08";

export default function SkillsDSA() {
  const [stats, setStats] = useState(null);
  const [animate, setAnimate] = useState(0);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        setStats(data);
        setAnimate(1);
      })
      .catch(() => {
        // fallback if API fails
        setStats({
          totalSolved: 457,
          totalQuestions: 3787,
          easySolved: 232,
          totalEasy: 918,
          mediumSolved: 185,
          totalMedium: 1974,
          hardSolved: 40,
          totalHard: 895,
          acceptanceRate: 73.05,
          ranking: 205494,
        });
        setAnimate(1);
      });
  }, []);

  if (!stats) {
    return (
      <div className="px-8 py-6 font-mono text-gray-400">
        // fetching_dsa_stats...
      </div>
    );
  }

  return (
    <div className="min-h-full px-8 py-6 font-mono text-gray-300">

      <p className="text-green-400">// dsa_skills_java</p>

      <p className="mt-4 max-w-3xl text-gray-400">
        This section reflects my practical problem-solving experience using{" "}
        <span className="text-blue-400">Java</span>, based on consistency,
        time investment, and real submissions. <br />
        I <span className="text-violet-400">"enjoy solving problems"</span> enjoy solving problems on <span className="text-blue-400">LeetCode</span> and love the process of breaking problems down, finding patterns, and improving my logic with each submission.
      </p>

      {/* TERMINAL STATS */}
      <div className="mt-8 bg-[#252526] border border-[#2a2d2e] rounded p-4 max-w-xl">
        <p className="text-green-400">// leetcode_stats</p>
        <pre className="mt-2 text-sm leading-relaxed">
{`totalSolved      : ${animate ? stats.totalSolved : 0}
totalQuestions   : ${stats.totalQuestions}
acceptanceRate   : ${stats.acceptanceRate}%
globalRanking    : ${stats.ranking}`}
        </pre>
      </div>

      {/* VISUAL DISTRIBUTION */}
      <div className="mt-10 max-w-xl">
        <p className="text-green-400">// difficulty_distribution</p>

        {[
          {
            label: "Easy",
            solved: stats.easySolved,
            total: stats.totalEasy,
            color: "bg-green-500",
          },
          {
            label: "Medium",
            solved: stats.mediumSolved,
            total: stats.totalMedium,
            color: "bg-yellow-500",
          },
          {
            label: "Hard",
            solved: stats.hardSolved,
            total: stats.totalHard,
            color: "bg-red-500",
          },
        ].map((item) => {
          const percent = Math.round(
            (item.solved / item.total) * 100
          );

          return (
            <div key={item.label} className="mt-4">
              <p className="text-sm text-gray-400">
                {item.label} [{item.solved}/{item.total}]
              </p>
              <div className="w-full  bg-[#1e1e1e] border border-[#2a2d2e] rounded h-2">
                <div
                  className={`${item.color} h-2 rounded transition-all duration-700`}
                  style={{ width: animate ? `${percent}%` : "0%" }}
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* THINKING STYLE */}
      <div className="mt-10 max-w-3xl">
        <p className="text-green-400">// problem_solving_loop</p>
        <pre className="mt-2 bg-[#252526] border border-[#2a2d2e] p-4 rounded text-sm">
{`while(notSolved) {
    analyze_constraints();
    identify_pattern();
    optimize_solution();
}`}
        </pre>
      </div>

    </div>
  );
}
