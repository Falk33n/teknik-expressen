import { SessionContainer } from '@/app/(session)/_components';
import { LoginForm } from '@/app/(session)/login/_components';

const Login = () => (
  <SessionContainer usedFor='login'>
    <LoginForm />
  </SessionContainer>
);
Login.displayName = 'Login';
export default Login;
