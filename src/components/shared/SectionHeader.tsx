interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  size?: 'lg' | 'md';
}

export default function SectionHeader({ title, subtitle, size = 'lg' }: SectionHeaderProps) {
  return (
    <div className="flex items-baseline gap-4 mb-12">
      <h2 className={`font-headline font-bold text-primary ${size === 'lg' ? 'text-5xl' : 'text-4xl'}`}>
        {title}
      </h2>
      <div className="flex-grow border-b-2 border-dotted border-outline-variant opacity-30" />
      {subtitle && (
        <span className="font-label text-sm text-on-surface-variant font-semibold tracking-tighter whitespace-nowrap">
          {subtitle}
        </span>
      )}
    </div>
  );
}
