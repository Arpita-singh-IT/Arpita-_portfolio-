export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 py-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-sm text-gray-500">
            <span className="text-gray-600">{'// '}</span>
            Built with React + Tailwind CSS
          </div>

          <div className="font-mono text-sm text-gray-500">
            © {currentYear} Arpita Singh
            <span className="text-emerald-400 ml-2">{'</>·'}</span>
          </div>

          <div className="font-mono text-sm text-gray-500">
            <span className="text-gray-600">v1.0.0</span>
          </div>
        </div>

        <div className="mt-6 text-center">
          <div className="font-mono text-xs text-gray-600">
            {'// "Code is like humor. When you have to explain it, it\'s bad." - Cory House'}
          </div>
        </div>
      </div>
    </footer>
  );
}
