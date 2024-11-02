export type AuthenticationProps = {
  component: 'login' | 'register';
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
