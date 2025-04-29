import Head from 'next/head';
import Header from '@/components/Header';
import FloatingShapes from '@/components/FloatingShapes';
import Image from 'next/image';
import { motion } from 'framer-motion';

const sections = [
  {
    type: 'image',
    src: '/about-section-assets/TVDSB Spotlight.jpg',
    alt: 'Graduation Spotlight',
    content: `Hi, I'm Evan White, a Software Engineer with a diverse professional background, entrepreneurial spirit, and deep curiosity across various domains.`,
  },
  {
    type: 'image',
    src: '/about-section-assets/langdon food.jpg',
    alt: 'Langdon Hall Plated Desserts',
    content: `My professional journey began as a Pastry Cook at Langdon Hall Country House Hotel & Spa. During high school, my passion for pastry arts quickly turned from interest to expertise, winning 1st place in a regional competition and representing the Thames Valley District School Board at the provincial level. I even helped teach aspiring pastry chefs, fostering my early love for mentorship and collaboration.`,
  },
  {
    type: 'video',
    src: '/about-section-assets/electrician-work.mp4',
    alt: 'Electrical Work Video',
    content: `Later, transitioning to management, I spent several years as a Shift Manager at Domino’s Pizza, refining my leadership, team coordination, conflict resolution, and operational optimization skills. Concurrently, my curiosity led me to diverse roles, from Tow Truck Driver to Service Advisor at Gurr Auto, and even as an Apprentice Electrician in Vancouver—working on projects ranging from premium retail spaces downtown, to luxury homes.`,
  },
  {
    type: 'image',
    src: '/about-section-assets/BakersTablePastryCo.JPG',
    alt: 'Baker’s Table & Pastry Co.',
    content: `Driven by my entrepreneurial ambitions, I co-founded Baker's Table & Pastry Co., supplying premium baked goods to institutions like Western University, Elmhurst Inn, and Idlewyld Inn. My role went beyond pastry creation—I created our online ordering system, optimized business operations, and learned valuable lessons in entrepreneurship.`,
  },
  {
    type: 'image',
    src: '/about-section-assets/VineGuard-Node.png',
    alt: 'VineGuard Prototype',
    content: `In search of a new challenge and fueled by my passion for technology, I pivoted into tech, earning an Advanced Diploma in Software Engineering from Centennial College (2022–2025). Here, I've mastered software engineering principles, object-oriented programming, full-stack development, cloud computing, and explored emerging technologies like AI, ML, and IoT. Previously, I earned a Certificate in Electrical Techniques from Fanshawe College (2017–2018), grounding me in digital electronics and practical electrical skills, enhancing my understanding of hardware-software integration.`,
  },
  {
    type: 'text',
    content: `Today, my tech interests span diverse, impactful domains, notably Healthcare, Environment, Defense, and Finance, where I focus on leveraging AI, IoT, Cloud, and data-driven solutions to solve meaningful problems and improve quality of life. My latest entrepreneurial venture, VINEGUARD, reflects my commitment to innovating smart, sustainable solutions.

Throughout my journey, one thing remains clear: my passion for continuous learning and my broad curiosity enable me not only to adapt quickly but also to deeply connect with people across various industries and walks of life. I thrive at the intersection of creativity, technology, and real-world impact, excited about each new challenge ahead.`,
  },
];

export default function About() {
  return (
    <>
      <Head>
        <title>About | Evan White</title>
      </Head>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-yellow-50 via-yellow-100 to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-gray-200 px-6 py-12 transition-colors duration-300 relative">
        <FloatingShapes />
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-16">My Journey</h1>
        <div className="space-y-24 max-w-5xl mx-auto">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {section.type === 'image' && (
                <Image
                  src={section.src ?? ''}
                  alt={section.alt || 'Image'}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg object-cover w-full md:w-1/2"
                />
              )}
              {section.type === 'video' && (
                <video
                  className="rounded-lg shadow-lg w-full md:w-1/2 max-h-[400px]"
                  controls
                  muted
                  loop
                  playsInline
                >
                  <source src={section.src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              <p className="text-lg md:w-1/2 leading-relaxed whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
