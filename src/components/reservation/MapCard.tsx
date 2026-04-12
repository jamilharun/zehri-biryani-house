import { BRANCHES } from "../../data/contactInfo";

export default function MapCard() {
  const branch = BRANCHES[0];

  return (
    <div className="flex-grow rounded-4xl overflow-hidden shadow-sm border border-outline-variant/20 min-h-[300px] relative">
      <img
        src="/images/map-location-placeholder.jpg"
        alt="Map showing the Zehri Biryani House location in the Cultural District"
        className="w-full h-full object-cover grayscale opacity-60"
      />
      <div className="absolute inset-0 bg-primary/10 flex items-center justify-center">
        <a
          href={branch.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-surface-container-lowest px-6 py-3 rounded-full shadow-lg flex items-center gap-3 hover:shadow-xl transition-shadow"
        >
          <span
            className="material-symbols-outlined text-primary"
            aria-hidden="true"
          >
            pin_drop
          </span>
          <span className="font-label font-bold text-on-surface">
            View on Google Maps
          </span>
        </a>
      </div>
    </div>
  );
}
