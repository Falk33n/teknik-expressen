'use client';

import type { ToastActionElement, ToastProps } from '@/components/shadcn';
import { type ReactNode, useEffect, useState } from 'react';

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

type ToasterToast = ToastProps & {
  id: string;
  title?: ReactNode;
  description?: ReactNode;
  action?: ToastActionElement;
};

let count: number = 0;

const genId = (): string => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
};

type ActionType = Readonly<{
  ADD_TOAST: 'ADD_TOAST';
  UPDATE_TOAST: 'UPDATE_TOAST';
  DISMISS_TOAST: 'DISMISS_TOAST';
  REMOVE_TOAST: 'REMOVE_TOAST';
}>;

type Action =
  | {
      type: ActionType['ADD_TOAST'];
      toast: ToasterToast;
    }
  | {
      type: ActionType['UPDATE_TOAST'];
      toast: Partial<ToasterToast>;
    }
  | {
      type: ActionType['DISMISS_TOAST'];
      toastId?: ToasterToast['id'];
    }
  | {
      type: ActionType['REMOVE_TOAST'];
      toastId?: ToasterToast['id'];
    };

type State = {
  toasts: ToasterToast[];
};

const toastTimeouts = new Map<string, ReturnType<typeof setTimeout>>();

const addToRemoveQueue = (toastId: string): void => {
  if (toastTimeouts.has(toastId)) {
    return;
  } else {
    const timeout = setTimeout(() => {
      toastTimeouts.delete(toastId);
      dispatch({
        type: 'REMOVE_TOAST',
        toastId: toastId,
      });
    }, TOAST_REMOVE_DELAY);

    toastTimeouts.set(toastId, timeout);
  }
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_TOAST':
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
      };

    case 'UPDATE_TOAST':
      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === action.toast.id ? { ...t, ...action.toast } : t
        ),
      };

    case 'DISMISS_TOAST': {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast) => {
          addToRemoveQueue(toast.id);
        });
      }

      return {
        ...state,
        toasts: state.toasts.map((t) =>
          t.id === toastId || toastId === undefined
            ? {
                ...t,
                open: false,
              }
            : t
        ),
      };
    }
    case 'REMOVE_TOAST':
      if (action.toastId === undefined) {
        return {
          ...state,
          toasts: [],
        };
      } else {
        return {
          ...state,
          toasts: state.toasts.filter((t) => t.id !== action.toastId),
        };
      }
  }
};

const listeners: Array<(state: State) => void> = [];

let memoryState: State = { toasts: [] };

const dispatch = (action: Action): void => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

type Toast = Omit<ToasterToast, 'id'>;

type ToastReturnType = {
  id: string;
  dismiss: () => void;
  update: (props: ToasterToast) => void;
};

export const toast = ({ ...props }: Toast): ToastReturnType => {
  const id: string = genId();

  const update = (props: ToasterToast): void =>
    dispatch({
      type: 'UPDATE_TOAST',
      toast: { ...props, id },
    });

  const dismiss = (): void => dispatch({ type: 'DISMISS_TOAST', toastId: id });

  dispatch({
    type: 'ADD_TOAST',
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return {
    id: id,
    dismiss,
    update,
  };
};

type UseToastReturnType = {
  toast: ({ ...props }: Toast) => ToastReturnType;
  dismiss: (toastId?: string) => void;
  toasts: ToasterToast[];
};

export const useToast = (): UseToastReturnType => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const index: number = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
};
