import styled from '@emotion/styled';

export const MapContainer = styled.div` //map size adjustment
  /* width: 80%; */
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserMarkerToggle = styled.button`
  position: absolute;
  bottom: 10px;
  right: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  z-index: 1;
`;
