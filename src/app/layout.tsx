import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { LayoutWrapper, ThemeProvider } from '@/app/_root/layout/components';

import { TRPCProvider } from '@/trpc/Client';

import type { ReactNode } from 'react';

import '@/styles/globals.css';

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
      <TRPCProvider>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </TRPCProvider>
    </body>
  </html>
);
RootLayout.displayName = 'RootLayout';
export default RootLayout;
