
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="h-[720px] flex items-center justify-center bg-muted">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-[720px]"
      >
        <h1 className="text-5xl font-bold leading-tight">
          Pixel Perfect Frontend Assignment
        </h1>
        <p className="mt-4 text-lg text-secondary">
          Implemented exactly from Figma using React & Tailwind.
        </p>
      </motion.div>
    </section>
  );
}
