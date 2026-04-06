const BREAK_IMAGES = [
  {
    src: '/images/visual-break-spices.jpg',
    alt: 'Close-up of raw Pakistani spices including cardamom, cinnamon, and dried chilies',
    grayscale: true,
  },
  {
    src: '/images/visual-break-kebabs.jpg',
    alt: 'Sizzling seekh kebab platter with smoke rising',
    grayscale: false,
  },
  {
    src: '/images/visual-break-chutney.jpg',
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
