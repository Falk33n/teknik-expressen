import { SessionContainer } from '@/app/(session)/_components';
import { RegisterForm } from '@/app/(session)/register/_components';

const Register = () => (
  <SessionContainer usedFor='register'>
    <RegisterForm />
  </SessionContainer>
);
Register.displayName = 'Register';
export default Register;
