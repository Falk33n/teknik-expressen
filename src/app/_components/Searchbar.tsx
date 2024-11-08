'use client';

import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components';
import { cn } from '@/lib';
import { type FocusEvent, useState } from 'react';

const searchbarStates = {
  hasValue: false,
  hasFocus: false,
};

export const Searchbar = () => {
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
        'relative min-w-[100px] flex-1 border focus-within:ring-1 focus-within:ring-primary sm:max-w-[500px] lg:max-w-[400px]',
        searchbar.hasFocus && searchbar.hasValue && 'rounded-b-none',
      )}
      onBlur={(e) => handleBlur(e)}
    >
      <CommandInput
        className='py-4 text-sm sm:py-5'
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
        <CommandList className='absolute left-0 top-full z-[21] h-fit w-full bg-accent ring-1 ring-primary sm:p-6'>
          <CommandEmpty className='text-center text-sm'>
            Inga produkter hittades.
          </CommandEmpty>

          <CommandGroup heading='Sökresultat'>
            {/* TODO: Map these from a fetch */}

            <CommandItem>Testing</CommandItem>

            <CommandItem>Rokomoko</CommandItem>

            <CommandItem>Testing</CommandItem>

            <CommandItem>Testing</CommandItem>

            <CommandItem>Testing</CommandItem>

            <CommandItem>Testing</CommandItem>

            <CommandItem>Testing</CommandItem>

            <CommandItem>Testing</CommandItem>

            <CommandItem>Testing</CommandItem>

            <CommandItem>Testing</CommandItem>
          </CommandGroup>
        </CommandList>
      )}
    </Command>
  );
};
Searchbar.displayName = 'Searchbar';
