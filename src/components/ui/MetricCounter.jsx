import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

/**
 * MetricCounter — animates a number from 0 to target on scroll.
 * Duration: 1.8s with ease-out curve.
 * Left border accent, rounded-2xl, subtle shadow.
 */
export default function MetricCounter({
  label,
  value,
  suffix = '',
  prefix = '',
  duration = 1800,
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
      const startTime = performance.now();
      const numericValue = typeof value === 'number' ? value : parseFloat(value) || 0;

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * numericValue));

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(numericValue);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [inView, hasAnimated, value, duration]);

  // For non-numeric display values like "3–5 Days"
  const isNumeric = typeof value === 'number';

  return (
    <div
      ref={ref}
      className="relative bg-[var(--color-surface)] rounded-2xl p-6 md:p-8
                 border border-[var(--color-border)]
                 border-l-4 border-l-[var(--color-accent)]
                 transition-shadow duration-300
                 hover:shadow-[var(--shadow-card-hover)]"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      <div
        className="text-3xl md:text-4xl font-extrabold text-[var(--color-text-primary)] mb-2"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        {isNumeric ? (
          <>
            {prefix}{count}{suffix}
          </>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="text-sm text-[var(--color-text-secondary)]">
        {label}
      </div>
    </div>
  );
}
