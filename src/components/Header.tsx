import Link from 'next/link';
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle('dark');
  };

  return (
    <header className="w-full py-4 px-6 md:px-8 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-colors duration-300 z-50 relative">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">Evan White</div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Toggle Dark
          </button>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
            Home
          </Link>
          <Link href="/projects" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
            Projects
          </Link>
          <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
            Contact
          </Link>
          <button
            onClick={toggleDarkMode}
            className="ml-4 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-3 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
          >
            Toggle Dark
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 px-6 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
            Home
          </Link>
          <Link href="/projects" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
            Projects
          </Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
            About
          </Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="block text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}
