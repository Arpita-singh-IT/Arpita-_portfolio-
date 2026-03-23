import { Mail, Github, Linkedin, FileText } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-4xl w-full">
        <h2 className="text-3xl md:text-4xl font-mono text-emerald-400 mb-12">
          {'// contact.connect'}
        </h2>

        {/* Terminal-style contact */}
        <div className="bg-[#1a1a1a] border border-gray-800 rounded-lg overflow-hidden">
          {/* Terminal header */}
          <div className="bg-[#0f0f0f] border-b border-gray-800 px-4 py-3 flex items-center gap-2">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <span className="text-gray-500 font-mono text-sm ml-4">contact.sh</span>
          </div>

          {/* Terminal content */}
          <div className="p-8 font-mono text-sm space-y-4">
            <div className="text-gray-500">
              <span className="text-emerald-400">arpita@portfolio</span>
              <span className="text-gray-600">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-600">$ </span>
              <span className="text-white">cat contact.txt</span>
            </div>

            <div className="pl-4 space-y-6 pt-4">
              <div className="space-y-2">
                <div className="text-gray-600">{'// reach out'}</div>
                <div className="flex items-center gap-3 group">
                  <Mail className="w-5 h-5 text-emerald-400" />
                  <a
                    href="mailto:arpita.singh@example.com"
                    className="text-gray-400 hover:text-emerald-400 transition-colors"
                  >
                    singharpita292005@gmail.com
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-gray-600">{'// social links'}</div>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 group">
                    <Github className="w-5 h-5 text-emerald-400" />
                    <a
                      href="https://github.com/Arpita-singh-IT"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      github.com/arpitasingh
                    </a>
                  </div>
                  
                  <div className="flex items-center gap-3 group">
                    <Linkedin className="w-5 h-5 text-emerald-400" />
                    <a
                      href="https://www.linkedin.com/in/arpita-singh-637559369"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      linkedin.com/in/arpitasingh
                    </a>
                  </div>

                  <div className="flex items-center gap-3 group">
                    <FileText className="w-5 h-5 text-emerald-400" />
                    <a
                      href="/resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-400 transition-colors"
                    >
                      resume.pdf
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <div className="text-gray-600 mb-2">{'// quick message'}</div>
                <a
                  href="mailto:arpita.singh@example.com?subject=Hello%20from%20Portfolio"
                  className="inline-block px-6 py-3 border border-emerald-400 text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-300 font-mono text-sm"
                >
                  send_message()
                </a>
              </div>
            </div>

            <div className="text-gray-600 pt-4">
              <span className="text-emerald-400">singharpita29005@gmail.com</span>
              <span className="text-gray-600">:</span>
              <span className="text-blue-400">~</span>
              <span className="text-gray-600">$ </span>
              <span className="animate-pulse">_</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
