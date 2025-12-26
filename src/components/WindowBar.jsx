const WindowBar = () => {
  return (
    <div className="fixed h-8 w-full bg-[#2c2c2c] flex items-center px-4 text-xs text-gray-300 border-b border-black select-none">

      {/* VS Code icon */}

      {/* Menu items */}
      <div className="flex  text-white mr-6">
        <a  href="https://www.linkedin.com/feed/"
        target="_blank"
        rel="noopener noreferrer"
        className=" cursor-pointer transition duration-200 ease-out hover:scale-105"
        ><span className="text-[13px] px-4 p-1 hover:bg-[#494949] hover:border-t border-[#bb71dd] ">Linkedin</span></a>
        <a  href="https://github.com/pratyushmaurya01"
        target="_blank"
        rel="noopener noreferrer"
        className=" cursor-pointer transition duration-200 ease-out hover:scale-105"
        ><span className="text-[13px] p-1 px-4 hover:bg-[#494949] hover:border-t border-[#bb71dd] ">Github</span></a>
        <a  href="https://leetcode.com/u/Anshu08/"
        target="_blank"
        rel="noopener noreferrer"
        className=" cursor-pointer transition duration-200 ease-out hover:scale-105"
        ><span className="text-[13px] p-1 px-4 hover:bg-[#494949] hover:border-t border-[#bb71dd] ">Leetcode</span></a>
        <a  href="/pratyush_maurya_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            
        className=" cursor-pointer transition duration-200 ease-out hover:scale-105"
        ><span className="text-[13px] p-1 px-4 hover:bg-[#494949] hover:border-t border-[#bb71dd] ">Resume</span></a>
        
      </div>

      {/* Center title */}
      <div className="flex-1 text-[15px] text-center text-white">
        Pratyush Maurya - Portfolio
      </div>

      {/* Window buttons */}
      <div className="flex gap-2">
        <span className="w-3 h-3 rounded-full bg-[#f1fa8c]"></span>
        <span className="w-3 h-3 rounded-full bg-[#50fa7b]"></span>
        <span className="w-3 h-3 rounded-full bg-[#ff5555]"></span>
      </div>
    </div>
  );
};

export default WindowBar;
