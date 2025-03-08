import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "./store";
const storedUsername = localStorage.getItem("username");

interface UserState {
  username: string;
}
const initialState: UserState = {
  username: storedUsername || "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action: PayloadAction<string>) {
      state.username = action.payload;
      localStorage.setItem("username", action.payload);
    },
  },
});

export const { updateName } = userSlice.actions;
export const username = (state: AppState) => state.user.username;
export default userSlice.reducer;
