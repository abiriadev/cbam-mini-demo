import { Nemesia } from '@/calc'
import { nemesiaInit } from '@/data'
import { zip, sum } from 'lodash'

export interface State {
	processes: Record<Id, Process>
	purchased_precursors: Record<Id, PurchasedPrecursor>
}

interface Emission {
	direct: number
	indirect: number
}

const newEmission = (direct: number, indirect: number) => ({
	direct,
	indirect,
})

type Id = string

interface Identifiable {
	id: Id
}

interface Process extends Identifiable {
	name: string
	ad: number
	direm: number
	heat: {
		imported: number
		exported: number
		ef_imported: number
		ef_exported: number
	}
	wg: {
		imported: number
		exported: number
		ef_imported: number
		ef_exported: number
	}
	electricity: {
		imported: number
		ef_imported: number
		ef_source_imported: string
		exported: number
		ef_exported: number
	}
	precursors: {
		processes: Record<Id, Precursor>
		purchased_precursors: Record<Id, Precursor>
	}
}

interface Precursor {
	// ref: Id
	amount: number
}

interface PurchasedPrecursor extends Identifiable {
	name: string
	see: Emission
}

type LeafMaybeNull<T> = {
	[P in keyof T]: T[P] extends (infer I)[]
		? LeafMaybeNull<I>[]
		: T[P] extends object
		? LeafMaybeNull<T[P]>
		: T[P] | null
}

type CbamCache = {
	processes: Record<
		Id,
		LeafMaybeNull<{
			heat: number
			wg: number
			attr: Emission
			ee: Emission
			se: Emission
			see: Emission
		}>
	>
}

const calcCache = (cache: CbamCache, state: State) =>
	void Object.entries(state.processes).forEach(([k]) =>
		calcProcessCache(cache, state, k),
	)

const calcProcessCache = (
	cache: CbamCache,
	state: State,
	pid: Id,
) => {
	const { id, ad, heat, wg, direm, precursors } =
		state.processes[pid]

	const heatRes =
		heat.imported * heat.ef_imported -
		heat.exported * heat.ef_exported
	cache.processes[id].heat = heatRes

	const wgRes =
		wg.imported * wg.ef_imported -
		wg.exported * wg.ef_exported
	cache.processes[id].wg = wgRes

	const attr_d = direm + heatRes + wgRes
	const attr_i = 0
	cache.processes[id].attr = newEmission(attr_d, attr_i)

	const [pp_d, pp_i] = zip(
		Object.entries(precursors.purchased_precursors).map(
			([k, { amount }]) => [
				state.purchased_precursors[k].see.direct *
					amount,
				state.purchased_precursors[k].see.indirect *
					amount,
			],
		),
	)

	const [p_d, p_i] = zip(
		Object.entries(precursors.processes).map(
			([k, { amount }]) => {
				const see =
					cache.processes[k].see ??
					(calcProcessCache(cache, state, k),
					cache.processes[k].see)

				return [
					see.direct! * amount,
					see.indirect! * amount,
				]
			},
		),
	)

	const ee_d = attr_d + sum(pp_d) + sum(p_d)
	const ee_i = attr_i + sum(pp_i) + sum(p_i)
	cache.processes[id].ee = newEmission(ee_d, ee_i)

	const se_d = attr_d / ad
	const se_i = attr_i / ad
	cache.processes[id].se = newEmission(se_d, se_i)

	const see_d = ee_d / ad
	const see_i = ee_i / ad
	cache.processes[id].see = newEmission(see_d, see_i)
}

// export const recCalc = (
// 	{ processes, purchased_precursors }: State,
// 	cache: CbamCache,
// ): Nemesia => {
// 	for (const id in processes) {
// 		cache.processes[id] = calcProcess(
// 			processes[id],
// 			purchased_precursors,
// 		)
// 	}
//
// 	return {
// 		...nemesiaInit,
// 		s1_2_2_1: {
// 			list: Object.entries(processes).map(
// 				([k, v]) => ({
// 					id: k,
// 					name: v.name,
// 					se: cache.processes[k].se,
// 					see: cache.processes[k].see,
// 					ee: cache.processes[k].se,
// 				}),
// 			),
// 		},
// 		s1_2_2_2: {
// 			list: Object.entries(purchased_precursors).map(
// 				([k, v]) => ({
// 					id: k,
// 					name: v.name,
// 					se: v.see,
// 					see: v.see,
// 				}),
// 			),
// 		},
// 	}
// }

type a = {
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
