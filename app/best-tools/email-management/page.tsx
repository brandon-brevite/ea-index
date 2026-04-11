import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Email Management Tools for Working With an EA | The EA Index",
  description:
    "Compare Google Workspace delegation, Superhuman, SaneBox, and other email tools for inbox management with your remote executive assistant.",
};

const tools = [
  {
    name: "Google Workspace (Gmail Delegation)",
    oneLiner: "Native Gmail feature that lets your EA read and send from your inbox.",
    whyItWorks:
      "Gmail delegation is the simplest way to give your EA inbox access. They see your email in their own Gmail interface without needing your password. Emails they send show as \"sent by [EA name] on behalf of [you].\" No extra software, no monthly fee beyond your existing Workspace plan. This is where most people should start. The delegation setup takes five minutes through Gmail settings, and your EA can be triaging your inbox the same day. They get full read and send access while you retain complete control and can revoke delegation at any time.",
    pricing: "Included with Google Workspace ($7/user/month and up).",
    bestFor: "The default starting point for Gmail users",
  },
  {
    name: "Superhuman",
    oneLiner: "High-speed email client with keyboard shortcuts and split inbox.",
    whyItWorks:
      "If your EA is processing high volumes of email, Superhuman makes them significantly faster. The split inbox feature lets them triage by sender type — VIPs in one section, newsletters in another, everything else below. Shared drafts let your EA compose replies for your review before sending. The speed difference is real. Superhuman's keyboard shortcuts and snippet feature mean an experienced EA can process 100+ emails in the time it takes to handle 40 in regular Gmail. The Read Statuses feature also lets your EA confirm that important recipients opened time-sensitive messages.",
    pricing: "Starts at $25/user/month.",
    bestFor: "High-volume inboxes where EA speed matters",
  },
  {
    name: "SaneBox",
    oneLiner: "AI-powered email filtering that works with any email provider.",
    whyItWorks:
      "SaneBox automatically sorts your incoming email into folders based on importance. Your EA can focus on the SaneBox-designated important folder and batch-process the rest. The SaneBlackHole feature lets them permanently unsubscribe from junk with one drag. Works alongside Gmail delegation or any other email client. SaneBox trains itself on your behavior, so over time, the sorting gets more accurate. The SaneLater folder catches low-priority emails that your EA can batch-process once daily instead of trickling through your main inbox throughout the day.",
    pricing: "Snack plan starts at $7/month. Lunch plan at $12/month.",
    bestFor: "Reducing inbox noise before your EA even sees it",
  },
  {
    name: "Front",
    oneLiner: "Shared inbox platform built for collaborative email management.",
    whyItWorks:
      "Front turns email into a team workflow. Your EA can assign emails to you, leave internal comments on threads, and draft replies for your approval — all without forwarding or CCing. The collision detection prevents you from both replying to the same email. If email management is a major part of your EA's role, Front is purpose-built for it. The rules engine automates routine triage (auto-archive newsletters, auto-assign emails from specific senders to your EA, flag messages containing certain keywords). Internal comments on email threads replace the side-channel conversations about emails that usually happen in Slack.",
    pricing: "Starter plan at $19/user/month. Growth at $59/user/month.",
    bestFor: "Teams where email management is a core EA responsibility",
  },
  {
    name: "Outlook Shared Mailbox",
    oneLiner: "Microsoft 365 feature for shared email access without extra licenses.",
    whyItWorks:
      "If you are on Microsoft 365, shared mailboxes let your EA access your email through their own Outlook login. No extra license needed. They can send as you or on behalf of you, and the setup is handled through the admin console. Works well if your company is already standardized on Microsoft. The Focused Inbox feature in Outlook provides some of the same triage benefits as SaneBox, automatically separating important emails from everything else. Your EA can manage multiple shared mailboxes if they handle email for more than one executive on your team.",
    pricing: "Included with Microsoft 365 Business ($6/user/month and up).",
    bestFor: "Microsoft 365 organizations",
  },
];

export default function EmailManagementToolsPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/best-tools"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; All tool guides
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
        Best Email Management Tools for Working With Your EA
      </h1>

      <div className="prose">
        <p>
          Email delegation is the highest-leverage thing most EAs do. A
          founder spending 90 minutes a day in their inbox can get that down
          to 15 minutes with a trained EA handling triage, drafting replies,
          and flagging only what needs direct attention. Over a month, that
          is roughly 25 hours reclaimed for work that actually moves your
          business forward.
        </p>
        <p>
          But the setup matters. Get delegation wrong and you end up with
          missed emails, duplicate replies, or your EA working blind. Get it
          right and your inbox becomes someone else&apos;s problem — in the
          best way. The tools below range from free built-in features to
          dedicated platforms, and the right choice depends on your email
          volume, your provider, and how central inbox management is to your
          EA&apos;s role.
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
            <strong>Start with Gmail delegation or Outlook shared mailbox.</strong>{" "}
            These are built-in, free with your existing plan, and take 5
            minutes to set up. Do not overcomplicate this on day one. You
            can add tools like Front or Superhuman later if volume justifies
            it. The goal for week one is simply having your EA able to see
            and triage your inbox. Everything else is optimization.
          </li>
          <li>
            <strong>Create a labeling or folder system together.</strong>{" "}
            Agree on labels like &quot;Needs Reply,&quot; &quot;FYI
            Only,&quot; &quot;EA Handled,&quot; and &quot;Waiting On
            Response.&quot; Your EA applies labels as they triage. You scan
            only the &quot;Needs Reply&quot; label each day. Everything else
            is handled or informational. Keep the label count under eight.
            More than that creates decision fatigue for your EA about which
            label to use, which defeats the purpose of the system.
          </li>
          <li>
            <strong>Write a &quot;reply as me&quot; guide.</strong> Give your
            EA examples of how you write emails — your typical sign-off,
            your tone with investors versus customers versus friends, and
            phrases you use often. The goal is for recipients to not notice
            the difference. Include at least five sample emails covering
            different contexts: a scheduling confirmation, a polite decline,
            a follow-up nudge, a warm introduction, and a thank-you note.
            Your EA will reference these templates constantly in the first
            month.
          </li>
          <li>
            <strong>Start with draft-only mode.</strong> For the first 2-4
            weeks, have your EA draft replies but not send them. You review
            and hit send. Once their drafts consistently match your voice,
            give them permission to send directly for routine emails and
            keep drafts-only for sensitive threads. This graduated approach
            builds trust on both sides and prevents the embarrassment of
            a poorly worded email going out under your name.
          </li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-navy">
          The email triage system
        </h2>
        <p>
          A solid triage system is the foundation of EA email management.
          Your EA should process your inbox at least twice per day (morning
          and after lunch), applying labels and taking action on routine
          items. Here is a practical framework:
        </p>
        <p>
          <strong>Tier 1: EA handles completely.</strong> Scheduling
          requests, meeting confirmations, routine vendor communications,
          newsletter unsubscribes, and spam. Your EA resolves these without
          your involvement. You never see them.
        </p>
        <p>
          <strong>Tier 2: EA drafts, you approve.</strong> Replies to
          clients, follow-ups on proposals, responses to introductions,
          and any email where the wrong tone could cause problems. Your EA
          writes the draft, flags it for your review, and you edit or
          approve before sending.
        </p>
        <p>
          <strong>Tier 3: You handle, EA tracks.</strong> Sensitive
          communications with investors, board members, legal matters, or
          key partnerships. Your EA labels these as needing your attention
          and tracks whether you have responded. If you have not replied
          within 24 hours, they remind you.
        </p>
        <p>
          The percentages shift over time. In month one, Tier 2 might be
          60% of your email. By month three, your EA&apos;s drafting has
          improved enough that many Tier 2 emails move to Tier 1. By month
          six, you might only be personally handling 10-15% of your total
          email volume.
        </p>

        <h2 className="font-heading text-2xl font-bold text-navy">
          Advanced email management tactics
        </h2>
        <p>
          <strong>The VIP list.</strong> Create a list of 10-20 people whose
          emails always get priority treatment: your co-founder, key
          investors, top clients, your spouse. When an email arrives from
          someone on the VIP list, your EA flags it immediately regardless
          of the normal triage schedule. This ensures the people who matter
          most never wait for a response.
        </p>
        <p>
          <strong>The follow-up tracker.</strong> Have your EA maintain a
          simple spreadsheet or Asana board tracking sent emails that need
          responses. If you emailed a vendor three days ago and they have
          not replied, your EA sends a follow-up without you needing to
          remember. This alone is worth the cost of an EA for many founders
          who lose deals and opportunities because follow-ups fall through
          the cracks.
        </p>
        <p>
          <strong>The weekly inbox report.</strong> Once a week, your EA
          sends you a brief summary: total emails processed, notable
          threads, follow-ups pending, and anything unusual. This keeps you
          informed without requiring you to dive into the inbox yourself.
          Over time, the weekly report becomes your primary way of
          monitoring your email rather than checking the inbox directly.
        </p>
        <p>
          <strong>Template building.</strong> As your EA drafts more emails,
          have them save recurring reply patterns as templates. Scheduling
          confirmations, thank-you notes, polite declines, and
          introduction requests all follow patterns. Templates save your
          EA time on future similar emails and ensure consistency in your
          communication even when they are handling high volume.
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
