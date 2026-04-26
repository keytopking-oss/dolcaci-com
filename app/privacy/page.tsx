import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy — Dolcaci',
};

export default function Privacy() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <Link
        href="/"
        className="text-sm text-neutral-500 hover:text-neutral-900"
      >
        ← Dolcaci
      </Link>
      <h1 className="font-display mt-4 text-4xl font-semibold tracking-tight">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-neutral-500">Last updated: April 26, 2026</p>

      <div className="mt-10 space-y-8 text-neutral-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Who we are</h2>
          <p className="mt-3">
            Dolcaci LLC (&ldquo;Dolcaci&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;)
            is a software company building tools for home services businesses.
            This Privacy Policy covers information collected through our
            website at dolcaci.com. Software products we provide to business
            customers are governed by separate agreements with those customers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Information we collect
          </h2>
          <p className="mt-3">
            From visitors to dolcaci.com, we collect only information you
            voluntarily provide — for example, by emailing us at
            admin@dolcaci.com. Our web hosting provider may automatically
            log standard server information (IP address, user agent, request
            timestamps) for security and reliability purposes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            How we use information
          </h2>
          <p className="mt-3">
            We use the information you provide to respond to your inquiries
            and communicate about our products and services. We do not sell,
            rent, or trade personal information to third parties.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Service providers
          </h2>
          <p className="mt-3">
            We share limited information with vendors who help us operate
            this site (web hosting, email delivery). These vendors are
            contractually obligated to protect your information and use it
            only for the services they provide to us.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Cookies</h2>
          <p className="mt-3">
            This site does not use cookies for advertising or cross-site
            tracking. Our hosting provider may set basic technical cookies
            necessary for the site to function.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Your rights</h2>
          <p className="mt-3">
            You may contact us at admin@dolcaci.com to request access to,
            correction of, or deletion of personal information we hold
            about you. We will respond within a reasonable time, subject
            to applicable law.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">
            Children&apos;s privacy
          </h2>
          <p className="mt-3">
            Our website is not directed to children under 13, and we do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Changes</h2>
          <p className="mt-3">
            We may update this Privacy Policy from time to time. The &ldquo;Last
            updated&rdquo; date at the top of this page reflects the most
            recent changes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-neutral-900">Contact</h2>
          <p className="mt-3">
            Questions about this Privacy Policy? Reach us at{' '}
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
