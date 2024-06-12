import { useEffect, useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import { DateContainer, DateInput } from "./styles";
import axios from "axios";
import { InsuranceTypes } from "./types";

const UserInfo = () => {
  const [insurance, setInsurance] = useState<string>("");
  const [fuelOptions, setFuelOptions] = useState<InsuranceTypes[]>([]);
  const [insuranceOptions, setInsuranceOptions] = useState<InsuranceTypes[]>([]);
  
  const [insuranceOptionID, setInsuranceOptionID] = useState<number>();
  const [fuelType, setFuelType] = useState<string>("");
  const [inspectionDate, setInspectionDate] = useState<string>("2025-06-06");


  

  console.log("insuranceOptionID", insuranceOptionID);
  console.log("fuelType", fuelType);
  console.log('inspectionDate', inspectionDate)
  
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
        console.log("FUEL options", res.data);
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
  };

  useEffect(() => {
    axios.get("api/")
  })

  // {
  //   "id": 1,
  //   "username": "Ian",
  //   "email": "ian.wanderfalke@gmail.com",
  //   "carDetails": {
  //     "id": null,
  //     "fuelType": "e5",
  //     "lastMaintenanceDate": [
  //       2024,
  //       6,
  //       10
  //     ],
  //     "insuranceCompany": {
  //       "id": 9,
  //       "name": "HanseMerkur",
  //       "phoneNumber": "+49 40 4119 0",
  //       "website": "https://www.hansemerkur.de"
  //     }
  //   }
  // }



  

  const handleFuelTypeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => setFuelType(evt.target.value);

  const handleInspectionDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => setInspectionDate(evt.target.value);

  return (
    <>
      <SelectInput label="Insurance" value={insurance} options={insuranceOptions.map((opt) => opt.name)} onChange={handleInsuranceChange} />

      <SelectInput label="Fuel type" value={fuelType} options={fuelOptions} onChange={handleFuelTypeChange} />

      <DateContainer>
        <label htmlFor="inspectionDate">Inspection Date:</label>
        <DateInput type="date" id="inspectionDate" value={inspectionDate} onChange={handleInspectionDateChange} />
      </DateContainer>
    </>
  );
};

export default UserInfo;
