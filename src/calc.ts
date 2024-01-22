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

const init: Nemesia = {
	a_1: {
		start: new Date('2023-01-01'),
		end: new Date('2023-12-31'),
	},
	a_2: {
		name: '김해공장',
		name_en: 'factory Gimhae',
		street: '158-7, Golden root-ro, Juchon-myeon, Gimhae-si, Gyeongsangnam-do, Republic of Korea',
		economic: '??',
		zip: '50969',
		po: 'Gimhae',
		city: 'Seoul',
		country: 'Republic of Korea',
		unlocode: 'KR SEL',
		latitude: '35.22070',
		longitude: '128.8264',
		representative: 'lca_manager',
		email: 'hello@example.com',
		telephone: '010-1234-5678',
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
				id: '1',
				kind: 'Cement',
				routes_kind: 'All production routes',
				routes: [],
			},
			{
				id: '2',
				kind: 'Crude steel',
				routes_kind: 'Manual',
				routes: [
					'Basic oxygen steelmaking',
					'Electric arc furnace',
				],
			},
			{
				id: '3',
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
	a_5: {
		list: [
			{
				id: '1',
				name: 'precursor 1',
				agc: 'Cement',
				country: 'KR',
				routes: ['A', 'B'],
			},
		],
	},
	b_1: {
		list: [
			{
				id: '1',
				method: 'Combustion',
				name: 'stream name',
				ad: 123,
				ncv: 435,
				fossil: 12432,
				bio: 45,
				content_fossil: 4,
				content_bio: 558,
			},
			{
				id: '2',
				method: 'Combustion',
				name: 'stream name 2',
				ad: 123,
				ncv: 435,
				fossil: 12432,
				bio: 45,
				content_fossil: 4,
				content_bio: 558,
			},
			{
				id: '3',
				method: 'Combustion',
				name: 'stream name 3',
				ad: 123,
				ncv: 435,
				fossil: 12432,
				bio: 45,
				content_fossil: 4,
				content_bio: 558,
			},
		],
	},
	d: {
		list: [
			{
				id: '1',
				name: 'process',
				direm: 132,
				activity_level: 353,
				heat: {
					imported: {
						amount: 2343,
						emissionFactor: 2343,
					},
					exported: {
						amount: 243,
						emissionFactor: 35353,
					},
				},
				wg: {
					imported: {
						amount: 35353,
					},
					exported: {
						amount: 35353,
					},
				},
			},
		],
	},
	s1_2_1: {
		list: [
			{
				id: '1',
				process: 'process 1',
				agc: 'Cement',
				direm: 1232,
				heat: 53,
				wg: 6543,
				direct: 353,
				indirect: 353,
			},
			{
				id: '2',
				process: 'process 2',
				agc: 'Crude steel',
				direm: 1232,
				heat: 53,
				wg: 6543,
				direct: 353,
				indirect: 353,
			},
		],
	},
	s1_2_2_1: {
		list: [
			{
				id: '1',
				name: 'process 1',
				se: {
					direct: 123,
					indirect: 4546,
				},
				see: {
					direct: 53,
					indirect: 35,
				},
				ee: {
					direct: 353,
					indirect: 353,
				},
			},
			{
				id: '2',
				name: 'process 2',
				se: {
					direct: 123,
					indirect: 4546,
				},
				see: {
					direct: 53,
					indirect: 35,
				},
				ee: {
					direct: 353,
					indirect: 353,
				},
			},
			{
				id: '3',
				name: 'process 3',
				se: {
					direct: 123,
					indirect: 4546,
				},
				see: {
					direct: 53,
					indirect: 35,
				},
				ee: {
					direct: 353,
					indirect: 353,
				},
			},
			{
				id: '4',
				name: 'process 4',
				se: {
					direct: 123,
					indirect: 4546,
				},
				see: {
					direct: 53,
					indirect: 35,
				},
				ee: {
					direct: 353,
					indirect: 353,
				},
			},
		],
	},
	s2: {
		list: [
			{
				id: '1',
				name: 'process 1',
				agc: 'Cement',
				cn: '1233 55 66',
				product_name: 'Cement prod',
				see_d: 123,
				see_i: 34,
				see_t: 588,
				unit: 't',
				share: 33,
				source: 'Mix',
				ee: 353,
			},
			{
				id: '2',
				name: 'process 2',
				agc: 'Cement',
				cn: '1233 55 66',
				product_name: 'Cement prod',
				see_d: 123,
				see_i: 34,
				see_t: 588,
				unit: 't',
				share: 33,
				source: 'Mix',
				ee: 353,
			},
			{
				id: '3',
				name: 'process 3',
				agc: 'Cement',
				cn: '1233 55 66',
				product_name: 'Cement prod',
				see_d: 123,
				see_i: 34,
				see_t: 588,
				unit: 't',
				share: 33,
				source: 'Mix',
				ee: 353,
			},
		],
	},
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
	return environment.state === 'empty' ? empty : init
}
