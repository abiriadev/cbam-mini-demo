import { createSlice } from '@reduxjs/toolkit'

export interface Environment {
	isIframe: boolean
}

const initialState: Environment = {
	isIframe: false,
}

export const cbamSlice = createSlice({
	name: 'environment',
	initialState,
	reducers: {
		setIframe: state => void (state.isIframe = true),
	},
})

export const {
	actions: { setIframe },
	reducer,
} = cbamSlice
