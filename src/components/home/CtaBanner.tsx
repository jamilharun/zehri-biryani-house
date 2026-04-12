import { Link } from 'react-router-dom';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export default function CtaBanner() {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-5xl mx-auto px-8">
        <div
          ref={ref}
          className="bg-secondary rounded-full p-12 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden reveal-hidden"
        >
          {/* Radial gradient overlay */}
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.10) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-headline font-bold text-white mb-2">
              Ready for a Feast?
            </h3>
            <p className="text-secondary-container font-body">
              Bold spices, slow-cooked biryani — a deep respect for classic Pakistani recipes.
            </p>
          </div>

          <div className="relative z-10">
            <Link
              to="/reservations"
              className="bg-primary-container text-white font-bold px-10 py-5 rounded-full hover:shadow-2xl transition-all hover:scale-105 active:scale-95 inline-block"
            >
              Reserve Your Table Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
