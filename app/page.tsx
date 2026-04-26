import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1 max-w-3xl mx-auto px-6 py-12 md:py-16 w-full">
        <header className="mb-12">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Dolcaci"
            className="w-full max-w-md h-auto"
            // Logo PNG has ~5.9% built-in left whitespace before the
            // visible "d" character. translateX in % scales with the
            // image's rendered width so alignment stays correct from
            // mobile to desktop.
            style={{ transform: 'translateX(-5.9%)' }}
          />
          <h1 className="font-display mt-6 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            Software for home service businesses.
          </h1>
        </header>

        <section className="space-y-5 text-lg leading-relaxed text-neutral-700">
          <p>
            Dolcaci builds software that helps home service contractors
            run their day-to-day operations — customer inquiries, scheduling,
            crew dispatching, and accepting payments — from a single
            phone-friendly app.
          </p>
          <p>
            Based on Long Island, New York. Currently in private development,
            with a public release planned for later this year.
          </p>
        </section>

        <section className="mt-16 grid gap-6 md:grid-cols-3">
          <FeatureCard
            title="Inquiry intake"
            body="Customers submit jobs through a branded form. Photos, budget, and address get captured upfront."
          />
          <FeatureCard
            title="Crew dispatch"
            body="Assign multiple Pros to a job, track who’s acknowledged, and see live trip status as the team heads out."
          />
          <FeatureCard
            title="Payments"
            body="Send a payment link the moment a job is done. Funds land directly in the contractor’s bank account."
          />
        </section>

        <section className="mt-16 pt-10 border-t border-neutral-300">
          <h2 className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-500">
            Get in touch
          </h2>
          <p className="mt-4">
            <a
              href="mailto:admin@dolcaci.com"
              className="text-xl font-medium underline decoration-2 underline-offset-4 hover:text-blue-700"
            >
              admin@dolcaci.com
            </a>
          </p>
          <p className="mt-3 text-sm text-neutral-500">
            Questions about the platform, partnership inquiries, or general
            contact — we&apos;ll respond within a few business days.
          </p>
        </section>
      </div>

      <footer className="border-t border-neutral-300 py-8 px-6 text-sm text-neutral-500">
        <div className="max-w-3xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div>
            &copy; {new Date().getFullYear()} Dolcaci LLC. All rights reserved.
          </div>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-neutral-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-neutral-900">
              Terms
            </Link>
            <a
              href="mailto:admin@dolcaci.com"
              className="hover:text-neutral-900"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-lg border border-neutral-300 p-5">
      <h3 className="text-sm font-semibold text-neutral-900">{title}</h3>
      <p className="mt-2 text-sm text-neutral-600 leading-relaxed">{body}</p>
    </div>
  );
}
