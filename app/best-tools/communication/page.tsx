import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Communication Tools for Working With an EA | The EA Index",
  description:
    "Compare Slack, Loom, Voxer, and other communication tools for managing a remote executive assistant. Practical setup tips included.",
};

const tools = [
  {
    name: "Slack",
    oneLiner: "Channel-based messaging built for teams and async work.",
    whyItWorks:
      "Dedicated channels let you separate EA tasks from team noise. Your EA can drop status updates, ask clarifying questions, and share files without clogging your inbox. Slack Connect also works if your EA is from an external service. Create a private channel just for the two of you, pin your standing instructions doc at the top, and you have a clean communication hub from day one. The threaded replies keep conversations organized, and the search function means your EA can reference past instructions without asking you again.",
    pricing: "Free plan available. Pro starts at $7.25/user/month.",
    bestFor: "Teams already on Slack or anyone who wants structured async communication",
  },
  {
    name: "Loom",
    oneLiner: "Quick screen and video recordings you can send instead of typing long explanations.",
    whyItWorks:
      "Showing is faster than explaining. Record a 2-minute Loom to walk your EA through a new process, and they can rewatch it anytime. Eliminates the back-and-forth that happens when written instructions are ambiguous. The transcription feature means your EA can search the content of your videos later. You can also organize Looms into folders by task category, building a visual SOP library over time. Most founders who adopt Loom with their EA say it cut their onboarding time in half.",
    pricing: "Free plan with 25 videos. Business starts at $12.50/user/month.",
    bestFor: "Process handoffs, training, and anything visual",
  },
  {
    name: "Voxer",
    oneLiner: "Walkie-talkie style voice messaging app.",
    whyItWorks:
      "When typing feels like too much but a call is overkill, Voxer fills the gap. Send a 30-second voice note while walking to your car. Your EA listens on their own time and responds the same way. Many EA services specifically recommend it. The asynchronous nature means time zone differences do not matter. Your morning brain dump becomes your EA's to-do list when they start their day. Voxer messages can also be replayed at faster speed, which experienced EAs use to process voice notes efficiently.",
    pricing: "Free for basic use. Voxer Pro is $3.99/month.",
    bestFor: "Founders who hate typing and prefer voice communication",
  },
  {
    name: "Telegram",
    oneLiner: "Fast, lightweight messaging with strong file sharing.",
    whyItWorks:
      "If you want something simpler than Slack but more capable than texting, Telegram works well. Secret chats add encryption, and the app handles large file transfers without compression. Popular with international EA services. The bot API lets you set up automations like daily task reminders or status check-ins. Telegram also supports voice messages natively, so you get some of the Voxer benefits without another app. The web client means your EA can use it on desktop without installing anything.",
    pricing: "Free.",
    bestFor: "Simple, fast communication with international EAs",
  },
  {
    name: "Google Chat (Workspace)",
    oneLiner: "Built-in chat for teams already using Google Workspace.",
    whyItWorks:
      "If your EA is managing your Google Calendar and Gmail, Google Chat keeps everything in one ecosystem. They can share Drive links inline, and Spaces work like lightweight channels for organizing different task areas. The integration with Google Meet means you can jump on a quick video call without leaving the app. For teams already paying for Google Workspace, there is zero additional cost and zero additional login management. The integration with Google Tasks also lets your EA assign tasks directly from chat messages.",
    pricing: "Included with Google Workspace ($7/user/month and up).",
    bestFor: "Google Workspace users who want zero additional tools",
  },
];

export default function CommunicationToolsPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/best-tools"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; All tool guides
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
        Best Communication Tools for Working With Your EA
      </h1>

      <div className="prose">
        <p>
          The number one reason EA relationships fail early is poor
          communication setup. Not bad communication skills — bad
          communication <em>infrastructure</em>. If your EA has to guess
          whether to text you, email you, or wait for your next call, things
          will slip. Messages get lost across five different apps. Context
          disappears into DM threads nobody can search. Your EA spends more
          time figuring out how to reach you than actually doing the work.
        </p>
        <p>
          Pick one primary channel. Make it async-friendly. Set expectations
          on response times. That alone solves most problems. Here are the
          tools that work best, along with specific guidance on how to set
          each one up for an effective EA working relationship.
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
            <strong>Pick one primary channel and stick with it.</strong> Do
            not split communication across Slack, text, email, and WhatsApp.
            Your EA needs one place to check, and you need one place to send
            things. Everything else is noise. The specific tool matters far
            less than the discipline of using only one. If you catch yourself
            sending a task via text when your primary channel is Slack, you
            are undermining the system.
          </li>
          <li>
            <strong>Create a &quot;standing instructions&quot; doc.</strong>{" "}
            Pin it in your shared channel. Include your preferences for how
            and when to be contacted, what decisions your EA can make
            independently, and what always needs your approval. This document
            should answer the 20 most common questions your EA would
            otherwise ask you. Update it monthly as new situations come up.
          </li>
          <li>
            <strong>Use Loom for any process that takes more than two sentences to explain.</strong>{" "}
            Record it once. Your EA can reference it forever. This pays for
            itself in the first week. A five-minute Loom recording replacing
            a 30-minute back-and-forth email chain is one of the most
            obvious productivity wins in any EA relationship. Build a Loom
            library organized by task category.
          </li>
          <li>
            <strong>Set response time expectations on day one.</strong> Tell
            your EA how fast you expect replies and ask them the same. Most
            async-first setups work well with a 2-4 hour response window
            during business hours. For urgent matters, define what counts as
            urgent and establish a separate signal (a phone call, a specific
            Slack emoji reaction, or a text message).
          </li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-navy">
          Common communication mistakes to avoid
        </h2>
        <p>
          <strong>Using too many channels.</strong> The most common problem
          is scattering communication across Slack, email, text, and voice
          notes. Your EA cannot build a reliable workflow when they need to
          check four places for new tasks. Pick one. The only exception is a
          designated urgent channel (like a text message) that is used
          sparingly.
        </p>
        <p>
          <strong>Treating every message as urgent.</strong> If you send
          everything with the same priority, your EA has no way to triage.
          They either treat everything as urgent (burning out) or nothing as
          urgent (missing real deadlines). Use explicit priority labels. A
          simple system works: no label means this week, &quot;today&quot;
          means today, and &quot;urgent&quot; means drop everything.
        </p>
        <p>
          <strong>Voice notes without written follow-up.</strong> Voice notes
          are great for context and nuance, but they are terrible for
          reference. If you send a voice note with three tasks embedded in
          it, your EA has to re-listen to find specific details later. Pair
          voice notes with a quick text summary: &quot;Just sent a Voxer
          about the Austin trip. Key items: book flights for the 15th,
          restaurant for 6 people, hotel near the conference center.&quot;
        </p>
        <p>
          <strong>Not establishing a daily rhythm.</strong> The best EA
          communication setups include a lightweight daily touchpoint. Your
          EA sends a quick end-of-day summary: what was completed, what is
          in progress, and any open questions. You review it in 60 seconds.
          This replaces the need for status meetings, reduces your EA&apos;s
          anxiety about whether they are on track, and gives you peace of
          mind without micromanaging.
        </p>

        <h2 className="font-heading text-2xl font-bold text-navy">
          Which tool to pick based on your situation
        </h2>
        <p>
          If you already use Slack for your team, add your EA there. Do not
          introduce a second messaging tool just for them. The context of
          being in the same workspace as your team (with appropriate channel
          access) makes your EA more effective.
        </p>
        <p>
          If you are a solo founder without a team Slack, Voxer plus a
          shared Notion or Google Doc for task tracking is a lightweight
          setup that works well. Voice notes for quick communication, a
          shared doc for structured task management.
        </p>
        <p>
          If your EA is international and you want something fast and free,
          Telegram is the pragmatic choice. It works everywhere, handles
          files well, and does not require a paid subscription.
        </p>
        <p>
          If you are all-in on Google Workspace, use Google Chat. Adding
          another tool introduces friction for no benefit. Your EA is already
          in your calendar and email; keep chat in the same ecosystem.
        </p>
        <p>
          Regardless of which tool you pick, add Loom to your stack. It is
          the one supplementary tool that genuinely saves time for every EA
          setup, regardless of your primary communication channel.
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
