'use server';

import { CookieBanner } from '@/app/root/layout/components/cookie-consent';
import { Toaster } from '@/app/root/layout/components/feedback';
import { Footer } from '@/app/root/layout/components/footer';
import { Navbar, Topbar } from '@/app/root/layout/components/navbar';
import { serverApi } from '@/trpc/server';
import type { ReactNode } from 'react';

export const LayoutWrapper = async ({ children }: { children: ReactNode }) => {
  const session = await serverApi.session.getSession();
  const cookieConsent = await serverApi.cookie.getConsent();

  const hasUserConsented = cookieConsent.status === 'success';
  const hasActiveSession = session.status === 'success';

  if (!hasUserConsented) return <CookieBanner />;
  return (
    <>
      <Topbar />
      <Navbar hasActiveSession={hasActiveSession} />

      <main
        id='main-content'
        className='mx-auto flex min-h-[86vh] w-full flex-col bg-background lg:w-[90vw] xl:w-[75vw]'
      >
        {children}
      </main>

      <Toaster />

      <Footer hasActiveSession={hasActiveSession} />
    </>
  );
};
LayoutWrapper.displayName = 'LayoutWrapper';
