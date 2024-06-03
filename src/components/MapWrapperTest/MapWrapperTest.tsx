
import { useState, useRef, useEffect, useCallback } from 'react';
import {
  useJsApiLoader,
  GoogleMap,
  Marker,
  Autocomplete,
  DirectionsRenderer,
  InfoWindow,
} from '@react-google-maps/api';
import {
  SearchContainer,
  InputContainer,
  Input,
  Button,
  ButtonsContainer,
  ServiceButton,
  MapContainer,
  UserMarkerToggle,
  PlacesList,
  PlaceItem,
  PlacePhoto,
  PlaceItemContent,
  PlaceName,
  PlaceInfo,
  RouteButton,
  CloseResultsButtonContainer,
  CloseResultsButton
} from './styles';
import { Place } from './types';

const libraries = ["places"];

const MapWrapperTest: React.FC = () => {
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<Place | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [placeDetails, setPlaceDetails] = useState<google.maps.places.PlaceResult | null>(null);
  const [filter, setFilter] = useState({ minRating: 0, openNow: 'any' });
  const [showFilter, setShowFilter] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const searchRef = useRef<google.maps.places.Autocomplete>();
  const mapRef = useRef<google.maps.Map>();

  const defaultCenter = { lat: 43.2567, lng: 76.9286 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
    libraries: libraries,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => {
          console.error('Error getting geolocation', error);
          setUserLocation(defaultCenter);
        }
      );
    } else {
      console.warn('Geolocation not supported');
      setUserLocation(defaultCenter);
    }
  }, []);

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = undefined;
  }, []);

  const calculateRoute = async (destination: google.maps.LatLngLiteral) => {
    if (!userLocation || !destination) return;

    try {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: userLocation,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      if(!results.routes[0] && results.routes[0].legs[0]){
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text || '');
      setDuration(results.routes[0].legs[0].duration.text);
      }
    } catch (error) {
      console.error('Error calculating route:', error);
    }
  };

  const findNearestPlaces = async (type: string) => {
    if (!userLocation) return;

    const placesService = new google.maps.places.PlacesService(mapRef.current!);
    placesService.nearbySearch(
      {
        location: userLocation,
        radius: 5000,
        type: type,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const filteredResults = results.filter((place) => {
            const meetsRating = place.rating >= filter.minRating;
            const isOpenNow = filter.openNow === 'any' || place.opening_hours?.isOpen() === (filter.openNow === 'true');
            return meetsRating && isOpenNow;
          }) as Place[];
          setPlaces(filteredResults);
          setShowResults(true);
        } else {
          console.error('Error fetching places:', status);
        }
      }
    );
  };

  const getPlaceDetails = (placeId: string) => {
    const placesService = new google.maps.places.PlacesService(mapRef.current!);
    placesService.getDetails({ placeId }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setPlaceDetails(place);
      } else {
        console.error('Error fetching place details:', status);
      }
    });
  };

  const handleMarkerClick = (place: Place) => {
    setSelectedMarker(place);
    getPlaceDetails(place.place_id);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    setSelectedPlace(null);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handlePlaceSelect = (place: Place) => {
    setSelectedMarker(place);
    mapRef.current!.panTo(place.geometry.location);
    getPlaceDetails(place.place_id);
  };

  const handleSearchClick = () => {
    const place = searchRef.current!.getPlace();
    if (place.geometry) {
      setSelectedPlace(place);
      mapRef.current!.panTo(place.geometry.location);
    } else {
      console.warn('Selected place does not have geometry data');
    }
  };

  const handlePanToUserLocation = () => {
    if (userLocation) {
      mapRef.current!.panTo(userLocation);
      new window.google.maps.Marker({
        position: userLocation,
        map: mapRef.current!,
        title: 'Your Location',
      });
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <SearchContainer>
        <Autocomplete
          onLoad={(autocomplete) => (searchRef.current = autocomplete)}
          onPlaceChanged={handleSearchClick}
        >
          <InputContainer>
            <Input type="text" placeholder="Введите место" />
            <Button onClick={handleSearchClick}>🔍</Button>
            <Button onClick={() => { searchRef.current.value = ''; setSelectedPlace(null); clearRoute(); }}>X</Button>
          </InputContainer>
        </Autocomplete>
        <ButtonsContainer>
          <ServiceButton onClick={() => findNearestPlaces('car_repair')}>Автосервисы</ServiceButton>
          <ServiceButton onClick={() => findNearestPlaces('gas_station')}>АЗС</ServiceButton>
          <ServiceButton disabled>Фильтры</ServiceButton>
        </ButtonsContainer>
      </SearchContainer>
      <MapContainer>
        <GoogleMap
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={userLocation || defaultCenter}
          zoom={14}
          mapContainerStyle={{ width: '80%', height: '95%', borderRadius: '20px' }}
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
              icon={{
                url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png',
              }}
            />
          )}
          {places.map((place, idx) => (
            <Marker
              key={idx}
              position={place.geometry.location}
              onClick={() => handleMarkerClick(place)}
            />
          ))}
          {selectedMarker && placeDetails && (
            <InfoWindow
              position={selectedMarker.geometry.location}
              onCloseClick={() => setSelectedMarker(null)}
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
        <UserMarkerToggle onClick={handlePanToUserLocation}>Мое местоположение</UserMarkerToggle>
      </MapContainer>
      {showResults && (
        <PlacesList>
          <CloseResultsButtonContainer>
            <CloseResultsButton onClick={() => setShowResults(false)}>Закрыть</CloseResultsButton>
          </CloseResultsButtonContainer>
          {places.map((place, idx) => (
            <PlaceItem key={idx} onClick={() => handlePlaceSelect(place)}>
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
      )}
    </>
  );
}

export default MapWrapperTest;
