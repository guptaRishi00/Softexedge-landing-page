import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

/**
 * Shared shell for the standalone legal pages.
 *
 * These pages deliberately do NOT mount <Navbar /> or <Footer />: both navigate
 * by in-page anchors (#hero, #about, ...) that do not exist outside "/", so the
 * links would silently dead-end. Same reasoning as src/app/thank-you/page.tsx.
 */

/** Single source of truth for the details quoted in both legal documents. */
export const LEGAL_ENTITY = {
  name: "SoftEXedge Inc.",
  shortName: "SoftEXedge",
  email: "admin@softexedge.com",
} as const;

export function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-lg md:text-xl font-bold text-[#04034C] tracking-tight">
        {title}
      </h2>
      <div className="mt-3 space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
        {children}
      </div>
    </section>
  );
}

export function Bullets({ children }: { children: React.ReactNode }) {
  return (
    <ul className="space-y-2 pl-5 list-disc marker:text-[#2F85EA]">
      {children}
    </ul>
  );
}

export default function LegalPage({
  eyebrow,
  title,
  accent,
  lastUpdated,
  intro,
  siblingHref,
  siblingLabel,
  children,
}: {
  eyebrow: string;
  title: string;
  accent: string;
  lastUpdated: string;
  intro: string;
  siblingHref: string;
  siblingLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#FDFCF8] flex flex-col">
      {/* Top bar */}
      <header className="w-full px-6 lg:px-16 py-5 flex items-center justify-between border-b border-black/5">
        <Link href="/" aria-label="SoftEXedge home">
          <span className="relative block h-9 w-44 md:h-10 md:w-48">
            <Image
              src="/logo.svg"
              alt="SoftEXedge"
              fill
              priority
              sizes="192px"
              className="object-contain object-left"
            />
          </span>
        </Link>
        <Link
          href="/"
          className="group inline-flex items-center gap-2 border border-gray-300 px-5 py-2.5 rounded-full text-xs md:text-sm font-medium text-gray-900 hover:bg-linear-to-r hover:from-[#3445E7] hover:to-[#07D6F3] hover:text-white hover:border-transparent transition-all duration-300 active:scale-95"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-1"
          />
          <span className="tracking-tight">Back to Home</span>
        </Link>
      </header>

      <main className="flex-1 w-full px-6 lg:px-16 py-14 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <span className="inline-block text-[10px] font-bold uppercase tracking-widest text-[#3445E7]/70 border border-blue-200/60 bg-blue-50/40 rounded-full px-4 py-1.5">
            {eyebrow}
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl font-bold text-[#04034C] tracking-tight leading-[1.1]">
            {title}{" "}
            <span className="bg-linear-to-r from-[#3445E7] via-[#2F85EA] to-[#07D6F3] bg-clip-text text-transparent">
              {accent}
            </span>
          </h1>

          <p className="mt-4 text-xs md:text-sm font-medium text-gray-500">
            Last updated: {lastUpdated}
          </p>

          <p className="mt-6 text-sm md:text-base text-gray-700 leading-relaxed">
            {intro}
          </p>

          <div className="mt-10 space-y-8">{children}</div>

          <div className="mt-14 pt-8 border-t border-black/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <Link
              href={siblingHref}
              className="text-sm font-medium text-[#3445E7] hover:text-[#04034C] transition-colors"
            >
              Read our {siblingLabel} &rarr;
            </Link>
            <p className="text-xs text-gray-500">
              Copyright &copy; 2026 {LEGAL_ENTITY.name} All rights reserved.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
