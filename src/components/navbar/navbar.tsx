import { Topbar } from '@/components/navbar';
import { ThemeToggle } from '@/components/theme';

export const Navbar = () => {
  return (
    <header>
      <Topbar />
      <nav></nav>
      <ThemeToggle />
    </header>
  );
};

Navbar.displayName = 'Navbar';
