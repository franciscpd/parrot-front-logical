import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";

import { User } from "../types/user";

type AuthState = {
  user?: User;
  token?: string;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    token: undefined,
  } as AuthState,
  reducers: {
    setCredentials: (
      state,
      { payload: { user, token } }: PayloadAction<AuthState>
    ) => {
      state.token = token;
      state.user = user;
    },
  },
});

export const { setCredentials } = authSlice.actions;

const store = configureStore({
  reducer: authSlice.reducer,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;

export const getCurrentUser = (state: RootState) => state.user;
