import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Common EA Hiring Mistakes | The EA Index",
  description:
    "The five most expensive mistakes founders make when hiring their first executive assistant, and exactly how to avoid each one.",
};

export default function CommonMistakesPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/tactics"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; Back to Tactics
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 tracking-tight">
        Common EA Hiring Mistakes
      </h1>

      <div className="prose">
        <p>
          Hiring an executive assistant seems simple. Pick a service, get
          matched, start delegating. But most people who try it for the first
          time make the same handful of mistakes, and those mistakes are
          expensive&mdash;not just in dollars, but in wasted time and the
          false conclusion that &quot;an EA doesn&apos;t work for me.&quot;
          Here are the five that come up again and again, with specific
          guidance on how to avoid each one.
        </p>

        <h2 className="font-heading text-navy">
          Mistake 1: Hiring Before Knowing What to Delegate
        </h2>

        <p>
          The most common mistake happens before you even sign up. You know
          you&apos;re busy. You know you need help. So you hire an EA and
          figure you&apos;ll sort out the details later. Then your EA starts,
          you&apos;re in back-to-back meetings, and you can&apos;t find 20
          minutes to assign them meaningful work. They sit idle. You get
          frustrated. The engagement fizzles.
        </p>

        <p>
          This happens to roughly half of first-time EA clients. The
          enthusiasm of signing up crashes into the reality that delegation
          requires upfront effort. Your EA cannot read your mind, and they
          cannot invent work for themselves in their first week. If you do
          not have tasks ready to hand off, your expensive new resource
          becomes an expensive new problem.
        </p>

        <p>
          <strong>The fix:</strong> Before hiring, spend one week tracking
          every task you do. Write them all down, even the small ones. At
          the end of the week, sort them into three categories: only I can
          do this, someone could do this with instructions, and someone
          could do this better than me. The second and third categories are
          your delegation list. If that list doesn&apos;t add up to at least
          10 hours a week of work, you might not need an EA yet&mdash;or you
          need to think harder about what you&apos;re holding onto and why.
        </p>

        <p>
          Go further: for each task on your delegation list, write a
          one-sentence description of the expected output. &quot;Manage my
          calendar&quot; is not a task. &quot;Schedule all meeting requests
          within 24 hours using my Calendly preferences and decline anything
          that conflicts with my focus blocks&quot; is a task. Having this
          list ready before your EA starts means you can hit the ground
          running instead of stalling.
        </p>

        <h2 className="font-heading text-navy">
          Mistake 2: Choosing on Price Alone
        </h2>

        <p>
          There&apos;s a meaningful difference between a $10/hour VA from a
          marketplace and a $3,000/month managed EA service. Both have their
          place, but they&apos;re not interchangeable. The cheap option works
          for structured, repeatable tasks where you provide detailed SOPs.
          The managed service works when you need someone who can operate with
          autonomy and judgment.
        </p>

        <p>
          Founders who choose purely on price often end up spending more in
          the long run. They cycle through two or three budget assistants,
          spending weeks onboarding each one, before landing on a premium
          service that sticks. The total cost of failed experiments exceeds
          what they would have spent just starting with the right tier.
          Each failed onboarding costs you three to four weeks of lost
          productivity, plus the dollar cost of paying for an assistant
          during a ramp-up period that never pays off.
        </p>

        <p>
          The reverse is also true. Some people overshoot on their first
          hire, signing up for a $5,000/month premium service when their
          needs are entirely administrative. If 90% of your delegation list
          is calendar management, email triage, and data entry, a $1,500/month
          service handles that fine. You do not need a US-based assistant
          with 15 years of C-suite experience to manage your Calendly links.
        </p>

        <p>
          <strong>The fix:</strong> Match the service tier to the task
          complexity. If 80% of your delegation list is process-heavy and
          well-defined, a budget service is fine. If you need someone drafting
          client communications, managing nuanced scheduling, or making
          judgment calls, invest in quality. Check our{" "}
          <Link href="/" className="text-blue-600 hover:underline">
            comparison table
          </Link>{" "}
          to see what each tier actually gets you. Be honest about what your
          tasks actually require, not what sounds impressive.
        </p>

        <h2 className="font-heading text-navy">
          Mistake 3: Skipping Onboarding
        </h2>

        <p>
          People treat EA onboarding like it should be instant. They expect
          their assistant to read their mind from day one. When the first
          deliverable isn&apos;t perfect, they blame the EA instead of the
          onboarding.
        </p>

        <p>
          Every EA needs a ramp-up period. Even a senior assistant who&apos;s
          worked with dozens of executives needs to learn your specific
          preferences, tools, communication style, and standards. Skipping
          this phase doesn&apos;t save time. It creates a shaky foundation
          that cracks under pressure.
        </p>

        <p>
          The onboarding mistake often looks like this: you sign up on a
          Monday. Your EA sends a welcome message. You reply with &quot;great,
          can you handle my inbox?&quot; with no further context. By
          Wednesday, your EA has archived an email from an investor you
          were waiting on, and you are convinced they are incompetent. They
          are not. They just did not know that the email from
          john@acmecapital.com is from someone who matters. That is an
          onboarding failure, not a talent failure.
        </p>

        <p>
          <strong>The fix:</strong> Dedicate a full week to onboarding. Write
          a &quot;How I Work&quot; document. Do a kickoff call. Start with
          low-stakes tasks and build up. See our full{" "}
          <Link
            href="/tactics/first-week-with-your-ea"
            className="text-blue-600 hover:underline"
          >
            first-week guide
          </Link>{" "}
          for the complete playbook. The time you spend on onboarding in week
          one saves you from the frustration of re-doing work in weeks two
          through twelve.
        </p>

        <h2 className="font-heading text-navy">
          Mistake 4: Not Giving Feedback Early
        </h2>

        <p>
          This one is subtle and destructive. Your EA does something slightly
          wrong. Not wrong enough to correct, so you fix it yourself and move
          on. This happens three more times. Now you have a pattern: your EA
          does the task their way, you quietly redo it, and resentment builds
          on both sides. Your EA thinks everything is fine because you never
          said otherwise. You think they should know better.
        </p>

        <p>
          Small uncorrected errors compound into large misalignments. After
          two months of silence, the gap between your expectations and their
          output is so wide that the relationship feels broken. It
          isn&apos;t. It just needed a five-minute conversation in week one.
        </p>

        <p>
          The feedback avoidance often stems from not wanting to seem
          difficult or micromanaging. But the paradox is that early,
          specific feedback prevents the need for micromanagement later.
          An EA who gets clear feedback in their first week calibrates
          quickly and needs almost no correction by month two. An EA who
          gets no feedback develops habits you hate and is much harder to
          redirect later.
        </p>

        <p>
          <strong>The fix:</strong> Give feedback within 24 hours, every time.
          Be specific and direct. Not &quot;this isn&apos;t what I
          wanted&quot; but &quot;I need three options instead of one, and list
          the price for each.&quot; Not &quot;the email was off&quot; but
          &quot;my emails to clients are always three sentences or fewer,
          never use exclamation marks, and always include a specific next
          step.&quot; Schedule a weekly review for the first month. After
          that, you&apos;ll find you rarely need to correct course because
          the early calibration did the work.
        </p>

        <p>
          Frame feedback as investment, not criticism. &quot;Here is how to
          do this in a way that matches what I need&quot; lands better than
          &quot;you did this wrong.&quot; Most EAs genuinely want to improve
          and appreciate specific guidance. The ones who do not respond
          well to feedback are the ones you should replace, but you will
          not know the difference until you actually give feedback
          consistently.
        </p>

        <h2 className="font-heading text-navy">
          Mistake 5: Treating Your EA Like a Task Robot
        </h2>

        <p>
          The most underrated mistake: never sharing context. You fire off
          tasks like &quot;Book a restaurant for Thursday&quot; without
          saying it&apos;s a dinner with a prospective investor who loves
          Japanese food. Your EA books a casual pizza place. You&apos;re
          annoyed. They had no way to know.
        </p>

        <p>
          EAs who understand the <em>why</em> behind tasks make dramatically
          better decisions. They prioritize correctly. They catch errors you
          would have missed. They anticipate follow-up tasks. But they can
          only do this if you treat them as a thinking partner, not a
          vending machine for completed tasks.
        </p>

        <p>
          The context gap shows up everywhere. Your EA books a meeting at
          3pm, not knowing that you had a draining board call at 2pm and
          wanted a buffer. They schedule a call with a vendor, not knowing
          you are about to cancel that vendor&apos;s contract. They
          send a follow-up email to a prospect, not knowing the deal fell
          through yesterday. Every one of these situations is preventable
          with 10 seconds of context.
        </p>

        <p>
          <strong>The fix:</strong> Add one sentence of context to every
          request. &quot;Book a restaurant for Thursday&mdash;this is a
          dinner with an investor, somewhere upscale, preferably
          Japanese.&quot; That one sentence takes five seconds to type and
          completely changes the output. Over time, your EA builds a mental
          model of how you operate and starts filling in the context
          themselves.
        </p>

        <p>
          Beyond individual tasks, share broader context periodically. Tell
          your EA what your big priorities are for the quarter. Let them
          know when you are in fundraising mode versus heads-down building
          mode. Share when you are stressed about a deadline so they know
          to protect your calendar more aggressively. This broader context
          turns a reactive assistant into a proactive one.
        </p>

        <h2 className="font-heading text-navy">
          Mistake 6: Giving Up Too Soon
        </h2>

        <p>
          The first month with a new EA is the hardest. You are spending
          time on onboarding that you could be spending on work. Your EA
          is making mistakes as they learn your preferences. The delegation
          feels like it is creating more work, not less. This is normal.
          Every EA relationship goes through this phase.
        </p>

        <p>
          The people who quit after three weeks never get to the payoff.
          The payoff comes in month two, when your EA has absorbed your
          preferences and starts operating with real autonomy. By month
          three, they are saving you 10-15 hours a week and you wonder how
          you functioned without them. But you have to get through the
          initial investment period to reach that return.
        </p>

        <p>
          <strong>The fix:</strong> Commit to a minimum 90-day evaluation
          period. The first 30 days are onboarding. The second 30 days are
          optimization. The third 30 days are where you see the real value.
          If you are still unhappy after 90 days of genuine effort on both
          sides, the match might be wrong and you should try a different
          assistant or service. But do not bail at week three because it
          feels like work. It is supposed to feel like work at first. The
          entire point is that it stops feeling like work later.
        </p>

        <h2 className="font-heading text-navy">The Meta-Mistake</h2>

        <p>
          Every mistake above shares a root cause: treating the EA
          relationship as transactional instead of collaborative. You&apos;re
          not buying a software tool. You&apos;re building a working
          relationship with a human who gets better the more you invest in
          them. The people who get the most value from their EAs are the ones
          who spend the first month setting things up properly and giving
          honest, constructive feedback. After that initial investment, the
          system runs itself.
        </p>

        <p>
          If you take one thing from this guide: the quality of your EA
          relationship is primarily determined by the quality of your
          delegation, not the quality of the assistant. A good assistant
          with bad delegation produces mediocre results. A decent assistant
          with excellent delegation produces outstanding results. The
          variable you control is the delegation. Focus there first, and
          the rest follows.
        </p>
      </div>
    </div>
  );
}
