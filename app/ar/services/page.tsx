import React from "react";
import { ServicesView } from "@/components/views/services-view";
import { ArabicRouteEffect } from "@/components/shared/arabic-route-effect";

export const metadata = {
  title: "الخدمات والقدرات — بيلدفاي",
  description: "خدمات رقمية صُممت حول النتائج الفعلية للأعمال وأعلى مستويات الأداء والتجاوب.",
};

export default function ArabicServicesPage() {
  return (
    <ArabicRouteEffect>
      <ServicesView />
    </ArabicRouteEffect>
  );
}
