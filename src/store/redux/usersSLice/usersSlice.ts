import axios from "axios";
import { createAppSlice } from "../../createAppSlice";
import { UserCredentials, UsersState } from "./types";


const initialState: UsersState = {
  users: [],
  errorMessage: undefined,
};

export const usersSlice = createAppSlice({
  name: "USERS_SLICE",
  initialState: initialState,
  reducers: (create) => ({
    getUser: create.asyncThunk(
      async (getUserCredentials: UserCredentials, { rejectWithValue }) => {
          try {
          const response = await axios.get(`api/users/my/profile`);
          localStorage.setItem('userID', response.data.id);
          return response.data;
        } catch (error: any) {
          if (error.response) {
            return rejectWithValue(error.response.data);
          } else {
            return rejectWithValue({ message: "Network Error" });
          }
        }
      },
      {
        pending: (state) => {},
        fulfilled: (state, action) => {
          state.users = action.payload;
        },
        rejected: (state, action) => {
          state.errorMessage = "Failed to fetch user data";
        },
      }
    ),
    updateUser: create.asyncThunk(
      async (insuranceOptionID : any, { rejectWithValue }) => {
        try {
          const userID = localStorage.getItem('userID');
          const response = await axios.put(`api/car-details/${userID}/insurance-company`, insuranceOptionID, {headers: {
            'Content-Type': 'application/json'
        }});
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: (state) => {},
        fulfilled: (state, action) => {},
        rejected: (state, action) => {
          state.errorMessage = "Update error";
        },
      }
    ),
    logoutUser: create.asyncThunk(
      async (arg, { rejectWithValue }) => {
        try {
          const response = await axios.get("/api/auth/logout");
          return response.data;
        } catch (error: any) {
          return rejectWithValue(error.response.data);
        }
      },
      {
        pending: (state) => {},
        fulfilled: (state, action) => {},
        rejected: (state, action) => {
          state.errorMessage = "Update error";
        },
      }
    ),
    deleteUser: create.asyncThunk(
      async (deleteUserCredentials: UserCredentials, { rejectWithValue }) => {
        const { id } = deleteUserCredentials;
        try {
          const response = await axios.delete(`api/users/${id}`);
          return response.data;
        } catch (error: any) {
          if (error.response) {
            return rejectWithValue(error.response.data);
          } else {
            return rejectWithValue({ message: "Network Error" });
          }
        }
      },
      {
        pending: (state) => {},
        fulfilled: (state, action) => {
          state.users = state.users.filter((user) => user.id !== action.meta.arg.id);
        },
        rejected: (state, action) => {
          state.errorMessage = "Failed to delete user";
        },
      }
    ),
  }),
  selectors: {
    selectCurrentUser: (state) => state.users,
    selectErrorMessage: (state) => state.errorMessage,
  },
});

export const usersSliceActions = usersSlice.actions;
// export const usersSliceSelectors = usersSlice.selectors;
export  const usersSliceSelectors = usersSlice.selectors;