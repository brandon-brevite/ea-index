import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delegation Frameworks That Work | The EA Index",
  description:
    "Proven delegation frameworks for working with an executive assistant. The 70% rule, SOPs, Loom recordings, RACI, and async communication patterns that scale.",
};

export default function DelegationFrameworksPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/tactics"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; Back to Tactics
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 tracking-tight">
        Delegation Frameworks That Work
      </h1>

      <div className="prose">
        <p>
          Delegation fails not because of bad assistants but because of bad
          systems. You can hire the most talented EA in the world, and
          they&apos;ll still underperform if you delegate with vague
          instructions and no structure. The frameworks below are what
          separates people who get 10x value from their EA from people who
          cancel after three months.
        </p>
        <p>
          None of these frameworks are complicated. They are straightforward
          systems that take minimal time to implement but fundamentally change
          how effectively your EA operates. The challenge is not understanding
          them; it is actually doing them consistently instead of falling back
          into the habit of firing off half-baked tasks and hoping for the best.
        </p>

        <h2 className="font-heading text-navy">The 70% Rule</h2>

        <p>
          If someone else can do a task at least 70% as well as you, delegate
          it. This is the single most useful mental model for delegation, and
          most people get it wrong by holding out for 100%.
        </p>

        <p>
          Here&apos;s the math. Say you spend 2 hours a week scheduling
          meetings. Your EA might take 2.5 hours at first and occasionally
          book a suboptimal time. That&apos;s maybe 70&ndash;80% of your
          quality. But you got 2 hours back. After a month, they&apos;re at
          95% because they&apos;ve learned your preferences. The gap between
          your quality and theirs closes fast&mdash;but only if you let them
          start.
        </p>

        <p>
          The 70% rule also helps you identify what <em>not</em> to delegate.
          Investor negotiations, key hiring decisions, product
          strategy&mdash;these require your full judgment and context. If
          someone else would do a materially worse job than you, keep it. For
          everything else, let go.
        </p>

        <p>
          A practical way to apply this: when you catch yourself about to do
          a task, pause and ask whether your EA could do it at 70% of your
          quality. If yes, add it to their queue and move on. If no, do it
          yourself. Over time, the 70% threshold shifts upward as your EA
          improves, and tasks that seemed impossible to delegate become routine.
        </p>

        <p>
          The hidden cost of not applying the 70% rule is that you stay
          trapped doing $50/hour work when you should be doing $500/hour
          work. Every hour you spend scheduling meetings or formatting
          spreadsheets is an hour you did not spend on strategy, sales, or
          product decisions that actually move your business.
        </p>

        <h2 className="font-heading text-navy">SOPs: Your Delegation Infrastructure</h2>

        <p>
          Standard Operating Procedures sound corporate, but they&apos;re the
          backbone of good delegation. An SOP is just a written description
          of how to do a task. It doesn&apos;t need to be fancy. A Google Doc
          with numbered steps works.
        </p>

        <p>
          For every recurring task you delegate, write an SOP that covers:
          when to do it (trigger or schedule), the step-by-step process, the
          expected output, who to contact if stuck, and common edge cases.
          A good SOP is specific enough that someone who has never done the
          task before could follow it and produce acceptable results.
        </p>

        <p>
          The trick is to build SOPs as you delegate, not before. The first
          time you hand off a task, record yourself doing it or write rough
          instructions. After your EA does it once, ask them to update the
          SOP with anything that was unclear. After three rounds, you have a
          polished procedure that anyone could follow. This means your
          delegation doesn&apos;t break if your EA is out sick or if you
          switch services.
        </p>

        <p>
          Here is what makes the difference between a useful SOP and a
          document nobody references: include the edge cases. The SOP for
          booking travel should not just say &quot;book flights on Delta
          when possible.&quot; It should say &quot;book Delta when the price
          difference is under $150 compared to other carriers. If Delta is
          more than $150 more expensive, book the cheapest option but confirm
          with me first. Always book window seats. If no window seats are
          available in economy, check the price difference for economy plus
          and send me both options.&quot; Edge cases are where most
          delegation breaks down, and documenting them in the SOP prevents
          repeated back-and-forth conversations.
        </p>

        <p>
          Store all SOPs in one place your EA can access easily. A shared
          Notion workspace or a Google Drive folder works. Label them
          clearly: &quot;SOP - Travel Booking,&quot; &quot;SOP - Email
          Triage,&quot; &quot;SOP - Expense Reports.&quot; When your EA
          finishes a task, they should be able to find the SOP for their
          next task within 10 seconds.
        </p>

        <h2 className="font-heading text-navy">Loom Over Docs (When It Matters)</h2>

        <p>
          Some tasks are hard to explain in writing. Anything involving
          software workflows, nuanced judgment, or visual decision-making is
          faster to show than to describe. Record a 3&ndash;5 minute Loom
          video walking through the process. Your EA can pause, rewatch, and
          reference it later.
        </p>

        <p>
          The best approach is layered: a Loom for the first handoff, then a
          written SOP your EA creates from the video. The video captures the
          nuance. The document becomes the day-to-day reference. Together they
          cover 95% of questions.
        </p>

        <p>
          One tip: Don&apos;t over-polish your Looms. The goal is clarity, not
          production quality. Hit record, talk through the task, stop
          recording. Done. A rough Loom sent today is infinitely more useful
          than a polished one you never get around to recording. Your EA does
          not care about your presentation skills; they care about
          understanding the task.
        </p>

        <p>
          Loom is particularly effective for tasks that involve navigating
          specific software. Explaining how to create a report in your CRM
          through text requires screenshots, arrows, and extensive
          descriptions. A Loom showing you click through the process takes
          90 seconds to record and is immediately clear. Build a library of
          these recordings organized by task category. Over time, you create
          a visual training program that any future EA can use to get up to
          speed.
        </p>

        <h2 className="font-heading text-navy">The Authority Matrix</h2>

        <p>
          For each category of work your EA handles, define one of three
          authority levels:
        </p>

        <p>
          <strong>Level 1: Act independently.</strong> Your EA handles these
          tasks end to end without checking with you. Examples: scheduling
          meetings with known contacts, booking travel within established
          preferences, triaging email, processing expense reports. These
          are tasks with clear rules and low risk of a bad outcome.
        </p>

        <p>
          <strong>Level 2: Recommend and wait.</strong> Your EA does the work,
          presents options or a recommendation, and waits for your approval
          before proceeding. Examples: booking travel that exceeds budget
          guidelines, scheduling meetings with investors or board members,
          drafting replies to sensitive emails. These are tasks where your
          judgment adds value but the prep work can be done without you.
        </p>

        <p>
          <strong>Level 3: Research only.</strong> Your EA gathers information
          but takes no action. Examples: competitive research, vendor
          evaluations, gathering data for decisions you need to make
          personally. These are tasks where you need the inputs but the
          output is entirely your call.
        </p>

        <p>
          A common failure mode is leaving this ambiguous. Your EA
          isn&apos;t sure if they should book the flight or wait for your
          sign-off. They wait. You wonder why nothing got done. Define the
          authority level upfront for each task category. Write it down in
          a shared document. Revisit it monthly and move tasks from Level 2
          to Level 1 as your EA demonstrates good judgment.
        </p>

        <h2 className="font-heading text-navy">Async Communication Patterns</h2>

        <p>
          Most EA relationships are async, especially with remote or overseas
          assistants. The communication system you set up matters more than
          the communication tool you choose.
        </p>

        <p>
          <strong>Daily standup message.</strong> Your EA sends a brief
          end-of-day update: tasks completed, tasks in progress, open
          questions. You scan it in 60 seconds. This replaces most of the
          status meetings people default to. The format should be consistent
          every day so you can scan it quickly. Three sections: Done,
          In Progress, Questions. That is it.
        </p>

        <p>
          <strong>Task queue in a shared tool.</strong> Use Asana, Notion,
          Todoist, or even a shared Google Doc. Every task goes in the queue
          with a deadline and priority level. Your EA works the queue. You add
          to it. Nobody has to remember what was said in a Slack thread three
          days ago. The task queue is the single source of truth for what
          needs to happen. If it is not in the queue, it does not exist.
        </p>

        <p>
          <strong>Urgency signals.</strong> Define clear labels. &quot;When you
          get a chance&quot; means this week. &quot;Today please&quot; means
          today. &quot;Urgent&quot; means drop everything. If you use
          &quot;urgent&quot; more than once a week, nothing is urgent and your
          EA will stop treating it that way. Reserve &quot;urgent&quot; for
          genuine time-sensitive situations: a meeting in two hours needs
          materials, a flight needs rebooking due to a cancellation, an
          investor responded to a time-sensitive ask.
        </p>

        <p>
          <strong>Weekly planning session.</strong> In addition to the daily
          standup, a 10-15 minute weekly sync (Monday morning works well) lets
          you align on priorities for the week, flag anything unusual coming
          up, and review what went well or poorly the previous week. This
          keeps the relationship on track without requiring daily meetings.
          After the first month, many EA relationships run almost entirely
          on the daily async standup and the weekly planning session, with
          ad-hoc messages only for genuinely new or time-sensitive items.
        </p>

        <h2 className="font-heading text-navy">Putting It All Together</h2>

        <p>
          The playbook is straightforward. Use the 70% rule to decide what to
          delegate. Create a Loom for the first handoff. Have your EA write
          the SOP after doing it once. Define the authority level so they know
          how much autonomy they have. Communicate async with a daily standup
          and a shared task queue.
        </p>

        <p>
          None of this is complicated. But most people skip it because it
          feels like overhead. It&apos;s not. It&apos;s the difference between
          an EA who&apos;s an expense and an EA who&apos;s an investment.
          Build the system once, and it pays dividends for as long as you have
          an assistant. These frameworks also transfer. If you switch EA
          services or your assistant changes, the SOPs, authority matrix,
          and communication patterns carry over. Your next EA gets up to
          speed in days instead of weeks because the infrastructure already
          exists.
        </p>
      </div>
    </div>
  );
}
