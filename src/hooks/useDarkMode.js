import { useState, useEffect } from 'react';

/**
 * Dark mode hook.
 * - Reads preference from localStorage key "theme-preference"
 * - Applies .dark class to <html> element (not body)
 * - Returns [isDark, toggleDark]
 */
export function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    // Check localStorage first
    const stored = localStorage.getItem('theme-preference');
    if (stored !== null) {
      return stored === 'dark';
    }
    // Default to light mode as specified in SKILL.md
    return false;
  });

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
    localStorage.setItem('theme-preference', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleDark = () => setIsDark((prev) => !prev);

  return [isDark, toggleDark];
}

export default useDarkMode;
