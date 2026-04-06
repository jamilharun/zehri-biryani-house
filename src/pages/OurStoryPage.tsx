import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import Footer from '../components/layout/Footer';
import UrduWatermark from '../components/shared/UrduWatermark';
import StoryHero from '../components/story/StoryHero';
import CraftSection from '../components/story/CraftSection';
import SpaceSection from '../components/story/SpaceSection';
import TransparentHospitality from '../components/story/TransparentHospitality';

export default function OurStoryPage() {
  return (
    <>
      <Navbar activePage="our-story" />
      <main className="relative overflow-hidden">
        {/* Decorative watermarks */}
        <UrduWatermark
          size="text-[20rem]"
          className="top-20 -left-20"
          color="text-secondary"
          animationDuration="20s"
        />
        <UrduWatermark
          size="text-[20rem]"
          className="bottom-40 -right-20"
          color="text-secondary"
          animationDuration="26s"
        />

        {/* Desktop: Full story layout */}
        <div className="hidden md:block">
          <StoryHero />
          <CraftSection />
          <SpaceSection />
          <TransparentHospitality />
        </div>

        {/* Mobile: Editorial narrative layout */}
        <div className="md:hidden px-4 pt-10 pb-8 space-y-10">
          {/* Mobile hero — text only */}
          <div>
            <span className="font-label text-primary font-semibold tracking-widest text-sm block mb-3 uppercase">
              Heritage &amp; Legacy
            </span>
            <h1 className="font-headline text-4xl font-extrabold text-on-background leading-tight mb-6">
              Aghaz:{' '}
              <span className="text-secondary">The Beginning.</span>
            </h1>
            <p className="text-on-surface-variant font-body leading-loose mb-6">
              In Urdu, <span className="font-bold text-secondary">Aghaz (اغاز)</span> means 'The
              Beginning'. It represents our commitment to returning to the origins of authentic
              Pakistani cuisine — where every spice is freshly ground and every recipe tells the
              story of our ancestors.
            </p>
          </div>

          {/* First image — with rotate artifact */}
          <div className="relative">
            <div
              className="absolute -inset-2 bg-secondary-container opacity-20 rounded-xl -rotate-2"
              aria-hidden="true"
            />
            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
              <img
                src="/images/spice-market.jpg"
                alt="Vintage spice market photograph with colorful spices"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md p-3 rounded-lg border-l-4 border-primary max-w-[200px]">
                <p className="text-xs font-label font-bold text-on-surface">
                  The Secret is in the Soil
                </p>
                <p className="text-xs text-on-surface-variant mt-1">
                  Spices sourced directly from Punjab farms.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative block 1 */}
          <div>
            <h2 className="font-headline text-2xl font-bold text-secondary mb-4">
              The Secret is in the Soil
            </h2>
            <p className="text-on-surface-variant font-body leading-loose">
              Every ingredient at Aghaz is sourced with intention. Our spices travel from the
              fertile plains of Punjab, our meats from trusted halal farms, and our rice from the
              aged basmati fields of the Himalayan foothills. Nothing arrives without a story.
            </p>
          </div>

          {/* Second image */}
          <div className="relative">
            <div
              className="absolute -inset-2 bg-primary-container opacity-20 rounded-xl rotate-1"
              aria-hidden="true"
            />
            <div className="relative rounded-xl overflow-hidden aspect-[4/5]">
              <img
                src="/images/kitchen-fire.jpg"
                alt="Chef tossing biryani over open flame"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md p-3 rounded-lg border-l-4 border-primary max-w-[200px]">
                <p className="text-xs font-label font-bold text-on-surface">The Art of Dum</p>
                <p className="text-xs text-on-surface-variant mt-1">
                  Sealed and slow-cooked over a gentle flame.
                </p>
              </div>
            </div>
          </div>

          {/* Narrative block 2 */}
          <div>
            <h2 className="font-headline text-2xl font-bold text-secondary mb-4">
              The Art of Dum
            </h2>
            <p className="text-on-surface-variant font-body leading-loose">
              Dum — the ancient technique of sealing a pot with dough and slow-cooking over
              embers — is the heart of our biryani. The fragrance trapped inside reveals itself
              only at your table. This is not just cooking; it is ceremony.
            </p>
          </div>

          {/* CTA */}
          <div className="pt-4">
            <Link
              to="/menu"
              className="w-full bg-primary text-on-primary py-4 rounded-full font-bold text-lg text-center block active:scale-95 transition-transform"
            >
              Taste the Heritage
            </Link>
          </div>

          {/* Decorative Urdu standalone */}
          <div className="text-center py-6">
            <span
              className="text-6xl text-primary/10 select-none"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              aria-hidden="true"
            >
              اغاز
            </span>
          </div>
        </div>
      </main>

      <div className="hidden md:block">
        <Footer variant="desktop-full" />
      </div>
      <div className="md:hidden">
        <Footer variant="minimal" />
      </div>

      <MobileBottomNav activePage="our-story" />
    </>
  );
}
