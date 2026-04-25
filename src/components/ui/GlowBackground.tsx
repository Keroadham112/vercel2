import { motion } from "framer-motion";

const blobs = [
  "left-[8%] top-[10%] h-72 w-72 bg-violet-500/25",
  "right-[8%] top-[18%] h-96 w-96 bg-fuchsia-500/20",
  "left-[30%] bottom-[8%] h-80 w-80 bg-indigo-500/20",
];

const stars = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  left: `${(i * 37) % 100}%`,
  top: `${(i * 53) % 100}%`,
  size: i % 4 === 0 ? 3 : 2,
  delay: (i % 8) * 0.3,
}));

export function GlowBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.2),transparent_42%),radial-gradient(circle_at_bottom,rgba(217,70,239,0.16),transparent_45%),#06050c]" />
      {blobs.map((blob, index) => (
        <motion.div
          key={blob}
          className={`absolute rounded-full blur-[110px] ${blob}`}
          animate={{
            x: [0, 22, -16, 0],
            y: [0, -18, 16, 0],
          }}
          transition={{
            duration: 10 + index * 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="absolute rounded-full bg-white/90"
          style={{
            left: star.left,
            top: star.top,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{ opacity: [0.25, 1, 0.25], scale: [1, 1.25, 1] }}
          transition={{
            duration: 2.2 + (star.id % 5) * 0.35,
            repeat: Number.POSITIVE_INFINITY,
            delay: star.delay,
          }}
        />
      ))}
      <motion.span
        className="absolute left-[70%] top-[25%] h-[2px] w-20 bg-gradient-to-r from-white/0 via-fuchsia-200 to-white/0"
        animate={{ x: [-40, 50], y: [-20, 25], opacity: [0, 1, 0] }}
        transition={{ duration: 3.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 2 }}
      />
      <motion.span
        className="absolute left-[20%] top-[38%] h-[2px] w-16 bg-gradient-to-r from-white/0 via-violet-200 to-white/0"
        animate={{ x: [-30, 40], y: [-10, 20], opacity: [0, 1, 0] }}
        transition={{ duration: 3.8, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3, delay: 1 }}
      />
    </div>
  );
}
