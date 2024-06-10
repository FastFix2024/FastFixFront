import { useState, useRef, useEffect, useCallback } from "react";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer, InfoWindow, Libraries } from "@react-google-maps/api";
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
  CloseResultsButton,
  Container,
  MapWindowContainer,
} from "./styles";
import { Place, PlaceResultWithGeometry } from "./types";

const libraries = ["places"] as Libraries;

const MapWrapperTest: React.FC = () => {
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<Place | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [placeDetails, setPlaceDetails] = useState<google.maps.places.PlaceResult | null>(null);
  const [filter, setFilter] = useState({ minRating: 0, openNow: "any" });
  const [showFilter, setShowFilter] = useState(false);
  const [showResults, setShowResults] = useState(false);
  
  console.log('userLocation GOOGLE', userLocation)
  const searchRef = useRef<google.maps.places.Autocomplete>();
  const mapRef = useRef<google.maps.Map>();

  const defaultCenter = { lat: 52.50796391454193, lng: 13.375055429296202 };
  
  
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
          console.error("Error getting geolocation", error);
          setUserLocation(defaultCenter);
        }
      );
    } else {
      console.warn("Geolocation not supported");
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

      if (results.routes[0] && results.routes[0].legs[0]) {
        setDirectionsResponse(results);
        setDistance(results.routes[0].legs[0].distance?.text || "");
        setDuration(results.routes[0].legs[0].duration?.text || "");
      }
    } catch (error) {
      console.error("Error calculating route:", error);
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
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const filteredResults = results.filter((place): place is PlaceResultWithGeometry => {
            const meetsRating = place.rating && place.rating >= filter.minRating;
            const isOpenNow = filter.openNow === "any" || place.opening_hours?.isOpen() === (filter.openNow === "true");
            return !!meetsRating && isOpenNow && location !== undefined;
          });

          const places = filteredResults.map((place) => {
            const location = place.geometry.location as google.maps.LatLng;
            const latLngLiteral: google.maps.LatLngLiteral = {
              lat: location.lat(),
              lng: location.lng(),
            };

            return {
              place_id: place.place_id || "",
              name: place.name || "No Name",
              geometry: {
                location: latLngLiteral,
              },
              photos: place.photos || [],
              formatted_address: place.formatted_address || "No Address",
              vicinity: place.vicinity || "No Vicinity",
              rating: place.rating || 0,
              user_ratings_total: place.user_ratings_total || 0,
              opening_hours: place.opening_hours,
              formatted_phone_number: place.formatted_phone_number || "No Phone",
              website: place.website || "No Website",
              map: () => {},
            } as Place;
          });

          setPlaces(places);
          setShowResults(true);
        } else {
          console.error("Error fetching places:", status);
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
        console.error("Error fetching place details:", status);
      }
    });
  };

  const handleMarkerClick = (place: Place) => {
    setSelectedMarker(place);
    getPlaceDetails(place.place_id);
  };

  const clearRoute = () => {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
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
      if (place.geometry.location) {
        mapRef.current!.panTo(place.geometry.location)
      }
    } else {
      console.warn("Selected place does not have geometry data");
    }
  };

  const handlePanToUserLocation = () => {
    if (userLocation) {
      mapRef.current!.panTo(userLocation);
      new window.google.maps.Marker({
        position: userLocation,
        map: mapRef.current!,
        title: "Your Location",
        icon: {
          url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <MapWindowContainer>
      <Container>
        <SearchContainer id="section-map">
          <Autocomplete onLoad={(autocomplete) => (searchRef.current = autocomplete)} onPlaceChanged={handleSearchClick}>
            <InputContainer>
              <Input type="text" placeholder="Введите место" />
              {/* <Button onClick={handleSearchClick}>🔍</Button> */}
              <Button
                onClick={() => {
                  setSelectedPlace(null);
                  clearRoute();
                }}
              >
                ✕
              </Button>
            </InputContainer>
          </Autocomplete>
          <ButtonsContainer>
            <ServiceButton onClick={() => findNearestPlaces("car_repair")}>Mechanic</ServiceButton>
            <ServiceButton onClick={() => findNearestPlaces("gas_station")}>Gas Station</ServiceButton>
            <ServiceButton onClick={() => findNearestPlaces("waschanlage")}>Car wash</ServiceButton>
            <ServiceButton onClick={() => findNearestPlaces("parking")}>Parking</ServiceButton>
            <ServiceButton onClick={() => findNearestPlaces("restaurant")}>Food Point</ServiceButton>
            <UserMarkerToggle onClick={handlePanToUserLocation}>Мое местоположение</UserMarkerToggle>
          </ButtonsContainer>
        </SearchContainer>
      </Container>
      <MapContainer>
        <GoogleMap
          onLoad={onLoad}
          onUnmount={onUnmount}
          center={userLocation || defaultCenter}
          zoom={14}
          mapContainerStyle={{ width: "80%", height: "800px", position: "relative", top: "-200px", borderRadius: "20px" }}
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
                url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              }}
            />
          )}
          {places.map((place, idx) => (
            <Marker key={idx} position={place.geometry.location} onClick={() => handleMarkerClick(place)} />
          ))}
          {selectedMarker && placeDetails && (
            <InfoWindow position={selectedMarker.geometry.location} onCloseClick={() => setSelectedMarker(null)}>
              <div>
                <h2>{placeDetails.name}</h2>
                {placeDetails.photos && placeDetails.photos.length > 0 && (
                  <img
                    src={placeDetails.photos[0].getUrl()}
                    alt={placeDetails.name}
                    style={{ width: "200px", height: "200px", objectFit: "cover" }}
                  />
                )}
                <p>{placeDetails.formatted_address}</p>
                {placeDetails.opening_hours && (
                  <div>
                    <p>Opening hours: {placeDetails.opening_hours.weekday_text?.join(", ")}</p>
                    <p>{placeDetails.opening_hours.isOpen() ? "Открыто" : "Закрыто"}</p>
                  </div>
                )}
                <p>Rating: {placeDetails.rating} звезд</p>
                <button onClick={() => {
                  if (placeDetails?.geometry?.location 
                  
                ){calculateRoute(placeDetails.geometry.location)}}}>Show route</button>
              </div>
            </InfoWindow>
          )}
          {directionsResponse && <DirectionsRenderer directions={directionsResponse} />}
        </GoogleMap>
      </MapContainer>
      {showResults && (
        <PlacesList>
          <CloseResultsButtonContainer>
            <CloseResultsButton onClick={() => setShowResults(false)}>Закрыть</CloseResultsButton>
          </CloseResultsButtonContainer>
          {places.map((place, idx) => (
            <PlaceItem key={idx} onClick={() => handlePlaceSelect(place)}>
              <PlacePhoto src={place.photos && place.photos.length > 0 ? place.photos[0].getUrl() : "placeholder.png"} alt={place.name} />
              <PlaceItemContent>
                <PlaceName>{place.name}</PlaceName>
                <PlaceInfo>{place.vicinity}</PlaceInfo>
                <PlaceInfo>
                  Рейтинг: {place.rating} ({place.user_ratings_total} отзывов)
                </PlaceInfo>
                <RouteButton onClick={() => calculateRoute(place.geometry.location)}>Show route</RouteButton>
              </PlaceItemContent>
            </PlaceItem>
          ))}
        </PlacesList>
      )}
    </MapWindowContainer>
  );
};

export default MapWrapperTest;
