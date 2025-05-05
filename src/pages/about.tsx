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
    caption: 'TVDSB Graduation Spotlight',
    content: `Hi, I'm Evan White, a Software Engineer with a diverse professional background, entrepreneurial spirit, and deep curiosity across various domains.`,
  },
  {
    type: 'image',
    src: '/about-section-assets/langdon food.jpg',
    alt: 'Langdon Hall Plated Desserts',
    caption: 'Langdon Hall Dessert Menu when I joined the team in 2014',
    content: `My professional journey began as a Pastry Cook at Langdon Hall Country House Hotel & Spa. During high school, my passion for pastry arts quickly turned from interest to expertise within months, winning 1st place in a regional competition and representing the Thames Valley District School Board at the provincial level. Simultaneously, I helped teach aspiring pastry chefs, prospective students during a summer camp, and even assisted teaching my fellow classmates during senior year. This fostered my early love for mentorship and collaboration.`,
  },
  {
    type: 'video',
    src: '/about-section-assets/electrician-work.MP4',
    alt: 'Electrical Work Video',
    caption: 'My finished conduit run in the brand new Peleton store in Downtown Vancouver',
    content: `Later, transitioning to management, I spent several years as a Shift Manager at Domino’s Pizza, refining my leadership, team coordination, conflict resolution, and operational optimization skills. Concurrently, my curiosity led me to diverse roles, from Tow Truck Driver to Service Advisor at Gurr Auto, and even as an Apprentice Electrician in Vancouver—working on projects ranging from premium retail spaces downtown, to luxury homes.`,
  },
  {
    type: 'image',
    src: '/about-section-assets/BakersTablePastryCo.JPG',
    alt: 'Baker’s Table & Pastry Co.',
    caption: 'Early days of Bakers Table & Pastry Co.',
    content: `Driven by my entrepreneurial ambitions, I co-founded Baker's Table & Pastry Co., supplying premium baked goods to institutions like Western University, Elmhurst Inn, and Idlewyld Inn. My role went beyond pastry creation—I created our online ordering system, optimized business operations, and learned valuable lessons in entrepreneurship. Bakers Table & Pastry Co. is still in operation today, and I am proud to have been a part of its early success.`,
  },
  {
    type: 'image',
    src: '/about-section-assets/VineGuard-Node.png',
    alt: 'VineGuard Prototype',
    caption: 'My VINEGUARD IoT Precision System Concept',
    content: `In search of a new challenge and fueled by my passion for technology, I pivoted into tech, earning an Advanced Diploma in Software Engineering from Centennial College (2022–2025). Here, I've gained a strong foundation in software engineering principles, object-oriented programming, full-stack development, cloud computing, and explored emerging technologies like AI, ML, and IoT. Previously, I earned a Certificate in Electrical Techniques from Fanshawe College (2017–2018), grounding me in digital electronics and practical electrical skills, enhancing my understanding of hardware-software integration.`,
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
                <div className="flex flex-col items-center md:w-1/2">
                  <Image
                    src={section.src ?? ''}
                    alt={section.alt || 'Image'}
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg object-cover w-full"
                  />
                  {section.caption && (
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic text-center">
                      {section.caption}
                    </p>
                  )}
                </div>
              )}
                {section.type === 'video' && (
                  <div className="flex flex-col items-center md:w-1/2">
                    <video
                      className="rounded-lg shadow-lg w-full max-h-[400px]"
                      autoPlay
                      controls
                      muted
                      loop
                      playsInline
                    >
                      <source src={section.src} type="video/MP4" />
                      Your browser does not support the video tag.
                    </video>
                    {section.caption && (
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 italic text-center">
                        {section.caption}
                      </p>
                    )}
                  </div>
                )}
              <p className="text-lg md:w-1/2 leading-relaxed whitespace-pre-line">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
