import { Select, SelectContainer } from "./styles";
import { SelectInputProps } from "./type";

const SelectInput = ({ id, label, value, options, onChange }: SelectInputProps) => {
    return (
        <SelectContainer>
            <label htmlFor={id}>{label}:</label>
            <Select id={id} value={value} onChange={onChange}>
                {options.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Select>
        </SelectContainer>
    );
}

export default SelectInput;
