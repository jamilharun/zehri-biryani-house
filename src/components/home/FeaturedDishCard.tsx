interface FeaturedDishCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  badge?: string;
}

export default function FeaturedDishCard({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  badge,
}: FeaturedDishCardProps) {
  return (
    <div className="md:col-span-7 group relative overflow-hidden rounded-full h-[500px]">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      <div className="absolute bottom-8 left-8 right-8">
        <div className="flex justify-between items-end">
          <div>
            {badge && (
              <span className="bg-tertiary-container text-white px-3 py-1 rounded text-xs font-label mb-2 inline-block">
                {badge}
              </span>
            )}
            <h3 className="text-3xl font-headline font-bold text-white">{name}</h3>
            <p className="text-white/80 font-body text-sm mt-1">{description}</p>
          </div>
          <span className="text-2xl font-headline font-bold text-[#F9A825]">{price}</span>
        </div>
      </div>
    </div>
  );
}
