import React from "react";
import { GrandCafeView } from "@/components/views/grand-cafe-view";
import { ArabicRouteEffect } from "@/components/shared/arabic-route-effect";

export const metadata = {
  title: "دراسة حالة جراند كافيه — بيلدفاي",
  description: "معمارية وتصميم التجربة الرقمية لجراند كافيه بواسطة استوديو بيلدفاي.",
};

export default function ArabicGrandCafePage() {
  return (
    <ArabicRouteEffect>
      <GrandCafeView />
    </ArabicRouteEffect>
  );
}
