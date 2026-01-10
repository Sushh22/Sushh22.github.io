import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MyntraIMG from "../assets/MyntraIMG.png";
import FoodOrderingIMG from "../assets/FoodOrdering.png"
import FormIMG from "../assets/FormIMG.png"
const projects = [
  {
    id: 1,
    title: "Multi-step Subscription Form",
    img: FormIMG, 
    desc: "Built a multi-step form using React & React Router, with step-wise nav, state persistence across routes and dynamic plan/add-on selection. Added form validation, reusable layout component & summary view to ensure smooth ux.",
    live: "https://sushh22.github.io/React_FoodOrder/",
    repo: "https://github.com/Sushh22/React_MultiStep_Form",
  },
  {
    id: 2,
    title: "Food Ordering Web Application",
    img: FoodOrderingIMG,
    desc: "Created a responsive app using React, with meal listing, category-based filtering, and cart management with Context API. Implemented checkout flow with custom hooks, and backend integration for order submission.",
    live: "https://sushh22.github.io/React_MultiStep_Form/",
    repo: "https://github.com/Sushh22/React_FoodOrder",
  },
  {
    id: 3,
     title: "Myntra Clone",
    img: MyntraIMG, 
    desc: "Developed a Myntra e-commerce app using React, Vanilla Js, and Tailwind CSS, with end-to-end shopping flow and payment integration with Razorpay API.",
    live: "https://sushh22.github.io/MyntraClone/",
    repo: "https://github.com/Sushh22/MyntraClone",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const nextProject = () =>
    setCurrent((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section
      id="projects"
      className="w-[75vw] mx-auto mt-10 rounded-2xl bg-gray-100 dark:bg-[#2F363B] shadow-lg p-10 transition-colors duration-300"
    >
      <h2 className="text-4xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        My Projects
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={prevProject}
          className="absolute left-0 p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
        >
          ‹
        </button>

        {/* Carousel Content */}
        <div className="w-full max-w-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={projects[current].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center text-center"
            >
              <img
                src={projects[current].img}
                alt={projects[current].title}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
              <h3 className="text-2xl font-semibold mt-4 text-gray-900 dark:text-gray-100">
                {projects[current].title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                {projects[current].desc}
              </p>
              <div className="flex gap-4 mt-4">
                <a
                  href={projects[current].live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-linear-to-r from-pink-500 to-purple-500 text-white rounded-md hover:opacity-90 transition"
                >
                  View Live
                </a>
                <a
                  href={projects[current].repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-pink-500 text-pink-500 rounded-md hover:bg-pink-500 hover:text-white transition"
                >
                  View Repo
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Button */}
        <button
          onClick={nextProject}
          className="absolute right-0 p-3 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition"
        >
          ›
        </button>
      </div>
    </section>
  );
}
