import { motion } from 'framer-motion';
import { ExternalLink, Search } from 'lucide-react';
import RankBadge from './RankBadge';

/**
 * KeywordCard — individual keyword card for the Keyword Lab.
 * Shows site, keyword, page URL, rank badge, and action buttons.
 * "Verify on Google" opens a Google search for the keyword.
 * "Open Page" opens the ranked URL directly.
 */
export default function KeywordCard({ keyword, index = 0 }) {
  const verifyOnGoogle = () => {
    const query = encodeURIComponent(keyword.keyword);
    window.open(`https://www.google.com/search?q=${query}`, '_blank');
  };

  const openPage = () => {
    window.open(keyword.pageUrl, '_blank');
  };

  // Extract domain from siteUrl for display
  const domain = keyword.siteUrl.replace(/^https?:\/\//, '').replace(/\/$/, '');

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{
        duration: 0.4,
        ease: 'easeOut',
        delay: index * 0.07,
      }}
      className="bg-[var(--color-surface)] rounded-2xl p-5 md:p-6
                 border border-[var(--color-border)]
                 transition-all duration-300
                 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
      style={{ boxShadow: 'var(--shadow-card)' }}
    >
      {/* Header: site + rank badge */}
      <div className="flex items-center justify-between mb-3">
        <span className="text-xs font-medium text-[var(--color-text-secondary)]">
          {domain}
        </span>
        <RankBadge position={keyword.position} page={keyword.page} />
      </div>

      {/* Keyword */}
      <h3
        className="text-base font-semibold text-[var(--color-text-primary)] mb-2 leading-snug"
        style={{ fontFamily: 'var(--font-display)' }}
      >
        "{keyword.keyword}"
      </h3>

      {/* Page URL */}
      <p
        className="text-xs text-[var(--color-text-tertiary)] mb-4 truncate"
        style={{ fontFamily: 'var(--font-mono)' }}
        title={keyword.pageUrl}
      >
        ↗ {keyword.pageUrl.replace(/^https?:\/\//, '').replace(/^www\./, '')}
      </p>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={verifyOnGoogle}
          title="Opens Google search — find the ranking page yourself."
          className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl
                     text-xs font-semibold
                     bg-[var(--color-accent)] text-white
                     hover:bg-[var(--color-accent-hover)]
                     transition-colors duration-200"
        >
          <Search className="w-3.5 h-3.5" />
          Verify on Google
        </button>
        <button
          onClick={openPage}
          title="Open the ranked page directly"
          className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl
                     text-xs font-medium
                     bg-[var(--color-surface-raised)] text-[var(--color-text-secondary)]
                     border border-[var(--color-border)]
                     hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                     transition-colors duration-200"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Open Page
        </button>
      </div>
    </motion.div>
  );
}
