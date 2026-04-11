import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | The EA Index",
  description:
    "The EA Index is an independent comparison site for remote executive assistant services, built by a founder who got frustrated by the lack of honest information online.",
};

export default function AboutPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl sm:text-4xl text-text mb-8">About</h1>

      <div className="prose">
        <p>
          The EA Index is an independent comparison site for remote executive
          assistant services. It was built by a founder who spent months
          evaluating EA options for his own companies and got frustrated by the
          lack of honest, unconflicted information online. Every
          &quot;comparison&quot; blog out there is written by an EA company
          putting themselves at #1. This site exists to fix that.
        </p>
        <p>
          Our Editor&apos;s Pick, Noire, is a service we built ourselves.
          We&apos;re upfront about that. Every other service on this site is
          evaluated on its own merits with publicly available pricing and real
          editorial opinions.
        </p>
      </div>
    </div>
  );
}
