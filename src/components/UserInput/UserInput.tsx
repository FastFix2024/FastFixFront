import { InfoContainer, RedactPencil } from "./styles";
import { Pencil } from "../../assets";
import { useState } from "react";

const UserInput = ({ label, value, onSave, type = "text" } : any) => {

    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleSave = () => {
        onSave(inputValue);
        setIsEditing(false);
    };

    const getHiddenValue = (value: string) => {
        return '•'.repeat(value.length);
    };

    return (
        <div>
        <p>{label}: </p>
        {isEditing ? (
            <>
                <input 
                    type={type} 
                    placeholder={`Input new ${label}`} 
                    value={inputValue}
                    onChange={(evt) => setInputValue(evt.target.value)} 
                />
                <button onClick={handleSave}>Save</button>
            </>
        ) : (
            <InfoContainer>
                <h3>{type === "password" ? getHiddenValue(value) : value}</h3>
                <RedactPencil src={Pencil} onClick={() => setIsEditing(true)} />
            </InfoContainer>
        )}
    </div>
    );
};

export default UserInput;