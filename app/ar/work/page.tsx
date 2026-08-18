import React from "react";
import { WorkView } from "@/components/views/work-view";
import { ArabicRouteEffect } from "@/components/shared/arabic-route-effect";

export const metadata = {
  title: "أعمال مختارة — بيلدفاي",
  description: "استعرض نماذج أعمال بيلدفاي الرقمية وصناعة تجارب الضيافة والمنتجات المخصصة.",
};

export default function ArabicWorkPage() {
  return (
    <ArabicRouteEffect>
      <WorkView />
    </ArabicRouteEffect>
  );
}
