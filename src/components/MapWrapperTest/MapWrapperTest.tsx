import { useState, useRef, useEffect, useCallback } from "react";
import { useJsApiLoader, GoogleMap, Marker, Autocomplete, DirectionsRenderer, InfoWindow, Libraries } from "@react-google-maps/api";
import { MdSearch, MdClose, MdLocationOn, MdBuild, MdLocalGasStation, MdLocalCarWash, MdLocalParking, MdRestaurant, MdStar, MdDirections, MdComment, MdPlace } from "react-icons/md";
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
  ReviewsContainer,
  ReviewItem,
  ReviewAuthor,
  ReviewText,
  ReviewRating,
  CloseButton,
  ServiceInfoWrapper,
} from "./styles";
import { Place, PlaceResultWithGeometry } from "./types";

const libraries = ["places"] as Libraries;

const getDefaultIcon = (type: string) => {
  switch (type) {
    case 'restaurant':
      return <MdRestaurant style={{ width: "100px", height: "100px" }} />;
    case 'gas_station':
      return <MdLocalGasStation style={{ width: "100px", height: "100px" }} />;
    case 'car_wash':
      return <MdLocalCarWash style={{ width: "100px", height: "100px" }} />;
    case 'parking':
      return <MdLocalParking style={{ width: "100px", height: "100px" }} />;
    case 'car_repair':
      return <MdBuild style={{ width: "100px", height: "100px" }} />;
    default:
      return <MdPlace style={{ width: "100px", height: "100px" }} />;
  }
};

const MapWrapperTest: React.FC = () => {
  const [directionsResponse, setDirectionsResponse] = useState<google.maps.DirectionsResult | null>(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  const [userLocation, setUserLocation] = useState<google.maps.LatLngLiteral | null>(null);
  const [selectedPlace, setSelectedPlace] = useState<google.maps.places.PlaceResult | null>(null);
  const [selectedMarker, setSelectedMarker] = useState<Place | null>(null);
  const [places, setPlaces] = useState<Place[]>([]);
  const [placeDetails, setPlaceDetails] = useState<google.maps.places.PlaceResult | null>(null);
  const [filter, setFilter] = useState({ minRating: 3.7, openNow: "any" });
  const [showFilter, setShowFilter] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const [reviews, setReviews] = useState<google.maps.places.PlaceReview[]>([]);

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
        type: type === 'waschanlage' ? 'car_wash' : type,
      },
      (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          const filteredResults = results.filter((place): place is PlaceResultWithGeometry => {
            const meetsRating = place.rating && place.rating >= filter.minRating;
            const isOpenNow = filter.openNow === "any" || place.opening_hours?.isOpen() === (filter.openNow === "true");
            return !!meetsRating && isOpenNow && place.geometry?.location;
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

          console.log('Fetched places:', places); // Debugging line

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
        setReviews(place?.reviews || []);
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

  // const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   setFilter({ ...filter, [e.target.name]: e.target.value });
  // };

  // const toggleFilter = () => {
  //   setShowFilter(!showFilter);
  // };

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
          url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png"
        }
      });
    }
  };

  if (!isLoaded) return <div>Loading...</div>;

  return (
    <MapWindowContainer>
      <Container>
        <SearchContainer id="section-map">

          <ButtonsContainer>
            <ServiceButton onClick={() => findNearestPlaces("car_repair")}><MdBuild /> Mechanic</ServiceButton>
            <ServiceButton onClick={() => findNearestPlaces("gas_station")}><MdLocalGasStation /> Gas Station</ServiceButton>
            <ServiceButton onClick={() => findNearestPlaces("car_wash")}><MdLocalCarWash /> Car wash</ServiceButton>
            <ServiceButton onClick={() => findNearestPlaces("parking")}><MdLocalParking /> Parking</ServiceButton>
            <ServiceButton onClick={() => findNearestPlaces("restaurant")}><MdRestaurant /> Food Point</ServiceButton>
            <UserMarkerToggle onClick={handlePanToUserLocation}><MdLocationOn /> Мое местоположение</UserMarkerToggle>
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
                url: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
              }}
            />
          )}
          {places.map((place, idx) => (
            <Marker key={idx} position={place.geometry.location} onClick={() => handleMarkerClick(place)} />
          ))}
          {selectedMarker && placeDetails && (
            <InfoWindow position={selectedMarker.geometry.location} onCloseClick={() => setSelectedMarker(null)}>
              <ServiceInfoWrapper>
                <h2>{placeDetails.name}</h2>
                {placeDetails.photos && placeDetails.photos.length > 0 ? (
                  <img
                    src={placeDetails.photos[0].getUrl()}
                    alt={placeDetails.name}
                    style={{ width: "500px", height: "250px", objectFit: "cover" }}
                  />
                ) : (
                  getDefaultIcon(placeDetails.types ? placeDetails.types[0] : "")
                )}
                <p><MdLocationOn /> {placeDetails.formatted_address}</p>
                {placeDetails.opening_hours && (
                  <ServiceInfoWrapper>
                    <ServiceInfoWrapper>Opening hours: <br/>{placeDetails.opening_hours.weekday_text?.join('<br/>')}</ServiceInfoWrapper>
                    <p>{placeDetails.opening_hours.isOpen() ? "Open" : "Closed"}</p>
                  </ServiceInfoWrapper>
                )}
                <p>Rating: {Array.from({ length: Math.round(placeDetails.rating) }, (_, i) => <MdStar key={i} style={{ color: "#f59a31" }} />)} {placeDetails.rating} звезд</p>
                <p>Телефон: {placeDetails.formatted_phone_number || "Не указан"}</p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <a href={placeDetails.website} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none", color: "#091e3f", fontWeight: "bold" }}>
                    Website
                  </a>
                  <button onClick={() => {
                    if (placeDetails?.geometry?.location) {
                      calculateRoute(placeDetails.geometry.location)
                    }
                  }}><MdDirections /> Show route</button>
                  <button onClick={() => setShowReviews(true)}><MdComment /> Отзывы</button>
                </div>
              </ServiceInfoWrapper>
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
              <PlaceItemContent>
                <PlaceName>{place.name}</PlaceName>
                <PlaceInfo><MdLocationOn /> {place.vicinity}</PlaceInfo>
                <PlaceInfo>
                  Rating: {place.rating} {Array.from({ length: Math.round(place.rating) }, (_, i) => <MdStar key={i} style={{ color: "#f59a31" }} />)}  <br/>({place.user_ratings_total} reviews)
                </PlaceInfo>
                <RouteButton onClick={() => calculateRoute(place.geometry.location)}>Show route</RouteButton>
              </PlaceItemContent>
              <PlacePhoto>
                {place.photos && place.photos.length > 0 ? (
                  <img src={place.photos[0].getUrl()} alt={place.name} />
                ) : (
                  getDefaultIcon(place.types ? place.types[0] : "")
                )}
              </PlacePhoto>
            </PlaceItem>
          ))}
        </PlacesList>
      )}
      {showReviews && (
        <ReviewsContainer>
          <h2>Client feedback:</h2>
          <CloseButton onClick={() => setShowReviews(false)}>✕</CloseButton>          
          <br/>
          {reviews.map((review, idx) => (
            <ReviewItem key={idx}>
              <ReviewAuthor>{review.author_name}</ReviewAuthor>
              <ReviewRating>{Array.from({ length: Math.round(review.rating) }, (_, i) => <MdStar key={i} style={{ color: "#f59a31" }} />)}</ReviewRating>
              <ReviewText>{review.text}</ReviewText>
            </ReviewItem>
          ))}
        </ReviewsContainer>
      )}
    </MapWindowContainer>
  );
};

export default MapWrapperTest;
