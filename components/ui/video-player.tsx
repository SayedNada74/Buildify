"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  poster?: string;
  autoPlay?: boolean;
  muted?: boolean;
  loop?: boolean;
  aspectRatio?: "vertical" | "video" | "square" | "auto";
  ariaLabel?: string;
}

export function VideoPlayer({
  src,
  poster,
  autoPlay = true,
  muted = true,
  loop = true,
  aspectRatio = "vertical",
  ariaLabel = "Buildify Brand Video Showcase",
  className,
  ...props
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const aspectRatios = {
    vertical: "aspect-[9/16]",
    video: "aspect-video",
    square: "aspect-square",
    auto: "",
  };

  return (
    <div className={cn("relative overflow-hidden rounded-brand-lg bg-brand-beige-subtle", aspectRatios[aspectRatio], className)}>
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        aria-label={ariaLabel}
        autoPlay={autoPlay && !prefersReducedMotion}
        muted={muted}
        loop={loop}
        playsInline
        className="w-full h-full object-cover"
        {...props}
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
