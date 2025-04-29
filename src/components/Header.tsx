import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full py-4 px-8 bg-white dark:bg-gray-900 shadow-md dark:shadow-gray-800 transition-colors duration-300">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">
          Evan White
        </div>
        <div className="flex space-x-6">
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
        </div>
        <button
          onClick={() => document.documentElement.classList.toggle('dark')}
          className="ml-6 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 px-4 py-2 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition"
        >
          Toggle Dark
        </button>
      </nav>
    </header>
  );
}
