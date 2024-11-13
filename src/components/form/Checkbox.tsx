import {
  Label,
  RadixCheckbox,
  RadixCheckboxIndicator,
  RxCheck,
} from '@/components';
import { cn } from '@/lib';
import type { ComponentProps, ReactNode } from 'react';

type CheckboxProps = ComponentProps<typeof RadixCheckbox>;

export const Checkbox = ({ className, ...props }: CheckboxProps) => (
  <RadixCheckbox
    className={cn(
      'peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      className,
    )}
    {...props}
  >
    <RadixCheckboxIndicator
      className={cn('flex items-center justify-center text-current')}
    >
      <RxCheck aria-hidden className='size-4' />
    </RadixCheckboxIndicator>
  </RadixCheckbox>
);
Checkbox.displayName = RadixCheckbox.displayName;

type CheckboxWithTextProps = CheckboxProps & {
  label: ReactNode;
  description?: ReactNode;
  className?: string;
};

export const CheckboxWithText = ({
  id,
  label,
  description,
  className,
  ...props
}: CheckboxWithTextProps) => (
  <div className={cn('flex items-center space-x-2', className)}>
    <Checkbox id={id} {...props} />

    <div className='grid gap-1.5 leading-none'>
      <Label htmlFor={id}>{label}</Label>

      {description && (
        <p className='text-sm text-muted-foreground'>{description}</p>
      )}
    </div>
  </div>
);
CheckboxWithText.displayName = 'CheckboxWithText';
