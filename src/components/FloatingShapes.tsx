import { motion } from 'framer-motion';

export default function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute top-10 left-10 w-16 h-16 bg-pink-300 opacity-30 rounded-full"
        animate={{ y: [0, -20, 0], x: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-24 h-24 bg-blue-300 opacity-20 rounded-full"
        animate={{ y: [0, 30, 0], x: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "loop" }}
      />
      <motion.div
        className="absolute top-40 right-32 w-12 h-12 bg-yellow-300 opacity-20 rounded-full"
        animate={{ y: [0, -15, 0], x: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, repeatType: "loop" }}
      />
    </div>
  );
}
