import { CbamInput } from '@/excel-api'
import { createSlice } from '@reduxjs/toolkit'
import { res_i, res_o } from './cbam/data'

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
	state: 'blank',
}

export const cbamSlice = createSlice({
	name: 'cbam',
	initialState: initialState as CbamState,
	reducers: {
		calculate: state =>
			void (state.state = 'calculating'),
		// @ts-ignore
		generate: () => ({
			state: 'generated',
			i: res_i,
			o: res_o,
		}),
	},
})

export const {
	actions: { calculate, generate },
	reducer,
} = cbamSlice
