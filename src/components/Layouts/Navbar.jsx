import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
const menu = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#contact",
    label: "Contact Me",
    special: true,
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="flex justify-between items-center p-2 bg-darkNav text-slate-100 font-bold absolute top-0 w-full sm:p-5">
      <a href="#" className="px-3 py-2 text-2xl">
        ti<span className="text-textNav">ton.</span>
      </a>

      <div>
        <div className="p-3 sm:hidden">
          {isOpen ? (
            <FaTimes onClick={toggleMenu} />
          ) : (
            <FaBars onClick={toggleMenu} />
          )}
        </div>
        <ul
          className={`sm:flex ${
            isOpen ? "block z-10" : "hidden"
          } sm:static absolute top-14 right-0 w-1/2 sm:w-auto bg-darkNav rounded-md`}
        >
          <li className="flex gap-5 flex-col p-5 sm:flex-row sm:p-2">
            {menu.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`px-3 py-2 rounded hover:outline outline-3 outline-purple-950 ${
                  item.special
                    ? "text-textNav outline outline-2 outline-textNav hover:bg-hoverContact"
                    : "hover:bg-textNavDark"
                }`}
              >
                {item.label}
              </a>
            ))}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
