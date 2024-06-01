import { DetailContainer, DetailImage, DetailInfo } from './styles';

function PlaceDetail({ placeDetails, calculateRoute }:any) {
  return (
    <DetailContainer>
      <h2>{placeDetails.name}</h2>
      {placeDetails.photos && placeDetails.photos.length > 0 && (
        <DetailImage src={placeDetails.photos[0].getUrl()} alt={placeDetails.name} />
      )}
      <DetailInfo>{placeDetails.formatted_address}</DetailInfo>
      {placeDetails.opening_hours && (
        <DetailInfo>Время работы: {placeDetails.opening_hours.weekday_text.join(', ')}</DetailInfo>
      )}
      <DetailInfo>{placeDetails.opening_hours.isOpen() ? 'Открыто' : 'Закрыто'}</DetailInfo>
      <DetailInfo>Рейтинг: {placeDetails.rating} звезд</DetailInfo>
      <button onClick={() => calculateRoute(placeDetails.geometry.location)}>Проложить маршрут</button>
    </DetailContainer>
  );
}

export default PlaceDetail;
