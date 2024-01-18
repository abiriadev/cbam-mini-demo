/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** CBAM 계산 */
export interface CBAM {
	/**
	 * CBAM 보고 기간
	 * @example {"start":"2023-01-01T00:00:00.000Z","end":"2023-12-31T00:00:00.000Z"}
	 */
	'reporting-period': {
		/**
		 * CBAM 보고 기간의 시작일
		 * @format date
		 */
		start?: string
		/**
		 * CBAM 보고 기간의 종료일
		 * @format date
		 */
		end?: string
	}
	/** 설비 기본 정보 */
	installation: {
		/**
		 * 설비 명칭
		 * @example "공장 A"
		 */
		name?: string
		/**
		 * 설비 영문 명칭
		 * @example "factory A"
		 */
		'name-en': string
		/** 주소 */
		street?: string
		'economic-activity'?: string
		/** 우편번호 */
		postcode?: number
		/** 우편함 */
		'po-box'?: string
		/**
		 * 설립 도시
		 * @example "Seoul"
		 */
		city?: string
		/** 국가 코드 */
		country: CountryCode
		/**
		 * UN/LO 지역 코드
		 * @example "KR SEL"
		 */
		unlocode: string
		/** 설비의 좌표 */
		coordinates?: {
			latitude?: number
			longitude?: number
		}
		/** 담당자 */
		representative?: string
		/**
		 * 이메일
		 * @format email
		 */
		email?: string
		/**
		 * 연락처
		 * @example "010-1234-5678"
		 */
		telephone?: string
	}
	/** CBAM 보고서 인증기관 정보 */
	verifier: {
		/** 사명 */
		'company-name'?: string
		/** 주소 */
		street?: string
		/** 도시 */
		city?: string
		/** 우편번호 */
		postcode?: string
		/** 국가 */
		country?: string
		/** 담당자 이름 */
		name?: string
		/**
		 * 이메일
		 * @format email
		 */
		email?: string
		/** 연락처 */
		telephone?: string
		/** 팩스 */
		fax?: string
		'accreditation-state'?: string
		'national-accreditation-body'?: string
		'registration-number'?: string
	}
	/** 관련된 집약 상품 카테고리 종류 */
	agcs: {
		/** 집약 상품 카테고리 */
		agc: AGC
		/** 각 집약 상품 카테고리를 생산하는 서로 다른 제조 경로 */
		routes: Route[]
	}[]
	/** 제조 공정 목록 */
	processes: Process[]
	/** 구입한 프리커서 목록 */
	precursors: Precursor[]
	/** 소스 스트림 목록 */
	'source-streams': Stream[]
	/** 온실가스 균형 정보 */
	'ghg-balance': {
		/** 총 CO2 배출량 */
		co2?: number
		/** 총 바이오매스 배출량 */
		biomass?: number
		/** 총 N20 배출량 */
		n2o?: number
		/** 총 PFC 배출량 */
		pfc?: number
		/** 총 직접배출량 */
		direct?: number
		/** 총 간접배출량 */
		indirect: number
	}
}

/** 집약 상품 카테고리 */
export enum AGC {
	Cement = 'Cement',
	CementClinker = 'Cement clinker',
	CalcinedClays = 'Calcined clays',
	AluminousCement = 'Aluminous cement',
	IronOrSteelProducts = 'Iron or steel products',
	CrudeSteel = 'Crude steel',
	DirectReducedIron = 'Direct reduced iron',
	PigIron = 'Pig iron',
	Alloys = 'Alloys',
	SinteredOre = 'Sintered Ore',
	Hydrogen = 'Hydrogen',
	Ammonia = 'Ammonia',
	NitricAcid = 'Nitric acid',
	Urea = 'Urea',
	MixedFertilizers = 'Mixed fertilizers',
	AluminiumProducts = 'Aluminium products',
	UnwroughtAluminium = 'Unwrought aluminium',
	Electricity = 'Electricity',
}

/** 생산 경로 */
export enum Route {
	BasicOxygenSteelmaking = 'Basic oxygen steelmaking',
}

export interface Process {
	/**
	 * 식별자
	 * @format uuid
	 */
	id: string
	/**
	 * 제조 공정 명칭
	 * @example "Process 1"
	 */
	name: string
	/** 집약 상품 카테고리 */
	agc: AGC
	'included-goods': AGC[]
	/** 각 제조 경로별로 생산된 양 */
	'production-level': Record<string, number>
	/** 각 제조 공정에서 소비된 양 */
	consumed: Record<string, number>
	/** 귀속배출량 계산 */
	attr: {
		/** 직접배출량 */
		direm: number
		/** 측정가능한 열 */
		heat?: {
			/** 수입된 열 */
			imported: {
				/** 수입된 양 */
				amount: number
				/** 배출계수 */
				ef: number
			}
			/** 추출된 열 */
			exported: {
				/** 수출된 양 */
				amount: number
				/** 배출계수 */
				ef: number
			}
		}
		/** 폐가스 */
		wg?: {
			/** 수입된 폐가스 */
			imported: {
				/** 수입된 양 */
				amount: number
				/** 배출계수 */
				ef?: number
			}
			/** 수출된 폐가스 */
			exported: {
				/** 수출된 양 */
				amount: number
				/** 배출계수 */
				ef?: number
			}
		}
		/** 전력 */
		electricity: {
			/** 수입된 전력 */
			imported: {
				/** 수입된 양 (MWh) */
				amount: number
				/** 배출계수 */
				ef: number
				/** 배출계수 출처 */
				source:
					| 'D.2.1'
					| 'D.2.2'
					| 'D.2.3'
					| 'D.2.4'
					| 'Mix'
			}
			/** 수출된 전력 (간접배출량) */
			exported: {
				/** 수출된 양 (MWh) */
				amount: number
				/** 배출계수 */
				ef: number
			}
		}
	}
}

/** 프리커서 */
export interface Precursor {
	/**
	 * 식별자
	 * @format uuid
	 */
	id: string
	/** 프리커서 명칭 */
	name: string
	/** 국가 코드 */
	country: CountryCode
	routes: Route[]
	consumed: Record<string, number>
	/** 특정내재배출량 정보 */
	see: {
		/** 특정직접내재배출량 */
		direct: {
			/** 내재배출량 값 (tCO2e/t) */
			value: number
			/** 배출량 출처 */
			source: 'Measured' | 'Default'
		}
		/** 특정간접내재배출량 */
		indirect: {
			/** 내재배출량 값 (tCO2e/t) */
			value: number
			/** 배출량 출처 */
			source:
				| 'D.2.1'
				| 'D.2.2'
				| 'D.2.3'
				| 'D.2.4'
				| 'Mix'
		}
		/** 기본수치를 적용한 이유 */
		justification:
			| 'Unreasonable costs for more accurate monitoring'
			| 'Data gaps'
			| 'Other'
	}
}

export interface Stream {
	/** 배출량 측정 방식 */
	method:
		| 'Combustion'
		| 'Process emissions'
		| 'Mass Balance'
	/** 본 스트림의 명칭 */
	name: string
	/** 소비량 (Activity data) */
	ad: number
	/**
	 * 소비량 단위
	 * @example "t"
	 */
	'ad-unit': 't' | '1000Nm3'
	/** Net calorific value */
	ncv: number
}

/**
 * 국가 코드
 * @example "KR"
 */
export enum CountryCode {
	AD = 'AD',
	AE = 'AE',
	AF = 'AF',
	AG = 'AG',
	AI = 'AI',
	AL = 'AL',
	AM = 'AM',
	AN = 'AN',
	AO = 'AO',
	AQ = 'AQ',
	AR = 'AR',
	AS = 'AS',
	AT = 'AT',
	AU = 'AU',
	AW = 'AW',
	AX = 'AX',
	AZ = 'AZ',
	BA = 'BA',
	BB = 'BB',
	BD = 'BD',
	BE = 'BE',
	BF = 'BF',
	BG = 'BG',
	BH = 'BH',
	BI = 'BI',
	BJ = 'BJ',
	BL = 'BL',
	BM = 'BM',
	BN = 'BN',
	BO = 'BO',
	BQ = 'BQ',
	BR = 'BR',
	BS = 'BS',
	BT = 'BT',
	BV = 'BV',
	BW = 'BW',
	BY = 'BY',
	BZ = 'BZ',
	CA = 'CA',
	CC = 'CC',
	CD = 'CD',
	CF = 'CF',
	CG = 'CG',
	CH = 'CH',
	CI = 'CI',
	CK = 'CK',
	CL = 'CL',
	CM = 'CM',
	CN = 'CN',
	CO = 'CO',
	CR = 'CR',
	CU = 'CU',
	CV = 'CV',
	CW = 'CW',
	CX = 'CX',
	CY = 'CY',
	CZ = 'CZ',
	DE = 'DE',
	DJ = 'DJ',
	DK = 'DK',
	DM = 'DM',
	DO = 'DO',
	DZ = 'DZ',
	EC = 'EC',
	EE = 'EE',
	EG = 'EG',
	EH = 'EH',
	ER = 'ER',
	ES = 'ES',
	ET = 'ET',
	EU = 'EU',
	FI = 'FI',
	FJ = 'FJ',
	FK = 'FK',
	FM = 'FM',
	FO = 'FO',
	FR = 'FR',
	GA = 'GA',
	GB = 'GB',
	GD = 'GD',
	GE = 'GE',
	GF = 'GF',
	GG = 'GG',
	GH = 'GH',
	GI = 'GI',
	GL = 'GL',
	GM = 'GM',
	GN = 'GN',
	GP = 'GP',
	GQ = 'GQ',
	GR = 'GR',
	GS = 'GS',
	GT = 'GT',
	GU = 'GU',
	GW = 'GW',
	GY = 'GY',
	HK = 'HK',
	HM = 'HM',
	HN = 'HN',
	HR = 'HR',
	HT = 'HT',
	HU = 'HU',
	ID = 'ID',
	IE = 'IE',
	IL = 'IL',
	IM = 'IM',
	IN = 'IN',
	IO = 'IO',
	IQ = 'IQ',
	IR = 'IR',
	IS = 'IS',
	IT = 'IT',
	JE = 'JE',
	JM = 'JM',
	JO = 'JO',
	JP = 'JP',
	KE = 'KE',
	KG = 'KG',
	KH = 'KH',
	KI = 'KI',
	KM = 'KM',
	KN = 'KN',
	KP = 'KP',
	KR = 'KR',
	KW = 'KW',
	KY = 'KY',
	KZ = 'KZ',
	LA = 'LA',
	LB = 'LB',
	LC = 'LC',
	LI = 'LI',
	LK = 'LK',
	LR = 'LR',
	LS = 'LS',
	LT = 'LT',
	LU = 'LU',
	LV = 'LV',
	LY = 'LY',
	MA = 'MA',
	MC = 'MC',
	MD = 'MD',
	ME = 'ME',
	MF = 'MF',
	MG = 'MG',
	MH = 'MH',
	MK = 'MK',
	ML = 'ML',
	MM = 'MM',
	MN = 'MN',
	MO = 'MO',
	MP = 'MP',
	MQ = 'MQ',
	MR = 'MR',
	MS = 'MS',
	MT = 'MT',
	MU = 'MU',
	MV = 'MV',
	MW = 'MW',
	MX = 'MX',
	MY = 'MY',
	MZ = 'MZ',
	NA = 'NA',
	NC = 'NC',
	NE = 'NE',
	NF = 'NF',
	NG = 'NG',
	NI = 'NI',
	NL = 'NL',
	NO = 'NO',
	NP = 'NP',
	NR = 'NR',
	NU = 'NU',
	NZ = 'NZ',
	OM = 'OM',
	PA = 'PA',
	PE = 'PE',
	PF = 'PF',
	PG = 'PG',
	PH = 'PH',
	PK = 'PK',
	PL = 'PL',
	PM = 'PM',
	PN = 'PN',
	PR = 'PR',
	PS = 'PS',
	PT = 'PT',
	PW = 'PW',
	PY = 'PY',
	QA = 'QA',
	QP = 'QP',
	RE = 'RE',
	RO = 'RO',
	RS = 'RS',
	RU = 'RU',
	RW = 'RW',
	SA = 'SA',
	SB = 'SB',
	SC = 'SC',
	SD = 'SD',
	SE = 'SE',
	SG = 'SG',
	SH = 'SH',
	SI = 'SI',
	SJ = 'SJ',
	SK = 'SK',
	SL = 'SL',
	SM = 'SM',
	SN = 'SN',
	SO = 'SO',
	SR = 'SR',
	SS = 'SS',
	ST = 'ST',
	SV = 'SV',
	SX = 'SX',
	SY = 'SY',
	SZ = 'SZ',
	TC = 'TC',
	TD = 'TD',
	TF = 'TF',
	TG = 'TG',
	TH = 'TH',
	TJ = 'TJ',
	TK = 'TK',
	TL = 'TL',
	TM = 'TM',
	TN = 'TN',
	TO = 'TO',
	TP = 'TP',
	TR = 'TR',
	TT = 'TT',
	TV = 'TV',
	TW = 'TW',
	TZ = 'TZ',
	UA = 'UA',
	UG = 'UG',
	UM = 'UM',
	US = 'US',
	UY = 'UY',
	UZ = 'UZ',
	VA = 'VA',
	VC = 'VC',
	VE = 'VE',
	VG = 'VG',
	VI = 'VI',
	VN = 'VN',
	VU = 'VU',
	WF = 'WF',
	WS = 'WS',
	XA = 'XA',
	XC = 'XC',
	XI = 'XI',
	XK = 'XK',
	XL = 'XL',
	XM = 'XM',
	XO = 'XO',
	XP = 'XP',
	XR = 'XR',
	XS = 'XS',
	XZ = 'XZ',
	YE = 'YE',
	YT = 'YT',
	YU = 'YU',
	ZA = 'ZA',
	ZM = 'ZM',
	ZR = 'ZR',
	ZW = 'ZW',
}

export type QueryParamsType = Record<string | number, any>
export type ResponseFormat = keyof Omit<
	Body,
	'body' | 'bodyUsed'
>

export interface FullRequestParams
	extends Omit<RequestInit, 'body'> {
	/** set parameter to `true` for call `securityWorker` for this request */
	secure?: boolean
	/** request path */
	path: string
	/** content type of request body */
	type?: ContentType
	/** query params */
	query?: QueryParamsType
	/** format of response (i.e. response.json() -> format: "json") */
	format?: ResponseFormat
	/** request body */
	body?: unknown
	/** base url */
	baseUrl?: string
	/** request cancellation token */
	cancelToken?: CancelToken
}

export type RequestParams = Omit<
	FullRequestParams,
	'body' | 'method' | 'query' | 'path'
>

export interface ApiConfig<SecurityDataType = unknown> {
	baseUrl?: string
	baseApiParams?: Omit<
		RequestParams,
		'baseUrl' | 'cancelToken' | 'signal'
	>
	securityWorker?: (
		securityData: SecurityDataType | null,
	) =>
		| Promise<RequestParams | void>
		| RequestParams
		| void
	customFetch?: typeof fetch
}

export interface HttpResponse<
	D extends unknown,
	E extends unknown = unknown,
> extends Response {
	data: D
	error: E
}

type CancelToken = Symbol | string | number

export enum ContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
	UrlEncoded = 'application/x-www-form-urlencoded',
	Text = 'text/plain',
}

export class HttpClient<SecurityDataType = unknown> {
	public baseUrl: string = ''
	private securityData: SecurityDataType | null = null
	private securityWorker?: ApiConfig<SecurityDataType>['securityWorker']
	private abortControllers = new Map<
		CancelToken,
		AbortController
	>()
	private customFetch = (
		...fetchParams: Parameters<typeof fetch>
	) => fetch(...fetchParams)

	private baseApiParams: RequestParams = {
		credentials: 'same-origin',
		headers: {},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	}

	constructor(
		apiConfig: ApiConfig<SecurityDataType> = {},
	) {
		Object.assign(this, apiConfig)
	}

	public setSecurityData = (
		data: SecurityDataType | null,
	) => {
		this.securityData = data
	}

	protected encodeQueryParam(key: string, value: any) {
		const encodedKey = encodeURIComponent(key)
		return `${encodedKey}=${encodeURIComponent(
			typeof value === 'number' ? value : `${value}`,
		)}`
	}

	protected addQueryParam(
		query: QueryParamsType,
		key: string,
	) {
		return this.encodeQueryParam(key, query[key])
	}

	protected addArrayQueryParam(
		query: QueryParamsType,
		key: string,
	) {
		const value = query[key]
		return value
			.map((v: any) => this.encodeQueryParam(key, v))
			.join('&')
	}

	protected toQueryString(
		rawQuery?: QueryParamsType,
	): string {
		const query = rawQuery || {}
		const keys = Object.keys(query).filter(
			key => 'undefined' !== typeof query[key],
		)
		return keys
			.map(key =>
				Array.isArray(query[key])
					? this.addArrayQueryParam(query, key)
					: this.addQueryParam(query, key),
			)
			.join('&')
	}

	protected addQueryParams(
		rawQuery?: QueryParamsType,
	): string {
		const queryString = this.toQueryString(rawQuery)
		return queryString ? `?${queryString}` : ''
	}

	private contentFormatters: Record<
		ContentType,
		(input: any) => any
	> = {
		[ContentType.Json]: (input: any) =>
			input !== null &&
			(typeof input === 'object' ||
				typeof input === 'string')
				? JSON.stringify(input)
				: input,
		[ContentType.Text]: (input: any) =>
			input !== null && typeof input !== 'string'
				? JSON.stringify(input)
				: input,
		[ContentType.FormData]: (input: any) =>
			Object.keys(input || {}).reduce(
				(formData, key) => {
					const property = input[key]
					formData.append(
						key,
						property instanceof Blob
							? property
							: typeof property ===
									'object' &&
							  property !== null
							? JSON.stringify(property)
							: `${property}`,
					)
					return formData
				},
				new FormData(),
			),
		[ContentType.UrlEncoded]: (input: any) =>
			this.toQueryString(input),
	}

	protected mergeRequestParams(
		params1: RequestParams,
		params2?: RequestParams,
	): RequestParams {
		return {
			...this.baseApiParams,
			...params1,
			...(params2 || {}),
			headers: {
				...(this.baseApiParams.headers || {}),
				...(params1.headers || {}),
				...((params2 && params2.headers) || {}),
			},
		}
	}

	protected createAbortSignal = (
		cancelToken: CancelToken,
	): AbortSignal | undefined => {
		if (this.abortControllers.has(cancelToken)) {
			const abortController =
				this.abortControllers.get(cancelToken)
			if (abortController) {
				return abortController.signal
			}
			return void 0
		}

		const abortController = new AbortController()
		this.abortControllers.set(
			cancelToken,
			abortController,
		)
		return abortController.signal
	}

	public abortRequest = (cancelToken: CancelToken) => {
		const abortController =
			this.abortControllers.get(cancelToken)

		if (abortController) {
			abortController.abort()
			this.abortControllers.delete(cancelToken)
		}
	}

	public request = async <T = any, E = any>({
		body,
		secure,
		path,
		type,
		query,
		format,
		baseUrl,
		cancelToken,
		...params
	}: FullRequestParams): Promise<HttpResponse<T, E>> => {
		const secureParams =
			((typeof secure === 'boolean'
				? secure
				: this.baseApiParams.secure) &&
				this.securityWorker &&
				(await this.securityWorker(
					this.securityData,
				))) ||
			{}
		const requestParams = this.mergeRequestParams(
			params,
			secureParams,
		)
		const queryString =
			query && this.toQueryString(query)
		const payloadFormatter =
			this.contentFormatters[type || ContentType.Json]
		const responseFormat =
			format || requestParams.format

		return this.customFetch(
			`${baseUrl || this.baseUrl || ''}${path}${
				queryString ? `?${queryString}` : ''
			}`,
			{
				...requestParams,
				headers: {
					...(requestParams.headers || {}),
					...(type &&
					type !== ContentType.FormData
						? { 'Content-Type': type }
						: {}),
				},
				signal:
					(cancelToken
						? this.createAbortSignal(
								cancelToken,
						  )
						: requestParams.signal) || null,
				body:
					typeof body === 'undefined' ||
					body === null
						? null
						: payloadFormatter(body),
			},
		).then(async response => {
			const r = response as HttpResponse<T, E>
			r.data = null as unknown as T
			r.error = null as unknown as E

			const data = !responseFormat
				? r
				: await response[responseFormat]()
						.then(data => {
							if (r.ok) {
								r.data = data
							} else {
								r.error = data
							}
							return r
						})
						.catch(e => {
							r.error = e
							return r
						})

			if (cancelToken) {
				this.abortControllers.delete(cancelToken)
			}

			if (!response.ok) throw data
			return data
		})
	}
}

/**
 * @title CBAM demo API
 * @version 0.1.0
 *
 * aa
 */
export class Api<
	SecurityDataType extends unknown,
> extends HttpClient<SecurityDataType> {
	/**
	 * No description
	 *
	 * @name Fetch
	 * @summary Fetch CBAM data
	 * @request GET:/
	 */
	fetch = (params: RequestParams = {}) =>
		this.request<CBAM, any>({
			path: `/`,
			method: 'GET',
			format: 'json',
			...params,
		})
}
