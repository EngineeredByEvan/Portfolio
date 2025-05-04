import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-4 px-6 md:px-8 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-colors duration-300 z-50 relative">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">Evan White</div>

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        <div className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 md:static md:flex space-y-4 md:space-y-0 md:space-x-6 py-4 md:py-0 px-6 md:px-0 ${isOpen ? 'block' : 'hidden'} md:block transition-all duration-300`}>
          {['/', '/projects', '/about', '/contact'].map((path, idx) => (
            <Link
              key={idx}
              href={path}
              className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {path === '/' ? 'Home' : path.replace('/', '').charAt(0).toUpperCase() + path.slice(2)}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
