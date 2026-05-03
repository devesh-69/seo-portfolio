import { seoSkills, tools } from '../../data/skills';
import SkillPill from '../ui/SkillPill';
import ScrollRevealWrapper from '../ui/ScrollRevealWrapper';

export default function ToolsSkills() {
  return (
    <section id="tools-skills" className="py-20 md:py-28 bg-[var(--color-bg)] border-t border-b border-[var(--color-border)]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-12">
        <ScrollRevealWrapper>
          <div className="mb-12">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)] mb-2 block">
              Tools & Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-text-primary)]" style={{ fontFamily: 'var(--font-display)' }}>
              The Tools. The Skills. The Strategy.
            </h2>
          </div>
        </ScrollRevealWrapper>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Tools */}
          <div>
            <ScrollRevealWrapper>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-wider">
                SEO Tools
              </h3>
            </ScrollRevealWrapper>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, i) => (
                <SkillPill
                  key={tool.name}
                  name={
                    <span className="inline-flex items-center gap-2">
                      <img 
                        src={`https://www.google.com/s2/favicons?domain=${tool.name.toLowerCase().replace(/\s+/g, '')}.com&sz=32`} 
                        alt="" 
                        className="w-4 h-4 rounded-sm object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                      {tool.name}
                    </span>
                  }
                  index={i}
                />
              ))}
            </div>
          </div>

          {/* Right Column - Skills */}
          <div>
            <ScrollRevealWrapper delay={0.1}>
              <h3 className="text-sm font-semibold text-[var(--color-text-primary)] mb-6 uppercase tracking-wider">
                Core Skills
              </h3>
            </ScrollRevealWrapper>
            <div className="flex flex-wrap gap-3">
              {seoSkills.map((skill, i) => (
                <SkillPill key={skill} name={skill} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
