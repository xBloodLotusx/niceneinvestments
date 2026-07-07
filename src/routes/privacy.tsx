import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Nicene Investments" },
      {
        name: "description",
        content:
          "How Nicene Investments collects, uses, and protects information submitted through this website.",
      },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 6, 2026">
      <section>
        <h2>Introduction</h2>
        <p>
          Nicene Investments ("we," "us," or "our") respects your privacy. This Privacy Policy
          explains what information we collect through this website, how we use it, and the choices
          you have. It applies solely to information collected through niceneinvestments.com.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <p>
          When you submit our contact or investor-inquiry form, we collect the information you
          provide, which may include:
        </p>
        <ul>
          <li>Name, email address, and phone number</li>
          <li>Accredited investor status, as self-reported</li>
          <li>Any message or details you choose to include</li>
        </ul>
        <p>
          We do not use cookies, analytics, or advertising trackers on this website beyond what is
          strictly necessary to serve the page.
        </p>
      </section>

      <section>
        <h2>How We Use Information</h2>
        <p>We use the information you submit to:</p>
        <ul>
          <li>Respond to your inquiry and share information about investment opportunities</li>
          <li>Evaluate investor eligibility for offerings we make available</li>
          <li>Maintain records consistent with our legal and regulatory obligations</li>
        </ul>
        <p>We do not sell your personal information.</p>
      </section>

      <section>
        <h2>Sharing of Information</h2>
        <p>
          We do not share your information with third parties except: (a) service providers who help
          us operate this website or manage investor relations under confidentiality obligations,
          (b) as required by law or regulatory request, or (c) with your consent.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We take reasonable technical and organizational measures to protect the information you
          share with us. No method of transmission or storage is completely secure, and we cannot
          guarantee absolute security.
        </p>
      </section>

      <section>
        <h2>Your Choices</h2>
        <p>
          You may request access to, correction of, or deletion of the personal information you have
          submitted to us by contacting us at the email address below.
        </p>
      </section>

      <section>
        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The "Last updated" date above
          reflects the most recent revision.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about this Privacy Policy can be directed to{" "}
          <a href="mailto:invest@niceneinvestments.com" className="text-primary underline">
            invest@niceneinvestments.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
