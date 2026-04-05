interface CraftImageTileProps {
  src: string;
  alt: string;
  caption: string;
  offset?: boolean;
}

export default function CraftImageTile({ src, alt, caption, offset = false }: CraftImageTileProps) {
  return (
    <div className={`group relative overflow-hidden rounded-xl aspect-square ${offset ? 'md:mt-12' : ''}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
        <span className="text-white font-headline font-bold">{caption}</span>
      </div>
    </div>
  );
}
