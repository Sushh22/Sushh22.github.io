

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { VscVscode } from 'react-icons/vsc';

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-[75vw] mx-auto mt-10 rounded-2xl 
                 bg-gray-100 dark:bg-[#2F363B] 
                 shadow-lg p-10 
                 text-gray-800 dark:text-white 
                 transition-colors duration-300"
    >
      {/* Top Text */}
      <h2 className="text-5xl font-bold text-center mb-10">
        "A Frontend Developer with skills in...
      </h2>

      {/* Skills Grid */}
      <div className="flex items-center justify-center gap-8">
        {/* Left Icons */}
        <div className="flex flex-col items-center space-y-6 text-5xl text-pink-500">
          <FaHtml5 title="HTML5" />
          <FaCss3Alt title="CSS3" />
          <FaJs title="JavaScript" />
          <VscVscode title="VS Code" />
        </div>

        {/* Center Text */}
        <div className="w-[60%] h-[350px]flex-1 text-center rounded-xl p-10 text-xl leading-relaxed backdrop-blur-sm
                        bg-purple-100/70 dark:bg-[#1F3A4B]/40
                        text-gray-700 dark:text-gray-200">
          HTML, CSS, JavaScript, React, Tailwind, and more. This journey began
          with a curiosity about how websites come alive and has since grown
          into a full-fledged passion. I have leveraged these technologies to
          design and develop interactive, responsive websites."
        </div>

        {/* Right Icons */}
        <div className="flex flex-col items-center space-y-6 text-5xl text-purple-500">
          <SiTailwindcss title="Tailwind CSS" />
          <FaReact title="React" />
          <FaGitAlt title="Git" />
          <FaGithub title="GitHub" />
        </div>
      </div>
    </section>
  );
}
