import styled from "@emotion/styled";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px;
  gap: 30px;
`;

export const LoginWrapper = styled.div`
  position: relative;
  top: -150px;
  left: 40%;
  width: 400px;
  height: 500px;
  background-color: rgba(0, 123, 175, 1);
  border-radius: 0 0 8px 8px ;
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
`;

export const StepLoginContainer = styled.button`
  position: absolute;
  bottom: 100%;
  width: 50%;
  height: 30px;
  background-color: rgba(0, 123, 175, 1);
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
  background-color: rgba(213,105,0,1);
  border: 0;
  border-radius: 8px 8px 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RegisterWrapper = styled.div`
  position: relative;
  top: -150px;
  left: 40%;
  width: 400px;
  height: 500px;
  background-color: rgba(213,105,0, 1);
  border-radius: 0 0 8px 8px ;
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