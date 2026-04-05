import Navbar from '../components/layout/Navbar';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import Footer from '../components/layout/Footer';
import UrduWatermark from '../components/shared/UrduWatermark';
import HeroSection from '../components/home/HeroSection';
import HalalFloatingBadge from '../components/home/HalalFloatingBadge';
import ChefsSpecialSection from '../components/home/ChefsSpecialSection';
import TransparencySection from '../components/home/TransparencySection';
import CtaBanner from '../components/home/CtaBanner';

export default function HomePage() {
  return (
    <>
      <Navbar activePage="home" />
      <main className="relative overflow-hidden">
        {/* Decorative Urdu watermarks */}
        <UrduWatermark
          size="text-[20rem]"
          className="top-20 -left-20"
          color="text-primary"
          animationDuration="20s"
        />
        <UrduWatermark
          size="text-[20rem]"
          className="bottom-40 -right-20"
          color="text-primary"
          animationDuration="28s"
        />

        <HeroSection />
        <HalalFloatingBadge />
        <ChefsSpecialSection />
        <TransparencySection />
        <CtaBanner />
      </main>

      {/* Desktop footer */}
      <div className="hidden md:block">
        <Footer variant="desktop-full" />
      </div>
      {/* Mobile footer */}
      <div className="md:hidden">
        <Footer variant="minimal" />
      </div>

      <MobileBottomNav activePage="home" />
    </>
  );
}
