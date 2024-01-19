import { RootState } from './store'

export interface Nemesia {
	a_1: {
		start: Date
		end: Date
	}
}

const init: Nemesia = {
	a_1: {
		start: new Date('2023-01-01'),
		end: new Date('2023-12-31'),
	},
}

export const selectNemesia = ({ cbam }: RootState) => {
	return init
}
