import { useEffect, useRef, useState } from 'react';

// Reveals content the first time it scrolls into view, instead of animating
// everything at once on page mount (which meant anything below the fold had
// already "finished" its entrance animation before a visitor ever saw it).
export function useScrollReveal(options) {
  const ref = useRef(null);
  // Respect reduced-motion users by showing content immediately rather than
  // gating it behind a scroll position they may not expect.
  const [isVisible, setIsVisible] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -80px 0px', ...options }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [options, isVisible]);

  return [ref, isVisible];
}
