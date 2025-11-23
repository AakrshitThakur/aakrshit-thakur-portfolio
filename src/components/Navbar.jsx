import { useEffect } from "react";
import PropTypes from "prop-types";
import { ANCHOR_TAGS } from "../constants/navbar";

export default function Navbar({ menuOpen, setMenuOpen }) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);
  return (
    <nav className="bg-[rgba(21,25,30,0.65)] color-base-content backdrop-blur-xs w-full sticky top-0 z-40">
      <div className="max-w-5xl mx-auto px-3">
        <div className="flex justify-between items-center h-15">
          <a href="#home" className="font-mono text-xl sm:text-2xl font-bold">
            aakrshit-thakur<span className="text-[#605dff]">-tech</span>
          </a>

          {/* hamburger menu on larger viewports */}
          <div className=" md:hidden w-7 h-5 relative cursor-pointer z-40" onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>
          {/* desktop navigations */}
          <div className="hidden md:flex items-center space-x-5">
            {ANCHOR_TAGS.map((anchor, idx) => (
              <a key={idx} href={anchor.href} className={anchor.className} target={anchor.target}>
                {anchor.children}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

// defining prop-types
Navbar.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
