import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export default function CommitmentSection() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-8 pb-24 text-center reveal-hidden">
      <div className="bg-surface-container-low py-12 rounded-full border border-primary/5">
        <div className="max-w-2xl mx-auto px-8">
          <span
            className="material-symbols-outlined text-primary text-5xl mb-4 block"
            style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
            aria-hidden="true"
          >
            verified_user
          </span>
          <h2 className="text-2xl font-headline font-bold text-secondary mb-4">
            Every Dish. 100% Halal.
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-6 font-body">
            Our kitchen follows certified halal preparation from the first cut to the last flame.
            Every ingredient is sourced, handled, and cooked under strict halal guidelines — no
            exceptions, no shortcuts.
          </p>
          <div className="flex justify-center gap-12 grayscale opacity-50">
            <span className="font-label font-bold text-secondary">HALAL CERTIFIED</span>
          </div>
        </div>
      </div>
    </section>
  );
}
