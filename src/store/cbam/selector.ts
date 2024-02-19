import { createSelector } from '@reduxjs/toolkit'

interface State {
	processes: Record<Id, Process>
	purchased_precursors: Record<Id, PurchasedPrecursor>
}

interface Emission {
	direct: number
	indirect: number
}

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

const byId = <T>(_: T, id: Id) => id

const selectProcessById = createSelector(
	[({ processes }: State) => processes, byId],
	(processes, id) => processes[id],
)

const selectPurchasedPrecursors = createSelector(
	[
		({ purchased_precursors }: State) =>
			purchased_precursors,
	],
	purchased_precursors => purchased_precursors,
)

const selectPurchasedPrecursorById = createSelector(
	[selectPurchasedPrecursors, byId],
	(purchased_precursors, id) => purchased_precursors[id],
)

const selectDiremById = createSelector(
	[selectProcessById],
	({ direm }) => direm,
)

const selectHeatById = createSelector(
	[selectProcessById],
	({
		heat: {
			imported,
			exported,
			ef_imported,
			ef_exported,
		},
	}) => imported * ef_imported - exported * ef_exported,
)

const selectWgById = createSelector(
	[selectProcessById],
	({
		wg: {
			imported,
			exported,
			ef_imported,
			ef_exported,
		},
	}) => imported * ef_imported - exported * ef_exported,
)

const selectAttrById = createSelector(
	[selectDiremById, selectHeatById, selectWgById],
	(direm, heat, wg) => direm + heat + wg,
)

const selectPrecursorsById = createSelector(
	[selectProcessById],
	({ precursors }) => precursors,
)

const selectEeById = createSelector(
	[
		selectAttrById,
		selectPrecursorsById,
		selectPurchasedPrecursors,
	],
	(attr, precursors, purchased_precursors) => {
		precursors.purchased_precursors.map(
			({ ref, amount }) =>
				purchased_precursors[ref].see.direct *
				amount,
		)
	},
)
