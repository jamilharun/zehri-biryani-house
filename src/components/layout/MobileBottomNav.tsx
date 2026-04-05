import { Link } from 'react-router-dom';
import type { ActivePage } from './Navbar';

interface MobileBottomNavProps {
  activePage: ActivePage;
}

interface TabItem {
  icon: string;
  label: string;
  to: string;
  page: ActivePage | null;
  isFab?: boolean;
}

const TABS: TabItem[] = [
  { icon: 'restaurant_menu', label: 'Dastarkhwan', to: '/menu',         page: 'menu' },
  { icon: 'outdoor_grill',   label: 'Handi',       to: '/menu#bbq',     page: null },
  { icon: 'rice_bowl',       label: '',            to: '/menu',         page: null, isFab: true },
  { icon: 'history',         label: 'Heritage',    to: '/our-story',    page: 'our-story' },
  { icon: 'location_on',     label: 'Find Us',     to: '/reservations', page: 'reservations' },
];

export default function MobileBottomNav({ activePage }: MobileBottomNavProps) {
  return (
    <nav
      className="fixed bottom-0 left-0 w-full z-50 md:hidden bg-surface-container-high/95 backdrop-blur-lg h-20 rounded-t-3xl shadow-2xl"
      aria-label="Mobile navigation"
    >
      <div className="flex justify-around items-center h-full px-4">
        {TABS.map((tab) => {
          const isActive = tab.page !== null && activePage === tab.page;
          const isReservationsActive = activePage === 'reservations';

          if (tab.isFab) {
            return (
              <Link
                key="fab"
                to={tab.to}
                className="relative -top-6 bg-primary text-on-primary w-14 h-14 rounded-2xl flex items-center justify-center shadow-xl border-4 border-surface"
                aria-label="Quick menu access"
              >
                <span
                  className="material-symbols-outlined"
                  style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24" }}
                  aria-hidden="true"
                >
                  {tab.icon}
                </span>
              </Link>
            );
          }

          // Special case: "Find Us" tab active state shows calendar_month on reservations page
          const displayIcon =
            tab.page === 'reservations' && isReservationsActive ? 'calendar_month' : tab.icon;

          return (
            <Link
              key={tab.label}
              to={tab.to}
              className={`flex flex-col items-center gap-1 min-w-[44px] ${
                isActive ? 'text-primary-container' : 'text-secondary'
              }`}
              aria-label={tab.label}
            >
              <span
                className="material-symbols-outlined text-[22px]"
                style={{
                  fontVariationSettings: `'FILL' ${isActive ? 1 : 0}, 'wght' 400, 'GRAD' 0, 'opsz' 24`,
                }}
                aria-hidden="true"
              >
                {displayIcon}
              </span>
              {tab.label && (
                <span className="text-[10px] font-label font-semibold leading-none">
                  {tab.label}
                </span>
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
