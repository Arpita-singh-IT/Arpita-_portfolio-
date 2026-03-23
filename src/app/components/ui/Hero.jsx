import { useState, useEffect } from 'react';

export function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = "> Hi, I'm Arpita Singh";
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-mono text-white">
            {displayText}
            <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>_</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-400 font-mono">
            IT Student | Software Engineer in Progress
          </p>
          
          <div className="pt-8">
            <button
              onClick={scrollToProjects}
              className="group relative px-6 py-3 font-mono text-sm border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300"
            >
              <span className="relative z-10">view_projects()</span>
            </button>
          </div>

          <div className="pt-12 flex gap-6">
            <a
              href="https://github.com/Arpita-singh-IT"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors font-mono text-sm"
            >
              [github]
            </a>
            <a
              href="https://www.linkedin.com/in/arpita-singh-637559369"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-emerald-400 transition-colors font-mono text-sm"
            >
              [linkedin]
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
