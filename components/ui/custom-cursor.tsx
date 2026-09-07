"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

export function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [cursorMode, setCursorMode] = useState<"default" | "hover" | "view">("default");
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.45 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(pointer: coarse)").matches);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const viewTarget = target.closest('[data-cursor="view"]');
      if (viewTarget) {
        setCursorMode("view");
        return;
      }

      const isInteractive =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]');

      if (isInteractive) {
        setCursorMode("hover");
      } else {
        setCursorMode("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    if (!isMobile) {
      window.addEventListener("mousemove", moveCursor);
      document.documentElement.addEventListener("mouseleave", handleMouseLeave);
      document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("mousemove", moveCursor);
      document.documentElement.removeEventListener("mouseleave", handleMouseLeave);
      document.documentElement.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isMobile, isVisible, cursorX, cursorY]);

  if (isMobile) return null;

  const isView = cursorMode === "view";
  const isHover = cursorMode === "hover";

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[99999] flex items-center justify-center border transition-[border-color,box-shadow] duration-200"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      animate={{
        width: isView ? 86 : isHover ? 48 : 32,
        height: isView ? 86 : isHover ? 48 : 32,
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.6,
        backgroundColor: isView
          ? "rgba(6, 14, 24, 0.94)"
          : isHover
            ? "rgba(0, 168, 150, 0.2)"
            : "transparent",
        borderColor: isView
          ? "#00f0ff"
          : "var(--brand-teal)",
        borderWidth: isView ? 2 : 2,
        boxShadow: isView
          ? "0 0 28px rgba(0, 240, 255, 0.5), inset 0 0 16px rgba(0, 240, 255, 0.25)"
          : isHover
            ? "0 0 14px rgba(0, 168, 150, 0.3)"
            : "none",
      }}
      transition={{ type: "spring", damping: 26, stiffness: 350 }}
    >
      <AnimatePresence>
        {isView && (
          <motion.span
            key="view-text"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.6 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="font-mono text-[13px] font-black tracking-[0.25em] text-[#00f0ff] uppercase select-none drop-shadow-[0_0_8px_rgba(0,240,255,0.95)]"
          >
            VIEW
          </motion.span>
        )}

        {isHover && !isView && (
          <motion.div
            key="hover-dot"
            className="w-1.5 h-1.5 bg-brand-teal rounded-full"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
