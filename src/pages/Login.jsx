import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;
  grid-template-columns: 48rem;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);
`;

const TestedMail = styled.div`
  background-color: var(--color-blue-100);
  padding: 1rem;
  border-radius: 0.7rem;
`;

function Login() {
  return (
    <LoginLayout>
      <Logo />
      <Heading as="h4">Log in to your account</Heading>
      <LoginForm />
      <TestedMail>
        <p>You can testing with this mail:</p>
        <p>Email address: yalasa3655@gamintor.com</p>
        <p>password: hasan123</p>
      </TestedMail>
    </LoginLayout>
  );
}

export default Login;
