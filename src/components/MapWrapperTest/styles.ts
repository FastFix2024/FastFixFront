import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  top: -140px;
  width: 700px;
  z-index: 1;
  background-color: #fff;
  padding: 10px 20px;
  display: flex;
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

export const MapContainer = styled.div`
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

export const PlacesList = styled.div`
  position: absolute;
  top: 60px;
  left: 10px;
  width: 300px;
  height: calc(100vh - 120px);
  overflow-y: auto;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const PlaceItem = styled.div`
  display: flex;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

export const PlacePhoto = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 4px;
`;

export const PlaceItemContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PlaceName = styled.h3`
  margin: 0;
  font-size: 1rem;
`;

export const PlaceInfo = styled.p`
  margin: 5px 0;
  font-size: 0.9rem;
`;

export const RouteButton = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
`;

export const CloseResultsButtonContainer = styled.div`
  position: sticky;
  top: 0;
  background: white;
  padding: 10px;
  text-align: right;
`;

export const CloseResultsButton = styled.button`
  padding: 8px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
`;
