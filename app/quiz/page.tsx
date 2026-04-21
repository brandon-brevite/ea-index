"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type ServiceKey =
  | "noire"
  | "athena"
  | "boldly"
  | "time-etc"
  | "fancy-hands"
  | "zirtual";

interface ServiceInfo {
  name: string;
  slug: string;
  tagline: string;
  priceRange: string;
}

interface Question {
  id: number;
  text: string;
  options: { label: string; scores: Partial<Record<ServiceKey, number>> }[];
}

/* ------------------------------------------------------------------ */
/*  Service data                                                       */
/* ------------------------------------------------------------------ */

const SERVICES: Record<ServiceKey, ServiceInfo> = {
  noire: {
    name: "Noire",
    slug: "noire",
    tagline:
      "Boutique remote EA service for founders and executives",
    priceRange: "$3,000 - $3,500/mo",
  },
  athena: {
    name: "Athena",
    slug: "athena",
    tagline:
      "Full-time overseas assistants with rigorous training and coaching",
    priceRange: "$3,000 - $5,000/mo",
  },
  boldly: {
    name: "Boldly",
    slug: "boldly",
    tagline:
      "Premium US-based fractional assistants for enterprise teams",
    priceRange: "$2,500 - $5,000+/mo",
  },
  "time-etc": {
    name: "Time Etc",
    slug: "time-etc",
    tagline:
      "Affordable US and UK assistants for small business owners",
    priceRange: "$300 - $1,500/mo",
  },
  "fancy-hands": {
    name: "Fancy Hands",
    slug: "fancy-hands",
    tagline:
      "Task-based micro-requests starting at a few dollars each",
    priceRange: "$18 - $150/mo",
  },
  zirtual: {
    name: "Zirtual",
    slug: "zirtual",
    tagline: "US-based dedicated assistants for professionals and teams",
    priceRange: "$1,500 - $3,500/mo",
  },
};

/* ------------------------------------------------------------------ */
/*  Questions & weighted scoring                                       */
/*                                                                     */
/*  Scoring principle: every service earns points when its actual      */
/*  attributes (location, price range, model, commitment) match the    */
/*  user's answer. No service is given a baseline advantage on          */
/*  neutral options. Recommendations are driven by fit, not favor.      */
/* ------------------------------------------------------------------ */

const QUESTIONS: Question[] = [
  {
    id: 1,
    text: "What\u2019s your monthly budget for EA support?",
    options: [
      {
        label: "Under $500/mo",
        scores: { "fancy-hands": 12, "time-etc": 10 },
      },
      {
        label: "$500\u2013$1,500/mo",
        scores: { "time-etc": 12, zirtual: 4 },
      },
      {
        label: "$1,500\u2013$3,000/mo",
        scores: { zirtual: 10, boldly: 7, "time-etc": 5 },
      },
      {
        label: "$3,000\u2013$5,000/mo",
        scores: { noire: 10, athena: 10, boldly: 10, zirtual: 6 },
      },
      {
        label: "$5,000+/mo",
        scores: { boldly: 10, athena: 8, noire: 6 },
      },
    ],
  },
  {
    id: 2,
    text: "How many hours per week do you need?",
    options: [
      {
        label: "Less than 10 hours",
        scores: { "fancy-hands": 10, "time-etc": 8 },
      },
      {
        label: "10\u201320 hours",
        scores: { "time-etc": 10, zirtual: 7, boldly: 5 },
      },
      {
        label: "20\u201330 hours",
        scores: { boldly: 9, zirtual: 8, noire: 7, athena: 6 },
      },
      {
        label: "30\u201340 hours (full-time)",
        scores: { athena: 12, boldly: 9, noire: 7 },
      },
      {
        label: "Not sure yet",
        scores: { noire: 6, zirtual: 6, boldly: 6, "time-etc": 6, athena: 6 },
      },
    ],
  },
  {
    id: 3,
    text: "Where should your assistant be based?",
    options: [
      {
        label: "United States (required)",
        scores: { boldly: 12, zirtual: 12, noire: 12, "time-etc": 10 },
      },
      {
        label: "United States (preferred but flexible)",
        scores: { boldly: 10, zirtual: 10, noire: 10, "time-etc": 8 },
      },
      {
        label: "No preference",
        scores: { noire: 6, athena: 6, boldly: 6, zirtual: 6, "time-etc": 6, "fancy-hands": 6 },
      },
      {
        label: "Outside the US is fine",
        scores: { athena: 10, "fancy-hands": 5, "time-etc": 5 },
      },
    ],
  },
  {
    id: 4,
    text: "What type of work will your EA handle most?",
    options: [
      {
        label: "Calendar, email, and scheduling",
        scores: { noire: 8, zirtual: 8, boldly: 8, athena: 8, "time-etc": 6 },
      },
      {
        label: "Research and data projects",
        scores: { athena: 10, noire: 8, boldly: 7, "time-etc": 5 },
      },
      {
        label: "Business operations and project management",
        scores: { boldly: 10, noire: 8, athena: 7, zirtual: 6 },
      },
      {
        label: "Personal tasks and errands",
        scores: { "fancy-hands": 10, "time-etc": 8, zirtual: 5 },
      },
      {
        label: "Mix of everything",
        scores: { noire: 7, zirtual: 7, athena: 7, boldly: 7, "time-etc": 5 },
      },
    ],
  },
  {
    id: 5,
    text: "What\u2019s your experience with executive assistants?",
    options: [
      {
        label: "This is my first time hiring an EA",
        scores: { "time-etc": 8, zirtual: 8, noire: 8, "fancy-hands": 6 },
      },
      {
        label: "I\u2019ve tried a service before but wasn\u2019t satisfied",
        scores: { boldly: 8, noire: 8, athena: 6, zirtual: 6 },
      },
      {
        label: "I\u2019ve worked with EAs before and know what I need",
        scores: { athena: 8, boldly: 8, noire: 8, zirtual: 6 },
      },
      {
        label: "I currently have one but want to switch",
        scores: { boldly: 8, noire: 8, athena: 7, zirtual: 6 },
      },
    ],
  },
  {
    id: 6,
    text: "How important is having the same assistant every time?",
    options: [
      {
        label:
          "Critical \u2014 I need a dedicated person who knows my workflow",
        scores: { noire: 10, boldly: 10, zirtual: 10, athena: 9 },
      },
      {
        label: "Preferred but I\u2019m flexible",
        scores: { noire: 7, boldly: 7, zirtual: 7, athena: 7, "time-etc": 6 },
      },
      {
        label: "Doesn\u2019t matter as long as the work gets done",
        scores: {
          "fancy-hands": 10,
          "time-etc": 8,
        },
      },
    ],
  },
  {
    id: 7,
    text: "What matters most to you?",
    options: [
      {
        label: "Quality of the assistant above all else",
        scores: { boldly: 10, noire: 10, athena: 8, zirtual: 6 },
      },
      {
        label: "Getting the lowest price possible",
        scores: { "fancy-hands": 12, "time-etc": 10 },
      },
      {
        label: "Flexibility \u2014 no long contracts",
        scores: { "time-etc": 10, "fancy-hands": 9, noire: 8, zirtual: 6 },
      },
      {
        label: "Speed \u2014 I need someone this week",
        scores: { "fancy-hands": 10, "time-etc": 8, zirtual: 6, noire: 5 },
      },
      {
        label: "A service that handles everything for me",
        scores: { athena: 9, noire: 8, boldly: 8, zirtual: 6 },
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  Fit-reason generator                                               */
/* ------------------------------------------------------------------ */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function buildFitReason(key: ServiceKey, answers: number[]): string {
  switch (key) {
    case "noire":
      return "Noire pairs you with a dedicated executive assistant who learns your workflow inside and out. Their boutique approach means fewer clients per assistant, higher-quality output, and a white-glove onboarding experience built for founders and executives.";
    case "athena":
      return "Athena provides rigorously trained full-time assistants backed by a coaching layer that keeps quality high. If you need 30+ hours per week and are comfortable with an overseas assistant, Athena delivers strong value at scale.";
    case "boldly":
      return "Boldly specializes in experienced, US-based fractional assistants who can plug into enterprise workflows. Great for teams that need senior-level support without a full-time hire.";
    case "time-etc":
      return "Time Etc is one of the best budget-friendly options, offering reliable US and UK assistants on flexible plans. Ideal if you need consistent help under $1,500 per month without a long commitment.";
    case "fancy-hands":
      return "Fancy Hands works best for quick, one-off tasks you can fire off without managing a dedicated assistant. At under $150 per month, it\u2019s the most affordable way to start delegating.";
    case "zirtual":
      return "Zirtual offers dedicated US-based assistants at a mid-range price point. A solid choice if having a stateside assistant matters but you want to keep costs moderate.";
    default:
      return "";
  }
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function QuizPage() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [selected, setSelected] = useState<number | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [transitioning, setTransitioning] = useState(false);

  // Set document title client-side
  useEffect(() => {
    document.title = "Find Your Perfect EA Match | The EA Index";
  }, []);

  /* ---- scoring ---- */
  function computeScores(): { key: ServiceKey; score: number }[] {
    const totals: Record<ServiceKey, number> = {
      noire: 0,
      athena: 0,
      boldly: 0,
      "time-etc": 0,
      "fancy-hands": 0,
      zirtual: 0,
    };

    answers.forEach((optIdx, qIdx) => {
      const option = QUESTIONS[qIdx]?.options[optIdx];
      if (!option) return;
      for (const [svc, pts] of Object.entries(option.scores)) {
        totals[svc as ServiceKey] += pts;
      }
    });

    return (Object.entries(totals) as [ServiceKey, number][])
      .map(([key, score]) => ({ key, score }))
      .sort((a, b) => b.score - a.score);
  }

  /* ---- navigation ---- */
  function handleSelect(optIdx: number) {
    setSelected(optIdx);

    // Auto-advance after brief pause
    setTimeout(() => {
      const newAnswers = [...answers];
      newAnswers[currentQ] = optIdx;
      setAnswers(newAnswers);

      if (currentQ < QUESTIONS.length - 1) {
        setTransitioning(true);
        setTimeout(() => {
          setCurrentQ(currentQ + 1);
          setSelected(null);
          setTransitioning(false);
        }, 250);
      } else {
        setTransitioning(true);
        setTimeout(() => {
          setShowResults(true);
          setTransitioning(false);
        }, 250);
      }
    }, 350);
  }

  function handleBack() {
    if (currentQ > 0) {
      setTransitioning(true);
      setTimeout(() => {
        setCurrentQ(currentQ - 1);
        setSelected(answers[currentQ - 1] ?? null);
        setTransitioning(false);
      }, 200);
    }
  }

  function handleRetake() {
    setShowResults(false);
    setCurrentQ(0);
    setAnswers([]);
    setSelected(null);
  }

  /* ---- results ---- */
  if (showResults) {
    const ranked = computeScores();
    const top = ranked[0];
    const runnersUp = ranked.slice(1, 3);

    return (
      <section className="min-h-screen bg-gray-50">
        <div className="max-w-article mx-auto px-6 py-16 md:py-24">
          {/* heading */}
          <div
            className={`text-center mb-12 transition-all duration-500 ${
              transitioning
                ? "opacity-0 translate-y-4"
                : "opacity-100 translate-y-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold tracking-wide uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              Your result
            </div>
            <h1 className="font-heading text-3xl md:text-4xl font-extrabold text-navy leading-tight tracking-tight">
              We recommend {SERVICES[top.key].name}
            </h1>
            <p className="text-gray-500 mt-3 text-lg max-w-xl mx-auto">
              Based on your answers, here is the EA service that fits you best.
            </p>
          </div>

          {/* top pick card */}
          <div className="bg-white rounded-2xl border border-gray-200 shadow-card p-8 md:p-10 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple" />
            <div className="flex items-center gap-3 mb-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold">
                Best match
              </span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mt-3">
              {SERVICES[top.key].name}
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              {SERVICES[top.key].tagline}
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {buildFitReason(top.key, answers)}
            </p>
            <div className="mt-4 text-sm text-gray-400">
              Typical price range:{" "}
              <span className="text-gray-600 font-medium">
                {SERVICES[top.key].priceRange}
              </span>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={`/services/${SERVICES[top.key].slug}`}
                className="btn-gradient text-base px-8 py-3"
              >
                View {SERVICES[top.key].name} details
              </Link>
            </div>
          </div>

          {/* runners-up */}
          <h3 className="font-heading text-lg font-bold text-navy mb-4">
            Also worth considering
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 mb-12">
            {runnersUp.map((r) => (
              <div
                key={r.key}
                className="bg-white rounded-xl border border-gray-200 shadow-card p-6 hover:shadow-card-hover transition-shadow"
              >
                <h4 className="font-heading text-lg font-bold text-navy">
                  {SERVICES[r.key].name}
                </h4>
                <p className="text-gray-500 text-sm mt-1">
                  {SERVICES[r.key].tagline}
                </p>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">
                  {buildFitReason(r.key, answers)}
                </p>
                <div className="mt-3 text-sm text-gray-400">
                  {SERVICES[r.key].priceRange}
                </div>
                <Link
                  href={`/services/${SERVICES[r.key].slug}`}
                  className="inline-block mt-4 text-blue-600 text-sm font-medium hover:underline"
                >
                  View details &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* footer links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <button
              onClick={handleRetake}
              className="text-blue-600 font-medium hover:underline"
            >
              Retake quiz
            </button>
            <Link
              href="/"
              className="text-blue-600 font-medium hover:underline"
            >
              Browse all services
            </Link>
          </div>
        </div>
      </section>
    );
  }

  /* ---- quiz flow ---- */
  const q = QUESTIONS[currentQ];
  const progress = ((currentQ + 1) / QUESTIONS.length) * 100;

  return (
    <section className="min-h-screen bg-gray-50">
      <div className="max-w-article mx-auto px-6 py-12 md:py-20">
        {/* progress bar */}
        <div className="mb-10">
          <div className="flex items-center justify-between text-xs text-gray-400 mb-2">
            <span>
              Question {currentQ + 1} of {QUESTIONS.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-600 to-purple transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* question */}
        <div
          className={`transition-all duration-300 ${
            transitioning
              ? "opacity-0 translate-y-4"
              : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="font-heading text-2xl md:text-3xl font-bold text-navy tracking-tight mb-8">
            {q.text}
          </h1>

          {/* option cards */}
          <div className="grid gap-3">
            {q.options.map((opt, idx) => {
              const isSelected = selected === idx;
              return (
                <button
                  key={idx}
                  onClick={() => selected === null && handleSelect(idx)}
                  disabled={selected !== null}
                  className={`
                    w-full text-left px-5 py-4 rounded-xl border transition-all duration-200
                    ${
                      isSelected
                        ? "border-blue-600 bg-blue-50 ring-2 ring-blue-600/20"
                        : "border-gray-200 bg-white hover:border-blue-300 hover:shadow-card"
                    }
                    ${selected !== null && !isSelected ? "opacity-50" : ""}
                  `}
                >
                  <span
                    className={`text-base font-medium ${
                      isSelected ? "text-blue-700" : "text-gray-700"
                    }`}
                  >
                    {opt.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* back button */}
          {currentQ > 0 && (
            <button
              onClick={handleBack}
              disabled={selected !== null}
              className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition-colors disabled:opacity-40"
            >
              &larr; Back
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
