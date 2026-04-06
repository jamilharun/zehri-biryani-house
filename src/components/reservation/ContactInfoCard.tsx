import { BRANCHES } from "../../data/contactInfo";

export default function ContactInfoCard() {
  const branch = BRANCHES[0];

  return (
    <div className="bg-secondary p-10 rounded-4xl text-on-secondary">
      <h3 className="text-2xl font-headline font-bold mb-6">Contact Details</h3>
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <span
            className="material-symbols-outlined text-secondary-container mt-1"
            aria-hidden="true"
          >
            location_on
          </span>
          <div>
            <p className="font-bold">Main Location</p>
            <p className="text-secondary-container/80 text-sm">
              {branch.address}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span
            className="material-symbols-outlined text-secondary-container mt-1"
            aria-hidden="true"
          >
            call
          </span>
          <div>
            <p className="font-bold">Reservations Line</p>
            <p className="text-secondary-container/80 text-sm">
              {branch.phone}
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4">
          <span
            className="material-symbols-outlined text-secondary-container mt-1"
            aria-hidden="true"
          >
            schedule
          </span>
          <div>
            <p className="font-bold">Opening Hours</p>
            <p className="text-secondary-container/80 text-sm">
              {branch.hours}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
