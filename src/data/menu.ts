export type SpiceLevel = 1 | 2 | 3 | 4 | 5;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  spiceLevel: SpiceLevel;
  category: MenuCategory;
  badges?: MenuBadge[];
  isHalal: boolean;
  keyIngredients?: string[];
  imageAlt: string;
  imageSrc?: string;
}

export type MenuCategory =
  | 'biryani'
  | 'bbq'
  | 'handi-karahi'
  | 'sides'
  | 'drinks'
  | 'desserts';

export type MenuBadge = 'signature' | 'chefs-choice' | 'most-popular' | 'new';

export const MENU_CATEGORIES: { id: MenuCategory; label: string; displayLabel: string }[] = [
  { id: 'biryani',       label: 'Biryani',        displayLabel: 'Biryani Specials' },
  { id: 'handi-karahi',  label: 'Handi & Karahi',  displayLabel: 'Handi & Karahi' },
  { id: 'bbq',           label: 'BBQ',             displayLabel: 'BBQ' },
  { id: 'sides',         label: 'Sides',           displayLabel: 'Sides' },
  { id: 'drinks',        label: 'Drinks',          displayLabel: 'Drinks' },
  { id: 'desserts',      label: 'Desserts',        displayLabel: 'Desserts' },
];

export const MENU_ITEMS: MenuItem[] = [
  // ── Biryani ──
  {
    id: 'biryani-sindhi',
    name: 'Aghaz Special Sindhi Biryani',
    description: 'Spicy basmati rice with succulent lamb, dried plums, and our secret 21-spice blend.',
    price: 18.50,
    currency: 'PHP',
    spiceLevel: 3,
    category: 'biryani',
    badges: ['signature'],
    isHalal: true,
    keyIngredients: ['Kashmiri Chilies', 'Dried Plums', '12-hr Lamb', 'House Masala'],
    imageAlt: 'Aghaz Special Sindhi Biryani in a clay pot',
  },
  {
    id: 'biryani-saffron-chicken',
    name: 'Royal Saffron Chicken Biryani',
    description: 'Fragrant long-grain rice infused with Kashmiri saffron and bone-in marinated chicken.',
    price: 16.50,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'biryani',
    isHalal: true,
    keyIngredients: ['Kashmiri Saffron', 'Bone-in Chicken', 'Rose Water', 'Fried Onions'],
    imageAlt: 'Royal Saffron Chicken Biryani in a copper pot',
  },
  {
    id: 'biryani-vegetable-pulao',
    name: 'Vegetable Pulao Dum',
    description: 'Seasonal farm vegetables slow-cooked with aromatic cloves and star anise.',
    price: 14.00,
    currency: 'PHP',
    spiceLevel: 2,
    category: 'biryani',
    isHalal: true,
    keyIngredients: ['Farm Vegetables', 'Cloves', 'Star Anise', 'Dum Steam'],
    imageAlt: 'Vegetable Pulao Dum served in a bowl',
  },
  {
    id: 'biryani-nalli',
    name: 'Nalli Biryani',
    description: 'Premium basmati topped with slow-roasted bone marrow for unmatched richness.',
    price: 24.00,
    currency: 'PHP',
    spiceLevel: 2,
    category: 'biryani',
    badges: ['most-popular'],
    isHalal: true,
    keyIngredients: ['Bone Marrow', 'Aged Basmati', 'Kewra Water', 'Dum Steam'],
    imageAlt: 'Nalli Biryani with bone marrow in copper pot',
  },
  // ── Handi & Karahi ──
  {
    id: 'handi-lamb-karahi',
    name: "Chef's Signature Lamb Karahi",
    description: 'Slow-cooked tender lamb in a rich tomato and ginger sauce, finished over open flame.',
    price: 22.00,
    currency: 'PHP',
    spiceLevel: 3,
    category: 'handi-karahi',
    badges: ['chefs-choice'],
    isHalal: true,
    keyIngredients: ['Tender Lamb', 'Whole Tomatoes', 'Fresh Ginger', 'Coal Smoke'],
    imageAlt: "Chef's Signature Lamb Karahi in black wok",
  },
  {
    id: 'handi-butter-chicken',
    name: 'Aghaz Butter Chicken',
    description: 'Creamy, tomato-based delight with charcoal-grilled chicken tikka.',
    price: 21.00,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'handi-karahi',
    isHalal: true,
    keyIngredients: ['Charcoal Tikka', 'Cream', 'Fenugreek', 'Kasuri Methi'],
    imageAlt: 'Aghaz Butter Chicken in clay bowl',
  },
  {
    id: 'handi-peshawari-karahi',
    name: 'Peshawari Chicken Karahi',
    description: 'Classic Khyber-style karahi with minimal spices to let the charcoal flavor shine.',
    price: 19.00,
    currency: 'PHP',
    spiceLevel: 2,
    category: 'handi-karahi',
    isHalal: true,
    keyIngredients: ['Bone-in Chicken', 'Green Chilies', 'Whole Coriander', 'Ghee'],
    imageAlt: 'Peshawari Chicken Karahi in black wok',
  },
  {
    id: 'handi-mutton-handi',
    name: 'Slow-Cooked Mutton Handi',
    description: 'Tender mutton simmered for 4 hours in a sealed clay pot with whole spices.',
    price: 26.00,
    currency: 'PHP',
    spiceLevel: 2,
    category: 'handi-karahi',
    badges: ['signature'],
    isHalal: true,
    keyIngredients: ['4-hr Mutton', 'Clay Pot', 'Black Cardamom', 'Saffron'],
    imageAlt: 'Slow-Cooked Mutton Handi in clay pot',
  },
  // ── BBQ ──
  {
    id: 'bbq-seekh-kebab',
    name: 'Smoked Seekh Kebabs',
    description: 'Minced beef mixed with ginger, garlic, and green chilies, grilled over open flames.',
    price: 12.50,
    currency: 'PHP',
    spiceLevel: 3,
    category: 'bbq',
    isHalal: true,
    keyIngredients: ['Minced Beef', 'Green Chilies', 'Coal Smoke', 'House Masala'],
    imageAlt: 'Smoked Seekh Kebabs on charcoal grill',
  },
  {
    id: 'bbq-chicken-tikka',
    name: 'Chicken Tikka (Quarter)',
    description: 'Traditional leg piece marinated in yogurt and red spice mix, charred to perfection.',
    price: 9.50,
    currency: 'PHP',
    spiceLevel: 2,
    category: 'bbq',
    isHalal: true,
    keyIngredients: ['Yogurt Marinade', 'Red Spice Mix', 'Charcoal', 'Chaat Masala'],
    imageAlt: 'Chicken Tikka charred to perfection',
  },
  {
    id: 'bbq-afghani-boti',
    name: 'Afghani Boti',
    description: 'Creamy, mild chicken chunks flavored with white pepper and lemon juice.',
    price: 15.00,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'bbq',
    isHalal: true,
    keyIngredients: ['White Pepper', 'Cream', 'Lemon', 'Cardamom'],
    imageAlt: 'Afghani Boti chicken skewers',
  },
  {
    id: 'bbq-lamb-chops',
    name: 'Lamb Chops',
    description: 'Frenched chops marinated overnight and finished with a dusting of chaat masala.',
    price: 22.00,
    currency: 'PHP',
    spiceLevel: 2,
    category: 'bbq',
    badges: ['chefs-choice'],
    isHalal: true,
    keyIngredients: ['Overnight Marinade', 'Chaat Masala', 'Charcoal', 'Herb Butter'],
    imageAlt: 'Lamb Chops with chaat masala',
  },
  // ── Sides ──
  {
    id: 'sides-garlic-naan',
    name: 'Garlic Butter Naan',
    description: 'Stone-baked naan brushed with house garlic butter and fresh coriander.',
    price: 3.50,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'sides',
    isHalal: true,
    imageAlt: 'Garlic Butter Naan freshly baked',
  },
  {
    id: 'sides-raita',
    name: 'Raita (Yogurt Dip)',
    description: 'Cooling house-made yogurt with cucumber, cumin, and fresh mint.',
    price: 2.00,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'sides',
    isHalal: true,
    imageAlt: 'Raita yogurt dip in small bowl',
  },
  {
    id: 'sides-kachumber',
    name: 'Kachumber Salad',
    description: 'Fresh tomato, onion, and cucumber salad with chaat masala dressing.',
    price: 4.00,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'sides',
    isHalal: true,
    imageAlt: 'Kachumber Salad with chaat masala',
  },
  {
    id: 'sides-masala-fries',
    name: 'Masala Fries',
    description: 'Crispy fries tossed with house chaat masala and a squeeze of lemon.',
    price: 5.50,
    currency: 'PHP',
    spiceLevel: 2,
    category: 'sides',
    isHalal: true,
    imageAlt: 'Masala Fries with chaat spice',
  },
  // ── Drinks ──
  {
    id: 'drinks-mango-lassi',
    name: 'Mango Lassi',
    description: 'Thick, sweet mango blended with chilled yogurt and a pinch of cardamom.',
    price: 5.00,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'drinks',
    isHalal: true,
    imageAlt: 'Mango Lassi in a tall glass',
  },
  {
    id: 'drinks-pakola',
    name: 'Pakola (Soda)',
    description: 'Iconic Pakistani ice cream soda, sweet and refreshing.',
    price: 3.00,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'drinks',
    isHalal: true,
    imageAlt: 'Pakola ice cream soda',
  },
  {
    id: 'drinks-kashmiri-tea',
    name: 'Kashmiri Pink Tea',
    description: 'Fragrant pink milk tea with pistachios, almonds, and a hint of cardamom.',
    price: 4.50,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'drinks',
    isHalal: true,
    imageAlt: 'Kashmiri Pink Tea in traditional cup',
  },
  {
    id: 'drinks-lime-soda',
    name: 'Fresh Lime Soda',
    description: 'House-squeezed lime with sparkling water, black salt, and mint leaves.',
    price: 4.00,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'drinks',
    isHalal: true,
    imageAlt: 'Fresh Lime Soda with mint',
  },
  // ── Desserts ──
  {
    id: 'desserts-gulab-jamun',
    name: 'Gulab Jamun',
    description: 'Soft milk-solid dumplings soaked in rosewater saffron syrup, served warm.',
    price: 6.00,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'desserts',
    isHalal: true,
    imageAlt: 'Gulab Jamun in rosewater syrup',
  },
  {
    id: 'desserts-kheer',
    name: 'Traditional Kheer',
    description: 'Slow-cooked rice pudding with cardamom, saffron strands, and crushed pistachios.',
    price: 5.50,
    currency: 'PHP',
    spiceLevel: 1,
    category: 'desserts',
    isHalal: true,
    imageAlt: 'Traditional Kheer rice pudding',
  },
];
