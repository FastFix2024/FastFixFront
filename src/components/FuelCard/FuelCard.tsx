import { FuelCardContainer, Price } from "./styles";
import { FuelStation } from "./type";

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fuelSliceAction, fuelSliceSelectors } from "../../store/redux/fuelSlice/fuelSlice";
import { FuelData } from "../../store/redux/fuelSlice/types";
import { useEffect } from "react";

const FuelCard = () => {
  const dispatch = useAppDispatch();
  const { data, error } = useAppSelector(fuelSliceSelectors.fuel);

  useEffect(() => {
    dispatch(fuelSliceAction.getFuelInfo());
  }, [])

  const fuel = data.map((fuelObj: FuelData) => {
    return (
        <FuelCardContainer key={fuelObj.id}>
          <Price>{fuelObj.price.toFixed(2)} €</Price>
          <div>
            <h3>Type: diesel</h3>
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
