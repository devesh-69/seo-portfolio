/**
 * RankBadge — visual ranking indicator.
 * Gold (#1–3), Silver (#4–6), Bronze (#7–10), Page 2 (muted grey).
 * Uses CSS custom properties from theme.config.js.
 */
export default function RankBadge({ position, page }) {
  const isPage2 = page === 2 || position > 10;

  let bgColor, textColor, label;

  if (isPage2) {
    bgColor = 'var(--color-rank-page2)';
    textColor = 'var(--color-rank-page2-text)';
    label = 'P2';
  } else if (position <= 3) {
    bgColor = 'var(--color-rank-gold)';
    textColor = 'var(--color-rank-gold-text)';
    label = `#${position}`;
  } else if (position <= 6) {
    bgColor = 'var(--color-rank-silver)';
    textColor = 'var(--color-rank-silver-text)';
    label = `#${position}`;
  } else {
    bgColor = 'var(--color-rank-bronze)';
    textColor = 'var(--color-rank-bronze-text)';
    label = `#${position}`;
  }

  return (
    <span
      className="inline-flex items-center justify-center px-2.5 py-1 rounded-full
                 text-xs font-bold tracking-wide min-w-[40px]"
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontFamily: 'var(--font-mono)',
      }}
    >
      {label}
    </span>
  );
}
