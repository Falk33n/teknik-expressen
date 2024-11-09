import { AuthContainer, RegisterForm } from '@/app/(auth)/_components';

const Register = () => (
  <AuthContainer usedFor='register'>
    <RegisterForm />
  </AuthContainer>
);
Register.displayName = 'Register';
export default Register;
