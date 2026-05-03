import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-scroll';
import { lazy, Suspense } from 'react';

const TrafficChart = lazy(() => import('../ui/TrafficChart'));

const FLOATING_CHIPS = [
  { text: 'bca colleges without entrance exam', rank: '#1', delay: 0, pos: 'top-[0%] left-[0%]' },
  { text: 'direct admission in bca', rank: '#1', delay: 2, pos: 'top-[15%] right-[0%]' },
  { text: 'rrb exam study material', rank: '#2', delay: 4, pos: 'bottom-[5%] right-[10%]' },
];

export default function Hero() {
  const chartData = {
    labels: ["May '23", "Jul '23", "Sep '23", "Nov '23", "Jan '24", "Mar '24", "May '24"],
    clicks: [1200, 1800, 2400, 3100, 3800, 4700, 5600],
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-12"
    >
      {/* ─── LIGHT MODE BACKGROUND ─── */}
      <div
        className="absolute inset-0 z-0 dark:opacity-0 transition-opacity duration-500"
        style={{
          backgroundImage: `radial-gradient(circle, var(--color-border) 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
          opacity: 0.5,
        }}
      />
      <div
        className="absolute inset-0 z-0 dark:opacity-0 opacity-40 transition-opacity duration-500"
        style={{
          background: 'radial-gradient(ellipse at 20% 30%, var(--color-accent-light) 0%, transparent 40%), radial-gradient(ellipse at 80% 80%, #FFF7ED 0%, transparent 40%)',
        }}
      />

      {/* ─── DARK MODE BACKGROUND ─── */}
      <div className="absolute inset-0 z-0 opacity-0 dark:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-[var(--color-bg)]" />
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute w-[600px] h-[600px] rounded-full blur-[120px] animate-[meshOrb1_12s_ease-in-out_infinite]"
            style={{ background: 'rgba(249, 115, 22, 0.08)', top: '-10%', left: '-10%' }}
          />
          <div
            className="absolute w-[500px] h-[500px] rounded-full blur-[120px] animate-[meshOrb2_15s_ease-in-out_infinite]"
            style={{ background: 'rgba(217, 119, 6, 0.06)', bottom: '-15%', right: '-5%' }}
          />
        </div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
      </div>

      {/* ─── MAIN CONTENT CONTAINER ─── */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Copy */}
          <div className="col-span-1 lg:col-span-6 relative">
            
            {/* Scroll Indicator (Desktop only) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="hidden lg:flex absolute -left-12 top-1/2 -translate-y-1/2 flex-col items-center gap-4"
            >
              <span 
                className="text-[10px] font-bold tracking-widest text-[var(--color-text-tertiary)] uppercase whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                Scroll to Explore
              </span>
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ChevronDown className="w-4 h-4 text-[var(--color-text-tertiary)]" />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-6"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">
                SEO Executive · Mumbai, India
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] tracking-tight text-[var(--color-text-primary)]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="block"
              >
                I Don't Just
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="block"
              >
                Rank Keywords.
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="block text-[var(--color-accent)]"
              >
                I Build Organic
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="block text-[var(--color-accent)]"
              >
                Growth Engines.
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-6 text-base sm:text-lg text-[var(--color-text-secondary)] max-w-lg leading-relaxed font-medium"
            >
              Data-driven SEO specialist with proven Page 1 rankings across 3 websites, 20+ high-intent keywords, and 2,000–5,000 monthly organic clicks.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                to="impact-numbers"
                smooth={true}
                offset={-80}
                duration={600}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           text-sm font-bold cursor-pointer
                           bg-[var(--color-accent)] text-white
                           hover:bg-[var(--color-accent-hover)]
                           transition-all duration-200 shadow-[var(--shadow-button)]
                           hover:-translate-y-0.5"
              >
                View My Rankings
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/resume.pdf"
                download="Devesh_Tatkare_SEO_Executive_Resume_2026.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl
                           text-sm font-bold cursor-pointer
                           bg-[var(--color-surface)] text-[var(--color-text-primary)]
                           border border-[var(--color-border)]
                           hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                           transition-all duration-200 hover:-translate-y-0.5"
              >
                Download Resume
                <Download className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: Visuals (Chart + Floating Chips) */}
          <div className="col-span-1 lg:col-span-6 relative mt-12 lg:mt-0 h-[400px] md:h-[500px]">
            
            {/* Main Chart Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px]
                         bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl p-6 md:p-8 z-10"
              style={{ boxShadow: 'var(--shadow-card-hover)' }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-sm font-semibold text-[var(--color-text-tertiary)] uppercase tracking-wider mb-1">
                    Organic Traffic Growth
                  </h3>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl md:text-5xl font-extrabold text-[var(--color-text-primary)] tracking-tight">
                      +312%
                    </span>
                  </div>
                  <p className="text-sm font-medium text-[var(--color-text-secondary)] mt-1">vs last year</p>
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-text-tertiary)] bg-[var(--color-surface-raised)] px-2 py-1 rounded-md">
                  Last 12 Months
                </span>
              </div>
              
              <Suspense fallback={<div className="h-[180px] w-full animate-pulse bg-[var(--color-surface-raised)] rounded-xl" />}>
                <div className="h-[180px] w-full relative -left-2">
                  <TrafficChart data={chartData.clicks} labels={chartData.labels} label="Organic Clicks" />
                </div>
              </Suspense>
            </motion.div>

            {/* Floating Keyword Chips */}
            {FLOATING_CHIPS.map((chip, i) => (
              <div
                key={i}
                className={`absolute hidden md:flex items-center gap-3 px-4 py-2.5 rounded-xl
                           text-sm font-medium
                           bg-[var(--color-surface)] border border-[var(--color-border)]
                           text-[var(--color-text-secondary)]
                           select-none pointer-events-none z-20
                           ${chip.pos}
                           ${i === 0 ? 'animate-float' : ''}
                           ${i === 1 ? 'animate-float-delayed' : ''}
                           ${i === 2 ? 'animate-float-delayed-2' : ''}`}
                style={{
                  fontFamily: 'var(--font-mono)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                {chip.text}
                <span className="font-bold text-[var(--color-accent)]">
                  {chip.rank}
                </span>
              </div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
