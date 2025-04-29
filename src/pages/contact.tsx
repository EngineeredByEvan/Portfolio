import Head from 'next/head';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import FloatingShapes from '@/components/FloatingShapes';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Evan White</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-purple-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 flex flex-col items-center justify-center transition-colors duration-300">
        <FloatingShapes />
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Get in Touch
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-center max-w-2xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Whether youre interested in working together, discussing tech, or just connecting, feel free to reach out!
        </motion.p>
        <motion.a
          href="mailto:your.email@example.com"
          className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Email Me
        </motion.a>
      </main>
    </>
  );
}
