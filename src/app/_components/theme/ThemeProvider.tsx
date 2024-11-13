import {
  ThemeProvider as NextThemeProvider,
  type ThemeProviderProps,
} from 'next-themes';

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => (
  <NextThemeProvider {...props}>{children}</NextThemeProvider>
);
ThemeProvider.displayName = 'ThemeProvider';
