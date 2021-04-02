import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import DefaultLookReducer from '../features/defaultLook/defaultLookSlice';

export const store = configureStore({
  reducer: DefaultLookReducer
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
