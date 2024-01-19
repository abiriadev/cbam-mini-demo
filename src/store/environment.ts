import { createSlice } from '@reduxjs/toolkit'

export interface Environment {
	isIframe: boolean
	state: 'empty' | 'generated'
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
		generate: state => void (state.state = 'generated'),
	},
})

export const {
	actions: { setIframe, generate },
	reducer,
} = cbamSlice
