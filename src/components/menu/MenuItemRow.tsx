import type { MenuItem } from "../../data/menu";
import SpiceIndicator from "../shared/SpiceIndicator";

interface MenuItemRowProps {
  item: MenuItem;
  maxSpice: number;
  index?: number;
}

const BADGE_STYLES: Record<string, string> = {
  signature: "bg-secondary-container text-on-secondary-container",
  "chefs-choice": "bg-tertiary-container/30 text-on-tertiary-container",
  "most-popular": "bg-primary-fixed text-on-primary-fixed",
  new: "bg-error-container text-on-error-container",
};

const BADGE_LABELS: Record<string, string> = {
  signature: "Signature",
  "chefs-choice": "Chef's Choice",
  "most-popular": "Most Popular",
  new: "New",
};

export default function MenuItemRow({
  item,
  maxSpice,
  index = 0,
}: MenuItemRowProps) {
  const filtered = item.spiceLevel > maxSpice;

  return (
    <div
      className={`flex justify-between items-start group transition-opacity duration-300 ${
        filtered ? "opacity-40 pointer-events-none" : "opacity-100"
      }`}
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      <div className="space-y-2 flex-1 pr-4">
        <div className="flex items-center gap-2 flex-wrap">
          <h3 className="text-2xl font-menu font-bold text-on-surface">
            {item.name}
          </h3>
          <SpiceIndicator level={item.spiceLevel} style="emoji" />
        </div>
        <p className="text-on-surface-variant text-sm font-body max-w-sm">
          {item.description}
        </p>
        {item.badges && item.badges.length > 0 && (
          <div className="flex gap-2 flex-wrap">
            {item.badges.map((badge) => (
              <span
                key={badge}
                className={`text-[10px] px-2 py-0.5 rounded-full font-label font-bold uppercase ${BADGE_STYLES[badge] ?? ""}`}
              >
                {BADGE_LABELS[badge] ?? badge}
              </span>
            ))}
          </div>
        )}
      </div>
      <span className="text-xl font-menu font-bold text-primary-container flex-shrink-0">
        ₱{item.price.toFixed(2)}
      </span>
    </div>
  );
}
