import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export default function SpaceSection() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-8 py-24 reveal-hidden">
      <div className="grid lg:grid-cols-5 gap-4">
        {/* Left text content */}
        <div className="lg:col-span-2 flex flex-col justify-center pr-0 lg:pr-8">
          <h2 className="font-headline text-4xl font-bold text-on-background mb-6">
            A Piece of Pakistan in the Heart of the City
          </h2>
          <p className="text-on-surface-variant mb-8 leading-relaxed">
            Step into a space designed to reflect the warmth of a Pakistani home. From our signature
            vibrant orange seating — representing the zest of life — to hand-painted truck art motifs
            that adorn our walls, every corner is a tribute to our heritage.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high border-l-4 border-primary">
              <span className="material-symbols-outlined text-primary" aria-hidden="true">
                wb_sunny
              </span>
              <span className="text-sm font-medium">
                Golden warm lighting for a cozy evening atmosphere.
              </span>
            </div>
            <div className="flex items-center gap-4 p-4 rounded-xl bg-surface-container-high border-l-4 border-secondary">
              <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                palette
              </span>
              <span className="text-sm font-medium">Curated Pakistani artwork and cultural motifs.</span>
            </div>
          </div>
        </div>

        {/* Right image masonry */}
        <div className="lg:col-span-3 grid grid-cols-2 gap-4 mt-8 lg:mt-0">
          <img
            src="https://placehold.co/400x600/ffddb5/835400?text=Interior"
            alt="Modern restaurant interior featuring vibrant orange velvet chairs and dark wood tables"
            className="w-full h-full object-cover rounded-xl shadow-lg"
          />
          <div className="grid gap-4">
            <img
              src="https://placehold.co/400x300/ffe9e3/944a00?text=Truck+Art"
              alt="Colorful Pakistani truck art painted on a restaurant wall"
              className="w-full aspect-square object-cover rounded-xl shadow-lg"
            />
            <img
              src="https://placehold.co/400x300/ffddb5/835400?text=Brass+Lamp"
              alt="Traditional Pakistani brass lamp casting intricate shadows on a textured cream wall"
              className="w-full aspect-square object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
