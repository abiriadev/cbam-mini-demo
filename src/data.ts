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