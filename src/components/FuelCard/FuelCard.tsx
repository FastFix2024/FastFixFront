import { useEffect, useState } from "react";
import axios from "axios";
import { FuelCardContainer, FuelDetails, FuelDetailsText, Price } from "./styles";
import { GasStation } from "./type";


const FuelCard = () => {
  const [stations, setStations] = useState<GasStation[]>([]);
  const [error, setError] = useState<string | undefined>();


  console.table(stations)
  console.log(stations);
  
  // useEffect(() => {
  //   dispatch(fuelSliceAction.getFuelInfo())
  //   .then((originalPromiseResult: any) => {
  //     // handle result here
  //     console.log(originalPromiseResult);
      
  //   })
  //   .catch((rejectedValueOrSerializedError: any) => {
  //     // handle error here
  //   })
  // }, [])

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await axios.get(`/api/car-details/stations?latitude=${latitude}&longitude=${longitude}&radius=5`);
          setStations(response.data.stations);
        } catch (error: any) {
          if (error.response) {
            setError(error.response.data.message);
          } else {
            setError("Network error");
          }
        }
      },
      (error) => {
        setError("Geolocation error: " + error.message);
      }
    );
  }, []);

  const fuel = stations.slice(0, 4).map((station) => {
    const { diesel, e5, e10, street, name, open } = station;
    const isOpen = open ? "Open" : "Closed";
    const stationName = name.split(" ");
    return (
      <FuelCardContainer key={station.id}>
        <Price>
          {e5 !== undefined && `E5: ${e5.toFixed(2)}€`}
          <br />
          {e10 !== undefined && `E10: ${e10.toFixed(2)}€`}
          <br />
          {diesel !== undefined && `D: ${diesel.toFixed(2)}€`}
        </Price>
        <FuelDetails>
            <h3>{stationName[0]}</h3>
            <FuelDetailsText>{isOpen}</FuelDetailsText>    
          <FuelDetailsText>{street}</FuelDetailsText>
        </FuelDetails>
      </FuelCardContainer>
    );
  });

  return <>{fuel}</>;
};

export default FuelCard;
// function dispatch(arg0: AsyncThunkAction<void, void, { state?: undefined; dispatch?: undefined; extra?: unknown; rejectValue?: unknown; serializedErrorType?: unknown; pendingMeta?: unknown; fulfilledMeta?: unknown; rejectedMeta?: unknown; }>) {
//   throw new Error("Function not implemented.");
// }

