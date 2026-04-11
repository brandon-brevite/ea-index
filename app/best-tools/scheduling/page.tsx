import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Scheduling Tools for Working With an EA | The EA Index",
  description:
    "Compare Calendly, Motion, Reclaim, SavvyCal, and Cal.com for calendar management with your remote executive assistant.",
};

const tools = [
  {
    name: "Calendly",
    oneLiner: "The most widely used scheduling link tool.",
    whyItWorks:
      "Your EA can manage your Calendly event types, set buffer times, and control availability windows without touching your calendar directly. Round-robin and team scheduling work if your EA needs to coordinate meetings with multiple people. The routing forms feature lets them qualify meeting requests before anything lands on your calendar. Calendly integrations with Salesforce, HubSpot, and Stripe make it more than just a scheduling link — your EA can track who booked, what they paid, and where they came from, all from one dashboard.",
    pricing: "Free plan with one event type. Standard starts at $10/user/month.",
    bestFor: "Simple external scheduling links with broad adoption",
  },
  {
    name: "Motion",
    oneLiner: "AI-powered calendar that auto-schedules tasks and meetings.",
    whyItWorks:
      "Motion takes calendar management further by automatically blocking time for tasks and rearranging your schedule when priorities change. Your EA can add tasks with deadlines and Motion figures out when to do them. This reduces the coordination load because the tool handles a lot of the scheduling logic itself. Motion also auto-reschedules when meetings run long or new priorities emerge. For founders who want their calendar to be proactively managed rather than reactively maintained, Motion plus an EA is a powerful combination. The EA handles the human judgment calls while Motion handles the Tetris.",
    pricing: "Individual plan starts at $19/month.",
    bestFor: "Founders who want AI to handle scheduling logistics automatically",
  },
  {
    name: "Reclaim.ai",
    oneLiner: "Smart calendar assistant that defends your focus time and habits.",
    whyItWorks:
      "Reclaim automatically protects recurring habits — lunch, focus blocks, exercise — and flexes them around meetings. Your EA handles the high-touch scheduling while Reclaim handles the defensive scheduling. Together, they keep your calendar from becoming a wall-to-wall meeting nightmare. Reclaim marks your habits as free or busy dynamically depending on how packed your day is, which means external scheduling links see accurate availability. Your EA does not need to manually block focus time because Reclaim does it automatically, and they do not need to unblock it when a priority meeting needs that slot because Reclaim flexes.",
    pricing: "Free plan available. Starter starts at $8/user/month.",
    bestFor: "Protecting focus time and personal habits alongside EA scheduling",
  },
  {
    name: "SavvyCal",
    oneLiner: "Scheduling links that let recipients overlay their own calendar.",
    whyItWorks:
      "SavvyCal looks more polished than Calendly and lets the person booking overlay their own calendar on top of your availability. Your EA can create personalized scheduling links with pre-filled details for different meeting types. The ranked availability feature prioritizes certain time slots over others, so your preferred meeting times get booked first and less ideal times are only shown when nothing else works. This subtle feature means your EA can encode your scheduling preferences directly into the link rather than hoping the other person picks a good time.",
    pricing: "Free plan with one link. Basic starts at $12/user/month.",
    bestFor: "High-touch scheduling where first impressions matter",
  },
  {
    name: "Cal.com",
    oneLiner: "Open-source scheduling infrastructure with full customization.",
    whyItWorks:
      "Cal.com gives you the most control over your scheduling flow. Self-host it if you care about data ownership, or use the cloud version. Your EA gets granular control over availability rules, and the workflows feature can automate pre-meeting and post-meeting actions like sending prep docs or follow-up emails. Cal.com also supports dynamic booking links that adjust based on meeting type, attendee, or time of year. For teams with complex scheduling needs (multiple executives, different meeting categories, custom routing logic), Cal.com provides the infrastructure to build exactly what you need.",
    pricing: "Free for individuals. Team plan starts at $12/user/month.",
    bestFor: "Teams that want full control and customization",
  },
];

export default function SchedulingToolsPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/best-tools"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; All tool guides
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
        Best Scheduling Tools for Working With Your EA
      </h1>

      <div className="prose">
        <p>
          Calendar management is one of the first things founders delegate to
          an EA, and one of the areas where the wrong setup creates more work
          instead of less. If your EA has to message you every time someone
          wants a meeting, you have not actually delegated scheduling — you
          have just added a middleman. The goal is for your EA to handle 90%
          of scheduling decisions independently, only looping you in for
          genuine judgment calls.
        </p>
        <p>
          The right scheduling tool gives your EA the autonomy to book, move,
          and protect your time without checking with you on every decision.
          The wrong tool creates a bottleneck where you are still the
          gatekeeper for every calendar change, just with an extra step in
          between.
        </p>
      </div>

      <div className="mt-10 space-y-8">
        {tools.map((tool) => (
          <div
            key={tool.name}
            className="border border-gray-200 rounded-xl p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h2 className="font-heading text-xl font-semibold text-navy">
                {tool.name}
              </h2>
              <span className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1 rounded-full whitespace-nowrap">
                {tool.bestFor}
              </span>
            </div>
            <p className="text-gray-500 text-sm italic mb-3">
              {tool.oneLiner}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mb-3">
              {tool.whyItWorks}
            </p>
            <p className="text-sm text-gray-400">
              <span className="font-medium text-gray-500">Pricing:</span>{" "}
              {tool.pricing}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-12 prose">
        <h2 className="font-heading text-2xl font-bold text-navy">
          How to set this up with your EA
        </h2>
        <ol>
          <li>
            <strong>Give your EA full calendar edit access.</strong> View-only
            access means they still have to ask you to make changes. Grant
            edit permissions on your Google Calendar or Outlook Calendar so
            they can move, create, and cancel events directly. This feels
            uncomfortable at first, but it is the only way to truly delegate
            calendar management. If you are worried about mistakes, start
            with a two-week period where they propose changes and you
            approve them, then switch to full autonomy.
          </li>
          <li>
            <strong>Define your scheduling rules in writing.</strong> Document
            your preferences: no meetings before 10am, 15-minute buffers
            between calls, Fridays are meeting-free, investor calls get
            priority over vendor calls, never schedule during school pickup.
            Your EA cannot enforce rules they do not know about. Be specific.
            Vague preferences like &quot;I like mornings free&quot; are not
            actionable. Specific rules like &quot;no external meetings before
            11am ET, internal standups can be at 9:30am&quot; are.
          </li>
          <li>
            <strong>Let your EA own your scheduling link.</strong> Add them as
            a team member on Calendly or SavvyCal so they can create event
            types, adjust availability, and manage booking pages without
            needing your login. They should be able to create a custom link
            for a specific meeting, adjust your availability for a particular
            week, or disable booking during vacation, all without asking you
            for access.
          </li>
          <li>
            <strong>Review your calendar together weekly.</strong> A 10-minute
            weekly sync where you look at the upcoming week together helps
            catch conflicts early and lets your EA learn your preferences
            faster. After a month of weekly reviews, most EAs can manage the
            calendar with near-complete autonomy. After three months, the
            weekly review often becomes biweekly or drops off entirely because
            your EA has internalized your patterns.
          </li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-navy">
          The scheduling rules document
        </h2>
        <p>
          This document is the most important thing you will create for your EA.
          Here is what it should cover, at minimum:
        </p>
        <p>
          <strong>Availability windows.</strong> When can meetings be booked?
          Define your earliest and latest meeting times, your lunch block,
          and any days that are off-limits. Be specific about time zones if
          you work with people in multiple regions.
        </p>
        <p>
          <strong>Meeting types and durations.</strong> Different meetings
          get different time slots. A quick sync is 15 minutes. A first call
          with a potential partner is 30 minutes. A board meeting prep is 60
          minutes. Your EA needs to know the default duration for each type
          so they do not book an hour for a five-minute check-in.
        </p>
        <p>
          <strong>Priority hierarchy.</strong> When two meetings conflict,
          which one wins? Investors usually beat vendors. Direct reports
          usually beat external meetings. Recurring team meetings usually
          lose to one-time opportunities. Write this hierarchy down so your
          EA can resolve conflicts without escalating.
        </p>
        <p>
          <strong>Buffer requirements.</strong> Do you need 15 minutes
          between calls to reset? Do you need 30 minutes before an
          important meeting to review prep materials? Buffers are the
          difference between a manageable calendar and one that leaves you
          frazzled by 2pm.
        </p>
        <p>
          <strong>Autonomy levels.</strong> Define what your EA can do
          without asking. They can accept meetings from your direct reports.
          They should check with you before scheduling anything with
          investors. They should never cancel a meeting with a client without
          your explicit approval. Clear autonomy levels eliminate the
          bottleneck of your EA asking permission for routine decisions.
        </p>

        <h2 className="font-heading text-2xl font-bold text-navy">
          Which tool to pick
        </h2>
        <p>
          For most people, Calendly is the right starting point. It is the
          tool most people have encountered, which means less friction when
          sharing scheduling links externally. Pair it with direct Google
          Calendar access for your EA, and you have a complete scheduling
          setup for under $10 per month.
        </p>
        <p>
          If you are a founder whose calendar is in constant flux and you
          want AI to help manage the chaos, add Motion or Reclaim on top of
          your scheduling link tool. These are not replacements for an EA;
          they are force multipliers that handle the algorithmic side of
          scheduling while your EA handles the human side.
        </p>
        <p>
          If you care about branding and the scheduling experience for the
          person booking, SavvyCal is the upgrade. The calendar overlay
          feature genuinely reduces scheduling friction for the booker,
          which matters when you are scheduling with executives or
          investors who value polish.
        </p>
      </div>

      <div className="mt-10">
        <Link
          href="/best-tools"
          className="text-blue-600 hover:underline text-sm"
        >
          &larr; Back to all tool guides
        </Link>
      </div>
    </div>
  );
}
