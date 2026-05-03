import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * ScrollRevealWrapper — fade-up entrance animation on scroll.
 * Uses Framer Motion + react-intersection-observer.
 * Threshold: 0.15 (triggers slightly before fully in view).
 */
export default function ScrollRevealWrapper({
  children,
  className = '',
  delay = 0,
}) {
  const { ref, inView } = useInView({
    threshold: 0.15,
    triggerOnce: true,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
