import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Project Management Tools for Working With an EA | The EA Index",
  description:
    "Compare Asana, Notion, Trello, ClickUp, and Monday for managing tasks with your remote executive assistant. Setup tips included.",
};

const tools = [
  {
    name: "Asana",
    oneLiner: "Task and project management with strong recurring task support.",
    whyItWorks:
      "Asana is the most common tool recommended by EA services for a reason. It handles recurring tasks well, has clear ownership and due dates on everything, and the board/list views let you and your EA see exactly what is in progress. Templates save time on repeatable workflows like travel booking or meeting prep. The My Tasks view gives your EA a prioritized daily work list without you needing to tell them what to focus on. Custom fields let you add priority levels, task categories, or estimated time so your EA can plan their day efficiently.",
    pricing: "Free for up to 10 users. Premium starts at $10.99/user/month.",
    bestFor: "Structured task management with recurring workflows",
  },
  {
    name: "Notion",
    oneLiner: "All-in-one workspace combining docs, databases, and task boards.",
    whyItWorks:
      "If you want your EA to manage tasks, maintain SOPs, and organize reference docs in one place, Notion does all of it. Build a dashboard your EA checks daily with task databases, a meeting notes log, and links to key docs. The learning curve is steeper, but the flexibility is unmatched. Relation databases let you link tasks to projects, contacts to meetings, and SOPs to the tasks they support. Your EA can build views filtered to show only their active tasks, upcoming deadlines, or tasks waiting on your approval.",
    pricing: "Free for personal use. Plus starts at $10/user/month.",
    bestFor: "Founders who want tasks + docs + SOPs in one place",
  },
  {
    name: "Trello",
    oneLiner: "Simple kanban boards with drag-and-drop task management.",
    whyItWorks:
      "Trello works when you want something dead simple. Create columns for Inbox, In Progress, Waiting On You, and Done. Your EA moves cards through the pipeline. No training needed. The power-ups add automation if you grow into it, but the core product requires zero onboarding. Butler automations can move cards automatically based on due dates or labels, handle recurring tasks, and send notifications. The simplicity is the point: if you have tried Asana or Notion and found them overwhelming, Trello strips project management down to its essentials.",
    pricing: "Free plan available. Standard starts at $5/user/month.",
    bestFor: "People who want the simplest possible task board",
  },
  {
    name: "ClickUp",
    oneLiner: "Feature-rich project management with heavy customization.",
    whyItWorks:
      "ClickUp gives you more features per dollar than anything else on this list. Custom fields, multiple views, time tracking, and automations are all built in. The tradeoff is complexity — it takes longer to set up and can feel overwhelming. Works best when your EA is experienced with PM tools. The time tracking feature is particularly useful if your EA bills hourly, as they can log time directly against tasks. ClickUp Docs let you embed SOPs right next to the tasks they relate to, and the Goals feature helps track progress on larger initiatives.",
    pricing: "Free plan available. Unlimited starts at $7/user/month.",
    bestFor: "Power users who want granular control and automation",
  },
  {
    name: "Monday.com",
    oneLiner: "Visual project management with a spreadsheet-like feel.",
    whyItWorks:
      "Monday is intuitive for people who think in spreadsheets. The color-coded status columns make it easy to see where things stand at a glance. Good automation recipes for recurring tasks, and the dashboard views give you a high-level snapshot without digging into individual items. The form feature lets your EA create intake forms for common requests, so instead of parsing a long email from you, they get structured data. Monday also handles file attachments well, keeping relevant documents attached directly to their associated tasks.",
    pricing: "Free for up to 2 users. Basic starts at $9/seat/month.",
    bestFor: "Visual thinkers and spreadsheet-oriented founders",
  },
];

export default function ProjectManagementToolsPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/best-tools"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; All tool guides
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
        Best Project Management Tools for Working With Your EA
      </h1>

      <div className="prose">
        <p>
          Without a shared task system, you become the task system. Every
          request lives in a text, an email, or your head. Your EA ends up
          asking what to work on next instead of already knowing. A project
          management tool fixes this by giving both of you a single source of
          truth for what needs to happen, when, and who owns it.
        </p>
        <p>
          You do not need the most powerful tool. You need one that both of
          you will actually use every day. The best project management tool
          for an EA relationship is the one that takes less than 10 seconds
          to add a new task and less than 30 seconds to check the status of
          everything in progress. Anything more complex than that and one of
          you will stop using it within a month.
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
            <strong>Start with a single board or project.</strong> Do not
            build an elaborate system on day one. Create one board called
            &quot;EA Tasks&quot; with basic columns: To Do, In Progress,
            Waiting, Done. Expand later once you have a rhythm. Overbuilding
            the system before you use it is a classic productivity trap.
            Your first month should be about establishing the habit of using
            the tool, not perfecting its configuration.
          </li>
          <li>
            <strong>Make your EA the board owner.</strong> They should be the
            one organizing, prioritizing, and updating statuses. Your job is
            to add tasks and review completed work. If you are the one
            managing the board, you are doing your EA&apos;s job. Give them
            admin access and explicitly tell them they own the organization
            of the task system.
          </li>
          <li>
            <strong>Set up recurring tasks immediately.</strong> Anything
            your EA does weekly or monthly — inbox triage, expense reports,
            meeting prep — should be a recurring task from day one. This
            eliminates the need to remind them and gives you a log of
            what&apos;s been done. Most tools handle recurring tasks natively.
            Set the recurrence, add clear instructions in the task description,
            and let the system handle the reminders.
          </li>
          <li>
            <strong>Use due dates and priorities on everything.</strong> A
            task without a due date is a suggestion. Your EA needs to know
            what is urgent versus what can wait. Color-coded priorities (P1,
            P2, P3) keep this simple. P1 means today. P2 means this week. P3
            means when you have time. If everything is P1, nothing is P1.
          </li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-navy">
          Choosing the right tool for your situation
        </h2>
        <p>
          <strong>If you want the safest bet:</strong> Go with Asana. Most EA
          services train their assistants on it, which means zero tool
          onboarding. The free plan supports up to 10 users, which is more
          than enough for an EA relationship. Asana&apos;s recurring task
          feature is the best of the five options here, and that matters
          because recurring tasks are the backbone of EA task management.
        </p>
        <p>
          <strong>If you already have a knowledge base problem:</strong> Go
          with Notion. If your SOPs live in Google Docs, your tasks are in
          a spreadsheet, and your meeting notes are scattered across Apple
          Notes and Slack messages, consolidating into Notion solves multiple
          problems at once. The upfront investment in setting up databases
          pays off when your EA can find any piece of information in one
          place.
        </p>
        <p>
          <strong>If your EA is not technical:</strong> Go with Trello. There
          is nothing to learn. Drag a card from one column to another. That
          is it. Some EAs come from backgrounds where they have never used
          project management software. Trello&apos;s visual simplicity means
          they can be productive on day one.
        </p>
        <p>
          <strong>If you manage multiple people or projects:</strong> Go with
          ClickUp or Monday. Once your EA is managing tasks across a team,
          not just your personal workload, you need the additional structure
          that ClickUp and Monday provide. Multiple workspaces, permission
          levels, and cross-project reporting become important at that scale.
        </p>

        <h2 className="font-heading text-2xl font-bold text-navy">
          The task format that works
        </h2>
        <p>
          Every task you add to the board should include four things: a clear
          title (not &quot;follow up on that thing&quot;), a due date, a
          priority level, and enough context in the description for your EA
          to complete it without asking a follow-up question. If writing
          the task takes you more than 60 seconds, record a Loom instead and
          paste the link in the description.
        </p>
        <p>
          Bad task: &quot;Handle the vendor situation.&quot;
        </p>
        <p>
          Good task: &quot;Email John at Acme Corp to renegotiate our
          contract renewal. We want to extend for 12 months at the same
          rate. Our current contract expires April 30. Copy me on the email
          but you can handle the back and forth. Due by end of day
          Wednesday.&quot;
        </p>
        <p>
          The two-minute rule applies here: if writing a thorough task
          description takes less time than explaining it later when your EA
          comes back with questions, write the description. If it would take
          longer, record a Loom. Either way, invest the time upfront.
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
