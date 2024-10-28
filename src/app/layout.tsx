import { CookieBanner } from '@/components/cookie-banner';
import { Navbar } from '@/components/navbar';
import { ThemeProvider, ThemeToggle } from '@/components/theme';
import { Toaster } from '@/components/ui';
import '@/styles/globals.scss';
import { TRPCReactProvider } from '@/trpc/react';
import { type Metadata } from 'next';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';

const inter = Inter({
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['italic', 'normal'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  preload: true,
});

export const metadata: Metadata = {
  title: 'TeknikExpressen | Sveriges största teknik e-handel',
  description: 'TeknikExpressen är en e-handel inom teknik',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang='sv'
      suppressHydrationWarning
    >
      <body className={`${inter.className}`}>
        <TRPCReactProvider>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <CookieBanner />
            <Navbar />
            {children}
            <ThemeToggle />
            <Toaster />
          </ThemeProvider>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
