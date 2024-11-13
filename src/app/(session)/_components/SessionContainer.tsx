import { Link } from '@/components';
import { cn } from '@/lib';
import type { ReactNode } from 'react';

type SessionContainerProps = {
  usedFor: 'login' | 'register';
  children?: ReactNode;
};

export const SessionContainer = ({
  usedFor,
  children,
}: SessionContainerProps) => {
  const actionText = usedFor === 'login' ? 'logga in' : 'registrera dig';

  return (
    <div
      className={cn(
        'flex w-full px-4 sm:px-12 lg:justify-center lg:px-0',
        usedFor === 'register' ? 'pb-32 pt-12' : 'py-12 lg:pt-16',
      )}
    >
      <section className='flex flex-col gap-3 lg:w-[65%]'>
        <h2 className='text-2xl font-semibold capitalize sm:text-3xl'>
          {actionText}
        </h2>

        <h3 className='max-w-[85%] text-pretty text-sm font-medium sm:text-base'>
          Välkommen! Fyll i dina uppgifter nedan och klicka sedan på&nbsp;
          {actionText} knappen.
        </h3>

        <span className='my-4 flex w-full items-center text-sm'>
          {usedFor === 'login'
            ? 'Har du inget konto? '
            : 'Har du redan ett konto? '}

          <Link
            aria-label={`Gå till ${actionText} sidan`}
            href={`/${usedFor === 'login' ? 'register' : 'login'}`}
            className='rounded-md p-1.5 font-medium'
          >
            {usedFor === 'login' ? 'Registrera dig' : 'Logga in'}
          </Link>
        </span>

        {children}
      </section>
    </div>
  );
};
SessionContainer.displayName = 'SessionContainer';
