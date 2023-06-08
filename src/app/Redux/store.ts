'use client';

import { configureStore } from '@reduxjs/toolkit';
import contractReducer from './features/contract/contractSlice';

export const store = configureStore({
	reducer: {
		smartContracts: contractReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
