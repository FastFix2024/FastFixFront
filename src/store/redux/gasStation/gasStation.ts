import axios from "axios";
import { createAppSlice } from '../../createAppSlice'
import { GasStationState } from './types'



const initialState: GasStationState[] = [];

/* export const locationSlice = createAppSlice({
    name: "LOCATION_SLICE",
    initialState: initialState,
    reducers: (create) => ({
        register: create.asyncThunk(
            async (locationData: GasStationState, { rejectWithValue }) => {
                try {
                    const response = await axios.post("/api/tanker", locationData);
                    return response.data;
                } catch (error: any) {
                    return rejectWithValue(error.response.data)
                }
            },
            {
                pending: (state) => {},
                fulfilled: (state, action) => {},
                rejected: (state, action) => {
                  state.registrationErrorMessage = "Registration error";
                },
              }
        )
    }),
    selectors: {
        selectCurrentUser: (state) => state.user,

}) */