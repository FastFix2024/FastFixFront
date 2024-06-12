import { useState } from "react";
import Button from "../Button/Button";
import { AdacLink, EmergencyButton, EmergencyContainer, GeolocationContainer, GeolocationWrapper, PhoneNumberContainer } from "./styles";

const Emergency = () => {
  const [searchGeolocation, setSearchGeolocation] = useState(false);
  const [positionLatitude, setLatitude] = useState<null | number>(null);
  const [positionLongitude, setLongitude] = useState<null | number>(null);
  const [background, setBackground] = useState<boolean>(false);
  
  if (searchGeolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setLatitude(latitude);
      setLongitude(longitude);
    });
  }

  return (
    <>
      <EmergencyContainer style={background === true ? {backgroundColor: 'rgba(5, 5, 5, 0.534)'} : {backgroundColor: 'transparent'}}>
        <PhoneNumberContainer>
          <EmergencyButton type="button" onClick={() => {setSearchGeolocation(!searchGeolocation); setBackground(!background)}}>EMERGENCY</EmergencyButton>
          {searchGeolocation && (
            <>
              <AdacLink href="https://www.adac.de/services/pannenhilfe">ADAC International</AdacLink>
              <p style={{margin: '5px'}}>+49 89 222222</p>
            </>
          )}
        </PhoneNumberContainer>

        {searchGeolocation && (
          <GeolocationWrapper>
            <GeolocationContainer>
              <p>YOU ARE HERE</p>
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
