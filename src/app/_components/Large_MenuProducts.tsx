'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  Link,
} from '@/components';

export const Large_MenuProducts = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='rounded-sm px-4 py-2 underline-offset-2 transition-colors hover:text-primary hover:underline hover:decoration-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary'>
        Produkter
      </DropdownMenuTrigger>

      <DropdownMenuContent
        sideOffset={20}
        className='flex w-[50vw] max-w-[700px] flex-wrap rounded-t-none p-4'
      >
        <DropdownMenuLabel className='sr-only'>
          Lista med alla produkter
        </DropdownMenuLabel>
        <ul
          aria-orientation='vertical'
          role='menu'
          aria-label='Lista med länkar inom kategorin '
          className='flex flex-col gap-1'
        >
          <li aria-hidden className='mb-1.5 px-2 text-sm font-semibold'>
            Kategori heading
          </li>
          <DropdownMenuItem asChild>
            <Link href='/hohoh'>loopa hela listan</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href='/hohoh'>loopa hela listan</Link>
          </DropdownMenuItem>{' '}
          <DropdownMenuItem asChild>
            <Link href='/hohoh'>loopa hela listan</Link>
          </DropdownMenuItem>{' '}
          <DropdownMenuItem asChild>
            <Link href='/hohoh'>loopa hela listan</Link>
          </DropdownMenuItem>{' '}
          <DropdownMenuItem asChild>
            <Link href='/hohoh'>loopa hela listan</Link>
          </DropdownMenuItem>
        </ul>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
Large_MenuProducts.displayName = 'Large_MenuProducts';
