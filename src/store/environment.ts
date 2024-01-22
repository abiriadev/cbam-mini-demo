import { createSlice } from '@reduxjs/toolkit'

export interface Environment {
	isIframe: boolean
	state: 'empty' | 'calculating' | 'generated'
}

const testIframe = () => window.self !== window.top

const initialState: Environment = {
	isIframe: testIframe(),
	state: 'empty',
}

export const cbamSlice = createSlice({
	name: 'environment',
	initialState,
	reducers: {
		setIframe: state => void (state.isIframe = true),
		calculate: state =>
			void (state.state = 'calculating'),
		generate: state => void (state.state = 'generated'),
	},
})

export const {
	actions: { setIframe, calculate, generate },
	reducer,
} = cbamSlice
