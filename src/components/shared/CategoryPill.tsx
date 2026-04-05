interface CategoryPillProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

export default function CategoryPill({ label, active, onClick }: CategoryPillProps) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-6 py-2.5 font-label text-sm font-semibold whitespace-nowrap transition-all duration-200 ${
        active
          ? 'bg-primary text-on-primary shadow-md'
          : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
      }`}
    >
      {label}
    </button>
  );
}
