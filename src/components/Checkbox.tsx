import { Label } from '@/components';
import { cn } from '@/lib';
import {
  Checkbox as Radix_Checkbox,
  CheckboxIndicator as Radix_CheckboxIndicator,
} from '@radix-ui/react-checkbox';
import {
  type ComponentPropsWithoutRef,
  type ElementRef,
  forwardRef,
  type ReactNode,
} from 'react';
import { RxCheck } from 'react-icons/rx';

type CheckboxElement = ElementRef<typeof Radix_Checkbox>;
type CheckboxProps = ComponentPropsWithoutRef<typeof Radix_Checkbox>;

export const Checkbox = forwardRef<CheckboxElement, CheckboxProps>(
  ({ className, ...props }, ref) => (
    <Radix_Checkbox
      ref={ref}
      className={cn(
        'peer size-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
        className,
      )}
      {...props}
    >
      <Radix_CheckboxIndicator
        className={cn('flex items-center justify-center text-current')}
      >
        <RxCheck aria-hidden className='size-4' />
      </Radix_CheckboxIndicator>
    </Radix_Checkbox>
  ),
);
Checkbox.displayName = Radix_Checkbox.displayName;

type CheckboxWithTextProps = CheckboxProps & {
  label: ReactNode;
  description?: ReactNode;
  className?: string;
};

export const CheckboxWithText = forwardRef<
  CheckboxElement,
  CheckboxWithTextProps
>(({ id, label, description, className, ...props }, ref) => (
  <div className={cn('flex items-center space-x-2', className)}>
    <Checkbox ref={ref} id={id} {...props} />

    <div className='grid gap-1.5 leading-none'>
      <Label htmlFor={id}>{label}</Label>

      {description && (
        <p className='text-sm text-muted-foreground'>{description}</p>
      )}
    </div>
  </div>
));
CheckboxWithText.displayName = 'CheckboxWithText';
