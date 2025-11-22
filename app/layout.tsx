import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Zeeplan - Zeerust Partnership Proposal',
  description: 'Interactive partnership proposal for Zeerust regenerative agriculture venture',
};

import { ThemeProvider } from './contexts/ThemeContext';
import { DataProvider } from './contexts/DataContext';
import { ControlsPanel } from '@/components/ControlsPanel';
import ErrorBoundary from '@/components/ErrorBoundary';
import './print.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ErrorBoundary>
          <ThemeProvider>
            <DataProvider>
              <main>{children}</main>
              <ControlsPanel />
            </DataProvider>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
