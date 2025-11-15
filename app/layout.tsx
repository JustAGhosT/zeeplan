import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zeeplan - Zeerust Partnership Proposal',
  description: 'Interactive partnership proposal for Zeerust regenerative agriculture venture',
};

import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';
import { FloatingControls } from '@/components/FloatingControls';
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
          <DataProvider>
            <main>{children}</main>
            <FloatingControls />
          </DataProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
