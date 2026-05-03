import { motion } from 'framer-motion';

/**
 * SkillPill — icon + label pill with staggered entrance.
 * Rounded-full, uses accent-light bg.
 */
export default function SkillPill({ name, index = 0 }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
        delay: index * 0.07,
      }}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium
                 bg-[var(--color-surface)] border border-[var(--color-border)]
                 text-[var(--color-text-primary)]
                 hover:border-[var(--color-accent)] hover:bg-[var(--color-accent-light)]
                 transition-colors duration-200 cursor-default"
    >
      {name}
    </motion.span>
  );
}
