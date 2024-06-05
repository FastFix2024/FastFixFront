import { useState } from "react";
import Button from "../Button/Button";
import { EmergencyContainer, GeolocationContainer, GeolocationWrapper, PhoneNuberContainer } from "./styles";

const Emergency = () => {
  const [searchGeolocation, setSearchGeolocation] = useState(false);
  const [positionLatitude, setLatitude] = useState<null | number>(null);
  const [positionLongitude, setLongitude] = useState<null | number>(null);

  if (searchGeolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    });
  }

  return (
    <>
      <EmergencyContainer>
        <PhoneNuberContainer>
          <Button type="button" onButtonClick={() => setSearchGeolocation(!searchGeolocation)} name="Emergency" />
          {searchGeolocation && (
            <>
              <p>Номер телефона</p>
            </>
          )}
        </PhoneNuberContainer>

        {searchGeolocation && (
          <GeolocationWrapper>
            <GeolocationContainer>
              <p>lat: {positionLatitude}</p>
              <p>long: {positionLongitude}</p>
            </GeolocationContainer>
          </GeolocationWrapper>
        )}
      </EmergencyContainer>
    </>
  );
};
export default Emergency;
