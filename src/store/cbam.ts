import {
	createSelector,
	createSlice,
} from '@reduxjs/toolkit'
import { RootState } from '@/store'
import { sum } from '@/utils'

export interface Emission {
	direct: number
	indirect: number
}

export const newEmission = (
	direct: number,
	indirect: number,
): Emission => ({
	direct,
	indirect,
})

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

type Id = string

export interface InstallationInformation {
	about: {
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
	verifier1: {
		name: string
		street: string
		city: string
		zip: string
		country: string
	}
	verifier2: {
		name: string
		email: string
		telephone: string
		fax: string
	}
	verifier3: {
		state: string
		accreditation: string
		reg: string
	}
}

export interface Agc {
	kind: string
	routes_kind: string
	routes: Array<string>
}

export interface Process {
	name: string
	agc: string
	included: {
		processes: Record<Id, number>
		purchased_precursors: Record<Id, number>
	}
}

export interface ProcessDerived extends Process {
	see?: Emission
}

export interface PurchasedPrecursor {
	name: string
	agc: string
	country: string
	routes: Array<string>
	see: Emission
}

export interface CbamState {
	entities: {
		agcs: Record<Id, Agc>
		processes: Record<Id, Process>
		purchased_precursors: Record<Id, PurchasedPrecursor>
	}
	reporting_period: {
		start: Date
		end: Date
	}
	installation_informations: InstallationInformation
}

export interface CbamStateDerived {
	entities: {
		agcs: Record<Id, Agc>
		processes: Record<Id, ProcessDerived>
		purchased_precursors: Record<Id, PurchasedPrecursor>
	}
	reporting_period: {
		start: Date
		end: Date
	}
	installation_informations: InstallationInformation
}

const a = createSelector(
	[(s: RootState) => s.cbam.entities],
	(e: CbamStateDerived['entities']) => {
		Object.values(e.processes).map(
			(proc: Process): ProcessDerived => {
				return calcProc(proc, e)
			},
		)
	},
)

const calcProc = (
	proc: Process,
	entities: CbamStateDerived['entities'],
): ProcessDerived => {
	// entities.processes[proc]
	const ppcs = sum(
		Object.entries(
			proc.included.purchased_precursors,
		).map(
			([k, v]) =>
				entities.purchased_precursors[k].see
					.direct * v,
		),
	)

	const procs = sum(
		Object.entries(proc.included.processes).map(
			([k, v]) =>
				entities.processes[k].see?.direct! * v,
		),
	)

	const see = ppcs + procs

	return {
		...proc,
		see: newEmission(see, see),
	}
}

const initialState: CbamState = {
	entities: {
		agcs: {},
		processes: {},
		purchased_precursors: {},
	},
	reporting_period: {
		start: new Date(),
		end: new Date(),
	},
	installation_informations: {},
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

export interface CalcAttrInput {
	wg_i: number
	wg_e: number
	heat_i: number
	heat_e: number
	direm: number
}

export interface CalcAttrOutput {
	wg: number
	heat: number
	attr: number
}

export const calcAttr = ({
	direm,
	wg_i,
	wg_e,
	heat_i,
	heat_e,
}: CalcAttrInput): CalcAttrOutput => {
	const wg = wg_i - wg_e
	const heat = heat_i - heat_e

	return {
		attr: direm + wg + heat,
		wg,
		heat,
	}
}
