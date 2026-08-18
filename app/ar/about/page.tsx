import React from "react";
import { AboutView } from "@/components/views/about-view";
import { ArabicRouteEffect } from "@/components/shared/arabic-route-effect";

export const metadata = {
  title: "عن بيلدفاي — استوديو رقمي حديث",
  description: "تعرف على فلسفة بيلدفاي، طريقة تفكيرنا، ورؤيتنا في صناعة المنتجات الرقمية.",
};

export default function ArabicAboutPage() {
  return (
    <ArabicRouteEffect>
      <AboutView />
    </ArabicRouteEffect>
  );
}
