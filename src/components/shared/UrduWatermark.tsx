interface UrduWatermarkProps {
  text?: string;
  size?: string;
  className?: string;
  color?: string;
  animationDuration?: string;
}

export default function UrduWatermark({
  text = 'زہری',
  size = 'text-[20rem]',
  className = '',
  color = 'text-primary',
  animationDuration = '20s',
}: UrduWatermarkProps) {
  return (
    <span
      aria-hidden="true"
      className={`urdu-watermark ${size} ${color} ${className}`}
      style={{
        fontFamily: "'Noto Nastaliq Urdu', serif",
        animationDuration,
      }}
    >
      {text}
    </span>
  );
}
