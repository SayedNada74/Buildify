import React from "react";
import { HomeView } from "@/components/views/home-view";
import { ArabicRouteEffect } from "@/components/shared/arabic-route-effect";

export const metadata = {
  title: "بيلدفاي — استوديو رقمي وهندسة منتجات",
  description: "من الفكرة الأولى حتى التجربة الرقمية الرفيعة، نحول أفكارك إلى منتجات صُممت لتبهر، تتصل، وتنمو.",
};

export default function ArabicHomePage() {
  return (
    <ArabicRouteEffect>
      <HomeView />
    </ArabicRouteEffect>
  );
}
