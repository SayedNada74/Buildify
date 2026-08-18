import React from "react";

export function NoiseOverlay() {
  return (
    <div className="pointer-events-none fixed inset-0 z-[5000] opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay">
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  );
}
