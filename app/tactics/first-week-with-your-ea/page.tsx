import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Your First Week With a New EA | The EA Index",
  description:
    "The onboarding checklist for your new executive assistant. What to delegate first, how to set expectations, and the communication habits that make or break the relationship.",
};

export default function FirstWeekPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/tactics"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; Back to Tactics
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 tracking-tight">
        Your First Week With a New EA
      </h1>

      <div className="prose">
        <p>
          The first week with a new executive assistant determines whether
          you&apos;ll get months of compounding value or months of frustration.
          Most people treat onboarding as an afterthought&mdash;they hand off a
          few tasks, give vague instructions, then wonder why things
          aren&apos;t clicking. That&apos;s backwards. A deliberate first week
          is the highest-leverage investment you&apos;ll make in this
          relationship.
        </p>
        <p>
          The founders who get the most from their EAs share one trait: they
          front-load the effort. They spend two to three hours in week one
          setting up systems, documenting preferences, and having real
          conversations about how they work. That upfront investment pays off
          for months because every subsequent task lands on a foundation of
          shared understanding instead of guesswork.
        </p>

        <h2 className="font-heading text-navy">Before Day One</h2>

        <p>
          Do the prep work before your EA starts. This takes about an hour and
          saves you a week of back-and-forth later.
        </p>

        <p>
          Write a one-page document covering: your working hours and time zone,
          how you prefer to communicate (Slack, email, text), your response
          time expectations, and the tools you use daily. Include login
          credentials or invite them to your calendar, email (if delegating
          inbox management), project management tool, and any relevant shared
          drives. Use a password manager like 1Password to share credentials
          securely rather than sending them over Slack or email.
        </p>

        <p>
          Create a shared document titled &quot;How I Work.&quot; List your
          preferences: Do you want to be asked before scheduling calls, or
          should your EA use judgment? Do you have recurring meetings that
          never move? Are there people who always get priority? Do you prefer
          bullet-point summaries or detailed write-ups? This document
          becomes the reference your EA checks before asking you a question.
          A good How I Work doc answers the 20 questions your EA would
          otherwise ask you in their first two weeks.
        </p>

        <p>
          Set up the tools in advance. Do not wait until day one to figure out
          how to add your EA to Google Calendar delegation or create a shared
          Asana workspace. Have everything ready so the kickoff call can
          focus on the work itself, not on troubleshooting login issues and
          waiting for email invites to arrive.
        </p>

        <h2 className="font-heading text-navy">Day One: The Kickoff Call</h2>

        <p>
          Schedule a 45-minute video call. Not 15 minutes. Not a quick Slack
          message. A real conversation where you walk through how you work,
          what your weeks look like, and what&apos;s currently eating your
          time. Video matters here. Your EA needs to see your face and hear
          your tone to start calibrating how you communicate.
        </p>

        <p>
          Cover three things on this call. First, your goals: What do you want
          to stop doing? What tasks feel like a waste of your time? Be
          specific. &quot;I want to spend less time on admin&quot; is not
          helpful. &quot;I spend 45 minutes a day triaging email and another
          30 minutes scheduling meetings, and I want both off my plate&quot;
          gives your EA a clear target.
        </p>

        <p>
          Second, your communication style: Are you a morning person who
          batches messages, or do you expect real-time responses? Do you
          prefer voice notes or written messages? Are you comfortable with
          your EA making decisions without checking, or do you want to
          approve everything at first? Be honest about this. If you are a
          control freak about your calendar, say so. Your EA can adapt to
          your style, but only if they know what it is.
        </p>

        <p>
          Third, the first tasks: Pick two or three specific things you want
          them to own starting today. Not five. Not ten. Two or three.
          Overloading your EA on day one guarantees nothing gets done well.
        </p>

        <p>
          End the call by agreeing on a daily check-in format. A simple end-of-day
          message in Slack works well: &quot;Here&apos;s what I did today,
          here&apos;s what&apos;s queued for tomorrow, here are my open
          questions.&quot; This daily rhythm replaces the need for ad-hoc
          status checks and gives both of you a reliable touchpoint.
        </p>

        <h2 className="font-heading text-navy">The Best First Tasks</h2>

        <p>
          Start with tasks that are clearly defined, low-stakes, and
          repeatable. You want early wins that build confidence on both sides.
          Resist the urge to hand off the complicated, high-judgment work
          right away. Your EA needs to succeed on the small things before
          they earn your trust on the big ones.
        </p>

        <p>
          <strong>Calendar cleanup.</strong> Have your EA audit your calendar
          for the past two weeks. Ask them to flag meetings that could be
          shorter, ones that could be emails, and recurring calls that no
          longer serve you. This gives them immediate context on how you spend
          your time and starts the calendar management relationship on a
          foundation of understanding rather than blind scheduling.
        </p>

        <p>
          <strong>Inbox triage.</strong> If you&apos;re drowning in email, set
          up a system where your EA labels or sorts messages into three
          buckets: needs your reply, FYI only, and can be archived. They
          don&apos;t need to respond to anything yet&mdash;just organize.
          This teaches them your email patterns and priorities without
          the risk of sending something on your behalf before they
          understand your voice.
        </p>

        <p>
          <strong>Research task.</strong> Give them something concrete:
          &quot;Find three options for a team offsite in Austin for 12 people,
          budget under $5K, dates in March.&quot; This tests their research
          skills, attention to detail, and how they present information.
          The specificity matters. A vague research task produces vague
          results. A specific one lets you evaluate their work fairly.
        </p>

        <p>
          <strong>Recurring task setup.</strong> Identify one thing that
          happens every week and set it up as a recurring task in your
          shared project management tool. Maybe it is a Monday morning
          meeting prep, a Friday expense report, or a weekly vendor
          check-in. Getting one recurring task running in week one builds
          the muscle of systematic delegation.
        </p>

        <h2 className="font-heading text-navy">Setting Expectations That Stick</h2>

        <p>
          Be explicit about quality standards. If you want three options
          instead of one, say so. If you want a summary in bullet points
          rather than paragraphs, say that too. If you want travel options
          sorted by price with the cheapest first, say it. Most EAs are good
          at adapting to preferences&mdash;but only if you tell them what
          those preferences are. Leaving quality standards implicit is the
          fastest way to create disappointment on both sides.
        </p>

        <p>
          Establish a response time agreement. For most async setups, a
          4-hour turnaround during business hours is reasonable for
          non-urgent tasks. For urgent requests, define what &quot;urgent&quot;
          means and how they should flag it. If you do not define urgency
          levels, everything becomes equally important, which means nothing
          gets prioritized effectively.
        </p>

        <p>
          Tell them it&apos;s okay to ask questions. The biggest bottleneck in
          most EA relationships is the assistant being afraid to clarify
          something and doing it wrong instead. Make it clear that a quick
          question now saves a redo later. Explicitly say: &quot;I would
          rather you ask me a clarifying question than spend an hour going
          in the wrong direction.&quot; Repeat this several times in the
          first week because most EAs default to trying to figure it out
          themselves.
        </p>

        <p>
          Define what decisions they can make independently. Can they
          reschedule a meeting if something conflicts? Can they book a
          flight under $500 without asking? Can they decline a meeting
          invitation from someone they do not recognize? Clear autonomy
          boundaries prevent both hesitation (they freeze because they are
          not sure they are allowed to act) and overstepping (they make
          a decision you would have handled differently).
        </p>

        <h2 className="font-heading text-navy">Days Two Through Four: Building Momentum</h2>

        <p>
          After the kickoff, shift to async communication for most
          interactions. Your EA should be working on their assigned tasks
          and sending you their end-of-day update. You review the update
          in the morning, provide any feedback, and add new tasks to the
          queue. This rhythm should feel lightweight, not like another
          meeting on your calendar.
        </p>

        <p>
          During days two through four, pay attention to how your EA handles
          the first tasks. Are they asking good questions? Are they following
          your format preferences? Are they meeting the timelines you set?
          These early signals tell you a lot about how the relationship will
          develop. If something is off, address it immediately. Do not wait
          for the end-of-week review to correct a pattern you notice on
          Tuesday.
        </p>

        <h2 className="font-heading text-navy">The End-of-Week Review</h2>

        <p>
          On Friday, schedule a 20-minute call. Review what worked, what
          didn&apos;t, and what you want to add to their plate the following
          week. This is also the time to give direct feedback. If the research
          task was great but the calendar changes missed something, say so now.
          Don&apos;t let small issues compound. Specific feedback in week one
          prevents systemic problems in month two.
        </p>

        <p>
          Ask your EA for feedback too. What was unclear? What tools are
          confusing? What information do they need that they do not have?
          Most EAs will not volunteer this feedback unless you ask. Their
          perspective on what is working and what is not is valuable data
          for improving the relationship.
        </p>

        <p>
          After the first week, you should have a working communication
          rhythm, two or three tasks that are fully delegated, and a shared
          understanding of how you like things done. If you have all three,
          you&apos;re ahead of 90% of people who hire an EA. The second week
          is when you start expanding the scope of delegation, adding new
          task categories and gradually increasing your EA&apos;s autonomy
          as trust builds.
        </p>

        <h2 className="font-heading text-navy">One Thing Most People Skip</h2>

        <p>
          Give your EA context about <em>why</em> you&apos;re delegating, not
          just what to do. When they understand that you&apos;re clearing your
          calendar to focus on fundraising, or that the research project feeds
          into a board presentation, they make better judgment calls. They
          start anticipating what you need before you ask. That&apos;s when an
          EA goes from task executor to genuine force multiplier.
        </p>

        <p>
          Context is not a nice-to-have. It is the differentiator between
          an EA who does what you say and an EA who does what you need.
          Investing 30 seconds of context per task in week one trains your
          EA to think like you, and that pays dividends for as long as the
          relationship lasts.
        </p>
      </div>
    </div>
  );
}
