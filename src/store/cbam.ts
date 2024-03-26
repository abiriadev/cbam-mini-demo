import { CbamInput } from '@/excel-api'
import { createSlice } from '@reduxjs/toolkit'

export interface CbamState {
	i: CbamInput
	o: CbamOutput
}

export interface CbamOutput {}

const zeroback: CbamState = {
	i: todo!(),
	o: todo!(),
}

export const cbamSlice = createSlice({
	name: 'cbam',
	initialState: zeroBack,
	reducers: {},
})

export const {
	actions: {},
	reducer,
} = cbamSlice
