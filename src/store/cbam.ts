import { createSlice } from '@reduxjs/toolkit'
import { nemesiaInit } from '@/data'

export interface Emission {
	direct: number
	indirect: number
}

export const ZeroEmission: Emission = {
	direct: 0,
	indirect: 0,
}

export const totalEmission = ({
	direct,
	indirect,
}: Emission) => direct + indirect

export interface ImpExp {
	imported: Usage
	exported: Usage
}

export interface Usage {
	amount: number
	emissionFactor: number
}

export const totalUsage = ({
	amount,
	emissionFactor,
}: Usage) => amount * emissionFactor

export const AgcKindSet = [
	'Cement',
	'Cement clinker',
	'Calcined clays',
	'Aluminous cement',
	'Iron or steel products',
	'Crude steel',
	'Direct reduced iron',
	'Pig iron',
	'Alloys',
	'Sintered Ore',
	'Hydrogen',
	'Ammonia',
	'Nitric acid',
	'Urea',
	'Mixed fertilizers',
	'Aluminium products',
	'Unwrought aluminium',
	'Electricity',
] as const

export type AgcKind = (typeof AgcKindSet)[number]

export const cc = [
	'AD',
	'AE',
	'AF',
	'AG',
	'AI',
	'AL',
	'AM',
	'AN',
	'AO',
	'AQ',
	'AR',
	'AS',
	'AT',
	'AU',
	'AW',
	'AX',
	'AZ',
]

export interface CbamState {
	a_1: {
		start: Date
		end: Date
	}
	a_2: {
		name: string
		name_en: string
		street: string
		economic: string
		zip: string
		po: string
		city: string
		country: string
		unlocode: string
		latitude: string
		longitude: string
		representative: string
		email: string
		telephone: string
	}
	a_3_1: {
		name: string
		street: string
		city: string
		zip: string
		country: string
	}
	a_3_2: {
		name: string
		email: string
		telephone: string
		fax: string
	}
	a_3_3: {
		state: string
		accreditation: string
		reg: string
	}
	a_4_1: {
		list: Array<{
			id: string
			kind: string
			routes_kind: string
			routes: Array<string>
		}>
	}
	a_4_2: {
		list: Array<{
			id: string
			name: string
			agc: string
			included: Array<string>
		}>
	}
	a_5: {
		list: Array<{
			id: string
			name: string
			agc: string
			country: string
			routes: Array<string>
		}>
	}
	b_1: {
		list: Array<{
			id: string
			method: string
			name: string
			ad: number
			ncv: number
		}>
	}
	d: {
		list: Array<{
			id: string
			name: string
			direm: number
			activity_level: number
			heat: {
				imported: {
					amount: number
					emissionFactor: number
				}
				exported: {
					amount: number
					emissionFactor: number
				}
			}
			wg: {
				imported: {
					amount: number
				}
				exported: {
					amount: number
				}
			}
		}>
	}
	s2: {
		list: Array<{
			id: string
			name: string
			agc: string
			cn: string
			product_name: string
			see_d: number
			see_i: number
			see_t: number
			unit: string
			share: number
			source: string
			ee: number
		}>
	}
}

export const cbamSlice = createSlice({
	name: 'cbam',
	initialState: nemesiaInit,
	reducers: {},
})

export const chooseUniqueName = (
	nameSet: Array<string>,
	desiredName: string,
) => {
	let uq = desiredName

	if (!nameSet.includes(uq)) return uq

	for (
		let i = 1;
		nameSet.includes((uq = `${desiredName} (${i})`));
		++i
	) {}

	return uq
}

export const {
	actions: {},
	reducer,
} = cbamSlice
