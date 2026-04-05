import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import HalalBadge from '../shared/HalalBadge';

export default function ReservationHero() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-8 pt-16 pb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10 reveal-hidden">
      {/* Left content */}
      <div>
        <span className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-label font-semibold mb-6">
          Authentic Pakistani Heritage
        </span>
        <h1 className="text-6xl font-headline font-extrabold text-secondary leading-tight mb-6">
          A Seat at Our{' '}
          <span className="text-primary">Family Table</span>
        </h1>
        <p className="text-lg text-on-surface-variant max-w-lg mb-8 leading-relaxed">
          Pull up a chair. Our charcoal grills are already burning, the karahi is on, and there is
          always room at the Aghaz table.
        </p>
        <div className="flex flex-wrap gap-4 items-center">
          <HalalBadge variant="pill" />
        </div>
      </div>

      {/* Right — image with floating badge */}
      <div className="relative mt-8 lg:mt-0">
        <div className="aspect-[4/3] rounded-full overflow-hidden shadow-2xl border-[12px] border-surface-container-lowest">
          <img
            src="https://placehold.co/600x450/ffe9e3/944a00?text=Dining+Table"
            alt="Decorated Pakistani dining table with warm candlelight setting"
            className="w-full h-full object-cover"
          />
        </div>
        <HalalBadge variant="floating" />
      </div>
    </section>
  );
}
