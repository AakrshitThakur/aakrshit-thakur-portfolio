import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React.js", "JavaScript", "TypeScript", "Next.js"];

  const backendSkills = ["Node.js", "Express.js", "Python", "MongoDB", "MySQL"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all mb-2 sm:mb-3 md:mb-4">
            <p className="text-gray-300 mb-6">
              Passionate developer with ability to build and maintain full-lifecycle web applications
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all mb-2 sm:mb-3 md:mb-4">
            <h3 className="text-xl font-bold mb-4">Certificates</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  Full-Stack Web Development - Colt Steele (Udemy) | 74 hours
                </h4>
                <p>
                  Covered JavaScript, React.js, Node.js, Express.js, MongoDB; built mini-projects like YelpCamp.
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all mb-2 sm:mb-3 md:mb-4">
            <h3 className="text-xl font-bold mb-4">Graduation </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>
                <strong> Bachelor of Computer Applications </strong> - Goswami
                Ganesh Dutta Sanatan Dharma College, Sector-32C, Chandigarh
                (2022-2025) | 81.9%
              </li>
              <li>
                Studied various programming languages such as C, C++, Java,
                JavaScript, PHP, among others.
              </li>
              <li>
                Acquired foundational knowledge in Data Structures and
                Algorithms, Computer Networks, Operating Systems, and Web
                Development.
              </li>
              <li>
                Gained knowledge of relational databases including MySQL and
                PL/SQL.
              </li>
            </ul>
          </div>
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition-all">
            <h3 className="text-xl font-bold mb-4">Senior Secondary </h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <h4 className="font-semibold">
                  D.A.V. Centenary Public School, Una (H.P) | 84.8%
                </h4>
                <p>
                  Completed 12th grade in the Non-Medical stream (PCM).
                </p>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
