import { CbamInput } from '@/excel-api'
import { createSlice } from '@reduxjs/toolkit'

export type CbamState =
	| {
			state: 'blank'
	  }
	| {
			state: 'calculating'
	  }
	| {
			state: 'generated'
			i: CbamInput
			o: CbamOutput
	  }

export interface CbamOutput {}

const initialState: CbamState = {
	state: 'calculating',
}

export const cbamSlice = createSlice({
	name: 'cbam',
	initialState: initialState as CbamState,
	reducers: {
		calculate: state =>
			void (state.state = 'calculating'),
		generate: state => void (state.state = 'generated'),
	},
})

export const {
	actions: { calculate, generate },
	reducer,
} = cbamSlice
