import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

export default function HalalPromoBanner() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-8 py-20 reveal-hidden">
      <div className="bg-secondary rounded-[2rem] p-12 text-on-secondary relative overflow-hidden flex flex-col md:flex-row items-center justify-between">
        {/* Decorative glow */}
        <div
          className="absolute -right-20 -top-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 max-w-xl space-y-6">
          <h2 className="text-4xl font-headline font-extrabold leading-tight">
            Authenticity in every bite. Certified 100% Halal.
          </h2>
          <p className="opacity-80 text-lg font-body">
            We source only the finest grain-fed meats and hand-selected whole spices to ensure the
            heritage of Aghaz remains untainted.
          </p>
          <button className="bg-primary-container text-on-primary-container px-8 py-4 rounded-xl font-headline font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-lg">
            View Certification
          </button>
        </div>

        {/* Decorative badge circle */}
        <div className="relative z-10 mt-12 md:mt-0 flex-shrink-0">
          <div className="w-48 h-48 border-4 border-dashed border-on-secondary/30 rounded-full flex items-center justify-center p-4">
            <div className="w-full h-full bg-on-secondary/10 rounded-full flex items-center justify-center text-center p-4">
              <span className="font-label font-black text-xs tracking-widest uppercase text-on-secondary">
                Traditional Methods Only
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
