import { LoginForm, SessionContainer } from '@/app/session/components';

const Login = () => (
  <SessionContainer usedFor='login'>
    <LoginForm />
  </SessionContainer>
);
Login.displayName = 'Login';

export default Login;
