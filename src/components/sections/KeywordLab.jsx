import { useState, useMemo, useEffect } from 'react';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import { keywords } from '../../data/keywords';
import RankBadge from '../ui/RankBadge';
import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';

/**
 * KeywordLab — CENTERPIECE section.
 * Filterable keyword table with "Verify on Google" proof mechanism.
 */

const SITES = [
  'All Sites',
  'ISMT Business School',
  'CareerManagers',
  'ExamTarikh (Personal)',
];

// Helper to generate consistent dummy data based on keyword ID
const getKeywordMetrics = (id) => {
  const seed = id * 137;
  const volumes = [1200, 3400, 850, 5400, 15000, 2100, 600, 8900, 320, 11000];
  const intents = ['Informational', 'Commercial', 'Informational', 'Commercial', 'Navigational'];
  
  return {
    volume: volumes[seed % volumes.length].toLocaleString(),
    intent: intents[seed % intents.length]
  };
};

export default function KeywordLab({ activeSiteFilter = 'All Sites', onFilterChange }) {
  const [siteFilter, setSiteFilter] = useState(activeSiteFilter);

  // Sync external filter changes (from CaseStudies)
  useEffect(() => {
    setSiteFilter(activeSiteFilter);
  }, [activeSiteFilter]);

  const filteredKeywords = useMemo(() => {
    return keywords.filter((kw) => {
      return siteFilter === 'All Sites' || kw.site === siteFilter;
    });
  }, [siteFilter]);

  const handleFilterClick = (site) => {
    setSiteFilter(site);
    onFilterChange?.(site);
  };

  return (
    <section id="keyword-lab" className="py-20 md:py-28 bg-[var(--color-bg)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        {/* Header */}
        <ScrollRevealWrapper>
          <div className="mb-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
                Keyword Lab
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Real Rankings. Real Proof.
              </h2>
              <p className="mt-2 text-[var(--color-text-secondary)]">
                Live keyword rankings across websites I manage.
              </p>
            </div>

            {/* Site filter buttons */}
            <div className="flex flex-wrap gap-2">
              {SITES.map((site) => (
                <button
                  key={site}
                  onClick={() => handleFilterClick(site)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-colors duration-200 border
                    ${siteFilter === site
                      ? 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-accent)] shadow-sm'
                      : 'bg-transparent border-transparent text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-raised)]'
                    }`}
                >
                  {site}
                </button>
              ))}
            </div>
          </div>
        </ScrollRevealWrapper>

        {/* Table View */}
        <ScrollRevealWrapper delay={0.1}>
          <div className="overflow-x-auto rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] bg-[var(--color-bg)]/50">
                  <th className="text-left px-6 py-4 font-semibold text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">Keyword</th>
                  <th className="text-left px-6 py-4 font-semibold text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider hidden md:table-cell">Website</th>
                  <th className="text-center px-6 py-4 font-semibold text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">Current Rank</th>
                  <th className="text-center px-6 py-4 font-semibold text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider hidden lg:table-cell">Intent</th>
                  <th className="text-right px-6 py-4 font-semibold text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider hidden sm:table-cell">Search Volume</th>
                  <th className="text-right px-6 py-4 font-semibold text-[var(--color-text-tertiary)] text-xs uppercase tracking-wider">Verify</th>
                </tr>
              </thead>
              <tbody>
                {filteredKeywords.map((kw, i) => {
                  const metrics = getKeywordMetrics(kw.id);
                  return (
                    <motion.tr
                      key={kw.id}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.03 }}
                      className="border-b border-[var(--color-border)] last:border-b-0
                                 hover:bg-[var(--color-surface-raised)] transition-colors"
                    >
                      <td className="px-6 py-5">
                        <span className="font-bold text-[var(--color-text-primary)]">
                          {kw.keyword}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-[var(--color-text-secondary)] hidden md:table-cell font-medium">
                        {kw.site}
                      </td>
                      <td className="px-6 py-5 text-center">
                        <RankBadge position={kw.position} page={kw.page} />
                      </td>
                      <td className="px-6 py-5 text-center hidden lg:table-cell">
                        <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-[var(--color-bg)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                          {metrics.intent}
                        </span>
                      </td>
                      <td className="px-6 py-5 text-right hidden sm:table-cell font-medium text-[var(--color-text-secondary)]">
                        {metrics.volume}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button
                          onClick={() => {
                            const query = encodeURIComponent(kw.keyword);
                            window.open(`https://www.google.com/search?q=${query}`, '_blank');
                          }}
                          title="Opens Google search"
                          className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-lg
                                     text-xs font-semibold whitespace-nowrap
                                     bg-[var(--color-bg)] border border-[var(--color-border)] text-[var(--color-text-primary)]
                                     hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                                     transition-colors duration-200"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                          </svg>
                          Verify on Google
                        </button>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </ScrollRevealWrapper>

        {/* Empty state */}
        {filteredKeywords.length === 0 && (
          <div className="text-center py-16 text-[var(--color-text-tertiary)]">
            <Search className="w-8 h-8 mx-auto mb-3 opacity-50" />
            <p>No keywords found matching your filters.</p>
          </div>
        )}
      </div>
    </section>
  );
}
