import { configureStore } from '@reduxjs/toolkit'
import { reducer as cbam } from './store/cbam'
import { reducer as environment } from './store/environment'

export const store = configureStore({
	reducer: {
		cbam,
		environment,
	},
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
