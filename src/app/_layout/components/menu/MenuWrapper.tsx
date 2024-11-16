import { LargeMenu, SmallMenu } from '@/app/layout/components/menu';
import type { HasActiveSession } from '@/app/layout/lib';

export const MenuWrapper = ({ hasActiveSession }: HasActiveSession) => (
  <>
    <SmallMenu hasActiveSession={hasActiveSession} />
    <LargeMenu hasActiveSession={hasActiveSession} />
  </>
);
MenuWrapper.displayName = 'MenuWrapper';
