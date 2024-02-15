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
		economic: '$58,000,00',
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
		name: 'Authorization Company',
		street: '158-7, Golden root-ro, Juchon-myeon, Gimhae-si, Gyeongsangnam-do, Republic of Korea',
		city: 'Seoul',
		zip: '50969',
		country: 'Republic of Korea',
	},
	a_3_2: {
		name: 'John Doe',
		email: 'hello@example.com',
		telephone: '010-1234-5678',
		fax: '379834943',
	},
	a_3_3: {
		state: 'Representative',
		accreditation: 'J.D. Yoman',
		reg: '1445298',
	},
	a_4_1: {
		list: [
			{
				id: '1',
				kind: 'Aluminium products',
				routes_kind: 'All production routes',
				routes: [
					'Steam reforming and partial oxidation',
					'Electrolysis of water',
					'Chior-Alkali electrolysis and production of chiorales',
				],
			},
			{
				id: '2',
				kind: 'Unwrought aluminium',
				routes_kind: 'Manual',
				routes: [
					'Primary smelting',
					'Secondary melting',
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
			{
				id: '4',
				kind: 'Crude steel',
				routes_kind: 'Manual',
				routes: [
					'Basic oxygen steelmaking',
					'Electric arc furnace',
				],
			},
			{
				id: '5',
				kind: 'Iron or steel products',
				routes_kind: 'Manual',
				routes: [
					'Haber-Bosch process with steam reforming of natural gas or biogas',
					'Haber-Bosch process with gasification of coal or other fuels',
				],
			},
		],
		precursors: [],
	},
	a_4_2: {
		list: [
			{
				id: '1',
				name: '선철제조공정',
				agc: 'Pig Iron',
				included: [],
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
				agc: 'Ammonia',
				included: [],
			},
			{
				id: '4',
				name: 'Process 3',
				agc: 'Unwrought aluminium',
				included: [],
			},
			{
				id: '5',
				name: 'Process 3',
				agc: 'Iron or steel products',
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
				routes: ['Route 1', 'Route 2', 'Route 3'],
			},
			{
				id: '2',
				name: 'precursor 2',
				agc: 'Cement',
				country: 'KR',
				routes: ['Route 1'],
			},
			{
				id: '3',
				name: 'precursor 3',
				agc: 'Cement',
				country: 'KR',
				routes: ['Route 1', 'Route 2'],
			},
		],
	},
	b_1: {
		list: [
			{
				id: '1',
				method: 'Combustion',
				name: 'stream name',
				ad: 223,
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
				ad: 909,
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
				ad: 88,
				ncv: 435,
				fossil: 12432,
				bio: 45,
				content_fossil: 4,
				content_bio: 558,
			},
		],
	},
	c_2_a: {
		co2: 123,
		biomass: 123,
		n2o: 123213,
		direct: 213,
		pfc: 123,
	},
	d: {
		list: [
			{
				id: '1',
				name: 'process',
				direm: 132,
				activity_level: 35,
				heat: {
					imported: {
						amount: 211,
						emissionFactor: 2343,
					},
					exported: {
						amount: 243,
						emissionFactor: 31,
					},
				},
				wg: {
					imported: {
						amount: 3,
					},
					exported: {
						amount: 30,
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
				direm: 343,
				heat: 13,
				wg: 6543,
				direct: 33,
				indirect: 3,
			},
			{
				id: '2',
				process: 'process 2',
				agc: 'Crude steel',
				direm: 232,
				heat: 6.6,
				wg: 6543,
				direct: 3.3,
				indirect: 335,
			},
		],
	},
	s1_2_2_1: {
		list: [
			{
				id: '1',
				name: 'process 1',
				se: {
					direct: 899,
					indirect: 4546,
				},
				see: {
					direct: 1,
					indirect: 35,
				},
				ee: {
					direct: 89,
					indirect: 35.3,
				},
			},
			{
				id: '2',
				name: 'process 2',
				se: {
					direct: 9,
					indirect: 4546,
				},
				see: {
					direct: 0,
					indirect: 35,
				},
				ee: {
					direct: 323.3,
					indirect: 22.3,
				},
			},
			{
				id: '3',
				name: 'process 3',
				se: {
					direct: 0,
					indirect: 4546,
				},
				see: {
					direct: 35,
					indirect: 35,
				},
				ee: {
					direct: 348.4,
					indirect: 434.5,
				},
			},
			{
				id: '4',
				name: 'process 4',
				se: {
					direct: 4584,
					indirect: 4546,
				},
				see: {
					direct: 22,
					indirect: 35,
				},
				ee: {
					direct: 95.4,
					indirect: 3,
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
				cn: '56 55 66',
				product_name: 'Cement prod',
				see_d: 1205,
				see_i: 90,
				see_t: 55,
				unit: 't',
				share: 2323,
				source: 'Mix',
				ee: 0,
			},
			{
				id: '2',
				name: 'process 2',
				agc: 'Cement',
				cn: '583 55 66',
				product_name: 'Cement prod',
				see_d: 494,
				see_i: 12,
				see_t: 6.3,
				unit: 't',
				share: 384.4,
				source: 'Mix',
				ee: 5.6,
			},
			{
				id: '3',
				name: 'process 3',
				agc: 'Cement',
				cn: '9842 55 66',
				product_name: 'Cement prod',
				see_d: 584,
				see_i: 98,
				see_t: 664.3,
				unit: 't',
				share: 98,
				source: 'Mix',
				ee: 99.4,
			},
		],
	},
}
