import { useState } from "react";

type NavbarProps = {
  color: string;
};

export const FloatingNavbar = ({ color }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = ["Home", "Products", "About", "Contact", "Cart"];

  return (
    <div
      className="h-[10vh] flex justify-between items-center p-[2rem] fixed top-0 left-2 right-2 z-[99999] rounded-lg mt-[5vh] mx-[2%]"
      style={{
        background: color,
      }}
    >
      <div className="flex items-center">
        <span className="text-white text-2xl font-bold ml-2">Logo</span>
      </div>

      <div className="hidden md:flex space-x-6 items-center">
        {links.map((label, index) => (
          <span key={index} className="text-white cursor-pointer">
            {label}
          </span>
        ))}
      </div>

      <div className="md:hidden flex items-center z-[100001]">
        <button
          className="text-white text-2xl font-bold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? "Close" : "Menu"}
        </button>
      </div>

      {isMenuOpen && (
        <div
          style={{ background: color }}
          className="absolute top-0 left-0 w-full h-screen flex flex-col items-start pl-10 justify-center z-[100000]"
        >
          {links.map((label, index) => (
            <span
              key={index}
              className="text-white text-2xl mb-4 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};
