import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";

const navLinks = ["Home", "What I Build", "Get In Touch"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLight, setIsLight] = useState(true);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleTheme = () => setIsLight((prev) => !prev);

  return (
    <nav className=" relative flex items-center justify-between w-full sm:px-10 px-5 py-5  ">
      <h1 className="text-4xl ">aniket.dev</h1>

      {/* Menu Toggle Button */}
      <button
        type="button"
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="relative z-20 h-6 w-6 flex items-center justify-center cursor-pointer  sm:bg-[#ebeae8] p-6 rounded-full "
      >
        <Menu
          size={25}
          className={`absolute transition-all duration-300 ease-in-out 
          ${isMenuOpen ? "rotate-90 opacity-0  " : "rotate-0 opacity-100  "}`}
        />

        <X
          size={25}
          className={`absolute transition-all duration-300 ease-in-out 
          ${isMenuOpen ? "rotate-0 opcity-100 " : "-rotate-90 opacity-0  "}`}
        />
      </button>

      {/* Floating Menu Card */}
      <div
        className={`absolute top-4 right-4 min-w-55 rounded-2xl px-7 py-5 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-[#ebeae8] transition-all duration-300 ease-out
          ${
            isMenuOpen
              ? "translate-y-0 scale-100 opacity-100 "
              : "-translate-y-2 scale-95 opacity-0 pointer-events-none"
          }
          `}
      >
        {/* Navigation Links */}
        <h2 className="mb-4 cursor-default text-xl ">Menu</h2>

        <ul className="flex flex-col gap-3 text-2xl ">
          {navLinks.map((link) => (
            <li
              key={link}
              className={`transition-all duration-300 ${
                isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0"
              }`}
            >
              <a
                href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                className="transition-opacity hover:opacity-70"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* for toggling between modes */}
        <button
          type="button"
          className="w-7 mt-4 cursor-pointer transition-transform duration-300 hover:scale-110 "
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isLight ? <Moon size={26} /> : <Sun size={26} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
