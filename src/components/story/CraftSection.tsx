import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import CraftImageTile from './CraftImageTile';

const CRAFT_IMAGES = [
  {
    src: '/images/bbq-grill.jpg',
    alt: 'Pakistani chef skillfully rotating skewers of seekh kebabs over glowing charcoal',
    caption: 'The Art of BBQ',
    offset: false,
  },
  {
    src: '/images/dum-biryani-craft.jpg',
    alt: 'Chef lifting the dum seal from a massive biryani pot releasing fragrant steam',
    caption: 'Mastering the Dum',
    offset: true,
  },
  {
    src: '/images/naan-hands.jpg',
    alt: 'Artisanal hands preparing fresh naan bread dough against rustic wooden background',
    caption: 'Hand-Kneaded Tradition',
    offset: false,
  },
];

export default function CraftSection() {
  const ref = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={ref} className="bg-surface-container-low py-24 reveal-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header row */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-headline text-4xl font-bold text-secondary mb-6">
              Authenticity in Every Flame
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Our kitchen is led by master artisans who have spent decades perfecting the art of BBQ
              and slow-cooked Biryani. No shortcuts. No artificial flavorings.
            </p>
          </div>
          <div className="bg-secondary-container text-on-secondary-container px-6 py-4 rounded-xl flex items-center gap-3 flex-shrink-0">
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
              aria-hidden="true"
            >
              restaurant
            </span>
            <span className="font-label font-bold">100% HALAL CERTIFIED</span>
          </div>
        </div>

        {/* Three-image grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CRAFT_IMAGES.map((img, i) => (
            <div
              key={img.caption}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <CraftImageTile
                src={img.src}
                alt={img.alt}
                caption={img.caption}
                offset={img.offset}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
