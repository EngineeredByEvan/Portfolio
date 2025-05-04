import { useRouter } from 'next/router';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import FloatingShapes from '@/components/FloatingShapes';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';

const techColors: { [key: string]: string } = {
  'Scikit-learn': '#F7931E',
  'PyTorch': '#EE4C2C',
  '.NET': '#512BD4',
  'Angular': '#0F0F11',
  'Express.js': '#000000',
  'MongoDB': '#47A248',
  'C++': '#00599C',
  'Go': '#00ADD8',
  'Python': '#3776AB',
  'TensorFlow': '#FF6F00',
  'PostgreSQL': '#4169E1',
  'Tailwind CSS': '#06B6D4',
  'Docker': '#2496ED',
  'AWS': '#232F3E',
  'Node.js': '#5FA04E',
  'TypeScript': '#3178C6',
  'Next.js': '#5FA04E',
  'React': '#61DAFB',
};

export default function ProjectDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 flex flex-col items-center justify-center px-6 transition-colors duration-300">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Link href="/projects" className="text-red-500 hover:underline mt-4">
            ← Back to Projects
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Head>
        <title>{project.title} | Evan White</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
        <FloatingShapes />

        <div className="flex flex-col items-center mb-6">
          {project.logo && (
            <Image
              src={`/${project.logo}`}
              alt={`${project.title} Logo`}
              width={400}
              height={400}
              className="mb-4"
            />
          )}
          <motion.h1 className="text-5xl md:text-6xl font-bold text-center">
            {project.title}
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-center max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {project.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {project.techs.map((tech, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full text-white text-sm font-semibold"
                style={{ backgroundColor: techColors[tech] || '#666' }}
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {project.caseStudy && (
            <section className="max-w-3xl w-full space-y-12 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Challenge</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {project.caseStudy.challenge}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Solution</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {project.caseStudy.solution}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-4">Results</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300">
                  {project.caseStudy.results}
                </p>
              </motion.div>

              {project.slug === 'ml-stock-predictor' && (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h2 className="text-3xl font-bold mb-4">Notebook Demo</h2>
                  <iframe
                    src="/MachineLearningStockPredictor.pdf"
                    className="w-full h-[600px] border rounded-lg"
                  ></iframe>
                </motion.div>
              )}
            </section>
          )}
          {project.slug === 'smartbasket' && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-12"
            >
              <h2 className="text-3xl font-bold mb-4">Project Walkthrough</h2>
              <iframe
                src="/SmartBasket_Presentation.pdf"
                className="w-full h-[600px] border rounded-lg"
              ></iframe>
            </motion.div>
          )}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <Link
              href="/projects"
              className="bg-red-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition"
            >
              ← Back to Projects
            </Link>
          </motion.div>
        </div>
      </main>
    </>
  );
}
