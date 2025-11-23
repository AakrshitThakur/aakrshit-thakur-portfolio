import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ANCHOR_TAGS = [
  {
    href: "https://www.linkedin.com/in/aakrshit-thakur-14433627b",
    children: <FaLinkedin size={25} className="inline-block cursor-pointer" />, 
    target: "_blank"
  },
  {
    href: "https://www.linkedin.com/in/aakrshit-thakur-14433627b",
    children: <FaXTwitter size={25} className="inline-block cursor-pointer" />, 
    target: "_blank"
  },
  {
    href: "https://github.com/AakrshitThakur",
    children: <FaGithub size={25} className="inline-block cursor-pointer" />, 
    target: "_blank"
  },
  {
    href: null,
    children: <FaFilePdf size={25} className="inline-block cursor-pointer" />, 
    target: "_blank"
  },
  {
    href: "#about",
    className:
      "color-primary-hover color-primary-content-hover px-2 py-1 rounded-sm transition-all duration-200 cursor-pointer",
    children: "About",
  },
  {
    href: "#contact",
    className:
      "color-primary-hover color-primary-content-hover px-2 py-1 rounded-sm transition-all duration-200 cursor-pointer",
    children: "Contact",
  },
  {
    href: "#projects",
    className:
      "color-success-hover color-success-content-hover px-2 py-1 rounded-sm transition-all duration-200 cursor-pointer",
    children: "Projects",
  },
];

export { ANCHOR_TAGS };
