/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
	'/': {
		/** Excel 파일 생성 요청 */
		post: operations['generateExcel']
	}
}

export type webhooks = Record<string, never>

export interface components {
	schemas: {
		/**
		 * @example {
		 *   "a": {
		 *     "reporting_period": {
		 *       "start": "2024-01-01T00:00:00.000Z",
		 *       "end": "2024-12-31T00:00:00.000Z"
		 *     },
		 *     "about_the_installation": {
		 *       "name_of_the_installation": "김해공장",
		 *       "name_of_the_installation_english": "factory Gimhae",
		 *       "street_number": "158-7, Golden root-ro, Juchon-myeon, Gimhae-si, Gyeongsangnam-do, Republic of Korea",
		 *       "economic_activity": "$58,000,00",
		 *       "post_code": 50969,
		 *       "po_box": "Gimhae",
		 *       "city": "Seoul",
		 *       "country": "Korea, Republic of",
		 *       "unlocode": "KR SEL",
		 *       "coordinates_latitude": 35.2207,
		 *       "coordinates_longitude": 128.8264,
		 *       "name_of_the_authorized_representative": "lca_manager",
		 *       "email": "hello@example.com",
		 *       "telephone": "010-1234-5678"
		 *     },
		 *     "verifier_of_the_report": {
		 *       "company_name": "Authorization Company",
		 *       "street_number": "158-7, Golden root-ro, Juchon-myeon",
		 *       "city": "Gimhae-si",
		 *       "postcode": "50584",
		 *       "country": "Republic of Korea",
		 *       "name": "John Doe",
		 *       "email_address": "email@example.com",
		 *       "telephone_number": "010-1234-5678",
		 *       "fax": "442348",
		 *       "accreditation_member_state": "Representative",
		 *       "name_of_the_national_accreditation_body": "J.Y Yoman",
		 *       "registration_number_issued_by_the_accreditation_body": "3388543"
		 *     },
		 *     "aggregated_goods_categories_and_relevant_production_processes": {
		 *       "list_of_aggregated_goods_categories": [
		 *         {
		 *           "agc": "Cement"
		 *         },
		 *         {
		 *           "agc": "Crude steel",
		 *           "route1": "Basic oxygen steelmaking",
		 *           "route2": "Electric arc furnace"
		 *         },
		 *         {
		 *           "agc": "Ammonia",
		 *           "route1": "Haber-Bosch process with steam reforming of natural gas or biogas",
		 *           "route2": "Haber-Bosch process with gasification of coal or other fuels"
		 *         },
		 *         {
		 *           "agc": "Unwrought aluminium",
		 *           "route1": "Primary (electrolytic) smelting",
		 *           "route2": "Secondary melting (recycling)"
		 *         },
		 *         {
		 *           "agc": "Cement clinker"
		 *         },
		 *         {
		 *           "agc": "Pig iron",
		 *           "route1": "Blase furnace route",
		 *           "route2": "Smelting reduction"
		 *         }
		 *       ],
		 *       "relevant_production_processes": [
		 *         {
		 *           "production_process": "Cement",
		 *           "included_goods_categories_1": "Cement clinker",
		 *           "name": "시멘트제조공정"
		 *         },
		 *         {
		 *           "production_process": "Crude steel",
		 *           "included_goods_categories_1": "Pig iron",
		 *           "name": "선철제조공정"
		 *         },
		 *         {
		 *           "production_process": "Ammonia",
		 *           "included_goods_categories_1": "Only direct production",
		 *           "name": "암모니아제조공정"
		 *         },
		 *         {
		 *           "production_process": "Unwrought aluminium",
		 *           "included_goods_categories_1": "Only direct production",
		 *           "name": "알루미늄제조공정"
		 *         }
		 *       ]
		 *     },
		 *     "purchased_precursors": [
		 *       {
		 *         "production_process": "Cement clinker",
		 *         "country_code": "KR",
		 *         "name": "클링커 전구체"
		 *       },
		 *       {
		 *         "production_process": "Pig iron",
		 *         "country_code": "KR",
		 *         "route1": "Blase furnace route",
		 *         "route2": "Smelting reduction",
		 *         "name": "철광석 전구체"
		 *       }
		 *     ]
		 *   },
		 *   "b": {
		 *     "source_streams": [
		 *       {
		 *         "method": "Combustion",
		 *         "name": "연소배관 1",
		 *         "ad": 46833,
		 *         "ad_unit": "t",
		 *         "ncv": 4,
		 *         "ef": 0.5,
		 *         "ef_unit": "tCO2/t",
		 *         "oxf": 43.3,
		 *         "bioc": 0
		 *       },
		 *       {
		 *         "method": "Combustion",
		 *         "name": "물",
		 *         "ad": 4384,
		 *         "ad_unit": "t",
		 *         "ncv": 6.43,
		 *         "ef": 0.3,
		 *         "ef_unit": "tCO2/t",
		 *         "oxf": 45.3,
		 *         "bioc": 0
		 *       },
		 *       {
		 *         "method": "Combustion",
		 *         "name": "유기연료",
		 *         "ad": 6556,
		 *         "ad_unit": "1000Nm3",
		 *         "ncv": 4.45,
		 *         "ef": 0.64,
		 *         "ef_unit": "tCO2/1000Nm3",
		 *         "oxf": 1.2,
		 *         "bioc": 23.2
		 *       },
		 *       {
		 *         "method": "Combustion",
		 *         "name": "연소배관 2",
		 *         "ad": 4698,
		 *         "ad_unit": "t",
		 *         "ncv": 5.5,
		 *         "ef": 0.33,
		 *         "ef_unit": "tCO2/t",
		 *         "oxf": 7.5,
		 *         "bioc": 0
		 *       },
		 *       {
		 *         "method": "Combustion",
		 *         "name": "연소배관 3",
		 *         "ad": 5656,
		 *         "ad_unit": "t",
		 *         "ncv": 4.3,
		 *         "ef": 0.46,
		 *         "ef_unit": "tCO2/t",
		 *         "oxf": 0,
		 *         "bioc": 0
		 *       },
		 *       {
		 *         "method": "Combustion",
		 *         "name": "중수",
		 *         "ad": 654,
		 *         "ad_unit": "t",
		 *         "ncv": 3.5,
		 *         "ef": 0.12,
		 *         "ef_unit": "tCO2/t",
		 *         "oxf": 9.88,
		 *         "bioc": 0
		 *       },
		 *       {
		 *         "method": "Process emissions",
		 *         "name": "화석연료",
		 *         "ad": 767,
		 *         "ad_unit": "1000Nm3",
		 *         "ncv": 2.3,
		 *         "ef": 0.56,
		 *         "ef_unit": "tCO2/1000Nm3",
		 *         "convf": 2.4,
		 *         "bioc": 2.34
		 *       },
		 *       {
		 *         "method": "Process emissions",
		 *         "name": "공정배관 1",
		 *         "ad": 372794,
		 *         "ad_unit": "t",
		 *         "ncv": 7.11,
		 *         "ef": 0.31,
		 *         "ef_unit": "tCO2/t",
		 *         "convf": 2.11,
		 *         "bioc": 34.2
		 *       },
		 *       {
		 *         "method": "Process emissions",
		 *         "name": "공정배관 2",
		 *         "ad": 5365,
		 *         "ad_unit": "t",
		 *         "ncv": 6.22,
		 *         "ef": 0.45,
		 *         "ef_unit": "tCO2/t",
		 *         "convf": 77.4,
		 *         "bioc": 0
		 *       },
		 *       {
		 *         "method": "Mass Balance",
		 *         "name": "시맨트",
		 *         "ad": 556,
		 *         "ad_unit": "t",
		 *         "ncv": 74,
		 *         "carbon_content": "0.22",
		 *         "bioc": 45.3
		 *       }
		 *     ],
		 *     "pfc_emissions": [
		 *       {
		 *         "method": "Slope method",
		 *         "type_of_anode": "슬로프 1",
		 *         "ad": 345.34,
		 *         "a_frequency": 300,
		 *         "a_duration": 5,
		 *         "a_cf4": 0.34,
		 *         "b_aeo": 19,
		 *         "b_ce": 66,
		 *         "b_ovc": 0,
		 *         "c2f6": 0.14,
		 *         "collection_efficiency": 56
		 *       },
		 *       {
		 *         "method": "Slope method",
		 *         "type_of_anode": "냉방연료 1",
		 *         "ad": 35877,
		 *         "a_frequency": 233,
		 *         "a_duration": 33,
		 *         "a_cf4": 343,
		 *         "b_aeo": 0,
		 *         "b_ce": 0.1,
		 *         "b_ovc": 0.23,
		 *         "c2f6": 0.89,
		 *         "collection_efficiency": 19
		 *       }
		 *     ],
		 *     "emissions_sources": [
		 *       {
		 *         "name": "용광로",
		 *         "type_of_ghg": "CO2",
		 *         "biomass_fraction": 22,
		 *         "hourly_ghg_conc_average": 53.33,
		 *         "hours_operating": 3,
		 *         "flue_gas": 324
		 *       }
		 *     ]
		 *   },
		 *   "c": {
		 *     "fuel_balance": {
		 *       "total_fuel_input": 0,
		 *       "direct_fuel_for_cbam_goods": 0,
		 *       "fuel_for_electricity": 56,
		 *       "direct_fuel_for_non_cbam_goods": 0
		 *     },
		 *     "greenhouse_gas_emissions_balance": {
		 *       "ghg_balance_by_type_of_ghg": {
		 *         "total_co2_emissions": 22,
		 *         "biomass_emissions": 0,
		 *         "total_n2o_emissions": 0,
		 *         "total_pfc_emissions": 0,
		 *         "total_direct_emissions": 0,
		 *         "total_indirect_emissions": 127556
		 *       },
		 *       "information_on_the_data_quality_and_quality_assurance": {
		 *         "general_information_on_data_quality": "Mostly measurements & analyses",
		 *         "information_on_quality_assurance": "Third-party verification"
		 *       }
		 *     }
		 *   },
		 *   "d": [
		 *     {
		 *       "total_production_level": [
		 *         4434
		 *       ],
		 *       "production_for_the_market": 3225,
		 *       "consumed_in_other_production_processes": [
		 *         10,
		 *         353,
		 *         13
		 *       ],
		 *       "consumed_in_non_cbam_goods": 833,
		 *       "calculation_of_the_attributed_emissions": {
		 *         "direm": 757,
		 *         "measurable_heat": {
		 *           "applicable": true,
		 *           "imported": {
		 *             "amount": 32,
		 *             "ef": 3
		 *           },
		 *           "exported": {
		 *             "amount": 3,
		 *             "ef": 45.6
		 *           }
		 *         },
		 *         "waste_gases": {
		 *           "applicable": true,
		 *           "imported": 6,
		 *           "exported": 23
		 *         },
		 *         "indirect_emissions_from_electricity_consumption": {
		 *           "amount": 23,
		 *           "ef": 4.566,
		 *           "source": "D.2.4"
		 *         },
		 *         "electricity_exported_from_the_production_process": {
		 *           "amount": 4,
		 *           "ef": 9.384
		 *         }
		 *       }
		 *     },
		 *     {
		 *       "total_production_level": [
		 *         20,
		 *         453,
		 *         5454,
		 *         343
		 *       ],
		 *       "production_for_the_market": 5000,
		 *       "consumed_in_other_production_processes": [
		 *         53,
		 *         1000,
		 *         183
		 *       ],
		 *       "consumed_in_non_cbam_goods": 34,
		 *       "calculation_of_the_attributed_emissions": {
		 *         "direm": 200,
		 *         "measurable_heat": {
		 *           "applicable": true,
		 *           "imported": {
		 *             "amount": 34,
		 *             "ef": 5.34
		 *           },
		 *           "exported": {
		 *             "amount": 75,
		 *             "ef": 45.54
		 *           }
		 *         },
		 *         "waste_gases": {
		 *           "applicable": true,
		 *           "imported": 36,
		 *           "exported": 6
		 *         },
		 *         "indirect_emissions_from_electricity_consumption": {
		 *           "amount": 45,
		 *           "ef": 45.3,
		 *           "source": "Mix"
		 *         },
		 *         "electricity_exported_from_the_production_process": {
		 *           "amount": 45,
		 *           "ef": 34.5
		 *         }
		 *       }
		 *     },
		 *     {
		 *       "total_production_level": [
		 *         54,
		 *         5454,
		 *         86,
		 *         474
		 *       ],
		 *       "production_for_the_market": 4900,
		 *       "consumed_in_other_production_processes": [
		 *         334,
		 *         264,
		 *         568
		 *       ],
		 *       "consumed_in_non_cbam_goods": 2,
		 *       "calculation_of_the_attributed_emissions": {
		 *         "direm": 4898,
		 *         "measurable_heat": {
		 *           "applicable": true,
		 *           "imported": {
		 *             "amount": 7,
		 *             "ef": 4.5
		 *           },
		 *           "exported": {
		 *             "amount": 4,
		 *             "ef": 33.5
		 *           }
		 *         },
		 *         "waste_gases": {
		 *           "applicable": true,
		 *           "imported": 34,
		 *           "exported": 655
		 *         },
		 *         "indirect_emissions_from_electricity_consumption": {
		 *           "amount": 553,
		 *           "ef": 34.4,
		 *           "source": "Mix"
		 *         },
		 *         "electricity_exported_from_the_production_process": {
		 *           "amount": 5,
		 *           "ef": 34.3
		 *         }
		 *       }
		 *     },
		 *     {
		 *       "total_production_level": [
		 *         200,
		 *         30,
		 *         2
		 *       ],
		 *       "production_for_the_market": 232,
		 *       "consumed_in_other_production_processes": [],
		 *       "consumed_in_non_cbam_goods": 833,
		 *       "calculation_of_the_attributed_emissions": {
		 *         "direm": 34,
		 *         "measurable_heat": {
		 *           "applicable": false
		 *         },
		 *         "waste_gases": {
		 *           "applicable": true,
		 *           "imported": 23,
		 *           "exported": 8
		 *         },
		 *         "indirect_emissions_from_electricity_consumption": {
		 *           "amount": 242,
		 *           "ef": 232,
		 *           "source": "Mix"
		 *         },
		 *         "electricity_exported_from_the_production_process": {
		 *           "amount": 3,
		 *           "ef": 23
		 *         }
		 *       }
		 *     }
		 *   ],
		 *   "e": [
		 *     {
		 *       "total_purchased_levels": [
		 *         358
		 *       ],
		 *       "consumed_in_production_processes": [
		 *         76,
		 *         200,
		 *         37,
		 *         45
		 *       ],
		 *       "specific_embedded_emissions": {
		 *         "direct": {
		 *           "value": 11.07,
		 *           "source": "Measured"
		 *         },
		 *         "indirect": {
		 *           "value": 2,
		 *           "source": "D.2.4"
		 *         }
		 *       }
		 *     },
		 *     {
		 *       "total_purchased_levels": [
		 *         600,
		 *         57
		 *       ],
		 *       "consumed_in_production_processes": [
		 *         344,
		 *         219,
		 *         38,
		 *         56
		 *       ],
		 *       "specific_embedded_emissions": {
		 *         "direct": {
		 *           "value": 36.55,
		 *           "source": "Measured"
		 *         },
		 *         "indirect": {
		 *           "value": 22.1,
		 *           "source": "Mix"
		 *         }
		 *       }
		 *     }
		 *   ],
		 *   "f": {},
		 *   "s_production": [
		 *     {
		 *       "production_process": "시멘트제조공정",
		 *       "cn_code": 25232100,
		 *       "product_name": "가공 시멘트",
		 *       "clinker_factor": 56,
		 *       "form_of_carbon_price": "Emissions Trading System",
		 *       "share_of_total_embedded_emissions_covered_by_the_carbon_price": 34,
		 *       "currency": "USD",
		 *       "carbon_price": 55,
		 *       "form_of_rebate": "Free allocation",
		 *       "share_of_total_embedded_emissions_covered_by_the_rebate": 6,
		 *       "amount_of_rebate": 559
		 *     },
		 *     {
		 *       "production_process": "선철제조공정",
		 *       "cn_code": 7206,
		 *       "product_name": "선철",
		 *       "the_main_reducing_agent_of_the_precursor": "Coal or coke",
		 *       "p_mn": 45,
		 *       "p_cr": 11,
		 *       "p_nr": 0,
		 *       "p_other_alloys": 0,
		 *       "t_scrap_per_t_steel": 4,
		 *       "p_pre_consumer_scrap": 3.3,
		 *       "form_of_carbon_price": "Emissions Trading System",
		 *       "share_of_total_embedded_emissions_covered_by_the_carbon_price": 34,
		 *       "currency": "USD",
		 *       "carbon_price": 97,
		 *       "form_of_rebate": "Financial compensation",
		 *       "share_of_total_embedded_emissions_covered_by_the_rebate": 44,
		 *       "amount_of_rebate": 338.6
		 *     },
		 *     {
		 *       "production_process": "암모니아제조공정",
		 *       "cn_code": 2814,
		 *       "product_name": "화학암모니아",
		 *       "concentration": 0,
		 *       "form_of_carbon_price": "Tex or levy",
		 *       "share_of_total_embedded_emissions_covered_by_the_carbon_price": 56,
		 *       "currency": "USD",
		 *       "carbon_price": 43.5,
		 *       "form_of_rebate": "Tax deduction",
		 *       "share_of_total_embedded_emissions_covered_by_the_rebate": 84,
		 *       "amount_of_rebate": 36
		 *     },
		 *     {
		 *       "production_process": "알루미늄제조공정",
		 *       "cn_code": 7601,
		 *       "product_name": "샤크안테나 알루미늄 용질",
		 *       "p_pre_consumer_scrap": 0,
		 *       "t_scrap_per_t_aluminium": 11.55,
		 *       "p_non_aluminium_elements": 3,
		 *       "form_of_carbon_price": "Combination",
		 *       "share_of_total_embedded_emissions_covered_by_the_carbon_price": 34,
		 *       "currency": "USD",
		 *       "carbon_price": 228,
		 *       "form_of_rebate": "Combination",
		 *       "share_of_total_embedded_emissions_covered_by_the_rebate": 79,
		 *       "amount_of_rebate": 44
		 *     }
		 *   ]
		 * }
		 */
		cbam: {
			a?: {
				/**
				 * @description CBAM 보고 기간
				 * @example {
				 *   "start": "2024-01-01T00:00:00.000Z",
				 *   "end": "2024-12-31T00:00:00.000Z"
				 * }
				 */
				reporting_period?: {
					/**
					 * Format: date
					 * @description CBAM 보고 기간의 시작일
					 */
					start?: string
					/**
					 * Format: date
					 * @description CBAM 보고 기간의 종료일
					 */
					end?: string
				}
				/** @description 설비 기본 정보 */
				about_the_installation?: {
					/**
					 * @description 설비 명칭
					 * @example 공장 A
					 */
					name_of_the_installation?: string
					/**
					 * @description 설비 영문 명칭
					 * @example factory A
					 */
					name_of_the_installation_english: string
					/** @description 주소 */
					street_number: string
					economic_activity?: string
					/** @description 우편번호 */
					post_code: number
					/** @description 우편함 */
					po_box: string
					/**
					 * @description 설립 도시
					 * @example Seoul
					 */
					city: string
					country: string
					/**
					 * @description UN/LO 지역 코드
					 * @example KR SEL
					 */
					unlocode: string
					/** @description 설비의 좌표 */
					coordinates_latitude: number
					/** @description 설비의 좌표 */
					coordinates_longitude: number
					/** @description 담당자 */
					name_of_the_authorized_representative?: string
					/**
					 * Format: email
					 * @description 이메일
					 */
					email?: string
					/**
					 * @description 연락처
					 * @example 010-1234-5678
					 */
					telephone?: string
				}
				/** @description CBAM 보고서 인증기관 정보 */
				verifier_of_the_report?: {
					/** @description 사명 */
					company_name?: string
					/** @description 주소 */
					street_number?: string
					/** @description 도시 */
					city?: string
					/** @description 우편번호 */
					postcode?: string
					/** @description 국가 */
					country?: string
					/** @description 담당자 이름 */
					name?: string
					/**
					 * Format: email
					 * @description 이메일
					 */
					email_address?: string
					/** @description 연락처 */
					telephone_number?: string
					/** @description 팩스 */
					fax?: string
					accreditation_member_state?: string
					name_of_the_national_accreditation_body?: string
					registration_number_issued_by_the_accreditation_body?: string
				}
				aggregated_goods_categories_and_relevant_production_processes?: {
					/** @description 관련된 집약 상품 카테고리 종류 */
					list_of_aggregated_goods_categories?: {
						agc: components['schemas']['AGC']
						route1?: components['schemas']['Route']
						route2?: components['schemas']['Route']
						route3?: components['schemas']['Route']
						route4?: components['schemas']['Route']
						route5?: components['schemas']['Route']
						route6?: components['schemas']['Route']
					}[]
					relevant_production_processes?: {
						production_process?: components['schemas']['AGC']
						included_goods_categories_1?: components['schemas']['AGC']
						included_goods_categories_2?: components['schemas']['AGC']
						included_goods_categories_3?: components['schemas']['AGC']
						included_goods_categories_4?: components['schemas']['AGC']
						included_goods_categories_5?: components['schemas']['AGC']
						included_goods_categories_6?: components['schemas']['AGC']
						name?: string
					}[]
				}
				purchased_precursors?: {
					production_process?: components['schemas']['AGC']
					country_code?: components['schemas']['CountryCode']
					route1?: components['schemas']['Route']
					route2?: components['schemas']['Route']
					route3?: components['schemas']['Route']
					route4?: components['schemas']['Route']
					route5?: components['schemas']['Route']
					name?: components['schemas']['Route']
				}[]
			}
			b?: {
				source_streams?: {
					/** @enum {string} */
					method?:
						| 'Combustion'
						| 'Process emissions'
						| 'Mass Balance'
					name?: string
					ad?: number
					/** @enum {string} */
					ad_unit?: 't' | '1000Nm3'
					ncv?: number
					ef?: number
					/** @enum {string} */
					ef_unit?:
						| 'tCO2/TJ'
						| 'tCO2/t'
						| 'tCO2/1000Nm3'
					carbon_content?: number
					oxf?: number
					convf?: number
					bioc?: number
				}[]
				pfc_emissions?: {
					/** @enum {string} */
					method?:
						| 'Slope method'
						| 'Overvoltage method'
					type_of_anode?: string
					ad?: number
					a_frequency?: number
					a_duration?: number
					a_cf4?: number
					b_aeo?: number
					b_ce?: number
					b_ovc?: number
					c2f6?: number
					collection_efficiency?: number
				}[]
				emissions_sources?: {
					name?: number
					/** @enum {string} */
					type_of_ghg?: 'CO2' | 'N2O'
					biomass_fraction?: number
					hourly_ghg_conc_average?: number
					hours_operating?: number
					flue_gas?: number
				}[]
			}
			c?: {
				fuel_balance?: {
					total_fuel_input?: number
					direct_fuel_for_cbam_goods?: number
					fuel_for_electricity?: number
					direct_fuel_for_non_cbam_goods?: number
				}
				greenhouse_gas_emissions_balance?: {
					/** @description 온실가스 균형 정보 */
					ghg_balance_by_type_of_ghg?: {
						/** @description 총 CO2 배출량 */
						total_co2_emissions?: number
						/** @description 총 바이오매스 배출량 */
						biomass_emissions?: number
						/** @description 총 N20 배출량 */
						total_n2o_emissions?: number
						/** @description 총 PFC 배출량 */
						total_pfc_emissions?: number
						/** @description 총 직접배출량 */
						total_direct_emissions?: number
						/** @description 총 간접배출량 */
						total_indirect_emissions: number
					}
					information_on_the_data_quality_and_quality_assurance?: {
						/** @enum {string} */
						general_information_on_data_quality?:
							| 'Mostly measurements & analyses'
							| 'Mostly measurements & national standard factors for e.g. the emission factor'
							| 'Mostly measurements & sector-specific standard factors for e.g. the emission factor'
							| 'Mostly measurements & international standard factors for e.g. the emission factor'
							| 'Mostly default values provided by the European Commission'
						/** @enum {string} */
						justification_for_use_of_default_values?:
							| 'Unreasonable costs for more accurate monitoring'
							| 'Data gaps'
							| 'Other'
						/** @enum {string} */
						information_on_quality_assurance?:
							| 'Third-party verification'
							| 'Internal audits'
							| 'Four eyes principle'
							| 'None'
					}
				}
			}
			d?: {
				/** @description 각 제조 경로별로 생산된 양 */
				total_production_level?: number[]
				production_for_the_market?: number
				/** @description 각 제조 공정에서 소비된 양 */
				consumed_in_other_production_processes?: number[]
				consumed_in_non_cbam_goods?: number
				/** @description 귀속배출량 계산 */
				calculation_of_the_attributed_emissions?: {
					/** @description 직접배출량 */
					direm?: number
					/** @description 측정가능한 열 */
					measurable_heat?: {
						applicable?: boolean
						/** @description 수입된 열 */
						imported: {
							/** @description 수입된 양 */
							amount: number
							/** @description 배출계수 */
							ef: number
						}
						/** @description 추출된 열 */
						exported: {
							/** @description 수출된 양 */
							amount: number
							/** @description 배출계수 */
							ef: number
						}
					}
					/** @description 폐가스 */
					waste_gases?: {
						applicable?: boolean
						/** @description 수입된 폐가스 */
						imported: number
						/** @description 수출된 폐가스 */
						exported: number
					}
					/** @description 수입된 전력 */
					indirect_emissions_from_electricity_consumption?: {
						/** @description 수입된 양 (MWh) */
						amount: number
						/** @description 배출계수 */
						ef: number
						/**
						 * @description 배출계수 출처
						 * @enum {string}
						 */
						source:
							| 'D.2.1'
							| 'D.2.2'
							| 'D.2.3'
							| 'D.2.4'
							| 'Mix'
					}
					/** @description 수출된 전력 (간접배출량) */
					electricity_exported_from_the_production_process?: {
						/** @description 수출된 양 (MWh) */
						amount: number
						/** @description 배출계수 */
						ef: number
					}
				}
			}[]
			e?: {
				total_purchased_levels?: number[]
				consumed_in_production_processes?: number[]
				/** @description 특정내재배출량 정보 */
				specific_embedded_emissions?: {
					/** @description 특정직접내재배출량 */
					direct: {
						/** @description 내재배출량 값 (tCO2e/t) */
						value: number
						/**
						 * @description 배출량 출처
						 * @enum {string}
						 */
						source: 'Measured' | 'Default'
					}
					/** @description 특정간접내재배출량 */
					indirect: {
						/** @description 내재배출량 값 (tCO2e/t) */
						value: number
						/**
						 * @description 배출량 출처
						 * @enum {string}
						 */
						source:
							| 'D.2.1'
							| 'D.2.2'
							| 'D.2.3'
							| 'D.2.4'
							| 'Mix'
					}
					/**
					 * @description 기본수치를 적용한 이유
					 * @enum {string}
					 */
					justification:
						| 'Unreasonable costs for more accurate monitoring'
						| 'Data gaps'
						| 'Other'
				}
			}[]
			f?: Record<string, never>
			s_production?: {
				production_process?: string
				cn_code?: number
				product_name?: string
				/** @enum {string} */
				the_main_reducing_agent_of_the_precursor?:
					| 'Coal or coke'
					| 'Natural gas'
					| 'Biogas'
					| 'Hydrogen'
				steel_mill_identification_number?: number
				p_mn?: number
				p_cr?: number
				p_nr?: number
				p_other_alloys?: number
				p_carbon?: number
				t_scrap_per_t_steel?: number
				p_other_materials?: number
				p_pre_consumer_scrap?: number
				t_scrap_per_t_aluminium?: number
				p_non_aluminium_elements?: number
				clinker_factor?: number
				concentration?: number
				p_nitric_acid?: number
				p_urea?: number
				p_n_contained?: number
				p_n_as_nitrate?: number
				p_n_as_urea?: number
				p_n_in_other_forms?: number
				/** @enum {string} */
				form_of_carbon_price?:
					| 'Emissions Trading System'
					| 'Tax or levy'
					| 'Combination'
					| 'Other'
				share_of_total_embedded_emissions_covered_by_the_carbon_price?: number
				currency?: components['schemas']['Currency']
				carbon_price?: number
				/** @enum {string} */
				form_of_rebate?:
					| 'Free allocation'
					| 'Financial compensation'
					| 'Tax deduction'
					| 'Combination'
					| 'Other'
				share_of_total_embedded_emissions_covered_by_the_rebate?: number
				amount_of_rebate?: number
			}[]
		}
		/**
		 * @description 집약 상품 카테고리
		 * @enum {string}
		 */
		AGC:
			| 'Cement'
			| 'Cement clinker'
			| 'Calcined clays'
			| 'Aluminous cement'
			| 'Iron or steel products'
			| 'Crude steel'
			| 'Direct reduced iron'
			| 'Pig iron'
			| 'Alloys'
			| 'Sintered Ore'
			| 'Hydrogen'
			| 'Ammonia'
			| 'Nitric acid'
			| 'Urea'
			| 'Mixed fertilizers'
			| 'Aluminium products'
			| 'Unwrought aluminium'
			| 'Electricity'
		/**
		 * @description 생산 경로
		 * @enum {string}
		 */
		Route: 'Basic oxygen steelmaking'
		/**
		 * @description 국가 코드
		 * @example KR
		 * @enum {string}
		 */
		CountryCode:
			| 'AD'
			| 'AE'
			| 'AF'
			| 'AG'
			| 'AI'
			| 'AL'
			| 'AM'
			| 'AN'
			| 'AO'
			| 'AQ'
			| 'AR'
			| 'AS'
			| 'AT'
			| 'AU'
			| 'AW'
			| 'AX'
			| 'AZ'
			| 'BA'
			| 'BB'
			| 'BD'
			| 'BE'
			| 'BF'
			| 'BG'
			| 'BH'
			| 'BI'
			| 'BJ'
			| 'BL'
			| 'BM'
			| 'BN'
			| 'BO'
			| 'BQ'
			| 'BR'
			| 'BS'
			| 'BT'
			| 'BV'
			| 'BW'
			| 'BY'
			| 'BZ'
			| 'CA'
			| 'CC'
			| 'CD'
			| 'CF'
			| 'CG'
			| 'CH'
			| 'CI'
			| 'CK'
			| 'CL'
			| 'CM'
			| 'CN'
			| 'CO'
			| 'CR'
			| 'CU'
			| 'CV'
			| 'CW'
			| 'CX'
			| 'CY'
			| 'CZ'
			| 'DE'
			| 'DJ'
			| 'DK'
			| 'DM'
			| 'DO'
			| 'DZ'
			| 'EC'
			| 'EE'
			| 'EG'
			| 'EH'
			| 'ER'
			| 'ES'
			| 'ET'
			| 'EU'
			| 'FI'
			| 'FJ'
			| 'FK'
			| 'FM'
			| 'FO'
			| 'FR'
			| 'GA'
			| 'GB'
			| 'GD'
			| 'GE'
			| 'GF'
			| 'GG'
			| 'GH'
			| 'GI'
			| 'GL'
			| 'GM'
			| 'GN'
			| 'GP'
			| 'GQ'
			| 'GR'
			| 'GS'
			| 'GT'
			| 'GU'
			| 'GW'
			| 'GY'
			| 'HK'
			| 'HM'
			| 'HN'
			| 'HR'
			| 'HT'
			| 'HU'
			| 'ID'
			| 'IE'
			| 'IL'
			| 'IM'
			| 'IN'
			| 'IO'
			| 'IQ'
			| 'IR'
			| 'IS'
			| 'IT'
			| 'JE'
			| 'JM'
			| 'JO'
			| 'JP'
			| 'KE'
			| 'KG'
			| 'KH'
			| 'KI'
			| 'KM'
			| 'KN'
			| 'KP'
			| 'KR'
			| 'KW'
			| 'KY'
			| 'KZ'
			| 'LA'
			| 'LB'
			| 'LC'
			| 'LI'
			| 'LK'
			| 'LR'
			| 'LS'
			| 'LT'
			| 'LU'
			| 'LV'
			| 'LY'
			| 'MA'
			| 'MC'
			| 'MD'
			| 'ME'
			| 'MF'
			| 'MG'
			| 'MH'
			| 'MK'
			| 'ML'
			| 'MM'
			| 'MN'
			| 'MO'
			| 'MP'
			| 'MQ'
			| 'MR'
			| 'MS'
			| 'MT'
			| 'MU'
			| 'MV'
			| 'MW'
			| 'MX'
			| 'MY'
			| 'MZ'
			| 'NA'
			| 'NC'
			| 'NE'
			| 'NF'
			| 'NG'
			| 'NI'
			| 'NL'
			| 'NO'
			| 'NP'
			| 'NR'
			| 'NU'
			| 'NZ'
			| 'OM'
			| 'PA'
			| 'PE'
			| 'PF'
			| 'PG'
			| 'PH'
			| 'PK'
			| 'PL'
			| 'PM'
			| 'PN'
			| 'PR'
			| 'PS'
			| 'PT'
			| 'PW'
			| 'PY'
			| 'QA'
			| 'QP'
			| 'RE'
			| 'RO'
			| 'RS'
			| 'RU'
			| 'RW'
			| 'SA'
			| 'SB'
			| 'SC'
			| 'SD'
			| 'SE'
			| 'SG'
			| 'SH'
			| 'SI'
			| 'SJ'
			| 'SK'
			| 'SL'
			| 'SM'
			| 'SN'
			| 'SO'
			| 'SR'
			| 'SS'
			| 'ST'
			| 'SV'
			| 'SX'
			| 'SY'
			| 'SZ'
			| 'TC'
			| 'TD'
			| 'TF'
			| 'TG'
			| 'TH'
			| 'TJ'
			| 'TK'
			| 'TL'
			| 'TM'
			| 'TN'
			| 'TO'
			| 'TP'
			| 'TR'
			| 'TT'
			| 'TV'
			| 'TW'
			| 'TZ'
			| 'UA'
			| 'UG'
			| 'UM'
			| 'US'
			| 'UY'
			| 'UZ'
			| 'VA'
			| 'VC'
			| 'VE'
			| 'VG'
			| 'VI'
			| 'VN'
			| 'VU'
			| 'WF'
			| 'WS'
			| 'XA'
			| 'XC'
			| 'XI'
			| 'XK'
			| 'XL'
			| 'XM'
			| 'XO'
			| 'XP'
			| 'XR'
			| 'XS'
			| 'XZ'
			| 'YE'
			| 'YT'
			| 'YU'
			| 'ZA'
			| 'ZM'
			| 'ZR'
			| 'ZW'
		/**
		 * @description 화폐
		 * @example USD
		 * @enum {string}
		 */
		Currency:
			| 'AED'
			| 'AFN'
			| 'ALL'
			| 'AMD'
			| 'ANG'
			| 'AOA'
			| 'ARS'
			| 'AUD'
			| 'AWG'
			| 'AZN'
			| 'USD'
	}
	responses: never
	parameters: never
	requestBodies: never
	headers: never
	pathItems: never
}

export type $defs = Record<string, never>

export type external = Record<string, never>

export interface operations {
	/** Excel 파일 생성 요청 */
	generateExcel: {
		/** @description aaa */
		requestBody: {
			content: {
				'application/json': components['schemas']['cbam']
			}
		}
		responses: {
			/** @description 생성된 Excel 파일 */
			200: {
				content: {
					'application/vnd.ms-excel': string
				}
			}
			/** @description 생성 실패 */
			400: {
				content: never
			}
		}
	}
}
