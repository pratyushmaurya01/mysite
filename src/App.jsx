import React from "react";
import { useState } from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";

// components

import WindowBar from "./components/WindowBar";
import Sidebar from "./components/Sidebar";
import ActivityBar from  "./components/ActivityBar"

import EditorShell from "./components/EditorShell"
// pages

import About from "./pages/About";
import Skills from "./pages/Skills";
import SkillsDEV from "./pages/SkillsDEV";
import SkillsDSA from "./pages/SkillsDSA";
import Projects from "./pages/Projects";
import ProjectQuiesy from "./pages/ProjectQuiesy";
import ProjectPixora from "./pages/ProjectPixora";
import ProjectShareSpace from "./pages/ProjectShareSpace";
import Contact from "./pages/Contact";


const App = () => {
    const [showSidebar, setShowSidebar] = useState(true);
  return (
    
    <BrowserRouter>
  <div className="h-full flex flex-col bg-[#1e1e1e] text-gray-200">

    {/* WINDOW BAR */}
    <div className="h-8 shrink-0 bg-[#2c2c2c] border-b border-black">
      <WindowBar />
    </div>

    {/* WORKBENCH */}
    <div className="flex flex-1 overflow-hidden">

      {/* ACTIVITY BAR */}
      <div className="w-12 shrink-0">
        <ActivityBar toggleSidebar={() => setShowSidebar(!showSidebar)} />
      </div>

      {/* SIDEBAR */}
      <div
        className={`shrink-0 overflow-hidden transition-[width] duration-300 ease-in-out
        ${showSidebar ? "w-64" : "w-0"}`}
      >
        <Sidebar />
      </div>

      {/* EDITOR */}
      <div className="flex flex-1 overflow-hidden">
        <EditorShell>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/skills/dev" element={<SkillsDEV />} />
            <Route path="/skills/dsa" element={<SkillsDSA />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/quiesy" element={<ProjectQuiesy />} />
            <Route path="/projects/pixora" element={<ProjectPixora />} />
            <Route path="/projects/sharespace" element={<ProjectShareSpace />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </EditorShell>
      </div>

    </div>
  </div>
</BrowserRouter>

  );
};

export default App;
