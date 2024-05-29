import styled from '@emotion/styled';

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 150px;
  height: 90%;
  font-size: 20px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: none;
  outline: none;
  background: ${({ disabled }) =>
        disabled ? '#DBDED5' : 'rgb(253, 106, 0, 0.8)'};
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  opacity: 0.6;
  transition: ease-out 0.2s;
  &:hover {
    opacity: 1;
    transition: ease-in 0.2s;
  }
`;
