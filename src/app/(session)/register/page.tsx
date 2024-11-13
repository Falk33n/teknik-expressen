import { RegisterForm, SessionContainer } from '@/app/session/components';

const Register = () => (
  <SessionContainer usedFor='register'>
    <RegisterForm />
  </SessionContainer>
);
Register.displayName = 'Register';

export default Register;
