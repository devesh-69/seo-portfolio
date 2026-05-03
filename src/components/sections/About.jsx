import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';
import {
  Search, BarChart2, Globe, TrendingUp,
  Key, Activity, Palette
} from 'lucide-react';

/**
 * About — two-column layout.
 * Left: bio text (3 paragraphs).
 * Right: tools visual "stack" card.
 */

const TOOL_ICONS = {
  'Google Search Console': Search,
  'Google Analytics': BarChart2,
  'SEMrush': Globe,
  'Moz': TrendingUp,
  'Google Keyword Planner': Key,
  'Google Trends': Activity,
  'Canva': Palette,
};

const TOOLS = [
  'Google Search Console',
  'Google Analytics',
  'SEMrush',
  'Moz',
  'Google Keyword Planner',
  'Google Trends',
  'Canva',
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <ScrollRevealWrapper>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest
                         bg-[var(--color-accent-light)] text-[var(--color-accent)]">
            About Me
          </span>
        </ScrollRevealWrapper>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — Text (3 cols) */}
          <div className="lg:col-span-3">
            <ScrollRevealWrapper>
              <h2
                className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)] mb-6"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                SEO by Skill. Technical by Training.
              </h2>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper delay={0.1}>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                With a BCA background, I understand crawlability, indexing, and HTML/CSS at code level.
                I'm not just a "content person" — I read source code and fix structure. When a page isn't
                indexing, I don't guess — I check robots.txt, canonical tags, and crawl logs.
              </p>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper delay={0.2}>
              <p className="text-[var(--color-text-secondary)] leading-relaxed mb-5">
                I specialise in the education and exam-prep niche. I understand student search intent
                deeply — the difference between "BCA admission" and "direct BCA without entrance" is
                a conversion, not just a click. That nuance is what separates ranking from revenue.
              </p>
            </ScrollRevealWrapper>

            <ScrollRevealWrapper delay={0.3}>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                Currently at ISMT Business School managing SEO for multiple properties. I believe in
                pillar-cluster strategy, fast indexing, and letting GSC data drive every decision.
                No vanity metrics — just rankings, traffic, and conversions.
              </p>
            </ScrollRevealWrapper>
          </div>

          {/* Right — Tools card (2 cols) */}
          <div className="lg:col-span-2">
            <ScrollRevealWrapper delay={0.2}>
              <div
                className="bg-[var(--color-surface)] rounded-2xl p-6 border border-[var(--color-border)]
                           sticky top-24"
                style={{ boxShadow: 'var(--shadow-card)' }}
              >
                <h3
                  className="text-sm font-semibold uppercase tracking-widest text-[var(--color-text-tertiary)] mb-4"
                >
                  My Toolkit
                </h3>
                <div className="space-y-3">
                  {TOOLS.map((tool) => {
                    const Icon = TOOL_ICONS[tool] || Globe;
                    return (
                      <div
                        key={tool}
                        className="flex items-center gap-3 px-3 py-2.5 rounded-xl
                                   bg-[var(--color-surface-raised)]
                                   hover:bg-[var(--color-accent-light)]
                                   transition-colors duration-200"
                      >
                        <Icon className="w-4 h-4 text-[var(--color-accent)] flex-shrink-0" />
                        <span className="text-sm font-medium text-[var(--color-text-primary)]">
                          {tool}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ScrollRevealWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
