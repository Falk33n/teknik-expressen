import { AuthContainer, LoginForm } from '@/app/(auth)/_components';

const Login = () => (
  <AuthContainer usedFor='login'>
    <LoginForm />
  </AuthContainer>
);
Login.displayName = 'Login';

export default Login;
