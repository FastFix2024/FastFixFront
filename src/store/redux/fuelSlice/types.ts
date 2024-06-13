export interface FuelSliceState {
  stations: FuelData[];
  error: any;
}

export interface FuelData {
  id: string;
  name: string;
  street: string;
  houseNumber: string | null;
  postCode: number;
  place: string;
  price: number;
  fuel: string;
}
