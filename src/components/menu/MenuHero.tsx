import HalalBadge from '../shared/HalalBadge';

export default function MenuHero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-16 relative z-10">
      <div className="flex flex-col md:flex-row items-center gap-12">
        {/* Left content */}
        <div className="w-full md:w-1/2 space-y-6">
          <HalalBadge variant="pill" />
          <h1 className="text-6xl md:text-8xl font-headline font-extrabold text-secondary leading-none">
            Our <span className="text-primary-container">Legacy</span>
            <br />
            On A Plate
          </h1>
          <p className="text-on-surface-variant max-w-md font-menu text-lg leading-relaxed">
            From the charcoal pits of Lahore to your table. Every spice is hand-ground, every grain
            of rice meticulously aged.
          </p>
        </div>

        {/* Right — circular image with Since 1988 badge */}
        <div className="w-full md:w-1/2 relative">
          <div className="aspect-square rounded-full overflow-hidden border-8 border-surface-container-highest shadow-2xl relative z-10">
            <img
              src="https://placehold.co/600x600/ffe9e3/944a00?text=Biryani"
              alt="Overhead close-up of premium lamb biryani in a traditional copper pot"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Since 1988 accent */}
          <div className="absolute -bottom-6 -left-6 bg-primary-container p-8 rounded-xl text-on-primary shadow-xl z-20">
            <span className="font-headline font-bold text-4xl block">Since</span>
            <span className="font-headline font-extrabold text-5xl">1988</span>
          </div>
        </div>
      </div>
    </section>
  );
}
