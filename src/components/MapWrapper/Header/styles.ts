import styled from '@emotion/styled';

export const SearchContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-right: 8px;
  width: 300px;
`;

export const Button = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-right: 8px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const ServiceButton = styled(Button)`
  background-color: #fff;
  color: #000;
  border: 1px solid #ccc;
  margin-right: 8px;
  &:last-of-type {
    margin-right: 0;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;
