import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "MyOutDesk vs Stealth Agents: Which EA Service Is Better? | The EA Index",
  description:
    "MyOutDesk vs Stealth Agents compared. Two Philippines-based managed EA services with similar pricing but key differences in approach.",
};

export default function MyOutDeskVsStealthAgentsPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 tracking-tight">
        MyOutDesk vs Stealth Agents
      </h1>

      <div className="prose mb-10">
        <p>
          MyOutDesk and Stealth Agents both offer Philippines-based managed
          assistants at similar price points. On the surface, they look nearly
          interchangeable. But the differences in vetting processes, industry focus,
          and management style matter more than you might expect. This comparison
          covers what actually sets them apart.
        </p>
        <p>
          Both services sit in the mid-tier of the EA market, below premium
          US-based options but above the cheapest freelance VA marketplaces. For
          founders and small business owners who want managed support without
          paying $3,000+ per month, these two are often the finalists. The right
          choice depends on your industry, how quickly you need to start, and
          how much structure you want around the engagement.
        </p>
      </div>

      <div className="overflow-x-auto mb-10">
        <table className="w-full text-sm border border-gray-200 rounded-lg">
          <thead>
            <tr className="bg-gray-50">
              <th className="text-left p-3 font-heading text-navy"></th>
              <th className="text-left p-3 font-heading text-navy">
                MyOutDesk
              </th>
              <th className="text-left p-3 font-heading text-navy">
                Stealth Agents
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            <tr>
              <td className="p-3 font-medium text-navy">Price range</td>
              <td className="p-3 text-gray-500">$1,788 - $1,988/mo</td>
              <td className="p-3 text-gray-500">$1,600 - $3,000/mo</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Service model</td>
              <td className="p-3 text-gray-500">Managed</td>
              <td className="p-3 text-gray-500">Managed</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Assistant location</td>
              <td className="p-3 text-gray-500">Philippines</td>
              <td className="p-3 text-gray-500">Philippines</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Best for</td>
              <td className="p-3 text-gray-500">
                Real estate professionals and small businesses needing
                industry-trained VAs
              </td>
              <td className="p-3 text-gray-500">
                Entrepreneurs and agencies who want affordable, general-purpose
                VA support
              </td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Min commitment</td>
              <td className="p-3 text-gray-500">3 months</td>
              <td className="p-3 text-gray-500">Month-to-month</td>
            </tr>
            <tr>
              <td className="p-3 font-medium text-navy">Onboarding speed</td>
              <td className="p-3 text-gray-500">1-2 weeks</td>
              <td className="p-3 text-gray-500">3-5 days</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="prose mb-10">
        <h2 className="font-heading text-xl font-semibold text-navy">
          Industry focus vs. general purpose
        </h2>
        <p>
          The most important difference between these two services is
          specialization. MyOutDesk has invested heavily in building
          industry-specific training programs, particularly for real estate.
          Their assistants who work with real estate teams come pre-trained on
          tools like Follow Up Boss, BoomTown, KvCORE, and the major MLS
          platforms. They understand transaction coordination, lead follow-up
          cadences, and the rhythms of a real estate business. MyOutDesk also
          has training tracks for healthcare, insurance, and financial services.
        </p>
        <p>
          Stealth Agents takes a generalist approach. Their assistants handle a
          broad range of tasks: inbox management, scheduling, data entry,
          customer support, research, social media, and light bookkeeping. They
          do not specialize in any particular industry, which makes them
          versatile but means you will need to invest more time training your
          assistant on industry-specific workflows and tools.
        </p>
        <p>
          If you are a real estate agent, insurance broker, or healthcare
          practice manager, MyOutDesk&apos;s pre-training saves you weeks of
          onboarding. If you are running a marketing agency, e-commerce brand,
          or SaaS startup, Stealth Agents&apos; generalist approach is a
          better fit because MyOutDesk&apos;s industry specialization does not
          apply to your work.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          Vetting and screening processes
        </h2>
        <p>
          MyOutDesk markets their vetting heavily and with good reason. They
          run background checks, skills assessments, personality profiling, and
          what they describe as FBI-grade screening on all candidates. The
          company has been operating since 2008, and their screening pipeline
          is one of the most thorough in the offshore VA space. For businesses
          handling sensitive client data (real estate transactions, medical
          records, financial information), this level of vetting provides
          real peace of mind.
        </p>
        <p>
          Stealth Agents vets their assistants as well, but the process is
          less rigorous by comparison. They assess for English proficiency,
          technical skills, and reliability, but they do not emphasize the
          same depth of background investigation. For standard administrative
          tasks where your assistant is not accessing highly sensitive data,
          this level of screening is adequate. If your assistant will be
          handling financial records or personal client information, the
          difference in vetting could matter.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          Pricing and commitment structure
        </h2>
        <p>
          MyOutDesk&apos;s pricing is tight: roughly $1,788 to $1,988 per month
          for a full-time dedicated assistant. This works out to about $11-12
          per hour, which is competitive for a managed service with their level
          of vetting. The three-month minimum commitment is standard but worth
          noting. MyOutDesk frames this as a necessary investment for proper
          onboarding and ramp-up, which is fair, but it does lock you in.
        </p>
        <p>
          Stealth Agents starts around $1,600 per month at the low end and
          scales up to $3,000 depending on the role complexity and hours
          needed. The month-to-month flexibility is a real advantage. If you
          are not sure how much VA support you need, being able to try the
          service without a three-month lock-in reduces your downside risk.
          The effective hourly rate is similar to MyOutDesk at the lower end
          but gets more expensive as you add specialized skills.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          Onboarding and ramp-up
        </h2>
        <p>
          MyOutDesk&apos;s onboarding takes one to two weeks. The process
          includes a discovery call to understand your needs, matching based on
          skills and industry experience, and a structured introduction. If you
          are in one of their specialty industries, the ramp-up is faster
          because the assistant already knows the tools and workflows. For
          general administrative needs, expect the standard learning curve of
          two to four weeks before your assistant is fully autonomous.
        </p>
        <p>
          Stealth Agents moves faster, typically matching you with an assistant
          in three to five business days. The onboarding is lighter, which
          means you start sooner but carry more of the training burden
          yourself. If you have clear SOPs and documented processes, this
          works fine. If you are expecting the assistant to figure things out
          with minimal guidance, the quicker start might mean a bumpier first
          few weeks.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          When to choose MyOutDesk
        </h2>
        <ul>
          <li>
            You work in real estate, insurance, healthcare, or another industry
            where MyOutDesk has pre-trained assistants who already know the tools
            and terminology.
          </li>
          <li>
            You want a thorough vetting process. MyOutDesk runs background checks,
            skills assessments, and FBI-grade screening on all candidates.
          </li>
          <li>
            You need a full-time dedicated assistant at a flat rate with no
            per-hour billing surprises.
          </li>
          <li>
            You are comfortable with a three-month commitment in exchange for a
            more structured onboarding and matching process.
          </li>
          <li>
            Your assistant will handle sensitive data (client records, financial
            information) and you need confidence in the screening process.
          </li>
          <li>
            You want a service with a long track record. MyOutDesk has been
            operating since 2008 and has placed thousands of assistants.
          </li>
        </ul>

        <h2 className="font-heading text-xl font-semibold text-navy">
          When to choose Stealth Agents
        </h2>
        <ul>
          <li>
            You want flexibility to start month-to-month without a multi-month
            contract locking you in.
          </li>
          <li>
            Your needs are general-purpose: inbox management, scheduling, data
            entry, research, and customer support.
          </li>
          <li>
            You want faster onboarding. Stealth Agents typically matches you with
            an assistant in under a week.
          </li>
          <li>
            You need the option to scale up with multiple assistants at a lower
            entry price.
          </li>
          <li>
            Your industry does not overlap with MyOutDesk&apos;s specializations,
            making their industry-specific training irrelevant to your needs.
          </li>
          <li>
            You prefer to do your own training and want an adaptable assistant
            rather than one trained in a specific methodology.
          </li>
        </ul>

        <h2 className="font-heading text-xl font-semibold text-navy">
          Scaling with each service
        </h2>
        <p>
          MyOutDesk makes it easy to add additional assistants if your needs
          grow. Many real estate teams start with one MyOutDesk VA for
          transaction coordination and later add a second for lead generation
          or marketing support. Each additional assistant goes through the
          same vetting and onboarding process. The per-assistant cost stays
          flat, so scaling is predictable.
        </p>
        <p>
          Stealth Agents also supports multi-VA setups and positions themselves
          as a good option for agencies that need several assistants working
          in parallel. Their flexible commitment structure means you can test
          adding a second assistant without a long-term obligation. If it
          works, keep going. If not, scale back without penalty.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          What happens when things go wrong
        </h2>
        <p>
          With MyOutDesk, replacement requests go through your account manager.
          Because of the three-month commitment, you are not walking away from
          the service over a bad match; you are asking for a swap. MyOutDesk
          typically handles replacements within one to two weeks, and the new
          assistant inherits any documentation from the previous one. The
          process is structured, which is both a strength (it works reliably)
          and a limitation (it moves at MyOutDesk&apos;s pace, not yours).
        </p>
        <p>
          With Stealth Agents, the month-to-month model gives you more
          leverage. If your assistant is not working out, you can request a
          replacement or simply not renew. Replacements typically happen
          faster due to the lighter onboarding process. The tradeoff is less
          support infrastructure around the transition; you may need to
          re-train the new assistant yourself.
        </p>

        <h2 className="font-heading text-xl font-semibold text-navy">
          The bottom line
        </h2>
        <p>
          MyOutDesk is the stronger choice if you are in an industry they
          specialize in, particularly real estate. Their vetting is more rigorous
          and the assistants come with relevant domain knowledge. The three-month
          commitment is a reasonable tradeoff for the level of screening and
          specialization you get. If you handle sensitive client data, their
          background check process is a genuine differentiator.
        </p>
        <p>
          Stealth Agents is the better fit if you want general VA support with
          lower commitment and faster matching. For most generic EA needs at
          this price tier, Stealth Agents offers more flexibility and a lower
          barrier to entry. You can start this week, see how it goes, and
          adjust without contractual friction.
        </p>
        <p>
          For industry-specific work where pre-training matters, MyOutDesk is
          worth the longer onboarding and commitment. For everything else,
          Stealth Agents gets you started faster with less risk.
        </p>
      </div>

      <div className="flex flex-wrap gap-4 mb-10">
        <Link
          href="/services/myoutdesk"
          className="text-blue-600 hover:underline text-sm"
        >
          Read full MyOutDesk review &rarr;
        </Link>
        <Link
          href="/services/stealth-agents"
          className="text-blue-600 hover:underline text-sm"
        >
          Read full Stealth Agents review &rarr;
        </Link>
      </div>

      <Link href="/vs" className="text-blue-600 hover:underline text-sm">
        &larr; All comparisons
      </Link>
    </div>
  );
}
