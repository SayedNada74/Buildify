import React from "react";
import { Container } from "@/components/ui/container";
import { ArabicRouteEffect } from "@/components/shared/arabic-route-effect";

export const metadata = {
  title: "سياسة الخصوصية",
  description: "سياسة الخصوصية لاستوديو بيلدفاي.",
};

export default function ArabicPrivacyPage() {
  return (
    <ArabicRouteEffect>
      <div className="w-full bg-background min-h-screen pt-32 pb-20 text-foreground transition-colors duration-200" dir="rtl">
        <Container>
          <div className="max-w-3xl mx-auto space-y-8 text-right">
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">سياسة الخصوصية</h1>
            <p className="text-foreground-muted">آخر تحديث: {new Date().toLocaleDateString()}</p>

            <div className="space-y-6 text-base sm:text-lg text-foreground/90 leading-relaxed">
              <section>
                <h2 className="text-2xl font-bold mb-3 text-brand-teal">١. مقدمة</h2>
                <p>
                  مرحباً بك في استوديو بيلدفاي. نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه كيفية تعاملنا مع بياناتك الشخصية عند زيارتك لموقعنا وتخبرك بحقوق الخصوصية الخاصة بك.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-brand-teal">٢. البيانات التي نجمعها</h2>
                <p>
                  قد نقوم بجمع واستخدام وتخزين ونقل أنواع مختلفة من البيانات الشخصية عنك عند تفاعلك مع موقعنا، مثل:
                </p>
                <ul className="list-disc pr-5 mt-2 space-y-1">
                  <li>بيانات الهوية (الاسم الأول والاسم الأخير).</li>
                  <li>بيانات الاتصال (عنوان البريد الإلكتروني وأرقام الهواتف).</li>
                  <li>البيانات الفنية (عنوان IP، نوع المتصفح وإصداره، وإعدادات المنطقة الزمنية والموقع).</li>
                  <li>بيانات الاستخدام (معلومات حول كيفية استخدامك لموقعنا).</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-brand-teal">٣. كيف نستخدم بياناتك</h2>
                <p>
                  لن نستخدم بياناتك الشخصية إلا عندما يسمح لنا القانون بذلك. في الغالب، سنستخدم بياناتك الشخصية في الحالات التالية:
                </p>
                <ul className="list-disc pr-5 mt-2 space-y-1">
                  <li>حيثما نحتاج إلى تنفيذ العقد الذي نحن على وشك إبرامه أو أبرمناه معك.</li>
                  <li>حيثما يكون ذلك ضرورياً لمصالحنا المشروعة ولا تتجاوز مصالحك وحقوقك الأساسية تلك المصالح.</li>
                  <li>حيثما نحتاج إلى الامتثال لالتزام قانوني.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-3 text-brand-teal">٤. اتصل بنا</h2>
                <p>
                  إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه أو ممارسات الخصوصية الخاصة بنا، يرجى التواصل معنا عبر الواتساب أو من خلال نماذج الاتصال المتاحة على موقعنا.
                </p>
              </section>
            </div>
          </div>
        </Container>
      </div>
    </ArabicRouteEffect>
  );
}
