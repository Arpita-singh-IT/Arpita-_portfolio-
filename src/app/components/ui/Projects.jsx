import { projects } from '../../data/projectsData';
import { ExternalLink, Github } from 'lucide-react';

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-mono text-emerald-400 mb-12">
          {'// projects.showcase'}
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-emerald-400/50 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-mono text-white group-hover:text-emerald-400 transition-colors">
                  {project.name}
                </h3>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-emerald-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-500 hover:text-emerald-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  ): null}
                </div>
              </div>

              <p className="text-gray-400 font-mono text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-[#0f0f0f] border border-gray-800 text-emerald-400 font-mono text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Terminal-style footer */}
              <div className="mt-4 pt-4 border-t border-gray-800">
                {project.github && (<div className="text-gray-600 font-mono text-xs">
                  $ git clone <span className="text-gray-500">{project.github.split('/').pop()}</span>
                </div>)}
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
