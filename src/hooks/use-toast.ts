'use client';

import { TOAST_LIMIT, TOAST_REMOVE_DELAY } from '@/constants';
import type { Action, State, Toast, ToasterToast } from '@/types';
import { useEffect, useState } from 'react';

let count: number = 0;

const genId = (): string => {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
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

/**
 * Reducer to handle the state of the toasts depending on what action has taken place.
 */
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

/**
 * Sends the current action to the reducer function,
 * and then sends the new state to the listeners.
 */
const dispatch = (action: Action): void => {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
};

/**
 * Main function to create the toast.
 */
export const toast = ({ ...props }: Toast) => {
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

/**
 * Handles the states for the toasts.
 */
export const useToast = () => {
  const [state, setState] = useState<State>(memoryState);

  useEffect(() => {
    listeners.push(setState);
    return () => {
      const i: number = listeners.indexOf(setState);
      if (i > -1) {
        listeners.splice(i, 1);
      }
    };
  }, [state]);

  return {
    ...state,
    toast,
    dismiss: (toastId?: string) => dispatch({ type: 'DISMISS_TOAST', toastId }),
  };
};
