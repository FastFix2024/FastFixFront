import { useState } from "react"
import {
  LoginWrapper,
  StepLoginContainer,
  StepRegisterContainer,
  RegisterWrapper,
  UserContainer,
  MenuLogInButton
} from "./styles"
import Login from "../Login/Login"
import Register from "../Register/Register"
import UserProfile from "../UserProfile/UserProfile"

const UserSection = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [signContent, setSignContent] = useState("login");
  const [userProfile, setUserProfile] = useState(false);

  return (
    <>
    <MenuLogInButton onClick={() => setShowLogin(!showLogin)}>Log in</MenuLogInButton>
      {showLogin === true && (
        <UserContainer>
          {signContent === "login" && (
            <LoginWrapper>
              <StepLoginContainer onClick={() => setSignContent("login")}>
                Login
              </StepLoginContainer>
              <StepRegisterContainer onClick={() => setSignContent("register")}>
                Register
              </StepRegisterContainer>
              <Login>
                <button onClick={() => setUserProfile(true)}>Login</button>
              </Login>
            </LoginWrapper>
          )}

          {signContent === "register" && (
            <RegisterWrapper>
              <StepLoginContainer onClick={() => setSignContent("login")}>
                Login
              </StepLoginContainer>
              <StepRegisterContainer onClick={() => setSignContent("register")}>
                Register
              </StepRegisterContainer>
              <Register>
                <button onClick={() => setUserProfile(true)}>Register</button>
              </Register>
            </RegisterWrapper>
          )}

          {userProfile === true && (
            <UserProfile />
          )}
        
        </UserContainer>
      )}
    </>
  )
}

export default UserSection;
