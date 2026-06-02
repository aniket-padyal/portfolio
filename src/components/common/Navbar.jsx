import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 py-3 relative w-full  ">
      <div className="text-3xl ">random</div>

      <div
        // className="border"
        onClick={() => {
          setIsMenuOpen((prev) => !prev);
        }}
      >
        {isMenuOpen ? <X /> : <Menu />}

        {isMenuOpen ? (
          <ul className="flex flex-col gap-1 text-right absolute right-6 mt-3  ">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        ) : null}
      </div>
    </nav>
  );
};

export default Navbar;
