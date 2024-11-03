/*
 * Used in Authentication folder in components
 */
export type AuthenticationProps = {
  component: 'login' | 'register';
};

export type AuthenticationFormProps = AuthenticationProps & {
  onAccountSubmit: (isAccountSubmitted: boolean) => void;
};

export type NavigationMenuCloseProps = {
  trigger: '.menu-trigger' | '.authentication-trigger' | '.searchbar-trigger';
};

export type AuthenticationFieldProps = {
  type: 'email' | 'password';
  name: 'email' | 'password' | 'confirmPassword';
  label: string;
  placeholder: string;
  description: string;
};
