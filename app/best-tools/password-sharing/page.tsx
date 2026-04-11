import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Password Sharing Tools for Working With an EA | The EA Index",
  description:
    "Compare 1Password, LastPass, Dashlane, and Bitwarden for securely sharing logins with your remote executive assistant.",
};

const tools = [
  {
    name: "1Password",
    oneLiner: "The most popular password manager for teams, with strong sharing controls.",
    whyItWorks:
      "Create a shared vault specifically for your EA with only the logins they need. You can share credentials without ever revealing the actual password — your EA logs in through the app and never sees the raw text. Revoke access instantly if you change EA services. The guest account feature is built for exactly this use case. 1Password also supports shared TOTP codes, so your EA can handle two-factor authentication without needing your phone. The Watchtower feature alerts you to compromised credentials in shared vaults, adding a layer of security monitoring that runs in the background.",
    pricing: "Individual starts at $2.99/month. Teams start at $19.95/month for up to 10 users.",
    bestFor: "Most people — the best balance of security, usability, and sharing features",
  },
  {
    name: "Bitwarden",
    oneLiner: "Open-source password manager with a generous free tier.",
    whyItWorks:
      "Bitwarden Organizations let you create shared collections and control who sees what. The free organization plan supports two users, which is enough for you and your EA. If your EA already uses Bitwarden personally, sharing is seamless. The open-source codebase also means the security is independently auditable. Bitwarden supports self-hosting for teams that want full control over their credential data. The Send feature lets you share temporary credentials with an expiration date, which is useful for one-off access that should not persist permanently.",
    pricing: "Free for 2 users. Teams plan starts at $4/user/month.",
    bestFor: "Budget-conscious setups or teams that prefer open-source tools",
  },
  {
    name: "Dashlane",
    oneLiner: "Password manager with built-in VPN and dark web monitoring.",
    whyItWorks:
      "Dashlane's sharing center lets you share individual credentials or groups of logins with limited or full rights. The admin console shows you exactly what your EA has access to and when they last used each credential. The built-in breach monitoring alerts you if any shared credential appears in a data leak. Dashlane also provides a password health score that flags weak or reused passwords across your shared vault, prompting you to strengthen credentials your EA regularly uses. The auto-fill works reliably across browsers, which reduces the friction of your EA logging into sites on your behalf.",
    pricing: "Premium starts at $4.99/month. Business starts at $8/user/month.",
    bestFor: "Security-conscious users who want monitoring and VPN included",
  },
  {
    name: "LastPass",
    oneLiner: "Widely adopted password manager with straightforward sharing.",
    whyItWorks:
      "LastPass Families and Teams plans let you create shared folders for your EA. The emergency access feature is useful if your EA needs to access accounts when you are unavailable. Setup is quick, and most EAs have encountered LastPass before, which reduces onboarding friction. The Security Dashboard gives you visibility into shared credential strength and helps identify accounts that need password updates. LastPass also supports one-to-one sharing where you share individual items without giving access to your entire vault.",
    pricing: "Premium starts at $3/month. Teams start at $4/user/month.",
    bestFor: "Quick setup when your EA is already familiar with LastPass",
  },
  {
    name: "NordPass",
    oneLiner: "Clean, modern password manager from the team behind NordVPN.",
    whyItWorks:
      "NordPass uses a simpler interface than most competitors, which makes sharing straightforward. You can share individual items or folders, set permissions, and revoke access with one click. The data breach scanner checks your shared credentials against known leaks. Good option if your EA is not particularly technical. NordPass also supports passkeys for sites that use the newer authentication standard, which can simplify login flows for your EA. The XChaCha20 encryption standard is arguably stronger than the AES-256 used by most competitors, though both are effectively unbreakable for practical purposes.",
    pricing: "Free plan available. Premium starts at $1.49/month. Business starts at $3.99/user/month.",
    bestFor: "Less technical EAs who need a simple, clean interface",
  },
];

export default function PasswordSharingToolsPage() {
  return (
    <div className="max-w-article mx-auto px-6 py-12">
      <Link
        href="/best-tools"
        className="text-blue-600 hover:underline text-sm mb-6 inline-block"
      >
        &larr; All tool guides
      </Link>

      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy mb-4 tracking-tight">
        Best Password Sharing Tools for Working With Your EA
      </h1>

      <div className="prose">
        <p>
          Your EA will need access to your accounts. There is no way around
          it. They will log into your email, your calendar, your travel
          booking sites, and whatever else you delegate. The question is
          whether you share those credentials securely or through a text
          message that lives in both your phones forever.
        </p>
        <p>
          A password manager is not optional when working with a remote EA.
          It is the bare minimum for protecting both of you. Sharing
          passwords through Slack messages, emails, or shared Google Docs is
          not just sloppy; it creates a permanent record of your credentials
          in a format that is trivially easy for anyone with access to those
          channels to harvest. A proper password manager solves this problem
          completely.
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
            <strong>Create a dedicated shared vault or folder.</strong> Do
            not share your entire password vault. Make a separate
            collection called &quot;EA Access&quot; and only put the specific
            credentials your EA needs in it. Add new ones as they come up.
            Start small. Your EA does not need access to your bank login on
            day one. Begin with calendar, email, and scheduling tools, then
            expand as you delegate more.
          </li>
          <li>
            <strong>Use &quot;hide password&quot; sharing when available.</strong>{" "}
            Most password managers let you share a login so your EA can use
            it without seeing the actual password. This means if you part
            ways, you do not need to change every shared credential — you
            just revoke access. This is the single most important feature
            for EA password sharing and the main reason a proper password
            manager beats a shared spreadsheet.
          </li>
          <li>
            <strong>Enable two-factor authentication on everything.</strong>{" "}
            Sharing passwords is safer when accounts also require a second
            factor. Set up 2FA on all shared accounts and store the TOTP
            codes in your password manager so your EA can access them too.
            This adds a security layer without adding friction. Your EA
            opens the password manager, copies the login, and the TOTP code
            is right there next to it.
          </li>
          <li>
            <strong>Audit shared access quarterly.</strong> Every few months,
            review what your EA has access to. Remove credentials they no
            longer need. This is especially important if you switch EA
            services or your EA&apos;s role changes. A quarterly review
            takes 15 minutes and keeps your shared access list clean.
          </li>
        </ol>

        <h2 className="font-heading text-2xl font-bold text-navy">
          Security practices that matter
        </h2>
        <p>
          <strong>Never share your master password.</strong> Your EA should
          have their own account on the password manager, and you share
          specific credentials with their account. They should never need
          your master password. If your setup requires sharing a master
          password, you are doing it wrong.
        </p>
        <p>
          <strong>Use unique passwords for every shared account.</strong> If
          you are sharing passwords with your EA and one of those accounts
          gets breached, a unique password limits the damage to that one
          account. Password reuse across shared accounts means one breach
          exposes everything. Your password manager can generate unique,
          strong passwords for each account.
        </p>
        <p>
          <strong>Set up SSO where possible.</strong> For tools that support
          Single Sign-On through Google Workspace or Microsoft 365, use that
          instead of shared passwords. SSO means your EA logs in through
          your organization&apos;s identity provider, and you can revoke all
          access centrally if they leave. It is cleaner, more secure, and
          easier to manage than individual credentials.
        </p>
        <p>
          <strong>Use delegate access instead of password sharing where
          available.</strong> Gmail, Google Calendar, and many other tools
          offer native delegation features where your EA gets access through
          their own account. This is always preferable to sharing a password
          because it creates an audit trail (you can see what they did under
          delegation) and it does not require you to share your actual
          credentials. Check if a tool supports delegation before defaulting
          to password sharing.
        </p>

        <h2 className="font-heading text-2xl font-bold text-navy">
          What to do when you switch EA services
        </h2>
        <p>
          This is where the password manager setup really pays off. When you
          end a relationship with an EA or switch services, you need to
          revoke access cleanly. With a proper password manager, you remove
          their account from your shared vault and they instantly lose
          access to everything. No frantic password-changing marathon.
        </p>
        <p>
          If you used hide-password sharing, you do not even need to change
          the passwords. Revoking vault access is sufficient because they
          never saw the actual credentials. If you shared passwords with
          visibility (they could see the raw text), change those passwords
          after revoking access as a precaution.
        </p>
        <p>
          Build this off-boarding step into your process. When you switch EA
          services, you should: remove the old EA from your password manager,
          change any passwords they had visibility on, review and remove
          their delegation access on Google Workspace or Microsoft 365, and
          remove them from any team tools like Slack or Asana. A clean
          cutover takes 30 minutes if your credential sharing was organized
          from the start.
        </p>

        <h2 className="font-heading text-2xl font-bold text-navy">
          The recommendation
        </h2>
        <p>
          For most people, 1Password is the right choice. The guest account
          feature was designed for exactly this scenario, the hide-password
          sharing is reliable, and the user interface is good enough that
          even non-technical EAs can use it without training. If budget is
          tight, Bitwarden&apos;s free organization plan covers two users
          and provides all the essential sharing features. You can always
          upgrade later if you need more advanced controls.
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
