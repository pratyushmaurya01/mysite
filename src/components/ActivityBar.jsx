import { NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { VscFiles } from "react-icons/vsc";
import { FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiLeetcode } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { IoMdDownload  } from "react-icons/io";
export default function ActivityBar({ toggleSidebar }) {
  return (
    <div className="w-12 h-full bg-[#333333] flex flex-col justify-between items-center py-3 shrink-0">
      {/* TOP ICONS */}
      <div className="flex flex-col gap-6 text-gray-400">
        
        {/* Explorer (working) */}
        <button
          onClick={toggleSidebar}
          className="text-gray-400 hover:text-white transition duration-200 ease-out hover:scale-120 cursor-pointer"
          title="Explorer"
        >
         <VscFiles className="text-2xl"/>
        </button>

        {/* Dummy icons */}
        <a href="https://leetcode.com/u/Anshu08/" target="_blank" rel="noopener noreferrer" title="Leetcode"><SiLeetcode className="text-2xl text-gray-300 hover:text-[#ff9500] transition duration-200 ease-out hover:scale-110"/></a>
        <a href="https://github.com/pratyushmaurya01" target="_blank" rel="noopener noreferrer" title="Github"><FaGithub  className="text-2xl text-gray-300 hover:text-white transition duration-200 ease-out hover:scale-110"/></a>
        <a href="https://www.linkedin.com/in/pratyushmaurya45/" target="_blank" rel="noopener noreferrer"title="Linkedin"><FaLinkedin  className="text-2xl text-gray-300 hover:text-blue-500vtransition duration-200 ease-out hover:scale-110"/></a>
        <a 
         href="/pratyush_maurya_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            title="Download Resume"><IoMdDownload  className="text-2xl text-gray-300 hover:text-green-400 transition duration-200 ease-out hover:scale-130"/></a>
      </div>

      {/* BOTTOM ICON */}
      <div className="flex flex-col text-gray-400 cursor-pointer transition ease-in hover:scale-120">
        <NavLink to="/contact" title="Contact">
          <MdOutlineEmail className="text-2xl text-gray-200" />
        </NavLink>
      </div>

    </div>
  );
}
