

import sushmitha from "../assets/Sushmitha.jpeg";

export default function Home() {
  return (
    <section
      id="home"
      className="w-[75vw] h-[80vh] mx-auto mt-10 rounded-2xl 
                 bg-gray-100 dark:bg-[#2F363B] 
                 shadow-lg p-10 flex items-center gap-6 
                 transition-colors duration-300"
    >
      {/* Left side text */}
      <div className="flex-1 text-gray-800 dark:text-white space-y-4 transition-colors duration-300">
        <h1 className="text-5xl font-bold relative inline-block">
          <span className="relative z-10">
            <span className="text-4xl">&lt;/&gt;</span> Hello world!{" "}
            <span className="text-4xl">&lt;/&gt;</span>
          </span>

          {/* Underline behind the text */}
          <span className="absolute left-0 right-0 bottom-0 h-3 bg-pink-400 z-0"></span>
        </h1>

        <h4 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Step into my creative space
        </h4>

        <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl text-xl transition-colors duration-300">
          "At the intersection of art and code, crafting digital experiences
          that blend design, technology, and <br />
          user-centric functionality."
        </p>
      </div>

      {/* Right side image with floating pink blob */}
      <div className="flex-1 flex justify-center relative">
        {/* Pink floating blob */}
        <div className="absolute w-[470px] h-[320px] bg-pink-500 rounded blur-3xl opacity-80 animate-blob"></div>

        <div className="relative inline-block">
          {/* White outline around img */}
          <div className="absolute inset-0 border-4  dark:border-white border-gray-600 rounded-[10px_0_10px_0] -translate-x-3.5 -translate-y-3.5"></div>
          <img
            src={sushmitha}
            alt="Sushmitha"
            className="w-150 h-90 object-cover rounded-tl-2xl rounded-br-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}
