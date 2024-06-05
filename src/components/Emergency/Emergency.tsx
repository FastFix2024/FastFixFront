import { useState } from "react";
import Button from "../Button/Button";
import { EmergencyContainer, GeolocationContainer, GeolocationWrapper, PhoneNuberContainer } from "./styles";

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
        <PhoneNuberContainer>
          <Button type="button" onButtonClick={() => {setSearchGeolocation(!searchGeolocation); setBackground(!background)}} name="EMERGENCY" />
          {searchGeolocation && (
            <>
              <p>ADAC International:</p>
              <p style={{margin: '5px'}}>+49 89 222222</p>
            </>
          )}
        </PhoneNuberContainer>

        {searchGeolocation && (
          <GeolocationWrapper>
            <GeolocationContainer>
              <p>If you are lost, here are your coordinates:</p>
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
