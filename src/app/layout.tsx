import { ThemeProvider } from '@/app/root/layout/components/theme';
import { LayoutWrapper } from '@/app/root/layout/components/wrappers';
import '@/styles/globals.css';
import { TRPCProvider } from '@/trpc/Client';
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
