import styled from "@emotion/styled";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
  position: absolute;
  right: -450px;

  &.slide-in {
    animation: slide-in 0.5s forwards;
  }

  &.slide-out {
    animation: slide-out 0.5s forwards;
  }

  @keyframes slide-in {
    from {
      right: -450px;
    }
    to {
      right: 0;
    }
  }

  @keyframes slide-out {
    from {
      right: 0;
    }
    to {
      right: -450px;
    }
  }
`;

export const LoginWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  background-color: rgba(61, 121, 155, 1);
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StepLoginContainer = styled.button`
  position: absolute;
  bottom: 100%;
  width: 50%;
  height: 30px;
  background-color: rgba(61, 121, 155, 1);
  border: 0;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StepRegisterContainer = styled.button`
  position: absolute;
  bottom: 100%;
  width: 50%;
  height: 30px;
  right: 0;
  background-color: rgba(213, 105, 0, 1);
  border: 0;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterWrapper = styled.div`
  position: relative;
  width: 400px;
  height: 500px;
  background-color: rgba(213, 105, 0, 1);
  border-radius: 0 0 8px 8px;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const MenuLogInButton = styled.button`
  width: 150px;
  height: 30px;
  border: 0;
  background-color: orange;
  border-radius: 8px;
`;
