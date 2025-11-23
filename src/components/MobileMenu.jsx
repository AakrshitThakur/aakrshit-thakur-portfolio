import { VscClose } from "react-icons/vsc";
import PropTypes from "prop-types";
import { ANCHOR_TAGS } from "../constants/navbar";

export default function MobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <nav
      className={`fixed inset-0 z-40 w-full bg-[rgba(10,10,10,0.85)] color-neutral-content flex flex-col items-center justify-center transition-all duration-300 ease-in-out
        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}`}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-5 right-5 w-7 h-7 focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <VscClose className="w-full h-full" />
      </button>
      <div className="flex flex-col justify-center items-center gap-5">
        {ANCHOR_TAGS.map((anchor, idx) => (
          <a
            key={idx}
            href={anchor.href}
            className={anchor.className}
            onClick={() => setMenuOpen(false)}
            target={anchor.target}
          >
            {anchor.children}
          </a>
        ))}
      </div>
    </nav>
  );
}

// defining prop-types
MobileMenu.propTypes = {
  menuOpen: PropTypes.bool.isRequired,
  setMenuOpen: PropTypes.func.isRequired,
};
