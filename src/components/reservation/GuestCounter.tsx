interface GuestCounterProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function GuestCounter({ value, onChange, min = 1, max = 20 }: GuestCounterProps) {
  const decrement = () => {
    if (value > min) onChange(value - 1);
  };

  const increment = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        type="button"
        onClick={decrement}
        disabled={value <= min}
        className="bg-surface-container w-10 h-10 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container-highest transition-colors disabled:opacity-40"
        aria-label="Decrease guest count"
      >
        <span className="material-symbols-outlined text-base" aria-hidden="true">
          remove
        </span>
      </button>
      <span className="text-xl font-headline font-bold text-on-surface min-w-[2rem] text-center">
        {value}
      </span>
      <button
        type="button"
        onClick={increment}
        disabled={value >= max}
        className="bg-primary text-on-primary w-10 h-10 rounded-xl flex items-center justify-center hover:bg-primary-container transition-colors disabled:opacity-40"
        aria-label="Increase guest count"
      >
        <span className="material-symbols-outlined text-base" aria-hidden="true">
          add
        </span>
      </button>
    </div>
  );
}
