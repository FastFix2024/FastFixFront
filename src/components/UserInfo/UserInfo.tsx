import { useState } from "react";
import UserInput from "../UserInput/UserInput";

const UserInfo = () => {

    const [insurance, setInsurance] = useState('ADAC');
    const [fuelType, setFuelType] = useState('E10');
    const [inspectionDate, setInspectionDate] = useState('06.06.2025');

    return (
        <>
            <UserInput label="Insurance" value={insurance} onSave={setInsurance}/>
            <UserInput label="Fuel type" value={fuelType} onSave={setFuelType} />
            <UserInput label="Inspection date" value={inspectionDate} onSave={setInspectionDate}/>
        </>
    )
}

export default UserInfo;