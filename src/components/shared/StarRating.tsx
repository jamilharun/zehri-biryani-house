interface StarRatingProps {
  rating: number;
  max?: number;
  size?: 'sm' | 'md';
}

export default function StarRating({ rating, max = 5, size = 'md' }: StarRatingProps) {
  const sizeClass = size === 'sm' ? 'text-sm' : 'text-base';

  return (
    <div className="flex gap-0.5" aria-label={`Rating: ${rating} out of ${max}`}>
      {Array.from({ length: max }, (_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-[#F9A825] ${sizeClass}`}
          style={{
            fontVariationSettings: `'FILL' ${i < rating ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' ${size === 'sm' ? 20 : 24}`,
          }}
          aria-hidden="true"
        >
          star
        </span>
      ))}
    </div>
  );
}
