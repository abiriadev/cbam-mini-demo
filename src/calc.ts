import { createSelector } from '@reduxjs/toolkit'
import { RootState } from './store'
import { CbamState } from './store/cbam'
import { sum } from './utils'
import { nemesiaInit } from './data'
import { recCalc } from './store/cbam/rec'

export interface Nemesia {
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
		precursors: Array<string>
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
			fossil: number
			bio: number
			content_fossil: number
			content_bio: number
		}>
	}
	c_2_a: {
		co2: number
		biomass: number
		n2o: number
		pfc: number
		direct: number
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
	s1_2_1: {
		list: Array<{
			id: string
			process: string
			agc: string
			direm: number
			heat: number
			wg: number
			direct: number
			indirect: number
		}>
	}
	s1_2_2_1: {
		list: Array<{
			id: string
			name: string
			se: {
				direct: number
				indirect: number
			}
			see: {
				direct: number
				indirect: number
			}
			ee: {
				direct: number
				indirect: number
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

export const empty: Nemesia = {
	// reporting period
	a_1: {
		start: new Date(),
		end: new Date(),
	},
	// about the installation
	a_2: {
		name: '',
		name_en: '',
		street: '',
		economic: '',
		zip: '',
		po: '',
		city: '',
		country: '',
		unlocode: '',
		latitude: '',
		longitude: '',
		representative: '',
		email: '',
		telephone: '',
	},
	a_3_1: {
		name: '',
		street: '',
		city: '',
		zip: '',
		country: '',
	},
	a_3_2: { name: '', email: '', telephone: '', fax: '' },
	a_3_3: { state: '', accreditation: '', reg: '' },
	a_4_1: { list: [], precursors: [] },
	a_4_2: { list: [] },
	a_5: { list: [] },
	b_1: { list: [] },
	c_2_a: {
		co2: 0,
		biomass: 0,
		n2o: 0,
		pfc: 0,
		direct: 0,
	},
	d: { list: [] },
	s1_2_1: { list: [] },
	s1_2_2_1: { list: [] },
	s2: { list: [] },
}

export const selectNemesia = ({
	cbam,
	environment: { state },
}: RootState): Nemesia =>
	state === 'generated' ? calc(cbam) : empty

export const calc = (cbam: CbamState): Nemesia => {
	// const res: Partial<Nemesia> = nemesiaInit
	//
	// let acc = 0
	// let acc_bio = 0
	//
	// res.b_1 = {
	// 	list: [],
	// 	// .map(r => {
	// 	// 	const res = emInstCombustion({
	// 	// 		ad: r.ad,
	// 	// 		ef: 1,
	// 	// 		ncv: r.ncv,
	// 	// 		oxf: 100,
	// 	// 		bioc: 0,
	// 	// 	})
	// 	//
	// 	// 	acc += res.fossil
	// 	// 	acc_bio += res.bio
	// 	//
	// 	// 	return {
	// 	// 		id: r.id,
	// 	// 		method: r.method,
	// 	// 		name: r.name,
	// 	// 		ad: r.ad,
	// 	// 		ncv: r.ncv,
	// 	// 		fossil: res.fossil,
	// 	// 		bio: res.bio,
	// 	// 		content_fossil: res.ec_fossil,
	// 	// 		content_bio: res.ec_bio,
	// 	// 	}
	// 	// }),
	// }
	//
	// res.c_2_a = {
	// 	co2: acc,
	// 	biomass: acc_bio,
	// 	n2o: 0,
	// 	pfc: 0,
	// 	direct: acc,
	// }
	//
	// res.d = { list: [] }
	// res.s1_2_1 = { list: [] }
	// res.s1_2_2_1 = { list: [] }
	// res.s2 = { list: [] }
	//
	// // res.b_1 = cbam.b_1

	// const stateRJKLkk//w'h
	const cache = {}

	const res = recCalc(state, cache)

	return res as Nemesia
}

export interface EmInstCombustionInput {
	ad: number
	ef: number
	ncv: number
	oxf: number
	bioc: number
}

export interface EmInstCombustionOutput {
	fossil: number
	bio: number
	ec_fossil: number
	ec_bio: number
}

export const emInstCombustion = ({
	ad,
	ef,
	ncv,
	oxf,
	bioc,
}: EmInstCombustionInput): EmInstCombustionOutput => {
	const oxfn = oxf / 100
	const bf = bioc / 100
	const bf_1 = 1 - bf
	const ef_new = ef * bf_1
	const ef_new_bio = ef * bf

	return {
		fossil: ad * ef_new * oxfn,
		bio: ad * ef_new_bio * oxfn,
		ec_fossil: ((ad * ncv) / 1000) * bf_1,
		ec_bio: ((ad * ncv) / 1000) * bf,
	}
}

interface Process {
	id: string
	direm: number
	precursors: {
		purchased: Array<{
			id: string
			amount: number
		}>
		process: Array<{
			id: string
			amount: number
		}>
	}
}

interface PurchasedPrecursor {
	see: number
}

interface Processes {
	list: Array<Process>
}

interface PurchasedPrecursors {
	list: Array<PurchasedPrecursor>
}

interface Cache<T> {
	ps: Record<string, T>
	pps: Record<string, T>
}

const calcProcessSee = (
	process: Process,
	pps: PurchasedPrecursors,
	cache: Map<string, number>,
) => {
	sum(
		process.precursors.process.map(
			({ id, amount }) => cache.get(id)! * amount,
		),
	)
}

createSelector([(s: RootState) => s.cbam], () => {})
