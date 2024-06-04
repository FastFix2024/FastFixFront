export interface SelectInputProps {
    id: string;
    label: string;
    value: string;
    options: string[];
    onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
}