import { nemesiaInit } from './data'
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
			id: string
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
	a_5: {
		list: Array<{
			id: string
			name: string
			agc: string
			country: string
			routes: Array<string>
		}>
	}
	b_1: {
		list: Array<{
			id: string
			method: string
			name: string
			ad: number
			ncv: number
			fossil: number
			bio: number
			content_fossil: number
			content_bio: number
		}>
	}
	d: {
		list: Array<{
			id: string
			name: string
			direm: number
			activity_level: number
			heat: {
				imported: {
					amount: number
					emissionFactor: number
				}
				exported: {
					amount: number
					emissionFactor: number
				}
			}
			wg: {
				imported: {
					amount: number
				}
				exported: {
					amount: number
				}
			}
		}>
	}
	s1_2_1: {
		list: Array<{
			id: string
			process: string
			agc: string
			direm: number
			heat: number
			wg: number
			direct: number
			indirect: number
		}>
	}
	s1_2_2_1: {
		list: Array<{
			id: string
			name: string
			se: {
				direct: number
				indirect: number
			}
			see: {
				direct: number
				indirect: number
			}
			ee: {
				direct: number
				indirect: number
			}
		}>
	}
	s2: {
		list: Array<{
			id: string
			name: string
			agc: string
			cn: string
			product_name: string
			see_d: number
			see_i: number
			see_t: number
			unit: string
			share: number
			source: string
			ee: number
		}>
	}
}

const empty = {
	a_1: {
		start: new Date(),
		end: new Date(),
	},
	a_2: {
		name: '',
		name_en: '',
		street: '',
		economic: '',
		zip: '',
		po: '',
		city: '',
		country: '',
		unlocode: '',
		latitude: '',
		longitude: '',
		representative: '',
		email: '',
		telephone: '',
	},
	a_3_1: {
		name: '',
		street: '',
		city: '',
		zip: '',
		country: '',
	},
	a_3_2: { name: '', email: '', telephone: '', fax: '' },
	a_3_3: { state: '', accreditation: '', reg: '' },
	a_4_1: { list: [], precursors: [] },
	a_4_2: { list: [] },
	a_5: { list: [] },
	b_1: { list: [] },
	d: { list: [] },
	s1_2_1: { list: [] },
	s1_2_2_1: { list: [] },
	s2: { list: [] },
}

export const selectNemesia = ({
	cbam,
	environment,
}: RootState) => {
	return environment.state === 'empty' ? empty : nemesiaInit
}
