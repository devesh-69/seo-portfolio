import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

const TrafficChart = lazy(() => import('./TrafficChart'));

/**
 * SiteCard — vertical case study card.
 * Shows site name, niche, 3 metrics, tiny sparkline, thumbnail, and CTA.
 */
export default function SiteCard({ study, onViewKeywords }) {
  // Extracting 3 simplified metrics from the existing results data
  const metrics = study.results.slice(0, 3).map(result => {
    // Attempt to extract the "after" value as the main big number
    let bigValue = result.after;
    if (result.label.includes('Traffic Share')) {
      bigValue = result.after;
    } else if (result.label.includes('Keywords')) {
      bigValue = result.after.replace('+', '');
    } else if (result.label.includes('Pages Ranked')) {
      bigValue = result.after.replace('+', '');
    }
    
    return {
      label: result.label.replace('Organic ', '').replace('Pages Ranked Page 1', 'Top Rankings'),
      value: bigValue
    };
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-[var(--color-surface)] rounded-3xl p-6 md:p-8 flex flex-col h-full
                 border border-[var(--color-border)]
                 transition-shadow duration-300 hover:shadow-[var(--shadow-card-hover)]"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Header */}
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h3
            className="text-xl font-bold text-[var(--color-text-primary)] mb-1 flex items-center gap-2"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            <div className="w-6 h-6 rounded bg-[var(--color-surface-raised)] border border-[var(--color-border)] flex items-center justify-center">
              <span className="text-[10px] font-bold text-[var(--color-text-secondary)]">{study.site.charAt(0)}</span>
            </div>
            {study.site}
          </h3>
          <p className="text-xs text-[var(--color-text-tertiary)] truncate max-w-[200px]">
            {study.niche.split('—')[0].trim()} · {study.timeline.includes('Present') ? 'Ongoing' : study.timeline}
          </p>
        </div>
        <a
          href={study.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* 3 Metrics Strip */}
      <div className="flex flex-wrap items-start gap-4 md:gap-6 mb-6">
        {metrics.map((m, i) => {
          const isLongText = m.value.length > 4;
          return (
            <div key={i} className="flex flex-col flex-1 min-w-[30%]">
              <span 
                className={`${isLongText ? 'text-sm md:text-base leading-tight' : 'text-2xl'} font-extrabold text-[var(--color-text-primary)] mb-1`} 
                style={{ fontFamily: 'var(--font-display)' }}
              >
                {m.value}
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] leading-snug">
                {m.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Traffic Growth Sparkline */}
      <div className="mb-6 flex-grow">
        {study.trafficData && (
          <Suspense fallback={<div className="h-[80px] w-full animate-pulse bg-[var(--color-surface-raised)] rounded-xl" />}>
            <div className="h-[80px] w-full relative -left-2">
              <TrafficChart
                data={study.trafficData.clicks}
                labels={study.trafficData.labels}
                label="Clicks"
                hideXAxis={true}
              />
            </div>
          </Suspense>
        )}
      </div>

      {/* Thumbnail Slot */}
      {study.image && (
        <div className="w-full h-32 rounded-xl border border-[var(--color-border)] mb-6 overflow-hidden bg-[var(--color-surface-raised)]">
          <img 
            src={study.image} 
            alt={`${study.site} preview`}
            className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity"
            loading="lazy"
          />
        </div>
      )}

      {/* CTA */}
      <button
        onClick={() => onViewKeywords?.(study.site)}
        className="mt-auto w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                   text-sm font-semibold text-[var(--color-accent)]
                   bg-[var(--color-accent-light)] hover:bg-[var(--color-accent)] hover:text-white
                   transition-colors duration-200"
      >
        View Case Study
        <ArrowRight className="w-4 h-4" />
      </button>
    </motion.div>
  );
}
