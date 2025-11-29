import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zeeplan - Zeerust Partnership Proposal',
  description: 'Interactive partnership proposal for Zeerust regenerative agriculture venture',
};

import { ThemeProvider } from './contexts/ThemeContext';
import './print.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ThemeProvider>
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
