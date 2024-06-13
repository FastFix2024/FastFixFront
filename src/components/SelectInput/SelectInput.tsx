import { Select, SelectContainer } from "./styles";
import { SelectInputProps } from "./type";

const SelectInput = ({  label, value, options, onChange }: SelectInputProps) => {
    return (
        <SelectContainer>
            <label>{label}</label>
            <Select value={value} onChange={onChange}>
                <option value="">Select {label}</option>
                {options.map((option: string) => (
                    <option key={option} value={option} >{option}</option>
                ))}
            </Select>
        </SelectContainer>
    );
}

export default SelectInput;