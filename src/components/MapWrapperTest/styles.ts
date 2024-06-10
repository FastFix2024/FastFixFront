import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const SearchContainer = styled.div`
  position: relative;
  top: -140px;
  width: auto;
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
  background-color: #091e3f;
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
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-right: 0;
  }
  &:disabled {
    cursor: not-allowed;
  }

  svg {
    margin-right: 5px;
  }
`;

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserMarkerToggle = styled.button`
  padding: 8px 12px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  z-index: 1;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
`;

export const PlacesList = styled.div`
  position: absolute;
  top: -147px;
  left: 10%;
  width: 300px;
  height: 800px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`;

export const PlaceItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  cursor: pointer;
`;

export const PlacePhoto = styled.div`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  border-radius: 4px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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
  max-width: 150px;
  display: flex;
  align-items: center;

  svg {
    margin-right: 5px;
  }
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

export const MapWindowContainer = styled.div`
  position: relative;
`;

export const ReviewsContainer = styled.div`
  position: absolute;
  top: -147px;
  left: calc(10% + 320px);
  width: 300px;
  height: 800px;
  overflow-y: auto;
  background-color: #fff;
  z-index: 1;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 20px;
`;

export const ReviewItem = styled.div`
  margin-bottom: 20px;
`;

export const ReviewAuthor = styled.p`
  font-weight: bold;
  margin-bottom: 5px;
`;

export const ReviewRating = styled.p`
  margin-bottom: 5px;
`;

export const ReviewText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
`;
