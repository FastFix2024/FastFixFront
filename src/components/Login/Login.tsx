import { LoginContent, LoginContainer, ButtonContainer } from "./styles"

const Login = ({children}: any) => {
  return (
    <LoginContent>
      <LoginContainer>
        <label>Email:</label>
        <input type="email" placeholder="Input your email" />

        <label>Password:</label>
        <input type="password" placeholder="Input your password" />
        <ButtonContainer>
          {children}
        </ButtonContainer>
      </LoginContainer>
    </LoginContent>
  )
}

export default Login
