import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service — Dolcaci',
};

export default function Terms() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-sm text-neutral-500 hover:text-neutral-900"
      >
        ← Dolcaci
      </Link>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight">
        Terms of Service
      </h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: April 26, 2026</p>

      <div className="mt-10 space-y-8 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Acceptance of terms
          </h2>
          <p className="mt-3">
            By accessing dolcaci.com, you agree to these Terms of Service. If
            you do not agree, please do not use this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            About this site
          </h2>
          <p className="mt-3">
            dolcaci.com is an informational website operated by Dolcaci LLC.
            It describes our software products and provides a way to contact
            us. The software products we offer to business customers are
            governed by separate agreements signed with those customers and
            are not made available through this website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Intellectual property
          </h2>
          <p className="mt-3">
            All content on this website — including text, graphics, logos,
            and software — is the property of Dolcaci LLC or its licensors
            and is protected by United States and international copyright
            and trademark laws. You may view and print pages for personal,
            non-commercial use only.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Disclaimer of warranties
          </h2>
          <p className="mt-3">
            This website is provided &ldquo;as is&rdquo; and &ldquo;as
            available&rdquo; without warranties of any kind, either express
            or implied. Dolcaci does not warrant that the website will be
            uninterrupted, error-free, or free of viruses or other harmful
            components.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Limitation of liability
          </h2>
          <p className="mt-3">
            To the fullest extent permitted by law, Dolcaci LLC will not be
            liable for any indirect, incidental, special, or consequential
            damages arising out of or in connection with your use of this
            website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            External links
          </h2>
          <p className="mt-3">
            This website may contain links to third-party sites. Dolcaci is
            not responsible for the content or practices of those sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Governing law
          </h2>
          <p className="mt-3">
            These Terms are governed by the laws of the State of New York,
            without regard to its conflict of law principles. Any dispute
            arising from your use of this website will be resolved in the
            state or federal courts located in New York.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Changes</h2>
          <p className="mt-3">
            We may update these Terms from time to time. The &ldquo;Last
            updated&rdquo; date at the top of this page reflects the most
            recent changes. Continued use of the site after changes are
            posted constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Contact</h2>
          <p className="mt-3">
            Questions about these Terms? Reach us at{' '}
            <a
              href="mailto:admin@dolcaci.com"
              className="underline hover:text-blue-700"
            >
              admin@dolcaci.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
