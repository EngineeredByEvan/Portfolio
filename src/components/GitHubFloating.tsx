import Image from 'next/image';
import Link from 'next/link';

export default function GitHubFloating() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-center group">
      <span className="text-xs text-gray-700 dark:text-gray-300 mb-1 opacity-0 group-hover:opacity-100 transition">
        Check out my GitHub!
      </span>
      <Link href="https://github.com/EngineeredByEvan" target="_blank" rel="noopener noreferrer">
        <Image
          src="/github.svg"
          alt="GitHub"
          width={40}
          height={40}
          className="hover:scale-110 transition-transform dark:invert"
        />
      </Link>
    </div>
  );
}
