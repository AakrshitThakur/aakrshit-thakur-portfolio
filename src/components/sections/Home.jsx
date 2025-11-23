import RevealOnScroll from "../RevealOnScroll";

export default function Home() {
  return (
    <section id="home" className="h-[55vh] w-full flex justify-center items-center p-3 sm:p-4 md:p-5">
      <RevealOnScroll className="w-full max-w-sm sm:max-w-lg md:max-w-3xl">
        <div className="flex flex-col justify-center items-center gap-3 p-5 sm:p-6 md:p-7 rounded-xl">
          {/* heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-center bg-gradient-to-r from-[#605dff] to-stone-300 bg-clip-text text-transparent leading-none">
            Hi, I&apos;m Aakrshit Thakur
          </h1>
          {/* description */}
          <p className="text-center text-base max-w-md">
            A Full-stack developer proficient in MERN stack, Next.js, TypeScript, etc. Demonstrated ability to build and
            maintain full-lifecycle web applications, backed by strong academic achievements.
          </p>
          {/* go to links */}
          <div className="flex gap-3">
            <a
              href="#projects"
              className="color-success color-success-content py-3 px-5 rounded font-medium overflow-hidden transition hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="color-primary-hover color-primary-content-hover py-3 px-5 rounded font-medium transition-all duration-200"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
