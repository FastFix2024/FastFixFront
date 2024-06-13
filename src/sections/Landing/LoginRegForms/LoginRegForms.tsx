import Login from 'components/Login/Login'
import Register from 'components/Register/Register'
import { useState, useEffect } from 'react'
import { useAppSelector } from 'store/hooks'
import { userAreaVisibilitySliceSelectors } from 'store/redux/userAreaVisiblitySlice/userAreaVisiblitySlice'
import { UserContainer, LoginWrapper, StepLoginContainer, StepRegisterContainer, RegisterWrapper } from './styles'


const LoginRegForms = () => {
  const [signContent, setSignContent] = useState("login");
  const visibilityState = useAppSelector(userAreaVisibilitySliceSelectors.loginVisibilityState);
  const [isVisible, setIsVisible] = useState(visibilityState.isVisible);

  useEffect(() => {
    if (visibilityState.isVisible) {
      setIsVisible(true);
    } else {
      setTimeout(() => setIsVisible(false), 500);
    }
  }, [visibilityState.isVisible]);

  return (
    <>
      {isVisible && (
        <UserContainer className={visibilityState.isVisible ? "slide-in" : "slide-out"}>
          {signContent === "login" && (
            <LoginWrapper>
              <StepLoginContainer onClick={() => setSignContent("login")}>Login</StepLoginContainer>
              <StepRegisterContainer onClick={() => setSignContent("register")}>Register</StepRegisterContainer>
              <Login />
            </LoginWrapper>
          )}

          {signContent === "register" && (
            <RegisterWrapper>
              <StepLoginContainer onClick={() => setSignContent("login")}>Login</StepLoginContainer>
              <StepRegisterContainer onClick={() => setSignContent("register")}>Register</StepRegisterContainer>
              <Register />
            </RegisterWrapper>
          )}
        </UserContainer>
      )}
    </>
  );
};

export default LoginRegForms;

