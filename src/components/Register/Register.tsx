import { ButtonContainer, RegisterContainer, RegisterContent } from "./styles"

const Register = ({children}: any) => {
  return (
    <RegisterContent>
      <RegisterContainer>
        <label>Username:</label>
        <input type="text" placeholder="Input your username" />

        <label>Email:</label>
        <input type="email" placeholder="Input your email" />

        <label>Password:</label>
        <input type="password" placeholder="Input your password" />

        <label>Repeat password:</label>
        <input type="password" placeholder="Repeat your password" />
        <ButtonContainer>
          {children}
        </ButtonContainer>
      </RegisterContainer>
    </RegisterContent>
  )
}

export default Register
