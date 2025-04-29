import Image from 'next/image';

const techs = [
  { src: '/tech/cplusplus.svg', alt: 'C++' },
  { src: '/tech/mongodb.svg', alt: 'MongoDB' },
  { src: '/tech/expressdotcom.svg', alt: 'Express.js' },
  { src: '/tech/angular.svg', alt: 'Angular' },
  { src: '/tech/dotnet.svg', alt: '.NET' },
  { src: '/tech/pytorch.svg', alt: 'PyTorch' },
  { src: '/tech/scikitlearn.svg', alt: 'Scikit-learn' },
  { src: '/tech/react.svg', alt: 'React' },
  { src: '/tech/nextdotjs.svg', alt: 'Next.js' },
  { src: '/tech/typescript.svg', alt: 'TypeScript' },
  { src: '/tech/nodedotjs.svg', alt: 'Node.js' },
  { src: '/tech/amazonwebservices.svg', alt: 'AWS' },
  { src: '/tech/docker.svg', alt: 'Docker' },
  { src: '/tech/tailwindcss.svg', alt: 'Tailwind CSS' },
  { src: '/tech/postgresql.svg', alt: 'PostgreSQL' },
  { src: '/tech/python.svg', alt: 'Python' },
  { src: '/tech/go.svg', alt: 'Go' },
  { src: '/tech/tensorflow.svg', alt: 'TensorFlow' },
];

export default function ScrollingTechs() {
  return (
    <div className="overflow-hidden bg-white dark:bg-gray-800 py-8 relative">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {[...techs, ...techs].map((tech, index) => (
          <div
            key={index}
            className="group relative flex items-center justify-center px-6"
          >
            <Image
              src={tech.src}
              alt={tech.alt}
              width={48}
              height={48}
              className="object-contain grayscale opacity-80 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110"
            />
            <span className="absolute bottom-full mb-2 text-xs bg-black text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {tech.alt}
            </span>
          </div>
        ))}
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
}
