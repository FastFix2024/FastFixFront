import { PayloadAction } from '@reduxjs/toolkit';
import { createAppSlice } from '../../createAppSlice'
import axios from 'axios'

interface FuelData {
    id: string;
    name: string;
    street: string;
    houseNumber: string | null;
    postCode: number;
    place: string;
    price: number;
  }
  
 interface FuelState {
      stations: FuelData[],
      error: any
  }



const fuelInitialState: FuelState = {
  stations: [],
  error: undefined,
};

export const fuelSlice = createAppSlice({
  name: "FUEL",
  initialState: fuelInitialState,
  reducers: (create) => ({
    getFuelInfo: create.asyncThunk(async (_, { rejectWithValue }) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords
        try {
          const response = await axios.get(`/api/car-details/stations?latitude=${latitude}&longitude=${longitude}&radius=5`)
          console.log(response.data);
          return response.data;     
        } catch (error: any) {
          if (error.response) {
            return rejectWithValue(error.response.data);
          } else {
            return rejectWithValue ({ message : "Network error"})
          }
        }
      })
    },    
    {
        pending: (state: FuelState) => {
            state.error = undefined
        },
        fulfilled: (state: FuelState, action: PayloadAction<any>) => {
        
            state.stations = action.payload.stations.map((station: any) => ({
              id: station.id,
              name: station.name,
              street: station.street,
              houseNumber: station.houseNumber,
              postCode: station.postCode,
              place: station.place,
              price: station.diesel, // Assuming you want the diesel price
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



//`/api/car-details/stations?latitude=${latitude}&longitude=${longitude}&radius=5`