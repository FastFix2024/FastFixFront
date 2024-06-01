import { PlacesList, PlaceItem, PlacePhoto, PlaceItemContent, PlaceName, PlaceInfo, RouteButton, CloseResultsButtonContainer, CloseResultsButton } from './styles';
import { ListTypes } from './types'

function List({ places, onSelectPlace, onClose, calculateRoute }: ListTypes) {
  return (
    <PlacesList>
      <CloseResultsButtonContainer>
        <CloseResultsButton onClick={onClose}>Закрыть</CloseResultsButton>
      </CloseResultsButtonContainer>
      {places.map(({place, idx}: any) => (
        <PlaceItem key={idx} onClick={() => onSelectPlace(place)}>
          <PlacePhoto src={place.photos ? place.photos[0].getUrl() : 'placeholder.png'} alt={place.name} />
          <PlaceItemContent>
            <PlaceName>{place.name}</PlaceName>
            <PlaceInfo>{place.vicinity}</PlaceInfo>
            <PlaceInfo>Рейтинг: {place.rating} ({place.user_ratings_total} отзывов)</PlaceInfo>
            <PlaceInfo>{place.opening_hours?.isOpen() ? 'Открыто' : 'Закрыто'}</PlaceInfo>
            {place.formatted_phone_number && <PlaceInfo>Телефон: {place.formatted_phone_number}</PlaceInfo>}
            {place.website && <a href={place.website} target="_blank" rel="noopener noreferrer">Сайт</a>}
            <RouteButton onClick={() => calculateRoute(place.geometry.location)}>Проложить маршрут</RouteButton>
          </PlaceItemContent>
        </PlaceItem>
      ))}
    </PlacesList>
  );
}

export default List;
