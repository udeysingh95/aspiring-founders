import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aspiring Founders Meetup | Berlin',
  description:
    'A community for people navigating their first year of entrepreneurship or solopreneurship.',
  icons: { icon: '/assets/afm-logo.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"><body>{children}</body></html>
  );
}
