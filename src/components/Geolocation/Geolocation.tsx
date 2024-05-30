import { useState } from "react";
import Button from "../Button/Button";

const Geolocation = () => {
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

  console.log(positionLongitude);

  return (
    <>
      {searchGeolocation && (
        <>
          <p>latitude: {positionLatitude}</p>
          <p>longitude: {positionLongitude}</p>
        </>
      )}
      <Button type="button" onButtonClick={() => setSearchGeolocation(!searchGeolocation)} name="Geolocation" />
    </>
  );
};
export default Geolocation;
