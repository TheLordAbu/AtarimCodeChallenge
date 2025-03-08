import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";

interface UserState {
  username: string;
}
const initialState: UserState = {
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

export const username = (state: AppState) => state.user.username;
export default userSlice.reducer;
