import { CookieBanner, Navbar, ThemeProvider, Topbar } from '@/app/_components';
import { Toaster } from '@/components';
import '@/styles/globals.scss';
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
          <CookieBanner />

          <Topbar />
          <Navbar />

          <main className='mx-auto flex w-full flex-col bg-background lg:w-[90vw] xl:w-[75vw]'>
            {children}
          </main>

          <Toaster />
        </ThemeProvider>
      </TRPCReactProvider>
    </body>
  </html>
);
RootLayout.displayName = 'RootLayout';

export default RootLayout;
