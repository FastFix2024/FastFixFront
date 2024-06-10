import { Select, SelectContainer } from "./styles";
import { SelectInputProps } from "./type";

const SelectInput = ({  label, value, options, onChange }: SelectInputProps) => {
    return (
        <SelectContainer>
            <label>{label}:</label>
            <Select value={value} onChange={onChange}>
                {options.map((option: any) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </Select>
        </SelectContainer>
    );
}

export default SelectInput;
