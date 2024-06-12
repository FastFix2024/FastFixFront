import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

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
  stations: FuelData[];
  error: any;
}

const fuelInitialState: FuelState = {
  stations: [],
  error: undefined,
};

export const getFuelInfo = createAsyncThunk(
  'fuel/getFuelInfo',
  async (_, { rejectWithValue }) => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const response = await axios.put(`/api/car-details/stations?latitude=${latitude}&longitude=${longitude}&radius=5`);
          resolve(response.data);
        } catch (error: any) {
          if (error.response) {
            reject(rejectWithValue(error.response.data));
          } else {
            reject(rejectWithValue({ message: "Network error" }));
          }
        }
      }, reject);
    });
  }
);

const fuelSlice = createSlice({
  name: 'FUEL',
  initialState: fuelInitialState,
  reducers: {
    resetActivityState: () => fuelInitialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFuelInfo.pending, (state: FuelState) => {
        state.error = undefined;
      })
      .addCase(getFuelInfo.fulfilled, (state: FuelState, action: PayloadAction<any>) => {
        if (action.payload && action.payload.stations) {
          state.stations = action.payload.stations.map((station: any) => ({
            id: station.id,
            name: station.name,
            street: station.street,
            houseNumber: station.houseNumber,
            postCode: station.postCode,
            place: station.place,
            price: station.diesel, // Assuming you want the diesel price
          }));
        } else {
          state.stations = [];
        }
      })
      .addCase(getFuelInfo.rejected, (state: FuelState, action: PayloadAction<any>) => {
        state.error = action.payload;
      });
  },
});

export const { resetActivityState } = fuelSlice.actions;
export const fuelSliceSelectors = {
  fuel: (state: { fuel: FuelState }) => state.fuel,
};

export default fuelSlice.reducer;
