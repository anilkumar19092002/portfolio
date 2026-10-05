import type { Metadata } from 'next';
import './globals.css';
import { site } from '@/lib/data';

export const metadata: Metadata = {
  title: `${site.name} — Product, AI, Cloud & Digital Marketing`,
  description: site.description,
  openGraph: {
    title: `${site.name} — Product, AI, Cloud & Digital Marketing`,
    description: site.description,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
