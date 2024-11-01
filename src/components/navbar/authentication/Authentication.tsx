import { NavigationMenuClose } from '@/components/navbar/shared';
import { Button } from '@/components/shadcn';
import type { AuthenticationProps } from '@/types';

export const Authentication = ({ component }: AuthenticationProps) => {
  const actionText = component === 'login' ? 'Logga in' : 'Registrera dig';
  const promptText =
    component === 'login' ? 'Har du inget konto? ' : 'Har du redan ett konto? ';

  return (
    <div className='flex flex-col w-full h-[calc(100vh-4.5rem)]'>
      <NavigationMenuClose trigger='.authentication-trigger' />

      <h3 className='font-semibold text-3xl capitalize'>{actionText}</h3>

      <p>
        Välkommen{component === 'login' && ' tillbaka'}, fyll i dina uppgifter
        nedan och klicka på {actionText}.
      </p>

      <div className='flex justify-end items-center'>
        <span
          aria-hidden
          className='py-2 text-sm'
        >
          {promptText}
        </span>
        <Button
          variant='link'
          className='px-2'
          aria-label={`${promptText}, klicka här för att ${actionText}`}
        >
          Klicka här
        </Button>
      </div>
    </div>
  );
};

Authentication.displayName = 'Authentication';
