import { useState, useRef, useEffect, useCallback } from 'react';
import {
  useJsApiLoader,
} from '@react-google-maps/api';
import Header from "./Header/Header"
import Map from './Map/Map';
import List from './List/List';
import PlaceDetail from './PlaceDetail/PlaceDetail';
import DirectionRoute from './DirectionRoute/DirectionRoute';

function MapWrapper() {
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState('');
  const [duration, setDuration] = useState('');
  const [userLocation, setUserLocation] = useState(null);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [places, setPlaces] = useState([]);
  const [placeDetails, setPlaceDetails] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const searchRef = useRef();
  const mapRef = useRef();

  const defaultCenter = { lat: 43.2567, lng: 76.9286 };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API,
    libraries: ['places'],
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

  const onLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    mapRef.current = null;
  }, []);

  const calculateRoute = async (destination) => {
    if (!userLocation || !destination) return;

    try {
      const directionsService = new google.maps.DirectionsService();
      const results = await directionsService.route({
        origin: userLocation,
        destination: destination,
        travelMode: google.maps.TravelMode.DRIVING,
      });
      setDirectionsResponse(results);
      setDistance(results.routes[0].legs[0].distance.text);
      setDuration(results.routes[0].legs[0].duration.text);
    } catch (error) {
      console.error('Error calculating route:', error);
    }
  };

  const findNearestPlaces = async (type) => {
    if (!userLocation) return;

    const placesService = new google.maps.places.PlacesService(mapRef.current);
    placesService.nearbySearch(
      {
        location: userLocation,
        radius: 5000,
        type: type,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const filteredResults = results.filter((place) => {
            const meetsRating = place.rating >= 0; // убрали фильтр
            const isOpenNow = true; // убрали фильтр
            return meetsRating && isOpenNow;
          });
          setPlaces(filteredResults);
          setShowResults(true);
        } else {
          console.error('Error fetching places:', status);
        }
      }
    );
  };

  const getPlaceDetails = (placeId) => {
    const placesService = new google.maps.places.PlacesService(mapRef.current);
    placesService.getDetails({ placeId }, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        setPlaceDetails(place);
      } else {
        console.error('Error fetching place details:', status);
      }
    });
  };

  const handleMarkerClick = (place) => {
    setSelectedMarker(place);
    getPlaceDetails(place.place_id);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance('');
    setDuration('');
    setSelectedPlace(null);
  };

  const handlePlaceSelect = (place) => {
    setSelectedMarker(place);
    mapRef.current.panTo(place.geometry.location);
    getPlaceDetails(place.place_id);
  };

  const handleSearchClick = () => {
    const place = searchRef.current.getPlace();
    if (place.geometry) {
      setSelectedPlace(place);
      mapRef.current.panTo(place.geometry.location);
    } else {
      console.warn('Selected place does not have geometry data');
    }
  };

  const handlePanToUserLocation = () => {
    if (userLocation) {
      mapRef.current.panTo(userLocation);
      new window.google.maps.Marker({
        position: userLocation,
        map: mapRef.current,
        title: 'Your Location',
      });
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <>
      <Header
        onPlaceChanged={handleSearchClick}
        onClearSearch={() => { searchRef.current.value = ''; setSelectedPlace(null); clearRoute(); }}
        onFindCarRepair={() => findNearestPlaces('car_repair')}
        onFindGasStations={() => findNearestPlaces('gas_station')}
      />
      <Map
        userLocation={userLocation}
        defaultCenter={defaultCenter}
        places={places}
        selectedMarker={selectedMarker}
        placeDetails={placeDetails}
        directionsResponse={directionsResponse}
        onMarkerClick={handleMarkerClick}
        onMapLoad={onLoad}
        onMapUnmount={onUnmount}
        onPanToUserLocation={handlePanToUserLocation}
      />
      {selectedPlace && (
        <PlaceDetail
          placeDetails={placeDetails}
          calculateRoute={calculateRoute}
        />
      )}
      {directionsResponse && (
        <DirectionRoute
          directionsResponse={directionsResponse}
          distance={distance}
          duration={duration}
          clearRoute={clearRoute}
        />
      )}
      {showResults && (
        <List
          places={places}
          onSelectPlace={handlePlaceSelect}
          onClose={() => setShowResults(false)}
          calculateRoute={calculateRoute}
        />
      )}
    </>
  );
}

export default MapWrapper;
