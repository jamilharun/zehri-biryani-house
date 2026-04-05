import { type MenuCategory, MENU_CATEGORIES } from '../../data/menu';
import CategoryPill from '../shared/CategoryPill';

interface CategoryTabsProps {
  active: MenuCategory;
  onChange: (category: MenuCategory) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="sticky top-16 z-40 bg-background/80 backdrop-blur-sm py-4 md:hidden">
      <div className="flex gap-3 overflow-x-auto no-scrollbar px-4">
        {MENU_CATEGORIES.map((cat) => (
          <CategoryPill
            key={cat.id}
            label={cat.label}
            active={active === cat.id}
            onClick={() => onChange(cat.id)}
          />
        ))}
      </div>
    </div>
  );
}
