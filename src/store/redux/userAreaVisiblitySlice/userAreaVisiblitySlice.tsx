import { createAppSlice } from "../../createAppSlice"
import { userAreaVisibilitySliceState } from "./types"

const userAreaVisibilityState: userAreaVisibilitySliceState = {
  isVisible: undefined,
}

export const userAreaVisibilityAppSlice = createAppSlice({
  name: "LOGIN_VISIBILITY",
  initialState: userAreaVisibilityState,
  reducers: create => ({
    makeFormsInvisible: create.reducer(() => userAreaVisibilityState),
    makeFormsVisible: create.reducer(
      (state: userAreaVisibilitySliceState) => {
        state.isVisible = true
      },
    ),
    }),
    selectors: {
        loginVisibilityState: (state: userAreaVisibilitySliceState) => state,
        
  }
})
console.log('SLICE LOG',userAreaVisibilityState.isVisible)

export const userAreaVisibilitySliceActions = userAreaVisibilityAppSlice.actions
export const userAreaVisibilitySliceSelectors = userAreaVisibilityAppSlice.selectors