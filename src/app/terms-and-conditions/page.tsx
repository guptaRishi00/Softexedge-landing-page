import type { Metadata } from "next";
import Link from "next/link";
import LegalPage, {
  Bullets,
  LEGAL_ENTITY,
  Section,
} from "@/components/LegalPage";

/**
 * TEMPLATE NOTICE — standard agency terms, not reviewed by a lawyer. Before
 * going live, confirm with counsel and check: the registered entity name and
 * address, the governing-law and jurisdiction clause (currently India, courts
 * of competent jurisdiction — name the city if you want an exclusive forum),
 * and whether the liability cap in section 11 matches your insurance and your
 * standard client contract.
 */

export const metadata: Metadata = {
  title: "Terms & Conditions | SoftEXedge",
  description:
    "The terms that govern your use of the SoftEXedge website and any enquiry you submit through it.",
};

export default function TermsAndConditionsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms &"
      accent="Conditions"
      lastUpdated="21 September 2026"
      intro={`These Terms & Conditions govern your use of this website, operated by ${LEGAL_ENTITY.name} ("${LEGAL_ENTITY.shortName}", "we", "us" or "our"). By browsing the site, submitting an enquiry, booking a call or subscribing to our newsletter, you accept these terms. If you do not accept them, please do not use the site.`}
      siblingHref="/privacy-policy"
      siblingLabel="Privacy Policy"
    >
      <Section title="1. Who may use this site">
        <p>
          You may use this site if you are able to form a binding contract under
          the law that applies to you, and you are using it for business
          purposes or to evaluate our services. If you are using the site on
          behalf of an organisation, you confirm that you are authorised to
          accept these terms for that organisation.
        </p>
      </Section>

      <Section title="2. This website is not an offer">
        <p>
          The descriptions of services, packages, case studies, results and
          indicative timelines on this site are provided for information only.
          They are not an offer capable of acceptance and they do not form a
          contract.
        </p>
        <p>
          Any engagement between us begins only when we both sign a separate
          written proposal, quotation or statement of work. Where that document
          conflicts with anything on this website, the signed document governs.
        </p>
      </Section>

      <Section title="3. Enquiries and bookings">
        <p>
          When you submit a form or book a call you agree to give accurate and
          complete information, and to keep it up to date. We may decline,
          reschedule or cancel a booking, and we may decline to work with any
          prospective client, at our discretion.
        </p>
        <p>
          Submitting an enquiry does not create a client relationship and does
          not oblige us to provide any service.
        </p>
      </Section>

      <Section title="4. Acceptable use">
        <p>You agree not to:</p>
        <Bullets>
          <li>
            Use the site for any unlawful, fraudulent or misleading purpose, or
            to submit false or impersonated contact details.
          </li>
          <li>
            Attempt to gain unauthorised access to the site, its servers, or any
            connected system, or probe or test its vulnerabilities.
          </li>
          <li>
            Interfere with the site&rsquo;s operation, including by introducing
            malware or by placing unreasonable load on it.
          </li>
          <li>
            Scrape, harvest, mirror or systematically extract content from the
            site, or use automated means to submit forms.
          </li>
          <li>
            Use our brand, content or client names to imply an endorsement or
            partnership that does not exist.
          </li>
        </Bullets>
      </Section>

      <Section title="5. Intellectual property">
        <p>
          All content on this site, including text, graphics, logos, icons,
          imagery, layout, design and code, belongs to {LEGAL_ENTITY.shortName}{" "}
          or to its licensors and is protected by copyright, trade mark and
          other intellectual property laws.
        </p>
        <p>
          You may view the site and print or download extracts for your own
          internal evaluation. You may not otherwise copy, republish, adapt,
          distribute or commercially exploit any part of it without our prior
          written permission.
        </p>
      </Section>

      <Section title="6. Third-party names and work shown">
        <p>
          Client names, brand marks and project work shown on this site remain
          the property of their respective owners and are displayed to
          illustrate our experience. Their appearance does not imply that those
          owners endorse this website or its contents.
        </p>
      </Section>

      <Section title="7. Anything you send us">
        <p>
          If you send us ideas, feedback or suggestions about our services or
          this website, you agree we may use them without restriction and
          without owing you any payment or attribution. Please do not send us
          confidential material before a confidentiality agreement is in place.
        </p>
      </Section>

      <Section title="8. Third-party links and tools">
        <p>
          This site links to third-party websites and embeds third-party tools,
          including Google services and our social media profiles. We do not
          control them and we are not responsible for their content,
          availability, terms or practices. Following an external link is at
          your own risk.
        </p>
      </Section>

      <Section title="9. Availability">
        <p>
          We aim to keep the site available but we do not guarantee
          uninterrupted or error-free access. We may change, suspend or withdraw
          any part of the site, temporarily or permanently, without notice and
          without liability to you.
        </p>
      </Section>

      <Section title="10. Disclaimers">
        <p>
          The site and its content are provided &ldquo;as is&rdquo; and
          &ldquo;as available&rdquo;. To the fullest extent permitted by law, we
          exclude all warranties, conditions and representations, whether
          express or implied, including as to accuracy, completeness,
          merchantability, fitness for a particular purpose and
          non-infringement.
        </p>
        <p>
          Nothing on this site is professional, legal, financial or tax advice,
          and results described for one client are not a promise of similar
          results for you.
        </p>
      </Section>

      <Section title="11. Limitation of liability">
        <p>
          To the fullest extent permitted by law, we will not be liable for any
          indirect, incidental, special or consequential loss, or for any loss
          of profit, revenue, business, goodwill, data or anticipated savings,
          arising out of or in connection with your use of this website.
        </p>
        <p>
          Nothing in these terms limits or excludes our liability for death or
          personal injury caused by our negligence, for fraud or fraudulent
          misrepresentation, or for any other liability that cannot lawfully be
          limited or excluded.
        </p>
      </Section>

      <Section title="12. Indemnity">
        <p>
          You agree to indemnify us against any claim, loss, liability or
          reasonable expense arising from your breach of these terms or your
          misuse of this website.
        </p>
      </Section>

      <Section title="13. Privacy">
        <p>
          Our handling of personal information is described in our{" "}
          <Link
            href="/privacy-policy"
            className="text-[#3445E7] font-medium underline underline-offset-2 hover:text-[#04034C]"
          >
            Privacy Policy
          </Link>
          , which forms part of these terms.
        </p>
      </Section>

      <Section title="14. Changes to these terms">
        <p>
          We may revise these terms from time to time. The revised version takes
          effect when we post it, and the &ldquo;Last updated&rdquo; date above
          tells you when that was. Continuing to use the site after a change
          means you accept the revised terms, so please check this page
          periodically.
        </p>
      </Section>

      <Section title="15. Governing law">
        <p>
          These terms and any dispute arising out of them or out of your use of
          this website are governed by the laws of India, and are subject to the
          jurisdiction of the courts of competent jurisdiction in India.
        </p>
      </Section>

      <Section title="16. General">
        <p>
          If any provision of these terms is found to be unenforceable, the rest
          continue in full force. Our failure to enforce a provision is not a
          waiver of it. These terms, together with any signed proposal or
          statement of work, are the entire agreement between us in relation to
          your use of this website.
        </p>
      </Section>

      <Section title="17. Contact us">
        <p>
          Questions about these terms? Email{" "}
          <a
            href={`mailto:${LEGAL_ENTITY.email}`}
            className="text-[#3445E7] font-medium underline underline-offset-2 hover:text-[#04034C]"
          >
            {LEGAL_ENTITY.email}
          </a>
          .
        </p>
      </Section>
    </LegalPage>
  );
}
