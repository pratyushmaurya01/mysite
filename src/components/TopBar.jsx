import { NavLink } from "react-router-dom";

const Tab = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-4 pb-3 pt-2 text-sm font-mono
      ${isActive
        ? "bg-[#1e1e1e] text-white border-t-4 border-[#bb71dd]"
        : "bg-[#2d2d2d] text-gray-400 hover:text-white"}`
    }
  >
    {label}
  </NavLink>
);

export default function TopBar() {
  return (
    <div className="h-10 shrink-0 bg-[#2d2d2d] flex items-center gap-4">
      <Tab to="/about" label="About.py" />
      <Tab to="/skills" label="Skills.java" />
      <Tab to="/projects" label="Projects.html" />
      <Tab to="/contact" label="Contact.jsx" />
    </div>
  );
}
