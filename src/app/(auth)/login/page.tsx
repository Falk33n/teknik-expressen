import { AuthContainer, LoginForm } from '@/app/(auth)/_components';

export default function Login() {
  return (
    <AuthContainer usedFor='login'>
      <LoginForm />
    </AuthContainer>
  );
}
