import { CORR, EFNG } from '@/constants'
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

interface Process {
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
	amount: number
}

interface PurchasedPrecursor {
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

export const newCache = (ids: Array<Id>): CbamCache => ({
	processes: Object.fromEntries(
		ids.map(id => [
			id,
			{
				heat: null,
				wg: null,
				attr: {
					direct: null,
					indirect: null,
				},
				ee: {
					direct: null,
					indirect: null,
				},
				se: {
					direct: null,
					indirect: null,
				},
				see: {
					direct: null,
					indirect: null,
				},
			},
		]),
	),
})

export const calcCache = (cache: CbamCache, state: State) =>
	void Object.entries(state.processes).forEach(([k]) =>
		calcProcessCache(cache, state, k),
	)

const calcProcessCache = (
	cache: CbamCache,
	state: State,
	pid: Id,
) => {
	const { ad, direm, heat, wg, electricity, precursors } =
		state.processes[pid]

	const heatRes =
		heat.imported * heat.ef_imported -
		heat.exported * heat.ef_exported
	cache.processes[pid].heat = heatRes

	const wgRes = (wg.imported - wg.exported * CORR) * EFNG
	cache.processes[pid].wg = wgRes

	const elecRes =
		electricity.exported * electricity.ef_exported

	const attr_d = direm + heatRes + wgRes - elecRes
	const attr_i =
		electricity.imported * electricity.ef_imported
	cache.processes[pid].attr = newEmission(attr_d, attr_i)

	const [pp_d, pp_i] = zip(
		...Object.entries(
			precursors.purchased_precursors,
		).map(([k, { amount }]) => [
			state.purchased_precursors[k].see.direct *
				amount,
			state.purchased_precursors[k].see.indirect *
				amount,
		]),
	)

	const [p_d, p_i] = zip(
		...Object.entries(precursors.processes).map(
			([k, { amount }]) => {
				let see = cache.processes[k].see

				if (see.direct === null) {
					calcProcessCache(cache, state, k)
					see = cache.processes[k].see
				}

				return [
					see.direct! * amount,
					see.indirect! * amount,
				]
			},
		),
	)

	const ee_d = attr_d + sum(pp_d) + sum(p_d)
	const ee_i = attr_i + sum(pp_i) + sum(p_i)
	cache.processes[pid].ee = newEmission(ee_d, ee_i)

	const se_d = attr_d / ad
	const se_i = attr_i / ad
	cache.processes[pid].se = newEmission(se_d, se_i)

	const see_d = ee_d / ad
	const see_i = ee_i / ad
	cache.processes[pid].see = newEmission(see_d, see_i)
}
