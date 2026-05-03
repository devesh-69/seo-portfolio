import { caseStudies } from '../../data/caseStudies';
import SiteCard from '../ui/SiteCard';
import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';
import { ArrowRight } from 'lucide-react';

/**
 * CaseStudies — 3 column grid of case study cards.
 */

export default function CaseStudies({ onViewKeywords }) {
  const handleViewKeywords = (siteName) => {
    onViewKeywords?.(siteName);
  };

  return (
    <section id="case-studies" className="py-20 md:py-28 bg-[var(--color-muted)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        
        {/* Header */}
        <ScrollRevealWrapper>
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
                Case Studies
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                Results That Speak.
              </h2>
            </div>
            
            <button className="hidden md:inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">
              View All Case Studies <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollRevealWrapper>

        {/* Case Studies Grid */}
        <ScrollRevealWrapper delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((study) => (
              <SiteCard
                key={study.id}
                study={study}
                onViewKeywords={handleViewKeywords}
              />
            ))}
          </div>
        </ScrollRevealWrapper>
        
        {/* Mobile View All CTA */}
        <div className="mt-8 text-center md:hidden">
          <button className="inline-flex items-center gap-1.5 text-sm font-bold text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors">
            View All Case Studies <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
