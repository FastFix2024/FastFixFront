import styled from '@emotion/styled';

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
