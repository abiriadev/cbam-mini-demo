import {
	EmInstCombustionInput,
	emInstCombustion,
} from '@/calc'
import { toBeDeepCloseTo } from 'jest-matcher-deep-close-to'
import {
	State,
	calcCache,
	newCache,
} from './store/cbam/rec'
// import { initialState } from '@/store/cbam'

// const genRootState = (cbam: CbamState): RootState => ({
// 	cbam,
// 	environment: { state: 'generated', isIframe: false },
// })

// it('A', () => {
// 	expect(calc(initialState)).toHaveProperty('s2.list', [])
// })

const SANE_PRECISION = 1.6

expect.extend({
	toBeDeepCloseTo,
})

describe('emInst', () => {
	const base: EmInstCombustionInput = {
		ad: 100,
		ef: 1,
		ncv: 0,
		oxf: 100,
		bioc: 0,
	}

	it('combustion 1', () => {
		expect(
			emInstCombustion({
				...base,
				ef: 2,
			}),
		).toBeDeepCloseTo({
			fossil: 200,
			bio: 0,
			ec_fossil: 0,
			ec_bio: 0,
		})
	})

	// 시트에 문제 있음;
	it.skip('combustion 2', () => {
		expect(
			emInstCombustion({
				...base,
				ef: 2,
				oxf: 70,
			}),
		).toBeDeepCloseTo({
			fossil: 200,
			bio: 0,
			ec_fossil: 0,
			ec_bio: 0,
		})
	})

	it('combustion 3', () => {
		expect(
			emInstCombustion({
				...base,
				ef: 2,
				bioc: 20,
			}),
		).toBeDeepCloseTo({
			fossil: 160,
			bio: 40,
			ec_fossil: 0,
			ec_bio: 0,
		})
	})

	it('combustion 4', () => {
		expect(
			emInstCombustion({
				...base,
				ad: 200,
				ef: 2,
				bioc: 40,
			}),
		).toBeDeepCloseTo({
			fossil: 240,
			bio: 160,
			ec_fossil: 0,
			ec_bio: 0,
		})
	})

	it('combustion 5', () => {
		expect(
			emInstCombustion({
				...base,
				ncv: 123,
			}),
		).toBeDeepCloseTo({
			fossil: 100,
			bio: 0,
			ec_fossil: 12.3,
			ec_bio: 0,
		})
	})

	it('combustion 6', () => {
		expect(
			emInstCombustion({
				...base,
				ncv: 123,
				bioc: 30,
			}),
		).toBeDeepCloseTo(
			{
				fossil: 70,
				bio: 30,
				ec_fossil: 8.6,
				ec_bio: 3.7,
			},
			SANE_PRECISION,
		)
	})
})

describe('rec', () => {
	it('basic', () => {
		const id = 'p1'
		const cache = newCache([id])

		const state: State = {
			processes: {
				p1: {
					name: id,
					ad: 100,
					direm: 123,
					heat: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
					},
					wg: {
						imported: 0,
						exported: 0,
					},
					electricity: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
						ef_source_imported: '',
					},
					precursors: {
						processes: {},
						purchased_precursors: {},
					},
				},
			},
			purchased_precursors: {},
		}

		calcCache(cache, state)

		expect(cache.processes[id].se.direct).toBeCloseTo(
			1.23,
		)
		expect(cache.processes[id].see.direct).toBeCloseTo(
			1.23,
		)
		expect(cache.processes[id].ee.direct).toBeCloseTo(
			123,
		)
	})

	it('wg', () => {
		const id = 'p1'
		const cache = newCache([id])

		const state: State = {
			processes: {
				p1: {
					name: id,
					ad: 100,
					direm: 123,
					heat: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
					},
					wg: {
						imported: 12,
						exported: 8.6,
					},
					electricity: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
						ef_source_imported: '',
					},
					precursors: {
						processes: {},
						purchased_precursors: {},
					},
				},
			},
			purchased_precursors: {},
		}

		calcCache(cache, state)

		expect(cache.processes[id].se.direct).toBeCloseTo(
			4.744,
		)
		expect(cache.processes[id].see.direct).toBeCloseTo(
			4.744,
		)
		expect(
			Math.round(cache.processes[id].ee.direct!),
		).toBeCloseTo(474)
	})

	it('heat', () => {
		const id = 'p1'
		const cache = newCache([id])

		const state: State = {
			processes: {
				p1: {
					name: id,
					ad: 100,
					direm: 123,
					heat: {
						imported: 45,
						exported: 66,
						ef_imported: 1.2,
						ef_exported: 0.8,
					},
					wg: {
						imported: 0,
						exported: 0,
					},
					electricity: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
						ef_source_imported: '',
					},
					precursors: {
						processes: {},
						purchased_precursors: {},
					},
				},
			},
			purchased_precursors: {},
		}

		calcCache(cache, state)

		expect(cache.processes[id].se.direct).toBeCloseTo(
			1.242,
		)
		expect(cache.processes[id].see.direct).toBeCloseTo(
			1.242,
		)
		expect(
			Math.round(cache.processes[id].ee.direct!),
		).toBeCloseTo(124)
	})

	it('electricity', () => {
		const id = 'p1'
		const cache = newCache([id])

		const state: State = {
			processes: {
				p1: {
					name: id,
					ad: 100,
					direm: 123,
					heat: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
					},
					wg: {
						imported: 0,
						exported: 0,
					},
					electricity: {
						imported: 71,
						exported: 44,
						ef_imported: 0.9,
						ef_exported: 0.64,
						ef_source_imported: '',
					},
					precursors: {
						processes: {},
						purchased_precursors: {},
					},
				},
			},
			purchased_precursors: {},
		}

		calcCache(cache, state)

		expect(cache.processes[id].se.direct).toBeCloseTo(
			0.948,
		)
		expect(cache.processes[id].se.indirect).toBeCloseTo(
			0.639,
		)
		expect(cache.processes[id].see.direct).toBeCloseTo(
			0.948,
		)
		expect(
			cache.processes[id].see.indirect,
		).toBeCloseTo(0.639)
		expect(
			Math.round(cache.processes[id].ee.direct!),
		).toBeCloseTo(95)
		expect(
			Math.round(cache.processes[id].ee.indirect!),
		).toBeCloseTo(64)
	})

	it('purchased precursor', () => {
		const p1 = 'p1'
		const pp1 = 'pp1'
		const cache = newCache([p1])

		const state: State = {
			processes: {
				p1: {
					name: p1,
					ad: 100,
					direm: 123,
					heat: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
					},
					wg: {
						imported: 0,
						exported: 0,
					},
					electricity: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
						ef_source_imported: '',
					},
					precursors: {
						processes: {},
						purchased_precursors: {
							pp1: {
								amount: 30,
							},
						},
					},
				},
			},
			purchased_precursors: {
				pp1: {
					name: pp1,
					see: {
						direct: 41.3,
						indirect: 32.2,
					},
				},
			},
		}

		calcCache(cache, state)

		expect(cache.processes[p1].se.direct).toBeCloseTo(
			1.23,
		)
		expect(cache.processes[p1].see.direct).toBeCloseTo(
			13.62,
		)
		expect(
			cache.processes[p1].see.indirect,
		).toBeCloseTo(9.66)

		expect(
			Math.round(cache.processes[p1].ee.direct!),
		).toBeCloseTo(1362)
		expect(
			Math.round(cache.processes[p1].ee.indirect!),
		).toBeCloseTo(966)
	})

	it('process precursor', () => {
		const p1 = 'p1'
		const p2 = 'p2'
		const cache = newCache([p1, p2])

		const state: State = {
			processes: {
				p1: {
					name: p1,
					ad: 100,
					direm: 123,
					heat: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
					},
					wg: {
						imported: 0,
						exported: 0,
					},
					electricity: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
						ef_source_imported: '',
					},
					precursors: {
						processes: {
							p2: {
								amount: 15,
							},
						},
						purchased_precursors: {},
					},
				},
				p2: {
					name: p2,
					ad: 20,
					direm: 88,
					heat: {
						imported: 0,
						exported: 0,
						ef_imported: 0,
						ef_exported: 0,
					},
					wg: {
						imported: 0,
						exported: 0,
					},
					electricity: {
						imported: 12,
						exported: 0,
						ef_imported: 1,
						ef_exported: 0,
						ef_source_imported: '',
					},
					precursors: {
						processes: {},
						purchased_precursors: {},
					},
				},
			},
			purchased_precursors: {},
		}

		calcCache(cache, state)

		expect(cache.processes[p1].se.direct).toBeCloseTo(
			1.23,
		)
		expect(cache.processes[p1].see.direct).toBeCloseTo(
			1.89,
		)
		expect(
			cache.processes[p1].see.indirect,
		).toBeCloseTo(0.09)
		expect(
			Math.round(cache.processes[p1].ee.direct!),
		).toBeCloseTo(189)
		expect(
			Math.round(cache.processes[p1].ee.indirect!),
		).toBeCloseTo(9)

		expect(cache.processes[p2].se.direct).toBeCloseTo(
			4.4,
		)
		expect(cache.processes[p2].se.indirect).toBeCloseTo(
			0.6,
		)
		expect(cache.processes[p2].see.direct).toBeCloseTo(
			4.4,
		)
		expect(
			cache.processes[p2].see.indirect,
		).toBeCloseTo(0.6)
		expect(
			Math.round(cache.processes[p2].ee.direct!),
		).toBeCloseTo(88)
		expect(
			Math.round(cache.processes[p2].ee.indirect!),
		).toBeCloseTo(12)
	})
})
