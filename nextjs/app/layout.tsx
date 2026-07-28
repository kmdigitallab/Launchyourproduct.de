import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LaunchYourProduct – Motion Design Videos for Amazon Sellers',
  description:
    'Scroll-stopping motion design ads for Amazon, Shopify & Kickstarter – delivered in 48h. No camera crew, no studio.',
  icons: {
    icon: [
      { url: '/favicon.png', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f7f9f7] text-[#0d1f12]">{children}</body>
    </html>
  );
}
