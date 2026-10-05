'use client';

import { useEffect, useState } from 'react';

export function InteractiveSpotlight() {
  const [position, setPosition] = useState({ x: 50, y: 15 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 100;
      const y = (event.clientY / window.innerHeight) * 100;
      setPosition({ x, y });
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={{
        background: `radial-gradient(circle at ${position.x}% ${position.y}%, rgba(183,255,106,0.10), transparent 18rem), radial-gradient(circle at ${Math.max(
          position.x - 18,
          0
        )}% ${Math.min(position.y + 12, 100)}%, rgba(115,232,255,0.08), transparent 24rem)`,
      }}
    />
  );
}
