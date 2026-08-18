"use client";

import React from "react";
import Image from "next/image";
import { useLanguage } from "@/providers/language-provider";

const clients = [
  { name: "Grand Café", image: "/images/clients/Logo.webp" },
  { name: "Buildify", image: "/images/clients/Buildify Logo.jpeg" },
  { name: "Ziko Portfolio", image: "/images/clients/Logo.webp" },
  { name: "SU IT Guide", image: "/images/clients/Buildify Logo.jpeg" },
  { name: "Sayed Nada", image: "/images/clients/Logo.webp" },
  { name: "Studio", image: "/images/clients/Buildify Logo.jpeg" },
];

export function ClientsMarquee() {
  const { lang } = useLanguage();

  return (
    <section className="w-full py-12 sm:py-16 bg-background border-b border-border overflow-hidden flex flex-col items-center">
      <p className="text-xs font-bold uppercase tracking-widest text-brand-teal mb-8">
        {lang === "ar" ? "عملاء وثقوا بنا" : "Trusted By"}
      </p>
      
      <div className="relative w-full max-w-[1400px] mx-auto overflow-hidden">
        {/* Fading Edges */}
        <div className="absolute top-0 left-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute top-0 right-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Marquee Track */}
        <div className="flex w-max animate-marquee hover:pause whitespace-nowrap items-center">
          {/* Double the list to create infinite loop effect */}
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div 
              key={i} 
              className="flex-shrink-0 mx-8 sm:mx-16 flex flex-col items-center justify-center opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <div className="relative w-24 h-12 sm:w-32 sm:h-16">
                <Image
                  src={client.image}
                  alt={client.name}
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
