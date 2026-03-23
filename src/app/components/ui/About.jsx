export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-mono text-emerald-400 mb-12">
          {'// about.me'}
        </h2>

        <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg p-8 font-mono text-sm md:text-base">
          <div className="space-y-2">
            <div className="text-gray-500">{'// developer.json'}</div>
            
            <div className="text-purple-400">const <span className="text-blue-400">arpita</span> = {'{'}</div>
            
            <div className="pl-4 space-y-1">
              <div>
                <span className="text-cyan-400">role</span>
                <span className="text-gray-500">: </span>
                <span className="text-orange-400">"IT Student"</span>
                <span className="text-gray-500">,</span>
              </div>
              
              <div>
                <span className="text-cyan-400">focus</span>
                <span className="text-gray-500">: [</span>
                <span className="text-orange-400">"Full Stack"</span>
                <span className="text-gray-500">, </span>
                <span className="text-orange-400">"AI/ML"</span>
                <span className="text-gray-500">, </span>
                <span className="text-orange-400">"DSA"</span>
                <span className="text-gray-500">],</span>
              </div>
              
              <div>
                <span className="text-cyan-400">goal</span>
                <span className="text-gray-500">: </span>
                <span className="text-orange-400">"Driven to build intelligent and scalable software that solves real-world problems."</span>
                <span className="text-gray-500">,</span>
              </div>
              
              <div>
                <span className="text-cyan-400">passion</span>
                <span className="text-gray-500">: </span>
                <span className="text-orange-400">"Building scalable systems"</span>
                <span className="text-gray-500">,</span>
              </div>
              
              <div>
                <span className="text-cyan-400">currentlyLearning</span>
                <span className="text-gray-500">: [</span>
                <span className="text-orange-400">"DSA"</span>
                <span className="text-gray-500">, </span>
                <span className="text-orange-400">"Full Stack"</span>
                <span className="text-gray-500">],</span>
              </div>
              
              <div>
                <span className="text-cyan-400">location</span>
                <span className="text-gray-500">: </span>
                <span className="text-orange-400">"India"</span>
              </div>
            </div>
            
            <div className="text-purple-400">{'};'}</div>
          </div>
        </div>

        <div className="mt-8 text-gray-400 font-mono text-sm">
          <p className="leading-relaxed">
            Passionate about solving complex problems through code. 
            Currently focused on mastering data structures, algorithms, and building production-ready applications.
            Always learning, always building.
          </p>
        </div>
      </div>
    </section>
  );
}
