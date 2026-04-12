import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrolled } from '../../hooks/useScrolled';

export type ActivePage = 'home' | 'menu' | 'our-story' | 'reservations';

interface NavbarProps {
  activePage: ActivePage;
}

const NAV_LINKS: { label: string; page: ActivePage; to: string }[] = [
  { label: 'Home',         page: 'home',         to: '/' },
  { label: 'Menu',         page: 'menu',         to: '/menu' },
  { label: 'Our Story',    page: 'our-story',    to: '/our-story' },
  { label: 'Reservations', page: 'reservations', to: '/reservations' },
];

export default function Navbar({ activePage }: NavbarProps) {
  const scrolled = useScrolled(20);
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-md transition-colors duration-300 ${
          scrolled ? 'bg-surface/70' : 'bg-transparent'
        }`}
      >
        <nav className="flex justify-between items-center px-8 py-4 w-full max-w-7xl mx-auto">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-2xl font-headline font-bold text-secondary tracking-tight">
              Zehri
            </span>
            <span
              className="text-xl text-secondary opacity-50 leading-none"
              style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              aria-hidden="true"
            >
              زہری
            </span>
          </div>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map(({ label, page, to }) => (
              <Link
                key={page}
                to={to}
                className={`font-headline tracking-tight transition-colors duration-300 ${
                  activePage === page
                    ? 'text-primary-container font-semibold border-b-2 border-primary-container pb-1'
                    : 'text-secondary font-medium hover:text-primary-container'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-primary cursor-pointer scale-95 active:scale-90 transition-transform hidden md:inline-block"
              aria-label="Halal verification"
            >
              verified_user
            </span>
            {/* Mobile hamburger */}
            <button
              className="md:hidden material-symbols-outlined text-secondary"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open menu"
            >
              menu
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile slide-in drawer */}
      {drawerOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setDrawerOpen(false)}
            aria-hidden="true"
          />
          {/* Drawer panel */}
          <div className="absolute top-0 right-0 h-full w-72 bg-surface-container-lowest shadow-2xl flex flex-col overflow-hidden">
            <div className="relative flex-1 overflow-y-auto">
              {/* Watermark in drawer */}
              <span
                aria-hidden="true"
                className="absolute bottom-20 -right-8 text-[12rem] text-primary opacity-[0.03] pointer-events-none select-none leading-none"
                style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              >
                زہری
              </span>

              {/* Close button */}
              <div className="flex justify-between items-center px-6 py-5 border-b border-outline-variant/10">
                <span className="text-xl font-headline font-bold text-secondary">Menu</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  className="material-symbols-outlined text-on-surface-variant"
                  aria-label="Close menu"
                >
                  close
                </button>
              </div>

              {/* Nav links */}
              <nav className="relative z-10 py-4">
                {NAV_LINKS.map(({ label, page, to }) => (
                  <Link
                    key={page}
                    to={to}
                    onClick={() => setDrawerOpen(false)}
                    className={`block px-6 py-4 text-xl font-headline border-b border-outline-variant/10 transition-colors duration-200 ${
                      activePage === page
                        ? 'text-primary-container font-semibold'
                        : 'text-secondary hover:text-primary-container'
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
