import type { Metadata } from 'next';
import Nav from '@/components/nav';

export const metadata: Metadata = {
  title: 'Terms & Conditions – LaunchYourProduct',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#f7f9f7] text-[#0d1f12]">
      <Nav />

      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32 md:px-12">
        <h1 className="mb-4 text-[clamp(28px,4vw,42px)] font-black tracking-[-1px]">
          General Terms &amp; Conditions
        </h1>
        <p className="mb-10 leading-[1.8] text-[#4b6358]">
          These terms apply to all business services provided by Kabisch &amp; Miller GbR ("we", "us") — motion
          design video production for Amazon, Shopify and e-commerce sellers. Our services are offered exclusively
          to businesses (B2B), not to consumers.
        </p>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">1. Scope of Services</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            The exact scope, deliverables, timeline, and price of each project are agreed individually per client,
            typically following a free audit call. Nothing on this website constitutes a binding offer — a contract
            is only formed once both parties confirm the agreed scope in writing (e.g. by email).
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">2. Payment</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            Unless otherwise agreed in writing, no payment is due upfront. We invoice only after the final
            deliverable has been delivered and approved by the client. Invoices are payable within 14 days of
            delivery unless a different term is stated on the invoice.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">3. Revisions</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            Each project includes up to two (2) rounds of revisions within the originally agreed scope. Additional
            revision rounds, or changes that go beyond the original brief, will be quoted and billed separately
            before work begins on them.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">4. Usage Rights</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            Upon full payment, the client receives a non-exclusive, unlimited usage right to the final delivered
            work for their own commercial use (e.g. advertising, listings, social media). We retain the right to
            display the work in our own portfolio and marketing materials unless the client explicitly requests
            otherwise in writing.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">5. Client Materials</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            The client is responsible for ensuring that any product images, footage, logos, or other materials they
            provide do not infringe on third-party rights. We are not liable for claims arising from client-supplied
            material.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">6. Delivery Timeline</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            Delivery timelines communicated on this website are typical turnaround estimates for standard-scope
            projects and depend on timely feedback and material delivery from the client. They do not constitute a
            guaranteed, contractually binding deadline unless explicitly confirmed in writing for a specific
            project.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">7. Cancellation</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            Either party may cancel an ongoing project in writing. Since payment is only due after delivery, no
            refund is necessary; work already completed up to the cancellation date will be invoiced pro rata.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">8. Liability</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            We are liable without limitation for damages caused by intent or gross negligence, and for injury to
            life, body, or health. For damages caused by ordinary negligence, our liability is limited to the
            contract value of the respective project. We are not liable for indirect damages such as lost profits.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">9. Governing Law</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            These terms are governed by German law. As these terms apply exclusively to business clients (B2B), the
            statutory consumer withdrawal right does not apply.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-[#8aaa96]">10. Changes to These Terms</h2>
          <p className="leading-[1.8] text-[#4b6358]">
            We reserve the right to update these terms at any time. The version in effect at the time a project is
            confirmed applies to that project.
          </p>
        </section>

        <a href="/" className="text-sm font-bold text-green-600 hover:underline">
          ← Back to Website
        </a>
      </main>
    </div>
  );
}
