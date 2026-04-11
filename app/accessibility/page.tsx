import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility Statement | The EA Index",
  description:
    "The EA Index is committed to making our website accessible to all users, including those with disabilities.",
};

export default function AccessibilityPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-2 tracking-tight">
        Accessibility statement
      </h1>
      <p className="text-sm text-gray-400 mb-10">Last reviewed April 11, 2026</p>

      <div className="prose">
        <p>
          The EA Index is committed to ensuring that our website is accessible to
          everyone, including individuals with disabilities. We strive to provide
          an inclusive digital experience and continuously work to improve the
          accessibility of our site in alignment with recognized standards and
          best practices.
        </p>

        <h2>Our commitment</h2>
        <p>
          We aim to conform to the Web Content Accessibility Guidelines (WCAG)
          2.1, Level AA, published by the World Wide Web Consortium (W3C). These
          guidelines help make web content more accessible to people with a wide
          range of disabilities, including visual, auditory, physical, speech,
          cognitive, and neurological disabilities.
        </p>
        <p>
          Our efforts also align with the intent of the Americans with
          Disabilities Act (ADA) and the European Accessibility Act (Directive
          2019/882), ensuring that our digital presence is usable by the widest
          possible audience.
        </p>

        <h2>Technical standards and features</h2>
        <p>Our website incorporates a range of accessibility features, including:</p>
        <ul>
          <li>Semantic HTML5 elements for clear document structure</li>
          <li>ARIA labels and roles where appropriate to enhance assistive technology support</li>
          <li>Descriptive alt text for meaningful images</li>
          <li>High contrast color ratios between text and background</li>
          <li>Keyboard-accessible navigation throughout the site</li>
          <li>Consistent heading hierarchy for screen reader navigation</li>
          <li>Properly associated form labels for all input fields</li>
        </ul>

        <h2>Compatibility</h2>
        <p>
          Our website is designed to be compatible with the following assistive
          technologies:
        </p>
        <ul>
          <li>NVDA with Firefox (Windows)</li>
          <li>JAWS with Chrome (Windows)</li>
          <li>VoiceOver with Safari (macOS and iOS)</li>
          <li>TalkBack with Chrome (Android)</li>
          <li>Keyboard-only navigation across Chrome, Firefox, Safari, and Edge</li>
        </ul>

        <h2>Known limitations</h2>
        <p>
          While we strive for full accessibility, some areas of our site may
          present challenges:
        </p>
        <ul>
          <li>
            Complex comparison tables may present navigation challenges for
            screen reader users
          </li>
          <li>
            Third-party embedded content (such as newsletter signup forms) may
            not fully conform to WCAG 2.1 AA standards
          </li>
          <li>
            Some older content may have accessibility gaps that are being
            addressed on an ongoing basis
          </li>
        </ul>

        <h2>Feedback and assistance</h2>
        <p>
          We welcome feedback on the accessibility of our website. If you
          encounter any barriers or have suggestions for improvement, please
          contact us:
        </p>
        <p>
          Email:{" "}
          <a href="mailto:support@theeaindex.com">
            support@theeaindex.com
          </a>
        </p>
        <p>
          When contacting us, please describe the accessibility barrier you
          experienced and include your preferred method of contact so we can
          follow up. We aim to respond to all accessibility inquiries within five
          (5) business days.
        </p>

        <h2>Third-party content</h2>
        <p>
          Our site may include content or services provided by third parties.
          While we encourage our partners and vendors to follow accessibility
          best practices, we cannot guarantee that all third-party content meets
          WCAG 2.1 AA standards. If you experience difficulty with any
          third-party content on our site, please let us know and we will do our
          best to provide an accessible alternative.
        </p>

        <h2>Formal complaints</h2>
        <p>
          If you are not satisfied with our response to an accessibility concern,
          you may file a formal complaint by emailing{" "}
          <a href="mailto:support@theeaindex.com">
            support@theeaindex.com
          </a>
          . We will acknowledge receipt of your complaint within five (5)
          business days and work to resolve the issue promptly.
        </p>

        <h2>Ongoing improvement</h2>
        <p>
          Accessibility is an ongoing effort. We regularly review our site, train
          our team on accessibility best practices, and incorporate feedback from
          users and accessibility audits. This statement will be updated as we
          make improvements and as standards evolve.
        </p>
      </div>
    </div>
  );
}
