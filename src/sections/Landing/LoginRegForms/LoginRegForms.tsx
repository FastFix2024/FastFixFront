import { useState } from "react";
import { LoginWrapper, StepLoginContainer, StepRegisterContainer, RegisterWrapper, UserContainer } from "./styles";
import Login from "../../../components/Login/Login";
import Register from "../../../components/Register/Register";
// import UserProfile from "../../../components/UserProfile/UserProfile";
import { useAppSelector } from "../../../store/hooks";
import { loginVisibilitySelectors } from "../../../store/redux/userAreaVisiblitySlice/userAreaVisiblitySlice";

const LoginRegForms = () => {
  const [signContent, setSignContent] = useState("login");
  const [userProfile, setUserProfile] = useState(false);

  const visibilityState = useAppSelector(loginVisibilitySelectors.loginVisibilityState);

  console.log("visibilityState", visibilityState);

  return (
    <>
      {visibilityState.isVisible && (
        <UserContainer>
          {signContent === "login" && (
            <LoginWrapper>
              <StepLoginContainer onClick={() => setSignContent("login")}>Login</StepLoginContainer>
              <StepRegisterContainer onClick={() => setSignContent("register")}>Register</StepRegisterContainer>
              <Login>
                <button onClick={() => setUserProfile(true)}>Login</button>
              </Login>
            </LoginWrapper>
          )}

          {signContent === "register" && (
            <RegisterWrapper>
              <StepLoginContainer onClick={() => setSignContent("login")}>Login</StepLoginContainer>
              <StepRegisterContainer onClick={() => setSignContent("register")}>Register</StepRegisterContainer>
              <Register />
              {/* <button onClick={() => setUserProfile(true)}>Register</button>
              </Register> */}
            </RegisterWrapper>
          )}

          {/* {userProfile === true && <UserProfile />} */}
        </UserContainer>
      )}
    </>
  );
};

export default LoginRegForms;
