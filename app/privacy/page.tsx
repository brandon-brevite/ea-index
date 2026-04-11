import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | The EA Index",
  description:
    "The EA Index privacy policy — what data we collect, how we use it, and your rights.",
};

const EFFECTIVE = "April 10, 2026";

export default function PrivacyPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-2 tracking-tight">
        Privacy policy
      </h1>
      <p className="text-sm text-gray-400 mb-10">Effective date: {EFFECTIVE}</p>

      <div className="prose">
        <p>
          The EA Index (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;)
          operates this website. This Privacy Policy explains what information
          we collect, how we use it, and your rights regarding that information.
          By using The EA Index, you agree to the practices described here.
        </p>

        <h2>Information we collect</h2>
        <p>
          <strong>Information you provide.</strong> If you contact us via email,
          we collect your email address and the content of your message. We do
          not require account registration to use The EA Index.
        </p>
        <p>
          <strong>Automatically collected information.</strong> When you visit
          The EA Index, we automatically collect certain information through
          analytics services, including: pages visited, time spent on pages,
          referring URL, browser type, operating system, device type, and
          approximate geographic location (country/city level, not precise
          location). We do not collect your name, address, phone number, or
          precise personal identifiers through this automatic collection.
        </p>
        <p>
          <strong>Click data.</strong> When you click an outbound link to a
          service provider on our Site, we record data about that click,
          including the page you clicked from, the service you clicked to, and
          the time of click. This data is used for internal analytics and to
          improve our content. We do not have access to any information you
          subsequently provide to third-party services.
        </p>

        <h2>How we use information</h2>
        <p>
          We use the information we collect to: operate and improve The EA Index
          website; analyze aggregate usage patterns to improve our content and
          rankings; respond to your inquiries if you contact us; calculate
          affiliate commissions with our network partners where applicable;
          comply with legal obligations; and detect and prevent fraud or abuse.
        </p>
        <p>
          We do not sell your personal information. We do not share your
          personal data with third parties except as described in this policy or
          as required by law.
        </p>

        <h2>Third-party services we use</h2>
        <p>
          The following third-party services process data on our behalf or in
          connection with your use of The EA Index:
        </p>
        <p>
          <strong>Vercel.</strong> Our hosting provider. Vercel may collect
          server logs including IP addresses and request metadata. See
          Vercel&apos;s privacy policy at vercel.com for details.
        </p>
        <p>
          <strong>Plausible Analytics.</strong> We use privacy-focused analytics
          that do not use cookies and do not collect personal data. Plausible is
          GDPR, CCPA, and PECR compliant by default. No personal data is sent
          to or stored by Plausible.
        </p>
        <p>
          <strong>Supabase.</strong> Our database provider. Supabase stores
          aggregate click tracking data. No personally identifiable information
          is stored in our database.
        </p>

        <h2>Cookies and tracking</h2>
        <p>
          The EA Index uses minimal cookies. Our primary analytics provider
          (Plausible) does not use cookies. Essential cookies may be used for
          site functionality (such as admin authentication). Third-party
          services linked from our site may set their own cookies when you visit
          their websites.
        </p>
        <p>
          You can control cookies through your browser settings. Disabling
          cookies will not affect your ability to use The EA Index&apos;s public
          content.
        </p>

        <h2>Your rights</h2>
        <p>
          <strong>California residents (CCPA).</strong> If you are a California
          resident, you have the right to: know what personal information we
          collect and how it is used; request deletion of your personal
          information; opt out of the sale of your personal information (we do
          not sell personal information); and non-discrimination for exercising
          your privacy rights.
        </p>
        <p>
          <strong>EEA/UK residents (GDPR).</strong> If you are in the European
          Economic Area or United Kingdom, you have rights including: access to
          your personal data; correction of inaccurate data; deletion of your
          data (&quot;right to be forgotten&quot;); restriction of processing;
          data portability; the right to object to processing; and the right to
          withdraw consent at any time.
        </p>
        <p>
          <strong>Other jurisdictions.</strong> If you are located in a
          jurisdiction with data protection laws that grant you specific rights
          regarding your personal information, we will honor those rights to the
          extent required by applicable law.
        </p>
        <p>
          To exercise any of these rights, contact us at{" "}
          <a href="mailto:hello@theea.index" className="text-blue-600 hover:underline">
            hello@theea.index
          </a>.
          We will respond to your request within 30 days.
        </p>

        <h2>Data retention</h2>
        <p>
          Analytics data is retained according to our analytics provider&apos;s
          standard retention periods. Click tracking data is retained for up to
          24 months for internal analysis and commission calculation purposes.
          Email correspondence is retained for as long as necessary to address
          your inquiry and for our records. You may request deletion of your
          data at any time.
        </p>

        <h2>Data security</h2>
        <p>
          We implement reasonable technical and organizational measures to
          protect the information we collect against unauthorized access,
          alteration, disclosure, or destruction. However, no method of
          transmission over the internet or electronic storage is 100% secure,
          and we cannot guarantee absolute security.
        </p>

        <h2>Children&apos;s privacy</h2>
        <p>
          The EA Index is not directed to children under 13 (or under 16 in the
          EEA/UK). We do not knowingly collect personal information from
          children. If you believe we have collected information from a child,
          please contact us immediately and we will take steps to delete that
          information.
        </p>

        <h2>International data transfers</h2>
        <p>
          The EA Index is operated from the United States. If you access the
          Site from outside the United States, your information may be
          transferred to, stored, and processed in the United States or other
          countries where our service providers maintain facilities. By using
          the Site, you consent to the transfer of your information to countries
          that may have different data protection laws than your country of
          residence.
        </p>

        <h2>Do Not Track</h2>
        <p>
          Some browsers include a &quot;Do Not Track&quot; (DNT) feature. Our
          primary analytics tool (Plausible) does not track individual users
          regardless of DNT settings. We honor DNT signals to the extent
          practicable.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          We may update this Privacy Policy periodically. We will post the
          updated policy on this page with a new effective date. Material
          changes will be communicated via notice on The EA Index homepage.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this Privacy Policy can be directed to us at{" "}
          <a href="mailto:hello@theea.index" className="text-blue-600 hover:underline">
            hello@theea.index
          </a>.
        </p>
        <p>The EA Index, New York, NY</p>
      </div>
    </div>
  );
}
