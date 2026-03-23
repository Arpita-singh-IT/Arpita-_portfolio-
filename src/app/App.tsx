// App.tsx (or App.jsx)
import { Navbar } from './components/ui/Navbar';
import { Hero }   from './components/ui/Hero';
import { About }  from './components/ui/About';
import { Skills } from './components//ui/Skills';
import { Projects } from './components/ui/Projects';
import { Contact } from './components/ui/Contact';
import { Footer }  from './components/ui/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0f0f0f] text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
