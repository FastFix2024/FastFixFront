import { Select, SelectContainer } from "./styles";
import { SelectInputProps } from "./type";

const SelectInput = ({ name, label, value, options, onChange }: SelectInputProps) => {
    return (
        <SelectContainer>
            <label htmlFor={name}>{label}:</label>
            <Select name={name} value={value} onChange={onChange}>
                {options.map((option: any) => (
                    <option key={option} value={value}>{option}</option>
                ))}
            </Select>
        </SelectContainer>
    );
}

export default SelectInput;