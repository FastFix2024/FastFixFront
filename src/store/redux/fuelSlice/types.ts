export interface FuelData {
  id: string;
  name: string;
  street: string;
  houseNumber: string | null;
  postCode: number;
  place: string;
  price: number;
}

export interface FuelState {
    FuelData: any
    price: any
    street: any
    houseNumber: any
    data: FuelData[],
    error: any
}