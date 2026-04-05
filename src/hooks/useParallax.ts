import { useState, useEffect } from 'react';

export function useParallax(speed = 0.4) {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    // Only enable parallax on desktop; respect reduced-motion preference
    const mq = window.matchMedia('(min-width: 768px)');
    const rmq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches || rmq.matches) return;

    const handler = () => setOffset(window.scrollY * speed);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, [speed]);
  return offset;
}
