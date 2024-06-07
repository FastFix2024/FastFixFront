import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../createAppSlice'

interface FuelData {
    id: string;
    name: string;
    street: string;
    houseNumber: string;
    postCode: number;
    place: string;
    price: number;
  }
  
 interface FuelState {
      data: FuelData[],
      error: any
  }


const fuelInitialState: FuelState = {
  data: [],
  error: undefined,
};

export const fuelSlice = createAppSlice({
  name: "FUEL",
  initialState: fuelInitialState,
  reducers: (create) => ({
    getFuelInfo: create.asyncThunk(async (arg, { rejectWithValue }) => {
      const response = await fetch(
        "https://creativecommons.tankerkoenig.de/json/list.php?lat=52.521&lng=13.438&rad=1.5&sort=dist&type=all&apikey=0bc4c8ca-21d0-ac93-2a74-4ae2a3afa795"
      );
      const result = await response.json();
      if (!response.ok) {
        return rejectWithValue(result);
      } else {
        return result;
      }
    }, {
        pending: (state: FuelState) => {
            state.error = undefined
        },
        fulfilled: (state: FuelState, action: PayloadAction<any>) => {
                state.data = action.payload.stations.map((station: any) => ({
                  id: station.id,
                  name: station.name,
                  street: station.street,
                  houseNumber: station.houseNumber,
                  postCode: station.postCode,
                  place: station.place,
                  price: station.diesel, 
                }));
        },
        rejected: (state: FuelState, action: PayloadAction<any>) => {
            state.error = action.payload
        }
    }),
    reseteActivityState: create.reducer(() => fuelInitialState)
  }),
  selectors: {
    fuel: (state: FuelState) => state
  }
});

export const fuelSliceAction = fuelSlice.actions;
export const fuelSliceSelectors = fuelSlice.selectors;
