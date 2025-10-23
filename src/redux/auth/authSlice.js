import { createSlice } from "@reduxjs/toolkit";

const userFromStorage = JSON.parse(localStorage.getItem("user")) || null;

const initialState = {
  user: userFromStorage,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logOut: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logOut } = authSlice.actions;
export default authSlice.reducer;
