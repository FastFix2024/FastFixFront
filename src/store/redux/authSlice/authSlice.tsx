import axios from "axios";
import { createAppSlice } from "../../createAppSlice";
import { AuthState, RegistrationDto } from "./types";

const initialState: AuthState = {};

export const authSlice = createAppSlice({
  name: "AUTH_SLICE",
  initialState: initialState,
  reducers: (create) => ({
    register: create.asyncThunk(
      async (registrationDto: RegistrationDto, { rejectWithValue }) => {
        try {
          const response = await axios.post("/api/auth/register", registrationDto);

          return response.data;
        } catch (error: any) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: (state) => {},
        fulfilled: (state, action) => {},
        rejected: (state, action) => {
          state.registrationErrorMessage = "Registration error";
        },
      }
    ),
    login: create.asyncThunk(
      async (registrationDto: RegistrationDto, { rejectWithValue }) => {
        try {
          const response = await axios.post("/api/auth/register", registrationDto);

          return response.data;
        } catch (error: any) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: (state) => {},
        fulfilled: (state, action) => {},
        rejected: (state, action) => {
          state.registrationErrorMessage = "Registration error";
        },
      }
    ),
  }),
  selectors: {
    selectCurrentUser: (state) => state.user,
    selectRegistrationError: (state) => state.registrationErrorMessage,
  },
});

export const authSliceActions = authSlice.actions;
export const authSliceSlectors = authSlice.selectors;