import { ThemeToggle } from '@/components/theme';

export const Navbar = () => {
  return (
    <header>
      <nav></nav>
      <ThemeToggle />
    </header>
  );
};

Navbar.displayName = 'Navbar';
