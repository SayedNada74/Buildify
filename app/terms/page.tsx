import React from "react";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Buildify Studio.",
};

export default function TermsPage() {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-20 text-foreground transition-colors duration-200">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Terms of Service</h1>
          <p className="text-foreground-muted">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-base sm:text-lg text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-brand-teal">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Buildify Studio website, you agree to comply with and be bound by the following terms and conditions of use. If you disagree with any part of these terms, please do not use our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-brand-teal">2. Intellectual Property Rights</h2>
              <p>
                Unless otherwise stated, Buildify Studio and/or its licensors own the intellectual property rights for all material on this website. All intellectual property rights are reserved. You may access this for your own personal use subjected to restrictions set in these terms and conditions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-brand-teal">3. User Obligations</h2>
              <p>
                You must not:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Republish material from Buildify Studio.</li>
                <li>Sell, rent, or sub-license material from Buildify Studio.</li>
                <li>Reproduce, duplicate, or copy material from Buildify Studio.</li>
                <li>Redistribute content from Buildify Studio.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-brand-teal">4. Limitation of Liability</h2>
              <p>
                In no event shall Buildify Studio, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website. Buildify Studio shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
