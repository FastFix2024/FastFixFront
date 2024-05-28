import { createAppSlice } from "../../createAppSlice"
import { loginVisibilityInitialStateSclice } from "./types"

const loginVisibilityInitialState: loginVisibilityInitialStateSclice = {
  isVisible: undefined,
}

export const LoginVisibilityAppSlice = createAppSlice({
  name: "LOGIN_VISIBILITY",
  initialState: loginVisibilityInitialState,
  reducers: create => ({
    makeFormsInvisible: create.reducer(() => loginVisibilityInitialState),
    makeFormsVisible: create.reducer(
      (state: loginVisibilityInitialStateSclice) => {
        state.isVisible = true
      },
    ),
    }),
    selectors: {
        loginVisibilityState: (state: loginVisibilityInitialStateSclice) => state,
        
  }
})
console.log('SLICE LOG',loginVisibilityInitialState.isVisible)

export const loginVisibilityActions = LoginVisibilityAppSlice.actions
export const loginVisibilitySelectors = LoginVisibilityAppSlice.selectors