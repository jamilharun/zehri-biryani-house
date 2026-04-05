export type HalalBadgeVariant = 'pill' | 'floating' | 'inline';

interface HalalBadgeProps {
  variant: HalalBadgeVariant;
}

export default function HalalBadge({ variant }: HalalBadgeProps) {
  if (variant === 'pill') {
    return (
      <div className="inline-flex items-center gap-2 bg-secondary-container text-on-secondary-container rounded-full px-4 py-2">
        <span
          className="material-symbols-outlined text-sm"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
          aria-hidden="true"
        >
          verified
        </span>
        <span className="font-label text-xs font-bold uppercase tracking-widest">
          100% Halal Certified
        </span>
      </div>
    );
  }

  if (variant === 'floating') {
    return (
      <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-full shadow-xl border border-outline-variant/10 max-w-[200px] text-center">
        <span
          className="material-symbols-outlined text-primary text-4xl mb-2 block"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 40" }}
          aria-hidden="true"
        >
          stars
        </span>
        <p className="font-label font-bold uppercase tracking-tighter text-xs text-on-surface">
          Guaranteed Quality
        </p>
      </div>
    );
  }

  // inline variant
  return (
    <div className="absolute top-4 right-4 bg-surface-container-highest/90 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-1">
      <span
        className="material-symbols-outlined text-secondary text-sm"
        style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 20" }}
        aria-hidden="true"
      >
        verified_user
      </span>
      <span className="font-label text-xs font-bold text-on-secondary-container">HALAL</span>
    </div>
  );
}
