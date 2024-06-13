export interface GasStation {
    id: string;
    name: string;
    brand: string;
    street: string;
    place: string;
    lat: number;
    lng: number;
    dist?: number;
    diesel: number;
    e5: number;
    e10: number;
    houseNumber?: string;
    postCode: number;
    open: boolean;
  }
  