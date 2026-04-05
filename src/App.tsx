import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import OurStoryPage from './pages/OurStoryPage';
import ReservationPage from './pages/ReservationPage';
import DisclaimerBanner from './components/shared/DisclaimerBanner';

export default function App() {
  return (
    <>
      <DisclaimerBanner />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/our-story" element={<OurStoryPage />} />
        <Route path="/reservations" element={<ReservationPage />} />
      </Routes>
    </>
  );
}
