import type { MenuItem } from '../../data/menu';
import SectionHeader from '../shared/SectionHeader';
import MenuItemRow from './MenuItemRow';
import { useRevealOnScroll } from '../../hooks/useRevealOnScroll';

interface MenuCategoryProps {
  title: string;
  subtitle?: string;
  items: MenuItem[];
  maxSpice: number;
}

export default function MenuCategory({ title, subtitle, items, maxSpice }: MenuCategoryProps) {
  const ref = useRevealOnScroll<HTMLDivElement>();

  return (
    <div ref={ref} className="mb-24 reveal-hidden">
      <SectionHeader title={title} subtitle={subtitle} size="lg" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {items.map((item, i) => (
          <MenuItemRow key={item.id} item={item} maxSpice={maxSpice} index={i} />
        ))}
      </div>
    </div>
  );
}
