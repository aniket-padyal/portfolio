import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="relative flex items-center justify-between w-full px-10 py-7.5 ">
      <h1 className="text-3xl">aniket.dev</h1>

      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="z-20 cursor-pointer  "
      >
        {isMenuOpen ? <X size={25} /> : <Menu size={25} />}
      </button>

      {/* Floating Menu Card */}
      {isMenuOpen && (
        <div className="absolute top-5 right-7 min-w-35 rounded-xl p-4 shadow-[0px_7px_29px_0px_rgba(100,100,111,0.2)] bg-[#ebeae8]  ">
          {/* Navigation Links */}
          <ul className="mt-10 flex flex-col items-end gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="transition-opacity hover:opacity-70"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
