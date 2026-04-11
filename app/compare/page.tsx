import { Metadata } from "next";
import { createServerClient } from "@/lib/supabase";
import { Service } from "@/lib/types";
import ComparisonTable from "@/components/ComparisonTable";

export const metadata: Metadata = {
  title: "Compare EA Services Side by Side | The EA Index",
  description:
    "Side-by-side comparison of 22+ executive assistant services. Filter by price, model, location, and fit. Real pricing and honest breakdowns.",
};

export const revalidate = 3600;

async function getServices(): Promise<Service[]> {
  const supabase = createServerClient();
  const { data, error } = await supabase
    .from("services")
    .select("*")
    .eq("is_featured", true)
    .order("display_order", { ascending: true });

  if (error) {
    console.error("Error fetching services:", error);
    return [];
  }
  return data as Service[];
}

export default async function ComparePage() {
  const services = await getServices();

  return (
    <>
      {/* Header */}
      <section className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-content mx-auto px-6 pt-16 pb-12 md:pt-20 md:pb-16">
          <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-navy leading-[1.1] tracking-tight mb-4">
            Compare EA services
          </h1>
          <p className="text-lg text-gray-500 leading-relaxed max-w-2xl">
            Filter by model, location, budget, or who the service is best for.
            Every listing includes real pricing, pros and cons, and a direct link
            to learn more.
          </p>
        </div>
      </section>

      {/* Comparison Table */}
      <section>
        <div className="max-w-content mx-auto px-6 py-12 md:py-16">
          <ComparisonTable services={services} />
        </div>
      </section>

      {/* SEO Content */}
      <section className="border-t border-gray-200 bg-white">
        <div className="prose max-w-article mx-auto px-6 py-16 md:py-24">
          <h2>How to choose an executive assistant service</h2>
          <p>
            Picking the right EA service depends on a handful of factors that
            vary widely from one founder or executive to the next. Before you
            compare pricing pages, take stock of what you actually need
            day-to-day.
          </p>
          <p>
            <strong>Hours per week.</strong> Some services sell blocks of 10
            hours a month, while others require 20 or 40. If you only need
            light calendar management and travel booking, a 10-hour plan keeps
            costs down. If your EA will own inbox management, project
            coordination, and vendor communication, budget for a larger block or
            a full-time dedicated assistant.
          </p>
          <p>
            <strong>Complexity of tasks.</strong> Scheduling and data entry are
            table stakes. But if you need someone who can draft SOPs, manage a
            CRM pipeline, or coordinate across multiple time zones, you want a
            managed service that vets for those skills rather than a marketplace
            where you screen candidates yourself.
          </p>
          <p>
            <strong>Communication style.</strong> Think about how you prefer to
            delegate. Some people want a Slack channel with instant back and
            forth. Others prefer to batch instructions in a Monday morning email.
            The best fit depends on whether the service assigns a dedicated
            assistant (same person every day) or rotates coverage across a team.
          </p>
          <p>
            <strong>Growth trajectory.</strong> A solo founder who plans to hire
            a chief of staff in six months has different needs than a CEO who
            wants permanent EA support for the next three years. Look at
            contract length, cancellation terms, and whether the service can
            scale hours up or down without penalty.
          </p>

          <h2>Understanding EA pricing models</h2>
          <p>
            Executive assistant services fall into four broad pricing models,
            and the differences affect both cost and experience.
          </p>
          <p>
            <strong>Managed services</strong> pair you with a vetted assistant
            and handle training, quality control, and replacement if needed.
            They typically charge between $1,500 and $5,000 per month depending
            on hours and assistant seniority. The premium pays for reliability
            and lower management overhead on your end.
          </p>
          <p>
            <strong>Fractional services</strong> assign a single experienced EA
            who splits time across a small number of clients. Pricing usually
            ranges from $2,000 to $4,000 per month for part-time coverage. This
            model works well when you need senior-level judgment without
            full-time hours.
          </p>
          <p>
            <strong>Marketplace platforms</strong> let you browse profiles, run
            interviews, and hire directly. Monthly costs can be as low as $500
            for offshore assistants or as high as $3,000 for US-based talent.
            You get more control over selection but take on more of the vetting
            and management yourself.
          </p>
          <p>
            <strong>Direct hire services</strong> recruit and place a full-time
            or part-time assistant on your payroll. You pay a placement fee
            (often one month of salary) plus the assistant&apos;s ongoing
            compensation. This makes sense at scale when you want someone fully
            embedded in your organization.
          </p>

          <h2>US-based vs remote assistants</h2>
          <p>
            Location is one of the most common filters people apply when
            shopping for EA services, and for good reason. It affects pricing,
            availability, and communication.
          </p>
          <p>
            US-based assistants typically command higher rates. The advantages
            include native English fluency, cultural familiarity with American
            business norms, and overlapping work hours. For executives who need
            someone on calls, drafting client-facing emails, or coordinating
            with US-based vendors, a domestic assistant often reduces friction.
          </p>
          <p>
            Remote assistants based in Latin America, the Philippines, or other
            regions usually cost 40% to 60% less than their US-based
            counterparts through managed platforms. Many offshore EAs are
            highly skilled and college-educated, and the best services invest
            heavily in training and quality control. The tradeoff is that time
            zone gaps can slow down real-time collaboration, and cultural
            nuances in business communication may require more explicit
            instructions upfront.
          </p>
          <p>
            Some services offer a blended model, pairing you with a US-based
            point of contact backed by an offshore team. This can give you the
            best of both worlds: domestic-level communication with lower
            overall costs.
          </p>

          <h2>Questions to ask before signing up</h2>
          <p>
            Most EA services offer discovery calls or free consultations, but
            the information you get depends on the questions you ask. Here are
            the ones that matter most.
          </p>
          <ul>
            <li>
              <strong>What happens if my assistant quits or is a bad fit?</strong>{" "}
              Ask about replacement timelines and whether there is a backup
              assistant during transitions. Some services guarantee a
              replacement within 48 hours; others leave you hanging for weeks.
            </li>
            <li>
              <strong>How are assistants vetted?</strong> Look for specifics
              beyond &ldquo;rigorous screening.&rdquo; How many applicants make it
              through? Is there a skills test? Background check? Trial period?
            </li>
            <li>
              <strong>What tools do you support?</strong> If you live in Notion,
              Slack, and Google Workspace, make sure the service trains
              assistants on those platforms rather than forcing you onto their
              proprietary dashboard.
            </li>
            <li>
              <strong>What is the minimum commitment?</strong> Month-to-month
              plans give you flexibility but sometimes cost more per hour.
              Quarterly or annual contracts often come with discounts, but make
              sure the cancellation policy is reasonable.
            </li>
            <li>
              <strong>Can I see a sample onboarding process?</strong> A strong
              onboarding experience sets the tone for the entire relationship.
              Services that invest in structured onboarding (intake forms,
              kickoff calls, tool setup guides) tend to deliver better results
              in the first month.
            </li>
            <li>
              <strong>How do you handle sensitive information?</strong> If your
              EA will access your email, calendar, or financial accounts, ask
              about NDAs, data security policies, and access controls.
            </li>
          </ul>
          <p>
            The right EA service should make your work life easier from week
            one. Use the comparison table above to narrow your options, then
            book calls with your top two or three picks to find the best fit.
          </p>
        </div>
      </section>
    </>
  );
}
