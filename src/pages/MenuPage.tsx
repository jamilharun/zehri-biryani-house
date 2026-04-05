import { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import Footer from '../components/layout/Footer';
import UrduWatermark from '../components/shared/UrduWatermark';
import MenuHero from '../components/menu/MenuHero';
import CategoryTabs from '../components/menu/CategoryTabs';
import MenuCategory from '../components/menu/MenuCategory';
import MenuItemCard from '../components/menu/MenuItemCard';
import VisualBreak from '../components/menu/VisualBreak';
import HalalPromoBanner from '../components/menu/HalalPromoBanner';
import SectionHeader from '../components/shared/SectionHeader';
import SpiceIndicator from '../components/shared/SpiceIndicator';
import { MENU_ITEMS, MENU_CATEGORIES, type MenuCategory as MenuCategoryType } from '../data/menu';
import { useRevealOnScroll } from '../hooks/useRevealOnScroll';

export default function MenuPage() {
  const [maxSpice, setMaxSpice] = useState(5);
  const [activeCategory, setActiveCategory] = useState<MenuCategoryType>('biryani');

  const biryaniItems     = MENU_ITEMS.filter((i) => i.category === 'biryani');
  const bbqItems         = MENU_ITEMS.filter((i) => i.category === 'bbq');
  const handiItems       = MENU_ITEMS.filter((i) => i.category === 'handi-karahi');
  const sidesItems       = MENU_ITEMS.filter((i) => i.category === 'sides');
  const drinksItems      = MENU_ITEMS.filter((i) => i.category === 'drinks');
  const dessertsItems    = MENU_ITEMS.filter((i) => i.category === 'desserts');

  const mobileActiveItems = MENU_ITEMS.filter((i) => i.category === activeCategory);

  const filterRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <>
      <Navbar activePage="menu" />
      <main className="relative min-h-screen overflow-hidden">
        {/* Decorative watermarks */}
        <UrduWatermark
          size="text-[20rem]"
          className="top-20 -left-20"
          color="text-primary"
          animationDuration="22s"
        />
        <UrduWatermark
          size="text-[20rem]"
          className="bottom-40 -right-20 rotate-12"
          color="text-primary"
          animationDuration="30s"
        />

        {/* Desktop: Menu Hero */}
        <div className="hidden md:block">
          <MenuHero />
        </div>

        {/* Mobile: Page header */}
        <div className="md:hidden px-4 pt-8 pb-4">
          <h1 className="font-headline text-4xl font-extrabold text-secondary leading-tight">
            Dastarkhwan /
            <br />
            <span className="text-primary-container">The Grand Menu</span>
          </h1>
          <p className="text-on-surface-variant mt-2 font-body text-sm">
            Our full spread — biryani, BBQ, and everything in between.
          </p>
        </div>

        {/* Mobile: Category tabs */}
        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />

        {/* Desktop: Spice filter bar */}
        <div className="hidden md:block max-w-7xl mx-auto px-8 mt-8">
          <div
            ref={filterRef}
            className="flex items-center gap-6 bg-surface-container-low rounded-2xl px-6 py-4 reveal-hidden"
          >
            <span className="font-label text-sm text-on-surface-variant font-semibold whitespace-nowrap">
              Show up to:
            </span>
            <div className="flex gap-3">
              {([1, 2, 3, 4, 5] as const).map((level) => (
                <button
                  key={level}
                  onClick={() => setMaxSpice(level)}
                  className={`flex items-center gap-1.5 px-4 py-2 rounded-full font-label text-sm font-semibold transition-all duration-200 ${
                    maxSpice === level
                      ? 'bg-primary-container text-on-primary shadow-md'
                      : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                  }`}
                  aria-label={`Show items up to spice level ${level}`}
                  aria-pressed={maxSpice === level}
                >
                  <SpiceIndicator level={level} style="dots" />
                </button>
              ))}
              {maxSpice < 5 && (
                <button
                  onClick={() => setMaxSpice(5)}
                  className="text-xs text-primary font-label font-semibold hover:underline"
                >
                  Show all
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Desktop: Full menu grid */}
        <section className="hidden md:block max-w-7xl mx-auto px-8 py-20 bg-surface-container-low relative z-10">
          <MenuCategory
            title="Biryani"
            subtitle="THE CROWN JEWEL"
            items={biryaniItems}
            maxSpice={maxSpice}
          />

          <VisualBreak />

          <MenuCategory
            title="BBQ"
            subtitle="COAL-FIRED PERFECTION"
            items={bbqItems}
            maxSpice={maxSpice}
          />

          <MenuCategory
            title="Handi & Karahi"
            subtitle="SLOW-COOKED MASTERY"
            items={handiItems}
            maxSpice={maxSpice}
          />

          {/* Sides + Drinks two-column */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-8">
            <div>
              <SectionHeader title="Sides" size="md" />
              <div className="space-y-8">
                {sidesItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <h3 className="text-xl font-menu font-bold text-on-surface">{item.name}</h3>
                    <span className="text-lg font-menu font-bold text-primary-container">
                      ₱{item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeader title="Drinks" size="md" />
              <div className="space-y-8">
                {drinksItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <h3 className="text-xl font-menu font-bold text-on-surface">{item.name}</h3>
                    <span className="text-lg font-menu font-bold text-primary-container">
                      ₱{item.price.toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Desserts */}
          <MenuCategory
            title="Desserts"
            subtitle="SWEET ENDINGS"
            items={dessertsItems}
            maxSpice={maxSpice}
          />
        </section>

        {/* Mobile: Card grid for active category */}
        <section className="md:hidden px-4 py-6 pb-24">
          <h2 className="font-headline text-2xl font-bold text-secondary mb-4">
            {MENU_CATEGORIES.find((c) => c.id === activeCategory)?.displayLabel}
          </h2>
          <div className="grid grid-cols-1 gap-6">
            {mobileActiveItems.map((item) => (
              <MenuItemCard key={item.id} item={item} />
            ))}
          </div>
        </section>

        <HalalPromoBanner />
      </main>

      <div className="hidden md:block">
        <Footer variant="desktop-full" />
      </div>
      <div className="md:hidden">
        <Footer variant="minimal" />
      </div>

      <MobileBottomNav activePage="menu" />
    </>
  );
}
