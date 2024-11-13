import {
  CookieBanner,
  Footer,
  Navbar,
  ThemeProvider,
  Toaster,
  Topbar,
} from '@/app/components';
import '@/styles/globals.css';
import { TRPCReactProvider } from '@/trpc';
import type { Metadata } from 'next';
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

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang='sv' suppressHydrationWarning>
    <body className={`${inter.className} w-full`}>
      <TRPCReactProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Toaster />

          <CookieBanner />

          <Topbar />
          <Navbar />

          <main className='mx-auto flex w-full flex-col bg-background lg:w-[90vw] xl:w-[75vw]'>
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </TRPCReactProvider>
    </body>
  </html>
);
RootLayout.displayName = 'RootLayout';

export default RootLayout;
