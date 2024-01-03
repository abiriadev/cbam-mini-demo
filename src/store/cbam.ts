import {
	createSlice,
	PayloadAction,
} from '@reduxjs/toolkit'
import { CORR, EFNG } from '../constants'
import { relu } from '../utils'

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

export interface ProcessState {
	id: string
	name: string
	direm: number
	activity_level: number
	heat: ImpExp
	wasteGas: ImpExp
	precursors: Record<string, PrecursorUsage>
	// results
	attrHeat: number
	attrWg: number
	attr: Emission
}

export interface PrecursorState {
	id: string
	name: string
	see: Emission
}

export interface PrecursorUsage {
	amount: number
}

export interface CbamState {
	processes: Array<ProcessState>
	precursors: Array<PrecursorState>
}

const initialState: CbamState = {
	processes: [],
	precursors: [],
}

export const cbamSlice = createSlice({
	name: 'cbam',
	initialState,
	reducers: {
		addProcess: (
			{ processes },
			{ payload }: PayloadAction<ProcessState>,
		) => void processes.push(payload),

		addNewProcess: ({ processes }) =>
			void processes.push({
				id: crypto.randomUUID(),
				name: chooseUniqueName(
					processes.map(({ name }) => name),
					'new process',
				),
				direm: 0,
				activity_level: 0,
				heat: {
					imported: {
						amount: 0,
						emissionFactor: 0,
					},
					exported: {
						amount: 0,
						emissionFactor: 0,
					},
				},
				wasteGas: {
					imported: {
						amount: 0,
						emissionFactor: EFNG,
					},
					exported: {
						amount: 0,
						emissionFactor: EFNG,
					},
				},
				precursors: {},
				// results
				// TODO: call calc?
				attrHeat: 0,
				attrWg: 0,
				attr: ZeroEmission,
			}),

		updateProcessName: (
			{ processes },
			{
				payload: { pid, name },
			}: PayloadAction<{
				pid: string
				name: string
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) processes[i].name = name
		},

		updateDirem: (
			{ processes },
			{
				payload: { pid, direm },
			}: PayloadAction<{
				pid: string
				direm: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].direm = direm
				calcProcess(processes[i])
			}
		},

		updateActivityLevel: (
			{ processes },
			{
				payload: { pid, activity_level },
			}: PayloadAction<{
				pid: string
				activity_level: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].activity_level = activity_level
				calcProcess(processes[i])
			}
		},

		updateImportedMeasurableHeatAmount: (
			{ processes },
			{
				payload: { pid, amount },
			}: PayloadAction<{
				pid: string
				amount: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].heat.imported.amount = amount
				calcProcess(processes[i])
			}
		},

		updateImportedMeasurableHeatEf: (
			{ processes },
			{
				payload: { pid, ef },
			}: PayloadAction<{
				pid: string
				ef: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].heat.imported.emissionFactor =
					ef
				calcProcess(processes[i])
			}
		},

		updateExportedMeasurableHeatAmount: (
			{ processes },
			{
				payload: { pid, amount },
			}: PayloadAction<{
				pid: string
				amount: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].heat.exported.amount = amount
				calcProcess(processes[i])
			}
		},

		updateExportedMeasurableHeatEf: (
			{ processes },
			{
				payload: { pid, ef },
			}: PayloadAction<{
				pid: string
				ef: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].heat.exported.emissionFactor =
					ef
				calcProcess(processes[i])
			}
		},

		updateImportedWasteGasAmount: (
			{ processes },
			{
				payload: { pid, amount },
			}: PayloadAction<{
				pid: string
				amount: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].wasteGas.imported.amount =
					amount
				calcProcess(processes[i])
			}
		},

		updateExportedWasteGasAmount: (
			{ processes },
			{
				payload: { pid, amount },
			}: PayloadAction<{
				pid: string
				amount: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].wasteGas.exported.amount =
					amount
				calcProcess(processes[i])
			}
		},

		addPrecursorToProcess: (
			{ processes },
			{
				payload: { pid, ppid },
			}: PayloadAction<{
				pid: string
				ppid: string
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].precursors[ppid] = {
					amount: 0,
				}
				calcProcess(processes[i])
			}
		},

		updatePrecursorAmount: (
			{ processes },
			{
				payload: { pid, ppid, amount },
			}: PayloadAction<{
				pid: string
				ppid: string
				amount: number
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				processes[i].precursors[ppid].amount =
					amount
				calcProcess(processes[i])
			}
		},

		removePrecursorFromProcess: (
			{ processes },
			{
				payload: { pid, ppid },
			}: PayloadAction<{
				pid: string
				ppid: string
			}>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === pid,
			)
			if (i !== -1) {
				delete processes[i].precursors[ppid]
				calcProcess(processes[i])
			}
		},

		removeProcess: (
			{ processes },
			{ payload }: PayloadAction<string>,
		) => {
			const i = processes.findIndex(
				({ id }) => id === payload,
			)
			if (i !== -1) processes.splice(i, 1)
		},

		addPrecursor: (
			{ precursors },
			{ payload }: PayloadAction<PrecursorState>,
		) => void precursors.push(payload),

		addNewPrecursor: ({ precursors }) =>
			void precursors.push({
				id: crypto.randomUUID(),
				name: chooseUniqueName(
					precursors.map(({ name }) => name),
					'new precursor',
				),
				see: ZeroEmission,
			}),

		updatePrecursorName: (
			{ precursors },
			{
				payload: { ppid, name },
			}: PayloadAction<{
				ppid: string
				name: string
			}>,
		) => {
			const i = precursors.findIndex(
				({ id }) => id === ppid,
			)
			if (i !== -1) precursors[i].name = name
		},

		updatePrecursorDirectSee: (
			{ precursors, processes },
			{
				payload: { ppid, see_d },
			}: PayloadAction<{
				ppid: string
				see_d: number
			}>,
		) => {
			const i = precursors.findIndex(
				({ id }) => id === ppid,
			)
			if (i !== -1) {
				precursors[i].see.direct = see_d
				processes.forEach(calcProcess)
			}
		},

		updatePrecursorIndirectSee: (
			{ precursors, processes },
			{
				payload: { ppid, see_i },
			}: PayloadAction<{
				ppid: string
				see_i: number
			}>,
		) => {
			const i = precursors.findIndex(
				({ id }) => id === ppid,
			)
			if (i !== -1) {
				precursors[i].see.indirect = see_i
				processes.forEach(calcProcess)
			}
		},

		removePrecursor: (
			{ processes, precursors },
			{ payload }: PayloadAction<string>,
		) => {
			const i = precursors.findIndex(
				({ id }) => id === payload,
			)
			if (i !== -1) precursors.splice(i, 1)
			processes.forEach(p =>
				Object.entries(p.precursors)
					.map(([pp]) => pp)
					.filter(k => k === payload)
					.forEach(
						pp => (
							delete p.precursors[pp],
							calcProcess(p)
						),
					),
			)
		},
	},
})

const calcProcess = (p: ProcessState) => calcAttr(p)

const calcAttr = (p: ProcessState) => {
	p.attrHeat =
		totalUsage(p.heat.imported) -
		totalUsage(p.heat.exported)
	p.attrWg =
		totalUsage(p.wasteGas.imported) -
		totalUsage(p.wasteGas.exported) * CORR

	p.attr = {
		direct: relu(p.direm + p.attrHeat + p.attrWg),
		indirect: 0,
	}
}

export const findPrecursorById = (
	pps: Array<PrecursorState>,
	id: string,
) => {
	const i = pps.findIndex(pp => pp.id === id)
	return i !== -1 ? pps[i] : null
}

export const precursorMapToArray = (
	pps: Array<PrecursorState>,
	pp: Record<string, PrecursorUsage>,
) =>
	Object.keys(pp)
		.map(k => findPrecursorById(pps, k))
		.filter((v): v is PrecursorState => v !== null)

export const precursorMapToUsageArray = (
	pps: Array<PrecursorState>,
	pp: Record<string, PrecursorUsage>,
) =>
	Object.entries(pp)
		.map(([k, v]) => [findPrecursorById(pps, k), v])
		.filter(
			(v): v is [PrecursorState, PrecursorUsage] =>
				v[0] !== null,
		)

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
	actions: {
		addProcess,
		addPrecursor,
		addNewProcess,
		removeProcess,
		updateDirem,
		updateActivityLevel,
		updateProcessName,
		addNewPrecursor,
		updatePrecursorName,
		addPrecursorToProcess,
		removePrecursor,
		removePrecursorFromProcess,
		updatePrecursorAmount,
		updatePrecursorDirectSee,
		updatePrecursorIndirectSee,
		updateImportedMeasurableHeatAmount,
		updateImportedMeasurableHeatEf,
		updateExportedMeasurableHeatAmount,
		updateExportedMeasurableHeatEf,
		updateImportedWasteGasAmount,
		updateExportedWasteGasAmount,
	},
	reducer,
} = cbamSlice
