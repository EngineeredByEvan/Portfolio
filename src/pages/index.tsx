import Head from 'next/head';
import Header from '@/components/Header';
import Link from 'next/link';
import FloatingShapes from '@/components/FloatingShapes';
import ScrollingTechs from '@/components/ScrollingTechs';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

export default function Home() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <>
      <Head>
        <title>Evan White | Portfolio</title>
      </Head>
      <Header />
      <main ref={ref} className="relative bg-gradient-to-b from-orange-400 via-red-500 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-black min-h-screen flex flex-col items-center justify-center text-white px-6 transition-colors duration-300">
        
        <FloatingShapes />

        <motion.h1
          style={{ y }}
          className="text-5xl md:text-7xl font-bold mb-6 text-center z-10"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Building Solutions with Code.
        </motion.h1>

        <motion.p
          style={{ y }}
          className="text-xl md:text-2xl text-center mb-8 max-w-2xl z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm Evan White — a Backend, Cloud, and Data Engineer who loves crafting clean, efficient, and scalable systems.
        </motion.p>

        <motion.div
          style={{ y }}
          className="flex gap-4 z-10 mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.4, type: 'spring' }}
        >
          <Link
            href="/projects"
            className="bg-white text-red-500 font-bold py-3 px-6 rounded-lg hover:bg-red-100 transition"
          >
            View Projects
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-lg hover:bg-white hover:text-red-500 transition"
          >
            Contact Me
          </Link>
        </motion.div>

        {/* Scrolling tech logos */}
        <ScrollingTechs />
      </main>

      <div className="w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[100px] fill-white"
        >
          <path d="M0.00,49.98 C149.99,150.00 349.95,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" />
        </svg>
      </div>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; {new Date().getFullYear()} Evan White. All rights reserved.</p>
      </footer>
    </>
  );
}
