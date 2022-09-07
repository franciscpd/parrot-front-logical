import { createSlice, configureStore, PayloadAction } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

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
    logout: (state) => {
      state.token = undefined;
      state.user = undefined;
    },
  },
});

export const { setCredentials } = authSlice.actions;

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: !import.meta.env.PROD,
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export const getCurrentUser = (state: RootState) => state.user;
