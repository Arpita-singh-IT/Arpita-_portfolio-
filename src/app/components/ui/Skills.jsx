export function Skills() {
  const skills = {
    languages: ['JavaScript', 'C', 'Python', 'Java', 'C++', 'SQL',],
    frontend: ['React', 'Next.js', 'Tailwind CSS', 'Redux', 'HTML/CSS'],
    backend: ['Node.js', 'MongoDB', ],
    tools: ['Git', 'GitHub', 'Emscripten', 'Linux', 'VS Code', 'Hugging Face','Tailwind CSS'],
    learning: ['Data Structures & Algorithms, Advanced C++, System Design, AI Development, and Full-Stack Web Development.']
  };

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl w-full">
        <h2 className="text-3xl md:text-4xl font-mono text-emerald-400 mb-12">
          {'// skills.stack'}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-6 hover:border-emerald-400/30 transition-all duration-300">
              <h3 className="text-emerald-400 font-mono text-lg mb-4 flex items-center gap-2">
                <span className="text-gray-600">{'>'}</span>
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#0f0f0f] border border-gray-800 text-gray-400 font-mono text-xs hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}