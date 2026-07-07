import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/legal-layout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Nicene Investments" },
      {
        name: "description",
        content: "Terms governing use of the Nicene Investments website.",
      },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsOfService,
});

function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service" updated="July 6, 2026">
      <section>
        <h2>Acceptance of Terms</h2>
        <p>
          By accessing or using this website, you agree to be bound by these Terms of Service. If
          you do not agree, please do not use this website.
        </p>
      </section>

      <section>
        <h2>No Offer to Sell Securities</h2>
        <p>
          This website is for informational purposes only. Nothing on this site constitutes an offer
          to sell, or a solicitation of an offer to buy, any security, and no such offer or
          solicitation will be made except through definitive offering documents provided directly
          to qualified prospective investors. Any offering will be made only to investors who
          satisfy applicable suitability and accreditation requirements.
        </p>
      </section>

      <section>
        <h2>No Investment Advice</h2>
        <p>
          Information on this website does not constitute investment, legal, tax, or financial
          advice. You should consult your own advisors before making any investment decision. Past
          performance of any asset or strategy is not indicative of future results.
        </p>
      </section>

      <section>
        <h2>Forward-Looking Statements</h2>
        <p>
          This website may contain forward-looking statements about anticipated performance, market
          conditions, or business plans. These statements are subject to risks and uncertainties,
          and actual results may differ materially.
        </p>
      </section>

      <section>
        <h2>Intellectual Property</h2>
        <p>
          All content on this website, including text, graphics, and logos, is the property of
          Nicene Investments or its licensors and may not be reproduced or distributed without prior
          written consent.
        </p>
      </section>

      <section>
        <h2>No Warranty; Limitation of Liability</h2>
        <p>
          This website is provided "as is" without warranties of any kind. To the fullest extent
          permitted by law, Nicene Investments disclaims liability for any damages arising from your
          use of, or inability to use, this website.
        </p>
      </section>

      <section>
        <h2>Changes to These Terms</h2>
        <p>
          We may update these Terms of Service from time to time. The "Last updated" date above
          reflects the most recent revision. Continued use of the website after changes take effect
          constitutes acceptance of the revised terms.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Questions about these Terms can be directed to{" "}
          <a href="mailto:invest@niceneinvestments.com" className="text-primary underline">
            invest@niceneinvestments.com
          </a>
          .
        </p>
      </section>
    </LegalLayout>
  );
}
