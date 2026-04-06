import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

const FEATURES = [
  {
    icon: 'accessible',
    title: 'Step-Free Entry',
    desc: 'Full wheelchair access throughout the dining area.',
  },
  {
    icon: 'family_restroom',
    title: 'Family Friendly',
    desc: 'Dedicated prayer room and nursing facilities available.',
  },
  {
    icon: 'sensor_window',
    title: 'Ventilation',
    desc: 'Advanced air filtration for a smoke-free BBQ experience.',
  },
  {
    icon: 'directions_car',
    title: 'Ample Parking',
    desc: 'Complimentary valet and easy access street parking.',
  },
];

export default function TransparentHospitality() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="max-w-7xl mx-auto px-8 py-24 border-t border-outline-variant/10 reveal-hidden">
      <div className="bg-surface-container-highest rounded-3xl p-12 relative overflow-hidden">
        {/* Decorative circle */}
        <div
          className="absolute top-0 right-0 w-64 h-64 bg-secondary/5 rounded-full -mr-32 -mt-32"
          aria-hidden="true"
        />

        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          {/* Left — text + feature grid */}
          <div>
            <h3 className="font-headline text-3xl font-bold text-on-background mb-6 italic">
              Transparent Hospitality
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-8">
              We believe authenticity includes being open and accessible to everyone in our
              community. Our physical space is designed with inclusivity at its core.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {FEATURES.map((f) => (
                <div key={f.title} className="flex flex-col gap-2">
                  <span
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                    aria-hidden="true"
                  >
                    {f.icon}
                  </span>
                  <span className="font-bold text-sm">{f.title}</span>
                  <span className="text-xs text-on-surface-variant">{f.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — map image */}
          <div className="rounded-2xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 h-[400px]">
            <img
              src="/images/map-atmospheric.jpg"
              alt="Map showing the restaurant location in the Cultural District"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
