import { calc, emInstCombustion } from '@/calc'
import { CbamState } from '@/store/cbam'
import { RootState } from '@/store'
// import { initialState } from '@/store/cbam'

const genRootState = (cbam: CbamState): RootState => ({
	cbam,
	environment: { state: 'generated', isIframe: false },
})

// it('A', () => {
// 	expect(calc(initialState)).toHaveProperty('s2.list', [])
// })

describe('emInst', () => {
	it('combustion 1', () => {
		expect(
			emInstCombustion({
				ad: 100,
				ef: 2,
				ncv: 0,
				bioc: 0,
			}),
		).toEqual({
			fossil: 200,
			bio: 0,
			ec_fossil: 0,
			ec_bio: 0,
		})
	})

	it('combustion 2', () => {
		expect(
			emInstCombustion({
				ad: 100,
				ef: 2,
				ncv: 0,
				bioc: 20,
			}),
		).toEqual({
			fossil: 160,
			bio: 40,
			ec_fossil: 0,
			ec_bio: 0,
		})
	})

	it('combustion 3', () => {
		expect(
			emInstCombustion({
				ad: 200,
				ef: 2,
				ncv: 0,
				bioc: 40,
			}),
		).toEqual({
			fossil: 240,
			bio: 160,
			ec_fossil: 0,
			ec_bio: 0,
		})
	})

	it('combustion 4', () => {
		expect(
			emInstCombustion({
				ad: 100,
				ef: 1,
				ncv: 123,
				bioc: 0,
			}),
		).toEqual({
			fossil: 100,
			bio: 0,
			ec_fossil: 12.3,
			ec_bio: 0,
		})
	})

	it('combustion 5', () => {
		expect(
			emInstCombustion({
				ad: 100,
				ef: 1,
				ncv: 123,
				bioc: 30,
			}),
		).toEqual({
			fossil: 70,
			bio: 30,
			ec_fossil: 8.6,
			ec_bio: 3.7,
		})
	})
})
