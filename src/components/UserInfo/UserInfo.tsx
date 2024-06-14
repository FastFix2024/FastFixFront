import { useEffect, useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import { DateContainer, DateInput } from "./styles";
import axios from "axios";
import { InsuranceTypes } from "./types";
// import { useDispatch } from "react-redux";

const UserInfo = () => {
  const [insurance, setInsurance] = useState<string>("");
  const [fuelOptions, setFuelOptions] = useState<InsuranceTypes[]>([]);
  const [insuranceOptions, setInsuranceOptions] = useState<InsuranceTypes[]>([]);

  const [fuelType, setFuelType] = useState<any>();
  const [inspectionDate, setInspectionDate] = useState<string>('');

  const [userID, setUserID] = useState<number>();

  // const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("/api/car-details/insurance-companies")
      .then((res) => {
        const options = res.data.map((opt: { id: number; name: string }) => ({ id: opt.id, name: opt.name }));
        setInsuranceOptions(options);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get("/api/car-details/fuel-types")
      .then((res) => {
        const options = res.data.map((opt: { id: number; name: string }) => ({ id: opt.id, name: opt.name }));
        setFuelOptions(options);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios.get("api/users/my/profile")
    .then((res) => {
      const data = res.data;
      setUserID(data.id);
      const formattedDate = data.carDetails.lastMaintenanceDate.map((el: number) => el < 10 ? '0' + el : el).join('-');
      setInspectionDate(formattedDate);
      setFuelType(data.carDetails.fuelType.name);
      setInsurance(data.carDetails.insuranceCompany.name);
    })
    .catch((error) => console.error(error));
  }, []);

  const handleInsuranceChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const insuranceName = evt.target.value;
    setInsurance(insuranceName);
    const insuranceId = insuranceOptions.find((opt) => insuranceName === opt.name);
    handleUpdateInsurance(insuranceId?.id);
  };

  const handleFuelTypeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const newFuelType = evt.target.value;
    setFuelType(newFuelType);
    const fuelId = fuelOptions.find((opt) => newFuelType === opt.name);
    handleUpdateFuel(fuelId?.id);
  };

  const handleInspectionDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newInspectionDate = evt.target.value;
    setInspectionDate(newInspectionDate);
    handleUpdateInspectionDate(newInspectionDate);
  };

  const handleUpdateInsurance = (insuranceOptionID: number | undefined) => {
  axios
    .put(`api/car-details/${userID}/insurance-company`, insuranceOptionID, {
    headers: {
        'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log("Update successful:", response.data);
  })
  .catch((error) => {
    console.error("Update error:", error);
  });
  // dispatch(usersSliceActions.updateUser(insuranceOptionID));
  };

  const handleUpdateFuel = (fuelTypeId: number | undefined) => {
    axios
      .put(`api/car-details/${userID}/fuel-type`, fuelTypeId, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then((response) => {
      console.log("Update successful:", response.data);
    })
      .catch((error) => {
        console.error("Update error:", error);
      });
  }

  const handleUpdateInspectionDate = (newInspectionDate: any) => {
  axios
    .put(`api/car-details/${userID}/last-maintenance-date`, newInspectionDate, {
    headers: {
        'Content-Type': 'application/json'
    }
  })
  .then((response) => {
    console.log("Update successful:", response.data);
    console.log(newInspectionDate);

  })
  .catch((error) => {
    console.error("Update error:", error);
  });
  };

  console.log(fuelType);
  return (
    <>
      <DateContainer>
        <label htmlFor="inspectionDate">Inspection Date</label>
        <DateInput type="date" id="inspectionDate" value={inspectionDate} onChange={handleInspectionDateChange} />
      </DateContainer>

      <SelectInput label="Fuel type" value={fuelType} options={fuelOptions.map((opt) => opt.name)} onChange={handleFuelTypeChange} />

      <SelectInput label="Insurance" value={insurance} options={insuranceOptions.map((opt) => opt.name)} onChange={handleInsuranceChange} />
    </>
  );
};

export default UserInfo;
