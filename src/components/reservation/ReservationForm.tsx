import { useState } from 'react';
import GuestCounter from './GuestCounter';

const inputClass =
  'w-full bg-surface-container-high border-none rounded-sm px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/20 text-on-surface font-body text-sm';
const labelClass = 'block text-sm font-label font-semibold text-on-surface-variant mb-1 ml-1';

export default function ReservationForm() {
  const [guests, setGuests] = useState(2);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="lg:col-span-7 bg-surface-container-lowest p-10 rounded-full shadow-sm border border-outline-variant/15 flex flex-col items-center justify-center text-center min-h-[400px]">
        <span
          className="material-symbols-outlined text-secondary text-6xl mb-4"
          style={{ fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
          aria-hidden="true"
        >
          event_available
        </span>
        <h2 className="text-3xl font-headline font-bold text-secondary mb-2">Reservation Received!</h2>
        <p className="text-on-surface-variant max-w-sm">
          We'll confirm your booking via phone. Prepare for the feast of a lifetime.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-8 bg-primary text-on-primary px-8 py-3 rounded-xl font-bold hover:bg-primary-container transition-colors"
        >
          Make Another Reservation
        </button>
      </div>
    );
  }

  return (
    <div className="lg:col-span-7 bg-surface-container-lowest p-10 rounded-full shadow-sm border border-outline-variant/15">
      <div className="mb-10">
        <h2 className="text-3xl font-headline font-bold text-secondary mb-2">Reserve Your Table</h2>
        <p className="text-on-surface-variant font-body">
          Complete the form below and we'll prepare your spice-filled journey.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-1">
            <label className={labelClass}>Full Name</label>
            <input
              type="text"
              className={inputClass}
              placeholder="Zayan Malik"
              required
            />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Phone Number</label>
            <input
              type="tel"
              className={inputClass}
              placeholder="+63 (XXX) XXX-XXXX"
              required
            />
          </div>
        </div>

        {/* Date + Time + Guests */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-1">
            <label className={labelClass}>Date</label>
            <input type="date" className={inputClass} required />
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Time</label>
            <select className={inputClass} required>
              <option value="">Select time</option>
              <option>11:00 AM</option>
              <option>12:00 PM</option>
              <option>1:00 PM</option>
              <option>2:00 PM</option>
              <option>6:00 PM</option>
              <option>7:00 PM</option>
              <option>8:00 PM</option>
              <option>9:00 PM</option>
              <option>10:00 PM</option>
            </select>
          </div>
          <div className="space-y-1">
            <label className={labelClass}>Guests</label>
            {/* Desktop: select dropdown */}
            <select className={`${inputClass} hidden md:block`}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                <option key={n} value={n}>
                  {n} {n === 1 ? 'Person' : 'Persons'}
                </option>
              ))}
              <option value="9">9+ Persons</option>
            </select>
            {/* Mobile: stepper */}
            <div className="md:hidden bg-surface-container-high rounded-sm px-4 py-2">
              <GuestCounter value={guests} onChange={setGuests} min={1} max={20} />
            </div>
          </div>
        </div>

        {/* Special Requests */}
        <div className="space-y-1">
          <label className={labelClass}>Special Occasion / Requests</label>
          <textarea
            className={`${inputClass} resize-none`}
            placeholder="Birthday celebration, high chair needed, dietary requirements..."
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:bg-primary-container transition-all active:scale-95 shadow-lg"
        >
          Confirm Reservation
        </button>
      </form>
    </div>
  );
}
