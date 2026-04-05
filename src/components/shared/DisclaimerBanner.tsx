import { useState } from 'react';

const STORAGE_KEY = 'aghaz_disclaimer_dismissed';

export default function DisclaimerBanner() {
  const [visible, setVisible] = useState(
    () => localStorage.getItem(STORAGE_KEY) !== 'true'
  );

  if (!visible) return null;

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, 'true');
    setVisible(false);
  }

  return (
    <div className="w-full bg-surface-container border-b border-surface-container-highest px-4 py-2 flex items-center justify-between gap-4">
      <div className="flex-1 flex justify-center">
        <span className="text-[11px] font-label tracking-wide text-on-surface-variant opacity-80 text-center leading-relaxed">
          <span className="hidden sm:inline">
            This is a portfolio project by Jamil Harun. Aghaz Biryani &amp; BBQ is a real
            restaurant — this site is an independent design work, not affiliated with them.
          </span>
          <span className="sm:hidden">
            Portfolio project. Not the official Aghaz Biryani &amp; BBQ website.
          </span>
        </span>
      </div>
      <button
        onClick={dismiss}
        aria-label="Dismiss disclaimer"
        className="shrink-0 text-on-surface-variant opacity-50 hover:opacity-100 transition-opacity material-symbols-outlined"
        style={{ fontSize: '16px' }}
      >
        close
      </button>
    </div>
  );
}
