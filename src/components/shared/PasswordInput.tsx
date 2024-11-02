'use client';

import { Input } from '@/components/shadcn';
import { PasswordButton } from '@/components/shared';
import type { PasswordInputProps } from '@/types';
import { forwardRef, useState } from 'react';

/**
 * Component that comes with a integrated fully accessible button to toggle the visibility of the password
 */
export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  (
    { id, type, autoComplete, placeholder, buttonAriaControls = '', ...props },
    ref
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const inputType = isPasswordVisible ? 'text' : type;

    return (
      <div className='relative'>
        <Input
          ref={ref}
          id={id}
          type={inputType}
          placeholder={placeholder}
          autoComplete={autoComplete}
          className='pr-12'
          {...props}
        />

        <PasswordButton
          isPasswordVisible={isPasswordVisible}
          onClick={() => setIsPasswordVisible((prev) => !prev)}
          ariaControls={buttonAriaControls}
          className='top-1/2 right-2 absolute -translate-y-1/2'
        />
      </div>
    );
  }
);

PasswordInput.displayName = 'PasswordInput';
