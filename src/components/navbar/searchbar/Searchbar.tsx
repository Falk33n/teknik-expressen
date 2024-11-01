'use client';

import { NavigationMenuClose } from '@/components/navbar/shared';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/shadcn';
import { useState } from 'react';

export const Searchbar = () => {
  const [inputHasValue, setInputHasValue] = useState(false);

  const handleValueChange = (val: string): void => {
    if ((!inputHasValue && val) || (inputHasValue && !val)) {
      setInputHasValue((prev) => !prev);
    }
  };

  return (
    <>
      <NavigationMenuClose trigger='.searchbar-trigger' />

      <Command className='px-4 sm:px-8 pt-3 sm:pt-6 pb-7 sm:pb-10 w-full'>
        <CommandInput
          className='text-sm sm:text-base'
          onValueChange={(val) => handleValueChange(val)}
          placeholder='Sök efter en produkt...'
        />

        <CommandList>
          <CommandEmpty className='pt-6 pb-0 text-center text-sm'>
            Inga produkter hittades.
          </CommandEmpty>

          <CommandGroup
            heading={inputHasValue ? 'Sökresultat' : 'Populära produkter'}
          >
            <CommandItem>Testing</CommandItem>
            <CommandItem>Rokomoko</CommandItem>
            <CommandItem>Testing</CommandItem>
          </CommandGroup>

          <CommandSeparator />
        </CommandList>
      </Command>
    </>
  );
};

Searchbar.displayName = 'Searchbar';
