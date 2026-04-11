import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "What to Delegate to Your EA | The EA Index",
  description:
    "The complete list of tasks you can delegate to an executive assistant, organized by category. Calendar, email, travel, research, personal, and business operations.",
};

export default function WhatToDelegatePage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/tactics"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; Back to Tactics
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-6 tracking-tight">
        What to Delegate to Your EA
      </h1>

      <div className="prose">
        <p>
          Most people under-delegate. They hire an EA, hand off a few calendar
          tasks, and stop there. Six months later they&apos;re paying for 40
          hours a month but only using 15. The problem is rarely a lack of
          work&mdash;it&apos;s a lack of imagination about what can be handed
          off. This is the comprehensive list, organized by category, with
          specifics on how each task actually works in practice.
        </p>

        <h2 className="font-heading text-navy">Calendar Management</h2>

        <p>
          This is where most people start, and for good reason. Calendar
          management is high-frequency, rule-based, and immediately saves you
          time. A well-trained EA can handle your entire calendar with less
          than an hour of your oversight per week.
        </p>

        <ul>
          <li>Scheduling meetings and managing conflicts</li>
          <li>Rescheduling and following up on no-shows</li>
          <li>Blocking focus time and protecting it from meeting creep</li>
          <li>Sending calendar prep (agendas, docs, context) before meetings</li>
          <li>Auditing your week to flag overbooked days</li>
          <li>Coordinating across time zones for multi-party calls</li>
          <li>Managing your scheduling tool (Calendly, SavvyCal, etc.)</li>
        </ul>

        <p>
          The key to making calendar delegation work is writing down your
          scheduling rules. No meetings before 10am. Fifteen-minute buffer
          between calls. Fridays are meeting-free. Investor calls always get
          priority. These rules turn calendar management from a judgment-heavy
          task into a system your EA can run independently. Without written
          rules, your EA asks you about every scheduling decision, and you
          have not actually delegated anything.
        </p>

        <h2 className="font-heading text-navy">Email and Inbox</h2>

        <p>
          Email delegation ranges from simple triage to full inbox management
          where your EA drafts replies in your voice. Start with triage and
          work up. Most founders can get to the point where their EA handles
          70-80% of email without any intervention within three months.
        </p>

        <ul>
          <li>Sorting email into action-required, FYI, and archive</li>
          <li>Unsubscribing from newsletters and clearing junk</li>
          <li>Drafting routine replies for your review</li>
          <li>Flagging time-sensitive messages</li>
          <li>Managing follow-ups (&quot;Did they reply to the proposal?&quot;)</li>
          <li>Monitoring shared inboxes (support@, info@)</li>
          <li>Filing and organizing email into folders or labels</li>
        </ul>

        <p>
          The trick to email delegation is the &quot;reply as me&quot; guide.
          Give your EA five to ten example emails you have written across
          different contexts: a quick confirmation, a polite decline, a
          warm intro, a firm follow-up. They use these as templates to
          match your tone. After the first month of draft-only mode, most
          EAs can send routine emails autonomously that recipients cannot
          distinguish from your own writing.
        </p>

        <h2 className="font-heading text-navy">Travel</h2>

        <p>
          Travel planning is one of the highest-ROI delegation categories.
          A single trip can eat 3&ndash;4 hours of research and booking time.
          Your EA does this faster because it is a core part of their job,
          and they get better at it every trip because they learn your
          preferences.
        </p>

        <ul>
          <li>Researching flights and booking based on your preferences</li>
          <li>Hotel research and reservations</li>
          <li>Building full trip itineraries with confirmation numbers</li>
          <li>Restaurant reservations at your destination</li>
          <li>Ground transportation (car rentals, Ubers, airport transfers)</li>
          <li>Tracking loyalty programs and points balances</li>
          <li>Handling cancellations, rebookings, and travel disruptions</li>
          <li>Packing checklists for different trip types</li>
        </ul>

        <p>
          Create a travel preferences document: preferred airlines, seat
          preferences, hotel chain loyalty programs, rental car company,
          dietary restrictions for restaurant bookings, and budget
          guidelines. Once your EA has this, they can book entire trips
          without a single question. The best EAs also proactively monitor
          your upcoming travel for schedule changes, gate updates, and
          weather disruptions.
        </p>

        <h2 className="font-heading text-navy">Research</h2>

        <p>
          A good EA can do 80% of the research legwork so you only spend time
          on the final decision. Give them clear criteria and a deadline.
          The specificity of your research brief directly determines the
          quality of what you get back.
        </p>

        <ul>
          <li>Vendor and tool comparisons (features, pricing, reviews)</li>
          <li>Competitive intelligence (what are competitors launching?)</li>
          <li>Market research for new initiatives</li>
          <li>Finding and vetting contractors or freelancers</li>
          <li>Preparing briefing docs before investor or partner meetings</li>
          <li>Sourcing gifts for clients, team members, or partners</li>
          <li>Compiling data for presentations or reports</li>
        </ul>

        <p>
          Bad research brief: &quot;Look into project management tools.&quot;
          Good research brief: &quot;Compare Asana, Monday, and ClickUp for
          a team of 8. I care about recurring task support, Slack
          integration, and pricing under $15 per user per month. Give me
          a one-page summary with a recommendation by Thursday.&quot; The
          good brief takes 60 seconds longer to write and saves you from
          getting a 10-page generic comparison you did not need.
        </p>

        <h2 className="font-heading text-navy">Personal Tasks</h2>

        <p>
          This is where delegation gets interesting. Many EA services
          explicitly support personal tasks, and they&apos;re often the ones
          that free up the most mental energy. The personal tasks cluttering
          your brain are just as expensive as the professional ones cluttering
          your calendar.
        </p>

        <ul>
          <li>Appointment scheduling (doctor, dentist, car service)</li>
          <li>Online returns and warranty claims</li>
          <li>Gift purchasing and shipping</li>
          <li>Home service coordination (cleaners, repairs, contractors)</li>
          <li>Event planning (dinners, birthday parties, team events)</li>
          <li>Subscription management and cancellations</li>
          <li>Insurance claims and paperwork</li>
          <li>Family logistics (school forms, activity signups)</li>
        </ul>

        <p>
          People often feel guilty delegating personal tasks, but this is
          some of the highest-leverage delegation you can do. Spending 30
          minutes on hold with your insurance company or researching birthday
          gift options for your partner are tasks that drain your energy
          disproportionately to the time they take. Your EA handles them
          without the emotional overhead, and you get the result without
          the friction.
        </p>

        <h2 className="font-heading text-navy">Business Operations</h2>

        <p>
          These tasks are often semi-regular and process-heavy. Once your EA
          has an SOP, they run on autopilot. Operations tasks are where
          delegation scales best because they are repeatable and the
          instructions rarely change.
        </p>

        <ul>
          <li>Expense tracking and receipt organization</li>
          <li>Invoice follow-up and payment reminders</li>
          <li>CRM data entry and cleanup</li>
          <li>Preparing meeting agendas and distributing notes</li>
          <li>Onboarding new team members (sending welcome emails, access setup)</li>
          <li>Maintaining SOPs and internal documentation</li>
          <li>Ordering office supplies or equipment</li>
          <li>Managing subscriptions and software licenses</li>
        </ul>

        <p>
          The CRM entry point deserves special mention. Most founders are
          terrible at keeping their CRM updated. Meetings happen, follow-ups
          are discussed, and none of it gets logged. An EA who sits in on
          your meetings (or reviews your calendar and email) can update your
          CRM entries, log meeting notes, and set follow-up tasks. This
          alone has saved deals for founders who would otherwise lose track
          of where conversations stand.
        </p>

        <h2 className="font-heading text-navy">Social Media and Content</h2>

        <p>
          Not every EA is suited for this category, but many can handle the
          operational side of your content presence.
        </p>

        <ul>
          <li>Scheduling social media posts from a content calendar</li>
          <li>Monitoring mentions and flagging relevant engagement opportunities</li>
          <li>Repurposing content (turning a blog post into LinkedIn bullets)</li>
          <li>Managing a podcast guest pipeline (outreach, scheduling, prep)</li>
          <li>Drafting LinkedIn posts or tweets based on your talking points</li>
          <li>Tracking analytics and compiling monthly performance reports</li>
        </ul>

        <h2 className="font-heading text-navy">How to Decide What to Delegate First</h2>

        <p>
          Track your time for one week. Write down every task that takes more
          than five minutes. At the end of the week, sort them into three
          buckets: tasks only you can do, tasks someone else could do with
          clear instructions, and tasks someone else could do better than you.
        </p>

        <p>
          Start with the second bucket. These are your quick wins. The third
          bucket&mdash;tasks your EA can actually do better&mdash;is where the
          real leverage shows up over time, as they build expertise in travel
          booking, vendor research, and inbox management that exceeds what
          you&apos;d do yourself.
        </p>

        <p>
          The goal is not to delegate everything. It&apos;s to delegate
          everything that doesn&apos;t require your specific judgment,
          relationships, or expertise. For most founders, that&apos;s 60&ndash;70%
          of what they currently spend their time on. If that number surprises
          you, you are probably holding onto tasks out of habit rather than
          necessity.
        </p>

        <p>
          One practical exercise: at the end of each day for a week, write
          down three things you did that someone else could have done. Do not
          filter or judge. Just write them down. By Friday, you will have
          15 specific tasks ready to delegate. That is your starting list.
        </p>
      </div>
    </div>
  );
}
