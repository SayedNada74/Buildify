import React from "react";
import { ContactView } from "@/components/views/contact-view";
import { ArabicRouteEffect } from "@/components/shared/arabic-route-effect";

export const metadata = {
  title: "تواصل معنا — ابدأ مشروعك مع بيلدفاي",
  description: "تواصل مباشرة عبر واتساب لبدء مناقشة مشروعك وتحديد أفق التحليق.",
};

export default function ArabicContactPage() {
  return (
    <ArabicRouteEffect>
      <ContactView />
    </ArabicRouteEffect>
  );
}
