import { sum } from '@/utils'

interface State {
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
	see: Emission
}

interface ProcessRes {
	se: Emission
	see: Emission
}

type CbamCache = {
	processes: Record<Id, ProcessRes>
}

const calcProcess = (
	{
		ad,
		direm,
		heat,
		wg,
		precursors: { purchased_precursors },
	}: Process,
	pps: Record<Id, PurchasedPrecursor>,
): ProcessRes => {
	const heatRes =
		heat.imported * heat.ef_imported -
		heat.exported * heat.ef_exported
	const wgRes =
		wg.imported * wg.ef_imported -
		wg.exported * wg.ef_exported

	const attr_d = direm + heatRes + wgRes

	const ee_d =
		attr_d +
		sum(
			Object.entries(purchased_precursors).map(
				([k, v]) => pps[k].see.direct * v.amount,
			),
		)

	return {
		se: newEmission(attr_d / ad, 0),
		see: newEmission(ee_d / ad, 0),
	}
}

const calc = (
	{ processes, purchased_precursors }: State,
	cache: CbamCache,
) => {
	for (const id in processes) {
		cache.processes[id] = calcProcess(
			processes[id],
			purchased_precursors,
		)
	}
}
