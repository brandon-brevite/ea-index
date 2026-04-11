import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | The EA Index",
  description: "Information about affiliate links on The EA Index.",
};

export default function DisclosurePage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl sm:text-4xl text-text mb-8">
        Affiliate disclosure
      </h1>

      <div className="prose">
        <p>
          Some links on this site are affiliate links. If you sign up for a
          service through one of these links, we may earn a referral fee at no
          extra cost to you. This does not affect our editorial ratings or the
          order in which services appear. Our top pick is our own service, Noire,
          and we are transparent about that.
        </p>
      </div>
    </div>
  );
}
