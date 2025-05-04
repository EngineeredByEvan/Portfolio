import Head from 'next/head';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { projects } from '@/data/projects';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Evan White</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-blue-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-4 md:px-6 py-12 transition-colors duration-300">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Projects
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="group">
              <motion.div
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-2xl transition-transform transform group-hover:scale-105 flex flex-col items-center text-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {project.logo && (
                  <Image
                    src={`/${project.logo}`}
                    alt={`${project.title} Logo`}
                    width={80}
                    height={80}
                    className="mb-4 group-hover:scale-110 transition-transform"
                  />
                )}
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{project.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}
