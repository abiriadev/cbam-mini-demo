import { Nemesia } from './calc'

export const nemesiaInit: Nemesia = {
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
