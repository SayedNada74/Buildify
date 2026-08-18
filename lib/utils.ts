import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes safely without conflicts.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Formats WhatsApp contact URL with pre-filled message using international format.
 * Standardizes Egypt country code (+20).
 */
export function getWhatsAppUrl(phoneNumber: string, message?: string): string {
  // Strip spaces, dashes, plus signs
  const cleanNumber = phoneNumber.replace(/[\s\-\+\(\)]/g, "");
  // Prepend Egypt country code 20 if starting with 01
  const fullNumber = cleanNumber.startsWith("01") ? `20${cleanNumber}` : cleanNumber;
  const defaultMessage = "Hello Buildify team! I have an idea I'd like to build and make fly.";
  const encodedText = encodeURIComponent(message || defaultMessage);
  return `https://wa.me/${fullNumber}?text=${encodedText}`;
}
