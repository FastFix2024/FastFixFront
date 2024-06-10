import { useEffect, useState } from "react";
import SelectInput from "../SelectInput/SelectInput";
import { DateContainer, DateInput } from "./styles";
import axios from "axios";
import { useAppDispatch } from '../../store/hooks'
import { usersSliceActions } from '../../store/redux/usersSlice/usersSlice'

interface InsuranceTypes {
  id: number,
  name: string
}


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

  const handleInsuranceChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
      const insuranceName = evt.target.value;
      setInsurance(insuranceName);

    const insuranceId = insuranceOptions.find(opt => insuranceName === opt.name);
    console.log('insuranceIdINSIDE',insuranceId)
    if (insuranceId) {

        dispatch(usersSliceActions.updateUser(insuranceId.id))
        setInsuranceOptionID(insuranceId.id);

        
      }
    };
  const handleFuelTypeChange = (evt: React.ChangeEvent<HTMLSelectElement>) => setFuelType(evt.target.value);
  const handleInspectionDateChange = (evt: React.ChangeEvent<HTMLInputElement>) => setInspectionDate(evt.target.value);

  return (
    <>

        

      <SelectInput name="insurance" label="Insurance" value={insuranceOptionID} options={insuranceOptions.map(opt => opt.name)} onChange={handleInsuranceChange} />


      <SelectInput name="fuelType" label="Fuel Type" value={0} options={fuelTypeOptions} onChange={handleFuelTypeChange} />

      <DateContainer>
        <label htmlFor="inspectionDate">Inspection Date:</label>
        <DateInput type="date" id="inspectionDate" value={inspectionDate} onChange={handleInspectionDateChange} />
      </DateContainer>
    </>
  );
};

export default UserInfo;
