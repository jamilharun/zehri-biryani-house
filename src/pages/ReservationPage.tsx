import Navbar from '../components/layout/Navbar';
import MobileBottomNav from '../components/layout/MobileBottomNav';
import Footer from '../components/layout/Footer';
import UrduWatermark from '../components/shared/UrduWatermark';
import ReservationHero from '../components/reservation/ReservationHero';
import ReservationForm from '../components/reservation/ReservationForm';
import ContactInfoCard from '../components/reservation/ContactInfoCard';
import MapCard from '../components/reservation/MapCard';
import CommitmentSection from '../components/reservation/CommitmentSection';
import { BRANCHES } from '../data/contactInfo';

export default function ReservationPage() {
  const branch = BRANCHES[0];

  return (
    <>
      <Navbar activePage="reservations" />
      <main className="relative min-h-screen overflow-hidden">
        {/* Decorative watermarks */}
        <UrduWatermark
          size="text-[20rem]"
          className="top-20 -left-20"
          color="text-secondary"
          animationDuration="20s"
        />
        <UrduWatermark
          size="text-[20rem]"
          className="bottom-20 -right-20"
          color="text-secondary"
          animationDuration="27s"
        />

        {/* Desktop: Hero */}
        <div className="hidden md:block">
          <ReservationHero />
        </div>

        {/* Mobile: Hero — full-bleed image */}
        <div className="md:hidden relative h-[265px] overflow-hidden">
          <img
            src="/images/reservation-hero.jpg"
            alt="Table setting with candlelight for a Pakistani dining experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
          <div className="absolute bottom-6 left-6">
            <h1 className="text-4xl font-headline font-extrabold text-on-background leading-tight">
              Reserve Your Table
            </h1>
            <p className="text-secondary font-body text-sm mt-1">
              Join the Heritage Experience
            </p>
          </div>
        </div>

        {/* Desktop: Booking & Info Grid */}
        <section className="hidden md:block max-w-7xl mx-auto px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <ReservationForm />
            <div className="lg:col-span-5 flex flex-col gap-8">
              <ContactInfoCard />
              <MapCard />
            </div>
          </div>
        </section>

        {/* Mobile: Floating form card (-mt-8 overlapping hero) */}
        <div className="md:hidden px-4 -mt-8 relative z-10">
          <div className="bg-surface-container-lowest rounded-xl p-6 shadow-2xl">
            <h2 className="text-2xl font-headline font-bold text-secondary mb-1">
              Reserve Your Table
            </h2>
            <p className="text-on-surface-variant text-sm font-body mb-6">
              We'll confirm your booking within 24 hours.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-label font-semibold text-on-surface-variant mb-1 ml-1">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-label font-semibold text-on-surface-variant mb-1 ml-1">
                  Phone
                </label>
                <input
                  type="tel"
                  placeholder="+63 (XXX) XXX-XXXX"
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-label font-semibold text-on-surface-variant mb-1 ml-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-label font-semibold text-on-surface-variant mb-1 ml-1">
                    Time
                  </label>
                  <select className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm">
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-sm font-label font-semibold text-on-surface-variant mb-1 ml-1">
                  Special Requests
                </label>
                <textarea
                  placeholder="Birthday celebration, dietary requirements..."
                  rows={3}
                  className="w-full bg-surface-container-high border-none rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-base active:scale-95 transition-transform shadow-lg"
              >
                Confirm Reservation
              </button>
            </form>
          </div>

          {/* Mobile: Find Us section */}
          <div className="mt-8">
            <h2 className="text-2xl font-headline font-bold text-secondary mb-4">Find Us</h2>
            <div className="space-y-3">
              {[
                { icon: 'location_on', label: 'Location', value: branch.address },
                { icon: 'call',        label: 'Phone',    value: branch.phone },
                { icon: 'schedule',    label: 'Hours',    value: branch.hours },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-surface-container-low rounded-xl p-4 flex items-start gap-3"
                >
                  <span className="material-symbols-outlined text-primary mt-0.5" aria-hidden="true">
                    {item.icon}
                  </span>
                  <div>
                    <p className="font-label font-semibold text-sm text-on-surface">{item.label}</p>
                    <p className="text-xs text-on-surface-variant mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile decorative Urdu */}
          <div className="text-center py-8">
            <span
              className="text-6xl text-primary/10 select-none"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              aria-hidden="true"
            >
              اغاز
            </span>
          </div>
        </div>

        <CommitmentSection />
      </main>

      <div className="hidden md:block">
        <Footer variant="desktop-full" />
      </div>
      <div className="md:hidden">
        <Footer variant="minimal" />
      </div>

      <MobileBottomNav activePage="reservations" />
    </>
  );
}
