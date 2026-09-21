import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, {
  Bullets,
  LEGAL_ENTITY,
  Section,
} from "@/components/LegalPage";

/**
 * TEMPLATE NOTICE — this document describes what the site actually does today
 * (see src/app/api/submit-lead/route.ts and the GTM/GA tags in app/layout.tsx),
 * but it has NOT been reviewed by a lawyer. Before going live, confirm with
 * counsel and check: the registered entity name, the registered address, the
 * retention period in "How long we keep your information", and whether a
 * DPDP Act / GDPR grievance officer must be named.
 */

export const metadata: Metadata = {
  title: "Privacy Policy | SoftEXedge",
  description:
    "How SoftEXedge collects, uses, shares and protects the personal information you provide through this website.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy"
      accent="Policy"
      lastUpdated="21 September 2026"
      intro={`This Privacy Policy explains how ${LEGAL_ENTITY.name} ("${LEGAL_ENTITY.shortName}", "we", "us" or "our") collects, uses, shares and protects information about you when you visit this website, submit an enquiry, book a call or subscribe to our newsletter. By using this website you agree to the practices described below.`}
      siblingHref="/terms-and-conditions"
      siblingLabel="Terms & Conditions"
    >
      <Section title="1. Information you give us">
        <p>
          We only ask for what we need in order to reply to you. Depending on
          which form you use, we collect:
        </p>
        <Bullets>
          <li>
            <strong>Enquiry and call-booking forms:</strong> your full name,
            email address, phone number, website address (optional), the service
            you are interested in, and your preferred date and time for a call.
          </li>
          <li>
            <strong>Newsletter:</strong> your email address.
          </li>
        </Bullets>
        <p>
          Please do not send us confidential or sensitive personal information
          through these forms. We do not ask for, and do not want to receive,
          payment card details, government identifiers or health information
          through this website.
        </p>
      </Section>

      <Section title="2. Information collected automatically">
        <p>
          Like most websites, we collect limited technical and usage information
          automatically through cookies and similar technologies:
        </p>
        <Bullets>
          <li>
            IP address (truncated by our analytics provider), approximate
            region, device type, operating system and browser.
          </li>
          <li>
            Pages viewed, time spent on each page, the link or advertisement
            that referred you, and how you move through the site.
          </li>
          <li>
            Campaign parameters carried in the page URL, such as{" "}
            <code className="text-[#3445E7]">utm_source</code>,{" "}
            <code className="text-[#3445E7]">utm_medium</code>,{" "}
            <code className="text-[#3445E7]">utm_campaign</code>,{" "}
            <code className="text-[#3445E7]">utm_content</code> and{" "}
            <code className="text-[#3445E7]">utm_term</code>. Where these are
            present they are attached to the enquiry you submit, so we know
            which campaign brought you to us.
          </li>
        </Bullets>
      </Section>

      <Section title="3. How we use your information">
        <Bullets>
          <li>To reply to your enquiry and schedule the call you requested.</li>
          <li>
            To prepare proposals, quotes and scopes of work for the services you
            asked about.
          </li>
          <li>
            To send you our newsletter and occasional updates, where you have
            subscribed. You can unsubscribe at any time.
          </li>
          <li>
            To measure which pages and campaigns perform well, so we can improve
            the site and spend our marketing budget sensibly.
          </li>
          <li>
            To keep the site secure, prevent abuse, and meet our legal and
            accounting obligations.
          </li>
        </Bullets>
        <p>
          We do not sell your personal information, and we do not share it with
          third parties for their own marketing.
        </p>
      </Section>

      <Section title="4. Cookies and analytics">
        <p>
          We use Google Tag Manager and Google Analytics to understand how this
          site is used. These set cookies in your browser that record a
          pseudonymous identifier and your activity on the site. They do not
          tell us your name.
        </p>
        <p>You can control cookies in several ways:</p>
        <Bullets>
          <li>
            Block or delete cookies in your browser settings. Parts of the site
            may not work as intended if you do.
          </li>
          <li>
            Install the{" "}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#3445E7] underline underline-offset-2 hover:text-[#04034C]"
            >
              Google Analytics Opt-out Browser Add-on
            </a>
            .
          </li>
          <li>
            Enable the &ldquo;Do Not Track&rdquo; setting in your browser, if it
            offers one.
          </li>
        </Bullets>
      </Section>

      <Section title="5. Who we share it with">
        <p>
          We share your information only where it is necessary, and only with:
        </p>
        <Bullets>
          <li>
            <strong>Google.</strong> Form submissions are sent from our server
            to a Google Apps Script endpoint and recorded in our Google
            Workspace account. Google Analytics and Google Tag Manager process
            the usage data described above.
          </li>
          <li>
            <strong>Service providers</strong> who host this website, send our
            email, or otherwise help us operate the business. They are bound by
            confidentiality obligations and may use the information only to
            provide that service to us.
          </li>
          <li>
            <strong>Authorities,</strong> where we are required to disclose
            information by law, by court order, or by a valid regulatory
            request.
          </li>
          <li>
            <strong>A successor entity,</strong> if our business or the relevant
            assets are merged, acquired or reorganised. We will tell you before
            your information becomes subject to a different privacy policy.
          </li>
        </Bullets>
      </Section>

      <Section title="6. International transfers">
        <p>
          Google and our other service providers may store and process your
          information on servers located outside your country of residence.
          Where that happens we rely on the safeguards those providers put in
          place, including standard contractual clauses, to protect your
          information to a comparable standard.
        </p>
      </Section>

      <Section title="7. How long we keep your information">
        <p>
          We keep enquiry records for as long as we are in contact with you and
          for a reasonable period afterwards, so that we can pick the
          conversation up again and so that we can meet our accounting and legal
          obligations. Newsletter subscriptions are kept until you unsubscribe.
          Analytics data is retained for the period configured in our Google
          Analytics property. When information is no longer needed we delete it
          or anonymise it.
        </p>
      </Section>

      <Section title="8. How we protect it">
        <p>
          Form submissions are sent over HTTPS and passed to our recipient
          system server-to-server rather than directly from your browser. Access
          to the records is limited to the people at {LEGAL_ENTITY.shortName}{" "}
          who need it. No method of transmission or storage is completely
          secure, however, so we cannot guarantee absolute security.
        </p>
      </Section>

      <Section title="9. Your rights">
        <p>Subject to the law that applies to you, you can ask us to:</p>
        <Bullets>
          <li>
            Give you a copy of the personal information we hold about you.
          </li>
          <li>Correct information that is inaccurate or incomplete.</li>
          <li>Delete your information where we no longer need it.</li>
          <li>Stop sending you marketing, at any time.</li>
          <li>
            Withdraw a consent you previously gave, without affecting anything
            we did before you withdrew it.
          </li>
        </Bullets>
        <p>
          To exercise any of these, email us at{" "}
          <a
            href={`mailto:${LEGAL_ENTITY.email}`}
            className="text-[#3445E7] font-medium underline underline-offset-2 hover:text-[#04034C]"
          >
            {LEGAL_ENTITY.email}
          </a>
          . We may need to verify your identity first. We aim to respond within
          30 days.
        </p>
      </Section>

      <Section title="10. Links to other sites">
        <p>
          This website links to third-party sites, including our profiles on
          Instagram, Facebook and LinkedIn. We are not responsible for their
          content or their privacy practices, and we encourage you to read their
          policies before sharing information with them.
        </p>
      </Section>

      <Section title="11. Children">
        <p>
          This website and our services are intended for businesses and for
          adults. We do not knowingly collect personal information from
          children. If you believe a child has provided us with information,
          contact us and we will delete it.
        </p>
      </Section>

      <Section title="12. Changes to this policy">
        <p>
          We may update this policy as our services or the law change. The
          revised version takes effect when we post it, and the &ldquo;Last
          updated&rdquo; date above tells you when that was. If a change is
          significant we will make that clear on this page.
        </p>
      </Section>

      <Section title="13. Contact us">
        <p>
          Questions about this policy, or about how we handle your information?
          Email{" "}
          <a
            href={`mailto:${LEGAL_ENTITY.email}`}
            className="text-[#3445E7] font-medium underline underline-offset-2 hover:text-[#04034C]"
          >
            {LEGAL_ENTITY.email}
          </a>
          . Your use of this website is also governed by our{" "}
          <Link
            href="/terms-and-conditions"
            className="text-[#3445E7] font-medium underline underline-offset-2 hover:text-[#04034C]"
          >
            Terms &amp; Conditions
          </Link>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
