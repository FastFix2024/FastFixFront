import { Select, SelectContainer } from "./styles";
import { SelectInputProps } from "./type";

const SelectInput = ({ name, label, value, options, onChange }: SelectInputProps) => {
    return (
        <SelectContainer>
            <label htmlFor={name}>{label}:</label>
            <Select value={value} onChange={onChange}>
                {options.map((option: any) => (
                    <option key={option} value={value}>{name}</option>
                ))}
            </Select>
        </SelectContainer>
    );
}

export default SelectInput;
