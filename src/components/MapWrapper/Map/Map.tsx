import { GoogleMap, Marker, InfoWindow, DirectionsRenderer } from '@react-google-maps/api';
import { MapContainer, UserMarkerToggle } from './styles';

function Map({ userLocation, defaultCenter, places, selectedMarker, placeDetails, directionsResponse, onMarkerClick, onMapLoad, onMapUnmount, onPanToUserLocation }:any) {
  
  return (
    <MapContainer>
      <GoogleMap
        onLoad={onMapLoad}
        onUnmount={onMapUnmount}
        center={userLocation || defaultCenter}
        zoom={14}
        mapContainerStyle={{ width: '60%', height: '100%', borderRadius: '20px' }}
        options={{
          streetViewControl: true,
          zoomControl: false,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
      >
        {userLocation && (
          <Marker
            position={userLocation}
          />
        )}
        {places.map(({place, idx}: any) => (
          <Marker
            key={idx}
            position={place.geometry.location}
            onClick={() => onMarkerClick(place)}
          />
        ))}
        {selectedMarker && placeDetails && (
          <InfoWindow
            position={selectedMarker.geometry.location}
            onCloseClick={() => onMarkerClick(null)}
          >
            <div>
              <h2>{placeDetails.name}</h2>
              {placeDetails.photos && placeDetails.photos.length > 0 && (
                <img src={placeDetails.photos[0].getUrl()} alt={placeDetails.name} style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
              )}
              <p>{placeDetails.formatted_address}</p>
              {placeDetails.opening_hours && (
                <div>
                  <p>Время работы: {placeDetails.opening_hours.weekday_text.join(', ')}</p>
                  <p>{placeDetails.opening_hours.isOpen() ? 'Открыто' : 'Закрыто'}</p>
                </div>
              )}
              <p>Рейтинг: {placeDetails.rating} звезд</p>
              <button onClick={() => calculateRoute(placeDetails.geometry.location)}>Проложить маршрут</button>
            </div>
          </InfoWindow>
        )}
        {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
      </GoogleMap>
      <UserMarkerToggle onClick={onPanToUserLocation}>Мое местоположение</UserMarkerToggle>
    </MapContainer>
  );
}

export default Map;
