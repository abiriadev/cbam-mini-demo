import { CbamInput } from '@/excel-api'
import { createSlice } from '@reduxjs/toolkit'

export interface CbamState {
	isBlank: boolean
	i?: CbamInput
	o?: CbamOutput
}

export interface CbamOutput {}

const initialState: CbamState = {
	isBlank: true,
}

export const cbamSlice = createSlice({
	name: 'cbam',
	initialState,
	reducers: {},
})

export const {
	actions: {},
	reducer,
} = cbamSlice
