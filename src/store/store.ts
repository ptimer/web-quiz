import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './features/apiSlice'
import { setupListeners } from '@reduxjs/toolkit/query'
import quizSliceReducer from './features/quizSlice'

export const store = configureStore({
  reducer: {
    quiz: quizSliceReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

setupListeners(store.dispatch)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
