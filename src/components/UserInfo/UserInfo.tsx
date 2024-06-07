import { useEffect, useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import { DateContainer, DateInput } from "./styles";
import axios from "axios";

const UserInfo = () => {
  const [insurance, setInsurance] = useState<string>("ADAC");
  const [fuelType, setFuelType] = useState<string>("E10");
  const [inspectionDate, setInspectionDate] = useState<string>("2025-06-06");

  const [insuranceOptions, setInsuranceOptions] = useState<string[]>([]);

  useEffect(() => {
    axios
      .get("/api/car-details/insurance-companies")
      .then((res) => {
        const options = res.data.map((opt:{name:string})=>opt.name)
        setInsuranceOptions(options);
        console.log(options)
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    axios.get("/api/car-details/fuel-types")
  })


  const fuelTypeOptions: string[] = ["E10", "Diesel", "Electric"];

  const handleInsuranceChange = (evt: React.ChangeEvent<HTMLSelectElement>) => setInsurance(evt.target.value);
  const handleFuelTypeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => setFuelType(evt.target.value);
  const handleInspectionDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => setInspectionDate(evt.target.value);

  return (
    <>
      <SelectInput id="insurance" label="Insurance" value={insurance} options={insuranceOptions} onChange={handleInsuranceChange} />

      <SelectInput id="fuelType" label="Fuel Type" value={fuelType} options={fuelTypeOptions} onChange={handleFuelTypeChange} />

      <DateContainer>
        <label htmlFor="inspectionDate">Inspection Date:</label>
        <DateInput type="date" id="inspectionDate" value={inspectionDate} onChange={handleInspectionDateChange} />
      </DateContainer>
    </>
  );
};

export default UserInfo;

///api/car-details/insurance-companies
