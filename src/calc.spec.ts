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
				bioc: 0,
			}),
		).toEqual({
			fossil: 200,
			bio: 0,
		})
	})

	it('combustion 2', () => {
		expect(
			emInstCombustion({
				ad: 100,
				ef: 2,
				bioc: 20,
			}),
		).toEqual({
			fossil: 160,
			bio: 40,
		})
	})
})
