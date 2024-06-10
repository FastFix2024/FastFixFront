import { useEffect, useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import { DateContainer, DateInput } from "./styles";
import axios from "axios";
import { InsuranceTypes } from "./types";

const UserInfo = () => {
  const [insurance, setInsurance] = useState<string>("ADAC");
  const [fuelType, setFuelType] = useState<string>("E10");
  const [inspectionDate, setInspectionDate] = useState<string>("2025-06-06");

  const [insuranceOptions, setInsuranceOptions] = useState<InsuranceTypes[]>([]);
  const [insuranceOptionID, setInsuranceOptionID] = useState<number>();

  useEffect(() => {
    axios
      .get("/api/car-details/insurance-companies")
      .then((res) => {
        const options = res.data.map((opt:{id:number; name:string}) => ({id: opt.id, name: opt.name}))
        setInsuranceOptions(options);
        console.log(options)
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios.get("/api/car-details/fuel-types")
  }, [])


  const fuelTypeOptions: string[] = ["E10", "Diesel", "Electric"];

  const handleInsuranceChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
      const insuranceName = evt.target.value;
      setInsurance(insuranceName);
      const insuranceId = insuranceOptions.find(opt => insuranceName === opt.name);
      if (insuranceId) {
        setInsuranceOptionID(insuranceId.id);
      }
    };
  const handleFuelTypeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => setFuelType(evt.target.value);
  const handleInspectionDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => setInspectionDate(evt.target.value);

  return (
    <>
      <SelectInput  label="Insurance" value={insurance} options={insuranceOptions.map(opt => opt.name)} onChange={handleInsuranceChange} />

      <SelectInput label="Fuel Type" value={fuelType} options={fuelTypeOptions} onChange={handleFuelTypeChange} />

      <DateContainer>
        <label htmlFor="inspectionDate">Inspection Date:</label>
        <DateInput type="date" id="inspectionDate" value={inspectionDate} onChange={handleInspectionDateChange} />
      </DateContainer>
    </>
  );
};

export default UserInfo;

///api/car-details/insurance-companies
