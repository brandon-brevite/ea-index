import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | The EA Index",
  description:
    "Terms of service governing your use of The EA Index.",
};

const EFFECTIVE = "April 10, 2026";

export default function TermsPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-2 tracking-tight">
        Terms of service
      </h1>
      <p className="text-sm text-gray-400 mb-10">Effective date: {EFFECTIVE}</p>

      <div className="prose">
        <p>
          These Terms of Service (&quot;Terms&quot;) govern your use of
          theea.index (the &quot;Site&quot;) operated by The EA Index
          (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By accessing or
          using the Site, you agree to these Terms. If you do not agree, do not
          use the Site.
        </p>

        <h2>1. Nature of the service</h2>
        <p>
          The EA Index is a price comparison and information resource for remote
          executive assistant services. We provide information about EA
          providers, including pricing, services offered, and editorial rankings.
          We are not an employment agency, staffing firm, executive assistant
          provider, or recruiter of any kind.
        </p>
        <p>
          The information we provide is for informational and comparison purposes
          only. Service offerings, pricing, and availability change frequently.
          We make no representations about whether any service is appropriate for
          your specific business needs. Always verify current details directly
          with any service provider before making a purchasing decision.
        </p>

        <h2>2. Affiliate relationships and advertising</h2>
        <p>
          The EA Index may participate in affiliate marketing programs. When you
          click links to third-party services on our Site and subsequently make
          a purchase, we may earn a commission at no additional cost to you.
          These affiliate relationships do not influence our editorial rankings
          or the order in which services appear on the Site.
        </p>
        <p>
          Our Editor&apos;s Pick placement is determined by editorial score.
          Ranked list positions are determined by editorial criteria independent
          of any affiliate relationships.
        </p>

        <h2>3. Accuracy of information</h2>
        <p>
          We make reasonable efforts to ensure that pricing, availability, and
          service information on The EA Index is accurate and current. However,
          EA service pricing changes frequently, providers modify their
          offerings, and business conditions evolve. We make no warranty that
          information on The EA Index is accurate, complete, or current at the
          time you access it.
        </p>
        <p>
          Always verify current pricing, availability, and program details
          directly with any service before making a purchase decision. The EA
          Index is not responsible for discrepancies between information on our
          Site and the actual offerings of third-party services.
        </p>

        <h2>4. Third-party services</h2>
        <p>
          The EA Index links to third-party executive assistant services and
          staffing companies. These are independent companies subject to their
          own terms of service, privacy policies, and business practices. We do
          not endorse, guarantee, or assume responsibility for any third-party
          service, their employees, contractors, the quality of work they
          provide, or the outcomes of any engagement you enter into with them.
        </p>
        <p>
          Your relationship with any EA service is solely between you and that
          service. The EA Index is not a party to any agreement between you and
          a third-party provider and has no responsibility for the services,
          products, or support they deliver.
        </p>

        <h2>5. No professional relationship</h2>
        <p>
          Your use of The EA Index does not create an employment relationship,
          staffing arrangement, consulting engagement, or any other professional
          relationship between you and The EA Index. We are a publisher of
          information, not a service provider.
        </p>

        <h2>6. User conduct</h2>
        <p>
          You agree not to: use the Site for any unlawful purpose; attempt to
          gain unauthorized access to any portion of the Site or its systems;
          use automated tools to scrape, crawl, or extract content from the Site
          without written permission; interfere with or disrupt the Site or its
          servers; impersonate any person or entity; or transmit any malicious
          code, viruses, or harmful components.
        </p>

        <h2>7. Intellectual property</h2>
        <p>
          The content on The EA Index, including text, rankings, analysis,
          reviews, design, and code, is owned by The EA Index and protected by
          copyright. You may share links to The EA Index pages. You may not
          reproduce, republish, scrape, or distribute our content without
          written permission. Provider names and trademarks belong to their
          respective owners and are used on The EA Index for nominative
          comparative purposes only.
        </p>

        <h2>8. Disclaimer of warranties</h2>
        <p>
          The EA Index provides the Site and its content &quot;as is&quot; and
          &quot;as available&quot; without warranties of any kind, express or
          implied, including but not limited to warranties of merchantability,
          fitness for a particular purpose, non-infringement, or accuracy. We do
          not warrant that the Site will be uninterrupted, error-free, or free
          of viruses or other harmful components.
        </p>

        <h2>9. Limitation of liability</h2>
        <p>
          To the maximum extent permitted by applicable law, The EA Index shall
          not be liable for any indirect, incidental, special, consequential, or
          punitive damages arising from your use of or inability to use the Site
          or any information contained on it, including but not limited to
          damages for loss of profits, data, business opportunities, or goodwill.
          Our total liability for any claim arising from your use of the Site
          shall not exceed $100.
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless The EA Index, its officers,
          directors, employees, agents, and affiliates from any claims, damages,
          losses, liabilities, costs, and expenses (including reasonable legal
          fees) arising from: your use of the Site; your violation of these
          Terms; your violation of any third-party rights; or any content you
          submit to or through the Site.
        </p>

        <h2>11. Third-party links</h2>
        <p>
          The Site contains links to third-party websites and services. These
          links are provided for convenience only. We do not control, endorse,
          or assume responsibility for the content, privacy policies, or
          practices of any third-party websites. You access third-party websites
          at your own risk.
        </p>

        <h2>12. Termination</h2>
        <p>
          We reserve the right to terminate or suspend your access to the Site
          at any time, without notice, for any reason, including if we believe
          you have violated these Terms. Upon termination, your right to use the
          Site ceases immediately.
        </p>

        <h2>13. Severability</h2>
        <p>
          If any provision of these Terms is found to be unenforceable or
          invalid, that provision shall be limited or eliminated to the minimum
          extent necessary, and the remaining provisions shall remain in full
          force and effect.
        </p>

        <h2>14. Changes to these terms</h2>
        <p>
          We may modify these Terms at any time. We will post the updated Terms
          on this page with a new effective date. Your continued use of the Site
          after changes are posted constitutes acceptance of the updated Terms.
          Material changes will be communicated via notice on the Site homepage.
        </p>

        <h2>15. Governing law</h2>
        <p>
          These Terms are governed by the laws of the State of New York, without
          regard to its conflict of law provisions. Any dispute arising from
          these Terms shall be resolved in the state or federal courts located
          in New York County, New York.
        </p>

        <h2>16. Contact</h2>
        <p>
          Questions about these Terms can be directed to us at{" "}
          <a href="mailto:support@theeaindex.com" className="text-blue-600 hover:underline">
            support@theeaindex.com
          </a>.
        </p>
      </div>
    </div>
  );
}
