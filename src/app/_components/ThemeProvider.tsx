import {
  ThemeProvider as Next_ThemeProvider,
  type ThemeProviderProps,
} from 'next-themes';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <Next_ThemeProvider {...props}>{children}</Next_ThemeProvider>
);
ThemeProvider.displayName = 'ThemeProvider';
