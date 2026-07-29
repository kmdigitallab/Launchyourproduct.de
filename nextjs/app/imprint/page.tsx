import type { Metadata } from 'next';
import Nav from '@/components/nav';
import AnnouncementBar from '@/components/announcement-bar';

export const metadata: Metadata = {
  title: 'Legal Notice – LaunchYourProduct',
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-x-0 top-0 z-[210]">
        <AnnouncementBar />
      </div>
      <Nav />

      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32 md:px-12">
        <h1 className="mb-8 text-[clamp(28px,4vw,42px)] font-black tracking-[-1px]">Legal Notice (Impressum)</h1>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">
            Information according to § 5 DDG (German Digital Services Act)
          </h2>
          <p className="leading-[1.8] text-white/60">
            Kabisch &amp; Miller GbR
            <br />
            Tobias Miller &amp; Cedric Leon Kabisch
            <br />
            Windmühlenstraße 12
            <br />
            31552 Rodenberg
            <br />
            Germany
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">Represented by the partners</h2>
          <p className="leading-[1.8] text-white/60">
            Tobias Miller
            <br />
            Cedric Leon Kabisch
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">Contact</h2>
          <p className="leading-[1.8] text-white/60">
            Email:{' '}
            <a href="mailto:kmdigitallab@gmail.com" className="text-violet-300 hover:underline">
              kmdigitallab@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">
            Responsible for content according to § 18 Abs. 2 MStV
          </h2>
          <p className="leading-[1.8] text-white/60">
            Cedric Leon Kabisch
            <br />
            Windmühlenstraße 12
            <br />
            31552 Rodenberg
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">EU Dispute Resolution</h2>
          <p className="leading-[1.8] text-white/60">
            The European Commission provides a platform for online dispute resolution (ODR):{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
              className="text-violet-300 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-3 leading-[1.8] text-white/60">
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer
            arbitration board.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[22px] font-extrabold tracking-[-.5px]">Disclaimer</h2>

          <h3 className="mb-1.5 mt-5 text-sm font-bold uppercase tracking-[1px] text-white/40">
            Liability for content
          </h3>
          <p className="leading-[1.8] text-white/60">
            As service providers, we are liable for our own content on these pages in accordance with general laws.
            However, we are not obligated to monitor transmitted or stored external information or to investigate
            circumstances that indicate illegal activity.
          </p>

          <h3 className="mb-1.5 mt-5 text-sm font-bold uppercase tracking-[1px] text-white/40">Liability for links</h3>
          <p className="leading-[1.8] text-white/60">
            Our website may contain links to external websites of third parties. We have no influence on the
            contents of those websites and therefore cannot assume any liability for them. The respective provider
            or operator of the linked pages is always responsible for their content.
          </p>

          <h3 className="mb-1.5 mt-5 text-sm font-bold uppercase tracking-[1px] text-white/40">Copyright</h3>
          <p className="leading-[1.8] text-white/60">
            The content and works on these pages created by the site operators are subject to German copyright law.
            Duplication, processing, distribution, or any kind of exploitation outside the limits of copyright law
            require the prior written consent of the respective author or creator.
          </p>
        </section>

        <a href="/" className="text-sm font-bold text-violet-300 hover:underline">
          ← Back to Website
        </a>
      </main>
    </div>
  );
}
