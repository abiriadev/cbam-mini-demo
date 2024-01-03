import { configureStore } from '@reduxjs/toolkit'
import { reducer } from './store/cbam'

export const store = configureStore({
	reducer: {
		cbam: reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
