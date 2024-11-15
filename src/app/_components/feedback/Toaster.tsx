'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/feedback';
import { useToast } from '@/hooks';

export const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className='grid gap-1'>
            {title && <ToastTitle>{title}</ToastTitle>}

            {description && <ToastDescription>{description}</ToastDescription>}
          </div>

          {action}

          <ToastClose />
        </Toast>
      ))}

      <ToastViewport />
    </ToastProvider>
  );
};
Toaster.displayName = 'Toaster';
