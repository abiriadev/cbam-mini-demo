import { CbamInput } from '@/excel-api'
import { createSlice } from '@reduxjs/toolkit'
import { zeroback_i, zeroback_o } from './cbam/data'

export interface CbamState {
	i: CbamInput
	o: CbamOutput
}

export interface CbamOutput {}

const zeroback: CbamState = {
	i: zeroback_i,
	o: zeroback_o,
}

export const cbamSlice = createSlice({
	name: 'cbam',
	initialState: zeroback,
	reducers: {},
})

export const {
	actions: {},
	reducer,
} = cbamSlice
