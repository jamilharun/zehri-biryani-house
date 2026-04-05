export type SpiceStyle = 'dots' | 'emoji' | 'fire';

interface SpiceIndicatorProps {
  level: 1 | 2 | 3 | 4 | 5;
  style?: SpiceStyle;
  max?: number;
}

export default function SpiceIndicator({ level, style = 'dots', max = 5 }: SpiceIndicatorProps) {
  if (style === 'emoji') {
    return (
      <span className="text-primary-container" aria-label={`Spice level ${level} of ${max}`}>
        {'🌶️'.repeat(level)}
      </span>
    );
  }

  if (style === 'fire') {
    return (
      <span className="flex gap-0.5" aria-label={`Spice level ${level} of ${max}`}>
        {Array.from({ length: max }, (_, i) => (
          <span
            key={i}
            className="material-symbols-outlined text-xs"
            style={{
              fontVariationSettings: `'FILL' ${i < level ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 20`,
              color: i < level ? '#944a00' : '#dcc1b1',
            }}
            aria-hidden="true"
          >
            local_fire_department
          </span>
        ))}
      </span>
    );
  }

  // dots variant
  return (
    <span className="flex gap-1" aria-label={`Spice level ${level} of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`w-3 h-3 rounded-full ${i < level ? 'bg-primary' : 'bg-outline-variant'}`}
          aria-hidden="true"
        />
      ))}
    </span>
  );
}
