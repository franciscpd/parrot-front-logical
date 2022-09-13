import {
  createSlice,
  configureStore,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

import { User } from "../types/user";
import { Post } from "../types/post";

type AuthState = {
  user?: User;
  token?: string;
};

type PostState = {
  posts?: Post[];
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

const postSlice = createSlice({
  name: "post",
  initialState: {
    posts: [],
  } as PostState,
  reducers: {
    addPost: (state, { payload }: PayloadAction<Partial<Post>>) => {
      state.posts = [
        ...(state.posts || []),
        {
          ...payload,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ];
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export const { addPost } = postSlice.actions;

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  post: postSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: !import.meta.env.PROD,
});

export type RootState = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);

export const getCurrentUser = (state: RootState) => state.auth.user;
