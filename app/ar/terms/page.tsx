import React from "react";
import { Container } from "@/components/ui/container";
import { ArabicRouteEffect } from "@/components/shared/arabic-route-effect";

export const metadata = {
  title: "شروط الخدمة",
  description: "شروط الخدمة لاستوديو بيلدفاي.",
};

export default function ArabicTermsPage() {
  return (
    <ArabicRouteEffect>
      <div className="w-full bg-background min-h-screen pt-32 pb-20 text-foreground transition-colors duration-200" dir="rtl">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 text-right">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">شروط الخدمة</h1>
            <p className="text-foreground-muted">آخر تحديث: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-base sm:text-lg text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-3 text-brand-teal">١. قبول الشروط</h2>
                <p>
                  من خلال الوصول إلى موقع استوديو بيلدفاي واستخدامه، فإنك توافق على الالتزام بشروط وأحكام الاستخدام التالية. إذا كنت لا توافق على أي جزء من هذه الشروط، يرجى عدم استخدام موقعنا.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-brand-teal">٢. حقوق الملكية الفكرية</h2>
                <p>
                  ما لم يُنص على خلاف ذلك، يمتلك استوديو بيلدفاي و/أو مرخصوه حقوق الملكية الفكرية لجميع المواد الموجودة على هذا الموقع. جميع حقوق الملكية الفكرية محفوظة. يمكنك الوصول إلى هذا لاستخدامك الشخصي الخاص الخاضع للقيود المنصوص عليها في هذه الشروط والأحكام.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-brand-teal">٣. التزامات المستخدم</h2>
                <p>
                  يجب عليك عدم:
                </p>
                <ul className="list-disc pr-5 mt-2 space-y-1">
                  <li>إعادة نشر المواد من استوديو بيلدفاي.</li>
                  <li>بيع أو تأجير أو ترخيص المواد من استوديو بيلدفاي من الباطن.</li>
                  <li>استنساخ أو تكرار أو نسخ المواد من استوديو بيلدفاي.</li>
                  <li>إعادة توزيع المحتوى من استوديو بيلدفاي.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-brand-teal">٤. تحديد المسؤولية</h2>
                <p>
                  لن يكون استوديو بيلدفاي، ولا أي من مسؤوليه ومديريه وموظفيه، مسؤولين بأي حال من الأحوال عن أي شيء ينشأ عن أو يرتبط بأي شكل من الأشكال باستخدامك لهذا الموقع. لن يكون استوديو بيلدفاي مسؤولاً عن أي مسؤولية غير مباشرة أو تبعية أو خاصة تنشأ عن أو تتعلق بأي شكل من الأشكال باستخدامك لهذا الموقع.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </ArabicRouteEffect>
  );
}
