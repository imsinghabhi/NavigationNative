// src/app/store.ts
import { configureStore } from '@reduxjs/toolkit';
import { createEpicMiddleware, combineEpics, Epic } from 'redux-observable';
import userReducer from '../features/users/userSlice';
import { userEpic } from '../features/users/userEpic';

import { UserActions } from '../features/users/userEpic';

const rootEpic: Epic<UserActions, UserActions> = combineEpics(userEpic);
const epicMiddleware = createEpicMiddleware<UserActions, UserActions>();

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

epicMiddleware.run(rootEpic);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
