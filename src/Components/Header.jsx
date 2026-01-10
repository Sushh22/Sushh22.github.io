import { Sun, Moon } from "lucide-react";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("");
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const navRef = useRef(null);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (item, e) => {
    setActive(item.name);

    const rect = e.currentTarget.getBoundingClientRect();
    const containerRect = navRef.current.getBoundingClientRect();

    setIndicator({
      left: rect.left - containerRect.left,
      width: rect.width,
    });

    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header className="w-[75vw] mx-auto mt-6 rounded-2xl shadow-lg sticky top-1 z-50  bg-gray-100 dark:bg-[#2F363B] ">
      <nav className="flex items-center justify-between px-8 py-4">
        <h3 className="text-2xl font-bold bg-linear-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
          Sushmitha K N
        </h3>

        {/* Middle Nav */}
        <div className="relative" ref={navRef}>
          {/* Sliding pill */}
          <span
            className="absolute top-0 bottom-0 bg-linear-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-300"
            style={{ left: indicator.left, width: indicator.width }}
          />
          <ul className="flex space-x-4 font-medium  relative z-10 text-gray-600 dark:text-white">
            {navItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={(e) => handleClick(item, e)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    active === item.name ? "text-white" : "hover:text-pink-300"
                  }`}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Theme Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-white/20 hover:bg-white/30 dark:bg-black/20 dark:hover:bg-black/30 transition"
        >
          {darkMode ? (
            <Moon className="w-5 h-5 text-white" />
          ) : (
            <Sun className="w-5 h-5 text-yellow-400" />
          )}
        </button>
      </nav>
    </header>
  );
}
