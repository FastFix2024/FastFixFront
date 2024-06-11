import { useEffect, useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import { DateContainer, DateInput } from "./styles";
import axios from "axios";
import { InsuranceTypes } from "./types";
import { useDispatch } from "react-redux";
import { usersSliceActions } from "../../store/redux/usersSlice/usersSlice";

const UserInfo = () => {
  const [insurance, setInsurance] = useState<string>("");
  const [fuelOptions, setFuelOptions] = useState<InsuranceTypes[]>([]);
  const [insuranceOptions, setInsuranceOptions] = useState<InsuranceTypes[]>([]);
  
  const [insuranceOptionID, setInsuranceOptionID] = useState<number | undefined>();
  const [fuelType, setFuelType] = useState<string>("");
  const [inspectionDate, setInspectionDate] = useState<string>("2025-06-06");

  const dispatch = useDispatch();
  
  useEffect(() => {
    axios
      .get("/api/car-details/insurance-companies")
      .then((res) => {
        const options = res.data.map((opt: { id: number; name: string }) => ({ id: opt.id, name: opt.name }));
        setInsuranceOptions(options);
        console.log(options);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios
      .get("/api/car-details/fuel-types")
      .then((res) => {
        setFuelOptions(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios.get("api/users/my/profile")
    .then((res) => {
      const data = res.data;
      setFuelType(data.carDetails.fuelType);
      setInspectionDate(data.carDetails.lastMaintenanceDate.join('-'));
      setInsurance(data.carDetails.insuranceCompany.name);
      setInsuranceOptionID(data.carDetails.insuranceCompany.id);
    })
    .catch((error) => console.error(error));
  }, []);

  const handleInsuranceChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const insuranceName = evt.target.value;
    setInsurance(insuranceName);
    const insuranceId = insuranceOptions.find((opt) => insuranceName === opt.name);
    if (insuranceId) {
      setInsuranceOptionID(insuranceId.id);
    }
    handleUpdate(insuranceName, fuelType, inspectionDate, insuranceId?.id);
  };

  const handleFuelTypeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
    const newFuelType = evt.target.value;
    setFuelType(newFuelType);
    handleUpdate(insurance, newFuelType, inspectionDate, insuranceOptionID);
  };

  const handleInspectionDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const newInspectionDate = evt.target.value;
    setInspectionDate(newInspectionDate);
    handleUpdate(insurance, fuelType, newInspectionDate, insuranceOptionID);
  };

  const handleUpdate = (insurance: string, fuelType: string, inspectionDate: string, insuranceOptionID: number | undefined) => {
    const userCredentials2 = {     //добавить всего пользователя
      carDetails: {
        fuelType,
        lastMaintenanceDate: inspectionDate.split('-').map(Number),
        insuranceCompany: { id: insuranceOptionID, name: insurance }
      }
    };
    dispatch(usersSliceActions.updateUser(userCredentials));
  };

  return (
    <>
      <SelectInput label="Insurance" value={insurance} options={insuranceOptions.map((opt) => opt.name)} onChange={handleInsuranceChange} />

      <SelectInput label="Fuel type" value={fuelType} options={fuelOptions.map((opt) => opt.name)} onChange={handleFuelTypeChange} />

      <DateContainer>
        <label htmlFor="inspectionDate">Inspection Date:</label>
        <DateInput type="date" id="inspectionDate" value={inspectionDate} onChange={handleInspectionDateChange} />
      </DateContainer>
    </>
  );
};

export default UserInfo;