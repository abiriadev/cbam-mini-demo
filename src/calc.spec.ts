import { calc } from '@/calc'
import { CbamState } from '@/store/cbam'
import { RootState } from '@/store'
import { initialState } from '@/store/cbam'

const genRootState = (cbam: CbamState): RootState => ({
	cbam,
	environment: { state: 'generated', isIframe: false },
})

it('A', () => {
	expect(calc(initialState)).toHaveProperty('s2.list', [])
})

// it('should produce same output as the sheet', () => {
// 	expect(calc(initialState)).toEqual({
// 		{
//
// 		}
// 	})
// })
