import { LargeMenu, SmallMenu } from '@/app/components/menu';
import type { HasActiveSession } from '@/app/layout';

export const MenuWrapper = ({ hasActiveSession }: HasActiveSession) => (
  <>
    <SmallMenu hasActiveSession={hasActiveSession} />
    <LargeMenu hasActiveSession={hasActiveSession} />
  </>
);
MenuWrapper.displayName = 'MenuWrapper';
