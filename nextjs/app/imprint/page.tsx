import type { Metadata } from 'next';
import Nav from '@/components/nav';

export const metadata: Metadata = {
  title: 'Legal Notice – LaunchYourProduct',
};

export default function ImprintPage() {
  return (
    <div className="min-h-screen bg-[#f7f9f7] text-[#0d1f12]">
      <Nav />

      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32 md:px-12">
        <h1 className="mb-8 text-[clamp(28px,4vw,42px)] font-black tracking-[-1px]">Legal Notice (Impressum)</h1>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">
            Information according to § 5 DDG (German Digital Services Act)
          </h2>
          <p className="leading-[1.8] text-[#4b6358]">
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
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">Represented by the partners</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            Tobias Miller
            <br />
            Cedric Leon Kabisch
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">Contact</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            Email:{' '}
            <a href="mailto:kmdigitallab@gmail.com" className="text-green-600 hover:underline">
              kmdigitallab@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">
            Responsible for content according to § 18 Abs. 2 MStV
          </h2>
          <p className="leading-[1.8] text-[#4b6358]">
            Cedric Leon Kabisch
            <br />
            Windmühlenstraße 12
            <br />
            31552 Rodenberg
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">EU Dispute Resolution</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            The European Commission provides a platform for online dispute resolution (ODR):{' '}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
          </p>
          <p className="mt-3 leading-[1.8] text-[#4b6358]">
            We are not willing or obliged to participate in dispute resolution proceedings before a consumer
            arbitration board.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-3 text-[22px] font-extrabold tracking-[-.5px]">Disclaimer</h2>

          <h3 className="mb-1.5 mt-5 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">
            Liability for content
          </h3>
          <p className="leading-[1.8] text-[#4b6358]">
            As service providers, we are liable for our own content on these pages in accordance with general laws.
            However, we are not obligated to monitor transmitted or stored external information or to investigate
            circumstances that indicate illegal activity.
          </p>

          <h3 className="mb-1.5 mt-5 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">Liability for links</h3>
          <p className="leading-[1.8] text-[#4b6358]">
            Our website may contain links to external websites of third parties. We have no influence on the
            contents of those websites and therefore cannot assume any liability for them. The respective provider
            or operator of the linked pages is always responsible for their content.
          </p>

          <h3 className="mb-1.5 mt-5 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">Copyright</h3>
          <p className="leading-[1.8] text-[#4b6358]">
            The content and works on these pages created by the site operators are subject to German copyright law.
            Duplication, processing, distribution, or any kind of exploitation outside the limits of copyright law
            require the prior written consent of the respective author or creator.
          </p>
        </section>

        <a href="/" className="text-sm font-bold text-green-600 hover:underline">
          ← Back to Website
        </a>
      </main>
    </div>
  );
}
