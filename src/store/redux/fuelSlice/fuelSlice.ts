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
    getFuelInfo: create.asyncThunk(async (_, { rejectWithValue }) => {
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords
        
        const response = await fetch(`/api/car-details/stations?latitude=${latitude}&longitude=123&radius=1`
        )
        const result = await response.json()
        if (!response.ok) {
          return rejectWithValue(result)
        } else {
          return result
        }
      })
    },    
    {
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
