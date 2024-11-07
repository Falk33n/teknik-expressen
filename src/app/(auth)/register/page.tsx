import { AuthContainer, RegisterForm } from '@/app/(auth)/_components';

export default function Register() {
  return (
    <AuthContainer usedFor='register'>
      <RegisterForm />
    </AuthContainer>
  );
}
