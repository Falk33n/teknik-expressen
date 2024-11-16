import { SessionContainer } from '@/app/session/components';
import { LoginForm } from '@/app/session/login/components';

const Login = () => (
  <SessionContainer usedFor='login'>
    <LoginForm />
  </SessionContainer>
);
Login.displayName = 'Login';

export default Login;
