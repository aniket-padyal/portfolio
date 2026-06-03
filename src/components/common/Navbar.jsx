import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Contact"];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav className="relative flex items-center justify-between w-full px-12 py-5 ">
      <h1 className="text-3xl">random</h1>

      {/* Menu Toggle Button */}
      <button
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="z-20 cursor-pointer  "
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Floating Menu Card */}
      {isMenuOpen && (
        <div className="absolute top-5 right-9 min-w-35 rounded-xl border p-4 shadow-lg">
          {/* Navigation Links */}
          <ul className="mt-7 flex flex-col items-end gap-4">
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
