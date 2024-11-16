import { LargeMenu, SmallMenu } from '@/app/root/layout/components/menu';
import type { HasActiveSession } from '@/app/root/layout/lib';

export const MenuWrapper = ({ hasActiveSession }: HasActiveSession) => (
  <>
    <SmallMenu hasActiveSession={hasActiveSession} />
    <LargeMenu hasActiveSession={hasActiveSession} />
  </>
);
MenuWrapper.displayName = 'MenuWrapper';
