import type { Metadata } from 'next';
import Nav from '@/components/nav';
import AnnouncementBar from '@/components/announcement-bar';

export const metadata: Metadata = {
  title: 'Privacy Policy – LaunchYourProduct',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="fixed inset-x-0 top-0 z-[210]">
        <AnnouncementBar />
      </div>
      <Nav />

      <main className="mx-auto max-w-[720px] px-6 pb-24 pt-32 md:px-12">
        <h1 className="mb-4 text-[clamp(28px,4vw,42px)] font-black tracking-[-1px]">Privacy Policy</h1>
        <p className="mb-10 leading-[1.8] text-white/60">
          We take the protection of your personal data very seriously. This Privacy Policy explains how we collect,
          use, and protect your information when you visit our website.
        </p>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">1. Responsible Entity</h2>
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
            <br />
            <br />
            Email:{' '}
            <a href="mailto:kmdigitallab@gmail.com" className="text-[#c084fc] hover:underline">
              kmdigitallab@gmail.com
            </a>
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">
            2. Data Collection on Our Website
          </h2>
          <p className="leading-[1.8] text-white/60">
            When you visit our website, certain information is automatically collected by our hosting provider
            (Vercel). This may include:
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5 leading-[1.8] text-white/60">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Referrer URL</li>
            <li>Time of access</li>
          </ul>
          <p className="mt-3 leading-[1.8] text-white/60">
            This data is used to ensure the proper functioning and security of the website.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">
            3. Legal Basis for Processing
          </h2>
          <p className="leading-[1.8] text-white/60">We process your data based on:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 leading-[1.8] text-white/60">
            <li>Art. 6(1)(a) GDPR (consent)</li>
            <li>Art. 6(1)(b) GDPR (contract or pre-contractual measures)</li>
            <li>Art. 6(1)(f) GDPR (legitimate interest)</li>
          </ul>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">4. Hosting (Vercel)</h2>
          <p className="leading-[1.8] text-white/60">
            Our website is hosted by Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Vercel processes
            personal data on our behalf in accordance with the GDPR, including via Standard Contractual Clauses for
            any transfer of data outside the EU/EEA.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">5. Data Retention</h2>
          <p className="leading-[1.8] text-white/60">
            We only store your personal data as long as necessary for the purposes stated or as required by law.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">6. Your Rights</h2>
          <p className="leading-[1.8] text-white/60">You have the right to:</p>
          <ul className="mt-3 list-disc space-y-1 pl-5 leading-[1.8] text-white/60">
            <li>Access your stored data</li>
            <li>Request correction or deletion</li>
            <li>Restrict processing</li>
            <li>Object to processing</li>
            <li>Data portability</li>
          </ul>
          <p className="mt-3 leading-[1.8] text-white/60">
            You also have the right to lodge a complaint with a supervisory authority.
          </p>
        </section>

        <section className="mb-9">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">7. SSL Encryption</h2>
          <p className="leading-[1.8] text-white/60">
            This website uses SSL encryption to protect the transmission of confidential content.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-[1px] text-white/40">
            8. Changes to This Policy
          </h2>
          <p className="leading-[1.8] text-white/60">We reserve the right to update this Privacy Policy at any time.</p>
        </section>

        <a href="/" className="text-sm font-bold text-[#c084fc] hover:underline">
          ← Back to Website
        </a>
      </main>
    </div>
  );
}
