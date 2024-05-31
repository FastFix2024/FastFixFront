import { createAppSlice } from "../../createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { ExistingUserData, ExistingUsersSliceState } from "./types";

const usersInitialState: ExistingUsersSliceState = {
  users: [],
};

export const loginFormSlice = createAppSlice({
    name: "EXISTING_USER",
    initialState: usersInitialState,
      reducers: create => ({
          loginUser: create.reducer((state: ExistingUsersSliceState, action: PayloadAction<ExistingUserData>) => {
              state.users = [...state.users, action.payload]
        })
      }),
      selectors: {
          users: (state:ExistingUsersSliceState) => state.users
      }
  })
  
  export const loginUserSliceActions = loginFormSlice.actions
  export const loginUserSliceSelectors = loginFormSlice.selectors