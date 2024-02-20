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
		processes: Array<Precursor>
		purchased_precursors: Array<Precursor>
	}
}

interface Precursor {
	ref: Id
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

const calcProcess = (process: Process): ProcessRes => {
	// todo!()

	return {
		se: newEmission(1, 2),
		see: newEmission(3, 4),
	}
}

// const calc = (state: State) => {
//
// }
