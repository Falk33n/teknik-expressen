import { LargeMenu, SmallMenu } from '@/app/_root/layout/components';
import type { HasActiveSession } from '@/app/_root/layout/lib/types';

export const MenuWrapper = ({ hasActiveSession }: HasActiveSession) => (
  <>
    <SmallMenu hasActiveSession={hasActiveSession} />
    <LargeMenu hasActiveSession={hasActiveSession} />
  </>
);
MenuWrapper.displayName = 'MenuWrapper';
