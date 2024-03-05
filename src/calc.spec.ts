import {
	EmInstCombustionInput,
	calc,
	emInstCombustion,
} from '@/calc'
import { CbamState } from '@/store/cbam'
import { RootState } from '@/store'
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
	it('a', () => {
		const cache = newCache(['p1'])

		const state: State = {
			processes: {
				p1: {
					name: 'p1',
					id: 'p1',
					ad: 100,
					direm: 123,
					heat: {
						imported: 12,
						exported: 12,
						ef_imported: 1,
						ef_exported: 2,
					},
					wg: {
						imported: 12,
						exported: 12,
						ef_imported: 1,
						ef_exported: 2,
					},
					electricity: {
						imported: 12,
						exported: 12,
						ef_imported: 1,
						ef_exported: 2,
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
	})
})
