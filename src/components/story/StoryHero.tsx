import { Link } from 'react-router-dom';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export default function StoryHero() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-16 items-center reveal-hidden">
      {/* Left content */}
      <div className="relative z-10">
        <span className="font-label text-primary font-semibold tracking-widest text-sm block mb-4 uppercase">
          Heritage &amp; Legacy
        </span>
        <h1 className="font-headline text-5xl lg:text-7xl font-extrabold text-on-background mb-8 leading-tight">
          Aghaz:{' '}
          <span className="text-secondary">The Beginning.</span>
        </h1>
        <p className="text-lg lg:text-xl text-on-surface-variant leading-relaxed mb-10 max-w-xl">
          In Urdu,{' '}
          <span className="font-bold text-secondary">
            Aghaz (اغاز)
          </span>{' '}
          means 'The Beginning'. It represents our commitment to returning to the origins of
          authentic Pakistani cuisine — where every spice is freshly ground and every recipe tells
          the story of our ancestors.
        </p>
        <div className="flex flex-wrap items-center gap-6">
          <Link
            to="/menu"
            className="bg-primary hover:bg-primary-container text-on-primary px-8 py-4 rounded-xl font-bold transition-transform active:scale-95 shadow-lg"
          >
            View Our Menu
          </Link>
          <div className="flex items-center gap-2 text-secondary font-bold">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
              aria-hidden="true"
            >
              verified_user
            </span>
            <span>Pakistani Chefs</span>
          </div>
        </div>
      </div>

      {/* Right — portrait image with quote overlay */}
      <div className="relative">
        {/* Soft glow */}
        <div
          className="absolute inset-0 bg-secondary/10 rounded-full blur-3xl -z-10"
          aria-hidden="true"
        />
        <img
          src="https://placehold.co/600x750/ffe9e3/944a00?text=Chef"
          alt="Master Pakistani chef hand-sprinkling aromatic spices over a large copper pot of steaming biryani"
          className="w-full aspect-[4/5] object-cover rounded-full shadow-2xl border-[16px] border-surface-container-lowest"
        />
        {/* Info overlay */}
        <div className="absolute -bottom-6 -left-6 bg-surface-container-highest p-6 rounded-xl shadow-xl max-w-xs">
          <p className="font-label font-bold text-secondary mb-1 uppercase tracking-widest text-xs">
            Rooted in Lahore
          </p>
          <p className="text-sm text-on-surface-variant">
            Every spice is freshly ground. Every recipe carries the memory of a Lahori kitchen.
          </p>
        </div>
      </div>
    </section>
  );
}
