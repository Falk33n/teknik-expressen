import type { PrismaClient } from '@prisma/client';
import type { DefaultArgs } from '@prisma/client/runtime/library';
import type { NextRequest } from 'next/server';
import type { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

export type CtxProps = {
  req: NextRequest;
  resHeaders: Headers;
  db: PrismaClient<
    {
      log: ('query' | 'warn' | 'error')[];
    },
    never,
    DefaultArgs
  >;
};

export type PasswordButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'aria-controls'
> & {
  ariaControls: string;
  isPasswordVisible: boolean;
};

export type PasswordInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'aria-controls'
> & {
  renderField?: ControllerRenderProps<
    | {
        email: string;
        password: string;
      }
    | {
        email: string;
        password: string;
        confirmPassword: string;
      },
    'email' | 'password' | 'confirmPassword'
  >;
  buttonAriaControls?: string;
};
