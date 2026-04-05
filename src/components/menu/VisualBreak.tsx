const BREAK_IMAGES = [
  {
    src: 'https://placehold.co/600x256/dcc1b1/564337?text=Spices',
    alt: 'Close-up of raw Pakistani spices including cardamom, cinnamon, and dried chilies',
    grayscale: true,
  },
  {
    src: 'https://placehold.co/600x256/ffe9e3/944a00?text=Kebabs',
    alt: 'Sizzling seekh kebab platter with smoke rising',
    grayscale: false,
  },
  {
    src: 'https://placehold.co/600x256/dcc1b1/564337?text=Chutney',
    alt: 'Vibrant green mint chutney being drizzled from a wooden spoon',
    grayscale: true,
  },
];

export default function VisualBreak() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
      {BREAK_IMAGES.map((img) => (
        <img
          key={img.alt}
          src={img.src}
          alt={img.alt}
          className={`h-64 w-full object-cover rounded-xl transition-all duration-500 ${
            img.grayscale ? 'grayscale hover:grayscale-0' : 'shadow-lg'
          }`}
        />
      ))}
    </div>
  );
}
