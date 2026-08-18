import React from "react";
import { Container } from "@/components/ui/container";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Buildify Studio.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full bg-background min-h-screen pt-32 pb-20 text-foreground transition-colors duration-200">
      <Container>
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Privacy Policy</h1>
          <p className="text-foreground-muted">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-6 text-base sm:text-lg text-foreground/90 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold mb-3 text-brand-teal">1. Introduction</h2>
              <p>
                Welcome to Buildify Studio. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-brand-teal">2. The Data We Collect</h2>
              <p>
                We may collect, use, store and transfer different kinds of personal data about you when you interact with our website, such as:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Identity Data (first name, last name).</li>
                <li>Contact Data (email address, telephone numbers).</li>
                <li>Technical Data (IP address, browser type and version, time zone setting and location).</li>
                <li>Usage Data (information about how you use our website).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-brand-teal">3. How We Use Your Data</h2>
              <p>
                We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                <li>Where it is necessary for our legitimate interests and your interests and fundamental rights do not override those interests.</li>
                <li>Where we need to comply with a legal obligation.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-3 text-brand-teal">4. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy or our privacy practices, please contact us via our WhatsApp line or through the contact forms available on our website.
              </p>
            </section>
          </div>
        </div>
      </Container>
    </div>
  );
}
