import type { MenuItem } from "../../data/menu";
import HalalBadge from "../shared/HalalBadge";
import SpiceIndicator from "../shared/SpiceIndicator";

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  const imgSrc =
    item.imageSrc ??
    `https://placehold.co/600x400/ffe9e3/944a00?text=${encodeURIComponent(item.name)}`;

  return (
    <div className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-warm">
      <div className="relative h-56 overflow-hidden">
        <img
          src={imgSrc}
          alt={item.imageAlt}
          className="w-full h-full object-cover"
        />
        <HalalBadge variant="inline" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-menu font-bold text-on-surface text-lg leading-tight">
            {item.name}
          </h3>
          <span className="text-primary-container font-menu font-bold ml-2 flex-shrink-0">
            ₱{item.price.toFixed(2)}
          </span>
        </div>
        <p className="text-on-surface-variant text-sm font-body mb-3 line-clamp-2">
          {item.description}
        </p>
        <div className="flex justify-between items-center">
          <SpiceIndicator level={item.spiceLevel} style="dots" />
          <button
            className="bg-primary-container text-on-primary-container p-2 rounded-lg"
            aria-label={`Add ${item.name} to order`}
          >
            <span
              className="material-symbols-outlined text-sm"
              aria-hidden="true"
            >
              add
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
