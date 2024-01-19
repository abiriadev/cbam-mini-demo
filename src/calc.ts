import { RootState } from './store'

export interface Nemesia {
	a_1: {
		start: Date
		end: Date
	}
	a_2: {
		name: string
		name_en: string
		street: string
		economic: string
		zip: string
		po: string
		city: string
		country: string
		unlocode: string
		latitude: string
		longitude: string
		representative: string
		email: string
		telephone: string
	}
	a_3_1: {
		name: string
		street: string
		city: string
		zip: string
		country: string
	}
	a_3_2: {
		name: string
		email: string
		telephone: string
		fax: string
	}
	a_3_3: {
		state: string
		accreditation: string
		reg: string
	}
	a_4_1: {
		list: Array<{
			kind: string
			routes_kind: string
			routes: Array<string>
		}>
		precursors: Array<string>
	}
	a_4_2: {
		list: Array<{
			id: string
			name: string
			agc: string
			included: Array<string>
		}>
	}
}

const init: Nemesia = {
	a_1: {
		start: new Date('2023-01-01'),
		end: new Date('2023-12-31'),
	},
	a_2: {
		name: 'name',
		name_en: 'name_en',
		street: 'street',
		economic: '??',
		zip: '12345',
		po: 'po box',
		city: 'Seoul',
		country: 'Republic of Korea',
		unlocode: '11??',
		latitude: '123',
		longitude: '1123',
		representative: '??',
		email: 'aaa@aaa.com',
		telephone: '232323',
	},
	a_3_1: {
		name: 'name',
		street: 'street',
		city: 'city',
		zip: 'zip',
		country: 'Republic of Korea',
	},
	a_3_2: {
		name: 'name',
		email: 'email',
		telephone: '010-1212!??',
		fax: '????',
	},
	a_3_3: {
		state: 'state',
		accreditation: 'accreditation',
		reg: '123232',
	},
	a_4_1: {
		list: [
			{
				kind: 'Cement',
				routes_kind: 'All production routes',
				routes: [],
			},
			{
				kind: 'Crude steel',
				routes_kind: 'Manual',
				routes: [
					'Basic oxygen steelmaking',
					'Electric arc furnace',
				],
			},
			{
				kind: 'Pig iron',
				routes_kind: 'Manual',
				routes: [
					'Blast furnace route',
					'Smelting reduction',
				],
			},
		],
		precursors: [],
	},
	a_4_2: {
		list: [
			{
				id: '1',
				name: 'Process 1',
				agc: 'Cement',
				included: ['Cement clinker'],
			},
			{
				id: '2',
				name: 'Process 2',
				agc: 'Crude steel',
				included: [],
			},
			{
				id: '3',
				name: 'Process 3',
				agc: 'Pig iron',
				included: [],
			},
		],
	},
}

export const selectNemesia = ({ cbam }: RootState) => {
	return init
}
