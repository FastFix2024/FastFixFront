export interface FuelData {
  id: string;
  name: string;
  street: string;
  houseNumber: string;
  postCode: number;
  place: string;
  price: number;
}

export interface FuelState {
    data: FuelData[],
    error: any
}