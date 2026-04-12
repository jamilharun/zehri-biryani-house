import { Link } from 'react-router-dom';
import { useParallax } from '../../hooks/useParallax';
import StarRating from '../shared/StarRating';
import UrduWatermark from '../shared/UrduWatermark';

export default function HeroSection() {
  const parallaxOffset = useParallax(0.4);

  return (
    <section className="relative min-h-[819px] flex items-center overflow-hidden pt-12 pb-24">
      {/* Background image with parallax */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
        <img
          src="/images/hero-main.jpg"
          alt="Overhead shot of a traditional Pakistani feast with steaming biryani and fresh naan"
          className="w-full h-full object-cover object-right"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        />
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 relative z-20 grid grid-cols-1 md:grid-cols-2 gap-12 w-full">
        {/* Left column */}
        <div className="flex flex-col justify-center space-y-6 pt-8 md:pt-0">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-secondary-container px-4 py-2 rounded-full w-fit">
            <span
              className="material-symbols-outlined text-on-secondary-container"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
              aria-hidden="true"
            >
              stars
            </span>
            <span className="text-sm font-label font-medium text-on-secondary-container">
              Authentic Biryani Heritage
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl md:text-8xl font-headline font-extrabold text-secondary leading-tight">
            The Soul of{' '}
            <span className="hidden md:inline">
              <br />
            </span>
            <span className="text-primary italic">Pakistani Spice.</span>
          </h1>

          {/* Body */}
          <p className="text-lg text-on-surface-variant max-w-md font-body leading-relaxed">
            Rich, aromatic Pakistani biryani prepared with bold spices and slow-cooked perfection
            — a deep respect for classic recipes that bring comfort and heat in every bite.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/menu"
              className="bg-primary-container text-on-primary font-bold px-8 py-4 rounded-xl hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
            >
              Explore Menu
              <span className="material-symbols-outlined" aria-hidden="true">
                arrow_forward
              </span>
            </Link>
            {/* Desktop second CTA */}
            <Link
              to="/reservations"
              className="hidden md:inline-flex bg-surface-container-highest text-secondary font-bold px-8 py-4 rounded-xl hover:bg-surface-variant transition-all"
            >
              Book a Table
            </Link>
            {/* Mobile single CTA */}
            <Link
              to="/reservations"
              className="md:hidden bg-primary text-on-primary font-bold px-8 py-4 rounded-xl"
            >
              Reserve a Table
            </Link>
          </div>
        </div>

        {/* Right column — floating feature card (desktop only) */}
        <div className="hidden md:flex justify-end items-end">
          <div className="bg-surface-container-lowest/80 backdrop-blur-xl p-6 rounded-full border border-outline-variant/20 shadow-2xl relative">
            <UrduWatermark
              size="text-[180px]"
              className="-top-20 -left-20"
              color="text-primary"
              animationDuration="25s"
            />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full border-4 border-tertiary-container p-1 overflow-hidden mb-4">
                <img
                  src="/images/karahi-badge.jpg"
                  alt="Chef's Signature Lamb Karahi"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <span className="font-headline font-bold text-secondary text-center">
                Chef's Signature
                <br />
                Lamb Karahi
              </span>
              <div className="mt-2">
                <StarRating rating={5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
