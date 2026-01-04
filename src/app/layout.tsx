import type { Metadata } from 'next';
import { Inter, Oswald } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const oswald = Oswald({ subsets: ['latin'], variable: '--font-oswald' });

export const metadata: Metadata = {
  title: 'Veer Fitness Studio | Best Gym in Shankarpally',
  description: 'Join Veer Fitness Studio in Shankarpally. Professional equipment, expert trainers, and a disciplined environment to build strength and health.',
  keywords: 'Gym in Shankarpally, Fitness Center Shankarpally, Workout, Bodybuilding, Weight Loss, Veer Fitness',
  openGraph: {
    title: 'Veer Fitness Studio',
    description: 'The real place to build strength in Shankarpally.',
    locale: 'en_IN',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
