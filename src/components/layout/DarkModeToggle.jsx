import { Sun, Moon } from 'lucide-react';

/**
 * Dark mode toggle — Sun/Moon icon button.
 * Placed in navbar top-right as specified in blueprint.
 */
export default function DarkModeToggle({ isDark, toggleDark }) {
  return (
    <button
      id="dark-mode-toggle"
      onClick={toggleDark}
      className="relative p-2 rounded-xl transition-colors duration-200
                 hover:bg-[var(--color-surface-raised)]"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {isDark ? (
        <Sun className="w-5 h-5 text-[var(--color-accent)]" />
      ) : (
        <Moon className="w-5 h-5 text-[var(--color-text-secondary)]" />
      )}
    </button>
  );
}
