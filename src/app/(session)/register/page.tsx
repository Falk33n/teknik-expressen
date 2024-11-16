import { SessionContainer } from '@/app/session/components';
import { RegisterForm } from '@/app/session/register/components';

const Register = () => (
  <SessionContainer usedFor='register'>
    <RegisterForm />
  </SessionContainer>
);
Register.displayName = 'Register';

export default Register;
