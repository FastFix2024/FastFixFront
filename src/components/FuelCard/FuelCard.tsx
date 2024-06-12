import { FuelCardContainer, Price } from "./styles";
import { FuelStation } from "./type";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fuelSliceAction, fuelSliceSelectors } from "../../store/redux/fuelSlice/fuelSlice";
import { FuelData, FuelState } from "../../store/redux/fuelSlice/types";
import { useEffect } from "react";

const FuelCard = () => {
  const dispatch = useAppDispatch();
  const { stations, error } = useAppSelector(fuelSliceSelectors.fuel);

  console.table(stations)
  useEffect(() => {
    dispatch(fuelSliceAction.getFuelInfo());
  }, [])

  const fuel = stations.map((fuelObj: FuelData) => {
    return (
        <FuelCardContainer key={fuelObj.id}>
          <Price>{fuelObj.price.toFixed(2)} €</Price>
          <div>
            <h3>Type: </h3>
            <p>Address: {fuelObj.street + fuelObj.houseNumber}</p>
          </div>
        </FuelCardContainer>
    )
  })

  return (
    <>
      {fuel}
    </>
  );
};

export default FuelCard;
