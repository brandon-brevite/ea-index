import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Persona vs ProAssisting: Which EA Service Is Better? | The EA Index",
  description:
    "Persona vs ProAssisting compared. Global direct-hire talent vs US-based fractional support for executives with high-end EA needs.",
};

export default function PersonaVsProAssistingPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 tracking-tight">
        Persona vs ProAssisting
      </h1>

      <div className="prose mb-10">
        <p>
          Persona and ProAssisting are both positioned at the top of the EA market,
          but their models are fundamentally different. Persona recruits from a
          global talent pool and places direct hires who work exclusively for you.
          ProAssisting provides fractional US-based assistants with senior executive
          support experience. Both cost $3,000 or more per month. The question is
          which model delivers better at that price.
        </p>
        <p>
          At this tier, you are past the question of whether an EA is worth it.
          You already know delegation works. The decision between Persona and
          ProAssisting is really about how you want the relationship structured:
          full-time ownership of a single hire who grows with you, or part-time
          access to a seasoned professional who already has the skills you need.
          Both approaches have clear advantages depending on where you are and
          what you need.
        </p>
      </div>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 font-heading text-navy"></th>
              <th className="text-left p-3 font-heading text-navy">Persona</th>
              <th className="text-left p-3 font-heading text-navy">
                ProAssisting
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-3 font-medium text-navy">Price range</td>
              <td className="p-3 text-gray-500">$3,000 - $5,000/mo</td>
              <td className="p-3 text-gray-500">$3,300 - $6,000/mo</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Service model</td>
              <td className="p-3 text-gray-500">Direct hire</td>
              <td className="p-3 text-gray-500">Fractional</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Assistant location</td>
              <td className="p-3 text-gray-500">Global</td>
              <td className="p-3 text-gray-500">United States</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Best for</td>
              <td className="p-3 text-gray-500">
                Companies that want a full-time, high-caliber hire without
                running their own recruiting process
              </td>
              <td className="p-3 text-gray-500">
                C-suite executives who need a seasoned assistant for
                high-complexity, part-time support
              </td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Min commitment</td>
              <td className="p-3 text-gray-500">12 months</td>
              <td className="p-3 text-gray-500">3 months</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Onboarding speed</td>
              <td className="p-3 text-gray-500">2-4 weeks</td>
              <td className="p-3 text-gray-500">1-2 weeks</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose mb-10">
        <h2 className="font-heading text-xl font-semibold text-navy">
          Direct hire vs. fractional: what it means in practice
        </h2>
        <p>
          Persona&apos;s direct-hire model means they recruit, vet, and place
          a full-time assistant who works exclusively for you. Once placed, that
          person is essentially your employee (though Persona handles the
          employment infrastructure). They work your hours, attend your meetings,
          and become deeply embedded in your day-to-day operations. Over time,
          a Persona hire can evolve into a chief of staff, operations manager,
          or whatever role your business needs.
        </p>
        <p>
          ProAssisting&apos;s fractional model means your assistant works with
          a small number of clients simultaneously. You purchase a block of
          hours, and your assistant allocates that time across the month. They
          are not sitting at a desk waiting for your next request at 3pm on a
          Tuesday; they are managing their time across engagements. The
          advantage is that you get 10-15 years of executive support experience
          without paying for 160 hours a month. The tradeoff is that your
          assistant is not exclusively yours.
        </p>
        <p>
          This matters most during crunch periods. If you are closing a
          fundraise, preparing for a board meeting, or dealing with a crisis,
          a Persona hire can shift 100% of their attention to your needs. A
          ProAssisting assistant might not have the same flexibility because
          they have other clients with their own deadlines.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          The talent difference
        </h2>
        <p>
          Persona sources globally and claims to accept less than 1% of
          applicants. Their candidates go through multiple rounds of screening
          including skills tests, interviews, and reference checks. The result
          is a pool of highly capable professionals from around the world,
          many with degrees from top universities and experience at well-known
          companies. You are getting someone who could work at a major tech
          firm, placed into your organization through Persona&apos;s pipeline.
        </p>
        <p>
          ProAssisting&apos;s assistants are exclusively US-based and come from
          corporate executive support backgrounds. Think former EAs to managing
          directors at investment banks, partners at law firms, or C-suite
          executives at large companies. They have lived through the scenarios
          you need help with: board prep, investor dinners, international
          travel coordination, confidential document management. The experience
          is not theoretical; it is battle-tested.
        </p>
        <p>
          The talent trade-off is breadth versus depth. Persona gives you a
          versatile, high-potential hire who can grow into any role. ProAssisting
          gives you a specialized professional who already knows executive
          support at the highest level. If you need someone to eventually own
          operations, Persona&apos;s growth-oriented hire makes more sense. If
          you need someone who can step into complex executive support from
          week one, ProAssisting&apos;s experienced professionals have the
          edge.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          Commitment and risk
        </h2>
        <p>
          Persona&apos;s 12-month commitment is the longest in the EA industry
          at this level. It reflects the direct-hire nature of the service:
          Persona invests heavily in recruiting and placing your hire, and the
          annual commitment ensures they recoup that investment. For you, it
          means you need to be confident in your need for full-time support
          before signing. If your workload is inconsistent or you are still
          figuring out what you need, a 12-month lock-in is risky.
        </p>
        <p>
          ProAssisting requires a three-month commitment, which is standard for
          premium services. Three months gives both sides enough time for a
          proper evaluation. If it is not working after 90 days, you can exit
          without a prolonged unwinding process. The shorter commitment period
          makes ProAssisting the lower-risk option for executives who want
          premium support but are not ready for a year-long engagement.
        </p>
        <p>
          The financial risk calculation is straightforward. With Persona, you
          are committing to $36,000-$60,000 over 12 months. With ProAssisting,
          your initial commitment is $9,900-$18,000 over 3 months. If you are
          testing premium EA support for the first time, ProAssisting&apos;s
          shorter commitment window gives you an exit ramp that Persona does
          not.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          When to choose Persona
        </h2>
        <ul>
          <li>
            You want a full-time, dedicated assistant who works only for you and
            becomes deeply embedded in your operations.
          </li>
          <li>
            You are willing to commit to a 12-month engagement in exchange for
            access to a rigorously vetted talent pool that Persona claims
            accepts less than 1% of applicants.
          </li>
          <li>
            You need someone who can grow into a chief of staff or operations
            role over time, not just handle admin tasks.
          </li>
          <li>
            You are open to working with a globally sourced assistant and
            prioritize talent quality over location.
          </li>
          <li>
            Your workload justifies 40 hours per week of support and you need
            real-time availability during your working hours.
          </li>
          <li>
            You want to stop recruiting and let someone else handle the entire
            hiring pipeline, from sourcing to placement.
          </li>
        </ul>

        <h2 className="font-heading text-xl font-semibold text-navy">
          When to choose ProAssisting
        </h2>
        <ul>
          <li>
            You need part-time but high-caliber support. ProAssisting is built
            for executives who need 20-40 hours per month of expert-level
            assistance.
          </li>
          <li>
            You specifically require a US-based assistant for time zone
            alignment, cultural context, or compliance purposes.
          </li>
          <li>
            Your work involves sensitive executive tasks like board prep,
            investor relations support, or high-stakes travel coordination.
          </li>
          <li>
            You want a shorter initial commitment to evaluate fit before locking
            into a longer engagement.
          </li>
          <li>
            You need someone who can handle executive-level work with minimal
            ramp-up because they have done it many times before.
          </li>
          <li>
            You are a C-suite executive at a mid-to-large company and need
            an assistant who understands corporate environments and
            stakeholder dynamics.
          </li>
        </ul>

        <h2 className="font-heading text-xl font-semibold text-navy">
          Use cases where each service excels
        </h2>
        <p>
          Persona shines when you need a Swiss Army knife. Their hires often
          handle a mix of executive support, project management, research,
          and operational tasks. A Persona assistant might manage your calendar
          in the morning, coordinate a product launch in the afternoon, and
          compile a competitive analysis by end of day. The breadth of their
          role grows as they learn your business.
        </p>
        <p>
          ProAssisting shines when you need surgical precision on executive
          support tasks. Their assistants excel at complex calendar
          orchestration across multiple executives, travel itineraries with
          tight logistics, event planning with high-profile guests, and
          document preparation for board meetings or investor presentations.
          They may not be building your project management workflows, but the
          executive support they deliver is at a level that most generalist
          assistants cannot match.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          The bottom line
        </h2>
        <p>
          Persona is the play if you need a full-time hire and want someone
          exceptional without running your own recruiting process. The 12-month
          commitment is significant, but you get a dedicated person who can take on
          real operational weight. Over time, the value of a deeply embedded
          full-time hire often exceeds what any fractional service can deliver,
          because that person accumulates context and institutional knowledge
          that compounds month after month.
        </p>
        <p>
          ProAssisting is better if you need fractional senior support. You pay
          a premium for US-based assistants with C-suite experience, but you only
          pay for the hours you use. The shorter commitment and faster onboarding
          make it a lower-risk entry into premium EA services. For executives
          whose needs do not fill 40 hours a week, ProAssisting delivers more
          value per hour than any full-time option.
        </p>
        <p>
          Pick Persona for full-time depth and long-term growth. Pick
          ProAssisting for part-time excellence and immediate impact.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        <Link
          href="/services/persona"
          className="text-blue-600 hover:underline text-sm"
        >
          Read full Persona review &rarr;
        </Link>
        <Link
          href="/services/proassisting"
          className="text-blue-600 hover:underline text-sm"
        >
          Read full ProAssisting review &rarr;
        </Link>
      </div>

      <Link href="/vs" className="text-blue-600 hover:underline text-sm">
        &larr; All comparisons
      </Link>
    </div>
  );
}
