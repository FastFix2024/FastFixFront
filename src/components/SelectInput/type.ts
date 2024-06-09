export interface InsuranceTypes {
    id: number,
    name: string
}

export interface SelectInputProps {
    name: string;
    label: string;
    value: number | undefined;
    options: InsuranceTypes[] | string[];
    onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
}