import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
});

const title = 'LaunchYourProduct – Motion Design Videos for Amazon Sellers';
const description =
  'Scroll-stopping motion design ads for Amazon, Shopify & Kickstarter – delivered fast. No camera crew, no studio.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.launchyourproduct.de'),
  title,
  description,
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
  openGraph: {
    title,
    description,
    url: 'https://www.launchyourproduct.de',
    siteName: 'LaunchYourProduct',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
