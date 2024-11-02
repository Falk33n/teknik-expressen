import type { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import type { ControllerRenderProps } from 'react-hook-form';

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
