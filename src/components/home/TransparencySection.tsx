import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import UrduWatermark from '../shared/UrduWatermark';
import HalalBadge from '../shared/HalalBadge';

export default function TransparencySection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-24 bg-surface text-on-surface relative overflow-hidden reveal-hidden">
      <UrduWatermark
        size="text-[300px]"
        className="bottom-0 right-0 -mb-20 -mr-20"
        color="text-primary"
        animationDuration="18s"
      />

      {/* Desktop layout */}
      <div className="hidden md:block max-w-4xl mx-auto px-8 relative z-10 text-center">
        <span
          className="material-symbols-outlined text-secondary text-5xl mb-6 block"
          aria-hidden="true"
        >
          info
        </span>
        <h2 className="text-4xl font-headline font-bold text-secondary mb-8">
          No Secrets, Only Spices.
        </h2>
        <div className="bg-surface-container-high p-10 rounded-full border border-outline-variant/30 space-y-6">
          <p className="font-body text-lg leading-relaxed">
            We believe in hospitality that leaves no surprises. Our heritage building brings charm
            and some practical considerations we want you to know about before you arrive.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary" aria-hidden="true">
                warning
              </span>
              <div>
                <h4 className="font-bold text-secondary">High Steps</h4>
                <p className="text-sm text-on-surface-variant">
                  Entrance features two high historic stone steps. Assistance is always available.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary" aria-hidden="true">
                waves
              </span>
              <div>
                <h4 className="font-bold text-secondary">Slippery Floors</h4>
                <p className="text-sm text-on-surface-variant">
                  Our polished limestone floors can be slippery when wet. Please step with care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden max-w-xl mx-auto px-8 relative z-10">
        <UrduWatermark
          text="خالص"
          size="text-[12rem]"
          className="-top-8 -right-8"
          color="text-secondary"
          animationDuration="22s"
        />
        <div className="text-center mb-8">
          <HalalBadge variant="pill" />
        </div>
        <h2 className="text-3xl font-headline font-bold text-secondary mb-4 text-center">
          No Secrets, Only Spices.
        </h2>
        <p className="text-on-surface-variant font-body leading-relaxed text-center mb-8">
          We believe in hospitality that leaves no surprises. Our heritage building brings charm and
          some practical considerations we want you to know about.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {[
            { icon: 'psychiatry', title: 'Halal', desc: '100% certified halal ingredients, every day.' },
            { icon: 'agriculture', title: 'Farm Direct', desc: 'Spices sourced fresh from trusted farms.' },
            { icon: 'warning', title: 'High Steps', desc: 'Two stone steps at the entrance. Assistance always available.' },
            { icon: 'waves', title: 'Stone Floors', desc: 'Historic limestone floors — step with care when wet.' },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-surface-container-highest p-6 rounded-2xl flex flex-col gap-2"
            >
              <span className="material-symbols-outlined text-primary" aria-hidden="true">
                {item.icon}
              </span>
              <h4 className="font-bold text-secondary text-sm">{item.title}</h4>
              <p className="text-xs text-on-surface-variant">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
