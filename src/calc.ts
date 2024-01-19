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
}

export const selectNemesia = ({ cbam }: RootState) => {
	return init
}
