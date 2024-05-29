import { createAppSlice } from "../../createAppSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { NewUserData, UsersSliceState } from "./types";

const usersInitialState: UsersSliceState = {
  users: [],
};

export const registerFormSlice = createAppSlice({
  name: "NEW_USER",
  initialState: usersInitialState,
  reducers: (create) => ({
    addUser: create.reducer((state: UsersSliceState, action: PayloadAction<NewUserData>) => {
      state.users = [...state.users, action.payload];
    }),
  }),
  selectors: {
    users: (state: UsersSliceState) => state.users,
  },
});

export const registerNewuserSliceActions = registerFormSlice.actions;
export const registerNewuserSliceSelectors = registerFormSlice.selectors;
