export interface InsuranceTypes {
    id: number,
    name: string
}

export interface SelectInputProps {
  label: string;
  value: string;
  options: any;
  onChange: (evt: React.ChangeEvent<HTMLSelectElement>) => void;
}