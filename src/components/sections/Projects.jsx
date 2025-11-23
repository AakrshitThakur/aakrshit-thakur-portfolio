import RevealOnScroll from "../RevealOnScroll";

const PROJECTS = [
  {
    id: "1",
    title: "Sketch Grid",
    description: `Sketch Grid is a collaborative whiteboard for creating visual elements that help teams work more efficiently.`,
    keywords: ["Turborepo", "Next.js", "TypeScript", "PostgreSQL", "Tailwind.css"],
    href: null,
  },
  {
    id: "2",
    title: "AI Resume Analyzer",
    description: `Programmed an AI-driven platform for parsing and analyzing resumes, leveraging NLP techniques to extract key qualifications, experience, and skill metrics.`,
    keywords: ["Next.js", "TypeScript", "Gemini 2.5 Pro", "Tailwind.css"],
    href: "https://ai-resume-analyzer-gold.vercel.app/",
  },
  {
    id: "3",
    title: "Hangers Readymade Collection",
    description: `An e-commerce clothing platform designed to showcase and sell apparel online.`,
    keywords: ["MERN", "TypeScript", "Tailwind.css"],
    href: "https://hangers-readymade-collection.vercel.app/",
  },
  {
    id: "4",
    title: "Snap Link",
    description: `A MERN stack–based web application for organizing and storing your valuable links / URLs, with the added capability of sharing them publicly in a single click.`,
    keywords: ["MERN", "Redux Toolkit", "Tailwind.css"],
    href: "https://snap-link-frontend.vercel.app/",
  },
];
// md:grid-cols-[350px_350px] lg:grid-cols-[450px_450px]
export default function Projects() {
  return (
    <section id="projects" className="min-h-[75vh] w-full flex items-center justify-center p-3 sm:p-4 md:p-5">
      <RevealOnScroll className="shrink-0 w-full max-w-3xl sm:max-w-4xl md:max-w-5xl">
        <div className="w-full mx-auto space-y-3 sm:space-y-4 md:space-y-5">
          <h2 className="text-[#605dff] text-3xl sm:text-4xl font-bold text-center">PROJECTS</h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,500px))] justify-center gap-5">
            {PROJECTS.map((project) => (
              <article
                key={project.id}
                className="color-base-300 color-base-content whitespace-normal rounded-xl transition hover:-translate-y-0.5 space-y-3 sm:space-y-4 md:space-y-5 p-5"
              >
                {/* heading */}
                <h3 className="text-xl underline underline-offset-3 decoration-1 font-bold">{project.title}</h3>
                {/* description */}
                <p className="text-sm">{project.description}</p>
                {/* project related keywords */}
                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, idx) => (
                    <span
                      key={idx}
                      className="color-info color-info-content rounded-full text-xs hover:-translate-y-0.5 py-1 px-2"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
                {/* navigate to web-app */}
                <div className="flex justify-left items-center">
                  <a
                    href={project.href}
                    target="_blank"
                    className="color-warning-hover color-warning-content-hover text-sm px-2 py-1 cursor-pointer rounded-md"
                  >
                    View Project →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}
