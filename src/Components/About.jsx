// import about from "../assets/about.png";

// export default function About() {
//   return (
//     <section className="w-[60vw] h-[80vh] mx-auto mt-10 rounded-2xl bg-[#2F363B] shadow-lg p-10 flex items-center gap-10">
//       {/* Left side - Text */}
//       <div className="flex-1 text-white space-y-6">
//         <h2 className="text-4xl font-bold relative inline-block text-gray-200">
//           <span className="relative z-10">About Me</span>
//           <span className="absolute left-0 right-0 bottom-0 h-3 bg-pink-400 z-0"></span>
//         </h2>
//         <p className="text-gray-300 leading-relaxed text-lg">
//           Beyond code, my story unfolds with diverse roots. With a background in
//           automation, I cultivated strong communication and problem-solving
//           skills. These skills seamlessly transitioned into web development,
//           fueled by curiosity and passion. As a self-taught programmer, I have a
//           passion for learning and exploring new technologies, with a strong
//           background in FrontEnd Development.
//         </p>
//         <p className="text-gray-300 leading-relaxed text-lg">
//           When not coding, you'll find me savoring coffee or exploring the ragas
//           of Carnatic music. With an interest for coding, I continuously seek
//           ways to grow, learn, and push beyond my limits as a developer.
//         </p>
//       </div>

//       {/* Right side - Image */}
//       <div className="flex-1 flex justify-center relative">
//         {/* Decorative border */}
//         <div className="absolute inset-0 border-4 border-white rounded-[40px_0_40px_0] -translate-x-3 -translate-y-3"></div>

//         <img
//           src={about}
//           alt="Sushmitha"
//           className="w-150 h-120 object-cover rounded-[40px_0_40px_0] shadow-lg relative z-10"
//         />
//       </div>
//     </section>
//   );
// }

import about from "../assets/about.png";

export default function About() {
  return (
    <section
      id="about"
      className="w-[60vw] h-[80vh] mx-auto mt-10 rounded-2xl 
                  bg-gray-100 dark:bg-[#2F363B] 
                 shadow-lg p-10 flex items-center gap-10 
                 transition-colors duration-300"
    >
      {/* Left side - Text */}
      <div className="flex-1 text-white dark:text-gray-200 space-y-6">
        <h2 className="text-4xl font-bold relative inline-block text-gray-400 dark:text-gray-100">
          <span className="relative z-10">About Me</span>
          <span className="absolute left-0 right-0 bottom-0 h-3 bg-pink-400 z-0"></span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          Beyond code, my story unfolds with diverse roots. With a background in
          automation, I cultivated strong communication and problem-solving
          skills. These skills seamlessly transitioned into web development,
          fueled by curiosity and passion. As a self-taught programmer, I have a
          passion for learning and exploring new technologies, with a strong
          background in FrontEnd Development.
        </p>
        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
          When not coding, you'll find me savoring coffee or exploring the ragas
          of Carnatic music. With an interest for coding, I continuously seek
          ways to grow, learn, and push beyond my limits as a developer.
        </p>
      </div>

      {/* Right side - Image */}
      <div className="flex-1 flex justify-center relative">
        {/* Decorative border */}
        <div className="absolute inset-0 border-4  dark:border-white border-gray-600 rounded-[40px_0_40px_0] -translate-x-3 -translate-y-3"></div>

        <img
          src={about}
          alt="Sushmitha"
          className="w-150 h-120 object-cover rounded-[40px_0_40px_0] shadow-lg relative z-10"
        />
      </div>
    </section>
  );
}
