import { NavLink } from "react-router-dom";
const Item = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `block pl-8 text-violet-300 pr-2 py-[2px] text-sm font-mono
       ${isActive ? "bg-[#37373d] text-white" : "hover:bg-[#2a2d2e]"}`
    }
  >
    {children}
  </NavLink>
);

export default function Sidebar() {
  return (
    <aside className={" h-full w-64 bg-[#252526] border-r border-[#1f1f1f] text-gray-300"}>
      

      {/* Project name */}
      <div className="px-4 pb-5 pt-2  text-large font-bold">
        PORTFOLIO
      </div>

      {/* File tree */}
      <div className="mt-2 space-y-4">

        {/* ABOUT */}
        <div>
          <div className="px-3 py-[2px] text-sm text-gray-300 ">
            ▾ About
          </div>
          <Item to="/about">intro.md</Item>
        </div>

        {/* SKILLS */}
        <div>
          <div className="px-3 py-[2px] text-sm font-mono text-gray-300">
            ▾ Skills
          </div>
          <Item to="/skills/DEV">Devlopments.py</Item>
          <Item to="/skills/DSA">DSA.java</Item>
        </div>

        {/* PROJECTS */}
        <div>
          <div className="px-3 py-[2px] text-sm font-mono text-gray-300">
            ▾ Projects
          </div>
          <Item to="/projects/quiesy/">quiesy.py</Item>
          <Item to="/projects/sharespace/">shareSpace.py</Item>
          <Item to="/projects/pixora/">pixora.ipynb</Item>
        </div>
        {/* CONTACT */}
        <div>
          <div className="px-3 py-[2px] text-sm font-mono text-gray-300">
            ▾ Contact
          </div>
          <Item to="/contact">Contact.py</Item>
        </div>

      </div>
    </aside>
  );
}
