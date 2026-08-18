"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if we've already shown the preloader in this session
    const hasLoaded = sessionStorage.getItem("buildify_preloader_shown");
    
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    // Set timer to hide preloader
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("buildify_preloader_shown", "true");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[10000] bg-background-elevated flex flex-col items-center justify-center pointer-events-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative w-24 h-24 sm:w-32 sm:h-32 mb-6"
          >
            <Image
              src="/images/logo-mark.webp"
              alt="Buildify Loading"
              fill
              className="object-contain animate-pulse"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
            className="overflow-hidden"
          >
            <span className="text-xl sm:text-2xl font-extrabold tracking-widest uppercase text-foreground">
              Buildify Studio
            </span>
          </motion.div>
          
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "150px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-0.5 bg-brand-teal mt-6 rounded-full"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
