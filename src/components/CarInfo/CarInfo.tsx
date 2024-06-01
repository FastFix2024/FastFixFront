import { useState } from "react";
import UserInput from "../UserInput/UserInput";

const CarInfo = () => {

    const [insurance, setInsurance] = useState('delatMneNehui@elban.com');
    const [fuelType, setFuelType] = useState('defaultUsername');
    const [inspectionDate, setInspectionDate] = useState('defaultPassword');

    return (
        <>
            <UserInput label="Insurance" value={insurance} onSave={setInsurance}/>
            <UserInput label="Fuel type" value={fuelType} onSave={setFuelType} />
            <UserInput label="Inspection date" value={inspectionDate} onSave={setInspectionDate}/>
        </>
    )
}

export default CarInfo;