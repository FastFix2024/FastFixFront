import styled from '@emotion/styled';

interface ButtonComponentProps {
  disabled: boolean;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 150px;
  height: auto;
  font-size: 20px;
  font-weight: 500;
  backdrop-filter: blur(10px);
  border-radius: 10px;
  border: none;
  outline: none;
  background: ${({ disabled }) =>
        disabled ? '#DBDED5' : '#f59a31'};
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
