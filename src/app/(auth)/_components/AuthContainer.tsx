import { Link } from '@/components';
import { cn } from '@/lib';
import type { ReactNode } from 'react';

type AuthContainerProps = {
  usedFor: 'login' | 'register';
  children?: ReactNode;
};

export const AuthContainer = ({ usedFor, children }: AuthContainerProps) => {
  const actionText = usedFor === 'login' ? 'logga in' : 'registrera dig';
  const promptText =
    usedFor === 'login' ? 'Har du inget konto? ' : 'Har du redan ett konto? ';

  return (
    <div
      className={cn(
        'flex flex-col gap-3 px-4',
        usedFor === 'register' ? 'pb-32 pt-12' : 'py-12',
      )}
    >
      <h2 className='text-2xl font-semibold capitalize sm:text-3xl'>
        {actionText}
      </h2>

      <h3
        className={cn(
          'text-pretty text-sm font-medium sm:text-base',
          usedFor === 'register' ? 'max-w-[90%]' : 'max-w-[85%]',
        )}
      >
        Välkommen! Fyll i dina uppgifter nedan och klicka sedan på&nbsp;
        {actionText} knappen.
      </h3>

      <span className='my-4 flex w-full items-center text-sm'>
        {promptText}

        <Link
          aria-label={`Gå till ${actionText} sidan`}
          href={`/${usedFor === 'login' ? 'register' : 'login'}`}
          className='rounded-md p-1.5 font-medium'
        >
          {usedFor === 'login' ? 'Registrera dig' : 'Logga in'}
        </Link>
      </span>

      {children}
    </div>
  );
};
AuthContainer.displayName = 'AuthContainer';
