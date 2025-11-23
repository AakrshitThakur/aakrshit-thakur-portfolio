import { useState } from "react";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import "./index.css";
import "./App.css";

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  if (!isLoaded) return <LoadingScreen onComplete={() => setIsLoaded(true)} />;

  return (
    <div className={`min-h-screen space-y-10 transition-opacity duration-1750 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <Projects />
      <Contact />
    </div>
  );
}
