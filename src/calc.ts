import { RootState } from './store'
import { CbamState } from './store/cbam'

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

export const empty: Nemesia = {
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
	environment: { state },
}: RootState): Nemesia =>
	state === 'generated' ? calc(cbam) : empty

export const calc = (cbam: CbamState): Nemesia => {
	const res: Partial<Nemesia> = {}

	res.a_1 = cbam.a_1

	res.a_2 = cbam.a_2

	res.a_3_1 = cbam.a_3_1
	res.a_3_2 = cbam.a_3_2
	res.a_3_3 = cbam.a_3_3

	res.a_4_1 = { ...cbam.a_4_1, precursors: [] }
	res.a_4_2 = cbam.a_4_2

	res.a_5 = cbam.a_5

	res.b_1 = {
		list: cbam.b_1.list.map(r => {
			const res = emInstCombustion({
				ad: r.ad,
				ef: 1,
				ncv: r.ncv,
				oxf: 100,
				bioc: 0,
			})

			return {
				id: r.id,
				method: r.method,
				name: r.name,
				ad: r.ad,
				ncv: r.ncv,
				fossil: res.fossil,
				bio: res.bio,
				content_fossil: res.ec_fossil,
				content_bio: res.ec_bio,
			}
		}),
	}

	res.d = { list: [] }
	res.s1_2_1 = { list: [] }
	res.s1_2_2_1 = { list: [] }
	res.s2 = { list: [] }

	// res.b_1 = cbam.b_1

	return res as Nemesia
}

export interface EmInstCombustionInput {
	ad: number
	ef: number
	ncv: number
	oxf: number
	bioc: number
}

export interface EmInstCombustionOutput {
	fossil: number
	bio: number
	ec_fossil: number
	ec_bio: number
}

export const emInstCombustion = ({
	ad,
	ef,
	ncv,
	oxf,
	bioc,
}: EmInstCombustionInput): EmInstCombustionOutput => {
	const oxfn = oxf / 100
	const bf = bioc / 100
	const bf_1 = 1 - bf
	const ef_new = ef * bf_1
	const ef_new_bio = ef * bf

	return {
		fossil: ad * ef_new * oxfn,
		bio: ad * ef_new_bio * oxfn,
		ec_fossil: ((ad * ncv) / 1000) * bf_1,
		ec_bio: ((ad * ncv) / 1000) * bf,
	}
}
