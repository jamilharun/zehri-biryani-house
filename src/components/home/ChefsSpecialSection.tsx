import { Link } from 'react-router-dom';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';
import FeaturedDishCard from './FeaturedDishCard';
import SideDishCard from './SideDishCard';
import SpiceIndicator from '../shared/SpiceIndicator';
import StarRating from '../shared/StarRating';
import { MENU_ITEMS } from '../../data/menu';

const PLACEHOLDER_FEATURED = '/images/nalli-biryani-special.jpg';
const PLACEHOLDER_SEEKH = '/images/seekh-kebab-special.jpg';
const PLACEHOLDER_BUTTER = '/images/butter-chicken-special.jpg';

const nalliBiryani    = MENU_ITEMS.find((i) => i.id === 'biryani-nalli')!;
const seekhKebab      = MENU_ITEMS.find((i) => i.id === 'bbq-seekh-kebab')!;
const butterChicken   = MENU_ITEMS.find((i) => i.id === 'handi-butter-chicken')!;

export default function ChefsSpecialSection() {
  const sectionRef = useRevealOnScroll<HTMLElement>();

  return (
    <section ref={sectionRef} className="py-24 bg-surface-container-low reveal-hidden">
      <div className="max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl font-headline font-bold text-secondary">Chef's Special</h2>
            <p className="text-on-surface-variant max-w-md mt-2 font-body">
              Steaming, spiced, and served with care. These are the dishes we're known for.
            </p>
          </div>
          <Link
            to="/menu"
            className="text-primary font-bold flex items-center gap-2 group w-fit"
          >
            View Entire Menu
            <span
              className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            >
              east
            </span>
          </Link>
        </div>

        {/* Desktop asymmetric bento grid */}
        <div className="hidden md:grid grid-cols-12 gap-8">
          <FeaturedDishCard
            name={nalliBiryani.name}
            description={nalliBiryani.description}
            price={`₱${nalliBiryani.price.toFixed(2)}`}
            imageSrc={PLACEHOLDER_FEATURED}
            imageAlt="Large copper pot of steaming mutton biryani with long grain saffron rice"
            badge="MOST POPULAR"
          />

          <div className="col-span-5 flex flex-col gap-8">
            <SideDishCard
              name={seekhKebab.name}
              description={seekhKebab.description}
              price={`₱${seekhKebab.price.toFixed(2)}`}
              imageSrc={PLACEHOLDER_SEEKH}
              imageAlt="Skewer of charred seekh kebabs on a bed of fresh mint and onion rings"
              rating={5}
              keyIngredients={seekhKebab.keyIngredients ?? []}
            />
            <SideDishCard
              name={butterChicken.name}
              description={butterChicken.description}
              price={`₱${butterChicken.price.toFixed(2)}`}
              imageSrc={PLACEHOLDER_BUTTER}
              imageAlt="Close-up of butter chicken in a clay bowl with ginger julienne"
              rating={5}
              keyIngredients={butterChicken.keyIngredients ?? []}
            />
          </div>
        </div>

        {/* Mobile single-column cards */}
        <div className="md:hidden space-y-8">
          {[
            {
              item: nalliBiryani,
              badge: 'Most Popular',
              imageSrc: PLACEHOLDER_FEATURED,
            },
            {
              item: seekhKebab,
              badge: 'Coal-Fired',
              imageSrc: PLACEHOLDER_SEEKH,
            },
            {
              item: butterChicken,
              badge: "Chef's Choice",
              imageSrc: PLACEHOLDER_BUTTER,
            },
          ].map(({ item, badge, imageSrc }, i) => (
            <div key={item.id} className="relative" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl">
                <img
                  src={imageSrc}
                  alt={item.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="-mt-12 relative bg-surface-container-low/95 backdrop-blur-sm mx-4 mb-4 rounded-2xl p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-headline font-bold text-secondary text-xl">{item.name}</h3>
                  <span className="text-lg font-headline font-bold text-[#F9A825]">
                    ₱{item.price.toFixed(2)}
                  </span>
                </div>
                <SpiceIndicator level={item.spiceLevel} style="fire" />
                <span className="inline-block mt-2 text-xs font-label font-bold bg-surface-container-highest px-3 py-1 rounded-full text-on-surface-variant">
                  {badge}
                </span>
                <p className="mt-2 text-sm text-on-surface-variant font-body">{item.description}</p>
                <div className="mt-3">
                  <StarRating rating={5} size="sm" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
