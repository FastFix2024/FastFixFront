import axios from "axios";
import { createAppSlice } from "../../createAppSlice";
import { AuthState, LoginDto, RegistrationDto, User } from "./types";

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authSlice = createAppSlice({
  name: "AUTH_SLICE",
  initialState: initialState,
  reducers: (create) => ({
    register: create.asyncThunk(
      async (registrationDto: RegistrationDto, { rejectWithValue }) => {
        try {
          const response = await axios.post("/api/register", registrationDto, { headers: {} });

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
      async (loginDto: LoginDto, { rejectWithValue }) => {
        try {
          const response = await axios.post("/api/auth/login", loginDto);

          return response.data;
        } catch (error: any) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: (state) => {},
        fulfilled: (state, action) => {
          state.isAuthenticated = true;
        },
        rejected: (state, action) => {
          state.registrationErrorMessage = "Registration error";
        },
      }
    ),
    currentUser: create.asyncThunk(
      async (arg: void, { rejectWithValue }) => {
        try {
          const response = await axios.get<User>("/api/users/my/profile");

          return response.data;
        } catch (error: any) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: (state) => {},
        fulfilled: (state, action) => {
          state.user = action.payload;
        },
        rejected: (state, action) => {
          state.isAuthenticated = false;
        },
      }
    ),
  }),
  selectors: {
    selectIsAuthenticated: (state) => state.isAuthenticated,
    selectCurrentUser: (state) => state.user,
    selectRegistrationError: (state) => state.registrationErrorMessage,
  },
});

export const authSliceActions = authSlice.actions;
export const authSliceSelectors = authSlice.selectors;
