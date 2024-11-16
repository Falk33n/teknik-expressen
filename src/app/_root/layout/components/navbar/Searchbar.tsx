'use client';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Link,
} from '@/components';
import { cn } from '@/lib/utils';
import { type FocusEvent, useState } from 'react';

const searchbarStates = {
  hasValue: false,
  hasFocus: false,
};

type SearchbarProps = { className?: string };

export const Searchbar = ({ className }: SearchbarProps) => {
  const [searchbar, setSearchbar] = useState(searchbarStates);

  const handleValueChange = (val: string) => {
    if ((!searchbar.hasValue && val) || (searchbar.hasValue && !val)) {
      setSearchbar((prev) => ({ ...prev, hasValue: !prev.hasValue }));
    }
  };

  const handleBlur = (e: FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setSearchbar((prev) => ({
        ...prev,
        hasFocus: false,
      }));
    }
  };

  return (
    <Command
      className={cn(
        'relative min-w-[100px] flex-1 rounded-none border focus-within:ring-1 focus-within:ring-primary focus-within:max-sm:ring-inset sm:max-w-[500px] sm:rounded-md md:max-w-[400px]',
        searchbar.hasFocus &&
          searchbar.hasValue &&
          'sm:rounded-b-none lg:rounded-b-md',
        className,
      )}
      onBlur={(e) => handleBlur(e)}
    >
      <CommandInput
        className='py-4 text-base sm:py-5 lg:text-sm'
        onValueChange={(val) => handleValueChange(val)}
        placeholder='Sök efter en produkt...'
        onFocus={() =>
          setSearchbar((prev) => ({
            ...prev,
            hasFocus: true,
          }))
        }
      />

      {searchbar.hasValue && searchbar.hasFocus && (
        <CommandList className='absolute left-0 top-full z-[21] h-fit w-full bg-accent max-lg:ring-1 max-lg:ring-primary max-lg:ring-offset-1 max-lg:ring-offset-accent sm:p-6 lg:left-1/2 lg:top-[calc(4rem-3px)] lg:w-[30vw] lg:-translate-x-1/2 lg:border lg:bg-background lg:shadow-sm 2xl:w-full'>
          <CommandEmpty className='text-center text-sm'>
            Inga produkter hittades.
          </CommandEmpty>

          <CommandGroup
            className='first:[&>div]:p-0 first:[&>div]:font-bold'
            heading='Sökresultat'
          >
            {/* TODO: Map these from a fetch  MUST INCLUDE VALUE ON COMMANDITEM FOR LINKS TO WORK*/}

            <CommandItem value='test'>
              {/* REPLACE WITH A CARD THAT INCLUDES BOTH A IMAGE AND THE NAME AND THE CATEGORY WRAPPED BY A LINK */}
              <Link
                href='/'
                className='-ml-2 w-full rounded-md px-2 py-1.5 focus-visible:bg-accent focus-visible:text-primary'
              >
                Test
              </Link>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
};
Searchbar.displayName = 'Searchbar';
