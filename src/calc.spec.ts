import { selectNemesia } from '@/calc'
import { CbamState } from '@/store/cbam'
import { RootState } from '@/store'
import { initialState } from '@/store/cbam'

const genRootState = (cbam: CbamState): RootState => ({
	cbam,
	environment: { state: 'generated', isIframe: false },
})

test('A', () => {
	expect(
		selectNemesia(genRootState(initialState)),
	).toHaveProperty('s2.list.length', 0)
})
