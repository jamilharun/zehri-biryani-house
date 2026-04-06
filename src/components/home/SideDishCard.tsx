import StarRating from "../shared/StarRating";

interface SideDishCardProps {
  name: string;
  description: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
  rating?: number;
  keyIngredients?: string[];
}

export default function SideDishCard({
  name,
  description,
  price,
  imageSrc,
  imageAlt,
  rating = 5,
  keyIngredients,
}: SideDishCardProps) {
  return (
    <div className="flex bg-surface-container-highest rounded overflow-hidden group flex-1">
      <div className="w-1/3 overflow-hidden relative">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Ingredient reveal hover strip */}
        {keyIngredients && keyIngredients.length > 0 && (
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-black/80 to-transparent p-2 flex gap-1 flex-wrap">
            {keyIngredients.map((ing) => (
              <span
                key={ing}
                className="bg-surface-container-highest/80 backdrop-blur-sm text-on-surface text-[9px] font-label font-bold px-2 py-0.5 rounded-full"
              >
                {ing}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="w-2/3 p-6 flex flex-col justify-center">
        <div className="flex justify-between items-start mb-2">
          <h4 className="text-xl font-headline font-bold text-secondary">
            {name}
          </h4>
          <span className="text-primary font-bold">{price}</span>
        </div>
        <div className="mb-3">
          <StarRating rating={rating} size="sm" />
        </div>
        <p className="text-sm text-on-surface-variant font-body">
          {description}
        </p>
      </div>
    </div>
  );
}
